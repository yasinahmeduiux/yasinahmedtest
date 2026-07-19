import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WorksSection from "./components/WorksSection";
import CourseSection from "./components/CourseSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  // Page route state synchronized with URL hash for perfect URL-hits & sharing
  const [activePage, setActivePage] = useState<string>("home");
  const [prepopulatedMessage, setPrepopulatedMessage] = useState<string>("");

  // Sync hash path on mount and on browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["home", "about", "services", "works", "course", "contact", "inbox"].includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage("home");
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Set hash path when navigating
  const navigateToPage = (page: string, message: string = "") => {
    setActivePage(page);
    setPrepopulatedMessage(message);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#070510] text-gray-100 flex flex-col justify-between relative overflow-x-hidden selection:bg-violet-600 selection:text-white">
      
      {/* Premium Neon Ambient Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-purple-900/15 to-indigo-900/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-violet-900/10 to-fuchsia-900/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[60%] left-[-100px] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Navigation Header */}
      <Header activePage={activePage} onNavigate={(page) => navigateToPage(page)} />

      {/* Main Sections Body */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Render active page with micro-animations */}
        <div className="animate-in fade-in slide-in-from-bottom duration-500">
          {activePage === "home" && <HomeSection onNavigate={navigateToPage} />}
          {activePage === "about" && <AboutSection />}
          {activePage === "services" && <ServicesSection onNavigate={navigateToPage} />}
          {activePage === "works" && <WorksSection />}
          {activePage === "course" && <CourseSection onNavigate={navigateToPage} />}
          {activePage === "contact" && (
            <ContactSection showInboxOnly={false} prepopulatedMessage={prepopulatedMessage} />
          )}
          {activePage === "inbox" && <ContactSection showInboxOnly={true} />}
        </div>

      </main>

      {/* Dark Styled Footer */}
      <Footer onNavigate={(page) => navigateToPage(page)} />

    </div>
  );
}
