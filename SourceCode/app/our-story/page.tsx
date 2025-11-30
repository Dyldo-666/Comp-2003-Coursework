// app/our-story/page.tsx
"use client";

import { useState } from "react";

import { Section } from "@/components/layout/Section";
import { Slideshow } from "@/components/marketing/Slideshow";
import { SlideshowItem } from "@/components/marketing/SlideshowItem";
import { PartnerContent } from "@/components/marketing/PartnerContent";
import { Button } from "@/components/ui/Button";

export default function OurStoryPage() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (pageNum: number) => {
    const newDirection = page > pageNum ? -1 : 1;
    setPage([pageNum, newDirection]);
  };

  return (
    <>
      {/* Title */}
      <Section>
        <div className="flex flex-col pt-10 items-center">
          <p className="text-center font-montserrat font-extrabold text-5xl md:text-6xl z-10">
            Our Story
          </p>
        </div>
      </Section>

      {/* Hero – Desktop */}
      <div
        style={{
          backgroundImage:
            "url('/assets/images/our-story/EG---Landing-ourstory_top(D).jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative mb-10 hidden md:flex md:flex-col"
      >
        <div className="h-60 lg:h-96" />
        <div className="hidden 2xl:block h-40" />
      </div>

      {/* Hero – Mobile */}
      <div className="mb-10 block md:hidden">
        <img
          src="/assets/images/our-story/EG---Landing-ourstory_top2(M).jpg"
          width={800}
          height={400}
          alt="our-story-mobile-top"
        />
      </div>

      {/* Intro text */}
      <Section>
        <div className="flex flex-col items-center space-y-6 py-10">
          <p className="text-center font-montserrat font-extrabold text-4xl">
            Our journey is like an adventure game. We are fighting enemies,
            completing tasks, leveling up, and we know we are heading the right
            way, just as the games do.
          </p>
          <p className="text-center font-montserrat font-semibold text-2xl">
            The adventure of{" "}
            <span className="font-extrabold">ENIDIA</span> started in 2018 with
            a bunch of passionate developers and artists.
          </p>
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        {[
          {
            title: "2018 – Game Start!",
            desc:
              "The beginning of every story is often so unremarkable. ENIDIA is the same. Founded in 2018, ENIDIA didn’t have deep funds or a huge team to start, but we upheld a concept: grow a studio where creative people from all around the world can gather.",
          },
          {
            title: "2019 - First Stage Clear!",
            desc:
              "It took us a year to determine our future direction. We decided to use gaming as a medium to connect businesses with their target customers and began integrating voucher-based engagement into our platform.",
          },
          {
            title: "2020 - Buffed!",
            desc:
              "With new funding, our platform gained popularity as a corporate customised solution. We enhanced performance, refreshed artwork and started working with larger brands.",
          },
          {
            title: "2021 - New Area Found!",
            desc:
              "We refined our concept into Game as a Service and expanded our ambitions to work with more partners and markets.",
          },
          {
            title: "2022 - Our Next Stage!",
            desc:
              "We were ready to launch more games and deepen our analytics capabilities to help companies capture and understand their audiences.",
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

      {/* Make Everything Fun */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 border-4 overflow-hidden border-yellow-400 rounded-2xl mb-10">
          <div className="flex flex-col space-y-8 p-8">
            <p className="font-montserrat font-extrabold text-4xl text-center md:text-left">
              Make Everything Fun! The Gamification Platform that Drives
              Engagement!
            </p>
            <ol className="list-decimal pl-4 font-montserrat font-semibold text-sm xl:text-base space-y-2">
              <li>
                Pioneer in gamification-as-a-service for brands and businesses.
              </li>
              <li>Recognised as a commercial-ready game solution.</li>
              <li>
                Selected among top startups in regional programmes and showcases.
              </li>
              <li>
                Also developing our own game projects to push creativity further.
              </li>
            </ol>
          </div>
          <div
            style={{
              backgroundImage:
                "url('/assets/images/our-story/EG---Landing-ourstory_milestone-1(M).jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="order-first md:order-none relative h-60 md:h-full"
          />
        </div>
      </Section>

      {/* Strategic Plan - with simple slider */}
      <div
        style={{
          backgroundImage:
            "url('/assets/images/backgrounds/EG---bg-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        <Section zIndex="z-30" bgColor="bg-transparent">
          <p className="py-10 font-montserrat font-extrabold text-4xl text-center capitalize">
            <span className="underline underline-yellow">Strategic Plan</span>{" "}
            That Defines A Goal Or Desired Outcome And Includes The Major Steps
            Or Milestones Needed To Reach It.
          </p>
        </Section>

        <Section bgColor="bg-transparent">
          <div className="flex flex-col space-y-10 pb-12">
            {/* Year buttons */}
            <div className="w-full flex flex-row overflow-auto space-x-2 justify-center z-10">
              {["2021", "2022", "2023"].map((label, idx) => (
                <button
                  key={label}
                  onClick={() => paginate(idx)}
                  className={
                    "px-4 py-1 rounded font-montserrat font-bold text-2xl" +
                    (page === idx
                      ? " bg-yellow-400"
                      : " hover:bg-yellow-300 bg-white/80")
                  }
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Slides */}
            <div className="flex flex-col border-b">
              <Slideshow activeKey={page} direction={direction} page={page}>
                {/* 2021 */}
                <SlideshowItem>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center items-center">
                      <img
                        src="/assets/images/our-story/EG---Landing-ourstory_milestone-2(D).png"
                        width={800}
                        height={800}
                        alt="strategic-plan-2021"
                      />
                    </div>
                    <div className="space-y-6">
                      <p className="font-montserrat font-extrabold text-3xl">
                        2021 – Platform & Merchant Features
                      </p>
                      <ul className="list-disc pl-4 font-lato text-lg space-y-2">
                        <li>Self-serve merchant templates and voucher setup.</li>
                        <li>Competition and leaderboard configuration.</li>
                        <li>Social media integration for campaigns.</li>
                      </ul>
                    </div>
                  </div>
                </SlideshowItem>

                {/* 2022 */}
                <SlideshowItem>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center items-center">
                      <img
                        src="/assets/images/our-story/EG---Landing-ourstory_milestone-2(D).png"
                        width={800}
                        height={800}
                        alt="strategic-plan-2022"
                      />
                    </div>
                    <div className="space-y-6">
                      <p className="font-montserrat font-extrabold text-3xl">
                        2022 – Reach & Analytics
                      </p>
                      <ul className="list-disc pl-4 font-lato text-lg space-y-2">
                        <li>In-game advertising and bidding capabilities.</li>
                        <li>Geo-location powered campaigns.</li>
                        <li>Broader platform releases across devices.</li>
                      </ul>
                    </div>
                  </div>
                </SlideshowItem>

                {/* 2023 */}
                <SlideshowItem>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center items-center">
                      <img
                        src="/assets/images/our-story/EG---Landing-ourstory_milestone-2(D).png"
                        width={800}
                        height={800}
                        alt="strategic-plan-2023"
                      />
                    </div>
                    <div className="space-y-6">
                      <p className="font-montserrat font-extrabold text-3xl">
                        2023 – Deeper Engagement
                      </p>
                      <ul className="list-disc pl-4 font-lato text-lg space-y-2">
                        <li>Stronger analytics dashboards.</li>
                        <li>More game experiences on the platform.</li>
                        <li>Expansion into new regions and partners.</li>
                      </ul>
                    </div>
                  </div>
                </SlideshowItem>
              </Slideshow>
            </div>
          </div>
        </Section>
      </div>

      {/* Core Team */}
      <Section>
        <div className="py-10 space-y-10">
          <div className="flex flex-col items-center">
            <p className="text-center font-montserrat font-extrabold text-4xl">
              Core Team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                image: "/assets/images/core-team/core-vincent.png",
                quote:
                  "“Grow this studio to a place where creative game people from all around the world can gather.”",
                name: "Vincent Chong",
                title: "The Mastermind CEO",
              },
              {
                image: "/assets/images/core-team/core-jasmine.png",
                quote:
                  "“Games and engagement through entertainment will drive the next shift in business.”",
                name: "Jasmine Ng",
                title: "Business Leader Co-founder",
              },
              {
                image: "/assets/images/core-team/core-tsengfeng.png",
                quote:
                  "“Whether you're a casual gamer or an enthusiast, there's a large market for us.”",
                name: "Cham Lee",
                title: "The Archbishop CTO",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center md:items-start"
              >
                <div className="flex justify-center items-center mb-6">
                  <div className="max-w-xs flex justify-center rounded-lg overflow-hidden">
                    <img
                      src={member.image}
                      width={800}
                      height={800}
                      alt={member.name}
                    />
                  </div>
                </div>
                <p className="flex-1 text-center md:text-left max-w-xs font-montserrat font-bold capitalize text-xl mb-4">
                  {member.quote}
                </p>
                <p className="text-center md:text-left max-w-xs font-montserrat font-bold capitalize text-2xl text-yellow-500 mb-2">
                  {member.name}
                </p>
                <p className="text-center md:text-left max-w-xs font-montserrat font-semibold capitalize text-xl">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Partner logos section */}
      <PartnerContent backgroundImage />

      {/* Final CTA */}
      <div
        style={{
          backgroundImage: "url('/assets/images/backgrounds/EG---bg.jpg')",
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
                  Come and join us to grow your business together.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <Button className="w-full md:w-52">Join Now</Button>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
