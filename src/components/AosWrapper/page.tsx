"use client";
import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
interface AOSWrapperProps {
  children: ReactNode;
}

const AOSWrapper = ({ children }: AOSWrapperProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: false,
    });
  }, []);

  return <div>{children}</div>;
};

export default AOSWrapper;
