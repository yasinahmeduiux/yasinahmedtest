import React, { useState } from "react";
import { Mail, Calendar, Copy, Check, ArrowRight, ExternalLink, Briefcase, Award, GraduationCap, LayoutGrid, Layers, Smartphone, Code } from "lucide-react";
import { projectsData, servicesData, experiencesData } from "../data";
import LucideIcon from "./LucideIcon";

interface HomeSectionProps {
  onNavigate: (page: string) => void;
}

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  const [copied, setCopied] = useState(false);
  const emailAddress = "yasinahmeduiux@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Extract subset of data for overview preview
  const featuredProjects = projectsData.slice(0, 4);
  const featuredExperience = experiencesData.slice(0, 3);
  const featuredServices = servicesData.slice(0, 4);

  // Skill Expert Area (24 items with unique colors/icons as requested by layout)
  const expertSkills = [
    { name: "Figma", icon: "Sparkles", color: "text-orange-400 bg-orange-400/5" },
    { name: "Notion", icon: "FileText", color: "text-slate-200 bg-slate-200/5" },
    { name: "Miro", icon: "Grid", color: "text-yellow-400 bg-yellow-400/5" },
    { name: "Framer", icon: "Zap", color: "text-pink-400 bg-pink-400/5" },
    { name: "Webflow", icon: "Globe", color: "text-blue-400 bg-blue-400/5" },
    { name: "Zeplin", icon: "Layers", color: "text-amber-500 bg-amber-500/5" },
    { name: "HTML", icon: "Code", color: "text-orange-500 bg-orange-500/5" },
    { name: "CSS", icon: "Codepen", color: "text-blue-500 bg-blue-500/5" },
    { name: "JavaScript", icon: "Terminal", color: "text-yellow-300 bg-yellow-300/5" },
    { name: "jQuery", icon: "SquareDot", color: "text-indigo-400 bg-indigo-400/5" },
    { name: "Raw PHP", icon: "Cpu", color: "text-indigo-300 bg-indigo-300/5" },
    { name: "Flutter", icon: "Smartphone", color: "text-cyan-400 bg-cyan-400/5" },
    { name: "Dart", icon: "Play", color: "text-blue-300 bg-blue-300/5" },
    { name: "Java", icon: "Coffee", color: "text-red-400 bg-red-400/5" },
    { name: "Adobe XD", icon: "Palette", color: "text-pink-500 bg-pink-500/5" },
    { name: "Photoshop", icon: "Image", color: "text-sky-500 bg-sky-500/5" },
    { name: "Illustrator", icon: "Feather", color: "text-orange-600 bg-orange-600/5" },
    { name: "User Research", icon: "Search", color: "text-emerald-400 bg-emerald-400/5" },
    { name: "Wireframing", icon: "Layout", color: "text-purple-400 bg-purple-400/5" },
    { name: "Prototyping", icon: "Box", color: "text-rose-400 bg-rose-400/5" },
    { name: "Design System", icon: "Layers", color: "text-indigo-400 bg-indigo-400/5" },
    { name: "Product Strategy", icon: "Activity", color: "text-teal-400 bg-teal-400/5" },
    { name: "Usability Testing", icon: "CheckSquare", color: "text-green-400 bg-green-400/5" },
    { name: "Interaction Design", icon: "Fingerprint", color: "text-violet-400 bg-violet-400/5" }
  ];

  return (
    <div id="home-section-container" className="space-y-16 py-12">
      
      {/* 3-Column Profile, Experience, & Projects Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Personal Profile Card (lg:col-span-4) */}
        <div id="profile-card-container" className="lg:col-span-4 bg-[#0a0718] border border-[#1d1645]/80 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Avatar image container */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 blur-sm opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <svg viewBox="0 0 200 200" className="relative w-36 h-36 rounded-full border-4 border-[#07050f]" id="profile-avatar-img">
                <defs>
                  <clipPath id="avatar-clip">
                    <circle cx="100" cy="100" r="100" />
                  </clipPath>
                  <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C3BDF2" />
                    <stop offset="100%" stopColor="#D9D5F7" />
                  </linearGradient>
                  <linearGradient id="skin-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#E2A67E" />
                    <stop offset="100%" stopColor="#C88E65" />
                  </linearGradient>
                  <linearGradient id="maroon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#80193E" />
                    <stop offset="100%" stopColor="#96244F" />
                  </linearGradient>
                  <linearGradient id="blazer-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#221F33" />
                    <stop offset="100%" stopColor="#151322" />
                  </linearGradient>
                  <linearGradient id="hair-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2E2C3D" />
                    <stop offset="100%" stopColor="#12111A" />
                  </linearGradient>
                </defs>

                <g clipPath="url(#avatar-clip)">
                  <rect width="200" height="200" fill="url(#bg-grad)" />

                  {/* Topographic Contour Lines matching the uploaded image */}
                  <path d="M 0,60 Q 50,30 100,70 T 200,50" fill="none" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.35" />
                  <path d="M -10,100 Q 60,65 120,110 T 210,90" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.25" />
                  <path d="M 0,140 Q 40,110 90,150 T 200,120" fill="none" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.3" />
                  <path d="M 0,170 Q 70,145 130,180 T 200,155" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.25" />
                  <path d="M 50,10 Q 110,35 150,5 T 210,15" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.2" />

                  {/* White Sticker Outline Effect around Character */}
                  <g transform="scale(1.05) translate(-5, -3)">
                    <path d="M 45,210 L 45,160 Q 45,140 60,135 L 75,130 Q 75,100 78,85 Q 65,85 62,65 Q 60,55 65,48 Q 63,30 75,22 Q 95,10 120,22 Q 135,22 138,40 Q 140,55 138,65 Q 135,85 122,85 Q 125,100 125,130 L 140,135 Q 155,140 155,160 L 155,210 Z" fill="#FFFFFF" opacity="0.95" />
                  </g>

                  {/* Blazer */}
                  <path d="M 35,210 L 35,165 Q 35,145 55,140 L 75,135 L 125,135 L 145,140 Q 165,145 165,165 L 165,210 Z" fill="url(#blazer-grad)" />
                  <path d="M 55,140 L 80,180 L 80,210 L 50,210 Z" fill="#151322" />
                  <path d="M 145,140 L 120,180 L 120,210 L 150,210 Z" fill="#151322" />

                  {/* Maroon Shirt */}
                  <path d="M 75,135 L 100,165 L 125,135 L 115,210 L 85,210 Z" fill="url(#maroon-grad)" />
                  <path d="M 75,135 L 90,150 L 85,170 L 70,140 Z" fill="#6A1031" />
                  <path d="M 125,135 L 110,150 L 115,170 L 130,140 Z" fill="#6A1031" />
                  <line x1="100" y1="165" x2="100" y2="210" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" strokeDasharray="1,6" />

                  {/* Neck */}
                  <path d="M 82,100 L 82,145 L 118,145 L 118,100 Z" fill="url(#skin-grad)" />
                  <path d="M 82,100 Q 100,115 118,100 L 118,112 Q 100,125 82,112 Z" fill="#B27953" opacity="0.4" />

                  {/* Ears */}
                  <ellipse cx="72" cy="78" rx="8" ry="12" fill="url(#skin-grad)" />
                  <ellipse cx="128" cy="78" rx="8" ry="12" fill="url(#skin-grad)" />
                  <path d="M 72,74 Q 75,78 72,82" fill="none" stroke="#B27953" strokeWidth="1.5" />
                  <path d="M 128,74 Q 125,78 128,82" fill="none" stroke="#B27953" strokeWidth="1.5" />

                  {/* Face Shape */}
                  <path d="M 75,65 Q 75,110 100,118 Q 125,110 125,65 L 125,55 L 75,55 Z" fill="url(#skin-grad)" />

                  {/* Hair */}
                  <path d="M 73,58 C 70,45 75,30 85,24 C 95,18 105,18 115,24 C 125,30 130,45 127,58 L 127,65 L 123,65 C 124,55 120,48 115,44 C 110,40 100,38 90,42 C 82,46 77,53 77,65 L 73,65 Z" fill="url(#hair-grad)" />
                  <path d="M 73,50 Q 70,30 85,20 Q 105,10 125,20 Q 130,30 127,50 Q 120,18 100,18 Q 80,18 73,50 Z" fill="url(#hair-grad)" />
                  <path d="M 73,42 Q 85,20 110,18 Q 128,20 128,32 Q 120,24 105,24 Q 85,28 73,42 Z" fill="#3D3A52" />

                  {/* Eyebrows */}
                  <path d="M 80,56 Q 88,51 94,55" fill="none" stroke="#12111A" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 120,56 Q 112,51 106,55" fill="none" stroke="#12111A" strokeWidth="3" strokeLinecap="round" />

                  {/* Eyes */}
                  <path d="M 82,64 Q 88,60 94,64" fill="none" stroke="#12111A" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="88" cy="65.5" r="3" fill="#3D291D" />
                  <circle cx="88" cy="65.5" r="1.2" fill="#12111A" />
                  <circle cx="89" cy="64.5" r="0.6" fill="#FFFFFF" />

                  <path d="M 118,64 Q 112,60 106,64" fill="none" stroke="#12111A" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="112" cy="65.5" r="3" fill="#3D291D" />
                  <circle cx="112" cy="65.5" r="1.2" fill="#12111A" />
                  <circle cx="113" cy="64.5" r="0.6" fill="#FFFFFF" />

                  {/* Nose */}
                  <path d="M 97,63 L 97,78 Q 97,82 100,82 Q 103,82 103,78" fill="none" stroke="#B27953" strokeWidth="1.8" strokeLinecap="round" />

                  {/* Beard, Mustache, & Sideburns */}
                  <path d="M 74,68 L 75,85 Q 77,108 100,118 Q 123,108 125,85 L 126,68 L 122,68 L 121,85 Q 119,103 100,113 Q 81,103 79,85 L 78,68 Z" fill="#1A1826" />
                  <path d="M 90,110 Q 100,118 110,110 Q 100,113 90,110 Z" fill="#12111A" />
                  <path d="M 86,85 Q 100,79 114,85 Q 107,85 100,88 Q 93,85 86,85 Z" fill="#12111A" />
                  <path d="M 97,94 L 103,94 L 100,100 Z" fill="#12111A" />

                  {/* Mouth / Smile */}
                  <path d="M 88,89 Q 100,105 112,89 Z" fill="#5E1428" />
                  <path d="M 90,90 Q 100,94 110,90 L 108,93 Q 100,97 92,93 Z" fill="#FFFFFF" />
                  <path d="M 88,89 Q 100,106 112,89" fill="none" stroke="#A36B5E" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              </svg>
              <div className="absolute bottom-1 right-2 w-5.5 h-5.5 rounded-full bg-green-500 border-2 border-[#0a0718] flex items-center justify-center" title="Active & Available for Projects">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-2">
              <h1 id="profile-name-title" className="font-sans font-extrabold text-3xl tracking-tight text-white flex items-center justify-center gap-2">
                Yasin Ahmed <span className="animate-wiggle inline-block">👋</span>
              </h1>
              <p className="text-violet-400 font-sans text-sm font-semibold tracking-wider uppercase">Lead UX/UI & Product Designer</p>
            </div>

            {/* Self Description */}
            <p className="text-gray-400 text-sm leading-relaxed text-center">
              Creative and results-driven Lead User Experience Designer with <strong className="text-white font-medium">5 years of experience</strong>. Specializing in creating intuitive digital systems, advanced design tokens, and scalable mobile & web products.
            </p>

            {/* Quick Details List */}
            <div className="w-full text-left bg-[#100c2a]/50 p-4 rounded-xl border border-[#1b1540]/60 space-y-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-md bg-violet-500/10 text-violet-400">
                  <Briefcase size={14} />
                </div>
                <span>Project Manager at <strong>Bongo Source</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-md bg-violet-500/10 text-violet-400">
                  <GraduationCap size={14} />
                </div>
                <span>UI/UX Mentor & Course Instructor</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-md bg-violet-500/10 text-violet-400">
                  <Award size={14} />
                </div>
                <span>Certified Google UX Designer & Information Architect</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex flex-col gap-3 pt-2">
              <button
                id="btn-book-call"
                onClick={() => onNavigate("contact")}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-sans text-sm font-semibold transition-all duration-300 shadow-[0_4px_12px_rgba(124,58,237,0.3)] cursor-pointer"
              >
                <Calendar size={16} />
                <span>Book A Call</span>
              </button>
              
              <button
                id="btn-copy-email"
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-[#141033] border border-[#231b54]/80 hover:bg-[#1a1542] text-gray-300 hover:text-white font-sans text-sm font-semibold transition-all duration-300 cursor-pointer"
              >
                {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                <span>{copied ? "Copied Email!" : "Copy Email"}</span>
              </button>
            </div>
            
            {/* Display Email Address */}
            <span className="font-mono text-[11px] text-gray-500 hover:text-violet-400 transition-colors select-all">
              {emailAddress}
            </span>
          </div>
        </div>

        {/* Center Column: Experience Timeline Summary (lg:col-span-5) */}
        <div id="home-exp-container" className="lg:col-span-5 bg-[#0a0718] border border-[#1d1645]/80 p-8 rounded-3xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-sans font-bold text-xl text-white">Work Experience</h2>
            <button
              id="btn-view-about-exp"
              onClick={() => onNavigate("about")}
              className="text-violet-400 hover:text-violet-300 text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <span>See All</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="space-y-4">
            {featuredExperience.map((exp) => (
              <div
                key={exp.id}
                id={`home-exp-item-${exp.id}`}
                className="p-4 rounded-xl bg-[#110d2d]/60 border border-[#1f1847]/40 hover:border-violet-500/40 hover:bg-[#151036]/50 transition-all duration-300 space-y-2 group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-sans font-semibold text-sm text-white group-hover:text-violet-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-gray-400 text-xs">{exp.company}</p>
                  </div>
                  <span className="text-[10px] font-mono text-violet-400 bg-violet-400/5 px-2 py-1 rounded border border-violet-500/10">
                    {exp.period.split("|")[0].trim()}
                  </span>
                </div>
                <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-2">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Featured Projects Vertical Stack (lg:col-span-3) */}
        <div id="home-projects-preview-container" className="lg:col-span-3 bg-[#0a0718] border border-[#1d1645]/80 p-8 rounded-3xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-sans font-bold text-xl text-white">Recent Projects</h2>
            <button
              id="btn-view-works-preview"
              onClick={() => onNavigate("works")}
              className="text-violet-400 hover:text-violet-300 text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <span>All Works</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="space-y-4">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                id={`home-proj-item-${project.id}`}
                onClick={() => onNavigate("works")}
                className="group cursor-pointer rounded-xl overflow-hidden bg-[#110d2d]/60 border border-[#1f1847]/40 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="h-24 overflow-hidden relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0718] to-transparent"></div>
                  <span className="absolute bottom-1.5 left-2 px-1.5 py-0.5 rounded bg-violet-600 text-[9px] font-mono text-white">
                    {project.category}
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="font-sans font-medium text-xs text-white group-hover:text-violet-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-[10px] line-clamp-1">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Row: My Expert Area (Bento Core Block) */}
      <div id="expert-area-container" className="bg-[#0a0718] border border-[#1d1645]/80 p-8 rounded-3xl shadow-2xl space-y-8">
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <h2 className="font-sans font-extrabold text-2xl text-white">My Expert Area</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            A comprehensive overview of tools, frameworks, and methodologies that I master to drive human-centered design value.
          </p>
        </div>

        {/* 24 Skill Pill Tags Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {expertSkills.map((skill, index) => (
            <div
              key={index}
              id={`expert-skill-pill-${index}`}
              className="flex items-center space-x-2.5 p-3.5 rounded-xl bg-[#110e2f]/80 border border-[#211a4e]/60 hover:border-violet-500/50 hover:bg-[#16123b] transition-all duration-300 shadow-sm hover:shadow-[0_4px_12px_rgba(124,58,237,0.15)] group cursor-default"
            >
              <div className={`p-2 rounded-lg ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                <LucideIcon name={skill.icon} size={15} />
              </div>
              <span className="font-sans font-medium text-xs text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row: Quick Stats Counters Banner */}
      <div id="quick-stats-row" className="bg-gradient-to-r from-violet-900/40 via-indigo-950/40 to-violet-900/40 border border-violet-500/20 p-8 rounded-3xl shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-violet-500/20">
          <div id="stat-years" className="pt-4 md:pt-0">
            <h3 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">
              5+
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 uppercase tracking-wider font-semibold">Years Experience</p>
          </div>
          <div id="stat-clients" className="pt-4 md:pt-0">
            <h3 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">
              86+
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 uppercase tracking-wider font-semibold">Happy Clients</p>
          </div>
          <div id="stat-projects" className="pt-4 md:pt-0">
            <h3 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">
              72+
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 uppercase tracking-wider font-semibold">Projects Completed</p>
          </div>
          <div id="stat-countries" className="pt-4 md:pt-0">
            <h3 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">
              24+
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 uppercase tracking-wider font-semibold">Countries Worldwide</p>
          </div>
        </div>
      </div>

      {/* Section: Services Preview Grid */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1.5 text-center md:text-left">
            <h2 className="font-sans font-extrabold text-2xl text-white">Services I Offered</h2>
            <p className="text-gray-400 text-sm max-w-xl">
              I partner with product teams to design premium, accessible digital systems that meet clear strategic objectives.
            </p>
          </div>
          <button
            id="btn-view-services-all"
            onClick={() => onNavigate("services")}
            className="px-6 py-2.5 rounded-full bg-[#110d2d] border border-[#211a4e]/80 text-gray-300 hover:text-white hover:border-violet-500 transition-all flex items-center space-x-2 cursor-pointer text-sm font-medium"
          >
            <span>See Packages</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* 2x2 Services Grid preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              id={`home-service-item-${service.id}`}
              className="bg-[#0a0718] border border-[#1d1645]/80 p-6 rounded-2xl hover:border-violet-500/50 hover:bg-[#120d2f] transition-all duration-300 flex flex-col md:flex-row gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0">
                <LucideIcon name={service.icon} size={22} />
              </div>
              <div className="space-y-3">
                <h3 className="font-sans font-bold text-lg text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                {/* Check lists */}
                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-gray-300">
                  {service.bulletPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Banner: Let's Work Together */}
      <div 
        id="available-for-hire-banner"
        onClick={() => onNavigate("contact")}
        className="relative overflow-hidden p-10 md:p-14 rounded-3xl bg-gradient-to-r from-violet-900 via-indigo-900 to-indigo-950 text-white shadow-2xl text-center space-y-6 cursor-pointer group hover:shadow-[0_10px_30px_rgba(124,58,237,0.3)] transition-all duration-500 border border-violet-500/30"
      >
        {/* Abstract vector particles in backgrounds */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition duration-500"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-violet-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-violet-200 text-xs font-mono font-bold tracking-wider uppercase">
          Available For Hire 🚀
        </div>
        
        <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-white max-w-2xl mx-auto">
          Let's 👋 Work Together
        </h2>
        
        <p className="text-violet-100 text-sm sm:text-base leading-relaxed max-w-xl mx-auto opacity-90">
          Let's collaborate to bring your vision to life with stunning, user-centric interface designs and seamless human-computer interaction workflows.
        </p>

        <div className="pt-4">
          <button
            id="banner-cta-btn"
            className="px-8 py-3.5 rounded-full bg-white text-violet-900 font-sans font-bold hover:bg-violet-100 transition-colors inline-flex items-center space-x-2.5 shadow-lg shadow-black/20"
          >
            <span>Let's Talk</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

    </div>
  );
}
