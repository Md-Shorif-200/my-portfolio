"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import { FaCode, FaTools } from "react-icons/fa";
import { SiReact, SiNodedotjs } from "react-icons/si";

const tabs = [
  {
    id: "frontend",
    label: "Frontend",
    icon: <SiReact className="text-xl" />,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Redux" },
      { name: "Zustand" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "Shadcn UI" },
      { name: "Sass" },
      { name: "jQuery" },
      { name: "Framer Motion" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: <SiNodedotjs className="text-xl" />,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "JWT" },
      { name: "Firebase" },
      { name: "NextAuth" },
      { name: "REST API" },
      { name: "Nodemailer" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: <FaTools className="text-xl" />,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Postman" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Swagger" },
      { name: "Axios" },
      { name: "Chrome DevTools" },
      { name: "Vercel" },
      { name: "Netlify" },
      { name: "Figma" },
      { name: "Photoshop" }
    ],
  },
];

export default function SkillTabs() {
  const [active, setActive] = useState("frontend");

  return (
    <div className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-10 overflow-hidden">
      {/* Background blobs
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#21BF73] rounded-full blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div> */}

      <Container>
        <div className="relative z-10" data-aos="fade-up">

          {/* Header */}
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-gradient-to-r from-[#21BF73] to-[#00D9FF] rounded-full text-white mb-4">
              <FaCode />
              Tech Stack
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-4 text-center">
              Technical Expertise
            </h1>

            <p className="text-gray-300 text-md md:text-lg text-center">
              Cutting-edge tools and technologies I leverage to build scalable,
              high-performance solutions
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 cursor-pointer
                ${
                  active === tab.id
                    ? "bg-white text-[#1a1a2e] shadow-xl"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Skills */}
          <AnimatePresence mode="wait">
            {tabs.map(
              (tab) =>
                active === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                   

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                      {tab.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{
                            y: -6,
                            scale: 1.05,
                          }}
                          className="group"
                        >
                          <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-center text-center shadow-lg transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-xl">
                            {/* Hover glow */}
                            <div
                              className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tab.gradient} opacity-0 group-hover:opacity-20 blur-xl transition`}
                            ></div>

                            <p className="relative z-10 text-white font-semibold text-sm md:text-base">
                              {skill.name}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </Container>

      <style jsx global>{`
        @keyframes blob {
          0%,100% {transform: translate(0,0) scale(1);}
          33% {transform: translate(30px,-50px) scale(1.1);}
          66% {transform: translate(-20px,20px) scale(0.9);}
        }
        .animate-blob {animation: blob 7s infinite;}
        .animation-delay-2000 {animation-delay:2s;}
        .animation-delay-4000 {animation-delay:4s;}
      `}</style>
    </div>
  );
}