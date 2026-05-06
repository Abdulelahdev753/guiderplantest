"use client";

import type { Lang } from "@/types/lang";
import { FileText, Plane } from "lucide-react";

interface Props {
  lang: Lang;
}

const labels = {
  pdfGuides: { en: "PDF Guides", ar: "أدلة PDF" },
  tourismPrograms: { en: "Tourism Programs", ar: "البرامج السياحية" },
};

export default function HomeCtaButtons({ lang }: Props) {
  const arFont = lang === "ar" ? "font-[family-name:var(--font-cairo)]" : "";

  return (
    <section className="px-6 pb-12">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 w-full">
        <a
          href="#products"
          className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] hover:border-white/[0.22] text-white text-sm font-semibold rounded-full active:scale-[0.98] transition-all duration-200 ${arFont}`}
        >
          <FileText className="w-4 h-4 text-orange-400" strokeWidth={2} />
          {labels.pdfGuides[lang]}
        </a>
        <a
          href="#tourism-programs"
          className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] hover:border-white/[0.22] text-white text-sm font-semibold rounded-full active:scale-[0.98] transition-all duration-200 ${arFont}`}
        >
          <Plane className="w-4 h-4 text-orange-400" strokeWidth={2} />
          {labels.tourismPrograms[lang]}
        </a>
      </div>
    </section>
  );
}
