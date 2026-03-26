export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          About Me
        </h2>
        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
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
        <div className="mt-12">
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
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-center text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors"
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
