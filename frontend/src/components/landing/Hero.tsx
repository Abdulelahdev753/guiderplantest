"use client";

import Image from "next/image";

type Lang = "en" | "ar";

interface HeroProps {
  lang: Lang;
}

const content = {
  en: {
    announcement: "Trusted travel PDF guides",
    announcementCta: "Carefully designed",
    headline1: "Travel Smarter",
    headline2: "with Professional PDF Guides, All the Details",
    subtext:
      "Instead of overpaying at offices, we connect you directly with trusted agencies starting from 1000 SAR per person — including: accommodation, airport pickup & drop-off, private driver, daily trips, internet, breakfast, and travel insurance.",
    primaryCta: "Browse Guides",
    secondaryCta: "Contact with Travel Agencies",
    whatsappCta: "For travel consultations via WhatsApp",
  },
  ar: {
    announcement: "\u0623\u062f\u0644\u0629 \u0633\u0641\u0631 \u0645\u0648\u062b\u0648\u0642\u0629",
    announcementCta: "مصممة بعناية",
    headline1: "سافر بذكاء",
    headline2: " مع أدلة PDF احترافية بكل التفاصيل",
    subtext:
      "بدل ما تدفع زيادة على المكاتب نوصّلك مباشرة لوكالات موثوقة بأسعار تبدأ من 1000 ريال للشخص تشمل: سكن، استقبال وتوديع من المطار، سائق خاص، رحلات يومية، إنترنت، فطور، وتأمين سفر",
    primaryCta: "\u062a\u0635\u0641\u062d \u0627\u0644\u0623\u062f\u0644\u0629",
    secondaryCta: "تواصل مع وكالات السفر",
    whatsappCta: "للاستشارات السياحيه عبر الواتساب",
  },
} as const;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero({ lang }: HeroProps) {
  const t = content[lang];

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
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white text-zinc-900 text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.08),0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15),0_4px_16px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            {t.primaryCta}
          </a>
          <a
            href={`${basePath}/travel-agencies`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white/75 hover:text-white rounded-full border border-white/[0.1] hover:border-white/[0.22] hover:bg-white/[0.04] active:scale-[0.98] transition-all duration-200"
          >
            {t.secondaryCta}
          </a>
        </div>

        {/* WhatsApp Consultation */}
        <div className="mt-8 max-w-xl mx-auto w-full">
          <div className="border-t border-white/[0.08]" />
          <div className="flex justify-center mt-5">
            <a
              href="https://wa.me/96658193980"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs text-white/80 hover:text-white rounded-full border border-white/[0.12] hover:border-white/[0.25] bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.98] transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.whatsappCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
