"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useIntersectionObserver } from "@/src/shared/hooks/useIntersectionObserver";
import { PROJECTS } from "../data/projects";
import { AnimationPhase } from "../types/project";
import { ProjectCard } from "./ProjectCard";

const PROJECTS_PER_PAGE = 4;

export function Projects() {
  const { ref, isVisible } = useIntersectionObserver();
  const [currentPage, setCurrentPage] = useState(0);
  const [displayPage, setDisplayPage] = useState(0);
  const [phase, setPhase] = useState<AnimationPhase>("visible");
  const pendingPage = useRef<number | null>(null);

  useEffect(() => {
    if (phase === "exit") {
      const t = setTimeout(() => {
        setDisplayPage(pendingPage.current ?? 0);
        setPhase("entering");
      }, 200);
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
      }, 550);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const totalPages = Math.ceil(PROJECTS.length / PROJECTS_PER_PAGE);

  const goToPage = useCallback(
    (targetPage: number) => {
      if (targetPage === currentPage || phase !== "visible") return;
      pendingPage.current = targetPage;
      setCurrentPage(targetPage);
      setPhase("exit");
    },
    [currentPage, phase]
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) goToPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) goToPage(currentPage - 1);
  };

  const currentProjects = PROJECTS.slice(
    displayPage * PROJECTS_PER_PAGE,
    (displayPage + 1) * PROJECTS_PER_PAGE
  );

  return (
    <section ref={ref} id="projects" className="py-20 bg-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2
              className={`text-3xl sm:text-4xl font-bold text-white mb-4 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Featured Projects
            </h2>
            <p
              className={`text-gray-400 text-lg ${
                isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"
              }`}
            >
              Here are some of the projects I&apos;ve worked on recently.
            </p>
          </div>

          <div
            className={`hidden sm:flex items-center gap-2 ${
              isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"
            }`}
          >
            <button
              onClick={prevPage}
              disabled={currentPage === 0 || phase !== "visible"}
              aria-label="Previous page"
              className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover-scale-sm cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-gray-400 text-sm px-2">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1 || phase !== "visible"}
              aria-label="Next page"
              className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover-scale-sm cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[480px]">
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={`${displayPage}-${project.title}`}
              project={project}
              index={index}
              phase={phase}
              isVisible={isVisible}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div
            className={`flex flex-col items-center gap-4 mt-12 ${
              isVisible ? "animate-fade-in-up animate-delay-300" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  disabled={phase !== "visible"}
                  aria-label={`Go to page ${i + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentPage === i
                      ? "w-8 h-2 bg-emerald-400"
                      : "w-2 h-2 bg-gray-700 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <div className="flex sm:hidden items-center gap-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 0 || phase !== "visible"}
                className="px-4 py-2 text-sm rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                Previous
              </button>
              <span className="text-gray-400 text-sm">
                {currentPage + 1} / {totalPages}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1 || phase !== "visible"}
                className="px-4 py-2 text-sm rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
