import { ReactNode } from "react";

export interface SectionProps {
  children?: ReactNode;
  bgColor?: string;
  zIndex?: string;
  padding?: string;
  isVideo?: boolean;
  videoUrl?: string;
}

const Section = (props: SectionProps): JSX.Element => {
  const {
    children,
    bgColor = "bg-white",
    zIndex = "",
    padding = "px-4 lg:px-36",
    isVideo = false,
    videoUrl = "https://engame.tech/assets/images/1280x800.mp4",
  } = props;
  return (
    <div className="relative">
      {isVideo && (
        <video
          autoPlay
          muted
          loop
          src={videoUrl}
          className="fixed w-full h-fit"
        ></video>
      )}
      <div className={`flex ${bgColor}`}>
        <section className={`container mx-auto flex-1 ${padding} ${zIndex}`}>
          {children}
        </section>
      </div>
    </div>
  );
};

export { Section };
