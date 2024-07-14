import React from "react";
import { motion, MotionValue } from "framer-motion";

interface ScrollProgressProps {
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  springScale: MotionValue<number>;
  springOpacity: MotionValue<number>;
  children: React.ReactNode;
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({
  scale,
  opacity,
  springScale,
  springOpacity,
  children,
}) => {
  return (
    <motion.div style={{ scale: springScale, opacity: springOpacity }}>
      {children}
    </motion.div>
  );
};

export default ScrollProgress;
