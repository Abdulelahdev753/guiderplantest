"use client";

import type { Lang } from "@/types/lang";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  lang: Lang;
}

const sectionTitle = {
  en: "Our Travel Guides",
  ar: "أدلة السفر لدينا",
};

const sectionSubtitle = {
  en: "Beautifully designed PDF guides with clear routes and curated stops.",
  ar: "أدلة PDF مصممة بعناية مع مسارات واضحة ومحطات مختارة.",
};

const ctaLabel = {
  en: "Get Guide",
  ar: "احصل على الدليل",
};

export default function ProductsSectionA({ lang }: Props) {
  return (
    <section id="products" className="relative py-24 px-6 scroll-mt-24">
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-6 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06]"
            >
              {/* Header: flag + name + badge */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{product.flag}</span>
                <h3
                  className={`text-lg font-semibold text-white ${
                    lang === "ar" ? "font-[family-name:var(--font-cairo)]" : ""
                  }`}
                >
                  {product.name[lang]}
                </h3>
                {product.badge && (
                  <Badge
                    variant="secondary"
                    className="bg-orange-500/10 text-orange-400 border-orange-500/20 text-xs"
                  >
                    {product.badge[lang]}
                  </Badge>
                )}
              </div>

              {/* Tagline */}
              <p className="text-sm text-white/40 mb-5 leading-relaxed">
                {product.tagline[lang]}
              </p>

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-white">
                  {product.price}
                </span>
                <Button
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5"
                >
                  {ctaLabel[lang]}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
