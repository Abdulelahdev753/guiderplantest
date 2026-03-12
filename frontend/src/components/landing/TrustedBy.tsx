"use client";

import Image from "next/image";
import {
  SlidingLogoMarquee,
  type SlidingLogoMarqueeItem,
} from "@/components/ui/SlidingLogoMarquee";

type Lang = "en" | "ar";

interface TrustedByProps {
  lang: Lang;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const heading = {
  en: "Trusted by industry leaders",
  ar: "موثوق من قادة الصناعة",
};

const imgClass = "h-6 w-[120px] sm:h-8 sm:w-[165px] object-contain grayscale brightness-75 invert";

const brands: SlidingLogoMarqueeItem[] = [
  {
    id: "booking",
    content: (
      <Image src={`${basePath}/images/booking-logo.svg`} alt="Booking.com" width={165} height={32} className={imgClass} />
    ),
  },
  {
    id: "airbnb",
    content: (
      <Image src={`${basePath}/images/Airbnb.svg`} alt="Airbnb" width={165} height={32} className={imgClass} />
    ),
  },
  {
    id: "tripadvisor",
    content: (
      <Image src={`${basePath}/images/tripadvisor.svg`} alt="TripAdvisor" width={165} height={32} className={imgClass} />
    ),
  },
  {
    id: "getyourguide",
    content: (
      <Image src={`${basePath}/images/getyourguide-svgrepo-com.svg`} alt="GetYourGuide" width={165} height={32} className={imgClass} />
    ),
  },
  {
    id: "streampay",
    content: (
      <Image src={`${basePath}/images/streampay.svg`} alt="StreamPay" width={165} height={32} className={imgClass} />
    ),
  },
  {
    id: "hotelscom",
    content: (
      <Image src={`${basePath}/images/hotelsdotcom-svgrepo-com.svg`} alt="Hotels.com" width={165} height={32} className={imgClass} />
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
