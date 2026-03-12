export interface ValueProp {
  icon: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}

export const aboutContent = {
  opening: {
    en: "We believe every trip deserves a real plan.",
    ar: "نؤمن أن كل رحلة تستحق خطة حقيقية.",
  },
  narrative: {
    en: "GuiderPlan was built by travelers who got tired of scattered blog posts, outdated forums, and generic top-10 lists. We create focused, beautifully designed PDF guides with clear day-by-day routes, curated stops, and direct Google Maps links — so you spend less time planning and more time exploring.",
    ar: "أُنشئت GuiderPlan على يد مسافرين سئموا من المقالات المتناثرة والمنتديات القديمة وقوائم العشرة الأفضل المكررة. نصمم أدلة PDF مركّزة وجميلة بمسارات يومية واضحة ومحطات مختارة وروابط خرائط Google المباشرة — لتقضي وقتاً أقل في التخطيط ووقتاً أكثر في الاستكشاف.",
  },
};

export const valueProps: ValueProp[] = [
  {
    icon: "Route",
    title: { en: "Curated Routes", ar: "مسارات مختارة" },
    description: {
      en: "Hand-picked walking and driving routes tested by real travelers.",
      ar: "مسارات مشي وقيادة مختارة يدوياً ومُختبرة من مسافرين حقيقيين.",
    },
  },
  {
    icon: "Clock",
    title: { en: "Time-Saving Plans", ar: "خطط توفر الوقت" },
    description: {
      en: "Day-by-day itineraries so you never waste a moment on your trip.",
      ar: "خطط يومية حتى لا تضيع لحظة واحدة من رحلتك.",
    },
  },
  {
    icon: "MapPin",
    title: { en: "Google Maps Links", ar: "روابط خرائط Google" },
    description: {
      en: "Every stop links directly to Google Maps for instant navigation.",
      ar: "كل محطة مرتبطة مباشرة بخرائط Google للتنقل الفوري.",
    },
  },
  {
    icon: "Backpack",
    title: { en: "Built for Real Travelers", ar: "مصمم للمسافرين الحقيقيين" },
    description: {
      en: "No fluff, no ads — just actionable travel plans you can trust.",
      ar: "بدون حشو، بدون إعلانات — فقط خطط سفر عملية يمكنك الوثوق بها.",
    },
  },
];
