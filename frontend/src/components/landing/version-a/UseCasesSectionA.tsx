"use client";

import type { Lang } from "@/types/lang";
import { useCases } from "@/data/useCases";
import {
  Calendar,
  Compass,
  Heart,
  Users,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props {
  lang: Lang;
}

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Compass,
  Heart,
  Users,
  ShoppingBag,
  UtensilsCrossed,
};

const sectionTitle = {
  en: "Who It's For",
  ar: "لمن هذا الدليل",
};

const sectionSubtitle = {
  en: "No matter how you travel, we have the right guide for you.",
  ar: "مهما كانت طريقة سفرك، لدينا الدليل المناسب لك.",
};

export default function UseCasesSectionA({ lang }: Props) {
  return (
    <section id="use-cases" className="relative py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-white mb-4 ${
              lang === "ar" ? "font-[family-name:var(--font-cairo)]" : ""
            }`}
          >
            {sectionTitle[lang]}
          </h2>
          <p className="text-white/45 max-w-lg mx-auto">
            {sectionSubtitle[lang]}
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc) => {
            const Icon = iconMap[uc.icon];
            return (
              <div
                key={uc.id}
                className="group rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-6 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06]"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  {Icon && (
                    <Icon className="w-5 h-5 text-orange-400" strokeWidth={1.8} />
                  )}
                </div>

                {/* Title */}
                <h3
                  className={`text-base font-semibold text-white mb-2 ${
                    lang === "ar" ? "font-[family-name:var(--font-cairo)]" : ""
                  }`}
                >
                  {uc.title[lang]}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/40 leading-relaxed">
                  {uc.description[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
