"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";

const shorif_img = "/shorif-image-removebg-preview.png";

export default function BannerTyped() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `const developer = {
  name: "Shorif Uddin ",
  skills: ["Next.js", "React", "Tailwind"],
  passion: "Building Interactive UIs",
  location: "Chattogram, Bangladesh"
};`,
      ],
      typeSpeed: 40,
      backSpeed: 20,
      showCursor: true,
      cursorChar: "|",
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="relative w-full max-w-md rounded-xl shadow-xl border border-[#1f2937] bg-[#0d1117] overflow-hidden">

      <div className="relative w-full h-[400px] lg:h-[450px] bg-[#0d1117]">
  

        {/* Shorif Image overlay (centered) */}
        <div className="absolute bottom-0 -left-16 md:-left-20 lg:-left-24 overflow-hidden w-full h-[400px] lg:h-[450px]  z-20">
          <Image
            src={shorif_img}
            alt="Shorif"
            fill
            className=""
          />
        </div>

        {/* Fake VS Code top bar */}
        <div className="absolute top-0 left-0 w-full bg-[#1f2937] flex items-center gap-2 p-2 px-4 z-10">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <p className="text-sm text-gray-300 ml-3 font-semibold">script.js</p>
        </div>

        {/* Code typing area */}
        <div className="absolute top-16 -right-24 md:-right-52 w-full px-5 font-mono text-[#c9d1d9] text-sm z-10">
          <pre ref={el} />
        </div>
      </div>
    </div>
  );
}
