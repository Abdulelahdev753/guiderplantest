import type { TourismCategoryId } from "./tourismCategories";

export interface TourismProgram {
  id: string;
  category: Exclude<TourismCategoryId, "all">;
  flag: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  price: { en: string; ar: string };
}

export const tourismPrograms: TourismProgram[] = [
  {
    id: "thailand-7-nights",
    category: "asia",
    flag: "🇹🇭",
    title: {
      en: "Thailand — 7 Nights",
      ar: "تايلاند — 7 ليالٍ",
    },
    description: {
      en: "Bangkok and Phuket — a curated mix of city life, islands, and signature Thai cuisine.",
      ar: "بانكوك وبوكيت — مزيج مختار من حياة المدن والجزر والمأكولات التايلاندية المميزة.",
    },
    price: { en: "From 4,500 SAR", ar: "تبدأ من 4,500 ريال" },
  },
  {
    id: "switzerland-alps",
    category: "europe",
    flag: "🇨🇭",
    title: {
      en: "Switzerland — Alpine Escape",
      ar: "سويسرا — رحلة جبال الألب",
    },
    description: {
      en: "Zurich, Interlaken, and Lucerne with scenic train rides and lakeside stays.",
      ar: "زيورخ وإنترلاكن ولوزيرن مع رحلات قطار خلابة وإقامات على ضفاف البحيرات.",
    },
    price: { en: "From 9,800 SAR", ar: "تبدأ من 9,800 ريال" },
  },
  {
    id: "mediterranean-cruise",
    category: "cruises",
    flag: "🚢",
    title: {
      en: "Mediterranean Cruise — 8 Days",
      ar: "رحلة بحرية في المتوسط — 8 أيام",
    },
    description: {
      en: "Italy, France, and Spain in one journey — full-board cruise with daily port stops.",
      ar: "إيطاليا وفرنسا وإسبانيا في رحلة واحدة — كروز بنظام الإقامة الكاملة مع توقفات يومية في الموانئ.",
    },
    price: { en: "From 7,200 SAR", ar: "تبدأ من 7,200 ريال" },
  },
  {
    id: "maldives-honeymoon",
    category: "honeymoon",
    flag: "🇲🇻",
    title: {
      en: "Maldives — Honeymoon Retreat",
      ar: "المالديف — شهر عسل",
    },
    description: {
      en: "5 nights in an overwater villa with private dining and a couples' spa experience.",
      ar: "5 ليالٍ في فيلا فوق الماء مع عشاء خاص وتجربة سبا للأزواج.",
    },
    price: { en: "From 14,500 SAR", ar: "تبدأ من 14,500 ريال" },
  },
  {
    id: "egypt-classic",
    category: "arab",
    flag: "🇪🇬",
    title: {
      en: "Egypt — Cairo & the Nile",
      ar: "مصر — القاهرة والنيل",
    },
    description: {
      en: "Pyramids, Egyptian Museum, and a relaxing Nile cruise from Luxor to Aswan.",
      ar: "الأهرامات والمتحف المصري ورحلة نيلية هادئة من الأقصر إلى أسوان.",
    },
    price: { en: "From 3,900 SAR", ar: "تبدأ من 3,900 ريال" },
  },
  {
    id: "japan-spring",
    category: "asia",
    flag: "🇯🇵",
    title: {
      en: "Japan — Cherry Blossom Tour",
      ar: "اليابان — جولة أزهار الكرز",
    },
    description: {
      en: "Tokyo, Kyoto, and Osaka — temples, gardens, and bullet-train transfers included.",
      ar: "طوكيو وكيوتو وأوساكا — معابد وحدائق وتنقلات بقطار الشينكانسن السريع.",
    },
    price: { en: "From 11,200 SAR", ar: "تبدأ من 11,200 ريال" },
  },
];
