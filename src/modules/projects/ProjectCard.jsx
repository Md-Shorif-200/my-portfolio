"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ContentBlock from "./ContentBlock";
import MockupBlock from "./MockupBlock";
import { ACCENTS } from "./FeaturedProject";

const ProjectCard = ({ project, index }) => {
  const isReversed = index % 2 === 1;
  const accent = ACCENTS[index % ACCENTS.length];

  // ── Smooth spring-based tilt (replaces manual state + inline transform) ──
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);
  const scale = useSpring(1, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseEnter = () => scale.set(1.02);

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <div
      className={`flex flex-col gap-14 lg:items-center lg:gap-20 ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Content */}
      <motion.div
        className="w-full lg:w-[45%]"
        initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <ContentBlock project={project} accent={accent} index={index} />
      </motion.div>

      {/* Mockup with spring tilt */}
    <motion.div
  className="w-full lg:w-[55%]"
  initial={{
    opacity: 0,
    x: isReversed ? -60 : 60,
    scale: 0.94,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.35,
  }}
  transition={{
    duration: 1.05,
    ease: [0.16, 1, 0.3, 1],
    delay: 0.15,
  }}
>
  <motion.div
    onMouseMove={handleMouseMove}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{
      rotateX,
      rotateY,
      scale,
      transformPerspective: 1000,
    }}
  >
    <MockupBlock project={project} accent={accent} />
  </motion.div>
</motion.div>
    </div>
  );
};

export default ProjectCard;