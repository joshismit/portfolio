"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "15+" },
  ];

  return (
    <section id="about-section" className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className={`space-y-6 ${mounted ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                About Me
              </h2>
              <div className="h-1 w-20 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p className="text-base sm:text-lg">
                I'm a <span className="font-semibold text-slate-900 dark:text-white">Frontend Developer</span> with 2 years of professional experience, passionate about creating 
                beautiful and functional web applications. My journey in web development started with a strong 
                foundation in JavaScript and has evolved to include modern frameworks like React.js and Next.js.
              </p>
              <p className="text-base sm:text-lg">
                At <span className="font-semibold text-slate-900 dark:text-white">Bytesved Technology LLP</span>, I've had the opportunity to work on various projects, from e-commerce 
                platforms to streaming services. I specialize in building responsive, accessible, and performant 
                user interfaces that provide exceptional user experiences.
              </p>
              <p className="text-base sm:text-lg">
                When I'm not coding, I enjoy solving problems on LeetCode, contributing to open-source projects, 
                and staying updated with the latest web technologies. I believe in writing clean, maintainable 
                code and following best practices to ensure scalability and performance.
              </p>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className={`grid grid-cols-3 gap-4 sm:gap-6 ${mounted ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
