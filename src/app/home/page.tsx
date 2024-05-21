"use client";
import { useScroll } from "framer-motion";
import Banner from "../../components/Banner/Banner";
import ShowCase from "../showcase/page";
import { useRef } from "react";
import About from "../about/page";

export default function Home() {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative h-[300vh]">
      <Banner scrollYProgress={scrollYProgress} />
      <ShowCase scrollYProgress={scrollYProgress} />
      <About />
    </div>
  );
}
