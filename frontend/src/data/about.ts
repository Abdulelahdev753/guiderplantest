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
    en: "At GuiderPlan, we offer ready-made, carefully curated digital travel guides that bring together the most important stops, daily routes, and direct links all in one place. We also act as a bridge between you and the right travel agencies for your needs, by making it easy to connect with service providers. Because we know that travelers seek clarity and trust above all else, we designed an experience that helps you make decisions with ease, and gives you a more organized, comfortable, and worry-free journey.",
    ar: "في GuiderPlan نقدّم أدلة سفر رقمية جاهزة ومختارة بعناية، تضم أهم المحطات، والمسارات اليومية، والروابط المباشرة في مكان واحد، كما نعمل كحلقة وصل بينك وبين وكالات السفر المناسبة لاحتياجك، من خلال تسهيل ربطك بالجهات المقدمة للخدمة. لأننا نعرف أن العميل يبحث عن الوضوح والثقة قبل أي شيء، صممنا تجربة تساعدك على اتخاذ قرارك بسهولة، وتمنحك رحلة أكثر ترتيبًا وراحة واطمئنانًا.",
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
    title: { en: "Ready Itinerary with a Full Trip Guide", ar: "خط سير جاهز مع دليل كامل للرحلة" },
    description: {
      en: "Every day is planned with a clear route so you make the most of your time.",
      ar: "كل يوم مرتب لك بمسار واضح عشان تستفيد من وقتك.",
    },
  },
];
