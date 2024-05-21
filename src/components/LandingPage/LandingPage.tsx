"use client";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import Banner from "../Banner/Banner";
import ShowCaseItems from "../ShowCase/ShowCaseItems";

export default function LandingPage() {
  const container = useRef<HTMLDivElement | null>(null);

  // useScroll hook provides the scrollYProgress motion value
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative h-[300vh]">
      <Banner scrollYProgress={scrollYProgress} />
      <ShowCaseItems scrollYProgress={scrollYProgress} />
    </div>
  );
}
