import Image from "next/image";
import React from "react";

export default function loading() {
  return (
    <div className="h-screen bg-transparent">
      <div className="flex justify-center items-center h-full">
        <Image
          className="h-16 w-16"
          src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
          width={200}
          height={200}
          alt=""
        />
      </div>
    </div>
  );
}
