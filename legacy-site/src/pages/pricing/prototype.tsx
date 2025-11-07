import { useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Layout,
  PartnerContent,
  Section,
} from "@engame/components";
import { PageLayoutProps } from "@engame/types";
import { FiCheckCircle } from "react-icons/fi";
import { AppContext } from "src/pages/_app";

const Prototype: PageLayoutProps = () => {
  const { push } = useRouter();

  const { handleToggleModal } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Prototype - Engame</title>
        <meta
          name="Sell More With Tap Master"
          content="Sell More With Tap Master"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          backgroundImage: `url("/assets/images/EG---bg.jpg")`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          perspective: "5px",
        }}
      >
        <div className="relative my-10">
          <Section bgColor="bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col justify-center space-y-2">
                <p className="text-center md:text-left font-montserrat font-extrabold pb-1 text-4xl">
                  Supercharge Your Revenue In 30-Days 
                </p>
                <p className="text-center md:text-left font-montserrat font pb-4 text-xl">
                  Skyrocket Your Sales In{" "}
                  <span className="font-bold">30 days!</span>
                  <br></br>Learn the no hassle strategy to promote your brand, engagement AND boost sales through the power of gamification with Tap Master
                </p>
                <button
                  onClick={() => handleToggleModal("signup")}
                  className="w-full md:w-60 px-5 py-2 border border-black bg-black text-white rounded font-segoeui font-bold hover:opacity-90 hover:shadow-lg"
                >
                  Sign-Up Now!
                </button>  
              </div>
              <div className="flex justify-center items-center">
                <div className="flex justify-center md:flex-1 md:justify-end max-w-lg">
                  <img
                    src="/assets/images/08 Pricing/EG---Landing-pricing_top-main(D).png"
                    width={800}
                    height={800}
                    alt="home-1"
                  />
                </div>
              </div>
            </div>
          </Section>
          </div>
        </div>
            <div className="relative grid grid-cols-1 bg-white md:grid-cols-3 gap-4 py-5" >
                <div className="flex flex-col justify-center text-center space-y-2 p-10">
                    <h1 className="font-montserrat font-bold text-center text-4xl">112,500+</h1>
                    <p className="font-montserrat font-bold text-center text-xl"> Hours Worth of<br></br>Advertisement</p>
                </div>
                <div className="flex flex-col justify-center text-center space-y-2 p-10">
                    <h1 className="font-montserrat font-bold text-center text-4xl">$76,000</h1>
                    <p className="font-montserrat font-bold text-center text-xl">Revenue Generated<br></br>From Using Tap Master</p>
                </div>
                <div className="flex flex-col justify-center text-center space-y-2 p-10">
                    <h1 className="font-montserrat font-bold text-center text-4xl">10000+</h1>
                    <p className="font-montserrat font-bold text-center text-xl">Active Players on<br></br>Tap Master</p>
               </div>
            </div>
          <div
            className="relative"
            style={{
              backgroundImage: `url('/assets/images/EG---bg-2.jpg')`,
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
              perspective: "5px",
            }}>
              <Section bgColor="trasnparent">
                <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mb-10" >
                  <div className="flex flex-col space-y-2 md:col-span-1">
                      <div className="flex flex-col justify-center items-center">
                          <img
                              src="/assets/images/10 Challenge/phone3.png"
                              max-width= "100%"
                              height="auto"
                              alt="home-1"
                          />
                      </div>
                      <br></br>
                      <div className="flex justify-center">
                        <button
                          onClick={() => handleToggleModal("signup")}
                          className="w-full md:w-60 px-5 py-2 border border-black bg-black text-white rounded font-segoeui font-bold hover:opacity-90 hover:shadow-lg"
                        >
                          Sign-Up Now!
                        </button>  
                      </div>
                  </div>
                  <div className="flex flex-col space-y-2 md:col-span-1 ">
                      <h1 className="font-montserrat font-bold text-left text-3xl leading-10">
                        When you join this challenge, you will:
                      </h1>
                      <br></br>
                      <ul className="font-montserrat text-left list-disc mt-2 text-xl leading-8 px-5">
                          <li>Learn how to use gamification to boost sales and generate more leads </li>
                          <li>Gain an insight into the future of digital advertising & its projected growth</li>
                          <li>Discover that Tap Master is easy to use, customize, and deploy for increasing order values and sales</li>
                          <li>Uncover the several, various ways to attract more customers, increase customer engagement and retention</li>
                          <li>Improve the ability of your brand to become memorable and &quot sticky &quot, keeping customers coming back for more!</li>
                          <li>And most importantly, promote your brand for FREE by being able to upload unlimited vouchers into Tap Master!!</li>
                      </ul>
                  </div>
                </div>
              </Section>
          </div>
          <Section>
            <div className="grid grid-cols-1 my-10">
              <div className="flex flex-col justify-center">
                <h2 className="w-full text-center border-b-2 border-solid border-black leading-1/10 my-10">
                  <span className="bg-white font-montserrat font-bold text-4xl">What’s included when you sign up</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gaps-4">
                <div className="px-5 py-5 m-5 rounded text-center">
                  <div className="flex items-center">
                    <p className="text-left font-montserrat font-bold text-4xl m-5">01</p>
                      <div>
                        <p className="text-left font-montserrat font-bold text-xl">
                          PRIVATE COMMUNITY
                        </p>
                        <p className="text-left font-montserrat  text-xl"> 
                          Join our private Facebook group where you can share and learn from other smart creators and business owners like yourself! 
                        </p>
                      </div>
                  </div>
                </div>
                <div className="px-5 py-5 m-5 rounded text-center">
                  <div className="flex items-center">
                    <p className="text-left font-montserrat font-bold text-4xl m-5">02</p>
                      <div>
                        <p className="text-left font-montserrat font-bold text-xl">
                          BONUS #1: Discount on subscription
                        </p>
                        <p className="text-left font-montserrat  text-xl"> 
                          When you sign-up for the challenge, you will get access to 1 month of professional package worth $299!
                        </p>
                      </div>
                  </div>
                </div>
                <div className="px-5 py-5 m-5 rounded text-center md:col-span-2">
                  <div className="flex items-center">
                      <p className="text-left font-montserrat font-bold text-4xl m-5">03</p>
                      <div>
                        <p className="text-left font-montserrat font-bold text-xl">
                          BONUS #2: Progress evaluation session
                        </p>
                        <p className="text-left font-montserrat  text-xl"> 
                          Need a second opinion on your game customization, choice of game, and vouchers? Get 1 free session with our team of experts after the challenge has ended!
                        </p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="border-b-2 border-black w-full my-10"></div>
            </div>
          </Section>
        <div
          className="relative"
          style={{
            backgroundImage: `url('/assets/images/EG---bg-2.jpg')`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            perspective: "5px",
          }}
        >
          <Section bgColor={`url('/assets/images/EG---bg-2.jpg')` ? "bg-transparent" : "bg-white"}>
            <div className="flex flex-col items-center py-10">
              <p className="text-center md:text-center font-montserrat font-bold text-4xl mb-10">
                How is the challenge structured
              </p>
              <div className="w-full px-5 py-5 mb-10 border-2 border-yellow-500 bg-black text-white rounded text-center">
                <p className="text-center font-montserrat font-bold text-3xl text-yellow-500 my-5">
                  Day 1
                </p>
                <p className="text-center font-montserrat font-bold text-2xl text-white">
                  The future of digital ads
                </p>
                <div className="flex justify-center">
                  <div className="flex justify-center border-b-2 border-yellow-500 w-1/4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <p className="md:col-span-1 text-justify font-montserrat font-bold m-10 text-xl leading-10">
                    In Day 1 you will learn more in depth about what gamification is and how it is changing the landscape of digital advertising. We will learn on how gamification can truly help to transform the marketing strategy of businesses. 
                  </p>
                  <p className="md:col-span-1 text-justify font-montserrat font-bold m-10 text-xl leading-10">
                    A business &apos goal is to have maximum reach and maximum engagement and that is exactly what Tap Master is going to help achieve for your business. Less money spent on fruitless ads means more money spent on other funnels that matter. 
                  </p>
                </div>
              </div>
              <div className="w-full px-5 py-5  border-2 border-yellow-500 bg-black text-white rounded text-center">
                <p className="text-center font-montserrat font-bold text-3xl text-yellow-500 my-5">
                  Day 2
                </p>
                <p className="text-center font-montserrat font-bold text-2xl text-white">
                  Gamifying Your Business
                </p>
                <div className="flex justify-center">
                  <div className="flex justify-center border-b-2 border-yellow-500 w-1/4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <p className="md:col-span-1 text-justify font-montserrat font-bold m-10 text-xl leading-10">
                  In Day 2 we will have a step-by-step walkthrough tutorial on how to use Tap Master. You will learn how to take full advantage of your user dashboard and how the end-user data will be able to assist and guide your promotional campaigns.
                  </p>
                  <p className="md:col-span-1 text-justify font-montserrat font-bold m-10 text-xl leading-10">
                    A business &apos goal is to have maximum reach and maximum engagement and that is exactly what Tap Master is going to help achieve for your business. Less money spent on fruitless ads means more money spent on other funnels that matter. 
                  </p>
                </div>
              </div>
            </div>
          </Section> 
        </div>
        <div className="relative mt-20"
          style={{
            backgroundImage: `url('/assets/images/EG---bg-2.jpg')`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            perspective: "5px",
          }}>
          <Section bgColor="transparent">
          <div className="grid grid-cols-1 mt-10">
            <div className="flex flex-col justify-center space-y-2">
              <p className="text-center font-montserrat font-extrabold mb-10 italic text-4xl">
                Skyrocket Your Sales In 30 Days!
              </p>
            </div>
          </div>
          <div className="w-full px-5 py-2 mb-10 border-black-100 bg-white text-black rounded text-center">
            <div className="grid grid-cols-1 md:grid-cols-1 "> 
              <div className="flex flex-col justify center p-10">
                <p className="text-center font-montserrat text-2xl">
                  Join us this 11th March & take your business <br></br>to the next level with Tap Master!
                </p>
                <div className="flex justify-center ">
                  <div className="border-b-2 border-black w-1/2 m-10"></div>
                </div>
                <p className="text-center font-montserrat text-2xl px-20">
                  LIVE on 11th March 2023 at <br></br>09.00 am MYT
                </p>
                <div className="flex justify-center">
                    <div className="border-b-2 border-black w-1/2 m-10"></div>
                </div>
                <p className="text-center font-montserrat text-2xl ">
                Level 17, Menara AmFirst, Jln 19/3, Seksyen 19, 46300 Petaling Jaya, Selangor
                </p>
                <div className="flex justify-center ">
                  {[
                    {
                      onClick: () => {
                        handleToggleModal("signup2");
                      },
                    },
                  ].map((i, pricingIndex) => {
                    const redirectPayment = () => push("/pricing/payment");
                    const handleOnClick = i.onClick ?? redirectPayment;
                    return (
                      <div
                        key={`pricing-${pricingIndex}`}
                      >
                        <button
                          onClick={handleOnClick}
                          className="w-full px-5 py-2 mt-6 text-base bg-black text-white text rounded border border-black font-montserrat font-bold hover:opacity-90 hover:shadow-lg"
                        >
                          Sign Up Now!
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          </Section>
          </div>
        <PartnerContent />
      
    </>
  );
};

Prototype.layout = Layout;

export default Prototype;
