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
        
        <div className={`block text-gray-400 text-lg leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="float-none md:float-left mx-auto md:mx-0 md:mr-8 mb-6 md:mb-4 flex justify-center md:block">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-blue-400 transition-colors">
              <img 
                src="/images/Picture.png" 
                alt="Reza Aditya Prabowo" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-500/10 pointer-events-none"></div>
            </div>
          </div>
          
          <div className="space-y-4">
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
              Plant Watering System and an Air Quality Monitoring System named <strong>Gomi</strong>, 
              which was developed as my final project. Gomi integrates real-time data using 
              Firebase and utilizes sensors such as DHT-20, MQ-7, MQ-135, and the ADS1115 
              module to monitor environmental conditions accurately.
            </p>
            <p>
              I am committed to continuous learning, writing clean and maintainable code, 
              and gaining real-world experience through practical projects.
            </p>
          </div>
          <div className="clear-both"></div>
        </div>

        {/* Skills */}
        <div className={`mt-12 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Laravel",
              "REST API Development",
              "Database Management",
              "Python",
              "Git",
              "React Native Expo",
              "React.js"
            ].map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-center text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all hover-scale-sm card-interactive"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
