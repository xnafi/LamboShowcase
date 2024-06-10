import React from "react";
import FeaturesItems from "./FeaturesItems";

function Features() {
  return (
    <div>
      <div className="h-full lg:h-full w-full md:max-w-[1400px] mx-auto md:px-10 px-4 mt-20 overflow-hidden flex flex-col my-[5%]">
        <h1 className="headings !text-white text-center my-5">THE FEATURES</h1>
        <FeaturesItems />
      </div>
    </div>
  );
}

export default Features;
