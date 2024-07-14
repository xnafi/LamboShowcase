"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/logoWhite.png";
import { TransitionLink } from "@/utils/TranitionLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = usePathname();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => router === path;

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="bg-[#6F4E19]/50 text-white fixed top-0 w-full transition-all duration-500 z-[999] backdrop-blur-md"
    >
      <div className="max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-[100px] w-full">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={handleToggle}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center mx-auto sm:items-stretch sm:justify-between w-full">
            <div className="flex-shrink-0">
              <TransitionLink href="/" onClick={handleClose}>
                <Image src={logo} alt="logo" height={100} width={100} />
              </TransitionLink>
            </div>
            <div className="hidden sm:flex sm:ml-2 justify-center items-center">
              <div className="flex md:space-x-0 lg:space-x-4 items-center">
                <TransitionLink href="/home">
                  <span
                    className={`px-3 py-2 rounded-md text-md font-medium ${
                      isActive("/home")
                        ? "bg-gray-900"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    Home
                  </span>
                </TransitionLink>
                <TransitionLink href="/about">
                  <span
                    className={`px-3 py-2 rounded-md text-md font-medium ${
                      isActive("/about")
                        ? "bg-gray-900"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    About
                  </span>
                </TransitionLink>
                <TransitionLink href="/contact">
                  <span
                    className={`px-3 py-2 rounded-md text-md font-medium ${
                      isActive("/contact")
                        ? "bg-gray-900"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    Contact
                  </span>
                </TransitionLink>
              </div>
            </div>
            <div className="hidden sm:flex sm:ml-2">
              <div className="flex md:space-x-0 lg:space-x-4 items-center">
                <TransitionLink href="/login">
                  <span
                    className={`px-3 py-2 rounded-md text-md font-medium ${
                      isActive("/login")
                        ? "bg-gray-900"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    Login
                  </span>
                </TransitionLink>
                <TransitionLink href="/sign-up">
                  <span
                    className={`px-3 py-2 rounded-md text-md font-medium ${
                      isActive("/sign-up")
                        ? "bg-gray-900"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    Sign Up
                  </span>
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="sm:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <TransitionLink href="/" onClick={handleClose}>
            <span
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/")
                  ? "bg-gray-900"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              Home
            </span>
          </TransitionLink>
          <TransitionLink href="/about" onClick={handleClose}>
            <span
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/about")
                  ? "bg-gray-900"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              About
            </span>
          </TransitionLink>

          <TransitionLink href="/contact" onClick={handleClose}>
            <span
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/contact")
                  ? "bg-gray-900"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              Contact
            </span>
          </TransitionLink>
          <TransitionLink href="/login" onClick={handleClose}>
            <span
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/login")
                  ? "bg-gray-900"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              Login
            </span>
          </TransitionLink>
          <TransitionLink href="/sign-up" onClick={handleClose}>
            <span
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/sign-up")
                  ? "bg-gray-900"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              Sign Up
            </span>
          </TransitionLink>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
