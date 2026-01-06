"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";

export default function ProjectsCard({ filteredProjects, activeTab }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.article
            key={project.id}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-[220px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            {/* Card Content */}
            <div className="flex-1 p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {project.title}
                  {project.subTitle && (
                    <span className="block text-sm font-medium text-gray-500">
                      {project.subTitle}
                    </span>
                  )}
                </h3>

                {/* Client Tech */}
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Client Tech
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.clientTech?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Server Tech */}
                {project.category !== "frontend" && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Server Tech
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.serverTech?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Buttons (Normal View) */}
              <div className="flex justify-between gap-3 mt-6">
                <div className="flex gap-3">
                  {project.github ? (
                    <ActionBtn href={project.github} label="GitHub">
                      <FaGithub />
                    </ActionBtn>
                  ) : (
                    <>
                      <ActionBtn href={project.clientGithub} label="Client">
                        <FaGithub />
                      </ActionBtn>
                      <ActionBtn href={project.serverGithub} label="Server">
                        <FaGithub />
                      </ActionBtn>
                    </>
                  )}
                </div>

                <ActionBtn href={project.liveLink} label="Live" primary>
                  <VscLiveShare />
                </ActionBtn>
              </div>
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 z-20 bg-black/90 backdrop-blur-sm 
              text-gray-200 p-6 opacity-0 group-hover:opacity-100 
              transition-opacity duration-500 flex flex-col justify-between"
            >
              <div>
                <p className="text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.category !== "frontend" && (
                  <>
                    <h4 className="text-[#55E6A5] font-semibold mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {project.keyFeatures?.map((item, i) => (
                        <li key={i}>
                          <span className="font-semibold text-gray-100">
                            {item.title}:
                          </span>{" "}
                          {item.feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Buttons (Hover View) */}
              <div className="flex justify-between gap-3 mt-6">
                <div className="flex gap-3">
                  {project.github ? (
                    <ActionBtn href={project.github} label="GitHub">
                      <FaGithub />
                    </ActionBtn>
                  ) : (
                    <>
                      <ActionBtn href={project.clientGithub} label="Client">
                        <FaGithub />
                      </ActionBtn>
                      <ActionBtn href={project.serverGithub} label="Server">
                        <FaGithub />
                      </ActionBtn>
                    </>
                  )}
                </div>

                <ActionBtn href={project.liveLink} label="Live" primary>
                  <VscLiveShare />
                </ActionBtn>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

/* Reusable Button Component */
function ActionBtn({ href, children, label, primary }) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
      ${
        primary
          ? "bg-[#55E6A5] text-black hover:bg-[#3fd694]"
          : "bg-gray-800 text-gray-200 "
      }`}
    >
      <span className="text-lg">{children}</span>
      {label}
    </Link>
  );
}
