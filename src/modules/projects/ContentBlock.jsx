"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import ContributionBadges from "./ContributionBadges";
import TechBadges from "./TechBadges";

import ProjectDetailsSheet from "./ProjectDetails/ProjectDetailsSheet";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ContentBlock = ({ project, accent, index }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <motion.div
      className="flex flex-col"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.p
        variants={itemVariants}
        className="mb-3 font-bold text-3xl lg:text-5xl capitalize text-ds-primary"
      >
        {project.title}
      </motion.p>

      <motion.h3
        variants={itemVariants}
        className="text-xl lg:text-2xl font-semibold capitalize text-ds-primary/80"
      >
        {project.subTitle}
      </motion.h3>

      {project?.contributions && (
        <motion.div variants={itemVariants} className="mt-4">
          <ContributionBadges contributions={project.contributions} />
        </motion.div>
      )}

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="mt-6 max-w-[480px] text-[14.5px] leading-[1.75] text-ds-primary/80 line-clamp-4 font-medium"
      >
        {project?.description}
      </motion.p>

      {/* Tech Stack */}
      {project.techStack && (
        <motion.div variants={itemVariants} className="mt-7">
          <TechBadges techStack={project.techStack?.techStackPrev} />
        </motion.div>
      )}

      {/* CTA Buttons */}
      <motion.div
        variants={itemVariants}
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <PrimaryButton
          href={project?.liveLink}
          content="Visit Website"
          targetBlank={true}
        />

        <SecondaryButton
          type="button"
          onClick={() => setDetailsOpen(true)}
          content="View Details"
          icon={Eye}
        />
      </motion.div>

      <ProjectDetailsSheet
        project={project}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
      />
    </motion.div>
  );
};

export default ContentBlock;