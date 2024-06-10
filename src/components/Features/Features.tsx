import React from "react";
import FeaturesItems from "./FeaturesItems";

function Features({ scrollYProgress }: any) {
  return (
    <div>
      <div className="h-full lg:h-full w-full md:max-w-[1400px] mx-auto md:px-10 px-4 mt-20 overflow-hidden flex flex-col my-[5%]">
        <FeaturesItems scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

export default Features;
