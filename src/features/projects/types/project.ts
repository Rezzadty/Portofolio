export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

export type AnimationPhase = "visible" | "exit" | "entering" | "entered";
