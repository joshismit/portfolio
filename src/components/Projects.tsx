"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Component to handle image loading with fallback
function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  if (hasError) {
    return null;
  }

  return (
    <>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => setHasError(true)}
        unoptimized
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
    </>
  );
}

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !mounted) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.querySelector('div')?.offsetWidth || 0;
      const gap = 20; // gap-5 = 1.25rem = 20px
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, projects.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => container.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const projects = [
    {
      //year: "2025",
      title: "HMO Checker",
      description:
        "A comprehensive HMO (House in Multiple Occupation) checking platform with user authentication and property management features. Built with modern web technologies for property verification and compliance checking.",
      liveUrl: "https://www.app.hmochecker.co.uk/login",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
      image: "/projects/hmochecker.png",
    },
    {
      //year: "2025",
      title: "Disctopia",
      description:
        "A dynamic streaming platform and podcast hosting service that empowers content creators. Features music streaming, podcast hosting, video content, and enterprise solutions with advanced content delivery and monetization tools.",
      liveUrl: "https://disctopia.com",
      techStack: ["React.js", "Tailwind CSS", "Auth0", "Node.js"],
      featured: true,
      gradient: "from-purple-500 to-pink-500",
      image: "/projects/disctopia.png",
    },
    {
      //year: "2024",
      title: "24hr Therapy",
      description:
        "A 24/7 online therapy platform connecting users with professional therapists. Features quick connect functionality, multiple payment options, and a user-friendly interface for accessible mental health support anytime, anywhere.",
      liveUrl: "https://24hrtherapy.co.uk",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
      featured: true,
      gradient: "from-green-500 to-emerald-500",
      image: "/projects/24hrtherapy.png",
    },
    {
      //year: "2024",
      title: "Lorenzo Landscape",
      description:
        "A professional landscaping company website showcasing services, portfolio, and client testimonials. Features responsive design, modern UI components, and seamless user experience for landscape design and maintenance services.",
      liveUrl: "https://www.lorenzolandscape.com",
      techStack: ["React.js", "Tailwind CSS", "Next.js"],
      gradient: "from-orange-500 to-red-500",
      image: "/projects/lorenzo-landscape.png",
    },
    {
      //year: "2025",
      title: "Forever",
      description:
        "A full-stack e-commerce platform with user authentication, product management, shopping cart, and checkout functionality. Built with MERN stack (MongoDB, Express.js, React.js, Node.js) and Tailwind CSS.",
      liveUrl: "https://ecommerce-frontend-ivory-beta.vercel.app",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      gradient: "from-indigo-500 to-purple-500",
      image: "/projects/ecommerce-mern.png",
    },
    {
      //year: "2024",
      title: "Educity",
      description:
        "An educational web application showcasing interactive UI components and responsive layouts. Designed to provide a clean, modern interface for displaying courses, learning materials, and educational content.",
      liveUrl: "https://edussity.vercel.app/",
      techStack: ["React.js", "CSS3", "Tailwind CSS"],
      gradient: "from-teal-500 to-cyan-500",
      image: "/projects/educity.png",
    },
  ];

  return (
    <section id="projects" className="relative pt-8 sm:pt-12 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className={`mb-12 sm:mb-16 text-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-500 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-200 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in web development
          </p>
        </div>

        {/* Mobile: Horizontal Scroll Container */}
        <div className="md:hidden relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-4 px-4 scrollbar-hide scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-500 shadow-lg hover:shadow-2xl shrink-0 w-[85vw] max-w-sm snap-center ${mounted ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Project Header with Image */}
                <div className={`relative h-40 bg-linear-to-br ${project.gradient} overflow-hidden`}>
                  {project.image ? (
                    <ProjectImage src={project.image} alt={project.title} />
                  ) : null}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative z-10 text-white text-5xl font-bold opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-200 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-all group/link"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-blue-600 dark:bg-blue-400 w-6 opacity-100'
                    : 'bg-blue-300 dark:bg-blue-600 opacity-40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 ${mounted ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Project Header with Image */}
              <div className={`relative h-40 sm:h-48 bg-linear-to-br ${project.gradient} overflow-hidden`}>
                {project.image ? (
                  <ProjectImage src={project.image} alt={project.title} />
                ) : null}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10 text-white text-5xl sm:text-6xl font-bold opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-200 leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-all group/link"
                >
                  View Project
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
