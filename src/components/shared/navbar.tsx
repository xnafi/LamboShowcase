"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/logoWhite.png";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 !border-transparent bg-black w-[100vw] max-h-[140px] !z-[999] mx-auto ">
      <div className="relative flex items-center justify-between mx-auto bg-transparent w-full h-[100px] max-w-[1400px] px-4 lg:px-2">
        <Link
          href="/"
          className="inline-flex items-start justify-start active:bg-none"
        >
          <Image className="max-w-md md:hidden" src={logo} width={150} alt="" />
          <Image className="md:block hidden" src={logo} width={150} alt="" />
        </Link>
        <ul className="items-center hidden space-x-1 xl:space-x-5 uppercase font-bold text-sm lg:flex px-1 text-white menu menu-horizontal h-full lg:text-sm xl:text-base">
          <li className="hover:text-yellow-500 hover:transition-all hover:duration-300 hover:ease-in ">
            <Link
              href="/"
              className="hover:text-yellow-500 active:bg-transparent"
            >
              Home
            </Link>
          </li>

          <li className="hover:text-yellow-500 hover:transition-all hover:duration-300 hover:ease-in">
            <Link
              href="/about-us"
              className="hover:text-yellow-500 active:bg-transparent"
            >
              About us
            </Link>
          </li>

          <li className="hover:text-yellow-500 hover:transition-all hover:duration-300 hover:ease-in">
            <Link
              href="/contact"
              className="hover:text-yellow-500 active:bg-transparent"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Login And SignUp Button */}
        <div className="gap-5 hidden lg:flex ">
          <button className="btn-one hover:text-yellow-500 hover:transition-all hover:duration-300 hover:ease-in font-bold">
            LOG IN
          </button>
          <button className="btn-one hover:text-yellow-500 hover:transition-all hover:duration-300 hover:ease-in font-bold">
          SIGN UP
          </button>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            className="p-2 -mr-1 transition duration-200 rounded text-white focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-white" viewBox="0 0 24 24">
              <path
                fill="white"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="white"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="white"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-[#11475B] border rounded shadow-sm !z-[999] flex flex-col justify-center items-center">
                <div className="self-end">
                  <button
                    type="button"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:text-yellow-500 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="white"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      className="inline-flex items-start w-[261px] h-[77px]"
                    >
                      <Image src={logo} className="" alt="" />
                    </Link>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4 px-1 text-xl font-medium text-white menu menu-vertical text-center">
                    <li className="hover:text-yellow-500 hover:transition-all hover:duration-300 hover:ease-in">
                      <Link href="/" className="hover:text-yellow-500 !p-0">
                        Home
                      </Link>
                    </li>
                    <li className="hover:text-yellow-500 hover:transition-all hover:duration-300 hover:ease-in">
                      <Link
                        href="/services"
                        className="hover:text-yellow-500 !p-0"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="hover:text-yellow-500 hover:transition-all hover:duration-300 hover:ease-in">
                      <Link
                        href="/about-us"
                        className="hover:text-yellow-500 !p-0"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="hover:text-yellow-500 hover:transition-all hover:duration-300 hover:ease-in">
                      <Link
                        href="/contact"
                        className="hover:text-yellow-500 !p-0"
                      >
                        Contact Us
                      </Link>
                    </li>
                    {/* Login And SignUp Button */}
                    <div className="gap-5 flex">
                      <button className="btn-one">Login</button>
                      <button className="btn-one">Sign Up</button>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
