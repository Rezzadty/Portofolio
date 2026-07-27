"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
    <section ref={sectionRef} id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Get In Touch
        </h2>
        <p className={`text-gray-400 text-lg mb-12 max-w-2xl ${isVisible ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left animate-delay-200' : 'opacity-0'}`}>
            <div className="flex items-start gap-4 hover-scale-sm transition-transform">
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center shrink-0 hover-glow">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <a
                  href="mailto:rezaadityaprabowo474@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  rezaadityaprabowo474@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 hover-scale-sm transition-transform">
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center shrink-0 hover-glow">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/6281225099450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +62 812-2509-9450
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 hover-scale-sm transition-transform">
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center shrink-0 hover-glow">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/rezaadityaprabowo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/rezaadityaprabowo/
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message */}
          <div className={`bg-gray-900 border border-gray-800 rounded-lg p-6 card-interactive hover-lift ${isVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
            <h3 className="text-white font-semibold mb-4">Send a Message</h3>
            <p className="text-gray-400 text-sm mb-4">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:your.email@example.com?subject=Hello!&body=Hi, I'd like to get in touch with you."
              className="btn-primary w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-medium inline-block text-center relative z-10"
            >
              Open Email Client
            </a>
            <p className="text-gray-500 text-xs mt-4 text-center">
              Or copy: rezaadityaprabowo474@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
