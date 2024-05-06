"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import image from "../../assets/car.png";
import Image from "next/image";
import { lamborghiniCars, allCarData } from "@/app/cars";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "./showcase.module.css";

export default function ShowCaseItems() {
  return (
    <div className="h-[70vh] md:h-[100vh] w-[90vw] md:max-w-[1400px] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className={`${styles.Swiper}`}
      >
        {lamborghiniCars.map((car: allCarData) => (
          <SwiperSlide
            key={car.id}
            className={` ${styles.swiperSlide}self-center rounded-xl m-0 bg-white shadow-lg`}
          >
            <Image
              src={car.image}
              className={`pb-16 md:pb-8 !h-[60%] md:!h-[70%] self-center mx-auto`}
              quality={100}
              fill
              objectFit="contain"
              sizes="90vw"
              alt=""
            />

            <div className="flex justify-between px-2 md:px-[10%] mt-[15%] lg:mt-[5%]">
              <p
                style={{
                  transform: "translateZ(50px)",
                }}
                className="text-center sub-heading font-bold text-black"
              >
                model : {car.model}
              </p>
              <p
                style={{
                  transform: "translateZ(50px)",
                }}
                className="text-center sub-heading font-bold"
              >
                top speed : {car.topSpeed}
              </p>
            </div>

            {/* details */}
            <div className="flex px-2 md:px-[10%] flex-col absolute w-full bottom-[10%]">
              <p
                style={{
                  transform: "translateZ(50px)",
                }}
                className="text-center primary-text font-bold text-black hidden md:block"
              >
                {car.details.slice(0, 400)}...{" "}
                <Link
                  className="cursor-pointer text-yellow-900 z-[1] self-center font-bold"
                  href={`/car/details/${car.id}`}
                >
                  more
                </Link>
              </p>

              <p
                style={{
                  transform: "translateZ(50px)",
                }}
                className="text-center primary-text font-bold block md:hidden text-yellow-300"
              >
                {car.details.slice(0, 200)}...{" "}
                <Link
                  className="cursor-pointer text-yellow-900 z-[1] self-center font-bold"
                  href={`/car/details/${car.id}`}
                >
                  more
                </Link>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
