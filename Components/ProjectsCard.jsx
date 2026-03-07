"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaEye, FaExternalLinkAlt } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";
import { HiCode } from "react-icons/hi";
import ProjectModal from "./ProjectModal";

export default function ProjectsCard({ filteredProjects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => {
          const previewTech = [
            ...(project.clientTech?.slice(0, 4) || []),
            ...(project.serverTech?.slice(0, 4) || []),
          ].slice(0, 5);

          const isHovered = hoveredId === project.id;

          return (
            <motion.article
              key={project.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200/60 shadow-md hover:shadow-2xl hover:shadow-[#21BF73]/10 transition-all duration-500 flex flex-col"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#21BF73]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

              {/* Image Section with Overlay */}
              <div className="relative h-[220px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quick Action Buttons on Image Hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center gap-3 z-20"
                >
                  <QuickActionBtn href={project.liveLink} icon={<FaExternalLinkAlt />} label="Live" />
                  <QuickActionBtn 
                    onClick={() => setSelectedProject(project)} 
                    icon={<FaEye />} 
                    label="Details" 
                    isButton 
                  />
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-white/95 backdrop-blur-sm text-gray-800 shadow-lg border border-gray-200/50">
                    {project.subTitle || "Web App"}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-1 relative z-10">
                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#21BF73] transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    {project.description || "A modern web application built with cutting-edge technologies"}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2.5">
                    <HiCode className="text-[#21BF73] text-sm" />
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Tech Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {previewTech.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs font-medium rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border border-gray-200 hover:border-[#21BF73] hover:text-[#21BF73] transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {(project.clientTech?.length + project.serverTech?.length > 5) && (
                      <span className="px-3 py-1 text-xs font-medium rounded-lg bg-[#21BF73]/10 text-[#21BF73] cursor-default">
                        +{(project.clientTech?.length + project.serverTech?.length) - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between gap-3">
                    {/* GitHub Links */}
                    <div className="flex gap-2">
                      {project.github ? (
                        <ActionButton href={project.github} icon={<FaGithub />} variant="secondary" />
                      ) : (
                        <>
                          <ActionButton href={project.clientGithub} icon={<FaGithub />} variant="secondary" tooltip="Client Code" />
                          {project.serverGithub && (
                            <ActionButton href={project.serverGithub} icon={<HiCode />} variant="secondary" tooltip="Server Code" />
                          )}
                        </>
                      )}
                    </div>

                    {/* Live & Details */}
                    <div className="flex gap-2">
                      <ActionButton href={project.liveLink} icon={<VscLiveShare />} label="Live" variant="primary" />
                      <ActionButton 
                        onClick={() => setSelectedProject(project)} 
                        icon={<FaEye />} 
                        variant="outline" 
                        isButton 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#21BF73]/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.article>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* Quick Action Button (for image overlay) */
function QuickActionBtn({ href, onClick, icon, label, isButton }) {
  const classes = "flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md text-gray-800 font-semibold text-sm shadow-xl hover:bg-[#21BF73] hover:text-white hover:scale-110 transition-all duration-300 border border-white/20";
  
  if (isButton) {
    return (
      <button onClick={onClick} className={classes}>
        {icon}
        {label}
      </button>
    );
  }

  return (
    <Link href={href} target="_blank" className={classes}>
      {icon}
      {label}
    </Link>
  );
}

/* Action Button Component */
function ActionButton({ href, onClick, icon, label, variant = "secondary", isButton, tooltip }) {
  const variantClasses = {
    primary: "bg-gradient-to-r from-[#21BF73] to-[#1aa863] text-white shadow-lg shadow-[#21BF73]/30 hover:shadow-xl hover:shadow-[#21BF73]/40 hover:scale-105",
    secondary: "bg-gray-800 text-white hover:bg-gray-900 hover:scale-105 shadow-md",
    outline: "bg-white border-2 border-[#21BF73] text-[#21BF73] hover:bg-[#21BF73] hover:text-white hover:scale-105 shadow-sm",
  };

  const baseClasses = `flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${variantClasses[variant]}`;

  const content = (
    <>
      {icon}
      {label && <span className="hidden sm:inline">{label}</span>}
    </>
  );

  if (isButton) {
    return (
      <button onClick={onClick} className={baseClasses} title={tooltip}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href} target="_blank" className={baseClasses} title={tooltip}>
      {content}
    </Link>
  );
}