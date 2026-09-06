import { CertificationItem, AnimationPhase } from "../types/certification";

interface CertificationCardProps {
  cert: CertificationItem;
  index: number;
  phase: AnimationPhase;
  isVisible: boolean;
}

export function CertificationCard({
  cert,
  index,
  phase,
  isVisible,
}: CertificationCardProps) {
  const isCardVisible = isVisible && phase !== "exit" && phase !== "entering";

  return (
    <div
      className={`bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-emerald-400 transition-all duration-500 card-interactive flex flex-col justify-between hover-lift transform ${
        isCardVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-[0.97] pointer-events-none"
      }`}
      style={{
        transitionDelay: isCardVisible ? `${(index % 4) * 110}ms` : "0ms",
      }}
    >
      <div>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
            <p className="text-emerald-400 text-sm font-medium">{cert.issuer}</p>
          </div>
          <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
            {cert.issueDate}
          </span>
        </div>

        {cert.credentialId && (
          <p className="text-xs text-gray-500 mb-3">ID: {cert.credentialId}</p>
        )}

        {cert.description && (
          <p className="text-gray-400 mb-4 text-justify">{cert.description}</p>
        )}

        {cert.skills && cert.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {cert.skills.map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {cert.credentialUrl && (
        <div className="flex gap-4 pt-4 border-t border-gray-800">
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-all hover-scale text-sm font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Credential
          </a>
        </div>
      )}
    </div>
  );
}
