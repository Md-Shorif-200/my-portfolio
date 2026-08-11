"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";

import ProjectCard from "./ProjectCard";
import SectionTitle from "@/components/common/SectionTitle";
import { ProjectsData } from "@/data/project/projects-data";
import PrimaryButton from "@/components/common/PrimaryButton";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BG_IMAGE = "/image/projects/project_image_2.webp";

export const ACCENTS = [
  {
    ring: "ring-violet-200",
    glow: "bg-violet-400",
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    dot: "bg-violet-400",
    number: "text-violet-300",
    line: "from-violet-400 to-violet-300",
    contributionA: "bg-violet-600/90 text-white border-violet-500",
    contributionB: "bg-white/90 text-violet-700 border-violet-200",
  },
  {
    ring: "ring-sky-200",
    glow: "bg-sky-400",
    badge: "bg-sky-50 text-sky-700 border-sky-200",
    dot: "bg-sky-400",
    number: "text-sky-300",
    line: "from-sky-400 to-sky-300",
    contributionA: "bg-sky-600/90 text-white border-sky-500",
    contributionB: "bg-white/90 text-sky-700 border-sky-200",
  },
  {
    ring: "ring-emerald-200",
    glow: "bg-emerald-400",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-400",
    number: "text-emerald-300",
    line: "from-emerald-400 to-emerald-300",
    contributionA: "bg-emerald-600/90 text-white border-emerald-500",
    contributionB: "bg-white/90 text-emerald-700 border-emerald-200",
  },
];

function ViewAllProjectsLink({ href = "#" }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-base font-medium text-emerald-500 hover:text-emerald-600 transition-colors duration-300"
    >
      <span className="relative">
        View All Projects
        <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-full bg-emerald-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
      </span>
      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
    </Link>
  );
}

const FeaturedProject = () => {
  const featuredProjects = ProjectsData.slice(0, 3);

  return (
    <section className="section_top_padding">
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14 xl:px-0 mb-6 lg:mb-0">
        <motion.div
          className="flex items-center justify-between flex-wrap gap-1"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionTitle
            align="left"
            badgeText="My Work"
            title="Featured Projects"
          />

          <ViewAllProjectsLink href="/all-projects" />
        </motion.div>
      </div>

      <div className="relative overflow-hidden">
        {/* ── Parallax fixed background ── */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${BG_IMAGE})` }}
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-white/35 via-white/20 to-white/10 dark:from-black/35 dark:via-black/20 dark:to-black/10" />

        {/* ── Scrollable content ── */}
        <div className="relative z-10 py-14">
          <Container>
            {/* Project list */}
            <div className="flex flex-col gap-30">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </Container>
        </div>
      </div>

      <motion.div
        className="w-full flex justify-center items-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <PrimaryButton
          href="/all-projects"
          content="View All Projects"
          icon={ArrowUpRight}
        />
      </motion.div>
    </section>
  );
};

export default FeaturedProject;