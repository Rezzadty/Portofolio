"use client";

import { useState } from "react";
import { useIntersectionObserver } from "@/src/shared/hooks/useIntersectionObserver";
import { SKILLS } from "../data/skills";

export function About() {
  const { ref, isVisible } = useIntersectionObserver();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section ref={ref} id="about" className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          About Me
        </h2>

        <div className={`block text-gray-400 text-lg leading-relaxed ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="float-none md:float-left mx-auto md:mx-0 md:mr-8 mb-6 md:mb-4 flex justify-center md:block">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-blue-400 transition-colors cursor-zoom-in block text-left group focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="View larger profile photo"
            >
              <img
                src="/images/Picture.jpg"
                alt="Reza Aditya Prabowo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors"></div>
            </button>
          </div>

          <div className="space-y-4 text-justify">
            <p>
              I&apos;m a <strong>Informatics Engineering graduate from Universitas Dian Nuswantoro (UDINUS) Semarang, with a GPA of 3.66/4.00. </strong>
               My primary focus is backend web development, where I work with JavaScript, Node.js, and Express.js 
               to build scalable RESTful APIs and backend systems.
            </p>
            <p>
              Beyond backend development, I have hands-on experience across several areas of software engineering: 
              mobile app development with React Native (Expo), automation scripting with Python, and Backend-as-a-Service 
              integration using Firebase Realtime Database and Firebase Authentication. I also enjoy IoT projects 
              including an Automatic Plant Watering System and Gomi, an Air Quality Monitoring System developed as my thesis
              , which uses real-time Firebase monitoring alongside DHT-20, MQ-7, MQ-135, and ADS1115 sensors to track environmental data.
            </p>
            <p>
              I'm currently expanding into networking fundamentals and software analysis including flowcharting and User Acceptance Testing (UAT), 
              though I'm still early in learning these and have a way to go before I'd call myself proficient. It's part of a broader 
              effort to understand not just how to build systems, but how they're planned, tested, and delivered.
            </p>
            <p>
             I'm passionate about continuous learning and solving real-world problems through technology, 
             and I'm looking for opportunities to apply and grow these skills in a professional environment.
            </p>
          </div>
          <div className="clear-both"></div>
        </div>

        <div className={`mt-12 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
          <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SKILLS.map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-center text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all hover-scale-sm card-interactive"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-zoom-out animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-3xl max-h-[90vh] w-full rounded-lg overflow-hidden flex justify-center items-center">
            <button
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors bg-black/50 hover:bg-black p-2 rounded-full z-10"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src="/images/Picture.jpg"
              alt="Reza Aditya Prabowo"
              className="max-w-full max-h-[90vh] object-contain rounded-lg border border-gray-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
