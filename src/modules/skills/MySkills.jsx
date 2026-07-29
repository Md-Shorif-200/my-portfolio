"use client";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiTrpc,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiGit,
  SiDocker,
  SiGithub,
  SiVercel,
  SiTailwindcss,
  SiFigma,
  SiJest,
  SiPostman,
} from "react-icons/si";
import { Layers, Code2, Database, Wrench, PenTool } from "lucide-react";
import SectionTitle from "@/src/components/common/SectionTitle";
import Container from "@/src/components/Container";

// ---- 1. All skill data lives here. Add/remove/edit skills or categories only in this array. ----
const skillCategories = [
  {
    title: "Frontend & Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Layers,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "tRPC", icon: SiTrpc, color: "#2596BE" },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#000000" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
    ],
  },
  {
    title: "Design & Testing",
    icon: PenTool,
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

// ---- 2. One skill pill (icon + name), reused inside every card ----
function SkillPill({ skill }) {
  const SkillIcon = skill.icon;
  return (
    <div
      className="group inline-flex w-fit flex-none items-center gap-2 rounded-xl border border-ds-border/60 bg-ds-secondary px-3 py-1.5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-ds-primary/30 hover:shadow-md hover:bg-ds-secondary/80"
    >
      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
        <SkillIcon
          size={16}
          strokeWidth={2}
          style={{ color: skill.color }}
          className="transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>
      <span className="whitespace-nowrap text-sm font-medium text-ds-muted-foreground transition-colors duration-300 ease-out group-hover:text-ds-primary">
        {skill.name}
      </span>
    </div>
  );
}

// ---- 3. One category card, reused for every category ----
function SkillCard({ category }) {
  const CategoryIcon = category.icon;

  return (
    <div className="group flex h-full flex-col rounded-2xl  bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-ds-primary/10 skill_Card_Box_Shadow">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ds-foreground bg-ds-foreground text-ds-primary transition-all duration-300 group-hover:bg-black group-hover:text-ds-secondary">
          <CategoryIcon size={20} />
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-ds-primary">
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillPill key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
// ---- 4. Main section ----
export default function Skills() {
  return (
    <section className="pt-10 pb-20">
      <Container>
        <SectionTitle align="left" badgeText="My Skils" title="Technical Expertise" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
