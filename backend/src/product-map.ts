export const PRODUCT_PDF_MAP: Record<string, string> = {
  london: "London.pdf",
  barcelona: "Barcelona.pdf",
  amsterdam: "Amsterdam.pdf",
  "north-italy": "Italy.pdf",
  "economy-package": "EconomyPackage.pdf",
  prague: "Prague.pdf",
};

export const SUPABASE_BUCKET = "theguides";

export function getPdfFilename(productId: string): string | null {
  return PRODUCT_PDF_MAP[productId] ?? null;
}

export function getStreampayProductId(productId: string): string | null {
  if (!PRODUCT_PDF_MAP[productId]) return null;
  if (productId === "economy-package") {
    return process.env.STREAMPAY_PRODUCT_ID_ECONOMY ?? null;
  }
  return process.env.STREAMPAY_PRODUCT_ID_STANDARD ?? null;
}
