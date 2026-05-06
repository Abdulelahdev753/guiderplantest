"use client";

import { useState } from "react";
import type { Lang } from "@/types/lang";
import {
  tourismCategories,
  type TourismCategoryId,
} from "@/data/tourismCategories";
import { tourismPrograms } from "@/data/tourismPrograms";
import { Button } from "@/components/ui/button";

interface Props {
  lang: Lang;
  onContactClick: () => void;
}

const labels = {
  title: { en: "Tourism Programs", ar: "البرامج السياحية" },
  subtitle: {
    en: "Carefully curated tourism packages for various destinations.",
    ar: "باقات سياحية مختارة بعناية لمختلف الوجهات.",
  },
  bookNow: { en: "Book Now", ar: "احجز الآن" },
  emptyTitle: {
    en: "No programs in this category yet",
    ar: "لا توجد برامج في هذه الفئة بعد",
  },
  emptyDescription: {
    en: "Check back soon — new programs are added regularly.",
    ar: "عد قريباً — نضيف برامج جديدة بشكل مستمر.",
  },
};

export default function TourismProgramsSection({ lang, onContactClick }: Props) {
  const [activeFilter, setActiveFilter] = useState<TourismCategoryId>("all");
  const isAr = lang === "ar";
  const arFont = isAr ? "font-[family-name:var(--font-cairo)]" : "";

  const filtered = tourismPrograms.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section
      id="tourism-programs"
      className="relative py-24 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-4 ${arFont}`}>
            {labels.title[lang]}
          </h2>
          <p className={`text-white/45 max-w-lg mx-auto ${arFont}`}>
            {labels.subtitle[lang]}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tourismCategories.map((c) => {
            const active = activeFilter === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveFilter(c.id)}
                className={`${arFont} px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                  active
                    ? "bg-orange-500 text-black border-orange-500"
                    : "bg-white/[0.04] text-white/70 border-white/[0.08] hover:bg-white/[0.08] hover:text-white hover:border-white/[0.18]"
                }`}
              >
                {c.label[lang]}
              </button>
            );
          })}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((program) => (
              <div
                key={program.id}
                className="group flex flex-col rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06]"
              >
                <div className="relative aspect-[16/10] bg-gradient-to-br from-orange-500/15 via-orange-500/5 to-transparent flex items-center justify-center">
                  <span className="text-6xl drop-shadow-lg">{program.flag}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className={`text-lg font-semibold text-white mb-2 ${arFont}`}>
                    {program.title[lang]}
                  </h3>
                  <p className={`text-sm text-white/45 leading-relaxed mb-5 flex-1 ${arFont}`}>
                    {program.description[lang]}
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <span className={`text-base font-bold text-orange-400 ${arFont}`}>
                      {program.price[lang]}
                    </span>
                    <Button
                      size="sm"
                      onClick={onContactClick}
                      className={`bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5 ${arFont}`}
                    >
                      {labels.bookNow[lang]}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className={`text-xl font-semibold text-white mb-2 ${arFont}`}>
              {labels.emptyTitle[lang]}
            </h3>
            <p className={`text-white/45 ${arFont}`}>
              {labels.emptyDescription[lang]}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
