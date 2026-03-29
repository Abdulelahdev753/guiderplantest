import "dotenv/config";
import crypto from "crypto";
import path from "path";
import express, { type Request, type Response } from "express";
import cors from "cors";
import { supabase } from "./supabase.js";
import { resend } from "./resend.js";
import { getPdfFilename, getStreampayProductId, SUPABASE_BUCKET } from "./product-map.js";

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5001;

const STREAMPAY_API_URL =
  "https://stream-app-service.streampay.sa/api/v2/payment_links";
const STREAMPAY_X_API_KEY = process.env.STREAMPAY_X_API_KEY!;
const STREAMPAY_WEBHOOK_PASSWORD = process.env.STREAMPAY_WEBHOOK_PASSWORD!;
const FRONTEND_URL = process.env.FRONTEND_URL || "https://guiderplan.com";

app.use(
  cors({
    origin: ["http://localhost:3000", "https://guiderplan.com", "https://www.guiderplan.com"],
  })
);
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Backend server is running" });
});

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

// Create a StreamPay payment link
app.post("/api/payment/create-link", async (req: Request, res: Response) => {
  try {
    const { productId, clientName, clientPhone } = req.body;

    if (!productId || typeof productId !== "string") {
      res.status(400).json({ error: "productId is required" });
      return;
    }

    if (!clientName || !clientPhone) {
      res.status(400).json({ error: "clientName and clientPhone are required" });
      return;
    }

    const pdfFile = getPdfFilename(productId);
    if (!pdfFile) {
      res.status(400).json({ error: "This guide is not yet available for purchase" });
      return;
    }

    // Generate unique download token
    const token = crypto.randomUUID();

    // Generate unique 12-digit serial number
    let serialNumber: string;
    while (true) {
      serialNumber = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join("");
      const { data: existing } = await supabase
        .from("purchases")
        .select("id")
        .eq("serial_number", serialNumber)
        .single();
      if (!existing) break;
    }

    // Insert pending purchase into Supabase
    const { error: dbError } = await supabase
      .from("purchases")
      .insert({
        token,
        product_id: productId,
        status: "pending",
        client_name: clientName,
        client_phone: clientPhone,
        serial_number: serialNumber,
      });

    if (dbError) {
      console.error("DB insert error:", dbError);
      res.status(500).json({ error: "Failed to create purchase record" });
      return;
    }

    // Resolve the correct StreamPay product ID for this product
    const streampayProductId = getStreampayProductId(productId);
    if (!streampayProductId) {
      console.error("No StreamPay product ID configured for:", productId);
      res.status(500).json({ error: "Payment configuration error" });
      return;
    }

    // Create StreamPay payment link
    const response = await fetch(STREAMPAY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": STREAMPAY_X_API_KEY,
      },
      body: JSON.stringify({
        name: "GuiderPlan Travel Guide",
        items: [{ product_id: streampayProductId }],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("StreamPay API error:", response.status, error);
      res.status(response.status).json({ error: "Failed to create payment link" });
      return;
    }

    const data = (await response.json()) as { id: string; url: string };
    console.log("StreamPay payment link created:", data);

    // Store the StreamPay link ID so webhook can correlate
    await supabase
      .from("purchases")
      .update({ streampay_link_id: data.id })
      .eq("token", token);

    res.json({ url: data.url, token });
  } catch (err) {
    console.error("Payment link creation failed:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// StreamPay webhook handler
app.post("/api/webhooks/streampay", async (req: Request, res: Response) => {
  const password = req.headers["x-webhook-password"] || req.body?.password;

  if (password !== STREAMPAY_WEBHOOK_PASSWORD) {
    console.warn("Webhook: invalid password");
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const event = req.body;
  console.log("StreamPay webhook received:", JSON.stringify(event, null, 2));

  if (event.event === "PAYMENT_SUCCEED" || event.type === "PAYMENT_SUCCEED") {
    const linkId =
      event.payment_link_id ??
      event.data?.payment_link_id ??
      event.id ??
      event.data?.id;

    if (linkId) {
      const { error } = await supabase
        .from("purchases")
        .update({ status: "completed", completed_at: new Date().toISOString() })
        .eq("streampay_link_id", String(linkId))
        .eq("status", "pending");

      if (error) {
        console.error("Failed to update purchase:", error);
      } else {
        console.log("Purchase fulfilled for link:", linkId);
      }
    } else {
      console.warn("Webhook PAYMENT_SUCCEED but no link ID found in payload");
    }
  }

  res.json({ received: true });
});

// Check download status (for frontend polling)
// If still pending, also checks StreamPay API to confirm payment
app.get("/api/download/status", async (req: Request, res: Response) => {
  const token = req.query.token as string;

  if (!token) {
    res.status(400).json({ error: "Token is required" });
    return;
  }

  const { data: purchase, error } = await supabase
    .from("purchases")
    .select("status, product_id, streampay_link_id, completed_at")
    .eq("token", token)
    .single();

  if (error || !purchase) {
    res.status(404).json({ error: "Invalid download link" });
    return;
  }

  // If still pending, check StreamPay API directly for payment confirmation
  if (purchase.status === "pending" && purchase.streampay_link_id) {
    try {
      const spRes = await fetch(
        `${STREAMPAY_API_URL}/${purchase.streampay_link_id}`,
        { headers: { "X-Api-Key": STREAMPAY_X_API_KEY } }
      );
      if (spRes.ok) {
        const spData = (await spRes.json()) as { amount_collected_in_smallest_unit: number };
        if (spData.amount_collected_in_smallest_unit > 0) {
          // Payment was collected -- mark as completed
          await supabase
            .from("purchases")
            .update({ status: "completed", completed_at: new Date().toISOString() })
            .eq("token", token);
          res.json({ status: "completed", productId: purchase.product_id });
          return;
        }
      }
    } catch (err) {
      console.error("StreamPay status check failed:", err);
    }
  }

  res.json({ status: purchase.status, productId: purchase.product_id });
});

// Download PDF (proxied from Supabase storage)
app.get("/api/download", async (req: Request, res: Response) => {
  const token = req.query.token as string;

  if (!token) {
    res.status(400).json({ error: "Token is required" });
    return;
  }

  const { data: purchase, error } = await supabase
    .from("purchases")
    .select("*")
    .eq("token", token)
    .single();

  if (error || !purchase) {
    res.status(404).json({ error: "Invalid or expired download link" });
    return;
  }

  if (purchase.status === "pending") {
    res.status(202).json({ status: "pending", message: "Payment is still being processed" });
    return;
  }

  if (purchase.status !== "completed") {
    res.status(410).json({ error: "This download link has expired" });
    return;
  }

  // Check 72-hour expiry
  if (purchase.completed_at) {
    const completedAt = new Date(purchase.completed_at);
    const hoursElapsed = (Date.now() - completedAt.getTime()) / (1000 * 60 * 60);
    if (hoursElapsed > 72) {
      await supabase
        .from("purchases")
        .update({ status: "expired" })
        .eq("token", token);
      res.status(410).json({ error: "This download link has expired" });
      return;
    }
  }

  const pdfFile = getPdfFilename(purchase.product_id);
  if (!pdfFile) {
    res.status(404).json({ error: "PDF not available for this product" });
    return;
  }

  // Download from Supabase private bucket and stream to client
  const { data: fileData, error: storageError } = await supabase.storage
    .from(SUPABASE_BUCKET)
    .download(pdfFile);

  if (storageError || !fileData) {
    console.error("Storage download error:", storageError);
    res.status(500).json({ error: "Failed to retrieve the guide" });
    return;
  }

  const buffer = Buffer.from(await fileData.arrayBuffer());

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="GuiderPlan-${purchase.product_id}.pdf"`
  );
  res.setHeader("Content-Length", buffer.length);
  res.send(buffer);
});

// Travel agency booking request
const BOOKING_NOTIFICATION_EMAIL = "Gaith.salama@gmail.com";

app.post("/api/booking/request", async (req: Request, res: Response) => {
  try {
    const { agencyName, agencyEmail, clientName, clientPhone, days, details } = req.body;

    // --- Validation ---
    if (!agencyName || typeof agencyName !== "string") {
      res.status(400).json({ error: "agencyName is required" });
      return;
    }
    if (!agencyEmail || typeof agencyEmail !== "string" || !agencyEmail.includes("@")) {
      res.status(400).json({ error: "Valid agencyEmail is required" });
      return;
    }
    if (!clientName || typeof clientName !== "string" || clientName.trim().length === 0) {
      res.status(400).json({ error: "clientName is required" });
      return;
    }
    if (!clientPhone || typeof clientPhone !== "string") {
      res.status(400).json({ error: "clientPhone is required" });
      return;
    }
    if (!days || typeof days !== "number" || days < 1 || days > 30) {
      res.status(400).json({ error: "days must be a number between 1 and 30" });
      return;
    }
    const sanitizedDetails = typeof details === "string" ? details.trim() : "";

    // --- Generate unique 12-digit request ID ---
    let requestOrderId: string;
    while (true) {
      requestOrderId = Array.from({ length: 12 }, () =>
        Math.floor(Math.random() * 10)
      ).join("");
      const { data: existing } = await supabase
        .from("travel_Agencies")
        .select("id")
        .eq("request_order_id", requestOrderId)
        .single();
      if (!existing) break;
    }

    // --- Send email via Resend ---
    const { error: emailError } = await resend.emails.send({
      from: "GuiderPlan <noreply@guiderplan.com>",
      to: [BOOKING_NOTIFICATION_EMAIL],
      subject: `New Travel Booking Request - #${requestOrderId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            New Travel Booking Request
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 8px; font-weight: bold; color: #374151; width: 40%;">Request ID</td>
              <td style="padding: 12px 8px; color: #111827; font-family: monospace; font-size: 16px;">#${requestOrderId}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
              <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Travel Agency</td>
              <td style="padding: 12px 8px; color: #111827;">${agencyName.trim()}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Agency Email</td>
              <td style="padding: 12px 8px; color: #111827;">${agencyEmail.trim()}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
              <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Client Name</td>
              <td style="padding: 12px 8px; color: #111827;">${clientName.trim()}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Client Phone</td>
              <td style="padding: 12px 8px; color: #111827;">${clientPhone.trim()}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
              <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Number of Days</td>
              <td style="padding: 12px 8px; color: #111827;">${days}</td>
            </tr>
            <tr>
              <td style="padding: 12px 8px; font-weight: bold; color: #374151; vertical-align: top;">Additional Details</td>
              <td style="padding: 12px 8px; color: #111827;">${sanitizedDetails || "None"}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
            This is an automated notification from GuiderPlan.
          </p>
        </div>
      `,
      text: `New Travel Booking Request\n\nRequest ID: #${requestOrderId}\nTravel Agency: ${agencyName.trim()}\nAgency Email: ${agencyEmail.trim()}\nClient Name: ${clientName.trim()}\nClient Phone: ${clientPhone.trim()}\nNumber of Days: ${days}\nAdditional Details: ${sanitizedDetails || "None"}`,
    });

    if (emailError) {
      console.error("Email send error:", emailError);
      res.status(500).json({ error: "Failed to send booking notification" });
      return;
    }

    // --- Insert into Supabase ---
    const { error: dbError } = await supabase
      .from("travel_Agencies")
      .insert({
        travel_agency_name: agencyName.trim(),
        travel_agency_email: agencyEmail.trim(),
        request_order_id: requestOrderId,
        client_name: clientName.trim(),
        client_phone_number: clientPhone.trim(),
        number_of_days: days,
        additional_details: sanitizedDetails,
      });

    if (dbError) {
      console.error("DB insert error:", dbError);
      res.status(500).json({ error: "Failed to save booking request" });
      return;
    }

    console.log("Booking request created:", requestOrderId);
    res.json({ success: true, requestId: requestOrderId });
  } catch (err) {
    console.error("Booking request failed:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Serve static frontend files
const frontendPath = path.join(__dirname, "../../frontend/out");
app.use(express.static(frontendPath));

// Catch-all: serve index.html for client-side routes (skip /api paths)
app.get("*", (req: Request, res: Response) => {
  if (!req.path.startsWith("/api")) {
    res.sendFile(path.join(frontendPath, "index.html"));
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
