"use client";
import React from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useScrollProgress } from "./ScrollContext";


const ScrollProgress = () => {
  const { scrollYProgress } = useScrollProgress();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 10 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 10 });

  return (
    <motion.div
      style={{
        scale: springScale,
        opacity: springOpacity,
      }}
      className="fixed top-0 left-0 right-0 h-2 bg-blue-500"
    />
  );
};

export default ScrollProgress;
