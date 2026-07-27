"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
                src="/images/Picture.jpg" 
                alt="Reza Aditya Prabowo" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-500/10 pointer-events-none"></div>
            </div>
          </div>
          
         <div className="space-y-4 text-justify">
          <p>
            I'm an <strong>Informatics Engineering graduate from Universitas Dian Nuswantoro</strong>,
            specializing in backend web development. I am proficient in JavaScript, Node.js,
            and Express.js for building scalable backend systems and RESTful APIs. I also have
            hands-on experience in mobile application development using React Native (Expo),
            automation scripting with Python, and Backend-as-a-Service (BaaS) solutions using
            Firebase Realtime Database and Firebase Authentication.
          </p>
          <p>
            As a backend developer, I am continuously learning and improving my understanding
            of software architecture, API development, database management, and scalable system
            design. I am committed to writing clean, maintainable, and well-structured code
            while adapting to emerging technologies to deliver efficient software solutions.
          </p>
          <p>
            In addition to backend development, I have a growing interest in networking.
            I am currently studying networking fundamentals to better understand how systems
            communicate, how data flows across networks, and how infrastructure supports
            modern applications, helping me become a more well-rounded developer.
          </p>
          <p>
            I also have hands-on experience in IoT projects, including an Automatic Plant
            Watering System and an Air Quality Monitoring System named <strong>Gomi</strong>,
            which was developed as my final project. Gomi integrates real-time monitoring
            using Firebase and utilizes sensors such as the DHT-20, MQ-7, MQ-135, and ADS1115
            module to collect and monitor environmental data accurately.
          </p>
          <p>
            I am passionate about continuous learning, solving real-world problems through
            technology, and gaining practical experience by building reliable, scalable,
            and impactful software solutions.
          </p>
        </div>
          <div className="clear-both"></div>
        </div>

        {/* Skills */}
        <div className={`mt-12 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Express.js",
              "REST API Development",
              "Database Management",
              "Python",
              "Linux & Windows OS",
              "Laravel",
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

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-zoom-out animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-3xl max-h-[90vh] w-full rounded-lg overflow-hidden flex justify-center items-center">
            <button 
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors bg-black/50 hover:bg-black p-2 rounded-full z-10"
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src="/images/Picture.png" 
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
