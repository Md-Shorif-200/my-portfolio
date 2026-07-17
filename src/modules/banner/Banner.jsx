"use client";

import Container from "../../components/Container";
import { FiDownload } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbWorldCheck } from "react-icons/tb";
import { BsLightningCharge } from "react-icons/bs";

const stats = [
  {
    icon: <MdOutlineWorkOutline size={22} />,
    value: "2+ Years",
    label: "Experience",
    description: "Professional web development",
  },
  {
    icon: <TbWorldCheck size={22} />,
    value: "4+ Projects",
    label: "Real World",
    description: "Production-ready applications",
  },
  {
    icon: <HiOutlineCode size={22} />,
    value: "Clean Code",
    label: "Always",
    description: "Readable & maintainable code",
  },
  {
    icon: <BsLightningCharge size={22} />,
    value: "Remote",
    label: "Friendly",
    description: "Available globally, anytime",
  },
];

export default function Banner() {
  return (
    <div className="banner w-full min-h-[90vh] flex flex-col justify-between relative bg-white dark:bg-zinc-950 overflow-hidden select-none pb-10">
      <Container>
        {/* ── Main Content ── */}
        <div className="flex flex-col items-center text-center gap-4 max-w-6xl mx-auto">
          {/* ── Heading ── */}
          <h1
            className="font-black tracking-tighter uppercase leading-[0.85] text-zinc-900 dark:text-white mt-10"
            data-aos="fade-up"
          >
            <span className="block text-7xl text-ds-text">SHORIF</span>
            <span className="block text-7xl mt-2 tracking-[1.5px] text-[#858585]">
              UDDIN RIFAT
            </span>
          </h1>

          {/* ── Role ── */}
          <p
            className="text-xl font-medium text-[#747474] dark:text-zinc-400 tracking-wider mt-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Web Developer{" "}
            <span className="text-zinc-300 dark:text-zinc-700 mx-1">|</span>{" "}
            MERN Stack Specialist{" "}
            <span className="text-zinc-300 dark:text-zinc-700 mx-1">|</span>{" "}
            Tech Enthusiast
          </p>

          {/* ── Stats Cards ── */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  group relative flex flex-col items-start gap-3 
                  p-5 rounded-2xl cursor-default
                  border border-zinc-100 dark:border-zinc-800/60
                  bg-zinc-50/80 dark:bg-zinc-900/50
                  backdrop-blur-sm
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:border-zinc-300 dark:hover:border-zinc-600
                  hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                  dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)]
                  hover:bg-white dark:hover:bg-zinc-900
                "
              >
                {/* Top row: icon + value */}
                <div className="flex items-center justify-between w-full">
                  {/* Icon */}
                  <span
                    className="
                      p-2 rounded-lg
                      bg-zinc-100 dark:bg-zinc-800
                      text-zinc-500 dark:text-zinc-400
                      group-hover:bg-zinc-900 dark:group-hover:bg-white
                      group-hover:text-white dark:group-hover:text-zinc-900
                      transition-all duration-300
                    "
                  >
                    {stat.icon}
                  </span>

                  {/* Value */}
                  <span
                    className="
                      text-lg font-bold 
                      text-zinc-800 dark:text-zinc-100
                      group-hover:text-zinc-900 dark:group-hover:text-white
                      transition-colors duration-300
                    "
                  >
                    {stat.value}
                  </span>
                </div>

                {/* Label + Description */}
                <div className="text-left">
                  <p
                    className="
                      text-base font-semibold 
                      text-zinc-700 dark:text-zinc-300
                      group-hover:text-zinc-900 dark:group-hover:text-white
                      transition-colors duration-300
                    "
                  >
                    {stat.label}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Subtle bottom accent line on hover */}
                <span
                  className="
                    absolute bottom-0 left-1/2 -translate-x-1/2
                    h-[2px] w-0 rounded-full
                    bg-zinc-800 dark:bg-white
                    group-hover:w-3/4
                    transition-all duration-500 ease-out
                  "
                />
              </div>
            ))}
          </div>

          {/* ── Download Resume Button ── */}
          <div data-aos="fade-up" data-aos-delay="300" className="mt-3">
            <a
              href="/resume.pdf"
              download
              className="
                group inline-flex items-center gap-2.5
                px-7 py-3.5 rounded-full
                bg-zinc-900 dark:bg-white
                text-white dark:text-zinc-900
                text-sm font-semibold tracking-wide
                border border-transparent
                transition-all duration-300 ease-out
                hover:bg-transparent
                hover:border-zinc-900 dark:hover:border-white
                hover:text-zinc-900 dark:hover:text-white
                hover:shadow-[0_4px_20px_rgba(0,0,0,0.10)]
                dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.08)]
                active:scale-95
              "
            >
              <FiDownload
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
              Download Resume
            </a>
          </div>
        </div>
      </Container>

      {/* ── Scroll Mouse Icon ── */}
      <div
        className="flex flex-col items-center gap-2 mt-10 opacity-60"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Mouse SVG */}
        <div
          className="
            w-6 h-10 rounded-full border-2 
            border-zinc-400 dark:border-zinc-600 
            flex justify-center pt-1.5
            relative
          "
        >
          {/* Scroll wheel dot - animated */}
          <span
            className="
              w-1 h-2 bg-zinc-400 dark:bg-zinc-500 
              rounded-full
              animate-bounce
            "
            style={{ animationDuration: "1.5s" }}
          />
        </div>
        {/* Scroll Text */}
        <p className="text-[10px] uppercase tracking-[3px] text-zinc-400 dark:text-zinc-600 font-medium">
          Scroll
        </p>
      </div>
    </div>
  );
}