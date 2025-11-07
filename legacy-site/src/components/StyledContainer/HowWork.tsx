import { Section } from "@engame/components";
import { carouselResponsive } from "@engame/constants";
import Carousel from "react-multi-carousel";

const HowWork = (): JSX.Element => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: "url('/assets/images/EG---bg.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center pt-10">
          <p className="text-center font-montserrat font-semibold text-3xl">
            WHY TAP MASTER IS THE FUTURE OF MARKETING
          </p>
          <hr className="mt-2 mx-auto w-1/3 md:w-1/5 text-center border-black border-2 "/>
      </div>
      <Section bgColor="transparent">
        <div className="flex flex-col md:flex-row space-y-10 md:space-x-6 md:space-y-0 py-10">
          <div className="flex flex-grow flex-col md:max-w-md items-center justify-center md:items-start space-y-6 md:space-y-2">
            <div className="flex justify-center md:justify-left">
              <img
                src="/assets/images/01 Home/LEVEL_1.png"
                alt="level_1"
                className="w-[180px] h-auto"
              />
            </div>
            <p className="text-center md:text-left font-montserrat font-semibold text-2xl">
              NEXT GEN MARKETING
            </p>
            <p className="text-center md:text-left font-lato text-xl">
              Level up your marketing strategies with Tap Master and reach out to a greater audience!
            </p>
          </div>
          <div className="flex justify-center items-center relative w-full py-5">
            <img
              src="/assets/images/01 Home/home_1.png"
              max-width= "100%"
              width={500}
              height="auto"
              alt="home-1"
            />
          </div>
        </div>
      </Section>
      
      <div
      className="relative"
      style={{
        backgroundImage: "url('/assets/images/EG---bg-3.png')",
        backgroundSize: "cover",
      }}
      >
        <Section bgColor="bg-transparent">
          <div className="flex flex-col md:flex-row space-y-10 md:space-x-6 md:space-y-0 py-10">
            <div className="flex flex-grow flex-col items-center justify-center md:items-start md:max-w-md space-y-6 md:space-y-2 md:order-last">
              <div className="flex justify-center">
                <img
                  src="/assets/images/01 Home/LEVEL_2.png"
                  alt="LEVEL_2"
                  className="w-[180px] h-auto"
                />
              </div>
              <p className="text-center md:text-left font-montserrat font-semibold text-2xl">
                ENTER-GAGEMENT
              </p>
              <p className="text-center md:text-left font-lato text-xl">
              Tap Master helps to both entertain & engage with your customers and build a community that supports your brand.
              </p>
            </div>
            <div className="flex justify-center items-center md:justify-start relative md:w-1/2 md:order-first">
              <img
                src="/assets/images/01 Home/home_2.png"
                max-width= "100%"
                width={400}
                height="auto"
                alt="home-2"
              />
            </div>
          </div>
        </Section>
      </div>
      <Section bgColor="transparent">
        <div className="flex flex-col md:flex-row space-y-10 md:space-x-6 md:space-y-0 py-10">
          <div className="flex flex-grow flex-col md:max-w-md items-center justify-center md:items-start space-y-6 md:space-y-2">
            <div className="flex justify-center">
              <img
                src="/assets/images/01 Home/LEVEL_3.png"
                alt="level-3"
                className="w-[180px] h-auto"
              />
            </div>
            <p className="text-center md:text-left font-montserrat font-semibold text-2xl">
              REVOLUTIONIZE SALES
            </p>
            <p className="text-center md:text-left font-lato text-xl">
             Get the results that make your business last a lifetime. Scale up your business with Tap Master.
            </p>
          </div>
          <div className="flex justify-center items-center relative w-full ">
            <img
              src="/assets/images/01 Home/home_3.png"
              max-width= "100%"
              width={400}
              height="auto"
              alt="home-3"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export { HowWork };
