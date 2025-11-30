// components/marketing/PartnerContent.tsx
import { Section } from "@/components/layout/Section";

interface PartnerContentProps {
  backgroundImage?: boolean;
}

export function PartnerContent({ backgroundImage }: PartnerContentProps) {
  const bgClass = backgroundImage
    ? "bg-[url('/assets/images/backgrounds/EG---bg-2.jpg')] bg-cover bg-center bg-no-repeat"
    : "";

  return (
    <div className={bgClass}>
      <Section className="py-10">
        <div className="flex flex-col items-center space-y-6">
          <p className="text-center font-montserrat font-extrabold text-4xl">
            Trusted by Our Partners
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <img
              src="/assets/images/carousel/Fave.png"
              alt="Fave"
              className="mx-auto max-h-32"
            />
            <img
              src="/assets/images/carousel/HerbaLife.png"
              alt="Herbalife"
              className="mx-auto max-h-32"
            />
            <img
              src="/assets/images/carousel/TeaLive.png"
              alt="Tealive"
              className="mx-auto max-h-32"
            />
            <img
              src="/assets/images/carousel/TexasChicken.png"
              alt="Texas Chicken"
              className="mx-auto max-h-32"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
