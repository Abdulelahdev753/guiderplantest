"use client";

import { useState } from "react";
import Image from "next/image";

type Lang = "en" | "ar";

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
}

const navLinks = {
  en: [
    { label: "Products", href: "#products" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "About Us", href: "#about" },
  ],
  ar: [
    { label: "المنتجات", href: "#products" },
    { label: "حالات الاستخدام", href: "#use-cases" },
    { label: "من نحن", href: "#about" },
  ],
};

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1100px] px-4">
      <div className="flex items-center justify-between px-5 sm:px-6 py-3 rounded-full bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] shadow-[0_0_30px_rgba(0,0,0,0.3)]">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <Image src="/images/logo.svg" alt="GuiderPlan logo" width={32} height={32} className="w-8 h-8" />
          <span className="text-white font-semibold text-lg tracking-tight">
            GuiderPlan
          </span>
        </a>

        {/* Center Navigation — desktop */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks[lang].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[13px] text-white/50 hover:text-white/90 transition-colors duration-200 rounded-full hover:bg-white/[0.06]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-white/[0.08] hover:border-white/[0.18] bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200 cursor-pointer"
            aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
          >
            <span className={lang === "en" ? "text-white" : "text-white/35"}>
              EN
            </span>
            <span className="text-white/15">|</span>
            <span className={lang === "ar" ? "text-white" : "text-white/35"}>
              AR
            </span>
          </button>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 rounded-full hover:bg-white/[0.06] transition-colors duration-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-4 h-[1.5px] bg-white/70 rounded-full transition-all duration-300 ${
                mobileOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] bg-white/70 rounded-full mt-[4.5px] transition-all duration-300 ${
                mobileOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-80 opacity-100 mt-2.5" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] shadow-[0_0_30px_rgba(0,0,0,0.3)] px-5 py-4 flex flex-col gap-1">
          {navLinks[lang].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2.5 text-[14px] text-white/55 hover:text-white/90 transition-colors duration-200 rounded-xl hover:bg-white/[0.06]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
