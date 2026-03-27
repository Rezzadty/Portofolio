"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          About Me
        </h2>
        <div className={`space-y-4 text-gray-400 text-lg leading-relaxed ${isVisible ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
          <p>
            I'm a passionate developer who is currently focusing on backend development. 
            As a beginner in this field, I am continuously learning and improving my 
            understanding of how to build reliable, scalable, and efficient systems, 
            including API development and database management.
          </p>
          <p>
            In addition to backend development, I have a growing interest in networking. 
            I am currently studying basic networking concepts to better understand how 
            systems communicate and how data flows across networks, which supports my 
            goal of becoming a more well-rounded developer.
          </p>
          <p>
            I also have hands-on experience in IoT projects, including an Automatic 
            Plant Watering System and an Air Quality Monitoring System, which is 
            currently being developed as my final project. This system integrates 
            real-time data using Firebase and utilizes sensors such as DHT-20, MQ-7, 
            MQ-135, and the ADS1115 module to monitor environmental conditions 
            accurately.
          </p>
          <p>
            I am committed to continuous learning, writing clean and maintainable code, 
            and gaining real-world experience through practical projects.
          </p>
        </div>

        {/* Skills */}
        <div className={`mt-12 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Basic Networking",
              "Basic OS (Linux & Windows)",
              "RESTful API Development",
              "Database Management",
              "IoT Development",
              "Git",
              "Problem Solving",
              "Team Collaboration"
            ].map((skill, index) => (
              <div
                key={skill}
                className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-center text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all hover-scale-sm card-interactive"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
