export interface UseCase {
  id: string;
  icon: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}

export const useCases: UseCase[] = [
  {
    id: "first-time-traveler",
    icon: "Compass",
    title: { en: "For First-Time Travelers", ar: "للمسافر لأول مرة" },
    description: {
      en: "If this is your first trip, this guide gives you a clear and simple plan to help you get around and enjoy your trip without wasting time.",
      ar: "إذا كانت هذه رحلتك الأولى، فهذا الدليل يقدّم لك خطة واضحة وبسيطة تساعدك على التنقل و الاستمتاع برحلتك دون إضاعة الوقت.",
    },
  },
  {
    id: "no-time-to-research",
    icon: "Clock",
    title: { en: "For Those Short on Time", ar: "لمن لا يملك وقتًا للبحث" },
    description: {
      en: "Instead of spending hours researching and planning, you'll find everything you need in one organized and easy-to-use guide.",
      ar: "بدلًا من قضاء ساعات طويلة في البحث والتخطيط، ستجد كل ما تحتاج إليه في دليل واحد منظم وسهل الاستخدام.",
    },
  },
  {
    id: "smart-saving",
    icon: "Wallet",
    title: { en: "For Smart Savers", ar: "لمن يريد التوفير بذكاء" },
    description: {
      en: "The guide contains practical, tried-and-tested tips to help you cut costs while maintaining an enjoyable and memorable travel experience.",
      ar: "يحتوي الدليل على نصائح عملية ومجرّبة تساعدك على تقليل التكاليف مع الحفاظ على تجربة سفر ممتعة ومميزة.",
    },
  },
  {
    id: "clear-schedule",
    icon: "CalendarCheck",
    title: { en: "For Those Who Prefer a Clear Schedule", ar: "لمن يفضّل الجدول الواضح" },
    description: {
      en: "The guide provides ready-made, organized daily itineraries so you can make the most of your time without confusion.",
      ar: "يوفّر لك الدليل مسارات يومية جاهزة ومنظمة، لتستفيد من وقتك بأفضل شكل دون ارتباك.",
    },
  },
  {
    id: "trusted-places",
    icon: "ShieldCheck",
    title: { en: "For Those Seeking Trusted Places", ar: "لمن يبحث عن أماكن موثوقة" },
    description: {
      en: "The guide features carefully selected and tested places, so you can avoid random choices and ensure a better experience.",
      ar: "ستجد في الدليل أماكن مختارة بعناية ومجرّبة، لتبتعد عن الخيارات العشوائية وتضمن تجربة أفضل.",
    },
  },
  {
    id: "easy-comfortable",
    icon: "TreePalm",
    title: { en: "For an Easy & Comfortable Trip", ar: "لمن يريد رحلة سهلة ومريحة" },
    description: {
      en: "Every detail of the trip is arranged for you from start to finish, so you can enjoy your travel with peace and comfort.",
      ar: "كل تفاصيل الرحلة مرتبة لك من البداية إلى النهاية، لتستمتع بسفرك براحة وهدوء دون ضغط.",
    },
  },
];
