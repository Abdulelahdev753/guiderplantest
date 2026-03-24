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
      en: "Discover London and Edinburgh with a ready-made plan that saves you time and covers the best experiences with organized routes, beautiful places, and amazing experiences.",
      ar: "اكتشف لندن وإدنبرة بخطة جاهزة تختصر لك الوقت وتغطي أهم التجارب مع مسارات مرتبة ، أماكن جميلة ، تجارب حلوة .",
    },
    price: "34.99 SAR",
    badge: { en: "Best Seller", ar: "الأكثر مبيعاً" },
  },
  {
    id: "barcelona",
    flag: "🇪🇸",
    name: { en: "Barcelona", ar: "برشلونة" },
    tagline: {
      en: "Live the Barcelona vibe with a clear and fun daily plan covering restaurants, events, and curated experiences for the best trip.",
      ar: " عيش أجواء برشلونة بخطة يومية واضحة وممتعة تشمل المطاعم، الفعاليات، وتجارب مختارة تعطيك أفضل تجربة.",
    },
    price: "34.99 SAR",
    badge: { en: "New", ar: "جديد" },
  },
  {
    id: "amsterdam",
    flag: "🇳🇱",
    name: { en: "Amsterdam", ar: "أمستردام" },
    tagline: {
      en: "Enjoy Amsterdam and beyond the smart and easy way with organized routes that combine the city and villages without the hassle.",
      ar: "استمتع بأمستردام وما حولها بأسلوب ذكي وسهل مع مسارات منظمة تجمع بين المدينة والقرى بدون تعقيد.",
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
      en: "Make your Prague trip easy and clear from day one with a guide that gives you the best spots on a ready-made, tested itinerary.",
      ar: "اجعل رحلتك لبراغ سهلة وواضحة من أول يوم مع دليل يعطيك أفضل الأماكن بخط سير جاهز ومجرب.",
    },
    price: "34.99 SAR",
    badge: { en: "New", ar: "جديد" },
  },
  {
    id: "north-italy",
    flag: "🇮🇹",
    name: { en: "North Italy", ar: "شمال إيطاليا" },
    tagline: {
      en: "A beautiful journey between lakes and mountains in Northern Italy with a professional itinerary covering the most stunning cities like Garda, Ortisei, and much more.",
      ar: "رحلة جميلة بين البحيرات والجبال في الشمال الإيطالي مع خط سير احترافي يغطي أجمل المدن مثل (جاردا و اورتيسي) وغيرها الكثير.",
    },
    price: "34.99 SAR",
  },
];
