"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Autoplay } from "swiper/modules";

const BannerPage = () => {
  return (
    <div className="relative bottom-24 h-full">
      <Swiper
        // grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400 - 400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        className=""
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerPage;
