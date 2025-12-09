"use client";

import { useEffect, useState } from "react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "smit.joshi709@gmail.com",
      href: "mailto:smit.joshi709@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+91 9033868859",
      href: "tel:+919033868859",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Sanand, Ahmedabad, India",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/smit--joshi/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "GitHub",
      url: "https://github.com/joshismit",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/smiit/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662L2.571 15.161c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.082-4.099c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.097 2.093 5.122-5.117c.467-.469 1.124-.695 1.837-.695s1.357.196 1.824.662l3.217 3.192c.467.467.697 1.111.697 1.823s-.23 1.357-.697 1.824l-5.127 5.143zm-1.387-1.361l4.134-4.134c.467-.467.702-1.15.702-1.863s-.235-1.357-.702-1.824l-3.217-3.192c-.467-.467-1.111-.702-1.824-.702s-1.357.235-1.823.702l-5.122 5.117-2.097-2.093c-.467-.467-1.111-.702-1.824-.702s-1.357.235-1.823.702L3.8 10.719c-.467.467-.702 1.15-.702 1.863s.235 1.357.702 1.824l7.188 6.927c.467.467 1.111.702 1.824.702s1.357-.235 1.824-.702l2.697-2.607z" />
        </svg>
      ),
      color: "bg-orange-600 hover:bg-orange-700",
    },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className={`text-center mb-12 sm:mb-16 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-500 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-200 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              className={`group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl ${mounted ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-linear-to-br ${info.color} flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <div className="text-white w-5 h-5 sm:w-6 sm:h-6">
                  {info.icon}
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-1 sm:mb-2">
                {info.label}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors break-words">
                {info.value}
              </p>
            </a>
          ))}
        </div>

        <div className={`flex justify-center gap-4 sm:gap-6 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-xl ${social.color}`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className={`mt-12 sm:mt-16 pt-8 border-t border-blue-200/50 dark:border-blue-800/50 text-center text-sm text-slate-500 dark:text-slate-300 ${mounted ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <p>© 2025 Smit Joshi. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
