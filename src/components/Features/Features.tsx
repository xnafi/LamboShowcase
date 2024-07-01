import React from "react";
import FeaturesItems from "./FeaturesItems";
import { useScrollProgress } from "@/utils/ScrollContext";
function Features() {
  const { scrollYProgress } = useScrollProgress();
  return (
    <div>
      <div className="h-full lg:h-full mx-auto md:px-10 px-4 mt-20 overflow-hidden flex flex-col">
        <FeaturesItems scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

export default Features;
