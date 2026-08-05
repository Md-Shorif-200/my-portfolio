"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Eye, Github, ArrowRight } from "lucide-react";
import { VscLiveShare } from "react-icons/vsc";

// Normalizes tech tags regardless of which shape the project object uses
const getTechTags = (project) => {
  if (project.techStack?.techStackPrev) {
    return project.techStack.techStackPrev.slice(0, 5);
  }
  const combined = [
    ...(project.clientTech || []),
    ...(project.serverTech || []),
  ];
  return [...new Set(combined)].slice(0, 5);
};

const ProjectGridCard = ({ project, onViewDetails, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const tags = getTechTags(project);
  const totalTech =
    (project.clientTech?.length || 0) + (project.serverTech?.length || 0);
  const extraCount = totalTech > 5 ? totalTech - 5 : 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl overflow-hidden bg-ds-primary-foreground   border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

      {/* ── Image Container ── */}
      <div className="relative h-[220px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>

        {/* Image hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-4"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 20,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ delay: 0.1 }}
          >
            {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/30"
              >
                <VscLiveShare className="text-sm" />
                View Project
              </Link>
            )}
          </motion.div>
        </motion.div>

        {/* Category / Live badge */}
        <div className="absolute top-4 right-4 z-20">
          <span
            className={`px-3 py-1 backdrop-blur-sm rounded-full text-xs font-bold shadow-lg border ${
              project.isLive
                ? "bg-emerald-500/90 text-white border-emerald-500/40"
                : "bg-black text-heading border-black/40"
            }`}
          >
            {project.isLive ? "Live Project" : project.category || "Web App"}
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="px-6 py-3 flex flex-col justify-between flex-1 relative z-20">
        <div>
          {/* Title with animated underline */}
          <div className="relative inline-block">
            <h3 className="text-xl font-bold text-ds-text  transition-colors duration-300">
              {project.title}
            </h3>
            {/* <motion.div
              initial={{ width: 0 }}
              animate={{ width: isHovered ? "100%" : "0%" }}
              className="absolute bottom-0 left-0 h-0.5 bg-ds-primary"
            /> */}
          </div>

          {/* Subtitle */}
          {project.subTitle && (
            <p className="text-sm text-primary/90 font-medium mt-2 capitalize flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
              {project.subTitle}
            </p>
          )}

          {/* Description */}
          {project.description && (
            <p className="mt-3 text-sm leading-relaxed text-ds-muted-foreground line-clamp-3">
              {project.description}
            </p>
          )}

          {/* Tech Stack */}
          {project?.techStack?.techStackPrev.length > 0 && (
            <>
              <div className="mt-5 mb-3 flex items-center gap-2">
                <div className="w-8 h-[2px] bg-gradient-to-r from-black to-transparent" />
                <p className="text-xs font-bold text-ds-primary uppercase tracking-wider">
                  Tech Stack
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project?.techStack?.techStackPrev?.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-white text-ds-primary border border-gray-200  hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              
              </div>
            </>
          )}
        </div>

        {/* ── Actions ── */}
        <div className="flex flex-col gap-3 mt-6">
          {/* Primary row */}
          <div className="flex gap-2">
            {project.liveLink && (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <PrimaryBtn href={project.liveLink} label="Visit Website">
                  <ExternalLink className="w-4 h-4" />
                </PrimaryBtn>
              </motion.div>
            )}

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <button
                onClick={() => onViewDetails(project)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
                border-2 border-gray-300
                 text-ds-primary hover:border-ds-border
                 transition-all duration-300 group/btn cursor-pointer"
              >
                <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                Details
              </button>
            </motion.div>
          </div>

        
        </div>
      </div>

      {/* Hover border glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 rounded-2xl border-2 border-black pointer-events-none"
      />
    </motion.article>
  );
};

export default ProjectGridCard;

/* ── Primary Button ── */
function PrimaryBtn({ href, children, label }) {
  if (!href) return null;
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold
      bg-ds-primary text-white shadow-lg shadow-ds-primary/30
      hover:shadow-xl hover:shadow-ds-primary/40 transition-all duration-300
      relative overflow-hidden group/link w-full"
    >
      {/* Shine sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {label}
      </span>
      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform relative z-10" />
    </Link>
  );
}

