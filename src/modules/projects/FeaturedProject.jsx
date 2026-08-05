"use client";

import Container from "@/components/Container";

import ProjectCard from "./ProjectCard";
import SectionTitle from "@/components/common/SectionTitle";
import { ProjectsData } from "@/data/project/projects-data";
import PrimaryButton from "@/components/common/PrimaryButton";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BG_IMAGE = "/image/projects/project-img-1.webp";

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
      className="group inline-flex items-center gap-2 text-bas font-medium text-emerald-500 hover:text-emerald-600 transition-colors duration-300"
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
    <section>
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14 xl:px-0">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <SectionTitle
            align="left"
            badgeText="My Work"
            title="Featured Projects"
          />

          <ViewAllProjectsLink href="/all-projects" />
        </div>
      </div>
      <div className="relative overflow-hidden">
        {/* ── Parallax fixed background ── */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30"
          style={{
            backgroundImage: `url(${BG_IMAGE})`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-white/35 via-white/20 to-white/10" />

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

      <div className="w-full flex justify-center items-center mt-10">
        <PrimaryButton
          href="/all-projects"
          content="View All Projects"
          icon={ArrowUpRight}
        />
      </div>
    </section>
  );
};

export default FeaturedProject;
