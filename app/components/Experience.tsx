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
      "During my internship at CV. Bartech Utama Mandiri, I worked on various projects that enhanced my skills in backend development, IT support, and networking. I contributed to a Laravel-based web application for MBG (Makan Bergizi Gratis) by implementing new features and managing databases using MySQL. Additionally, I developed a Python-based QR code system used for item scanning in kitchen operations. I was also involved in building an IoT web application that integrates MQTT data using React.js for the frontend and Express.js for the backend, where I focused on backend development; however, this project was developed as a prototype and not deployed. Furthermore, I supported IT operations by troubleshooting PC issues."
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
