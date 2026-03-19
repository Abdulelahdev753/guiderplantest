"use client";

import { useState, useRef } from "react";
import type { Lang } from "@/types/lang";
import { countries, travelAgencies } from "@/data/countries";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Building2, MapPin, ChevronDown } from "lucide-react";
import TravelAgencyCard from "@/components/travel/TravelAgencyCard";

const pageTitle = {
  en: "Travel Agencies",
  ar: "وكالات السفر",
};

const pageSubtitle = {
  en: "Find trusted agencies to arrange your perfect trip.",
  ar: "اعثر على وكالات موثوقة لترتيب رحلتك المثالية.",
};

const chooseDestination = {
  en: "Choose a Destination",
  ar: "اختر وجهتك",
};

const agenciesFor = {
  en: "Agencies for",
  ar: "وكالات السفر إلى",
};

const emptyState = {
  title: {
    en: "No Agencies Available Yet",
    ar: "لا توجد وكالات متاحة بعد",
  },
  description: {
    en: "We're working on partnering with travel agencies for this destination. Check back soon!",
    ar: "نعمل على الشراكة مع وكالات سفر لهذه الوجهة. عد قريباً!",
  },
};

const selectPlaceholder = {
  en: "Select a country...",
  ar: "اختر دولة...",
};

export default function TravelAgenciesPage() {
  const [lang, setLang] = useState<Lang>("ar");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const resultsRef = useRef<HTMLDivElement>(null);

  const isAr = lang === "ar";
  const arFont = isAr ? "font-[family-name:var(--font-cairo)]" : "";

  function handleCountryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (!value) return;
    setSelectedCountry(value);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  const selectedCountryData = countries.find((c) => c.id === selectedCountry);
  const filteredAgencies = travelAgencies.filter(
    (a) => a.countryId === selectedCountry
  );

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="bg-black min-h-screen overflow-x-hidden"
    >
      <Navbar
        lang={lang}
        onToggleLang={() => setLang(lang === "en" ? "ar" : "en")}
        onHomePage={false}
      />

      {/* Spacer for fixed navbar */}
      <div className="pt-32" />

      {/* Page Header */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-7 h-7 text-orange-400" strokeWidth={1.8} />
          </div>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 ${arFont}`}
          >
            {pageTitle[lang]}
          </h1>
          <p
            className={`text-white/45 max-w-lg mx-auto text-base sm:text-lg ${arFont}`}
          >
            {pageSubtitle[lang]}
          </p>
        </div>

        {/* Orange glow */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-orange-500/[0.07] blur-[160px] pointer-events-none" />
      </section>

      {/* Country Selection */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <label
            htmlFor="country-select"
            className={`block text-xl font-semibold text-white/70 mb-4 ${arFont}`}
          >
            {chooseDestination[lang]}
          </label>

          <div className="relative max-w-md">
            <select
              id="country-select"
              value={selectedCountry}
              onChange={handleCountryChange}
              suppressHydrationWarning
              className={`w-full appearance-none rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl px-5 py-4 text-white text-base transition-all duration-200 focus:outline-none focus:border-orange-500/50 hover:border-white/[0.15] hover:bg-white/[0.06] cursor-pointer ${arFont}`}
            >
              <option value="">
                {selectPlaceholder[lang]}
              </option>
              {countries.map((country) => (
                <option
                  key={country.id}
                  value={country.id}
                >
                  {country.flag}  {country.name[lang]}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute top-1/2 -translate-y-1/2 end-4 w-5 h-5 text-white/40 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Agencies Results */}
      {selectedCountryData && (
        <section ref={resultsRef} className="relative py-16 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{selectedCountryData.flag}</span>
              <h2
                className={`text-2xl sm:text-3xl font-bold text-white ${arFont}`}
              >
                {agenciesFor[lang]} {selectedCountryData.name[lang]}
              </h2>
            </div>

            {/* Divider */}
            <div className="border-t border-white/[0.06] mb-10" />

            {filteredAgencies.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
                {filteredAgencies.map((agency) => (
                  <TravelAgencyCard key={agency.id} agency={agency} lang={lang} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                  <Building2
                    className="w-7 h-7 text-orange-400"
                    strokeWidth={1.8}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold text-white mb-3 ${arFont}`}
                >
                  {emptyState.title[lang]}
                </h3>
                <p
                  className={`text-white/40 max-w-md mx-auto leading-relaxed ${arFont}`}
                >
                  {emptyState.description[lang]}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      <Footer lang={lang} onHomePage={false} />
    </main>
  );
}
