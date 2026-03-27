export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-down">
          Hi, I'm <span className="text-gradient">Reza Aditya Prabowo</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-8 animate-fade-in-up animate-delay-200">
           Beginer Developer | Beginer in Networking | IoT Enthusiast
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 animate-fade-in-up animate-delay-300">
          Welcome to my portfolio! I'm Reza Aditya Prabowo, a backend beginner developer with a strong interest in networking and IoT. 
          Explore my projects, experience, and get in touch to collaborate on exciting opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
          <a
            href="#projects"
            className="btn-primary px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-medium hover-scale relative z-10"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all font-medium hover-scale"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
