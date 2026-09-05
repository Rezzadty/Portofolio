"use client";

import { useIntersectionObserver } from "@/src/shared/hooks/useIntersectionObserver";
import { EDUCATION } from "../data/education";

export function Education() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section ref={ref} id="education" className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-white mb-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Education
        </h2>

        <div className="space-y-8">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className={`bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-emerald-400 transition-all card-interactive hover-lift ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-emerald-400 mt-1">{edu.institution}</p>
                </div>
                <div className="flex items-center gap-3 mt-2 sm:mt-0">
                  {edu.gpa && (
                    <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                      GPA {edu.gpa}
                    </span>
                  )}
                  <span className="text-sm text-gray-500">{edu.period}</span>
                </div>
              </div>

              <p className="text-gray-400 text-justify mt-4">{edu.description}</p>

              {edu.highlights && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {edu.highlights.map((item, i) => (
                    <span
                      key={`${item}-${i}`}
                      className="px-3 py-1 text-xs sm:text-sm bg-gray-800/80 text-gray-300 border border-gray-700/80 rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
