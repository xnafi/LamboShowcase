"use client";
import React, { useRef } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import Banner from "../Banner/Banner";
import About from "../About/About";
import ShowCaseItems from "../ShowCase/ShowCaseItems";
import Features from "../Features/Features";

export default function LandingPage() {
  const container = useRef<HTMLDivElement | null>(null);

  // useScroll hook provides the scrollYProgress motion value
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.01 });

  return (
    <motion.div
      style={{ scrollBehavior: smoothProgress }}
      ref={container}
      className="relative h-full"
    >
      <Banner scrollYProgress={scrollYProgress} />
      <ShowCaseItems scrollYProgress={scrollYProgress} />
      <About scrollYProgress={scrollYProgress} />
      <Features scrollYProgress={scrollYProgress} />
    </motion.div>
  );
}
