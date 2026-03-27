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
            I'm a passionate developer with a love for creating elegant solutions
            to complex problems. With experience in full-stack development, I
            specialize in building modern web applications that are both
            beautiful and functional.
          </p>
          <p>
            My journey in tech started [your story here], and I've been constantly
            learning and growing ever since. I believe in writing clean, maintainable
            code and creating user experiences that make a difference.
          </p>
          <p>
            When I'm not coding, you can find me [your hobbies/interests here].
          </p>
        </div>

        {/* Skills */}
        <div className={`mt-12 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Basic Networking",
              "Basic Operating System (Linux & Windows)",
              "Next.js",
              "Node.js",
              "Python",
              "TailwindCSS",
              "Git",
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
