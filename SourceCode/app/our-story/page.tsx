// app/our-story/page.tsx
"use client";

import { useState } from "react";

import { Section } from "@/components/layout/Section";
// TODO: Ensure these components are created in components/marketing:
// Slideshow.tsx, SlideshowItem.tsx, PartnerContent.tsx
import { Slideshow } from "@/components/marketing/Slideshow";
import { SlideshowItem } from "@/components/marketing/SlideshowItem";
import { PartnerContent } from "@/components/marketing/PartnerContent";

export const metadata = {
  title: "Our Story – ENIDIA",
  description: "Learn about the story and mission behind ENIDIA.",
};

export default function OurStoryPage() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (pageNum: number) => {
    const newDirection = page > pageNum ? -1 : 1;
    setPage([pageNum, newDirection]);
  };

  return (
    <>
      <Section>
        <div className="flex flex-col pt-10 items-center">
          <p className="text-center font-montserrat font-extrabold text-5xl md:text-6xl z-10">
            Our Story
          </p>
        </div>
      </Section>

      <div
        style={{
          backgroundImage:
            "url('/assets/images/02 Our story/EG---Landing-ourstory_top(D).jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative mb-10 hidden md:flex md:flex-col"
      >
        <div className="h-60 lg:h-96"></div>
        <div className="hidden 2xl:block h-40"></div>
      </div>

      <div className="mb-10 block md:hidden">
        <img
          src="/assets/images/02 Our story/EG---Landing-ourstory_top2(M).jpg"
          width={800}
          height={400}
          alt="our-story-mobile-top"
        />
      </div>

      <Section>
        <div className="flex flex-col items-center space-y-6 py-10">
          <p className="text-center font-montserrat font-extrabold text-4xl">
            Our journey is like an adventure game. We are fighting enemies,
            completing tasks, leveling up, and we know we are heading the right
            way, just as the games do.
          </p>
          <p className="text-center font-montserrat font-semibold text-2xl">
            The adventure of <span className="font-extrabold">ENIDIA</span> started
            in 2018 with a bunch of passionate developers and artists.
          </p>
        </div>
      </Section>

      <Section>
        {[
          {
            title: "2018 – Game Start!",
            desc:
              "The beginning of every story is often so unremarkable. Engame is the same. Founded on 8 Jan 2018, Engame doesn’t have deep funds or a huge team to start, but we uphold a concept…",
          },
          {
            title: "2019 - First Stage Clear!",
            desc:
              "It took us a year to determine our future direction. We decided to avail gaming as a medium to connect businesses with their target customers…",
          },
          {
            title: "2020 - Buffed!",
            desc:
              "With the funding from MDEC, Tap Master is gaining popularity as a corporate custom solution platform…",
          },
          {
            title: "2021 - New Area Found!",
            desc:
              "Under the mentorship of Jasmine, we reformed our concept to Game as a Service…",
          },
          {
            title: "2022 - Our Next Stage!",
            desc:
              "Our team is excited about the arrival of 2022 as we will be launching five new games during the year!…",
          },
        ].map((item, k) => {
          const even = k % 2 === 0;
          return (
            <div
              key={k}
              className={
                "flex flex-row md:space-x-6" +
                (even ? "" : " md:flex-row-reverse space-x md:space-x-reverse")
              }
            >
              <div className="flex-1 hidden md:block" />
              <div className="flex flex-col items-center mr-8 md:mr-0">
                <div
                  className={
                    "h-5 w-5 rounded-full border-4" +
                    (even ? " border-yellow-300" : " border-yellow-500")
                  }
                />
                <div
                  className={
                    "flex-1 h-20 w-1 border-2" +
                    (even ? " border-yellow-300" : " border-yellow-500")
                  }
                />
              </div>
              <div className="flex-1 flex flex-col mb-8">
                <p
                  className={
                    "font-montserrat font-extrabold text-4xl" +
                    (even ? "" : " md:text-right")
                  }
                >
                  {item.title}
                </p>
                <p
                  className={
                    "font-lato font-bold text-lg" +
                    (even ? "" : " md:text-right")
                  }
                >
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 border-4 overflow-hidden border-yellow-400 rounded-2xl mb-10">
          <div className="flex flex-col space-y-8 p-8">
            <p className="font-montserrat font-extrabold text-4xl text-center md:text-left">
              Make Everything Fun! The Gamification Platform that Drives Engagement!
            </p>
            <ol className="list-decimal pl-4 font-montserrat font-semibold text-sm xl:text-base">
              <li>Pioneer in offering Games as a Service – Tap Master to brands & businesses such as Tealive, Fave, Mydin and Herbalife</li>
              <li>Commercial Ready Game Winner of MDEC DiCE</li>
              <li>The only game studio selected by Maxis as one of the Top 100 startups in Maxis Market Access Day</li>
              <li>Also developing on our own game “Rogue Planet”, scheduled to be launched in 5 years</li>
            </ol>
          </div>
          <div
            style={{
              backgroundImage:
                "url('/assets/images/02 Our story/EG---Landing-ourstory_milistle-1(M).jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="order-first md:order-none relative h-60 md:h-full"
          />
        </div>
      </Section>

      <div
        style={{
          backgroundImage: "url('/assets/images/EG---bg-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        <Section zIndex="z-30" bgColor="bg-transparent">
          <p className="py-10 font-montserrat font-extrabold text-4xl text-center capitalize">
            <span className="underline underline-yellow">Strategic Plan</span>{" "}
            That Defines A Goal Or Desired Outcome And Includes The Major Steps Or Milestones Needed To Reach It.
          </p>
        </Section>
        <Section bgColor="bg-transparent">
          <div className="flex flex-col space-y-10">
            <div className="w-full flex flex-row overflow-auto space-x-2 justify-center z-10">
              <button
                onClick={() => paginate(0)}
                className={
                  "px-4 py-1 rounded font-montserrat font-bold text-2xl" +
                  (page === 0 ? " bg-yellow-400" : " hover:bg-yellow-300")
                }
              >
                2021
              </button>
              <button
                onClick={() => paginate(1)}
                className={
                  "px-4 py-1 rounded font-montserrat font-bold text-2xl" +
                  (page === 1 ? " bg-yellow-400" : " hover:bg-yellow-300")
                }
              >
                2022
              </button>
              <button
                onClick={() => paginate(2)}
                className={
                  "px-4 py-1 rounded font-montserrat font-bold text-2xl" +
                  (page === 2 ? " bg-yellow-400" : " hover:bg-yellow-300")
                }
              >
                2023
              </button>
            </div>
            <div className="flex flex-col border-b">
              <Slideshow activeKey={page} direction={direction} page={page}>
                <SlideshowItem key={`1-slideshowitem`}>
                  {/* Slide content */}
                </SlideshowItem>
                <SlideshowItem key={`2-slideshowitem`}>
                  {/* Slide content */}
                </SlideshowItem>
                <SlideshowItem key={`3-slideshowitem`}>
                  {/* Slide content */}
                </SlideshowItem>
              </Slideshow>
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <div className="py-10 space-y-10">
          <div className="flex flex-col items-center">
            <p className="text-center font-montserrat font-extrabold text-4xl">
              Core Team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Team cards */}
          </div>
        </div>
      </Section>

      <PartnerContent backgroundImage />

      <div
        style={{
          backgroundImage: "url('/assets/images/EG---bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        <Section zIndex="z-10" bgColor="bg-transparent">
          <div className="bg-white rounded-xl p-10 shadow-lg my-10">
            <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-8">
              <div className="flex flex-col space-y-2">
                <p className="text-center md:text-left font-montserrat font-bold text-3xl capitalize">
                  Are you interested to join us? Let’s grow together!
                </p>
                <p className="text-center md:text-left font-lato text-xl">
                  Come and join us to grow your business together
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <Button variant="ghost" className="w-full md:w-52">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
