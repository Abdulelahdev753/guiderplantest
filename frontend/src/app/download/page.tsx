"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

type Status = "loading" | "pending" | "ready" | "downloading" | "error" | "expired";

function DownloadContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");
  const [productId, setProductId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const checkStatus = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API_URL}/api/download/status?token=${token}`);
      if (res.status === 404) {
        setStatus("error");
        setErrorMsg("Invalid or expired download link.");
        return;
      }
      const data = await res.json();
      setProductId(data.productId || "");
      if (data.status === "completed") {
        setStatus("ready");
      } else if (data.status === "pending") {
        setStatus("pending");
      } else {
        setStatus("expired");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Unable to verify download link.");
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setErrorMsg("No download token provided.");
      return;
    }
    checkStatus();
  }, [token, checkStatus]);

  useEffect(() => {
    if (status === "pending") {
      intervalRef.current = setInterval(checkStatus, 3000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [status, checkStatus]);

  function handleDownload() {
    setStatus("downloading");
    window.location.href = `${API_URL}/api/download?token=${token}`;
    setTimeout(() => setStatus("ready"), 3000);
  }

  const productNames: Record<string, string> = {
    london: "London",
    barcelona: "Barcelona",
    amsterdam: "Amsterdam",
    "north-italy": "North Italy",
    prague: "Prague",
    "economy-package": "The Economy Package",
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Logo / Brand */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-white">GuiderPlan</h1>
          <p className="text-white/40 text-sm mt-1">Travel Guide Download</p>
        </div>

        <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-8">
          {/* Loading */}
          {status === "loading" && (
            <>
              <div className="w-10 h-10 border-2 border-white/20 border-t-orange-500 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-white/60">Verifying your download link...</p>
            </>
          )}

          {/* Pending payment */}
          {status === "pending" && (
            <>
              <div className="w-10 h-10 border-2 border-white/20 border-t-orange-500 rounded-full animate-spin mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">
                Waiting for Payment
              </h2>
              <p className="text-white/50 text-sm">
                Complete your payment in the other tab. This page will update
                automatically once your payment is confirmed.
              </p>
            </>
          )}

          {/* Ready to download */}
          {(status === "ready" || status === "downloading") && (
            <>
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Payment Confirmed!
              </h2>
              <p className="text-white/50 text-sm mb-6">
                Your{" "}
                <span className="text-white font-medium">
                  {productNames[productId] || productId}
                </span>{" "}
                travel guide is ready.
              </p>
              <button
                onClick={handleDownload}
                disabled={status === "downloading"}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-medium py-3 px-6 rounded-full transition-colors"
              >
                {status === "downloading"
                  ? "Downloading..."
                  : "Download Your Guide"}
              </button>
            </>
          )}

          {/* Error */}
          {status === "error" && (
            <>
              <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Something Went Wrong
              </h2>
              <p className="text-white/50 text-sm">{errorMsg}</p>
            </>
          )}

          {/* Expired */}
          {status === "expired" && (
            <>
              <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Link Expired
              </h2>
              <p className="text-white/50 text-sm">
                This download link has expired. Please contact support if you
                need access to your guide.
              </p>
            </>
          )}
        </div>

        <p className="text-white/20 text-xs mt-6">
          &copy; {new Date().getFullYear()} GuiderPlan. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-white/20 border-t-orange-500 rounded-full animate-spin" />
        </div>
      }
    >
      <DownloadContent />
    </Suspense>
  );
}
