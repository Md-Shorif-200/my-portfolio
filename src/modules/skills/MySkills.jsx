"use client";

import { Icon } from "@iconify/react";

import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/Container";

// ---- All skill data lives here. ----
const skillCategories = [
  {
    id: 1,
    key: "frontend_languages",
    title: "Frontend & Languages",
    icon: "lucide:code-2",
    span: "sm:col-span-2 lg:col-span-2",
    rows: 6,
    skills: [
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Redux", icon: "logos:redux" },
      { name: "Zustand", icon: "devicon:zustand" },
      {
        name: "Tanstack Query",
        icon: "simple-icons:tanstack",
        className: "text-[#FFC200]",
      },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      {
        name: "Shadcn UI",
        icon: "bxl:shadcn-ui",
        className: "text-black dark:text-white",
      },
      { name: "Material UI", icon: "logos:material-ui", className: "" },
      {
        name: "Framer Motion",
        icon: "simple-icons:framer",
        className: "text-[#0055FF]",
      },
      { name: "Jquery", icon: "devicon:jquery" },
      { name: "SCSS", icon: "vscode-icons:file-type-scss2" },
      { name: "HTML5", icon: "skill-icons:html" },
      { name: "CSS3", icon: "skill-icons:css" },
    ],
  },
  {
    id: 2,
    key: "backend_apis",
    title: "Backend & APIs",
    icon: "lucide:layers",
    span: "sm:col-span-1 lg:col-span-1",
    rows: 12,
    skills: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express.js", icon: "devicon:express" },
      { name: "Mongoose", icon: "devicon:mongoose" },
      { name: "Socket.io", icon: "devicon:socketio" },
      { name: "REST API", icon: "lucide:zap", className: "text-[#FF8A00]" },
      {
        name: "Next Auth",
        icon: "simple-icons:nextdotjs",
        className: "text-black dark:text-white",
      },
        { name: "Firebase", icon: "selfhst:firebase" },
      { name: "JWT", icon: "logos:jwt-icon" },

      { name: "Nodemailer", icon: "lucide:mail", className: "text-[#22B573]" },
      { name: "Stripe", icon: "logos:stripe" },

      {
        name: "Role-Based Access Control",
        icon: "lucide:user-check",
        className: "text-[#10B981]",
      },
      {
        name: "Modular Architecture",
        icon: "lucide:code-2",
        className: "text-cyan-500",
      },
    ],
  },
  {
    id: 3,
    key: "database_storage",
    title: "Database & Storage",
    icon: "lucide:database",
    span: "sm:col-span-1 lg:col-span-1",
    rows: 6,
    skills: [
      { name: "MongoDB", icon: "devicon:mongodb" },
    
      { name: "Redis", icon: "devicon:redis" },
    ],
  },
  {
    id: 4,
    key: "cloud_devops",
    title: "Cloud & DevOps",
    icon: "lucide:cloud",
    span: "sm:col-span-1 lg:col-span-1",
    rows: 6,
    skills: [
      { name: "Vercel", icon: "simple-icons:vercel", className: "text-black" },
      { name: "Docker", icon: "material-icon-theme:docker", className: "" },
      { name: "AWS", icon: "logos:aws" },
      { name: "CI/CD", icon: "devicon:githubactions" },
    ],
  },
  {
    id: 5,
    key: "tools",
    title: "Tools",
    icon: "lucide:wrench",
    span: "sm:col-span-1 lg:col-span-2",
    rows: 6,
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "mdi:github", className: "text-black" },
      { name: "Figma To HTML", icon: "logos:figma" },
      { name: "PSD To HTML", icon: "logos:adobe-photoshop" },
      { name: "Postman", icon: "logos:postman-icon" },
      { name: "Swagger", icon: "logos:swagger" },
    ],
  },
  {
    id: 6,
    key: "system_architecture",
    title: "System & Architecture",
    icon: "lucide:cpu", // বা "lucide:layers-3" / "lucide:network"
    span: "lg:col-span-1",
    rows: 6,
    skills: [
      {
        name: "System Design",
        icon: "lucide:network",
        className: "text-[#0052CC]",
      },
      { name: "Performance", icon: "lucide:zap", className: "text-[#FF8A00]" },
      {
        name: "Security",
        icon: "lucide:shield-check",
        className: "text-[#10B981]",
      },
    ],
  },
];

// ---- Skill Pill Component ----
function SkillPill({ skill }) {
  return (
    <div className="group inline-flex w-fit flex-none items-center gap-2 rounded-xl border border-ds-border/60 bg-ds-secondary px-3 py-1.5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-ds-primary/30 hover:shadow-md hover:bg-ds-secondary/80">
      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
        <Icon
          icon={skill.icon}
          width={18}
          height={18}
          className={`transition-transform duration-300 ease-out group-hover:scale-110 ${skill.className || ""}`}
        />
      </div>
      <span className="whitespace-nowrap text-sm font-medium text-ds-muted-foreground transition-colors duration-300 ease-out group-hover:text-ds-primary">
        {skill.name}
      </span>
    </div>
  );
}

// ---- Category Card Component ----
function SkillCard({ category }) {
  return (
    <div

      className={`${category.span} skill-card group flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-neutral-900 dark:via-neutral-900/80 dark:to-neutral-950 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-ds-primary/10 skill_Card_Box_Shadow`}
      style={{ "--row-span": category.rows || 6 }}
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ds-foreground bg-ds-foreground text-ds-primary transition-all duration-300 group-hover:bg-black group-hover:text-ds-secondary dark:group-hover:bg-white dark:group-hover:text-black">
          <Icon icon={category.icon} width={22} height={22} />
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

// ---- Main Component ----
export default function Skills() {
  return (
    <section className="pt-10 pb-20">
      <Container>
        <SectionTitle
          align="left"
          badgeText="My Skills"
          title="Technical Expertise"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min ">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
