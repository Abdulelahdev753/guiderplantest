"use client";

import { useState } from "react";
import type { Lang } from "@/types/lang";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import HomeCtaButtons from "@/components/landing/HomeCtaButtons";
import ProductsSectionA from "@/components/landing/version-a/ProductsSectionA";
import TourismProgramsSection from "@/components/landing/TourismProgramsSection";
import UseCasesSectionA from "@/components/landing/version-a/UseCasesSectionA";
import AboutSectionA from "@/components/landing/version-a/AboutSectionA";
import Footer from "@/components/landing/Footer";
import AgencyContactModal from "@/components/landing/AgencyContactModal";

export default function Home() {
  const [lang, setLang] = useState<Lang>("ar");
  const [agencyModalOpen, setAgencyModalOpen] = useState(false);

  const openAgencyModal = () => setAgencyModalOpen(true);
  const closeAgencyModal = () => setAgencyModalOpen(false);

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-black min-h-screen overflow-x-hidden"
    >
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "ar" : "en")} />
      <Hero lang={lang} onOpenAgencyModal={openAgencyModal} />
      <TrustedBy lang={lang} />
      <HomeCtaButtons lang={lang} />
      <ProductsSectionA lang={lang} />
      <TourismProgramsSection lang={lang} onContactClick={openAgencyModal} />
      <UseCasesSectionA lang={lang} />
      <AboutSectionA lang={lang} />
      <Footer lang={lang} />
      <AgencyContactModal
        open={agencyModalOpen}
        onClose={closeAgencyModal}
        lang={lang}
      />
    </main>
  );
}
