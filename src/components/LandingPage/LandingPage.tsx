// LandingPage.tsx
"use client";
import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import ShowCaseItems from "../ShowCase/ShowCaseItems";
import Features from "../Features/Features";

import { ScrollProvider } from "../../utils/ScrollContext";
import ScrollProgress from "@/utils/ScrollProgress";
import OurLocation from "../OurLocation/OurLocation";

const LandingPage = () => {
  return (
    <ScrollProvider>
      <ScrollProgress />
      <Banner />
      <ShowCaseItems />
      <About />
      <Features />
      <OurLocation />
    </ScrollProvider>
  );
};

export default LandingPage;
