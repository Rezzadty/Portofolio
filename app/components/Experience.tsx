"use client";

import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const experiences = [
    {
      title: "Senior Developer",
      company: "Company Name",
      period: "2023 - Present",
      description:
        "Leading development of key features and mentoring junior developers. Working with modern tech stack including React, Next.js, and Node.js.",
    },
    {
      title: "Full Stack Developer",
      company: "Another Company",
      period: "2021 - 2023",
      description:
        "Built and maintained multiple web applications. Collaborated with design and product teams to deliver high-quality solutions.",
    },
    {
      title: "Junior Developer",
      company: "First Company",
      period: "2020 - 2021",
      description:
        "Started my professional journey, learning best practices and contributing to various projects. Gained experience in both frontend and backend development.",
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`border-l-2 border-blue-400 pl-6 pb-8 relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full hover-scale"></div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-400 transition-all card-interactive hover-lift">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-blue-400 mb-3">{exp.company}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
