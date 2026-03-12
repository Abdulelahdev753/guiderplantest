"use client";

import {
  SlidingLogoMarquee,
  type SlidingLogoMarqueeItem,
} from "@/components/ui/SlidingLogoMarquee";

type Lang = "en" | "ar";

interface TrustedByProps {
  lang: Lang;
}

const heading = {
  en: "Trusted by industry leaders",
  ar: "موثوق من قادة الصناعة",
};

const brands: SlidingLogoMarqueeItem[] = [
  {
    id: "booking",
    content: (
      <img
        src="/images/booking-logo.svg"
        alt="Booking.com"
        loading="eager"
        decoding="sync"
        className="h-6 w-[120px] sm:h-8 sm:w-[165px] object-contain grayscale brightness-75 invert"
      />
    ),
  },
  {
    id: "airbnb",
    content: (
      <img
        src="/images/Airbnb.svg"
        alt="Airbnb"
        loading="eager"
        decoding="sync"
        className="h-6 w-[120px] sm:h-8 sm:w-[165px] object-contain grayscale brightness-75 invert"
      />
    ),
  },
  {
    id: "tripadvisor",
    content: (
      <img
        src="/images/tripadvisor.svg"
        alt="TripAdvisor"
        loading="eager"
        decoding="sync"
        className="h-6 w-[120px] sm:h-8 sm:w-[165px] object-contain grayscale brightness-75 invert"
      />
    ),
  },
  {
    id: "getyourguide",
    content: (
      <img
        src="/images/getyourguide-svgrepo-com.svg"
        alt="GetYourGuide"
        loading="eager"
        decoding="sync"
        className="h-6 w-[120px] sm:h-8 sm:w-[165px] object-contain grayscale brightness-75 invert"
      />
    ),
  },
  {
    id: "streampay",
    content: (
      <img
        src="/images/streampay.svg"
        alt="StreamPay"
        loading="eager"
        decoding="sync"
        className="h-6 w-[120px] sm:h-8 sm:w-[165px] object-contain grayscale brightness-75 invert"
      />
    ),
  },
  {
    id: "hotelscom",
    content: (
      <img
        src="/images/hotelsdotcom-svgrepo-com.svg"
        alt="Hotels.com"
        loading="eager"
        decoding="sync"
        className="h-6 w-[120px] sm:h-8 sm:w-[165px] object-contain grayscale brightness-75 invert"
      />
    ),
  },
];

export default function TrustedBy({ lang }: TrustedByProps) {
  return (
    <section className="relative py-16 sm:py-20">
      <p
        className={`text-center text-sm text-white/30 mb-12 ${
          lang === "ar"
            ? "font-[family-name:var(--font-cairo)] tracking-normal text-4xl font-semibold"
            : "tracking-widest uppercase"
        }`}
      >
        {heading[lang]}
      </p>

      <div dir="ltr">
        <SlidingLogoMarquee
          items={brands}
          speed={8}
          pauseOnHover
          enableBlur
          blurIntensity={1}
          height="80px"
          gap="2rem"
          showControls={false}
          backgroundColor="transparent"
          className="sm:[--gap:2rem]"
        />
      </div>
    </section>
  );
}
