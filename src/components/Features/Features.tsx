import React from "react";
import FeaturesItems from "./FeaturesItems";

function Features({ scrollYProgress }: any) {
  return (
    <div>
      <div className="h-full lg:h-full mx-auto md:px-10 px-4 mt-20 overflow-hidden flex flex-col">
        <FeaturesItems scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

export default Features;
