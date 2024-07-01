"use client";
import React, { createContext, useContext, useRef } from "react";
import { useScroll, useSpring } from "framer-motion";

const ScrollContext = createContext<any>(null);

export const useScrollProgress = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const container = useRef<HTMLDivElement | null>(null);

  // useScroll hook provides the scrollYProgress motion value
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.01 });

  return (
    <ScrollContext.Provider
      value={{ scrollYProgress, smoothProgress, container }}
    >
      <div ref={container} className="relative h-full">
        {children}
      </div>
    </ScrollContext.Provider>
  );
};
