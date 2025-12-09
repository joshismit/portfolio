"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.4; // 40vh
      
      setIsScrolled(scrollY > 50);
      
      // Calculate transparency progress (0 to 1) based on scroll to 40vh
      const progress = Math.min(scrollY / threshold, 1);
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity: starts at 0 (fully transparent), increases to 0.4 (40% opacity) at 40vh
  const backgroundOpacity = scrollProgress * 0.4;
  const backdropBlur = scrollProgress * 12; // 0 to 12px blur
  
  // Theme-aware background colors
  const backgroundColor = theme === "dark" 
    ? `rgba(2, 6, 23, ${backgroundOpacity})` // slate-950
    : `rgba(255, 255, 255, ${backgroundOpacity})`; // white

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: backgroundColor,
        backdropFilter: `blur(${backdropBlur}px)`,
        WebkitBackdropFilter: `blur(${backdropBlur}px)`,
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2">
          {/* Available for projects badge */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100/80 dark:bg-blue-900/40 backdrop-blur-sm text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium border border-blue-200/50 dark:border-blue-800/50">
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
              </span>
              <span className="hidden sm:inline">Available for projects</span>
              <span className="sm:hidden">Available</span>
            </div>
          </div>

          {/* Right side - Theme Toggle and Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 border border-blue-200/50 dark:border-blue-800/50 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-110"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute top-0 left-0 w-full h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 top-2.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`absolute top-2.5 left-0 w-full h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute top-5 left-0 w-full h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 top-2.5" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
