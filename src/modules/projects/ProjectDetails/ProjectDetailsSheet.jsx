"use client";

import {
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import TechBadges from "../TechBadges";
import ContributionBadges from "../ContributionBadges";
import {
  Sheet,
  SheetContent,

} from "../../../../components/ui/sheet";
import DetaislSheetBanner from "./DetaislSheetBanner";
import Section from "./Section";
import { FeatureItem } from "./FeatureItem";
import GithubLink from "./GithubLink";






// ─── Main component ────────────────────────────────────────────────────────────
const ProjectDetailsSheet = ({ project, open, onOpenChange }) => {
  if (!project) return null;

  const hasLinks =
    project?.liveLink || project?.clientGithub || project?.serverGithub;

  const hasUniqueContributionDesc =
    project?.contributions?.description &&
    project.contributions.description !== project.description;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        
        className="
          w-[80%] max-w-xl
          p-0
          overflow-y-auto
          bg-[#fafafa]
          border-l border-black/8
          shadow-2xl
        "
      >
                <DetaislSheetBanner project={project} />
       

        {/* ── Content area ── */}
        <div className="px-5 sm:px-7 pb-12">
          {/* Contribution badges */}
          {project?.contributions && (
            <div className="mt-5">
              <ContributionBadges contributions={project.contributions} />
            </div>
          )}

          {/* Overview */}
          {project?.description && (
            <Section title="Overview">
              <p className="text-[14px] leading-[1.85] text-black/55">
                {project.description}
              </p>
            </Section>
          )}

          {/* My Contribution */}
          {hasUniqueContributionDesc && (
            <Section title="My Contribution">
              <p className="text-[14px] leading-[1.85] text-black/55">
                {project.contributions.description}
              </p>
            </Section>
          )}

          {/* Key Features — only show if at least one item has content */}
          {project?.keyFeatures?.some((f) => f.title || f.feature) && (
            <Section title="Key Features">
              <div
                className="
                  border border-black/8
                  rounded-2xl
                  overflow-hidden
                  bg-white
                  divide-y divide-black/5
                "
              >
                {project.keyFeatures
                  .filter((item) => item.title || item.feature)
                  .map((item, i) => (
                    <FeatureItem
                      key={i}
                      title={item?.title}
                      feature={item?.feature}
                    />
                  ))}
              </div>
            </Section>
          )}

          {/* Tech Stack */}
          {project?.techStack?.techStackFull?.length > 0 && (
            <Section title="Tech Stack">
              <TechBadges techStack={project.techStack.techStackFull} />
            </Section>
          )}

          {/* Links */}
          {hasLinks && (
            <Section title="Links">
              <div className="flex flex-wrap gap-2.5">
                {project?.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-sm font-semibold
                      bg-black text-white
                      px-5 py-2.5 rounded-xl
                      hover:bg-black/80
                      transition-all duration-200
                      shadow-sm
                    "
                  >
                    Visit Website
                    <ArrowUpRight size={15} />
                  </Link>
                )}

                {project?.clientGithub && (
                  <GithubLink href={project.clientGithub} label="Client Repo" />
                )}

                {project?.serverGithub && (
                  <GithubLink href={project.serverGithub} label="Server Repo" />
                )}

                {/* Fallback single github link */}
                {project?.github && !project?.clientGithub && (
                  <GithubLink href={project.github} label="GitHub Repo" />
                )}
              </div>
            </Section>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProjectDetailsSheet;
