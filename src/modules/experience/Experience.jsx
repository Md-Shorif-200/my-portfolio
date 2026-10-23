"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Laptop, Calendar, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import ExperienceTitle from "./ExperienceTitle";

const experiences = [
  {
    id: 1,
    company: "Bigmod Technologies",
    role: "Frontend Developer",
    type: "Full Time - Remote",
    period: "January 2026 - Present",
    current: true,
    points: [
      "Developed high-performance, SEO-optimized web applications using TypeScript, Next.js, and Zustand, while maintaining clean code architecture, improving Lighthouse performance, participating in code reviews, and following modern UI/UX best practices.",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Zustand",
      "Formik",
      "Tanstack Query",
      "Swagger",
      "Performance",
      "Problem Solving",
      "Team Collaboration",
      "Adaptability",
    ],
  },
  {
    id: 2,
    company: "Devnasa Technology",
    role: "Web Developer",
    type: "Internship - Remote",
    period: "July 2025 - October 2025",
    current: false,
    points: [
      "Improved problem-solving and teamwork by translating requirements into clean code, resolving UI issues, and collaborating with senior developers to deliver stable and scalable solutions.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "React-Hook-Form",
      "Tiptap",
      "Mentorship",
      "Requirement Analysis",
    ],
  },
];

// ── Animation variants ──
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.3,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section className="pt-30 relative">
      {/* Decorative background elements - wrapped separately with overflow-hidden */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-violet-500/5 via-blue-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/5 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start relative">
          {/* Left Title Section - Sticky on scroll */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <ExperienceTitle />
          </div>

          {/* Experience Cards Container */}
          <motion.div
            className="lg:col-span-8 flex flex-col gap-5 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                className="group relative"
                variants={cardVariants}
              >
                {/* Gradient border glow effect on hover */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-violet-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-violet-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20 rounded-[18px] blur-sm transition-all duration-500 opacity-0 group-hover:opacity-100" />

                {/* Main Card */}
                <div className="relative rounded-[18px] bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_20px_-4px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] dark:group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] group-hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden">

                  {/* Current Badge - Top Right Corner */}
                  {exp.current && (
                    <div className="absolute top-0 right-0 z-10">
                      <div className="relative flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-bl-xl rounded-tr-[18px]">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                        </span>
                        <span className="text-[10px] font-bold text-white tracking-wide">
                          CURRENT
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-4 sm:p-5 md:p-6">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                      {/* Icon */}
                      <div className="shrink-0">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                          <Briefcase
                            className="w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-neutral-900"
                            strokeWidth={2}
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white dark:bg-neutral-900 border-2 border-white dark:border-neutral-900 flex items-center justify-center shadow-sm">
                            <span className="text-[9px] font-bold text-neutral-900 dark:text-neutral-100">
                              0{experiences.length - idx}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Title Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
                            {exp.role}
                          </h3>

                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                            <div className="flex items-center gap-1.5 text-[13px] sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                              <Building2
                                className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0"
                                strokeWidth={2}
                              />
                              {exp.company}
                            </div>
                            <span className="hidden sm:block w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                            <div className="flex items-center gap-1.5 text-[12.5px] sm:text-[13px] text-neutral-500 dark:text-neutral-400 font-medium">
                              <Laptop
                                className="w-3.5 h-3.5 shrink-0"
                                strokeWidth={2}
                              />
                              {exp.type}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/70 dark:border-neutral-700/50 mb-4">
                      <Calendar
                        className="w-3 h-3 text-neutral-500 dark:text-neutral-400"
                        strokeWidth={2}
                      />
                      <span className="text-[11px] sm:text-[12px] font-semibold text-neutral-700 dark:text-neutral-300 tracking-wide">
                        {exp.period}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-neutral-200 dark:from-neutral-800 via-neutral-200 dark:via-neutral-800 to-transparent mb-4" />

                    {/* Description */}
                    <div className="space-y-2.5 mb-4">
                      {exp.points.map((point, index) => (
                        <p
                          key={index}
                          className="text-[12.5px] sm:text-[13.5px] leading-relaxed text-neutral-600 dark:text-neutral-400"
                        >
                          {point}
                        </p>
                      ))}
                    </div>

                    {/* Technology Badges */}
                    <motion.div
                      className="flex flex-wrap gap-1.5"
                      variants={badgeContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      {exp.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          variants={badgeVariants}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-[10.5px] font-medium tracking-wide
                            bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800/40
                            text-neutral-700 dark:text-neutral-300
                            border border-neutral-200/80 dark:border-neutral-700/50
                            hover:border-blue-300 dark:hover:border-blue-700
                            hover:bg-gradient-to-br hover:from-blue-50 hover:to-violet-50
                            dark:hover:from-blue-950/40 dark:hover:to-violet-950/40
                            hover:text-blue-700 dark:hover:text-blue-300
                            hover:shadow-md hover:-translate-y-0.5
                            transition-all duration-300 ease-out cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent group-hover:via-blue-400 dark:group-hover:via-blue-600 transition-all duration-500" />
                </div>
              </motion.div>
            ))}

            {/* End of timeline marker */}
            <motion.div
              variants={cardVariants}
              className="flex items-center justify-center gap-2 py-3 text-neutral-400 dark:text-neutral-600"
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
              <span className="text-[11px] font-medium tracking-wide">
                More experiences coming soon
              </span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;