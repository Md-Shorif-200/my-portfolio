"use client";

import Container from "@/components/Container";

import ProjectCard from "./ProjectCard";
import SectionTitle from "@/components/common/SectionTitle";
import { ProjectsData } from "@/data/project/projects-data";

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


const FeaturedProject = () => {
  const featuredProjects = ProjectsData.slice(0, 3);

  return (
    <section>
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14 xl:px-0">
        <SectionTitle
          align="left"
          badgeText="My Work"
          title="Featured Projects"
        />
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
            <div className="flex flex-col gap-20">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
