import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
  className="bg-transparent w-full h-[450px] border border-[#55E6A5]/10 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
  whileHover={{ scale: 1.03 }}
>
  {/* Image: fixed height */}
  <div className="relative w-full h-[220px]">
    <Image
      src={img}
      alt={project.title}
      fill
      className="object-cover"
    />
  </div>

  {/* Content: take remaining space and distribute items */}
  <div className="px-4 pb-4 pt-3 flex-1 flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-bold mb-2 secondary_color ">
        {project.title}
      </h3>
        <div className=" w-full flex  gap-x-2 mb-4">
                  <div className="w-[30%]">
                    <h2 className="capitalize text-base text-gray-300 font-semibold">
                      client tech :{" "}
                    </h2>
                  </div>

                  <div className="w-[70%] flex gap-x-2  gap-y-1  flex-wrap">
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

                <div className=" w-full flex  gap-x-2 mb-4">
                  <div className="w-[30%]">
                    <h2 className="capitalize text-base text-gray-300 font-semibold">
                      client tech :{" "}
                    </h2>
                  </div>

                  <div className="w-[70%] flex gap-x-2  gap-y-1  flex-wrap">
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


    <div className="flex gap-10 mt-3 text-sm font-medium">
      <Link href={project.clientGithub} className="" target="_blank" rel="noreferrer">Client</Link>
      {project.serverGithub && <a href={project.serverGithub} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Server</a>}
      <a href={project.liveLink} className="text-green-600 hover:underline" target="_blank" rel="noreferrer">Live</a>
    </div>
  </div>
</motion.div>

        ))}
      </motion.div>
    </AnimatePresence>
  );
}
