"use client";
import React, { useRef } from "react";
import Banner from "../Banner/Banner";
import { useScroll } from "framer-motion";
import ShowCaseItems from "../ShowCase/ShowCaseItems";

export default function LandingPage() {
  const container = useRef<HTMLDivElement | null>(null);

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
