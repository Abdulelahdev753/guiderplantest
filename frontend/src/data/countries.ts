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
  },
];
