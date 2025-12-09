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
      period: "Sept 2023 - Sept 2025",
      responsibilities: [
        "Developed and maintained dynamic, responsive web applications using React.js and Tailwind CSS",
        "Built reusable and modular components to ensure clean, scalable, and maintainable code architecture",
        "Optimized state management using React Hooks to improve performance and reduce re-renders",
        "Designed modern, user-friendly interfaces focusing on performance, accessibility, and responsiveness",
        "Collaborated with backend developers to streamline data flow and enhance user experience",
        "Conducted code reviews, debugging, and performance tuning to ensure high-quality deliverables",
        "Utilized tools like Git, GitHub, and Postman for version control and testing workflows",
        "Worked extensively with TypeScript to improve code reliability and maintainability",
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
          {/* Enhanced Timeline line */}
          <div className="absolute left-4 sm:left-8 md:left-10 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-400 via-purple-500 to-blue-400 dark:from-blue-500 dark:via-purple-400 dark:to-blue-500 hidden sm:block opacity-60"></div>

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-12 sm:pl-16 md:pl-20 ${mounted ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Enhanced Timeline dot with glow effect */}
                <div className="absolute left-2 sm:left-4 md:left-6 top-3 z-20">
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 w-6 h-6 sm:w-7 sm:h-7 bg-blue-500/30 dark:bg-blue-400/30 rounded-full animate-pulse"></div>
                    {/* Middle ring */}
                    <div className="absolute inset-0.5 sm:inset-1 w-5 h-5 sm:w-5 sm:h-5 bg-blue-500/50 dark:bg-blue-400/50 rounded-full"></div>
                    {/* Inner dot */}
                    <div className="relative w-6 h-6 sm:w-7 sm:h-7 bg-white dark:bg-slate-900 rounded-full border-2 border-blue-600 dark:border-blue-400 shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Content card */}
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border-2 border-blue-200/60 dark:border-blue-800/60 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 to-purple-50/0 dark:from-blue-950/0 dark:to-purple-950/0 group-hover:from-blue-50/30 group-hover:to-purple-50/20 dark:group-hover:from-blue-950/20 dark:group-hover:to-purple-950/10 transition-all duration-500 rounded-2xl pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span className="truncate">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-200 text-xs sm:text-sm md:text-base">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 dark:text-slate-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="break-all sm:break-normal">{exp.location}</span>
                        </div>
                      </div>
                      <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100/90 dark:bg-blue-900/50 backdrop-blur-sm text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-semibold border-2 border-blue-200/60 dark:border-blue-800/60 shadow-md hover:shadow-lg transition-all duration-300 self-start sm:self-auto">
                        {exp.period}
                      </div>
                    </div>
                    <ul className="space-y-3 sm:space-y-3.5">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed group/item"
                        >
                          <span className="mt-1.5 shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full shadow-sm group-hover/item:scale-125 transition-transform duration-300"></span>
                          <span className="flex-1">{resp}</span>
                        </li>
                      ))}
                    </ul>
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
