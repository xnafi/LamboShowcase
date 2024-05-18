"use client";
import Image from "next/image";
import Link from "next/link";
import { lamborghiniCars } from "@/app/cars";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";

export default function ShowCaseItems() {
  const [carId, setCarId] = useState(null);
  const swiperRef = useRef(null);
  const animationControls = useAnimation();
  const animateImage = useAnimation();
  const animatePara = useAnimation();

  const handleSlideChange = async () => {
    animationControls.start({ y: 0, opacity: 1, scale: 1 });
    animateImage.start({ y: 0, opacity: 1, scale: 1 });
    animatePara.start({ y: 0, opacity: 1, scale: 1 });
    if (carId === carId) {
      return (
        animationControls.set({
          y: -200,
          opacity: 1,
          scale: 0,
        }),
        animateImage.set({
          y: -100,
          opacity: 0,
          scale: 0,
        }),
        animatePara.set({
          y: 100,
          opacity: 0,
          scale: 0,
        })
      );
    }
  };

  return (
    <div className="h-[70vh] md:h-[100vh] w-[90vw] md:max-w-[1400px] mx-auto rounded-xl bg-gradient-to-br">
      <Swiper
        ref={swiperRef}
        key={carId}
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        style={{
          width: "100%",
          height: "100%",
          margin: "0px",
          position: "relative",
        }}
        onSlideChange={handleSlideChange}
      >
        {lamborghiniCars.map((car) => (
          <SwiperSlide
            key={car.id}
            className={` rounded-xl mx-auto shadow-lg !h-full md:!h-[70vh] xl:!h-[80vh] border`}
          >
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={animationControls}
              transition={{
                duration: 0.5,
                ease: "easeIn",
                delay: 0.5,
                bounceDamping: 0.5,
              }}
              className="flex justify-between px-2 md:px-[10%] mt-[15%] md:mt-[10%] lg:mt-[5%] self-start w-[100%] absolute"
            >
              <div className="flex flex-col md:flex-row gap-5 md:justify-between w-full">
                <p className=" sub-heading font-bold !text-white">
                  model : {car.model.slice(0, 10)}...
                </p>
                <p className=" sub-heading font-bold !text-white">
                  top speed : {car.topSpeed}
                </p>
              </div>
            </motion.div>
            <motion.div
              className=" z-[2] flex flex-col w-full h-full"
              initial={{ x: 0, opacity: 1, scale: 1 }}
              animate={animateImage}
              transition={{
                duration: 0.5,
                delay: 0.7,
                ease: "easeIn",
                damping: 0.6,
              }}
            >
              <Link
                className="cursor-pointer z-[2] flex flex-col w-full h-full !text-white"
                href={`/car/details/${car.id}`}
                title="click for details"
              >
                <Image
                  src={car.image}
                  className={`top-[5%] lg:top-[20%] !h-[80%] md:!h-[50%] self-center mx-auto relative`}
                  quality={100}
                  width={1000}
                  height={1000}
                  style={{
                    objectFit: "contain",
                  }}
                  sizes="90vw"
                  alt=""
                />
              </Link>
            </motion.div>

            {/* details */}
            <motion.div
              initial={{ x: 0, opacity: 1, scale: 1 }}
              animate={animatePara}
              transition={{
                duration: 0.5,
                delay: 0.9,
                ease: "easeIn",
                damping: 0.6,
              }}
              className="flex px-2 md:px-[10%] flex-col absolute w-full bottom-[8%] md:bottom-[10%] !text-white"
            >
              <p className="text-center primary-text font-bold !text-white hidden md:block">
                {car.details.slice(0, 400)}
                <Link
                  className="cursor-pointer !text-white z-[2] self-center font-bold !text-md"
                  href={`/car/details/${car.id}`}
                >
                  more
                </Link>
              </p>

              <p className="text-center primary-text font-bold block md:hidden !text-white">
                {car.details.slice(0, 350)}...
                <Link
                  className="cursor-pointer !text-white z-[1] self-center font-bold !text-md"
                  href={`/car/details/${car.id}`}
                >
                  more
                </Link>
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
