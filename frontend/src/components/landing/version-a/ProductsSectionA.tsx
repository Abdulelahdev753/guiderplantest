"use client";

import { useState } from "react";
import type { Lang } from "@/types/lang";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface Props {
  lang: Lang;
}

const AVAILABLE_PRODUCTS = new Set([
  "london",
  "barcelona",
  "amsterdam",
  "north-italy",
  "budapest",
  "prague",
]);

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

const comingSoonLabel = {
  en: "Coming Soon",
  ar: "قريباً",
};

const formLabels = {
  title: { en: "Complete Your Order", ar: "أكمل طلبك" },
  description: {
    en: "Enter your details to proceed to payment.",
    ar: "أدخل بياناتك للمتابعة إلى الدفع.",
  },
  name: { en: "Full Name", ar: "الاسم الكامل" },
  namePlaceholder: { en: "Enter your name", ar: "أدخل اسمك" },
  phone: { en: "Phone Number", ar: "رقم الهاتف" },
  phonePlaceholder: { en: "05XXXXXXXX", ar: "05XXXXXXXX" },
  submit: { en: "Proceed to Payment", ar: "المتابعة للدفع" },
  submitting: { en: "Processing...", ar: "جارٍ المعالجة..." },
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export default function ProductsSectionA({ lang }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function openForm(productId: string) {
    setSelectedProduct(productId);
    setClientName("");
    setClientPhone("");
  }

  function closeForm() {
    if (submitting) return;
    setSelectedProduct(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedProduct || submitting) return;
    setSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/api/payment/create-link`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: selectedProduct,
          clientName: clientName.trim(),
          clientPhone: clientPhone.trim(),
        }),
      });

      if (!res.ok) throw new Error("Failed to create payment link");

      const data = await res.json();
      if (data.url && data.token) {
        window.open(data.url, "_blank");
        window.location.href = `/download?token=${data.token}`;
      }
    } catch (err) {
      console.error("Payment error:", err);
      setSubmitting(false);
    }
  }

  const selectedProductData = products.find((p) => p.id === selectedProduct);

  return (
    <>
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
            {products.map((product) => {
              const isAvailable = AVAILABLE_PRODUCTS.has(product.id);

              return (
                <div
                  key={product.id}
                  className="group rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-6 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06]"
                >
                  {/* Header: flag + name + badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{product.flag}</span>
                    <h3
                      className={`text-lg font-semibold text-white ${
                        lang === "ar"
                          ? "font-[family-name:var(--font-cairo)]"
                          : ""
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
                    {isAvailable ? (
                      <Button
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5"
                        onClick={() => openForm(product.id)}
                      >
                        {ctaLabel[lang]}
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="bg-white/10 text-white/40 rounded-full px-5 cursor-not-allowed"
                        disabled
                      >
                        {comingSoonLabel[lang]}
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Info Form Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && closeForm()}>
        <DialogContent className="bg-neutral-950 border-white/[0.08] text-white max-w-md">
          <DialogHeader>
            <DialogTitle
              className={`text-xl font-bold ${
                lang === "ar" ? "font-[family-name:var(--font-cairo)] text-right" : ""
              }`}
            >
              {selectedProductData && (
                <span>
                  {selectedProductData.flag} {selectedProductData.name[lang]}
                </span>
              )}
              {" — "}
              {formLabels.title[lang]}
            </DialogTitle>
            <DialogDescription
              className={`text-white/50 ${lang === "ar" ? "text-right" : ""}`}
            >
              {formLabels.description[lang]}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-2" dir={lang === "ar" ? "rtl" : "ltr"}>
            <div>
              <label
                className={`block text-sm text-white/70 mb-1.5 ${
                  lang === "ar" ? "font-[family-name:var(--font-cairo)]" : ""
                }`}
              >
                {formLabels.name[lang]}
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder={formLabels.namePlaceholder[lang]}
                className="w-full rounded-lg bg-white/[0.06] border border-white/[0.1] px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 transition-colors"
              />
            </div>

            <div>
              <label
                className={`block text-sm text-white/70 mb-1.5 ${
                  lang === "ar" ? "font-[family-name:var(--font-cairo)]" : ""
                }`}
              >
                {formLabels.phone[lang]}
              </label>
              <PhoneInput
                defaultCountry="sa"
                value={clientPhone}
                onChange={(phone) => setClientPhone(phone)}
                inputClassName="phone-input-field"
                countrySelectorStyleProps={{
                  buttonClassName: "phone-country-btn",
                }}
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-2.5 mt-2 disabled:opacity-60"
            >
              {submitting ? formLabels.submitting[lang] : formLabels.submit[lang]}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
