"use client";

import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import SectionTitle from "@/src/components/common/SectionTitle";
import Container from "@/src/components/Container";
import { ProjectsData } from "@/src/data/project/projects-data";
import { useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Parallax Background Image (Unsplash)
───────────────────────────────────────────── */
const BG_IMAGE =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80";

/* ─────────────────────────────────────────────
   Tech Icon Map
───────────────────────────────────────────── */
const TECH_ICON_MAP = {
  React: "⚛️",
  "Next.js": "▲",
  TypeScript: "🔷",
  JavaScript: "🟨",
  "Node.js": "🟩",
  MongoDB: "🍃",
  PostgreSQL: "🐘",
  Tailwind: "🌊",
  TailwindCSS: "🌊",
  Prisma: "◈",
  Redux: "🔴",
  GraphQL: "◉",
  Firebase: "🔥",
  Supabase: "⚡",
  Stripe: "💳",
  "Framer Motion": "🎞️",
  Express: "🚂",
  "REST API": "🔗",
};

/* ─────────────────────────────────────────────
   Accent Palette per project index
───────────────────────────────────────────── */
const ACCENTS = [
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

/* ─────────────────────────────────────────────
   Tech Badges
───────────────────────────────────────────── */
const TechBadges = ({ techStack }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {techStack.map((tech, i) => {
        const icon = TECH_ICON_MAP[tech];
        return (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 text-[12px] font-medium text-black/65 shadow-[0_1px_4px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-black/15 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:text-black"
          >
            {icon && <span className="text-[11px] leading-none">{icon}</span>}
            {tech}
          </span>
        );
      })}
    </div>
  );
};

/* ─────────────────────────────────────────────
   Contribution Badges  ← দুইটা আলাদা badge
───────────────────────────────────────────── */
const ContributionBadges = ({ contributions, accent }) => {
  // সর্বোচ্চ দুইটা নেব
  const pair = contributions.slice(0, 2);

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {pair.map((c, i) => {
        const style = i === 0 ? accent.contributionA : accent.contributionB;
        const dotColor = i === 0 ? "bg-white/70" : accent.dot;
        return (
          <span
            key={i}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold shadow-sm backdrop-blur-sm ${style}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
            <span className="font-bold">{c.role}</span>
            <span className="opacity-60">·</span>
            <span>{c.organization}</span>
          </span>
        );
      })}
    </div>
  );
};

/* ─────────────────────────────────────────────
   Content Block
───────────────────────────────────────────── */
const ContentBlock = ({ project, accent, index }) => {
  return (
    <div className="flex flex-col">
      {/* Project number + label */}
      <div className="mb-6 flex items-center gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-black/30">
          Project
        </span>
        <span
          className={`text-[11px] font-bold tracking-widest select-none ${accent.number}`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div
          className={`h-px flex-1 max-w-[48px] bg-gradient-to-r opacity-50 ${accent.line}`}
        />
      </div>

      {/* Category label */}
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-black/35">
        {project.title}
      </p>

      {/* Main heading */}
      <h3 className="text-[2rem] font-bold leading-[1.12] tracking-[-0.03em] text-black md:text-[2.4rem] lg:text-[2.6rem]">
        {project.subTitle}
      </h3>

      {/* Colored divider */}
      <div
        className={`mt-6 h-[2px] w-12 rounded-full bg-gradient-to-r ${accent.line}`}
      />

      {/* Contribution badges – দুইটা আলাদা style */}
      {project.contributions?.length > 0 && (
        <ContributionBadges
          contributions={project.contributions}
          accent={accent}
        />
      )}

      {/* Description */}
      <p className="mt-6 max-w-[480px] text-[14.5px] leading-[1.75] text-black/50">
        {project.description}
      </p>

      {/* Tech Stack */}
      {project.techStack?.length > 0 && (
        <div className="mt-7">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/30">
            Built with
          </p>
          <TechBadges techStack={project.techStack} />
        </div>
      )}

      {/* CTA Buttons */}
      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:gap-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
        >
          {/* Shimmer sweep */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <ExternalLink size={14} />
          Live Preview
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-black/12 bg-white px-5 py-3 text-sm font-medium text-black/70 shadow-sm transition-all duration-300 hover:border-black/25 hover:text-black hover:shadow-md"
          >
            <Github size={14} />
            Source
          </a>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Mockup / Image Block
───────────────────────────────────────────── */
const MockupBlock = ({ project, accent, hovered }) => {
  return (
    <div className="relative">
      {/* Glow blob */}
      <div
        className={`absolute -inset-4 -z-10 rounded-3xl blur-3xl transition-opacity duration-500 ${accent.glow} ${
          hovered ? "opacity-10" : "opacity-5"
        }`}
      />

      {/* Card wrapper */}
      <div
        className={`rounded-[20px] p-[1px] ring-1 transition-all duration-500 ${accent.ring} ${
          hovered
            ? "shadow-[0_32px_80px_-16px_rgba(0,0,0,0.18)]"
            : "shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)]"
        }`}
        style={{
          background:
            "linear-gradient(135deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.6) 100%)",
        }}
      >
        <div className="overflow-hidden rounded-[19px] bg-white">
          {/* Browser top bar */}
          <div className="flex items-center gap-2 border-b border-black/[0.05] bg-[#f7f7f8] px-4 py-3.5">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[0_0_0_0.5px_rgba(0,0,0,0.1)]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-[0_0_0_0.5px_rgba(0,0,0,0.1)]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-[0_0_0_0.5px_rgba(0,0,0,0.1)]" />
            </div>
            <div className="mx-auto flex h-6 w-full max-w-[220px] items-center gap-2 rounded-md bg-black/[0.05] px-3">
              <div className="h-1.5 w-1.5 rounded-full bg-black/20" />
              <div className="h-1.5 flex-1 rounded-full bg-black/[0.08]" />
            </div>
            <div className="flex items-center gap-2 opacity-40">
              <div className="h-4 w-4 rounded bg-black/10" />
              <div className="h-4 w-4 rounded bg-black/10" />
            </div>
          </div>

          {/* Screenshot */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className={`h-[260px] w-full object-cover object-top transition-transform duration-700 ease-out md:h-[340px] ${
                hovered ? "scale-[1.03]" : "scale-100"
              }`}
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Floating tech pill – bottom right */}
      {project.techStack?.[0] && (
        <div
          className={`absolute -bottom-4 z-10 flex items-center gap-2 rounded-full border border-white bg-white px-4 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-500 ${
            hovered ? "-right-3" : "-right-5"
          }`}
        >
          <span className="text-sm">
            {TECH_ICON_MAP[project.techStack[0]] ?? "⚙️"}
          </span>
          <span className="text-[12px] font-semibold text-black/70">
            {project.techStack[0]}
          </span>
        </div>
      )}

      {/* Floating live badge – top left */}
      <div
        className={`absolute -top-4 z-10 flex items-center gap-2 rounded-full border border-white bg-white px-4 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-all duration-500 ${
          hovered ? "-left-3" : "-left-5"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[11px] font-semibold text-black/60">Live</span>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Single Project Card
───────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const isReversed = index % 2 === 1;
  const accent = ACCENTS[index % ACCENTS.length];
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className={`flex flex-col gap-14 lg:items-center lg:gap-20 ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Content */}
      <div className="w-full lg:w-[45%]">
        <ContentBlock project={project} accent={accent} index={index} />
      </div>

      {/* Mockup with tilt */}
      <div className="w-full lg:w-[55%]">
        <div
          ref={cardRef}
          onMouseEnter={() => setHovered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            transition: hovered
              ? "transform 0.1s ease-out"
              : "transform 0.5s ease-out",
          }}
        >
          <MockupBlock project={project} accent={accent} hovered={hovered} />
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
const FeaturedProject = () => {
  const featuredProjects = ProjectsData.slice(0, 3);

  return (
    <section className="relative overflow-hidden">
      <Container>
        <SectionTitle
          align="left"
          badgeText="My Work"
          title="Featured Projects"
        />
      </Container>

      {/* ── Parallax fixed background ── */}
      <div
        className="absolute inset-0 bg-fixed bg-black/50 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG_IMAGE})` ,
        backgroundBlendMode: "multiply",
      }}
      />

      {/* ── Scrollable content ── */}
      <div className="relative z-10 py-14">
        <Container>
          {/* Project list */}
          <div className="flex flex-col gap-40 md:gap-52">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default FeaturedProject;
