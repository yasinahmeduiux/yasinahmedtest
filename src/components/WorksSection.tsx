import React, { useState } from "react";
import { Filter, Eye, X, Check, Award, Briefcase, ChevronRight, Layout, Calendar, Wrench } from "lucide-react";
import { projectsData } from "../data";
import { Project } from "../types";

export default function WorksSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "UI/UX Design", "Mobile App", "Web Design", "Branding"];

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div id="works-section-container" className="space-y-16 py-12">
      
      {/* Page Header */}
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <h1 id="works-page-title" className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          My Recent Works
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Explore a selected showcase of high-converting interface layouts, digital dashboards, mobile products, and strategic branding identities.
        </p>
      </div>

      {/* Filter Tabs Grid */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
        {categories.map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              id={`filter-tab-${cat.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.45)]"
                  : "bg-[#110e2f]/80 border border-[#211a4e]/60 text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid (Dynamic Filtering) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`project-grid-card-${project.id}`}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-[#0a0718] border border-[#1d1645]/80 rounded-2xl overflow-hidden hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] transition-all duration-300 flex flex-col h-full"
          >
            {/* Project Image */}
            <div className="h-56 relative overflow-hidden shrink-0">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-[#07050f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center space-x-2 bg-violet-600 text-white px-4 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider shadow-lg">
                  <Eye size={14} />
                  <span>View Case Study</span>
                </div>
              </div>

              {/* Tag Overlays */}
              <span className="absolute top-3 left-3 bg-violet-600 text-[10px] font-mono font-bold text-white px-2 py-1 rounded">
                {project.category}
              </span>
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
              <div className="space-y-1.5">
                <p className="text-violet-400 text-xs font-mono tracking-wider font-semibold uppercase">{project.subtitle}</p>
                <h3 className="font-sans font-bold text-lg text-white group-hover:text-violet-300 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Flex Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-[#130f2c]/80 border border-[#211a4c]/60 text-[10px] font-medium text-gray-300 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Case-Study Modal Popup */}
      {selectedProject && (
        <div 
          id="project-case-study-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
        >
          <div className="bg-[#0a071d] border border-violet-500/30 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto relative p-6 sm:p-8 space-y-6 text-gray-300">
            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#130f2d] hover:bg-[#1a143d] border border-[#231b51]/60 text-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Modal Heading */}
            <div className="space-y-1">
              <span className="text-violet-400 text-xs font-mono font-bold uppercase tracking-widest">{selectedProject.category}</span>
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">{selectedProject.title}</h2>
              <p className="text-gray-400 text-xs sm:text-sm">{selectedProject.subtitle}</p>
            </div>

            {/* Image banner */}
            <div className="h-64 sm:h-80 w-full rounded-2xl overflow-hidden relative">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a071d] via-transparent to-transparent"></div>
            </div>

            {/* Structured Project casing Details */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-[#1b1540]/60 pt-6">
              
              {/* Left casing metadata column */}
              <div className="md:col-span-4 space-y-4 text-xs font-sans">
                <div className="space-y-1 bg-[#120e2e]/50 p-4 rounded-xl border border-[#211a51]/50">
                  <span className="text-violet-400 font-mono text-[10px] uppercase font-bold tracking-wider flex items-center gap-1">
                    <Award size={12} /> ROLE & SCOPE
                  </span>
                  <p className="text-white font-medium text-sm">Lead UI/UX Designer</p>
                </div>
                <div className="space-y-1 bg-[#120e2e]/50 p-4 rounded-xl border border-[#211a51]/50">
                  <span className="text-violet-400 font-mono text-[10px] uppercase font-bold tracking-wider flex items-center gap-1">
                    <Calendar size={12} /> TIMELINE
                  </span>
                  <p className="text-white font-medium text-sm">6 Weeks Iteration</p>
                </div>
                <div className="space-y-1 bg-[#120e2e]/50 p-4 rounded-xl border border-[#211a51]/50">
                  <span className="text-violet-400 font-mono text-[10px] uppercase font-bold tracking-wider flex items-center gap-1">
                    <Wrench size={12} /> TOOLS USED
                  </span>
                  <p className="text-white font-medium text-sm">Figma, Miro, Notion, CSS</p>
                </div>
              </div>

              {/* Right casing descriptions */}
              <div className="md:col-span-8 space-y-4 text-xs sm:text-sm leading-relaxed">
                <div className="space-y-1.5">
                  <h4 className="text-white font-bold font-sans flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span> The Challenge
                  </h4>
                  <p className="text-gray-400">
                    The client required a complete structural re-design that prioritizes conversions, speeds up user task performance by over 40%, and scales seamlessly across device breakpoints.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-white font-bold font-sans flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span> Research & Discovery Insights
                  </h4>
                  <p className="text-gray-400">
                    Conducted heuristic audits, empathy maps, and competitive analyses of key sector players. Identified usability bottlenecks surrounding registration flow drop-offs and poor visual hierarchy patterns.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-white font-bold font-sans flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span> Final Design & Delivery Outcome
                  </h4>
                  <p className="text-gray-400">
                    Built custom component wireframes and styled premium UI layouts matching modern branding guidelines. Standardized atomic design systems with flexible tokens, yielding clean developer handoffs and excellent product engagement reviews.
                  </p>
                </div>
              </div>

            </div>

            {/* Modal Bottom Close */}
            <div className="pt-4 border-t border-[#1b1540]/60 flex justify-end">
              <button
                id="modal-footer-close"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-sans text-xs font-bold uppercase cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Works Success metrics and achievements */}
      <div id="works-metrics-banner" className="bg-gradient-to-r from-[#0a071c] via-[#120a2e] to-[#0a071c] border border-violet-500/15 p-8 rounded-3xl shadow-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div id="metric-satisfaction">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-violet-400">100%</span>
            <p className="text-gray-400 text-xs mt-2 font-medium uppercase tracking-wider">Client Satisfaction Rate</p>
          </div>
          <div id="metric-retention">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-violet-400">92%</span>
            <p className="text-gray-400 text-xs mt-2 font-medium uppercase tracking-wider">Client Retention Level</p>
          </div>
          <div id="metric-speed">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-violet-400">3x</span>
            <p className="text-gray-400 text-xs mt-2 font-medium uppercase tracking-wider">Design to Code Velocity</p>
          </div>
          <div id="metric-delivery">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-violet-400">45+</span>
            <p className="text-gray-400 text-xs mt-2 font-medium uppercase tracking-wider">Digital Platforms Shipped</p>
          </div>
        </div>
      </div>

    </div>
  );
}
