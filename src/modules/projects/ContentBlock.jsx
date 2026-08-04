"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import ContributionBadges from "./ContributionBadges";
import TechBadges from "./TechBadges";

import ProjectDetailsSheet from "./ProjectDetails/ProjectDetailsSheet";
import PrimaryButton from "@/components/common/PrimaryButton";

const ContentBlock = ({ project, accent, index }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <p className="mb-3 font-bold text-3xl lg:text-5xl capitalize  text-black">
        {project.title}
      </p>

      <h3 className="text-base lg:text-lg font-semibold capitalize text-black/70 ">
        {project.subTitle}
      </h3>

      <div className="mt-4">
        {project?.contributions && (
          <ContributionBadges contributions={project.contributions} />
        )}
      </div>

      {/* Description */}
      <p className="mt-6 max-w-[480px] text-[14.5px] leading-[1.75] text-black/70">
        {project?.contributions?.description}
      </p>

      {/* Tech Stack */}
      {project.techStack && (
        <div className="mt-7">
          <TechBadges techStack={project.techStack?.techStackPrev} />
        </div>
      )}

      {/* CTA Buttons */}
      <div className="mt-9 flex flex-wrap items-center gap-3">
        <PrimaryButton
          href={project?.liveLink}
          content="Visit Website"
          targetBlank={true}
        />

        {/* view details button */}
        <button
          type="button"
          onClick={() => setDetailsOpen(true)}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-black border border-black rounded-full px-5 py-3 hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
        >
          View Details
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </div>

      <ProjectDetailsSheet
        project={project}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
      />
    </div>
  );
};

export default ContentBlock;