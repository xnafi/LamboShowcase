"use client";
import Image from "next/image";
import { lamborghiniCars, allCarData } from "@/app/cars";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

export default function ShowCaseItems() {
  return (
    <div className="h-[60vh] md:h-[100vh] w-[90vw] md:max-w-[1400px] mx-auto rounded-xl bg-gradient-to-br">
      <Swiper
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
      >
        {lamborghiniCars.map((car: allCarData) => (
          <SwiperSlide
            key={car.id}
            className={` rounded-xl mx-auto bg-white shadow-lg !h-full md:!h-[80vh]`}
          >
            <div className="flex justify-between px-2 md:px-[10%] mt-[15%] md:mt-[10%] lg:mt-[5%] self-start w-[100%] absolute">
              <p className="text-center sub-heading font-bold text-black">
                model : {car.model.slice(0, 10)}...
              </p>
              <p className="text-center sub-heading font-bold">
                top speed : {car.topSpeed}
              </p>
            </div>
            <Link
              className="cursor-pointer text-yellow-900 z-[2] flex flex-col w-full h-full"
              href={`/car/details/${car.id}`}
              title="click for details"
            >
              <Image
                src={car.image}
                className={`pb-[10%] md:pb-[10%] xl:pb-[5%] !h-[80%] md:!h-[70%] self-center mx-auto`}
                quality={100}
                fill
                objectFit="contain"
                sizes="90vw"
                alt=""
              />
            </Link>
            {/* details */}
            <div className="flex px-2 md:px-[10%] flex-col absolute w-full bottom-[8%] md:bottom-[10%]">
              <p className="text-center primary-text font-bold text-black hidden md:block">
                {car.details.slice(0, 400)}
                <Link
                  className="cursor-pointer text-yellow-900 z-[2] self-center font-bold !text-md"
                  href={`/car/details/${car.id}`}
                >
                  more
                </Link>
              </p>

              <p className="text-center primary-text font-bold block md:hidden text-yellow-300">
                {car.details.slice(0, 200)}...
                <Link
                  className="cursor-pointer text-yellow-900 z-[1] self-center font-bold !text-md"
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
