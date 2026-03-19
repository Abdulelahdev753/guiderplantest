export interface Country {
  id: string;
  flag: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
}

export interface TravelAgency {
  id: string;
  countryId: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  website?: string;
  phone?: string;
}

export const countries: Country[] = [
  {
    id: "georgia",
    flag: "🇬🇪",
    name: { en: "Georgia", ar: "جورجيا" },
    description: {
      en: "Tbilisi, the Caucasus mountains, and rich Georgian culture.",
      ar: "تبليسي وجبال القوقاز والثقافة الجورجية العريقة.",
    },
  },
];

export const travelAgencies: TravelAgency[] = [
  {
    id: "georgia-adventures",
    countryId: "georgia",
    name: { en: "Georgia Adventures", ar: "مغامرات جورجيا" },
    description: {
      en: "Tailored tours across Tbilisi, Kazbegi, and the wine region.",
      ar: "جولات مخصصة عبر تبليسي وكازبيجي ومنطقة النبيذ.",
    },
    phone: "+995 555 123 456",
    website: "https://georgia-adventures.example.com",
  },
  {
    id: "caucasus-travel",
    countryId: "georgia",
    name: { en: "Caucasus Travel", ar: "سفر القوقاز" },
    description: {
      en: "Mountain expeditions, cultural tours, and local experiences.",
      ar: "رحلات جبلية وجولات ثقافية وتجارب محلية.",
    },
    phone: "+995 555 789 012",
  },
  {
    id: "tbilisi-tours",
    countryId: "georgia",
    name: { en: "Tbilisi City Tours", ar: "جولات مدينة تبليسي" },
    description: {
      en: "Walking tours, food experiences, and nightlife guides in Tbilisi.",
      ar: "جولات مشي وتجارب طعام ودليل الحياة الليلية في تبليسي.",
    },
    website: "https://tbilisi-tours.example.com",
  },
];
