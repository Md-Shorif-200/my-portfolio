"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import { BsStars } from "react-icons/bs";
import { FaCode } from "react-icons/fa";

const tabs = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      "javaScript",
      "typeScript",
      "react.js",
      "Next.js",
      "redux",
      "tailwind CSS",
      "bootstrap",
      "shadcn ui",
      "sass",
      "jquery",
      "framer motion",
      "HTML5",
      "CSS3",
    ],
  },

  {
    id: "backend",
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Jwt",
      "firebase",
      "next auth",
      "rest api",
      "Nodemailer",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      "postman",
      "Figma",
      "Photoshop",
      "Git",
      "Git Hub",
      "vs code",
      "axios",
      "chrome dev tools",
      "Vercel",
      "Netlify",
    ],
  },
];

export default function SkillTabs() {
  const [active, setActive] = useState("frontend");

  return (
    <div className="bg-[#21BF73] py-10">
      <Container>
        <div className="skill_heading flex flex-col  items-center w-full">
          <div
            className="w-[140px] py-1 text-center text-md  font-semibold bg-white/90 rounded-full uppercase primary_color flex justify-center items-center gap-1"
            // data-aos="fade-up"
          >
            <FaCode />
            Tech Stack
          </div>

          <h1 className="text-2xl md:text-3xl  my-2  text-white font-bold text-center ">
            {" "}
            Technical Expertise{" "}
          </h1>

          <p className="text-md md:text-lg text-white/90 mb-8 text-center">
            Tools and technologies I use to build reliable solutions
          </p>
        </div>
        <div
          className=" skill_tab w-full max-w-sm mx-auto flex gap-0 sm:gap-4  justify-between border border-green-100 px-2 py-1 rounded-4xl
    bg-[#55E6A5]/10 "
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={` skill_tab_cnt   px-3 py-1.5 rounded-base rounded-full text-sm  sm:text-lg  transition-all duration-300  cursor-pointer ${
                active === tab.id
                                 ? "bg-white text-[#21BF73] shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30 hover:text-[#ffffff] font-semibold"

              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <div className="mt-8 min-h-[150px] flex justify-center">
          <AnimatePresence mode="wait">
            {tabs.map(
              (tab) =>
                active === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-2"
                  >
                    {tab.skills.map((skill) => (
                      <p
                        key={skill}
                        className="text-[#21BF73] capitalize font-semibold border border-white/30 px-4 py-2 inline-block rounded-lg bg-white shadow hover:bg-white/100 hover:scale-105 transition-transform duration-300 mx-2"
                      >
                        {skill}
                      </p>
                    ))}
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
}
