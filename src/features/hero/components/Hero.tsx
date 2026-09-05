export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle radial ambient glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[140px] animate-pulse-glow"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-down">
          Hi, I&apos;m <span className="text-gradient">Reza Aditya Prabowo</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-8 animate-fade-in-up animate-delay-200">
          Backend Developer | Networking & Software Quality Enthusiast 
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 animate-fade-in-up animate-delay-300">
          Backend developer with a growing interest in networking, IoT, and software quality. 
          I build reliable APIs and enjoy exploring how systems connect, scale, and get properly tested. 
          Take a look at my projects, or reach out — I&apos;d love to connect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
          <a
            href="#projects"
            className="btn-primary px-8 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all hover-scale relative z-10"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-emerald-400/50 text-emerald-400 rounded-lg hover:bg-emerald-400/10 hover:border-emerald-400 transition-all font-medium hover-scale"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
