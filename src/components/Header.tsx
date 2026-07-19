import React, { useState } from "react";
import { Menu, X, MessageSquare, Inbox } from "lucide-react";

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", value: "home" },
    { label: "About", value: "about" },
    { label: "Services", value: "services" },
    { label: "Works", value: "works" },
    { label: "Course", value: "course" },
    { label: "Contact", value: "contact" },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <header id="header-container" className="sticky top-0 z-50 bg-[#07050f]/80 backdrop-blur-md border-b border-[#1b153b]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            id="header-logo"
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(124,58,237,0.5)]">
              Y
            </div>
            <span className="font-sans font-bold text-xl tracking-tight text-white">
              Yasin <span className="text-violet-400">Ahmed</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1 bg-[#100b26]/60 p-1.5 rounded-full border border-[#211a4a]/80">
            {navItems.map((item) => {
              const isActive = activePage === item.value;
              return (
                <button
                  key={item.value}
                  id={`nav-btn-${item.value}`}
                  onClick={() => handleNavClick(item.value)}
                  className={`px-5 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-violet-600 text-white shadow-[0_0_12px_rgba(124,58,237,0.4)]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Let's Talk CTA button */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Quick Link to Inbox Messages for Testing */}
            <button
              id="nav-btn-inbox"
              onClick={() => handleNavClick("inbox")}
              title="View Contact Inquiries"
              className={`p-2.5 rounded-full border transition-all duration-300 ${
                activePage === "inbox"
                  ? "bg-violet-500/20 border-violet-500/50 text-violet-400"
                  : "border-[#211a4a]/80 text-gray-400 hover:text-white hover:bg-[#100b26]"
              }`}
            >
              <Inbox size={18} />
            </button>

            <button
              id="header-cta-talk"
              onClick={() => handleNavClick("contact")}
              className="flex items-center space-x-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-sans text-sm font-medium hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] cursor-pointer"
            >
              <MessageSquare size={16} />
              <span>Let's talk</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              id="mobile-inbox-shortcut"
              onClick={() => handleNavClick("inbox")}
              className="p-2 rounded-full text-gray-400 hover:text-white"
            >
              <Inbox size={20} />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div id="mobile-nav-menu" className="md:hidden bg-[#0a0717] border-b border-[#1b153b]/80 px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top duration-300">
          {navItems.map((item) => {
            const isActive = activePage === item.value;
            return (
              <button
                key={item.value}
                id={`mobile-nav-btn-${item.value}`}
                onClick={() => handleNavClick(item.value)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-sans font-medium transition-all ${
                  isActive
                    ? "bg-violet-600/20 text-violet-400 border border-violet-500/30"
                    : "text-gray-400 hover:text-white hover:bg-[#100b26]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-[#1b153b]/40 flex flex-col space-y-2">
            <button
              id="mobile-nav-btn-inbox"
              onClick={() => handleNavClick("inbox")}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-sans font-medium ${
                activePage === "inbox"
                  ? "bg-violet-600/20 text-violet-400 border border-violet-500/30"
                  : "text-gray-400 hover:text-white hover:bg-[#100b26]"
              }`}
            >
              <Inbox size={18} />
              <span>Inquiries Box</span>
            </button>
            <button
              id="mobile-nav-cta-talk"
              onClick={() => handleNavClick("contact")}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-sans font-medium text-center"
            >
              <MessageSquare size={18} />
              <span>Let's talk</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
