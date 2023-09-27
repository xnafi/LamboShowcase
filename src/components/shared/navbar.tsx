import Image from "next/image";
import React from "react";
import logo from "../../assets/logoWhite.png";
export default function Navbar() {
  return (
    <nav className="container p-3 mx-auto md:p-0">
      <div className="flex items-center justify-center">
        <Image src={logo} alt="" width={200} height={200} />
      </div>
    </nav>
  );
}
