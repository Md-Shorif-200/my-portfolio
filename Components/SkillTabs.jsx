"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "frontend", label: "Frontend", skills: [
    "html", "css", "bootstrap", "tailwind css", "sass", "jquery", "shadcn ui", "origin ui", "react.js", "redux", "framer motion", 
  
  ] },

  { id: "backend", label: "Backend", skills: ["Node.js", "Express.js", "MongoDB","Jwt","firebase","next auth", "rest api", "Nodemailer",] },
  { id: "FullStack", label: "FullStack", skills: ["JavaScript", "Next.js"] },
  { id: "tools", label: "Tools", skills: [
    "postman", "Figma", "Photoshop","Git", "Git Hub", "vs code","axios","chrome dev tools", "Vercel", "Netlify"
  
  ] },
];

export default function SkillTabs() {
  const [active, setActive] = useState("frontend");

  return (
    <div className="mt-10">
      {/* Tabs */}
      <div className=" skill_tab w-full max-w-lg mx-auto flex gap-0 sm:gap-4  justify-center border border-green-100 py-2 rounded-4xl
    bg-[#55E6A5]/10 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={` skill_tab_cnt px-2 sm:px-4 py-2 rounded-base rounded-sm text-sm  sm:text-lg  transition-all duration-300  cursor-pointer ${
              active === tab.id
                ? "bg-[#55E6A5] text-black"
                : "bg-transparent text-gray-300 hover:text-[#55E6A5]"
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
                      className="text-gray-200 capitalize bg-[#1a1a1a] px-4 py-2 inline-block rounded-lg mx-2"
                    >
                      {skill}
                    </p>
                  ))}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
