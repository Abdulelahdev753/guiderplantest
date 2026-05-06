export type TourismCategoryId =
  | "all"
  | "asia"
  | "europe"
  | "cruises"
  | "honeymoon"
  | "arab";

export interface TourismCategory {
  id: TourismCategoryId;
  label: { en: string; ar: string };
}

export const tourismCategories: TourismCategory[] = [
  { id: "all", label: { en: "All", ar: "الكل" } },
  { id: "asia", label: { en: "Asia", ar: "آسيا" } },
  { id: "europe", label: { en: "Europe", ar: "أوروبا" } },
  { id: "cruises", label: { en: "Cruises", ar: "رحلات بحرية" } },
  { id: "honeymoon", label: { en: "Honeymoon", ar: "شهر عسل" } },
  { id: "arab", label: { en: "Arab World", ar: "الوطن العربي" } },
];

export const destinationSelectLabel: Record<TourismCategoryId, { en: string; ar: string }> = {
  all: { en: "Any destination", ar: "أي وجهة" },
  asia: { en: "Asia", ar: "آسيا" },
  europe: { en: "Europe", ar: "أوروبا" },
  cruises: { en: "Cruises", ar: "رحلات بحرية" },
  honeymoon: { en: "Honeymoon", ar: "شهر عسل" },
  arab: { en: "Arab World", ar: "الوطن العربي" },
};
