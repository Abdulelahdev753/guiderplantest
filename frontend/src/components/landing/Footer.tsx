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
  ar: "\u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A: 7053618372",
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
          <div className="flex flex-col gap-3">
            <p
              className={`text-sm text-white/30 ${
                lang === "ar" ? "font-[family-name:var(--font-cairo)]" : ""
              }`}
            >
              {tagline[lang]}
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

          <div className="flex items-center gap-5">
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/966581939806"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/[0.08] transition-all duration-200"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/guider_adventure105?igsh=MW5udWdrcnJ5aDdzNA%253D%253D&utm_source=qr%0A"
                target="_blank"
                rel="noopener noreferrer"
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
                href="https://www.tiktok.com/@travel.guider1?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
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

          {/* Payment method logos */}
          <div className="flex items-center justify-center gap-6">
            {[
              { src: "Stcpay.svg", alt: "STC Pay", className: "w-10 h-6" },
              { src: "applepay.svg", alt: "Apple Pay", className: "w-14 h-8" },
              { src: "Visa.svg", alt: "Visa", className: "w-10 h-6" },
              { src: "mada.svg", alt: "mada", className: "w-14 h-8" },
              { src: "mastercard.svg", alt: "Mastercard", className: "w-10 h-6" },
            ].map((logo) => (
              <Image
                key={logo.alt}
                src={`${basePath}/images/${logo.src}`}
                alt={logo.alt}
                width={56}
                height={32}
                className={`${logo.className} opacity-40 brightness-0 invert`}
              />
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
