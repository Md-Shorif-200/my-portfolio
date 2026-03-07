"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
      delay: 0,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return null;
};

export default AosInitializer;
