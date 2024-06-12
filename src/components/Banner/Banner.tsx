/* eslint-disable react/no-unescaped-entities */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import { EffectCreative, Autoplay, Navigation } from "swiper/modules";
import { motion, useTransform, useSpring } from "framer-motion";
import CarListButton from "@/components/buttons/CarListButton";
import Image from "next/image";
import lambo1 from "../../assets/banner/alex_rainer-1_lxISUE3F4-unsplash.jpg";
import lambo2 from "../../assets/banner/nathan-van-egmond-uwrTwMaxVR4-unsplash.jpg";
import lambo3 from "../../assets/banner/pexels-adrian-newell-6968984.jpg";
import "./banner.css";
import { useRef } from "react";

const Banner = ({ scrollYProgress }: any) => {
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.4]);
  const opacity = useTransform(scrollYProgress, [0.4, 0], [-1, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const springScale = useSpring(scale, {
    stiffness: 600,
    damping: 50,
    mass: 1,
  });
  const springRotate = useSpring(rotate, {
    stiffness: 600,
    damping: 50,
    mass: 1,
  });
  const springOpacity = useSpring(opacity, {
    stiffness: 600,
    damping: 50,
    mass: 1,
  });

  const progressCircle = useRef<any>(null);
  const progressContent = useRef<any>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <motion.div
      style={{
        scale: springScale,
        rotate: springRotate,
        opacity: springOpacity,
      }}
      className="sticky top-0 h-[100vh]"
    >
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
        modules={[EffectCreative, Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bgWrap">
            <Image
              alt="lambo"
              src={lambo1}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex flex-col h-full w-full bg-black/50">
            <motion.div
              initial={{ y: -400 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col justify-start items-center mt-[90%] md:mt-[20%] lg:mt-[20%] xl:mt-[15%] font-quantico"
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
              <CarListButton href="/car" />
            </motion.div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bgWrap">
            <Image
              alt="lambo"
              src={lambo2}
              placeholder="blur"
              quality={100}
              fill
              sizes="90vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex flex-col h-screen w-full bg-black/50">
            <div className="flex flex-col justify-start items-center mt-[70%] md:mt-[20%] lg:mt-[20%] xl:mt-[15%]">
              <h1 className="text-xl md:text-3xl xl:text-4xl text-yellow-600 px-2 italic text-center">
                I don't believe in making a car for the future.
                <br className="hidden md:block" /> I believe in making a car for
                the day
              </h1>
              <div className="text-right justify-end items-end mt-4">
                <h3 className="text-sm md:text-lg xl:text-2xl text-yellow-600 italic">
                  Ferruccio Lamborghini__
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bgWrap">
            <Image
              alt="lambo"
              src={lambo3}
              placeholder="blur"
              quality={100}
              fill
              sizes="90vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex flex-col h-screen w-full bg-black/50">
            <div className="flex flex-col justify-start items-center mt-[70%] md:mt-[20%] lg:mt-[20%] xl:mt-[15%] text-center px-2">
              <h1 className="text-xl md:text-3xl xl:text-4xl text-yellow-600 px-2 italic text-center ">
                If you are asking why we are not racing in Formula 1 ?
                <br className="" /> it is because we don't want to
              </h1>

              <div className="text-right justify-end items-end mt-4">
                <h3 className="text-sm md:text-lg xl:text-2xl text-yellow-600 italic">
                  Stephan Winkelmann (CEO at the time)
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </motion.div>
  );
};

export default Banner;
