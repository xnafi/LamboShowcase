"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const Nav: React.FC<NavProps> = ({ Component, pageProps }) => {
  return (
    <main>
      <div className="flex justify-between">
        <Link href="/about-us" passHref>
          home
        </Link>
        <Link href="/about-us" passHref>
          About Us
        </Link>
        <Link href="/about-us" passHref>
          About Us
        </Link>
      </div>
      <AnimatePresence mode="wait">
        <Component  {...pageProps} />
      </AnimatePresence>
    </main>
  );
};

export default Nav;
