"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";
import { ProjectsData } from "@/data/project/projects-data";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import ProjectGridCard from "./ProjectGridCard";
import ProjectDetailsSheet from "../projects/ProjectDetails/ProjectDetailsSheet";
import { GoProjectSymlink } from "react-icons/go";

const TABS = [
  { key: "client", label: "Professional Work" },
  { key: "personal", label: "Personal Project" },
];

const AllProjects = () => {
  const [activeTab, setActiveTab] = useState("client");
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  // Force scroll to top on mount (fixes scrollbar not starting at top on route change)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  // Simulates fetch latency — swap for real data fetching when ready
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const clientProjects = useMemo(
    () => ProjectsData.filter((p) => p.isLive),
    [],
  );
  const personalProjects = useMemo(
    () => ProjectsData.filter((p) => !p.isLive),
    [],
  );

  const visibleProjects =
    activeTab === "client" ? clientProjects : personalProjects;

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setDetailsOpen(true);
  };

  return (
    <section className="py-10">
      <div className=" flex flex-col  items-center w-full mb-12 max-w-2xl mx-auto">
        <div className=" inline-flex px-3 py-1 text-center text-sm font-semibold bg-ds-primary  rounded-full uppercase text-ds-secondary  justify-center items-center gap-2">
          <GoProjectSymlink />
          Portfolio
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl text-ds-primary my-3  font-bold text-center ">
          {" "}
          All Projects
        </h1>

        <p className="text-base font-medium text-ds-muted-foreground text-center capitalize ">
          A curated collection of real-world client work and personal projects,
          showcasing practical problem-solving, modern development practices,
          and production-ready solutions.
        </p>
      </div>
      <Container>
        {/* Tabs */}
        <div className="mb-10 flex justify-center">
          <div className="relative inline-flex rounded-full border border-ds-border bg-ds-background p-1">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              const count =
                tab.key === "client"
                  ? clientProjects.length
                  : personalProjects.length;

              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative z-10 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-ds-secondary"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-pill"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-ds-primary"
                    />
                  )}
                  {tab.label}
                  <span
                    className={`ml-1.5 text-xs ${
                      isActive ? "text-ds-secondary/80" : "text-neutral-400"
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={loading ? "loading" : activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <ProjectCardSkeleton key={i} />
                ))
              : visibleProjects.map((project) => (
                  <ProjectGridCard
                    key={project.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                ))}
          </motion.div>
        </AnimatePresence>

        {!loading && visibleProjects.length === 0 && (
          <p className="mt-10 text-center text-neutral-500">
            No projects to show in this category yet.
          </p>
        )}
      </Container>

      <ProjectDetailsSheet
        project={selectedProject}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
      />
    </section>
  );
};

export default AllProjects;
