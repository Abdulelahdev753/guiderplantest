"use client";

import { useState } from "react";
import type { Lang } from "@/types/lang";
import type { TravelAgency } from "@/data/countries";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Send, Minus, Plus, Phone, Globe, CheckCircle2 } from "lucide-react";

const labels = {
  book: { en: "Book with us", ar: "احجز معنا" },
  name: { en: "Full Name", ar: "الاسم الكامل" },
  namePlaceholder: { en: "Enter your name", ar: "أدخل اسمك" },
  phone: { en: "Phone Number", ar: "رقم الهاتف" },
  days: { en: "Number of Days", ar: "عدد الأيام" },
  day: { en: "day", ar: "يوم" },
  days_plural: { en: "days", ar: "أيام" },
  details: { en: "Additional Details", ar: "تفاصيل إضافية" },
  detailsPlaceholder: {
    en: "Any special requests or preferences...",
    ar: "أي طلبات أو تفضيلات خاصة...",
  },
  cancel: { en: "Cancel", ar: "إلغاء" },
  send: { en: "Send Request", ar: "إرسال الطلب" },
  submitting: { en: "Sending...", ar: "جارٍ الإرسال..." },
  success: { en: "Request sent successfully!", ar: "تم إرسال الطلب بنجاح!" },
  successDetail: {
    en: "The agency will contact you soon.",
    ar: "ستتواصل معك الوكالة قريباً.",
  },
  done: { en: "Done", ar: "تم" },
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

interface TravelAgencyCardProps {
  agency: TravelAgency;
  lang: Lang;
}

export default function TravelAgencyCard({ agency, lang }: TravelAgencyCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [days, setDays] = useState(3);
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isAr = lang === "ar";
  const arFont = isAr ? "font-[family-name:var(--font-cairo)]" : "";
  const initial = agency.name[lang].charAt(0).toUpperCase();

  function handleCancel() {
    setExpanded(false);
    setTimeout(() => {
      setName("");
      setPhone("");
      setDays(3);
      setDetails("");
      setSubmitted(false);
    }, 300);
  }

  function handleDone() {
    handleCancel();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/api/booking/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agencyId: agency.id,
          clientName: name.trim(),
          clientPhone: phone.trim(),
          days,
          details: details.trim(),
        }),
      });

      if (!res.ok) throw new Error("Failed to submit booking request");
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className={`rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06] ${
        expanded ? "shadow-lg shadow-black/20 border-white/[0.12]" : ""
      }`}
    >
      {/* Collapsed header — always visible */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
            <span className="text-orange-400 font-semibold text-lg">{initial}</span>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <h3 className={`text-lg font-semibold text-white ${arFont}`}>
                {agency.name[lang]}
              </h3>
              {!expanded && (
                <Button
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5 shrink-0"
                  onClick={() => setExpanded(true)}
                >
                  {labels.book[lang]}
                </Button>
              )}
            </div>
            <p className={`text-sm text-white/40 leading-relaxed mt-1 ${arFont}`}>
              {agency.description[lang]}
            </p>

            {/* Phone / Website */}
            {(agency.phone || agency.website) && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3">
                {agency.phone && (
                  <span className="flex items-center gap-1.5 text-xs text-white/30">
                    <Phone className="w-3.5 h-3.5" />
                    {agency.phone}
                  </span>
                )}
                {agency.website && (
                  <a
                    href={agency.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    {new URL(agency.website).hostname}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Expandable form region */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/[0.06] mx-6" />
          <div className="px-6 pb-6 pt-5">
            {submitted ? (
              /* Success state */
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <p className={`text-white font-medium mb-1 ${arFont}`}>
                  {labels.success[lang]}
                </p>
                <p className={`text-sm text-white/40 mb-5 ${arFont}`}>
                  {labels.successDetail[lang]}
                </p>
                <Button
                  variant="ghost"
                  className="text-white/50 hover:text-white rounded-full px-6"
                  onClick={handleDone}
                >
                  {labels.done[lang]}
                </Button>
              </div>
            ) : (
              /* Booking form */
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                dir="ltr"
              >
                {/* Full name */}
                <div>
                  <label className={`block text-sm text-white/70 mb-1.5 ${arFont}`}>
                    {labels.name[lang]}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={labels.namePlaceholder[lang]}
                    className="w-full rounded-lg bg-white/[0.06] border border-white/[0.1] px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 transition-colors"
                  />
                </div>

                {/* Phone number */}
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

                {/* Number of days */}
                <div>
                  <label className={`block text-sm text-white/70 mb-1.5 ${arFont}`}>
                    {labels.days[lang]}
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => setDays(Math.max(1, days - 1))}
                      className="w-10 h-10 rounded-s-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="h-10 px-5 bg-white/[0.06] border-y border-white/[0.1] flex items-center justify-center text-white font-medium text-sm min-w-[4rem]">
                      {days} {days === 1 ? labels.day[lang] : labels.days_plural[lang]}
                    </div>
                    <button
                      type="button"
                      onClick={() => setDays(Math.min(30, days + 1))}
                      className="w-10 h-10 rounded-e-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Additional details */}
                <div>
                  <label className={`block text-sm text-white/70 mb-1.5 ${arFont}`}>
                    {labels.details[lang]}
                  </label>
                  <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    rows={3}
                    placeholder={labels.detailsPlaceholder[lang]}
                    className="w-full rounded-lg bg-white/[0.06] border border-white/[0.1] px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                  />
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3 pt-1">
                  <Button
                    type="button"
                    variant="ghost"
                    className="flex-1 text-white/50 hover:text-white rounded-full"
                    onClick={handleCancel}
                  >
                    {labels.cancel[lang]}
                  </Button>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-full gap-2 disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? labels.submitting[lang] : labels.send[lang]}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
