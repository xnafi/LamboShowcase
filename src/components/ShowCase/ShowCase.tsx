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
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-[60vh] md:h-[100vh] w-[100vw] md:max-w-[1400px] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <Image
          src={image}
          className="bgWrap"
          style={{
            transform: "translateZ(75px)",
            objectFit: "contain",
          }}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          alt=""
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          HOVER ME
        </p>
      </div>
    </motion.div>
    // <motion.div
    //   ref={ref}
    //   onMouseMove={handleMouseMove}
    //   onMouseLeave={handleMouseLeave}
    //   style={{
    //     transformStyle: "preserve-3d",
    //     transform,
    //   }}
    //   className=" h-full w-[80vw] rounded-xl bg-gradient-to-br from-yellow-600 to-violet-100 mx-auto p-10"
    // >
    //   <div
    //     style={{
    //       transform: "translateZ(75px)",
    //       transformStyle: "preserve-3d",
    //     }}
    //     className="inset-3 grid place-content-center rounded-xl bg-white shadow-lg w-[75vw] h-[69vh] mx-auto"
    //   >
    //     <Image
    //       src={image}
    //       style={{
    //         transform: "translateZ(75px)",
    //       }}
    //       alt=""
    //     />
    //   </div>
    // </motion.div>
  );
};

export default ShowCase;
