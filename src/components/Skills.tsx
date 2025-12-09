"use client";

import { useEffect, useState } from "react";
import ReactIcon from "./icons/ReactIcon";
import { NextIcon, JavaScriptIcon, TypeScriptIcon, NodeIcon, MongoDBIcon, GitIcon, TailwindIcon, ExpressIcon } from "./icons/TechIcons";

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillCategories = [
    {
      category: "Frontend",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: "ReactJs", icon: <ReactIcon className="w-6 h-6" />, color: "text-blue-500" },
        { name: "NextJs", icon: <NextIcon className="w-6 h-6" />, color: "text-slate-900 dark:text-white" },
        { name: "JavaScript", icon: <JavaScriptIcon className="w-6 h-6" />, color: "text-yellow-500" },
        { name: "TypeScript", icon: <TypeScriptIcon className="w-6 h-6" />, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: <TailwindIcon className="w-6 h-6" />, color: "text-cyan-500" },
        { name: "HTML5", icon: <span className="text-2xl">🌐</span>, color: "text-orange-500" },
        { name: "CSS3", icon: <span className="text-2xl">💅</span>, color: "text-blue-500" },
      ],
    },
    {
      category: "Backend",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        { name: "NodeJs", icon: <NodeIcon className="w-6 h-6" />, color: "text-green-600" },
        { name: "ExpressJs", icon: <ExpressIcon className="w-6 h-6" />, color: "text-slate-900 dark:text-white" },
      ],
    },
    {
      category: "Database",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      skills: [
        { name: "MongoDB", icon: <MongoDBIcon className="w-6 h-6" />, color: "text-green-600" },
      ],
    },
    {
      category: "Tools",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        { name: "Git", icon: <GitIcon className="w-6 h-6" />, color: "text-orange-600" },
        { name: "GitHub", icon: <span className="text-2xl">🐙</span>, color: "text-slate-900 dark:text-white" },
        { name: "Postman", icon: <span className="text-2xl">📬</span>, color: "text-orange-500" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`mb-12 sm:mb-16 text-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-500 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-200 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing web experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl ${mounted ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 bg-blue-100/80 dark:bg-blue-900/40 backdrop-blur-sm rounded-lg text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50 shrink-0">
                  <div className="text-blue-600 dark:text-blue-400 w-5 h-5 sm:w-6 sm:h-6">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors group"
                  >
                    <div className={`${skill.color} group-hover:scale-110 transition-transform shrink-0`}>
                      {skill.icon}
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-medium text-slate-700 dark:text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
