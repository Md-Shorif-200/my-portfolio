"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Laptop, Calendar } from "lucide-react";
import Container from "@/components/Container";
import ExperienceTitle from "./ExperienceTitle";

const experiences = [
  {
    id: 1,
    company: "Bigmod Technologies",
    role: "Frontend Developer",
    type: "Full Time - Remote",
    period: "January 2026 - Present",
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
const timelineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "backOut", delay: 0.15 },
  },
};

const badgeContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.35,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section className="pt-30">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
          {/* Left Title Section */}
          <ExperienceTitle />

          {/* Timeline Container */}
          <motion.div
            className="lg:col-span-8 relative border-l-0 sm:border-l border-neutral-200/80 dark:border-neutral-800 ml-0 sm:ml-4 pl-0 sm:pl-11 space-y-8 sm:space-y-10"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experiences.map((exp) => (
              <motion.div key={exp.id} className="relative group" variants={cardVariants}>
                {/* Timeline Dot - hidden on mobile, visible from sm */}
                <motion.div
                  variants={dotVariants}
                  className="hidden sm:block absolute -left-[35px] sm:-left-[51px] top-2 w-3.5 h-3.5 rounded-full bg-white dark:bg-neutral-900 border-[2.5px] border-neutral-900 dark:border-neutral-100 shadow-[0_0_0_4px_rgba(0,0,0,0.04)] dark:shadow-[0_0_0_4px_rgba(255,255,255,0.04)] group-hover:bg-neutral-900 dark:group-hover:bg-neutral-100 group-hover:scale-110 transition-all duration-300 ease-out"
                />

                {/* Experience Card */}
                <div className="relative flex rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/40 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out overflow-hidden">
                  {/* Left narrow icon section */}
                  <div className="flex items-start justify-center w-12 sm:w-14 md:w-16 shrink-0 pt-5 sm:pt-6 md:pt-8 bg-neutral-100/60 dark:bg-neutral-800/60 border-r border-neutral-200/60 dark:border-neutral-800 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 transition-colors duration-300">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shadow-sm dark:shadow-none group-hover:border-neutral-300 dark:group-hover:border-neutral-600 group-hover:shadow dark:group-hover:shadow-none transition-all duration-300">
                      <Briefcase
                        className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 text-neutral-700 dark:text-neutral-300"
                        strokeWidth={1.75}
                      />
                    </div>
                  </div>

                  {/* Right main content */}
                  <div className="flex-1 p-4 sm:p-5 md:p-7">
                    {/* Subtle top accent */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 sm:mb-5">
                      <div className="space-y-2 sm:space-y-2.5">
                        {/* Role */}
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-ds-primary tracking-tight">
                          {exp.role}
                        </h3>

                        {/* Company + Type */}
                        <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1.5 text-[13px] sm:text-sm md:text-[15px]">
                          <div className="flex items-center gap-1.5 sm:gap-2 text-ds-primary/80 font-medium">
                            <Building2
                              className="w-3.5 h-3.5 text-ds-muted-foreground shrink-0"
                              strokeWidth={1.75}
                            />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-1.5 sm:gap-2 text-ds-muted-foreground font-medium">
                            <Laptop
                              className="w-3.5 h-3.5 text-ds-muted-foreground shrink-0"
                              strokeWidth={1.75}
                            />
                            {exp.type}
                          </div>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="sm:w-[200px] inline-flex items-center gap-1.5 self-start px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[11px] md:text-[12px] font-semibold tracking-wide bg-white dark:bg-neutral-900 text-ds-primary border border-neutral-200 dark:border-neutral-700 shadow-sm dark:shadow-none group-hover:border-neutral-300 dark:group-hover:border-neutral-600 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800 transition-all duration-200">
                        <Calendar
                          className="w-3 h-3 text-ds-primary/90"
                          strokeWidth={1.75}
                        />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3 text-neutral-600 dark:text-neutral-400 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed mb-5 sm:mb-6">
                      {exp.points.map((point, index) => (
                        <p
                          key={index}
                          className="text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-200"
                        >
                          {point}
                        </p>
                      ))}
                    </div>

                    {/* Technology Badges */}
                    <motion.div
                      className="flex flex-wrap gap-1.5 sm:gap-2 pt-1"
                      variants={badgeContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      {exp.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          variants={badgeVariants}
                          className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-[12px] font-medium tracking-wide
                            bg-neutral-100/70 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60
                            shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-none
                            hover:bg-white dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-600
                            hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]
                            hover:-translate-y-0.5
                            transition-all duration-300 ease-out"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;