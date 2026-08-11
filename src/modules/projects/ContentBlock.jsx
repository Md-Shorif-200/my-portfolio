"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink, Eye, Github } from "lucide-react";
import ContributionBadges from "./ContributionBadges";
import TechBadges from "./TechBadges";

import ProjectDetailsSheet from "./ProjectDetails/ProjectDetailsSheet";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

const ContentBlock = ({ project, accent, index }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <p className="mb-3 font-bold text-3xl lg:text-5xl capitalize  text-ds-primary">
        {project.title}
      </p>

      <h3 className="text-xl lg:text-2xl font-semibold capitalize text-ds-primary/80 ">
        {project.subTitle}
      </h3>

      <div className="mt-4">
        {project?.contributions && (
          <ContributionBadges contributions={project.contributions} />
        )}
      </div>

      {/* Description */}
      <p className="mt-6 max-w-[480px] text-[14.5px] leading-[1.75] text-ds-primary/80 line-clamp-4 font-medium">
        {project?.description}
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

         <SecondaryButton type="button"   onClick={() => setDetailsOpen(true)} content="View Details" icon={Eye}  />

        
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