import Image from "next/image";
import { allCarData, lamborghiniCars } from "../cars";

export default function car() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full place-items-center gap-10 px-4 mt-[30%] md:mt-[13%]">
      {lamborghiniCars.map((car: allCarData) => (
        <div key={car.id} className="text-white w-full">
          <h2>{car.model}</h2>
          <p>Year: {car.yearOfMake}</p>
          <p>Fuel Type: {car.fuelType}</p>
          <p>Top Speed: {car.topSpeed}</p>
          <p>Price: {car.price}</p>
          <p>Details: {car.details.slice(0, 200)}</p>
          <Image height={100} width={100} src={car.image} alt={car.model} />
        </div>
      ))}
    </div>
  );
}
