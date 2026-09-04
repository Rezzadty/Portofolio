import { ProjectItem } from "../types/project";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  phase: "visible" | "exit" | "entering" | "entered";
  isVisible: boolean;
}

export function ProjectCard({ project, index, phase, isVisible }: ProjectCardProps) {
  const isCardVisible = isVisible && phase !== "exit" && phase !== "entering";

  return (
    <div
      className={`bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-400 transition-all duration-500 card-interactive flex flex-col justify-between hover-lift transform ${
        isCardVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-[0.97] pointer-events-none"
      }`}
      style={{
        transitionDelay: isCardVisible ? `${(index % 4) * 110}ms` : "0ms",
      }}
    >
      <div>
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-justify">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 pt-4 border-t border-gray-800">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-2 text-white hover:text-blue-400 transition-all font-medium hover-scale"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          View Code
        </a>
      </div>
    </div>
  );
}
