"use client";

import { useEffect, useState } from "react";

export default function Experience() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const experiences = [
    {
      company: "Bytesved Technology LLP",
      location: "Gandhinagar, GJ",
      position: "Frontend Developer",
      period: "Sept 2023 - Present",
      isCurrent: true,
      category: "Current",
      responsibilities: [
        "Started as an intern and grew into a React.js Developer, working on real client and in-house web applications",
        "Developed modern, responsive UIs using React.js, TypeScript, Tailwind CSS, and reusable component patterns",
        "Worked closely with senior developers to implement clean architecture, component optimization, and smooth user experiences",
        "Integrated frontend with backend APIs and improved performance using React Hooks and best coding practices",
        "Gained hands-on experience with Node.js, Express.js, and MongoDB to understand full-stack application flow",
        "Conducted code reviews, debugging, and performance tuning to ensure high-quality deliverables",
        "Utilized tools like Git, GitHub, and Postman for version control and testing workflows",
      ],
    },
    {
      company: "E2M Solutions",
      location: "Ahmedabad,GJ",
      position: "SEO Analyst",
      period: "Oct 2022 - Aug 2023",
      isCurrent: false,
      category: "Previous",
      responsibilities: [
        "Technical SEO, On-page SEO, Content Optimization, SEO Audit",
      ],
    },
    {
      company: "Milestone Inc",
      location: "Ahmedabad,GJ",
      position: "SEO Analyst",
      period: "July 2022 - Oct 2022",
      isCurrent: false,
      category: "Previous",
      responsibilities: [
        "On-page SEO, Content Optimization, SEO Audit",
      ],
    },
    {
      company: "ADIT Digital Marketing Agency",
      location: "Ahmedabad,GJ",
      position: "SEO Executive",
      period: "Aug 2019 - Jun 2022",
      isCurrent: false,
      category: "Previous",
      responsibilities: [
        "Off-page SEO, Link Building, Blog posting, On-page SEO",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className={`mb-10 sm:mb-12 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-500 dark:text-white mb-3">
            Experience
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line - Hidden on mobile */}
          <div className="absolute left-4 sm:left-8 md:left-10 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-400 via-purple-500 to-green-400 dark:from-blue-500 dark:via-purple-400 dark:to-green-500 hidden sm:block opacity-60"></div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${mounted ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Mobile: Simplified design without timeline */}
                <div className="sm:hidden">
                  <div className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-xl border-2 ${exp.isCurrent ? 'border-green-200/60 dark:border-green-800/60' : 'border-blue-200/60 dark:border-blue-800/60'} transition-all duration-300 group relative overflow-hidden`}>
                    {/* Current badge - Mobile */}
                    {exp.isCurrent && (
                      <div className="absolute top-3 right-3 z-20">
                        <span className="px-2 py-0.5 bg-green-500/20 dark:bg-green-500/30 backdrop-blur-sm text-green-700 dark:text-green-400 rounded-full text-xs font-semibold border border-green-400/50 dark:border-green-600/50 flex items-center gap-1">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                          </span>
                          Current
                        </span>
                      </div>
                    )}
                    
                    {/* Header Section */}
                    <div className="mb-3 pr-16">
                      <div className={`inline-block px-2.5 py-1 ${exp.isCurrent ? 'bg-green-100/90 dark:bg-green-900/50 text-green-700 dark:text-green-300' : 'bg-blue-100/90 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'} rounded-lg text-xs font-semibold mb-2`}>
                        {exp.period}
                      </div>
                      <h3 className={`text-lg font-bold ${exp.isCurrent ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'} mb-1`}>
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300 mb-1">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="truncate">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    {/* Responsibilities - Mobile */}
                    <div className="space-y-2 pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <div
                          key={respIndex}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed"
                        >
                          <span className={`mt-1 shrink-0 w-1.5 h-1.5 ${exp.isCurrent ? 'bg-green-500' : 'bg-blue-500'} rounded-full`}></span>
                          <span className="flex-1">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop: Original timeline design */}
                <div className="hidden sm:block relative pl-12 md:pl-16 lg:pl-20">
                  {/* Enhanced Timeline dot with glow effect */}
                  <div className="absolute left-2 md:left-4 lg:left-6 top-3 z-20">
                    <div className="relative">
                      {/* Outer glow ring - different color for current */}
                      <div className={`absolute inset-0 w-6 md:w-7 ${exp.isCurrent ? 'bg-green-500/30 dark:bg-green-400/30' : 'bg-blue-500/30 dark:bg-blue-400/30'} rounded-full ${exp.isCurrent ? 'animate-pulse' : ''}`}></div>
                      {/* Middle ring */}
                      <div className={`absolute inset-0.5 md:inset-1 w-5 ${exp.isCurrent ? 'bg-green-500/50 dark:bg-green-400/50' : 'bg-blue-500/50 dark:bg-blue-400/50'} rounded-full`}></div>
                      {/* Inner dot */}
                      <div className={`relative w-6 md:w-7 bg-white dark:bg-slate-900 rounded-full border-2 ${exp.isCurrent ? 'border-green-600 dark:border-green-400' : 'border-blue-600 dark:border-blue-400'} shadow-lg flex items-center justify-center`}>
                        <div className={`w-2 md:w-2.5 ${exp.isCurrent ? 'bg-green-600 dark:bg-green-400' : 'bg-blue-600 dark:bg-blue-400'} rounded-full`}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Content card */}
                  <div className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 md:p-8 rounded-xl md:rounded-2xl border-2 ${exp.isCurrent ? 'border-green-200/60 dark:border-green-800/60 hover:border-green-500 dark:hover:border-green-500' : 'border-blue-200/60 dark:border-blue-800/60 hover:border-blue-500 dark:hover:border-blue-500'} transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden`}>
                    {/* Current badge */}
                    {exp.isCurrent && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="px-2.5 py-1 bg-green-500/20 dark:bg-green-500/30 backdrop-blur-sm text-green-700 dark:text-green-400 rounded-full text-xs font-semibold border border-green-400/50 dark:border-green-600/50 flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          Current
                        </span>
                      </div>
                    )}
                    
                    {/* Subtle gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-linear-to-br ${exp.isCurrent ? 'from-green-50/0 to-emerald-50/0 dark:from-green-950/0 dark:to-emerald-950/0 group-hover:from-green-50/30 group-hover:to-emerald-50/20 dark:group-hover:from-green-950/20 dark:group-hover:to-emerald-950/10' : 'from-blue-50/0 to-purple-50/0 dark:from-blue-950/0 dark:to-purple-950/0 group-hover:from-blue-50/30 group-hover:to-purple-50/20 dark:group-hover:from-blue-950/20 dark:group-hover:to-purple-950/10'} transition-all duration-500 rounded-xl md:rounded-2xl pointer-events-none`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-5 md:mb-6 pr-16 md:pr-0">
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold ${exp.isCurrent ? 'text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400' : 'text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'} transition-colors duration-300 mb-2 md:mb-3`}>
                            {exp.position}
                          </h3>
                          <div className={`flex items-center gap-2 ${exp.isCurrent ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'} font-semibold text-base md:text-lg mb-1 md:mb-2`}>
                            <svg className={`w-5 md:w-5 ${exp.isCurrent ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'} shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span className="truncate">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-200 text-sm md:text-base">
                            <svg className="w-4 md:w-4 text-slate-600 dark:text-slate-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="break-normal">{exp.location}</span>
                          </div>
                        </div>
                        <div className={`px-4 md:px-4 py-2 md:py-2 ${exp.isCurrent ? 'bg-green-100/90 dark:bg-green-900/50 border-green-200/60 dark:border-green-800/60 text-green-700 dark:text-green-300' : 'bg-blue-100/90 dark:bg-blue-900/50 border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-300'} backdrop-blur-sm rounded-full text-sm md:text-sm font-semibold border-2 shadow-md hover:shadow-lg transition-all duration-300 self-start md:self-auto whitespace-nowrap`}>
                          {exp.period}
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="flex items-start gap-3 text-sm md:text-base text-slate-700 dark:text-slate-200 leading-relaxed group/item"
                          >
                            <span className={`mt-1.5 shrink-0 w-2 h-2 ${exp.isCurrent ? 'bg-green-600 dark:bg-green-400' : 'bg-blue-600 dark:bg-blue-400'} rounded-full shadow-sm group-hover/item:scale-125 transition-transform duration-300`}></span>
                            <span className="flex-1">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
