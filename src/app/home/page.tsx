"use client";
import { useScroll } from "framer-motion";
import Banner from "../../components/Banner/Banner";
import ShowCase from "../showcase/page";
import { useRef } from "react";
import CarDetails from "@/components/CarDetails/CarDetails";

export default function Home() {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div ref={container} className="relative h-[200vh]">
      <Banner scrollYProgress={scrollYProgress} />
      <ShowCase scrollYProgress={scrollYProgress} />
    </div>
  );
}
