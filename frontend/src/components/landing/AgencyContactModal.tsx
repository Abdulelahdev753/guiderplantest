"use client";

import { useState } from "react";
import type { Lang } from "@/types/lang";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";
import {
  tourismCategories,
  destinationSelectLabel,
  type TourismCategoryId,
} from "@/data/tourismCategories";

const labels = {
  title: { en: "Contact Travel Agencies", ar: "تواصل مع وكالات السفر" },
  subtitle: {
    en: "Fill in the form and we'll contact you soon.",
    ar: "املأ النموذج وسنتواصل معك قريباً.",
  },
  name: { en: "Full Name", ar: "الاسم الكامل" },
  namePlaceholder: { en: "Enter your name", ar: "أدخل اسمك" },
  phone: { en: "Phone Number", ar: "رقم الجوال" },
  destination: { en: "Preferred Destination", ar: "الوجهة المفضلة" },
  destinationPlaceholder: {
    en: "Select your preferred destination...",
    ar: "اختر وجهتك المفضلة...",
  },
  message: { en: "Your Message", ar: "رسالتك" },
  messagePlaceholder: {
    en: "Tell us about your trip — group size, dates, anything special...",
    ar: "أخبرنا عن رحلتك — عدد الأشخاص، التواريخ، أي شيء خاص...",
  },
  submit: { en: "Send Request", ar: "إرسال الطلب" },
  submitting: { en: "Sending...", ar: "جارٍ الإرسال..." },
  successTitle: {
    en: "Your request has been sent successfully. We'll contact you soon 🎉",
    ar: "تم إرسال طلبك بنجاح، سنتواصل معك قريباً 🎉",
  },
  done: { en: "Done", ar: "تم" },
  errorGeneric: {
    en: "Something went wrong. Please try again.",
    ar: "حدث خطأ. يرجى المحاولة مرة أخرى.",
  },
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

interface Props {
  open: boolean;
  onClose: () => void;
  lang: Lang;
}

export default function AgencyContactModal({ open, onClose, lang }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState<TourismCategoryId | "">("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isAr = lang === "ar";
  const arFont = isAr ? "font-[family-name:var(--font-cairo)]" : "";

  function close() {
    if (submitting) return;
    onClose();
    setTimeout(() => {
      setName("");
      setPhone("");
      setDestination("");
      setMessage("");
      setSubmitted(false);
      setError("");
    }, 200);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/agency-contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          destination,
          destinationLabel: destination
            ? destinationSelectLabel[destination as TourismCategoryId].en
            : "",
          message: message.trim(),
          lang,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to submit");
      }

      setSubmitted(true);
    } catch {
      setError(labels.errorGeneric[lang]);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={(o) => !o && close()}>
      <DialogContent className="bg-neutral-950 border-white/[0.08] text-white max-w-md">
        <DialogHeader>
          <DialogTitle className={`text-xl font-bold ${arFont}`}>
            {labels.title[lang]}
          </DialogTitle>
          <DialogDescription className={`text-white/50 ${arFont}`}>
            {labels.subtitle[lang]}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>
            <p className={`text-white font-medium mb-5 leading-relaxed ${arFont}`}>
              {labels.successTitle[lang]}
            </p>
            <Button
              variant="ghost"
              className="text-white/50 hover:text-white rounded-full px-6"
              onClick={close}
            >
              {labels.done[lang]}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2" dir="ltr">
            <div>
              <label className={`block text-sm text-white/70 mb-1.5 ${arFont}`}>
                {labels.name[lang]}
              </label>
              <input
                type="text"
                required
                dir={isAr ? "rtl" : undefined}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={labels.namePlaceholder[lang]}
                className="w-full rounded-lg bg-white/[0.06] border border-white/[0.1] px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 transition-colors"
              />
            </div>

            <div>
              <label className={`block text-sm text-white/70 mb-1.5 ${arFont}`}>
                {labels.phone[lang]}
              </label>
              <PhoneInput
                defaultCountry="sa"
                value={phone}
                onChange={(p) => setPhone(p)}
              />
            </div>

            <div>
              <label className={`block text-sm text-white/70 mb-1.5 ${arFont}`}>
                {labels.destination[lang]}
              </label>
              <div className="relative">
                <select
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value as TourismCategoryId)}
                  dir={isAr ? "rtl" : undefined}
                  suppressHydrationWarning
                  className={`w-full appearance-none rounded-lg bg-white/[0.06] border border-white/[0.1] px-4 py-2.5 text-white focus:outline-none focus:border-orange-500/50 transition-colors cursor-pointer ${arFont}`}
                >
                  <option value="" disabled>
                    {labels.destinationPlaceholder[lang]}
                  </option>
                  {tourismCategories.map((c) => (
                    <option key={c.id} value={c.id} className="bg-neutral-950">
                      {destinationSelectLabel[c.id][lang]}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className={`absolute top-1/2 -translate-y-1/2 ${isAr ? "left-3" : "right-3"} w-4 h-4 text-white/40 pointer-events-none`}
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm text-white/70 mb-1.5 ${arFont}`}>
                {labels.message[lang]}
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                dir={isAr ? "rtl" : undefined}
                rows={4}
                placeholder={labels.messagePlaceholder[lang]}
                className="w-full rounded-lg bg-white/[0.06] border border-white/[0.1] px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
              />
            </div>

            {error && (
              <div className={`rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400 ${arFont}`}>
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full gap-2 py-2.5 mt-2 disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {submitting ? labels.submitting[lang] : labels.submit[lang]}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
