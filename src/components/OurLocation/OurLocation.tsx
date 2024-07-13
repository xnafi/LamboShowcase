import React from "react";
import { GoogleMapComp } from "../LandingPage/GoogleMapComp/GoogleMapComp";

export default function OurLocation() {
  return (
    <div>
      <h1 className="uppercase headings text-white text-center my-6">Search us</h1>
      <GoogleMapComp />
    </div>
  );
}
