"use client";

import {
  GraduationCap,
  BookOpen,
  Calendar,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/Container";
import SectionTitle from "@/components/common/SectionTitle";

// Education Data
const educationData = [
  {
    year: "2019 - 2023",
    title: "Diploma In Computer Science & Technology",
    institution: "Chattogram Polytechnic Institute",
    description:
      "Acquired practical and theoretical skills in programming, database management, networking, and software development through hands-on projects.",
    icon: GraduationCap,
  },
  {
    year: "2014 - 2019",
    title: "SSC-Science",
    institution: "Abdul Motaleb High School",
    description:
      "Built a strong foundation in core science and analytical thinking, fostering a keen interest in technical and computer studies.",
    icon: BookOpen,
  },
];

// Certification Data
const certificationData = [
  {
    year: "2024",
    title: "Complete Web Development",
    institution: "Programming Hero",
    description:
      "Completed a full-stack web development program covering the MERN stack, TypeScript, and Next.js, with hands-on projects involving frontend-backend integration, REST APIs, and authentication systems.",
    icon: CheckCircle2,
  },
  {
    year: "2023",
    title: "Responsive Web Design",
    institution: "Creative It Institute",
    description:
      "Completed a hands-on program in responsive web design using HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, jQuery, and SCSS, along with Git/GitHub, Figma, and Photoshop for design and version control.",
    icon: CheckCircle2,
  },
];

// Animation Variants
const timelineContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const timelineItemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Timeline Item
const TimelineItem = ({ item, isLast }) => {
  const Icon = item.icon;

  return (
    <motion.div
      variants={timelineItemVariants}
      className="group relative flex gap-4 pb-8"
    >
      {/* Icon Node & Vertical Connector */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-ds-muted-foreground transition-colors duration-300 group-hover:bg-ds-primary group-hover:text-ds-secondary dark:bg-neutral-800"
        >
          <Icon size={16} />
        </motion.div>

        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "top" }}
            className="mt-2 w-px flex-1 bg-neutral-200 transition-colors duration-300 group-hover:bg-neutral-400 dark:bg-neutral-700 dark:group-hover:bg-neutral-500"
          />
        )}
      </div>

      {/* Content Card */}
      <div className="flex flex-1 flex-col justify-between rounded-xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-neutral-100/90 group-hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60 dark:group-hover:bg-neutral-800/70 dark:group-hover:shadow-none">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2 text-xs font-medium text-ds-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {item.year}
            </span>

            <span>•</span>

            <span className="flex items-center gap-1">
              <Building2 size={12} />
              {item.institution}
            </span>
          </div>

          <h3 className="text-base font-semibold text-ds-primary transition-colors duration-300">
            {item.title}
          </h3>

          <p className="mt-1.5 text-sm leading-relaxed text-ds-muted-foreground">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
const EducationAndCertifications = () => {
  return (
    <section className="section_top_padding">
      <Container>
        <SectionTitle
          align="left"
          badgeText="My Journey"
          title="Education & Certification"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Education Column */}
          <motion.div
            variants={timelineContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="flex flex-col"
          >
            {educationData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                isLast={index === educationData.length - 1}
              />
            ))}
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            variants={timelineContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="flex flex-col"
          >
            {certificationData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                isLast={index === certificationData.length - 1}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default EducationAndCertifications;