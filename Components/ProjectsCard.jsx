"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";

const img = "/2.jpg";

export default function ProjectsCard({ filteredProjects, activeTab }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.4 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="relative bg-transparent w-full h-[570px] border border-[#55E6A5]/10 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
            whileHover={{ scale: 1.03 }}
          >
            {/* Image Section */}
            <motion.div
              className="relative w-full h-[220px] overflow-hidden"
              initial={{ opacity: 1, y: 0 }}
              whileHover={{ opacity: 0.2, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </motion.div>

            {/* Card Content */}
            <div className="px-4 pb-4 pt-3 flex-1 flex flex-col justify-between relative ">
              <div>
                <h3 className="text-xl font-bold mb-2 secondary_color capitalize">{project.title} {project.subTitle ? "-" :""} <span className="capitalize text-base text-gray-400">
{project.subTitle}
                    </span>
                </h3>

                <div className="w-full flex gap-x-2 mb-4">
                  <div className="w-[30%]">
                    <h2 className="capitalize text-base text-gray-300 font-semibold">
                      Client tech:
                    </h2>
                  </div>
                  <div className="w-[70%] flex gap-x-2 gap-y-1 flex-wrap">
                    {project.clientTech?.map((tech) => (
                      <span
                        key={tech}
                        className="text-base text-gray-400 capitalize"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full flex gap-x-2 mb-4">
                  <div className="w-[30%]">
                    <h2 className="capitalize text-base text-gray-300 font-semibold">
                      Server tech:
                    </h2>
                  </div>
                  <div className="w-[70%] flex gap-x-2 gap-y-1 flex-wrap">
                    {project.serverTech?.map((tech) => (
                      <span
                        key={tech}
                        className="text-base text-gray-400 capitalize"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-3 text-sm font-medium transition-all duration-300 z-20">
               
                {
                  project?.github ? 
                   <>
                   <Link
                  href={project.github}
                  className=" text-gray-300 text-sm capitalize bg-[#55E6A5]/10 shadow-sm shadow-green-200 flex justify-center items-center px-2 py-1 gap-2 group-hover:bg-[#55E6A5] group-hover:text-black transition-all duration-300"
                >
                  <FaGithub className="text-lg" />
                  github
                </Link>
                   </>
                  : 

                   <>
                    <Link
                  href={project.clientGithub}
                  className=" text-gray-300 text-sm capitalize bg-[#55E6A5]/10 shadow-sm shadow-green-200 flex justify-center items-center px-2 py-1 gap-2 group-hover:bg-[#55E6A5] group-hover:text-black transition-all duration-300"
                >
                  <FaGithub className="text-lg" />
                  Client
                </Link>

                <Link
                  href={project.serverGithub}
                  className=" text-gray-300 text-sm capitalize bg-[#55E6A5]/10 shadow-sm shadow-green-200 flex justify-center items-center px-2 py-1 gap-2 group-hover:bg-[#55E6A5] group-hover:text-black transition-all duration-300"
                >
                  <FaGithub className="text-lg" />
                  Server
                </Link>
                   </>
                }

                <Link
                  href={project.liveLink}
                  className=" text-gray-300 text-sm capitalize bg-[#55E6A5]/10 shadow-sm shadow-green-200 flex justify-center items-center px-2 py-1 gap-2 group-hover:bg-[#55E6A5] group-hover:text-black transition-all duration-300"
                >
                  <VscLiveShare className="text-lg" />
                  Preview
                </Link>
              </div>
            </div>

            {/* Overlay (show on hover) */}
            <motion.div
              className="absolute inset-0 bg-black text-gray-100 flex flex-col   opacity-0 group-hover:opacity-100 transition-all duration-500 p-5 z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <p className="text-base text-gray-300 mb-4 ">
                {project.description}
              </p>
              <div className="w-full">
                <h4 className="text-[#55E6A5] text-lg font-semibold mb-2">
                  Key Features
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  {project.keyFeatures?.map((feature, i) => (
                    <li key={i} className=" text-base text-gray-400 ">
                      <span className="font-semibold text-base text-gray-300 ">{feature.title}:</span>{" "}
                      {feature.feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
