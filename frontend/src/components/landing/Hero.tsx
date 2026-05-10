"use client";

import Image from "next/image";

type Lang = "en" | "ar";

interface HeroProps {
  lang: Lang;
  onOpenAgencyModal: () => void;
}

const content = {
  en: {
    announcement: "Trusted travel PDF guides",
    announcementCta: "Carefully designed",
    headline1:
      "Complete travel programs and global bookings at competitive prices, in partnership with Nujoom Al-Safar Travel Agency.",
    subtext:
      "We arrange your trip from flights and hotels to visas and tours with ease ✈️ Our support team is with you anytime 📞",
    primaryCta: "Browse Guides",
    secondaryCta: "Book your trip now",
    whatsappCta: "Book or inquire — contact us.",
  },
  ar: {
    announcement: "أدلة سفر موثوقة",
    announcementCta: "مصممة بعناية",
    headline1:
      "برامج سياحية متكاملة وحجوزات عالمية بأسعار تنافسية، بالتعاون مع نجوم السفر والسياحة.",
    subtext:
      "نرتب لك الرحلة من الطيران والفنادق إلى التأشيرات والرحلات السياحية بكل سهولة ✈️ ومعاك فريق دعم متواصل يساعدك بأي وقت 📞",
    primaryCta: "تصفح الأدلة",
    secondaryCta: "احجز رحلتك الان",
    whatsappCta: "للحجز و الاستفسار تواصل معنا.",
  },
} as const;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero({ lang, onOpenAgencyModal }: HeroProps) {
  const t = content[lang];
  const arFont = lang === "ar" ? "font-[family-name:var(--font-cairo)]" : "";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={`${basePath}/images/background.png`}
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
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-white/45 max-w-xl mx-auto mb-12 leading-relaxed">
          {t.subtext}
        </p>

        {/* Row 1: Primary CTA (Browse Guides) */}
        <div className="flex justify-center w-full">
          <a
            href="#products"
            className={`w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white text-zinc-900 text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.08),0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15),0_4px_16px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ${arFont}`}
          >
            {t.primaryCta}
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xl mx-auto mt-8 mb-5 border-t border-white/[0.08]" />

        {/* Row 2: Secondary CTAs (Contact Agencies + WhatsApp) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={onOpenAgencyModal}
            className={`w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-black text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(249,115,22,0.25),0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4),0_4px_16px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer ${arFont}`}
          >
            {t.secondaryCta}
          </button>
          <a
            href="https://wa.me/966581939806"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#25D366] hover:bg-[#22c55e] text-white text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(37,211,102,0.25),0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4),0_4px_16px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ${arFont}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.whatsappCta}
          </a>
        </div>
      </div>
    </section>
  );
}
