"use client";
import { useState } from "react";

function CarListButton({ setCarlist }: any) {
  const [carList, setCarList] = useState("");
  const handleCarList = () => {};
  return (
    <button
      type="button"
      onClick={handleCarList}
      className="font-quantico buttonPrimary"
    >
      CHOOSE YOUR BEAST
    </button>
  );
}

export default CarListButton;
