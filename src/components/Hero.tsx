"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Left Column - Content */}
          <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
                <span className="text-slate-600 dark:text-white">Hi, I'm</span>
                <br />
                <span className="relative inline-block">
                  <span className="bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
                    Smit Joshi
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-400/20 dark:bg-blue-500/20 -z-10 transform -skew-x-12 rounded"></span>
                </span>
              </h1>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 dark:text-slate-100 animate-fade-in-up`} style={{ animationDelay: '0.3s' }}>
                Frontend Developer
              </h2>
              <p className={`text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-200 max-w-2xl leading-relaxed animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
                A dedicated problem-solver who thrives on learning and building. Mainly working in the JavaScript ecosystem, 
                I specialize in React.js and Next.js, creating modern, responsive web applications with clean code architecture.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-3 sm:gap-4 pt-4 animate-fade-in-up`} style={{ animationDelay: '0.5s' }}>
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-lg sm:rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-linear-to-r from-blue-700 to-purple-600 dark:from-blue-600 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </button>
              <a
                href="https://drive.google.com/file/d/1-mSsH5f7KJ0IkfnJ85mVtAGv9KWj5Y8Z/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 dark:bg-purple-500 text-white rounded-lg sm:rounded-xl hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-300 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-[-2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
                <span className="absolute inset-0 bg-linear-to-r from-purple-700 to-pink-600 dark:from-purple-600 dark:to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-900 dark:text-white border-2 border-blue-300/50 dark:border-blue-700/50 rounded-lg sm:rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 text-sm sm:text-base font-semibold hover:scale-105 shadow-md"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Column - Social Links and Location */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end justify-center space-y-6 sm:space-y-8">
            {/* Stats Cards */}
            <div className={`grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none lg:w-auto animate-fade-in-up`} style={{ animationDelay: '0.3s' }}>
              {[
                { value: "2+", label: "Years", color: "from-blue-500 to-cyan-500" },
                { value: "10+", label: "Projects", color: "from-purple-500 to-pink-500" },
                { value: "15+", label: "Techs", color: "from-green-500 to-emerald-500" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
                >
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links and Location */}
            <div className={`w-full lg:w-auto space-y-6 animate-fade-in-up`} style={{ animationDelay: '0.5s' }}>
              {/* Social Links */}
              <div className="flex flex-col gap-4 w-full lg:w-auto">
                <div className="flex gap-3 sm:gap-4 justify-center lg:justify-end">
                  {[
                    { href: "https://www.linkedin.com/in/smit--joshi/", label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                    { href: "https://github.com/joshismit", label: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                    { href: "https://leetcode.com/u/smiit/", label: "LeetCode", icon: "M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662L2.571 15.161c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.082-4.099c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.097 2.093 5.122-5.117c.467-.469 1.124-.695 1.837-.695s1.357.196 1.824.662l3.217 3.192c.467.467.697 1.111.697 1.823s-.23 1.357-.697 1.824l-5.127 5.143zm-1.387-1.361l4.134-4.134c.467-.467.702-1.15.702-1.863s-.235-1.357-.702-1.824l-3.217-3.192c-.467-.467-1.111-.702-1.824-.702s-1.357.235-1.823.702l-5.122 5.117-2.097-2.093c-.467-.467-1.111-.702-1.824-.702s-1.357.235-1.823.702L3.8 10.719c-.467.467-.702 1.15-.702 1.863s.235 1.357.702 1.824l7.188 6.927c.467.467 1.111.702 1.824.702s1.357-.235 1.824-.702l2.697-2.607z" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-200 border border-blue-200/50 dark:border-blue-800/50 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:rotate-3 shadow-md"
                      aria-label={social.label}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center lg:justify-end gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-200">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Sanand, Ahmedabad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
