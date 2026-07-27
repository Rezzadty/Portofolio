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
    title: "Internship at CV. Bartech Utama Mandiri",
    company: "CV. Bartech Utama Mandiri",
    period: "June 2025 - August 2025",
    description:
      "During my internship at CV. Bartech Utama Mandiri, I worked on various projects that enhanced my skills in backend development, IT support, and networking. I contributed to a Laravel-based web application for MBG (Makan Bergizi Gratis) by implementing new features and managing databases using MySQL. Additionally, I developed a Python-based QR code system used for item scanning in kitchen operations. I was also involved in building an IoT web application that integrates MQTT data using React.js for the frontend and Express.js for the backend, where I focused on backend development; however, this project was developed as a prototype and not deployed. Furthermore, I supported IT operations by troubleshooting PC issues.",
    techStack: ["React.js", "Express.js", "MySQL", "Laravel", "Python", "Hardware Troubleshooting / It Support"],
    github: "https://github.com/diveoktabid/Future",
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
                <p className="text-gray-400 text-justify">{exp.description}</p>
                {exp.techStack && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.techStack.map((tech, i) => (
                      <span key={`${tech}-${i}`} className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all hover-scale"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
