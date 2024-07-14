'use client'
/* eslint-disable react/no-unescaped-entities */
import { useSpring, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import about1 from "../../../public/assets/about1.jpg";
import about2 from "../../../public/assets/about2.jpg";
import arrow from "../../../public/assets/arrow-up-left.png";
import arrow2 from "../../../public/assets/arrow-up-right.png";
import { useScrollProgress } from '../../utils/ScrollContext';


export default function About() {
    const { scrollYProgress } = useScrollProgress();
  const [progress, setProgress] = useState<number>(0);

  // Transform values to achieve the desired scaling and rotating effect
  const scale = useTransform(scrollYProgress, [1, 0.5], [1, 0.3]);
  const rotate = useTransform(scrollYProgress, [0, -1.6, 1], [0, -20, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0.1, 1]);

  // Transform values to achieve the desired translation effect for the arrows
  const translateYArrows = useTransform(scrollYProgress, [0, 1], [0, 100]); // Move down as you scroll down

  // Apply spring animations to the transformed values
  const springScale = useSpring(scale, { stiffness: 500, damping: 50 });
  const springRotate = useSpring(rotate, { stiffness: 500, damping: 50 });
  const springOpacity = useSpring(opacity, { stiffness: 500, damping: 50 });
  const springTranslateYArrows = useSpring(translateYArrows, {
    stiffness: 500,
    damping: 50,
  });

  useEffect(() => {
    const handleScrollProgress = (latest: number) => {
      setProgress(latest);
    };

    // Subscribe to scrollYProgress changes
    const unsubscribe = scrollYProgress.on("change", handleScrollProgress);

    // Clean up subscription on unmount
    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <motion.div className="h-full lg:h-full w-full md:max-w-[1400px] mx-auto md:px-10 px-4 mt-20 overflow-hidden flex flex-col my-[10%]">
      {/* about part one */}
      <div className="flex flex-col lg:flex-row w-full mt-[5%] items-base gap-x-0 lg:gap-x-6">
        <div className="w-full lg:w-1/2">
          <Image alt="" src={about1} width={1000} height={1000} />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 gap-y-4">
          <h1 className="text-2xl md:text-5xl lg:text-4xl xl:text-5xl text-white">
            SUPER LUXURY DESIGN
          </h1>
          <div className="flex gap-x-2">
            <motion.div
              style={{
                translateY: springTranslateYArrows,
              }}
            >
              <Image src={arrow} alt="" width={100} height={100} />
            </motion.div>
            <p className="primary-text !text-white w-11/12 md:w-4/6">
              The Lamborghini brand epitomizes the pinnacle of super luxury
              design, seamlessly blending exhilarating performance with
              breathtaking aesthetics. Each Lamborghini vehicle is a masterpiece
              of Italian engineering, meticulously crafted to deliver an
              unparalleled driving experience. The iconic angular design,
              characterized by sharp lines and an aggressive stance, exudes a
              sense of power and dynamism. Inside, the luxurious cabins are
              adorned with the finest materials, including premium leather,
              Alcantara, and carbon fiber, offering an ambiance of opulence and
              sophistication. Lamborghini's attention to detail is evident in
              every aspect, from the precision of its V10 and V12 engines to the
              advanced aerodynamics that enhance both speed and stability.
              excellence.
            </p>
          </div>
        </div>
      </div>
      {/* about part 2 */}
      <div className="flex flex-col lg:flex-row w-full mt-[5%] items-base gap-x-0 lg:gap-x-6">
        <div className="flex flex-col w-full lg:w-1/2 gap-y-4">
          <h1 className="text-2xl md:text-5xl lg:text-4xl xl:text-5xl text-white">
            ADVANCED AERODYNAMICS
          </h1>
          <div className="flex gap-x-2">
            <p className="primary-text !text-white w-11/12 md:w-full">
              The Lamborghini brand epitomizes the pinnacle of super luxury
              design, seamlessly blending exhilarating performance with
              breathtaking aesthetics. Each Lamborghini vehicle is a masterpiece
              of Italian engineering, meticulously crafted to deliver an
              unparalleled driving experience. The iconic angular design,
              characterized by sharp lines and an aggressive stance, exudes a
              sense of power and dynamism. Inside, the luxurious cabins are
              adorned with the finest materials, including premium leather,
              Alcantara, and carbon fiber, offering an ambiance of opulence and
              sophistication. Lamborghini's attention to detail is evident in
              every aspect, from the precision of its V10 and V12 engines to the
              advanced aerodynamics that enhance both speed and stability.
              excellence.
            </p>
            <motion.div
              style={{
                translateY: springTranslateYArrows,
              }}
            >
              <Image src={arrow2} alt="" width={100} height={100} />
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image alt="" src={about2} width={1000} height={1000} />
        </div>
      </div>
    </motion.div>
  );
}
