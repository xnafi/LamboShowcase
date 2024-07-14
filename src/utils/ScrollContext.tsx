
import React, { createContext, useContext, ReactNode } from "react";
import { useScroll, MotionValue } from "framer-motion";

interface ScrollContextProps {
  scrollYProgress: MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextProps>({
  scrollYProgress: { current: 0 } as unknown as MotionValue<number>,
});

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { scrollYProgress } = useScroll();

  return (
    <ScrollContext.Provider value={{ scrollYProgress }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollProgress = (): ScrollContextProps =>
  useContext(ScrollContext);
