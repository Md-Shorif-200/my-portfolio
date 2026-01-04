"use client";
import { Typewriter } from "react-simple-typewriter";

export default function BannerAnimateText() {
  return (
    <div>
         <h3 className="text-lg  lg:text-xl font-semibold capitalize flex items-center text-cyan-500 gap-2">
              <span className="">A</span>

              <Typewriter
                words={[
                  "MERN Stack Developer",
                   "Frontend Developer",
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
