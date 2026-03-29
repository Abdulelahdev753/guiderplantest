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
  email?: string;
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
      en: "The best agency for price and quality in Georgia — offering a complete trip at a competitive price including accommodation, private driver, airport pickup, daily trips, internet, and breakfast.",
      ar: "افضل مكتب من ناحية سعر وجودة في جورجيا يوفر لك رحلة متكاملة بسعر منافس يشمل السكن، سائق خاص، استقبال من المطار، رحلات يومية، إنترنت، وفطور.",
    },
    email: "Gaith.salama@gmail.com",
  },
];
