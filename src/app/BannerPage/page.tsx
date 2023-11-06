"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import { EffectCreative, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

const BannerPage = () => {
  return (
    <div className="relative bottom-0 lg:bottom-24 h-full">
      <Swiper
        autoplay={{
          delay: 7000,
          disableOnInteraction: true,
        }}
        navigation={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay, Navigation]}
        className=""
      >
        <SwiperSlide className="">
          <div className="flex flex-col justify-start items-center mt-[10%]">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "tween",
                  damping: 5,
                  stiffness: { type: "spring" },
                  restDelta: 0.001,
                },
              }}
              className="text-4xl md:text-6xl xl:text-8xl text-yellow-600"
            >
              INTRODUCING
            </motion.h1>
            <div className="grid">
              <motion.h3
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 2,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "tween",
                    damping: 5,
                    stiffness: 50,
                    restDelta: 0.001,
                  },
                }}
                className="text-4xl md:text-6xl xl:text-8xl text-yellow-600"
              >
                SPEED
              </motion.h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerPage;
