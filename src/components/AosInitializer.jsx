"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const AosInitializer = () => {
  const pathname = usePathname();

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

  // route change হলে AOS কে position গুলো নতুন করে calculate করতে বলুন
  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  // সব image/font/content load হওয়ার পর hard refresh
  useEffect(() => {
    const handleLoad = () => AOS.refreshHard();
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return null;
};

export default AosInitializer;