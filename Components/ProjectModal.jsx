"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BiCodeAlt, BiServer } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi";

export default function ProjectModal({ project, onClose }) {
  // Check if there are any valid key features to display
  const hasValidFeatures = project.keyFeatures?.some(f => f.title && f.feature);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-br from-white to-gray-50 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col"
        >

          {/* Header */}
          <div className="relative bg-gradient-to-r from-[#55E6A5] via-[#3fd694] to-[#2bc77d] p-8 pb-12 shrink-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm
              text-white transition-all duration-300 rounded-full flex items-center justify-center cursor-pointer"
            >
              <IoMdClose className="text-2xl" />
            </button>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {project.title}
            </h2>

            <p className="text-white/90 text-lg font-medium capitalize">
              {project.subTitle}
            </p>
          </div>

          {/* Body */}
          <div className="overflow-y-auto px-8 py-6">

            {/* Description */}
            {project.description && (
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-base">
                  {project.description}
                </p>
              </div>
            )}

            {/* Client Tech */}
            {project.clientTech?.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <BiCodeAlt className="text-[#55E6A5] text-2xl" />
                  <h3 className="font-bold text-gray-800 text-lg">
                    Client Technologies
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.clientTech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm font-medium rounded-lg 
                      bg-gray-100 text-gray-800 border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Server Tech */}
            {project.serverTech?.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <BiServer className="text-[#55E6A5] text-2xl" />
                  <h3 className="font-bold text-gray-800 text-lg">
                    Server Technologies
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.serverTech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm font-medium rounded-lg 
                      bg-gray-100 text-gray-800 border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {hasValidFeatures && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <HiSparkles className="text-[#55E6A5] text-2xl" />
                  <h3 className="font-bold text-gray-800 text-lg">
                    Key Features
                  </h3>
                </div>

                <div className="space-y-3">
                  {project.keyFeatures.map((f, i) => (
                    f.title && f.feature && (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="w-2 h-2 rounded-full bg-[#55E6A5] mt-2 shrink-0" />
                        <p className="text-gray-700">
                          <span className="font-semibold text-gray-900">
                            {f.title}:
                          </span>{" "}
                          {f.feature}
                        </p>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Buttons */}
          <div className="border-t border-gray-200 bg-white px-8 py-6 flex gap-3 flex-wrap mt-auto shrink-0">

            {/* Github buttons */}
            {project.github && (
              <ModalBtn href={project.github} icon={<FaGithub />}>
                View Code
              </ModalBtn>
            )}

            {project.clientGithub && (
              <ModalBtn href={project.clientGithub} icon={<FaGithub />}>
                Client Code
              </ModalBtn>
            )}

            {project.serverGithub && (
              <ModalBtn href={project.serverGithub} icon={<FaGithub />}>
                Server Code
              </ModalBtn>
            )}

            {/* Live Link Button */}
            {project.liveLink && (
              <ModalBtn
                href={project.liveLink}
                icon={<FaExternalLinkAlt />}
                primary
              >
                View Live Demo
              </ModalBtn>
            )}

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function ModalBtn({ href, children, primary, icon }) {
  // Return null if href is missing or an empty string
  if (!href) return null;

  return (
    <Link
      href={href}
      target="_blank"
      className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold
      transition-all duration-300 hover:scale-105
      ${
        primary
          ? "bg-gradient-to-r from-[#55E6A5] to-[#3fd694] text-gray-900"
          : "bg-gray-900 text-white"
      }`}
    >
      <span className="text-lg">{icon}</span>
      {children}
    </Link>
  );
}