import Image from "next/image";
import Marquee from "@/components/ui/SlidingLogoMarquee";

type Lang = "en" | "ar";

interface TrustedByProps {
  lang: Lang;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const heading = {
  en: "Trusted by industry leaders",
  ar: "موثوق من قادة الصناعة",
};

const imgClass =
  "mx-8 h-6 w-[120px] sm:h-8 sm:w-[165px] object-contain grayscale brightness-75 invert [backface-visibility:hidden] [-webkit-backface-visibility:hidden]";

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

      <Marquee speed={30} direction="left">
        <Image src={`${basePath}/images/booking-logo.svg`} alt="Booking.com" width={165} height={32} loading="eager" className={imgClass} />
        <Image src={`${basePath}/images/Airbnb.svg`} alt="Airbnb" width={165} height={32} loading="eager" className={imgClass} />
        <Image src={`${basePath}/images/tripadvisor.svg`} alt="TripAdvisor" width={165} height={32} loading="eager" className={imgClass} />
        <Image src={`${basePath}/images/getyourguide-svgrepo-com.svg`} alt="GetYourGuide" width={165} height={32} loading="eager" className={imgClass} />
        <Image src={`${basePath}/images/streampay.svg`} alt="StreamPay" width={165} height={32} loading="eager" className={imgClass} />
        <Image src={`${basePath}/images/hotelsdotcom-svgrepo-com.svg`} alt="Hotels.com" width={165} height={32} loading="eager" className={imgClass} />
      </Marquee>
    </section>
  );
}
