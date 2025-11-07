import React, {  useEffect,useState } from 'react';
import { Section } from "@engame/components";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Carousel from "react-multi-carousel";

function Carousel_1() {
  return (
    <Section bgColor="transparent">
      <div className="flex flex-col items-center py-10">
        <p className="text-center font-montserrat font-semibold text-3xl uppercase">
          LET&apos;S HEAR WHAT OUR SUBSCRIBERS HAVE TO SAY
        </p> 
        <hr className="mt-2 mb-10 mx-auto w-1/3 md:w-1/5 text-center border-black border-2 "/>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
        }}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        >
        <img
          className='rounded-2xl border border-white border-4'
          src="/assets/images/Carousel/TeaLive.png"
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%'
          }}
        />
        <img
          className='rounded-2xl border border-white border-4'
          src="/assets/images/Carousel/Fave.png"
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%'
          }}
        />
        <img
          className='rounded-2xl border border-white border-4 '
          src="/assets/images/Carousel/HerbaLife.png"
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%'
          }}
        />
        <img
          className='rounded-2xl border border-white border-4'
          src="/assets/images/Carousel/TexasChicken.png"
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%'
          }}
        />
      </Carousel>
      </div>
    </Section>
  );
}

export default Carousel_1;