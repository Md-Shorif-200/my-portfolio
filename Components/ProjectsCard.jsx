"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaEye } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";
import ProjectModal from "./ProjectModal";

export default function ProjectsCard({ filteredProjects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => {
            const previewTech = [
              ...(project.clientTech?.slice(0, 5) || []),
              ...(project.serverTech?.slice(0, 5) || []),
            ];

            return (
              <motion.article
                key={project.id}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-lg flex flex-col"
              >
                {/* Image */}
                <div className="relative h-[200px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold primary_color">
                      {project.title}
                    </h3>
                    <p className="text-base text-gray-600 font-semibold mt-1 capitalize">
                      {project.subTitle}
                    </p>
                    {/* <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {project.description}
                    </p> */}

                    {/* Technology Label */}
                    <p className="mt-3 text-sm font-semibold primary_color uppercase tracking-wide">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {previewTech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 hover:bg-[#55E6A5]/20 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between items-center gap-2 mt-4">
                    <div className="flex gap-2">
                      {project.github ? (
                        <IconBtn href={project.github} label="GitHub">
                          <FaGithub />
                        </IconBtn>
                      ) : (
                        <>
                          <IconBtn href={project.clientGithub} label="GitHub">
                            <FaGithub />
                          </IconBtn>
                          {/* <IconBtn href={project.serverGithub} label="Server">
                            <FaGithub />
                          </IconBtn> */}
                        </>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <IconBtn href={project.liveLink} primary label="Live">
                        <VscLiveShare />
                      </IconBtn>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md   border
                        text-sm border-[#21BF73] text-[#21BF73] hover:bg-[#21BF73]/10 hover:scale-105 transition cursor-pointer"
                      >
                        <FaEye />
                        Details
                      </button>
                    </div>
                  </div>
                </div>
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

/* Icon Button */
function IconBtn({ href, children, label, primary }) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium
      transition-all hover:scale-105
      ${
        primary
          ? " bg-[#21BF73] hover:bg-[#1aa863] text-white rounded-md font-semibold transition-all shadow-lg shadow-[#21BF73]/35"
          : "bg-gray-800 text-gray-200 hover:bg-gray-700"
      }`}
    >
      {children}
      {label}
    </Link>
  );
}
