export interface UseCase {
  id: string;
  icon: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}

export const useCases: UseCase[] = [
  {
    id: "weekend-trips",
    icon: "Calendar",
    title: { en: "Weekend Trips", ar: "رحلات نهاية الأسبوع" },
    description: {
      en: "Compact 2–3 day itineraries that maximize every hour of your short getaway.",
      ar: "خطط رحلات مكثفة من 2-3 أيام تستغل كل ساعة من إجازتك القصيرة.",
    },
  },
  {
    id: "first-time-visitors",
    icon: "Compass",
    title: { en: "First-Time Visitors", ar: "الزائرون لأول مرة" },
    description: {
      en: "Must-see landmarks, local tips, and clear walking routes for newcomers.",
      ar: "أهم المعالم، نصائح محلية، ومسارات مشي واضحة للزائرين الجدد.",
    },
  },
  {
    id: "couples",
    icon: "Heart",
    title: { en: "Couples", ar: "الأزواج" },
    description: {
      en: "Romantic restaurants, scenic viewpoints, and curated date-worthy stops.",
      ar: "مطاعم رومانسية، مناظر خلابة، ومحطات مثالية للمواعيد.",
    },
  },
  {
    id: "family",
    icon: "Users",
    title: { en: "Family Travel", ar: "السفر العائلي" },
    description: {
      en: "Kid-friendly activities, stroller-accessible paths, and family dining spots.",
      ar: "أنشطة مناسبة للأطفال، مسارات سهلة الوصول، ومطاعم عائلية.",
    },
  },
  {
    id: "shopping",
    icon: "ShoppingBag",
    title: { en: "Shopping", ar: "التسوق" },
    description: {
      en: "Best markets, outlet villages, and local boutiques mapped out for you.",
      ar: "أفضل الأسواق، قرى التخفيضات، والمحلات المحلية مرسومة على الخريطة.",
    },
  },
  {
    id: "food",
    icon: "UtensilsCrossed",
    title: { en: "Food & Dining", ar: "الطعام والمطاعم" },
    description: {
      en: "Curated food trails, hidden local eateries, and must-try dishes by neighborhood.",
      ar: "مسارات طعام مختارة، مطاعم محلية مخفية، وأطباق لا تفوتها في كل حي.",
    },
  },
];
