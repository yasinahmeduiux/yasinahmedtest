import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp, Check, PlayCircle, Clock, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { courseModulesData } from "../data";

interface CourseSectionProps {
  onNavigate: (page: string, defaultMessage?: string) => void;
}

export default function CourseSection({ onNavigate }: CourseSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedModule, setExpandedModule] = useState<number | null>(1); // Default Module 1 expanded

  const filteredModules = courseModulesData.filter((mod) =>
    mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mod.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mod.objectives.some((obj) => obj.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleExpand = (modId: number) => {
    if (expandedModule === modId) {
      setExpandedModule(null);
    } else {
      setExpandedModule(modId);
    }
  };

  const handleEnrollClick = () => {
    onNavigate("contact", "Hi Yasin, I am interested in enrolling in your comprehensive UI/UX Design Course. Please share details regarding the upcoming cohort, pricing, and schedules.");
  };

  return (
    <div id="course-section-container" className="space-y-16 py-12">
      
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-400 text-xs font-mono font-bold tracking-widest uppercase">
          Comprehensive UI/UX Syllabus 🎓
        </div>
        <h1 id="course-page-title" className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
          Learn. Create. <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Grow.</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Become a professional product designer. Master user research, wireframing, high-fidelity layouts, advanced design tokens, and real-world client collaborations over 18 structured modules.
        </p>
      </div>

      {/* Course Highlights Stat Banner */}
      <div id="course-stats-banner" className="bg-[#0a0718] border border-[#1d1645]/80 p-8 rounded-3xl shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#1f1847]">
          <div className="space-y-1.5 py-2 sm:py-0">
            <span className="text-violet-400 font-bold flex items-center justify-center gap-1.5 text-sm sm:text-base">
              <BookOpen size={18} /> 18 FULL MODULES
            </span>
            <p className="text-gray-400 text-xs">Over 72+ Interactive lessons</p>
          </div>
          <div className="space-y-1.5 py-2 sm:py-0">
            <span className="text-violet-400 font-bold flex items-center justify-center gap-1.5 text-sm sm:text-base">
              <Clock size={18} /> 24+ WEEK CYCLE
            </span>
            <p className="text-gray-400 text-xs">Self-paced with live mentoring</p>
          </div>
          <div className="space-y-1.5 py-2 sm:py-0">
            <span className="text-violet-400 font-bold flex items-center justify-center gap-1.5 text-sm sm:text-base">
              <Sparkles size={18} /> 4 CAPSTONE PROJECTS
            </span>
            <p className="text-gray-400 text-xs">Industry-ready case studies</p>
          </div>
        </div>
      </div>

      {/* Course Core Benefits Column */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div id="benefit-card-1" className="bg-[#0a0718] border border-[#1d1645]/80 p-6 rounded-2xl space-y-4 shadow-md">
          <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center">
            <PlayCircle size={20} />
          </div>
          <h3 className="font-sans font-bold text-base text-white">Live Mentorship Sessions</h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Gain weekly direct design reviews, task support, and client-acquiring strategy sessions facilitated directly by Yasin Ahmed.
          </p>
        </div>

        <div id="benefit-card-2" className="bg-[#0a0718] border border-[#1d1645]/80 p-6 rounded-2xl space-y-4 shadow-md">
          <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center">
            <Check size={20} />
          </div>
          <h3 className="font-sans font-bold text-base text-white">Figma-Token Standards</h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Learn high-level design tokens, variables, component properties, variant behaviors, and production-grade developer handoffs.
          </p>
        </div>

        <div id="benefit-card-3" className="bg-[#0a0718] border border-[#1d1645]/80 p-6 rounded-2xl space-y-4 shadow-md">
          <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center">
            <Sparkles size={20} />
          </div>
          <h3 className="font-sans font-bold text-base text-white">Career Placement Support</h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Obtain resume restructuring, Behance publication optimization guides, and access to exclusive hiring partner ecosystems.
          </p>
        </div>

      </div>

      {/* Search Filter bar */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0a0718] border border-[#1d1645]/80 p-4 rounded-2xl">
          <h2 className="font-sans font-bold text-lg text-white shrink-0">18 Comprehensive Modules</h2>
          
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input
              type="text"
              id="course-syllabus-search"
              placeholder="Search curriculum modules or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#110c2c] border border-[#1f194c]/80 rounded-xl py-2.5 pl-11 pr-4 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
            />
          </div>
        </div>

        {/* Expandable Module Accordion Rows */}
        <div id="syllabus-modules-accordion" className="space-y-4">
          {filteredModules.length > 0 ? (
            filteredModules.map((mod) => {
              const isExpanded = expandedModule === mod.id;
              return (
                <div
                  key={mod.id}
                  id={`module-accordion-row-${mod.id}`}
                  className={`bg-[#0a0718] border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isExpanded ? "border-violet-500 shadow-md" : "border-[#1d1645]/80"
                  }`}
                >
                  {/* Row Trigger Header */}
                  <div
                    onClick={() => toggleExpand(mod.id)}
                    className="p-5 flex items-center justify-between cursor-pointer hover:bg-[#120d2f]/50 transition-colors gap-4"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="font-mono text-xs font-extrabold text-violet-400 bg-violet-400/5 border border-violet-500/10 px-2.5 py-1.5 rounded-lg shrink-0">
                        {mod.subtitle}
                      </span>
                      <h3 className="font-sans font-bold text-sm sm:text-base text-white hover:text-violet-300 transition-colors">
                        {mod.title}
                      </h3>
                    </div>
                    <div className="text-gray-400">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {/* Accordion Expandable Content */}
                  {isExpanded && (
                    <div className="px-5 pb-6 border-t border-[#1b1540]/60 pt-4 bg-[#110c2e]/20 space-y-3 animate-slide-in-from-top duration-300">
                      <p className="text-violet-400 text-xs font-bold uppercase tracking-wider">Learning Objectives & Outcomes:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-300">
                        {mod.objectives.map((obj, oIdx) => (
                          <li key={oIdx} className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={12} />
                            </span>
                            <span className="leading-relaxed">{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-[#0a0718] border border-[#1d1645]/80 rounded-2xl text-gray-500 text-sm">
              No syllabus modules found matching "{searchQuery}".
            </div>
          )}
        </div>
      </div>

      {/* Cohort Call To Action banner */}
      <div className="bg-gradient-to-r from-violet-950 via-indigo-950 to-violet-950 border border-violet-500/20 p-10 sm:p-12 rounded-3xl text-center space-y-6">
        <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-white">Join the Next Cohort</h2>
        <p className="text-violet-200 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Syllabus seats are limited to 25 learners per cycle to ensure high-intensity, personal mentoring focus. Apply today to reserve your placement.
        </p>
        <div className="pt-2">
          <button
            id="course-enroll-cta-btn"
            onClick={handleEnrollClick}
            className="px-8 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-sans text-sm font-bold inline-flex items-center space-x-2 cursor-pointer shadow-lg shadow-violet-500/20"
          >
            <span>Apply & Inquire Now</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

    </div>
  );
}
