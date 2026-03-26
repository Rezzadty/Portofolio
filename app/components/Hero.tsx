export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="text-blue-400">Your Name</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-8">
           Beginer Developer | Beginer in Networking 
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
          I create beautiful, functional, and user-friendly digital experiences.
          Passionate about turning ideas into reality through code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
