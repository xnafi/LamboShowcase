"use client";
import { useState } from "react";

function CarListButton({ setCarlist }: any) {
  const [carList, setCarList] = useState("");
  const handleCarList = () => {};
  return (
    <button
      type="button"
      onClick={handleCarList}
      className="font-quantico group relative overflow-hidden rounded-lg border-[1px] p-2 text-xl md:text-2xl mt-2"
    >
      CHOOSE YOUR BEAST
    </button>
  );
}

export default CarListButton;
