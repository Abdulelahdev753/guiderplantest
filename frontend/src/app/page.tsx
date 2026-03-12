"use client";

import { useState } from "react";
import type { Lang } from "@/types/lang";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import ProductsSectionA from "@/components/landing/version-a/ProductsSectionA";
import UseCasesSectionA from "@/components/landing/version-a/UseCasesSectionA";
import AboutSectionA from "@/components/landing/version-a/AboutSectionA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  const [lang, setLang] = useState<Lang>("ar");

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-black min-h-screen overflow-x-hidden"
    >
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "ar" : "en")} />
      <Hero lang={lang} />
      <TrustedBy lang={lang} />
      <ProductsSectionA lang={lang} />
      <UseCasesSectionA lang={lang} />
      <AboutSectionA lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
