"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import { EffectCreative, Autoplay, Navigation } from "swiper/modules";
import image from "../../assets/car.png";
import Image from "next/image";
import { lamborghiniCars, allCarData } from "@/app/cars";
import Link from "next/link";
import "./showcase.css";

const ShowCase = () => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br px-4 text-slate-900 place-items-center">
      <h1 className="headings text-yellow-600 mb-10">SPEEDING BEASTS</h1>
      {/* <TiltCard /> */}
      <div className="wrapper">
        <div className="container">
          <input type="radio" name="slide" id="c1" checked />
          <label htmlFor="c1" className="card">
            <div className="row">
              <div className="icon">1</div>
              <div className="description">
                <h4>Winter</h4>
                <p>Winter has so much to offer - creative activities</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className="card">
            <div className="row">
              <div className="icon">2</div>
              <div className="description">
                <h4>Digital Technology</h4>
                <p>Gets better every day - stay tuned</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className="card">
            <div className="row">
              <div className="icon">3</div>
              <div className="description">
                <h4>Globalization</h4>
                <p>Help people all over the world</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className="card">
            <div className="row">
              <div className="icon">4</div>
              <div className="description">
                <h4>New technologies</h4>
                <p>Space engineering becomes more and more advanced</p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

const TiltCard = () => {
  return (
    <motion.div className="relative h-[60vh] md:h-[100vh] w-[90vw] md:max-w-[1400px] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300">
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
        className="mySwiper max-w-[1400px] -top-20 !mx-auto"
      >
        {lamborghiniCars.slice(0, 1).map((car: allCarData) => (
          <SwiperSlide
            key={car.id}
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className="inset-4 rounded-xl bg-white shadow-lg -top-10 w-full !h-2/3"
          >
            <div>
              <Link
                title="click for details"
                className="cursor-pointer text-yellow-300  self-end sub-heading !z-[9999]"
                href={`/car/details/${car.id}`}
              >
                <Image
                  src={car.image}
                  className="bgWrap pb-20 md:pb-10 !-z-10"
                  style={{
                    transform: "translateZ(75px)",
                    objectFit: "contain",
                  }}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ShowCase;
