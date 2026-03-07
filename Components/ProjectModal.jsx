"use client";

import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BiCodeAlt, BiServer } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi";

export default function ProjectModal({ project, onClose }) {
  // Check if there are any valid key features to display
  const hasValidFeatures = project.keyFeatures?.some(f => f.title && f.feature);

  const modalContent = (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        style={{
          minWidth: "100vw",
          minHeight: "100vh",
        }}
      >
        {/* Backdrop - full viewport */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          style={{
            minWidth: "100vw",
            minHeight: "100vh",
          }}
        />

        {/* Modal - single scrollable area, no fixed green box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-br from-white to-gray-50 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl"
        >
          {/* Close button - always visible */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-200/80 hover:bg-gray-300
              text-gray-700 transition-all duration-300 rounded-full flex items-center justify-center cursor-pointer"
          >
            <IoMdClose className="text-2xl" />
          </button>

          {/* All content scrolls together */}
          <div className="overflow-y-auto h-full max-h-[90vh] px-8 pt-8 pb-8">
            {/* Title & Subtitle - no green box */}
     {/* ================= Modal Header ================= */}
<div className="mb-8">



{/* Title */}
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
  {project.title}
</h2>

{/* Subtitle Badge */}
<span className={`${!project.subTitle ? "hidden" : "inline-block bg-[#21BF73]/10 text-[#21BF73] text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide"}`}>
  {project.subTitle}
</span>

</div>

{/* ================= Description ================= */}
{project.description && (
<div className="mb-8">
  <p className="text-gray-700 leading-relaxed text-[15px] md:text-base max-w-3xl">
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

            {/* Buttons - inside scroll area */}
            <div className="pt-6 border-t border-gray-200 flex gap-3 flex-wrap">
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
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  if (typeof document === "undefined") return null;
  return createPortal(modalContent, document.body);
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