import React from "react";
import { Check, ArrowRight, HelpCircle, PhoneCall, Play, Sparkles } from "lucide-react";
import { servicesData, packagesData } from "../data";
import LucideIcon from "./LucideIcon";

interface ServicesSectionProps {
  onNavigate: (page: string) => void;
}

export default function ServicesSection({ onNavigate }: ServicesSectionProps) {
  
  // Working process steps
  const processSteps = [
    {
      num: "01",
      title: "Discover & Research",
      desc: "Deep-dive stakeholder sessions, direct user research, competitor audits, and user persona mapping."
    },
    {
      num: "02",
      title: "Define & Ideate",
      desc: "Crafting structured user journeys, high-level sitemaps, information architecture, and core user flows."
    },
    {
      num: "03",
      title: "Design & Prototype",
      desc: "Transforming insights into pixel-perfect high-fidelity interface screens, robust design systems, and interactive motion prototypes."
    },
    {
      num: "04",
      title: "Validate & Handoff",
      desc: "Rigorous usability test validation, component specification definitions, and seamless developer workspace handoffs."
    }
  ];

  return (
    <div id="services-section-container" className="space-y-16 py-12">
      
      {/* Page Header */}
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <h1 id="services-page-title" className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Services I Offered
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          I partner with startups and product teams to design premium, accessible digital solutions that maximize user engagement.
        </p>
      </div>

      {/* Services Grid (8 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.id}
            id={`services-grid-card-${service.id}`}
            className="bg-[#0a0718] border border-[#1d1645]/80 p-6 rounded-2xl hover:border-violet-500/50 hover:bg-[#120d2f] transition-all duration-300 flex flex-col justify-between h-full group shadow-md"
          >
            <div className="space-y-4">
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <LucideIcon name={service.icon} size={22} />
              </div>

              <div className="space-y-2">
                <h3 className="font-sans font-bold text-base text-white group-hover:text-violet-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="pt-4 border-t border-[#1b1540]/60 mt-4 space-y-2 text-xs text-gray-300">
              {service.bulletPoints.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check size={12} className="text-violet-400 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Working Process Segment */}
      <div id="working-process-container" className="bg-[#0a0718] border border-[#1d1645]/80 p-8 sm:p-10 rounded-3xl shadow-xl space-y-8">
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <h2 className="font-sans font-bold text-2xl text-white">My Working Process</h2>
          <p className="text-gray-400 text-sm">
            My step-by-step approach ensures absolute transparency, agile iterations, and high-quality outcomes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              id={`process-step-item-${idx}`}
              className="p-5 rounded-xl bg-[#110e2f]/50 border border-[#211a4f]/50 hover:border-violet-500/30 hover:bg-[#141038]/60 transition-all duration-300 space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-3xl text-violet-500/40 group-hover:text-violet-500/80 transition-colors">
                  {step.num}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
              </div>
              <h3 className="font-sans font-bold text-sm text-white group-hover:text-violet-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Packages Area */}
      <div className="space-y-8">
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <h2 id="pricing-plans-title" className="font-sans font-bold text-2xl text-white">Pricing Plans</h2>
          <p className="text-gray-400 text-sm">
            Simple, honest pricing tiers designed to fit startups, product teams, and enterprise constraints.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg, idx) => {
            const isPopular = pkg.tag === "POPULAR";
            return (
              <div
                key={idx}
                id={`pricing-package-card-${idx}`}
                className={`rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  isPopular
                    ? "bg-[#0f0a2e] border-2 border-violet-500 shadow-[0_0_30px_rgba(124,58,237,0.25)] scale-102 lg:scale-105"
                    : "bg-[#0a0718] border border-[#1d1645]/80 shadow-md"
                }`}
              >
                {/* Popular Corner Tag */}
                {isPopular && (
                  <div className="absolute top-0 right-0">
                    <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[9px] font-bold px-4 py-1.5 rounded-bl-xl tracking-widest uppercase flex items-center gap-1">
                      <Sparkles size={10} />
                      POPULAR
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title and Price */}
                  <div className="space-y-1.5">
                    <h3 className="font-sans font-bold text-lg text-white">{pkg.title}</h3>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{pkg.subtitle}</p>
                    <div className="pt-2 flex items-baseline">
                      <span className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight">
                        {pkg.price}
                      </span>
                      {pkg.title.includes("Subscription") && <span className="text-gray-500 text-xs font-mono ml-1">/month</span>}
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed border-t border-[#1b1540]/60 pt-4">
                    {pkg.description}
                  </p>

                  {/* Feature Lists */}
                  <div className="space-y-3 pt-2">
                    <p className="text-gray-300 text-xs font-bold uppercase tracking-wider">Features Included:</p>
                    <div className="space-y-2.5 text-xs text-gray-300 font-medium">
                      {pkg.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <Check size={14} className="text-violet-400 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-8">
                  <button
                    id={`pricing-btn-${idx}`}
                    onClick={() => onNavigate("contact")}
                    className={`w-full py-3 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer ${
                      isPopular
                        ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg"
                        : "bg-[#141033] border border-[#231b54]/80 hover:bg-[#1a1542] text-gray-200"
                    }`}
                  >
                    <span>Get Started Now</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
