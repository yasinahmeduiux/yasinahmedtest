import React from "react";
import { Linkedin, Dribbble, Instagram, Github, ArrowRight } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer-container" className="bg-[#04030a] border-t border-[#161132]/60 pt-20 pb-8 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#161132]/40">
          
          {/* Column 1: Info */}
          <div id="footer-col-info" className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                Y
              </div>
              <span className="font-sans font-bold text-lg text-white">
                Yasin <span className="text-violet-400">Ahmed</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Crafting exceptional user experiences through innovative design solutions. Empowering the next generation of designers through education and mentorship.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-3.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-linkedin"
                className="w-10 h-10 rounded-full bg-[#110e29]/80 border border-[#231d4e]/40 flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500 hover:shadow-[0_0_12px_rgba(124,58,237,0.3)] transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-dribbble"
                className="w-10 h-10 rounded-full bg-[#110e29]/80 border border-[#231d4e]/40 flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500 hover:shadow-[0_0_12px_rgba(124,58,237,0.3)] transition-all duration-300"
              >
                <Dribbble size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-instagram"
                className="w-10 h-10 rounded-full bg-[#110e29]/80 border border-[#231d4e]/40 flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500 hover:shadow-[0_0_12px_rgba(124,58,237,0.3)] transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-github"
                className="w-10 h-10 rounded-full bg-[#110e29]/80 border border-[#231d4e]/40 flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500 hover:shadow-[0_0_12px_rgba(124,58,237,0.3)] transition-all duration-300"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div id="footer-col-quick" className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="hover:text-violet-400 hover:translate-x-1 transition-all inline-block">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="hover:text-violet-400 hover:translate-x-1 transition-all inline-block">About</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="hover:text-violet-400 hover:translate-x-1 transition-all inline-block">Services</a>
              </li>
              <li>
                <a href="#works" onClick={(e) => handleNavClick(e, "works")} className="hover:text-violet-400 hover:translate-x-1 transition-all inline-block">Works</a>
              </li>
              <li>
                <a href="#course" onClick={(e) => handleNavClick(e, "course")} className="hover:text-violet-400 hover:translate-x-1 transition-all inline-block">Course</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="hover:text-violet-400 hover:translate-x-1 transition-all inline-block">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div id="footer-col-support" className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Support</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="hover:text-violet-400 hover:translate-x-1 transition-all inline-block">Contact Us</a>
              </li>
              <li>
                <a href="#terms" onClick={(e) => handleNavClick(e, "contact")} className="hover:text-violet-400 hover:translate-x-1 transition-all inline-block font-mono text-xs">Terms & Conditions</a>
              </li>
              <li>
                <a href="#privacy" onClick={(e) => handleNavClick(e, "contact")} className="hover:text-violet-400 hover:translate-x-1 transition-all inline-block font-mono text-xs">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div id="footer-col-resources" className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Resources</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="hover:text-violet-400 hover:translate-x-1 transition-all inline-block">About</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="hover:text-violet-400 hover:translate-x-1 transition-all inline-block">Services</a>
              </li>
              <li>
                <a href="#course" onClick={(e) => handleNavClick(e, "course")} className="hover:text-violet-400 hover:translate-x-1 transition-all inline-block">Course Curriculum</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div id="footer-bottom" className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-gray-500">
          <p>© {currentYear} Yasin Ahmed. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0 font-mono">
            <a href="#privacy" onClick={(e) => handleNavClick(e, "contact")} className="hover:text-violet-400">Privacy Policy</a>
            <a href="#terms" onClick={(e) => handleNavClick(e, "contact")} className="hover:text-violet-400">Terms of Service</a>
            <a href="#cookies" onClick={(e) => handleNavClick(e, "contact")} className="hover:text-violet-400">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
