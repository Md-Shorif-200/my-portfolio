import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import ContributionBadges from "./ContributionBadges";
import TechBadges from "./TechBadges";
import Link from "next/link";
import PrimaryButton from "./button/PrimaryButton";

const ContentBlock = ({ project, accent, index }) => {
  return (
    <div className="flex flex-col">
      <p className="mb-3 font-bold text-3xl lg:text-5xl capitalize  text-black">
        {project.title}
      </p>

      {/* ── Decorative Rule ── */}
      {/* <div
        className={`mt-1 mb-2 flex items-center gap-2 justify-start`}
      >
        <span className="block h-[2.5px] w-8 rounded-full bg-[#0A0A0A]" />
        <span className="block h-[2.5px] w-3 rounded-full bg-[#0A0A0A]/30" />
        <span className="block h-[2.5px] w-1.5 rounded-full bg-[#0A0A0A]/10" />
      </div> */}

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
                <PrimaryButton href={project?.liveLink} content="Visit Website" targetBlank={true} />

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


export default ContentBlock