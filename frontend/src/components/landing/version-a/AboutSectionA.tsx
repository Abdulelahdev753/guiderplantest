"use client";

import type { Lang } from "@/types/lang";
import { aboutContent, valueProps } from "@/data/about";
import { Route, Clock, MapPin, Backpack } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props {
  lang: Lang;
}

const iconMap: Record<string, LucideIcon> = {
  Route,
  Clock,
  MapPin,
  Backpack,
};

const sectionTitle = {
  en: "About GuiderPlan",
  ar: "عن GuiderPlan",
};

export default function AboutSectionA({ lang }: Props) {
  return (
    <section id="about" className="relative py-24 px-6 scroll-mt-24">
      {/* Subtle orange blur blob */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-500/[0.04] blur-[180px] pointer-events-none" />

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
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Narrative */}
          <div className="relative">
            <p
              className={`text-xl sm:text-2xl font-bold text-white mb-5 leading-snug ${
                lang === "ar" ? "font-[family-name:var(--font-cairo)]" : ""
              }`}
            >
              {aboutContent.opening[lang]}
            </p>
            <p className="text-base text-white/40 leading-relaxed">
              {aboutContent.narrative[lang]}
            </p>
          </div>

          {/* Right: 2x2 Value Props */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
            {valueProps.map((vp) => {
              const Icon = iconMap[vp.icon];
              return (
                <div
                  key={vp.icon}
                  className="rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-5 transition-all duration-300 hover:border-white/[0.15]"
                >
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3">
                    {Icon && (
                      <Icon
                        className="w-4.5 h-4.5 text-orange-400"
                        strokeWidth={1.8}
                      />
                    )}
                  </div>
                  <h4
                    className={`text-sm font-semibold text-white mb-1.5 ${
                      lang === "ar"
                        ? "font-[family-name:var(--font-cairo)]"
                        : ""
                    }`}
                  >
                    {vp.title[lang]}
                  </h4>
                  <p className="text-xs text-white/35 leading-relaxed">
                    {vp.description[lang]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
