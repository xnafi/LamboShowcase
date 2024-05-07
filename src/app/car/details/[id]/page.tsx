"use client";
import { useParams } from "next/navigation";
import { allCarData, lamborghiniCars } from "../../../cars";
import Image from "next/image";

const CarDetailsPage = () => {
  const router = useParams();
  const { id } = router;

  // Find the car data based on the ID
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
            <a
              href={`/car`}
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Retry
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center text-white">
      <h1>{car.model}</h1>
      <p>Year of Make: {car.yearOfMake}</p>
      <p>Fuel Type: {car.fuelType}</p>
      <p>Top Speed: {car.topSpeed}</p>
      <p>Price: {car.price}</p>
      <p>Details: {car.details}</p>
      <Image src={car.image} width={100} height={100} alt={car.model} />
    </div>
  );
};

export default CarDetailsPage;
