"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaEye, FaArrowRight } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";
import { HiExternalLink } from "react-icons/hi";
import ProjectModal from "./ProjectModal";

export default function ProjectsCard({ filteredProjects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => {
            const previewTech = [
              ...(project.clientTech?.slice(0, 4) || []),
              ...(project.serverTech?.slice(0, 4) || []),
            ].slice(0, 5);

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#21BF73]/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                {/* Image Container */}
                <div className="relative h-[220px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <motion.div
                    animate={{
                      scale: hoveredId === project.id ? 1.1 : 1,
                    }}
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

                  {/* Overlay on Image */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-4"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: hoveredId === project.id ? 0 : 20,
                        opacity: hoveredId === project.id ? 1 : 0,
                      }}
                      transition={{ delay: 0.1 }}
                    >
                      {project.liveLink && (
                        <Link href={project.liveLink} target="_blank" className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/30">
                          <VscLiveShare className="text-sm" />
                          View Project
                        </Link>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800 shadow-lg border border-gray-200">
                      {project.category || "Web App"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1 relative z-20">
                  <div>
                    {/* Title with Animated Underline */}
                    <div className="relative inline-block">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#21BF73] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: hoveredId === project.id ? "100%" : "0%",
                        }}
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#21BF73] to-[#55E6A5]"
                      />
                    </div>

                    <p className="text-sm text-gray-500 font-medium mt-2 capitalize flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#21BF73]" />
                      {project.subTitle}
                    </p>

                    {/* Technology Label */}
                    <div className="mt-5 mb-3 flex items-center gap-2">
                      <div className="w-8 h-[2px] bg-gradient-to-r from-[#21BF73] to-transparent" />
                      <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Tech Stack
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {previewTech.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 border border-gray-100 hover:text-[#21BF73] hover:shadow-md transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {(project.clientTech?.length || 0) +
                        (project.serverTech?.length || 0) >
                        5 && (
                        <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#21BF73]/10 text-[#21BF73] border border-[#21BF73]/20">
                          +
                          {(project.clientTech?.length || 0) +
                            (project.serverTech?.length || 0) -
                            5}{" "}
                          more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 mt-6">
                    {/* Primary Actions */}
                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex-1">
                        <IconBtn href={project.liveLink} primary label="Live Demo">
                          <HiExternalLink className="text-base" />
                        </IconBtn>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
                          border-2 border-gray-200 text-gray-700 hover:border-[#21BF73] hover:text-[#21BF73] 
                          hover:bg-[#21BF73]/5 transition-all duration-300 group/btn cursor-pointer"
                        >
                          <FaEye className="group-hover/btn:scale-110 transition-transform " />
                          Details
                        </button>
                      </motion.div>
                    </div>

                    {/* Secondary Actions */}
                    <div className="flex gap-2">
                      {project.github ? (
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex-1">
                          <SecondaryBtn hideButton={project.title == 'AMYRAH'} href={project.github} label="Source Code">
                            <FaGithub className="text-base" />
                          </SecondaryBtn>
                        </motion.div>
                      ) : (
                        <>
                          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex-1">
                            <SecondaryBtn href={project.clientGithub} label="Client">
                              <FaGithub className="text-base" />
                            </SecondaryBtn>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex-1">
                            <SecondaryBtn href={project.serverGithub} label="Server">
                              <FaGithub className="text-base" />
                            </SecondaryBtn>
                          </motion.div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                  className="absolute inset-0 rounded-2xl border-2 border-[#21BF73] pointer-events-none"
                />
              </motion.article>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

/* Primary Icon Button */
function IconBtn({ href, children, label, primary }) {
  // Only render if href is provided and not empty
  if (!href) return null;
  
  return (
    <Link
      href={href}
      target="_blank"
      className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold
      transition-all duration-300 relative overflow-hidden group/link w-full
      ${
        primary
          ? "bg-gradient-to-r from-[#21BF73] to-[#1aa863] text-white shadow-lg shadow-[#21BF73]/30 hover:shadow-xl hover:shadow-[#21BF73]/40"
          : "bg-gray-900 text-white hover:bg-gray-800"
      }`}
    >
      {/* Shine Effect */}
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
      
      <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform relative z-10" />
    </Link>
  );
}

/* Secondary Button */
function SecondaryBtn({hideButton, href, children, label }) {
  // Only render if href is provided and not empty, and hideButton is false
  if (!href || hideButton) return null;
  
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
      border-2 border-gray-200 text-gray-700 hover:border-[#21BF73] hover:text-[#21BF73] 
      hover:bg-[#21BF73]/5 transition-all duration-300 w-full relative overflow-hidden"
    >
      <span className="flex items-center gap-2 relative z-10">
        {children}
        {label}
      </span>
      
      {/* Hover Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
}