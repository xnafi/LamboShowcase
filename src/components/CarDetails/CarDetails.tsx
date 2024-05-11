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
    <div className="h-full md:max-w-[1400px] flex flex-col justify-center text-white  mt-[35%] md:mt-[20%] lg:mt-[15%]">
      <div className="w-full flex flex-col">
        <Image
          src={car.image}
          className={`self-center relative`}
          quality={100}
          height={200}
          width={1000}
          objectFit="contain"
          sizes="90vw"
          alt=""
        />
      </div>
      <div className="flex flex-col w-[90%] mx-auto justify-center items-center space-y-3">
        <h1 className="h-full font-bold uppercase headings !text-left self-start">
          {car.model}
        </h1>

        <p className="h-full font-bold uppercase sub-heading !text-white self-start">
          vehicle category : {car.category}
        </p>
        <p className="h-full font-bold uppercase sub-heading !text-white self-start">
          Year of Make: {car.yearOfMake}
        </p>
        <p className="h-full font-bold uppercase sub-heading !text-white self-start">
          Fuel Type: {car.fuelType}
        </p>

        <p className="h-full font-bold uppercase sub-heading !text-white self-start">
          Top Speed: {car.topSpeed}
        </p>
        <p className="h-full font-bold uppercase sub-heading !text-white self-start">
          Price: {car.price}
        </p>
        <p className="h-full font-bold uppercase sub-heading !text-white self-start">
          Details : <span className="primary-text !text-white"> {car.details}</span>
        </p>
      </div>
    </div>
  );
}
