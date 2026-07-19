import React from "react";
import { Sparkles, GraduationCap, Briefcase, Award, Users, Palette, Search, Layers, Wrench, Layout } from "lucide-react";
import { experiencesData, skillCategoriesData } from "../data";
import LucideIcon from "./LucideIcon";

export default function AboutSection() {
  return (
    <div id="about-section-container" className="space-y-16 py-12">
      
      {/* Page Header */}
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <h1 id="about-page-title" className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          About Me
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Passionate about creating exceptional digital experiences that make a difference.
        </p>
      </div>

      {/* Intro Narrative and Quick Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Narrative bio (lg:col-span-8) */}
        <div id="about-bio-text" className="lg:col-span-8 bg-[#0a0718] border border-[#1d1645]/80 p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="font-sans font-bold text-2xl text-white flex items-center gap-2">
            Hi, This Is Yasin Ahmed <span className="animate-pulse">👋</span>
          </h2>
          
          <p>
            I am a <strong className="text-violet-400 font-medium">results-driven Lead User Experience Designer with 5 years of experience</strong> creating intuitive, functional, and user-centered digital products. My work focuses on deeply understanding user needs and translating them into seamless, meaningful design experiences.
          </p>
          
          <p>
            Currently, I serve as a <strong className="text-white">Project Manager at Bongo Source</strong>, where I oversee mobile app and web development projects. I manage cross-functional teams, streamline workflows, and ensure smooth delivery of solutions aligned with both business and client goals.
          </p>

          <p>
            Previously, I worked as the <strong className="text-white">User Experience Lead at Nebulae Software Solutions</strong>, guiding end-to-end design for enterprise platforms, SaaS tools, HRM systems, and dashboards. Along with my professional roles, I actively contribute to developing future designers as an Instructor at Interactive Cares and Grameenphone Academy, teaching UI/UX design, prototyping, and user research.
          </p>

          <p>
            As a <strong className="text-violet-400 font-medium">Certified Google UX Designer and Information Architecture Specialist</strong>, I bring a data-driven mindset, usability best practices, and strategic design thinking to every project. I have collaborated with clients across <strong className="text-white">24+ countries</strong>, delivering solutions that elevate user experience while meeting business objectives.
          </p>

          <p>
            Beyond design, I'm a team mentor and collaborative leader who values empathy, clarity, and continuous learning. Whether guiding students, leading teams, or working directly with clients, my focus remains on creating impactful, user-first results.
          </p>
        </div>

        {/* Quick Stats sidebar (lg:col-span-4) */}
        <div id="about-stats-sidebar" className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <div className="bg-[#0a0718] border border-[#1d1645]/80 p-6 rounded-2xl flex items-center justify-between shadow-lg">
            <div>
              <span className="text-2xl sm:text-3xl font-sans font-extrabold text-white">5+</span>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 uppercase tracking-wide">Years Experience</p>
            </div>
            <div className="p-3 rounded-xl bg-violet-600/10 text-violet-400">
              <Briefcase size={22} />
            </div>
          </div>

          <div className="bg-[#0a0718] border border-[#1d1645]/80 p-6 rounded-2xl flex items-center justify-between shadow-lg">
            <div>
              <span className="text-2xl sm:text-3xl font-sans font-extrabold text-white">86+</span>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 uppercase tracking-wide">Happy Clients</p>
            </div>
            <div className="p-3 rounded-xl bg-violet-600/10 text-violet-400">
              <Users size={22} />
            </div>
          </div>

          <div className="bg-[#0a0718] border border-[#1d1645]/80 p-6 rounded-2xl flex items-center justify-between shadow-lg">
            <div>
              <span className="text-2xl sm:text-3xl font-sans font-extrabold text-white">72+</span>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 uppercase tracking-wide">Projects Completed</p>
            </div>
            <div className="p-3 rounded-xl bg-violet-600/10 text-violet-400">
              <Sparkles size={22} />
            </div>
          </div>

          <div className="bg-[#0a0718] border border-[#1d1645]/80 p-6 rounded-2xl flex items-center justify-between shadow-lg">
            <div>
              <span className="text-2xl sm:text-3xl font-sans font-extrabold text-white">24+</span>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 uppercase tracking-wide">Countries Worldwide</p>
            </div>
            <div className="p-3 rounded-xl bg-violet-600/10 text-violet-400">
              <Award size={22} />
            </div>
          </div>
        </div>

      </div>

      {/* Timeline Section: Work Experience */}
      <div id="about-timeline-section" className="bg-[#0a0718] border border-[#1d1645]/80 p-8 sm:p-10 rounded-3xl shadow-xl space-y-8">
        <h2 className="font-sans font-bold text-2xl text-white flex items-center gap-2">
          <Briefcase className="text-violet-400" />
          <span>Work Experience</span>
        </h2>

        {/* Detailed Timeline List */}
        <div className="relative border-l-2 border-[#1d1645] pl-6 ml-4 space-y-10">
          {experiencesData.map((exp, index) => (
            <div key={exp.id} id={`about-timeline-item-${exp.id}`} className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-10 top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-[#0a0718] border-2 border-violet-500 text-violet-400 shadow-[0_0_10px_rgba(124,58,237,0.3)]">
                <LucideIcon name={exp.icon || "Briefcase"} size={14} />
              </span>

              {/* Card Container */}
              <div className="bg-[#110e2f]/50 border border-[#211a4f]/50 p-6 rounded-2xl hover:border-violet-500/40 hover:bg-[#141038]/60 transition-all duration-300 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-sans font-bold text-base text-white">{exp.role}</h3>
                    <p className="text-violet-400 text-xs font-semibold">{exp.company}</p>
                  </div>
                  <span className="self-start sm:self-center px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-xs font-mono font-medium border border-violet-500/20">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills and Expertise Groups */}
      <div className="space-y-8">
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <h2 id="skills-grid-title" className="font-sans font-bold text-2xl text-white">Skills & Expertise</h2>
          <p className="text-gray-400 text-sm">
            Categorized overview of my core competencies, professional tools, and specialized design methods.
          </p>
        </div>

        {/* Group Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategoriesData.map((cat, index) => (
            <div
              key={index}
              id={`skills-group-${index}`}
              className="bg-[#0a0718] border border-[#1d1645]/80 p-6 rounded-2xl hover:border-violet-500/40 hover:bg-[#110d2d] transition-all duration-300 flex flex-col space-y-4 shadow-md"
            >
              {/* Header */}
              <div className="flex items-center space-x-3 pb-3 border-b border-[#1b1540]/60">
                <div className="w-10 h-10 rounded-lg bg-violet-600/15 text-violet-400 flex items-center justify-center shrink-0">
                  <LucideIcon name={cat.icon} size={20} />
                </div>
                <h3 className="font-sans font-bold text-base text-white">{cat.title}</h3>
              </div>

              {/* Flex list of skill tags */}
              <div className="flex flex-wrap gap-2 pt-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    id={`skill-tag-${index}-${sIdx}`}
                    className="px-2.5 py-1.5 rounded-lg bg-[#141031] border border-[#231b54]/60 text-gray-300 hover:text-white hover:border-violet-500/50 hover:bg-[#18133d] transition-all duration-200 text-xs font-medium font-sans cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
