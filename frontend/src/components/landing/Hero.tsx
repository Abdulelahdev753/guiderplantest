"use client";

import Image from "next/image";

type Lang = "en" | "ar";

interface HeroProps {
  lang: Lang;
}

const content = {
  en: {
    announcement: "Trusted travel PDF guides",
    announcementCta: "Read more \u2192",
    headline1: "Travel Smarter",
    headline2: "with Trusted PDF Guides",
    subtext:
      "High-quality, curated PDF guides built for travelers\u2014clear routes, maps, must-do spots, and time-saving plans.",
    primaryCta: "Browse Guides",
    secondaryCta: "How it works",
  },
  ar: {
    announcement: "\u0623\u062f\u0644\u0629 \u0633\u0641\u0631 \u0645\u0648\u062b\u0648\u0642\u0629",
    announcementCta: "\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064a\u062f \u2192",
    headline1: "\u0633\u0627\u0641\u0631 \u0628\u0630\u0643\u0627\u0621",
    headline2: "\u0645\u0639 \u0623\u062f\u0644\u0629 PDF \u0645\u0648\u062b\u0648\u0642\u0629",
    subtext:
      "\u0623\u062f\u0644\u0629 \u0633\u0641\u0631 \u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u062c\u0648\u062f\u0629 \u0645\u0635\u0645\u0645\u0629 \u0644\u0644\u0645\u0633\u0627\u0641\u0631\u064a\u0646 \u2014 \u0645\u0633\u0627\u0631\u0627\u062a \u0648\u0627\u0636\u062d\u0629\u060c \u062e\u0631\u0627\u0626\u0637\u060c \u0623\u0647\u0645 \u0627\u0644\u0623\u0645\u0627\u0643\u0646\u060c \u0648\u062e\u0637\u0637 \u062a\u0648\u0641\u0631 \u0648\u0642\u062a\u0643.",
    primaryCta: "\u062a\u0635\u0641\u062d \u0627\u0644\u0623\u062f\u0644\u0629",
    secondaryCta: "\u0643\u064a\u0641 \u062a\u0639\u0645\u0644 \u0627\u0644\u0645\u0646\u0635\u0629",
  },
} as const;

export default function Hero({ lang }: HeroProps) {
  const t = content[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={90}
      />

      {/* Dark gradient overlay — fades from top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/70" />

      {/* Vignette — dark edges for cinematic depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Orange glow — soft ambient light from bottom center */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-orange-500/[0.12] blur-[160px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-6 pt-36 pb-24">
        {/* Announcement Pill */}
        <a
          href="#"
          className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-300 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400/80" />
          <span className="text-[13px] text-white/55">{t.announcement}</span>
          <span className="text-[13px] text-orange-400/90 font-medium group-hover:text-orange-300 transition-colors">
            {t.announcementCta}
          </span>
        </a>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-7">
          {t.headline1}
          <br />
          <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            {t.headline2}
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-white/45 max-w-xl mx-auto mb-12 leading-relaxed">
          {t.subtext}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white text-zinc-900 text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.08),0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15),0_4px_16px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            {t.primaryCta}
          </a>
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white/75 hover:text-white rounded-full border border-white/[0.1] hover:border-white/[0.22] hover:bg-white/[0.04] active:scale-[0.98] transition-all duration-200"
          >
            {t.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
