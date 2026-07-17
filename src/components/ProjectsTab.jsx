"use client";
import { useState, useEffect } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectsSkeleton from "@/src/app/projects/_components/ProjectsSkeleton";

const CACHE = { fullstack: null, frontend: null };

export default function ProjectsTab() {
  const [fullstackProjects, setFullstackProjects] = useState([]);
  const [frontendProjects, setFrontendProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("fullstack");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAll = async () => {
      if (CACHE.fullstack !== null && CACHE.frontend !== null) {
        setFullstackProjects(CACHE.fullstack);
        setFrontendProjects(CACHE.frontend);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const [fullRes, frontRes] = await Promise.all([
          fetch("/fullstack.json"),
          fetch("/frontend.json"),
        ]);
        const fullData = await fullRes.json();
        const frontData = await frontRes.json();
        CACHE.fullstack = fullData;
        CACHE.frontend = frontData;
        setFullstackProjects(fullData);
        setFrontendProjects(frontData);
      } finally {
        setLoading(false);
      }
    };
    loadAll();
  }, []);

  const projects = activeTab === "fullstack" ? fullstackProjects : frontendProjects;

  return (
    <div className="container mx-auto pt-6 pb-3">
      {/* Tabs */}
      <div
        className="w-[250px] mx-auto flex gap-2 sm:gap-4 justify-between border border-primary/20 py-2 rounded-4xl
        bg-primary-soft backdrop-blur-sm mb-12 px-2"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        {["fullstack", "frontend"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer ${
              activeTab === tab
                ? "bg-primary text-white shadow-md"
                : "bg-transparent text-heading hover:text-primary"
            }`}
          >
            {tab === "fullstack" ? "Full-Stack" : "Frontend"}
          </button>
        ))}
      </div>

      {loading ? (
        <ProjectsSkeleton />
      ) : (
        <ProjectsCard
          activeTab={activeTab}
          filteredProjects={projects}
        />
      )}
    </div>
  );
}