"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Phase = "visible" | "exit" | "entering" | "entered";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [displayPage, setDisplayPage] = useState(0);
  const [phase, setPhase] = useState<Phase>("visible");
  const [direction, setDirection] = useState<"left" | "right">("right");
  const sectionRef = useRef<HTMLElement>(null);
  const pendingPage = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (phase === "exit") {
      const t = setTimeout(() => {
        setDisplayPage(pendingPage.current ?? 0);
        setPhase("entering");
      }, 350);
      return () => clearTimeout(t);
    }
    if (phase === "entering") {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase("entered");
        });
      });
      return () => cancelAnimationFrame(frame);
    }
    if (phase === "entered") {
      const t = setTimeout(() => {
        setPhase("visible");
      }, 500);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const projects = [
    {
      title: "Gomi — Air Quality Monitoring App",
      description:
        "A mobile dashboard monitoring application built with React Native and Expo. Visualizes real-time sensor data from an ESP8266 microcontroller that transmits air quality readings (CO, NH3, temperature, humidity) to Firebase Realtime Database.",
      technologies: ["React Native", "Expo", "Firebase", "ESP8266", "NativeWind"],
      github: "https://github.com/Rezzadty/Gomi",
    },
    {
      title: "IoT Air Quality Dashboard",
      description:
        "A web-based real-time dashboard monitoring system built as part of a bachelor's final project. Receives and displays air quality data from an ESP8266 microcontroller through Firebase Realtime Database with interactive data visualization.",
      technologies: ["React", "Vite", "Firebase", "CSS", "IoT"],
      github: "https://github.com/Rezzadty/IOT-DashboardAirQuality",
    },
    {
      title: "BackendTele — Telegram Notification Backend",
      description:
        "An Express.js backend service that acts as a backup notification channel for the Gomi project. Polls Firebase Realtime Database to detect dangerous air quality conditions and automatically sends Telegram alerts when the main app fails to deliver notifications.",
      technologies: ["Express.js", "Node.js", "Firebase", "Telegram Bot API"],
      github: "https://github.com/Rezzadty/BackendTele",
    },
    {
      title: "GomiTools — Volume Scanner CLI",
      description:
        "A PowerShell CLI tool that scans and displays volume (disk) information on your PC. Features interactive menu to scan volumes, display details (label, file system, health, size), and detect temporary files for cleanup.",
      technologies: ["PowerShell", "Windows", "CLI"],
      github: "https://github.com/Rezzadty/gomitool",
    },
    {
      title: "Ticketing App",
      description:
        "A web-based ticketing application built with Laravel. Features ticket management, user authentication, and a clean UI with Tailwind CSS for handling support tickets and task tracking.",
      technologies: ["Laravel", "PHP", "MySQL", "TailwindCSS", "Vite"],
      github: "https://github.com/Rezzadty/ticketing_app",
    },
  ];

  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentProjects = projects.slice(
    displayPage * projectsPerPage,
    displayPage * projectsPerPage + projectsPerPage
  );

  const changePage = useCallback((newPage: number) => {
    if (newPage === currentPage || phase !== "visible") return;
    setDirection(newPage > currentPage ? "right" : "left");
    setCurrentPage(newPage);
    pendingPage.current = newPage;
    setPhase("exit");
  }, [currentPage, phase]);

  const getCardStyle = (index: number): React.CSSProperties => {
    const offset = direction === "right" ? 60 : -60;

    if (phase === "exit") {
      return {
        opacity: 0,
        transform: `translateX(${-offset}px) scale(0.97)`,
        transition: `opacity 0.3s ease ${index * 0.04}s, transform 0.3s ease ${index * 0.04}s`,
      };
    }

    if (phase === "entering") {
      return {
        opacity: 0,
        transform: `translateX(${offset}px) scale(0.97)`,
        transition: "none",
      };
    }

    if (phase === "entered") {
      return {
        opacity: 1,
        transform: "translateX(0) scale(1)",
        transition: `opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.07}s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.07}s`,
      };
    }

    return {
      opacity: 1,
      transform: "translateX(0) scale(1)",
      transition: "opacity 0.3s ease, transform 0.3s ease",
    };
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold text-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Projects
          </h2>
          <span className={`text-gray-500 text-sm ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {projects.length} projects
          </span>
        </div>
        <div style={{ overflow: "hidden" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <div
                key={`${displayPage}-${index}`}
                className={`bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-400 transition-colors group hover-lift card-interactive flex flex-col ${isVisible ? '' : 'opacity-0'}`}
                style={getCardStyle(index)}
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-justify">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={`${tech}-${techIndex}`}
                      className="text-xs px-3 py-1 bg-gray-800 text-blue-400 rounded-full hover-scale-sm cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-all inline-flex items-center gap-1.5 text-sm hover-scale"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <div className={`flex items-center justify-center gap-3 mt-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <button
              onClick={() => changePage(Math.max(currentPage - 1, 0))}
              disabled={currentPage === 0 || phase !== "visible"}
              className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-700 disabled:hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => changePage(i)}
                disabled={phase !== "visible"}
                className={`w-10 h-10 rounded-lg border transition-all ${
                  currentPage === i
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "bg-gray-800 border-gray-700 text-gray-400 hover:border-blue-400 hover:text-blue-400"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => changePage(Math.min(currentPage + 1, totalPages - 1))}
              disabled={currentPage === totalPages - 1 || phase !== "visible"}
              className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-700 disabled:hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
