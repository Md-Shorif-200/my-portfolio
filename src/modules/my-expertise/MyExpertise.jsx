"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  ShieldCheck,
  Users,
  GraduationCap,
  // Lightbulb,
  // ArrowUpRight,
  Blocks,
} from "lucide-react";
import Container from "@/components/Container";
import SectionTitle from "@/components/common/SectionTitle";

// ── Animation variants ──
const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const featuredCardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.45, ease: "backOut", delay: 0.15 },
  },
};

const MyExpertise = () => {
  return (
    <section className="section_top_padding">
      <Container className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionTitle align="left" badgeText="What I Do" title="My Expertise" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[210px]"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* ── Card 1: Full-Stack Web Development (2×2 Featured Card) ── */}
          <motion.div
            variants={featuredCardVariants}
            whileHover={{ y: -3 }}
            className="sm:col-span-2 lg:row-span-2 group relative bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-neutral-900 dark:via-neutral-900/80 dark:to-neutral-950 rounded-3xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-black/40 hover:border hover:border-ds-border transition-shadow duration-300 border border-gray-100 dark:border-neutral-800"
          >
            {/* Watermark Icon */}
            <div className="absolute right-6 bottom-6 opacity-[0.06] dark:opacity-[0.08] pointer-events-none text-gray-900 dark:text-white">
              <Blocks size={170} strokeWidth={1.25} />
            </div>

            {/* Header Row */}
            <div className="relative z-10 flex items-start justify-between">
              <motion.div
                variants={iconVariants}
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-gray-100 dark:border-neutral-700 flex items-center justify-center text-gray-900 dark:text-white"
              >
                <Code2 size={22} />
              </motion.div>
              {/* <ArrowUpRight size={18} className="text-gray-300 group-hover:text-gray-600 transition-colors duration-200" /> */}
            </div>

            {/* Body Content */}
            <div className="relative z-10 mt-3 lg:mt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-ds-text leading-tight">
                Full-Stack Development
              </h3>
              <p className="mt-1 sm:mt-3 text-ds-muted-foreground text-sm sm:text-base font-medium md:text-base leading-relaxed max-w-sm">
                Building scalable web applications from end-to-end.
              </p>
            </div>
          </motion.div>

          {/* ── Card 2: Performance & Quality Assurance ── */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -3 }}
            className="group relative bg-gradient-to-br from-orange-50 via-white to-white dark:from-orange-950/20 dark:via-neutral-900 dark:to-neutral-900 rounded-3xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-black/40 hover:border hover:border-ds-border transition-shadow duration-300 border border-gray-100 dark:border-neutral-800"
          >
            <div className="absolute right-3 bottom-3 opacity-[0.08] dark:opacity-[0.12] pointer-events-none text-orange-900 dark:text-orange-400">
              <ShieldCheck size={100} strokeWidth={1.5} />
            </div>

            <div className="relative z-10 flex items-start justify-between">
              <motion.div
                variants={iconVariants}
                className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-gray-100 dark:border-neutral-700 flex items-center justify-center text-gray-900 dark:text-white"
              >
                <ShieldCheck size={18} />
              </motion.div>
              {/* <ArrowUpRight size={14} className="text-gray-300 group-hover:text-gray-500 transition-colors duration-200" /> */}
            </div>

            <div className="relative z-10">
              <h3 className="text-xl lg:text-base xl:text-xl font-bold text-ds-text leading-snug">
                Performance & Quality Assurance
              </h3>
              <p className="mt-1 text-ds-muted-foreground text-sm sm:text-base lg:text-sm font-medium leading-relaxed">
                Optimizing speed and ensuring bug-free, reliable code.
              </p>
            </div>
          </motion.div>

          {/* ── Card 3: Product Mindset & Collaboration ── */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -3 }}
            className="group relative bg-gradient-to-br from-sky-50 via-white to-white dark:from-sky-950/20 dark:via-neutral-900 dark:to-neutral-900 rounded-3xl p-3 sm:p-6 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-black/40 hover:border hover:border-ds-border transition-shadow duration-300 border border-gray-100 dark:border-neutral-800"
          >
            <div className="absolute right-3 bottom-3 opacity-[0.08] dark:opacity-[0.12] pointer-events-none text-sky-900 dark:text-sky-400">
              <Users size={100} strokeWidth={1.5} />
            </div>

            <div className="relative z-10 flex items-start justify-between">
              <motion.div
                variants={iconVariants}
                className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-gray-100 dark:border-neutral-700 flex items-center justify-center text-gray-900 dark:text-white"
              >
                <Users size={18} />
              </motion.div>
              {/* <ArrowUpRight size={14} className="text-gray-300 group-hover:text-gray-500 transition-colors duration-200" /> */}
            </div>

            <div className="relative z-10">
              <h3 className="text-xl lg:text-base xl:text-xl font-bold text-ds-text leading-snug">
                Product Mindset & Collaboration
              </h3>
              <p className="mt-1 text-ds-muted-foreground text-sm sm:text-base lg:text-sm font-medium leading-relaxed">
                Working closely with teams to build user-focused products.
              </p>
            </div>
          </motion.div>

          {/* ── Card 4: Mentorship ── */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -3 }}
            className="group relative sm:col-span-2 bg-gradient-to-br from-violet-50 via-white to-white dark:from-violet-950/20 dark:via-neutral-900 dark:to-neutral-900 rounded-3xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-black/40 hover:border hover:border-ds-border transition-shadow duration-300 border border-gray-100 dark:border-neutral-800"
          >
            <div className="absolute right-3 bottom-3 opacity-[0.08] dark:opacity-[0.12] pointer-events-none text-violet-900 dark:text-violet-400">
              <GraduationCap size={100} strokeWidth={1.5} />
            </div>

            <div className="relative z-10 flex items-start justify-between">
              <motion.div
                variants={iconVariants}
                className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-gray-100 dark:border-neutral-700 flex items-center justify-center text-gray-900 dark:text-white"
              >
                <GraduationCap size={18} />
              </motion.div>
              {/* <ArrowUpRight size={14} className="text-gray-300 group-hover:text-gray-500 transition-colors duration-200" /> */}
            </div>

            <div className="relative z-10">
              <h3 className="text-xl lg:text-base xl:text-xl font-bold text-ds-text leading-snug">
                Mentorship
              </h3>
              <p className="mt-1 text-ds-muted-foreground text-sm sm:text-base lg:text-sm font-medium leading-relaxed">
                Guiding and developing the company&apos;s new developers.
              </p>
            </div>
          </motion.div>

          {/* ── Card 5: Innovative Solutions ── */}
          {/* <div className="group relative bg-gradient-to-br from-emerald-50 via-white to-white rounded-3xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border hover:border-ds-border transition-all duration-300 border border-gray-100">

          <div className="absolute right-4 bottom-4 opacity-[0.08] pointer-events-none text-emerald-900">
            <Lightbulb size={90} strokeWidth={1.5} />
          </div>

          <div className="relative z-10 flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-900">
              <Lightbulb size={18} />
            </div>
            // <ArrowUpRight size={14} className="text-gray-300 group-hover:text-gray-500 transition-colors duration-200" />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-ds-text leading-snug">
              Innovative Solutions
            </h3>
            <p className="mt-1 text-ds-muted-foreground text-sm sm:text-base lg:text-sm  font-medium leading-relaxed">
              Solving complex problems with creative technology.
            </p>
          </div>
        </div> */}
        </motion.div>
      </Container>
    </section>
  );
};

export default MyExpertise;