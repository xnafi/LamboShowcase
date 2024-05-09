"use client";
import { allCarData, lamborghiniCars } from "@/app/cars";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CarDetails() {
  const router = useParams();
  const { id } = router;
  const carId = Array.isArray(id) ? id[0] : id;
  const car = lamborghiniCars.find(
    (car: allCarData) => car.id === parseInt(carId as string)
  );

  if (!car) {
    return (
      <div className="bg-black text-white">
        <div className="flex h-screen">
          <div className="m-auto text-center">
            <h1 className="text-6xl uppercase">
              The car you were looking for not available
            </h1>
            <p className="text-sm md:text-base text-yellow-300 p-2 mb-4">
              Something Went Wrong
            </p>
            <Link
              href={`/car`}
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Retry
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen md:max-w-[1400px] flex flex-col justify-center items-center text-white">
      <div className="w-full h-[40vh] md:h-[60vh] xl:h-[70%] bg-white mt-[10%] flex flex-col items-center">
        <h1 className="!relative top-20  text-teal-800">{car.model}</h1>
        <Image
          src={car.image}
          className={`mt-[20%] md:mt-[10%] xl:pb-[10%] self-center`}
          quality={100}
          height={200}
          width={1000}
          // fill
          objectFit="contain"
          sizes="90vw"
          alt=""
        />
      </div>
      {/* <h1>{car.model}</h1> */}
      <p>Year of Make: {car.yearOfMake}</p>
      <p>Fuel Type: {car.fuelType}</p>
      <p>Top Speed: {car.topSpeed}</p>
      <p>Price: {car.price}</p>
      <p>Details: {car.details}</p>
    </div>
  );
}
