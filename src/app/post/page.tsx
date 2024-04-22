import React from "react";
import { lamborghiniCars } from "../cars";
import { allCarData } from "@/types/allcar";
import Image from "next/image";

export default function page() {
  return (
    <div className="grid place-items-center h-full text-white">
      {lamborghiniCars.map((car: allCarData) => (
        <div key={car.id} className="flex flex-col space-y-5">
          <h2>{car.model}</h2>
          <p>Year: {car.yearOfMake}</p>
          <Image src={car.image} alt="" width={300} height={300} />
        </div>
      ))}
    </div>
  );
}
