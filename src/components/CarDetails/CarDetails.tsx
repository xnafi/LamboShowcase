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
    <div className="h-full md:max-w-[1400px] flex flex-col justify-center px-4 space-y-6 text-white  mt-[40%] md:mt-[23%] lg:mt-[15%] xl:mt-[10%]">
      <div className="w-full flex flex-col">
        {/* car image */}
        <Image
          alt="lambo"
          src={car.image}
          className={`self-center relative`}
          quality={100}
          height={200}
          width={900}
          style={{
            objectFit: "contain",
          }}
          sizes="90vw"
        />
      </div>
      <div className="flex flex-col lg:grid grid-cols-2 mx-auto gap-5 items-start w-full md:w-[90%]">
        <h1 className="font-bold uppercase sub-heading  !text-white">
          {car.model}
        </h1>

        <p className="font-bold uppercase sub-heading  !text-white">
          vehicle category : {car.category}
        </p>
        <p className="font-bold uppercase sub-heading !text-white ">
          Year of Make: {car.yearOfMake}
        </p>
        <p className="font-bold uppercase sub-heading !text-white ">
          Fuel Type: {car.fuelType}
        </p>

        <p className="font-bold uppercase sub-heading !text-white ">
          Top Speed: {car.topSpeed}
        </p>
        <p className="font-bold uppercase sub-heading !text-white ">
          Price: {car.price}
        </p>
      </div>
      <div>
        <p className="font-bold uppercase sub-heading !text-white lg:text-left w-full md:w-[90%] lg:mx-auto">
          Details :
          <span className="primary-text !text-white"> {car.details}</span>
        </p>
      </div>
    </div>
  );
}
