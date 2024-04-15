/* eslint-disable react/no-unescaped-entities */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import { EffectCreative, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import CarListButton from "@/components/buttons/CarListButton";

const Banner = () => {
  return (
    <div className="relative bottom-0 lg:bottom-24 h-full">
      <Swiper
        autoplay={{
          delay: 7000,
        }}
        grabCursor={false}
        navigation={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -1500],
          },
          next: {
            translate: [0, 0, -1500],
          },
        }}
        modules={[EffectCreative, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <motion.div
            initial={{ y: -400 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-start items-center mt-[40%] md:mt-[20%] lg:mt-[20%] xl:mt-[15%] font-quantico"
          >
            <h1 className="headings text-yellow-600">INTRODUCING</h1>
            <div className="grid">
              <h3 className="headings text-yellow-600">SPEED</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center items-center text-center mt-4 md:mt-8"
          >
            <CarListButton />
          </motion.div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-start items-center mt-[10%] text-center">
            <h1 className="text-xl md:text-3xl xl:text-4xl text-yellow-600 px-2">
              I don't believe in making a car for the future.
              <br className="hidden md:block" /> I believe in making a car for
              the day
            </h1>
            <div className="grid">
              <h3 className="text-lg md:text-2xl xl:text-3xl text-yellow-600">
                Ferruccio Lamborghini___
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-start items-center mt-[10%] text-center px-2">
            <h1 className="text-2xl md:text-3xl xl:text-4xl text-white">
              If you are asking why we are not racing in Formula 1
              <br className="hidden md:block" /> it is because we don't want to
            </h1>
            <div className="grid">
              <h3 className="text-lg md:text-2xl xl:text-3xl text-white">
                Stephan Winkelmann (Lamborghini's CEO at the time)
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
