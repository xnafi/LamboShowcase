"use client";
import { useEffect } from "react";
import { animatePageIn } from "./utils/animation";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <>
      <div>
        <section
          id="banner-1"
          className="min-h-screen  bg-yellow-500 z-10 fixed top-0 left-0 w-1/4"
        ></section>
        <section
          id="banner-2"
          className="min-h-screen  bg-yellow-600 z-10 fixed top-0 left-1/4 w-1/4"
        ></section>
        <section
          id="banner-3"
          className="min-h-screen  bg-yellow-700 z-10 fixed top-0 left-2/4 w-1/4"
        ></section>
        <section
          id="banner-4"
          className="min-h-screen  bg-yellow-800 z-10 fixed top-0 left-3/4 w-1/4"
        ></section>
      </div>
      {children}
    </>
  );
}
