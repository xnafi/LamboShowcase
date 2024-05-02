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
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "./showcase.module.css";

export default function ShowCaseItems() {
  return (
    <div className="relative h-[60vh] md:h-[100vh] w-[90vw] md:max-w-[1400px] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300">
      {lamborghiniCars.slice(0, 1).map((car: allCarData) => (
        <Swiper
          key={car.id}
          pagination={true}
          modules={[Pagination]}
          className={`${styles.swiper} mySwiper`}
        >
          <div className="absolute w-[98%] h-[96%] self-center mx-auto inset-0 rounded-xl bg-white shadow-lg">
            <Link
              title="click for details"
              className="cursor-pointer text-yellow-300  self-end sub-heading"
              href={`/car/details/${car.id}`}
            >
              <Image
                src={car.image}
                className={`pb-16 md:pb-8 !z-10 !h-[70%] self-center mx-auto`}
                quality={100}
                fill
                sizes="100vw"
                alt=""
              />
            </Link>

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
                {car.details.slice(0, 400)}...
              </p>

              <p
                style={{
                  transform: "translateZ(50px)",
                }}
                className="text-center primary-text font-bold block md:hidden text-yellow-300"
              >
                {car.details.slice(0, 200)}...
              </p>
            </div>
          </div>
        </Swiper>
      ))}
    </div>
  );
}
