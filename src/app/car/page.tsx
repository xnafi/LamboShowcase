import Image from "next/image";
import { allCarData, lamborghiniCars } from "../cars";
import Link from "next/link";

export default function car() {
  return (
    <div className=" grid grid-cols-1  w-full place-items-center gap-10 px-4 mt-[40%] md:mt-[13%]">
      {lamborghiniCars.map((car: allCarData) => (
        <div
          key={car.id}
          className="h-full flex flex-col justify-center items-center space-y-6 text-white"
        >
          <div className="text-center">
            <h1 className="h-full font-bold uppercase headings text-wrap">
              {car.model}
            </h1>
          </div>
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
          <div className="flex flex-col md:grid grid-cols-2 justify-between gap-y-5 w-full md:w-[90%]">
            <p className="h-full font-bold uppercase sub-heading !text-white">
              vehicle category : {car.category}
            </p>
            <p className="h-full font-bold uppercase sub-heading !text-white ">
              Year of Make: {car.yearOfMake}
            </p>
            <p className="h-full font-bold uppercase sub-heading !text-white ">
              Fuel Type: {car.fuelType}
            </p>

            <p className="h-full font-bold uppercase sub-heading !text-white ">
              Top Speed: {car.topSpeed}
            </p>
            <p className="h-full font-bold uppercase sub-heading !text-white ">
              Price: {car.price}
            </p>
          </div>
          <div className="w-full md:w-[90%]">
            <p className="h-full font-bold uppercase sub-heading !text-white ">
              Details :
              <span className="primary-text !text-white"> {car.details}</span>
              ...
              <Link
                className="cursor-pointer text-yellow-50 z-[2] self-center primary-text !font-bold"
                href={`/car/details/${car.id}`}
              >
                more
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
