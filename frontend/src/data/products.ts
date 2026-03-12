export interface Product {
  id: string;
  flag: string;
  name: { en: string; ar: string };
  tagline: { en: string; ar: string };
  price: string;
  badge?: { en: string; ar: string };
}

export const products: Product[] = [
  {
    id: "london",
    flag: "🇬🇧",
    name: { en: "London", ar: "لندن" },
    tagline: {
      en: "Iconic landmarks, royal parks, and hidden gems across the city.",
      ar: "معالم شهيرة، حدائق ملكية، وجواهر مخفية في أنحاء المدينة.",
    },
    price: "34.99 SAR",
    badge: { en: "Best Seller", ar: "الأكثر مبيعاً" },
  },
  {
    id: "barcelona",
    flag: "🇪🇸",
    name: { en: "Barcelona", ar: "برشلونة" },
    tagline: {
      en: "Gaudí masterpieces, beachside vibes, and world-class tapas.",
      ar: "روائع غاودي، أجواء شاطئية، وتاباس عالمية.",
    },
    price: "34.99 SAR",
    badge: { en: "New", ar: "جديد" },
  },
  {
    id: "amsterdam",
    flag: "🇳🇱",
    name: { en: "Amsterdam", ar: "أمستردام" },
    tagline: {
      en: "Canal walks, art museums, and vibrant neighborhoods.",
      ar: "ممشى القنوات، متاحف فنية، وأحياء نابضة بالحياة.",
    },
    price: "34.99 SAR",
  },
  {
    id: "budapest",
    flag: "🇭🇺",
    name: { en: "Budapest", ar: "بودابست" },
    tagline: {
      en: "Thermal baths, grand architecture, and vibrant ruin bars.",
      ar: "حمامات حرارية، عمارة فخمة، وحانات الأطلال النابضة بالحياة.",
    },
    price: "34.99 SAR",
  },
  {
    id: "prague",
    flag: "🇨🇿",
    name: { en: "Prague", ar: "براغ" },
    tagline: {
      en: "Fairy-tale architecture, cobblestone streets, and rich history.",
      ar: "عمارة خيالية، شوارع مرصوفة، وتاريخ عريق.",
    },
    price: "34.99 SAR",
    badge: { en: "New", ar: "جديد" },
  },
  {
    id: "north-italy",
    flag: "🇮🇹",
    name: { en: "North Italy", ar: "شمال إيطاليا" },
    tagline: {
      en: "Lake Como, Cinque Terre, and Tuscan countryside routes.",
      ar: "بحيرة كومو، تشينكوي تيري، ومسارات الريف التوسكاني.",
    },
    price: "34.99 SAR",
  },
];
