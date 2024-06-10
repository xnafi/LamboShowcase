import React, { useEffect, useState } from "react";
import { motion, useTransform, useSpring, MotionValue } from "framer-motion";

interface FeaturesItemsProps {
  scrollYProgress: MotionValue<number>;
}

const FeaturesItems: React.FC<FeaturesItemsProps> = ({ scrollYProgress }) => {
  type LamborghiniFeature = {
    title: string;
    description: string;
  };

  const lamborghiniFeatures: LamborghiniFeature[] = [
    {
      title: "Powerful Engine",
      description:
        "Lamborghini engines are renowned for their raw power and precision engineering. Each model boasts a formidable V10 or V12 engine, delivering an exhilarating driving experience with unparalleled acceleration and top speeds.",
    },
    {
      title: "Advanced Aerodynamics",
      description:
        "Lamborghini’s advanced aerodynamics are designed to enhance both performance and stability. The sleek, angular designs reduce drag while increasing downforce, ensuring optimal control at high speeds.",
    },
    {
      title: "Lightweight Construction",
      description:
        "Utilizing cutting-edge materials such as carbon fiber and aluminum, Lamborghini constructs vehicles that are incredibly strong yet lightweight. This results in superior performance, agility, and fuel efficiency.",
    },
    {
      title: "High Speed and Acceleration",
      description:
        "Lamborghini cars are engineered to achieve breathtaking speeds and rapid acceleration. The combination of powerful engines, aerodynamic design, and lightweight construction allows these supercars to reach top speeds swiftly and smoothly.",
    },
    {
      title: "Precision Handling",
      description:
        "With state-of-the-art suspension systems and advanced traction control, Lamborghini vehicles offer precision handling and exceptional stability. This ensures a responsive and controlled driving experience, even at high speeds.",
    },
    {
      title: "Luxurious Interiors",
      description:
        "Inside a Lamborghini, drivers and passengers are surrounded by luxury. The interiors feature the finest materials, such as premium leather and Alcantara, and advanced technology, providing both comfort and a high-end aesthetic.",
    },
  ];
  const yTransform = useTransform(scrollYProgress, [0, 1], [500, -300]);
  const springYTransform = useSpring(yTransform, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div className="flex flex-col items-center ">
      <motion.h1
        style={{
          y: springYTransform,
        }}
        className="headings !text-white text-center my-5 mt-[25%]"
      >
        THE FEATURES
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
        {lamborghiniFeatures.map((feature) => (
          <motion.div
            key={feature.title}
            style={{
              y: springYTransform,
            }}
            className="space-y-2"
          >
            <h2 className="feature-title text-white">{feature.title}</h2>
            <p className="feature-description !text-white/50">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesItems;
