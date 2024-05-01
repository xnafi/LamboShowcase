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

const ShowCase = () => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br px-4 text-slate-900 place-items-center">
      <h1 className="headings text-yellow-600 mb-10">SPEEDING BEASTS</h1>
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative h-[60vh] md:h-[100vh] w-[90vw] md:max-w-[1400px] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300">
      {lamborghiniCars.slice(0, 10).map((car: allCarData) => (
        <Swiper
          key={car.id}
          pagination={true}
          modules={[Pagination]}
          className={`${styles.swiper} mySwiper`}
        >
          <div className="absolute inset-4 rounded-xl bg-white shadow-lg">
            <Link
              title="click for details"
              className="cursor-pointer text-yellow-300  self-end sub-heading"
              href={`/car/details/${car.id}`}
            >
              <Image
                src={car.image}
                className="bgWrap pb-20 md:pb-10"
                quality={100}
                fill
                sizes="90vw"
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
};

export default ShowCase;
