"use client";
import { useState, useEffect } from "react";
import ProjectsCard from "./ProjectsCard";

export default function ProjectsTab() {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("fullstack");

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const filteredProjects = projects.filter((p) => p.category === activeTab);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Tabs (DESIGN UPDATED ONLY) */}
      <div
        className="w-[350px] mx-auto flex gap-2 sm:gap-4 justify-center border border-green-100 py-2 rounded-4xl
      bg-[#55E6A5]/10 backdrop-blur-sm mb-8"
      >
        {["fullstack", "frontend"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-6 py-2 rounded-xl text-sm sm:text-lg font-medium transition-all duration-300 cursor-pointer ${
              activeTab === tab
                ? "bg-[#55E6A5] text-black shadow-md"
                : "bg-transparent text-gray-400 hover:text-[#55E6A5]"
            }`}
          >
            {tab === "fullstack" ? "Full-Stack" : "Frontend"}
          </button>
        ))}
      </div>

      {/* ProjectsCard call - unchanged (only its internal styles may be updated) */}
      <ProjectsCard activeTab={activeTab} filteredProjects={filteredProjects} />
    </div>
  );
}
