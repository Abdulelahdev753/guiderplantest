"use client";

import type { Lang } from "@/types/lang";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface Props {
  lang: Lang;
  onHomePage?: boolean;
}

const navLinks = [
  { en: "Products", ar: "المنتجات", href: "#products" },
  { en: "Use Cases", ar: "حالات الاستخدام", href: "#use-cases" },
  { en: "Travel Agencies", ar: "وكالات السفر", href: `${basePath}/travel-agencies` },
  { en: "About Us", ar: "من نحن", href: "#about" },
];

const tagline = {
  en: "Your trusted travel companion",
  ar: "رفيقك الموثوق في السفر",
};

const copyright = {
  en: "\u00a9 2026 GuiderPlan. All rights reserved.",
  ar: "\u00a9 2026 GuiderPlan. جميع الحقوق محفوظة.",
};

const commercialReg = {
  en: "CR: 7053618372",
  ar: "السجل التجاري: ‭7053618372‬",
};

export default function Footer({ lang, onHomePage = true }: Props) {
  return (
    <footer className="relative bg-white/[0.02] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top row: Logo + Nav links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          <a href={onHomePage ? "#" : `${basePath}/`} className="flex items-center gap-2.5">
            <Image
              src={`${basePath}/images/logo.svg`}
              alt="GuiderPlan logo"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <span className="text-white font-semibold text-lg tracking-tight">
              GuiderPlan
            </span>
          </a>

          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const href = link.href.startsWith("#") && !onHomePage
                ? `${basePath}/${link.href}`
                : link.href;
              return (
                <a
                  key={link.href}
                  href={href}
                  className="px-3.5 py-1.5 text-[13px] text-white/40 hover:text-white/80 transition-colors duration-200 rounded-full hover:bg-white/[0.05]"
                >
                  {link[lang]}
                </a>
              );
            })}
          </div>
        </div>

        {/* Middle row: Tagline + Contact & Social */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          <p
            className={`text-sm text-white/30 ${
              lang === "ar" ? "font-[family-name:var(--font-cairo)]" : ""
            }`}
          >
            {tagline[lang]}
          </p>

          <div className="flex items-center gap-5">
            <a
              href="mailto:support@guiderplan.com"
              className="text-[13px] text-white/35 hover:text-white/70 transition-colors duration-200"
            >
              support@guiderplan.com
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {/* X (Twitter) */}
              <a
                href="#"
                aria-label="X"
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/[0.08] transition-all duration-200"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/[0.08] transition-all duration-200"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/[0.08] transition-all duration-200"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row: Copyright + Commercial Registration */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col gap-4">
          <p
            dir={lang === "ar" ? "rtl" : undefined}
            className={`text-xs text-white/20 ${
              lang === "ar" ? "font-[family-name:var(--font-cairo)] text-end" : ""
            }`}
          >
            {copyright[lang]}
          </p>

          <div
            dir={lang === "ar" ? "rtl" : undefined}
            className={`flex items-center gap-2.5 ${
              lang === "ar" ? "justify-start" : ""
            }`}
          >
            <Image
              src={`${basePath}/images/MOC_Logo.svg`}
              alt="Ministry of Commerce"
              width={20}
              height={20}
              className="w-7 h-7 opacity-25"
            />
            <span
              className={`text-xs text-white/20 tracking-wide ${
                lang === "ar" ? "font-[family-name:var(--font-cairo)]" : ""
              }`}
            >
              {commercialReg[lang]}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
