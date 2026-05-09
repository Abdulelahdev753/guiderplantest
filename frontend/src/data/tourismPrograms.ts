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
    id: "indonesia-11-days",
    category: "asia",
    flag: "🇮🇩",
    title: { en: "Indonesia", ar: "إندونيسيا" },
    description: {
      en: "11 days across Puncak, Bali, and Jakarta ✨\nIncludes 5-star hotels, daily breakfast, private car, internet SIMs, airport pickup & drop-off, and a private-pool villa in Bali.",
      ar: "11 يوم بين بونشاك وبالي وجاكرتا ✨\nيشمل فنادق 5 نجوم، إفطار يومي، سيارة خاصة، شرائح نت، استقبال وتوديع، وفيلّا بمسبح خاص في بالي.",
    },
    price: { en: "From 9,650 SAR for two", ar: "ابتداءً من 9,650 ريال للشخصين" },
  },
  {
    id: "georgia-7-days",
    category: "europe",
    flag: "🇬🇪",
    title: { en: "Georgia", ar: "جورجيا" },
    description: {
      en: "7 days between Tbilisi and Batumi 🌿\nComfortable transfers, premium hotels, daily breakfast, and tours of the most beautiful sights and nature at great prices.",
      ar: "7 أيام بين تبليسي وباتومي 🌿\nتنقلات مريحة، فنادق مميزة، إفطار يومي، وجولات لأجمل الأماكن والطبيعة بأسعار حلوة.",
    },
    price: { en: "From 5,550 SAR for two", ar: "ابتداءً من 5,550 ريال للشخصين" },
  },
  {
    id: "istanbul-6-days",
    category: "europe",
    flag: "🇹🇷",
    title: { en: "Istanbul", ar: "اسطنبول" },
    description: {
      en: "6 days between history and magical atmospheres ✨\nHotel stay, daily breakfast, airport pickup & drop-off, and daily sightseeing tours.",
      ar: "6 أيام بين التاريخ والأجواء الساحرة ✨\nإقامة فندقية، إفطار يومي، استقبال من وإلى المطار، وجولات سياحية يومية.",
    },
    price: { en: "From 5,500 SAR for two", ar: "ابتداءً من 5,500 ريال للشخصين" },
  },
  {
    id: "moscow-8-days",
    category: "europe",
    flag: "🇷🇺",
    title: { en: "Moscow", ar: "موسكو" },
    description: {
      en: "8 days in the heart of Russia ❄️\nA calm, luxurious experience with premium hotels, daily breakfast, and airport pickup & drop-off.",
      ar: "8 أيام في قلب روسيا ❄️\nتجربة هادئة وفخمة مع فنادق مميزة، إفطار يومي، واستقبال وتوديع من المطار.",
    },
    price: { en: "From 6,450 SAR for two", ar: "ابتداءً من 6,450 ريال للشخصين" },
  },
  {
    id: "phuket-thailand-6-days",
    category: "asia",
    flag: "🇹🇭",
    title: { en: "Phuket — Thailand", ar: "بوكيت – تايلند" },
    description: {
      en: "6 days surrounded by nature and the sea 🌴\n5-star hotels, private car, internet SIMs, airport pickup & drop-off, and a private-pool villa.",
      ar: "6 أيام وسط الطبيعة والبحر 🌴\nفنادق 5 نجوم، سيارة خاصة، شرائح نت، استقبال وتوديع، وفيلّا بمسبح خاص.",
    },
    price: { en: "From 5,850 SAR for two", ar: "ابتداءً من 5,850 ريال للشخصين" },
  },
  {
    id: "vietnam-13-days",
    category: "asia",
    flag: "🇻🇳",
    title: { en: "Vietnam", ar: "فيتنام" },
    description: {
      en: "13 days across Saigon, Da Nang, Phu Quoc, and Bangkok ✨\nIncludes international and domestic flights, world-class resorts, and daily breakfast.",
      ar: "13 يوم بين سايغون، دانانغ، فووكوك، وبانكوك ✨\nيشمل طيران دولي وداخلي، منتجعات عالمية، ووجبة إفطار يومية.",
    },
    price: { en: "From 10,850 SAR per double room", ar: "ابتداءً من 10,850 ريال للغرفة المزدوجة" },
  },
  {
    id: "mediterranean-cruise-9-days",
    category: "cruises",
    flag: "🚢",
    title: { en: "Mediterranean Cruise", ar: "كروز البحر الأبيض المتوسط" },
    description: {
      en: "9 days across Barcelona, Genoa, Rome, Palma de Mallorca, and more 🌊\nLuxury accommodation, sea-view cabin, and all meals included onboard.",
      ar: "9 أيام بين برشلونة، جنوا، روما، بالما دي مايوركا والمزيد 🌊\nإقامة فندقية فاخرة، كابينة بإطلالة بحرية، وجميع الوجبات داخل الكروز.",
    },
    price: { en: "From 9,500 SAR per double room", ar: "ابتداءً من 9,500 ريال للغرفة المزدوجة" },
  },
  {
    id: "saudi-cruise-8-days",
    category: "cruises",
    flag: "🇸🇦",
    title: { en: "Saudi Cruise", ar: "كروز السعودي" },
    description: {
      en: "Up to 30% off on selected trips ✨\n8-day cruise between Jeddah, Sharm El Sheikh, and Aqaba 🌊\nA luxurious cruise experience packed with events, activities, and unique atmospheres on board — elegance, entertainment, and complete relaxation at sea.",
      ar: "أوروبا – خصومات تصل إلى 30% على رحلات محددة ✨\n8 أيام بحرية بين جدة، شرم الشيخ، والعقبة 🌊\nتجربة بحرية فاخرة مليانة فعاليات، أنشطة، وأجواء مختلفة على متن الكروز. فخامة، ترفيه، واسترخاء كامل على البحر.",
    },
    price: { en: "From 3,719 SAR per double cabin", ar: "ابتداءً من 3,719 ريال للكابينة المزدوجة" },
  },
  {
    id: "austria-germany-11-days",
    category: "europe",
    flag: "🇦🇹",
    title: { en: "Austria & Germany", ar: "النمسا وألمانيا" },
    description: {
      en: "11 days across European nature and classic cities 🌿\nA journey blending tranquility, luxury, scenic landscapes, and complete organization down to every detail.",
      ar: "11 يوم بين الطبيعة الأوروبية والمدن الكلاسيكية 🌿\nرحلة تجمع الهدوء، الفخامة، المناظر الطبيعية، والتنظيم الكامل بكل التفاصيل.",
    },
    price: { en: "From 13,965 SAR", ar: "ابتداءً من 13,965 ريال" },
  },
];
