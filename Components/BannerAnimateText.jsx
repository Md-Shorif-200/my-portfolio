"use client";
import { Typewriter } from "react-simple-typewriter";

export default function BannerAnimateText() {
  return (
    <div>
         <h3 className="text-2xl sm:text-3xl font-semibold capitalize flex items-center text-cyan-500 gap-2">
              <span className="text-[#F1F5F9]">A</span>

              <Typewriter
                words={[
                  "Full Stack Developer",
                  "React Specialist",
                  "Next.js Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                cursorColor="#55E6A5"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h3>
    </div>
  )
}
