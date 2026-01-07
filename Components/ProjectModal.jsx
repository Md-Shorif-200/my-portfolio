"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-4xl font-semibold text-gray-500 hover:text-black cursor-pointer"
        >
          ×
        </button>

        <h2 className="text-2xl  primary_color font-bold">{project.title}</h2>
           <p className="text-base text-gray-600 font-semibold mt-1 capitalize ">
                      {project.subTitle}
                    </p>
        <p className="text-gray-600 mt-4 pb-3  border-b ">{project.description}</p>

        {/* Client Technology */}
        {project.clientTech?.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold primary_color mb-2">
              Client Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.clientTech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Server Technology */}
        {project.serverTech?.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold primary_color mb-2">
              Server Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.serverTech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.keyFeatures?.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              {project.keyFeatures.map((f, i) => (
                <li key={i}>
                  <span className="font-semibold">{f.title}:</span> {f.feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 mt-8 flex-wrap">
          {project.github ? (
            <ModalBtn href={project.github}>
              <FaGithub /> GitHub
            </ModalBtn>
          ) : (
            <>
              <ModalBtn href={project.clientGithub}>
                <FaGithub /> Client
              </ModalBtn>
              <ModalBtn href={project.serverGithub}>
                <FaGithub /> Server
              </ModalBtn>
            </>
          )}

          <ModalBtn href={project.liveLink} primary>
            <VscLiveShare /> Live
          </ModalBtn>
        </div>
      </motion.div>
    </div>
  );
}

function ModalBtn({ href, children, primary }) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
      transition hover:scale-105
      ${
        primary
          ? "bg-[#55E6A5] text-black hover:bg-[#3fd694]"
          : "bg-gray-800 text-gray-200 hover:bg-gray-700"
      }`}
    >
      {children}
    </Link>
  );
}
