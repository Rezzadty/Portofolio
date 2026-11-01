import { ProjectItem } from "../types/project";

// ponytail: static list pre-sorted newest to oldest; sort dynamically by date if external API added
export const PROJECTS: ProjectItem[] = [
  {
    title: "ExpenseTracker App",
    languages: ["TypeScript"],
    description:
      "A mobile app for tracking daily expenses, setting budgets, and analyzing spending trends.",
    technologies: ["React Native", "Expo", "Firebase", "NativeWind"],
    github: "https://github.com/Rezzadty/ExpenseTracker",
  },
  {
    title: "IoT Air Quality Dashboard",
    languages: ["React", "JavaScript"],
    description:
      "A web dashboard built for my bachelor's thesis. Displays real-time air quality data streamed from an ESP8266 microcontroller via Firebase Realtime Database.",
    technologies: ["React", "Vite", "Firebase", "CSS", "IoT"],
    github: "https://github.com/Rezzadty/IOT-DashboardAirQuality",
  },
  {
    title: "GomiTools: Volume Scanner CLI",
    languages: ["PowerShell"],
    description:
      "A PowerShell CLI tool that scans and displays disk volume information on Windows.",
    technologies: ["PowerShell", "Windows", "CLI"],
    github: "https://github.com/Rezzadty/gomitool",
  },
  {
    title: "BackendTele: Telegram Notification Backend",
    languages: ["JavaScript"],
    description:
      "An Express.js backend service acting as a fallback alert channel for the Gomi IoT project. Polls Firebase Realtime Database and dispatches Telegram alerts when dangerous thresholds are reached.",
    technologies: ["Express.js", "Node.js", "Firebase", "Telegram Bot API"],
    github: "https://github.com/Rezzadty/BackendTele",
  },
  {
    title: "Text-To-Speech",
    languages: ["Python"],
    description:
      "Converts Word documents into audio files using Python and the Gemini API.",
    technologies: ["Python", "FFmpeg", "Gemini API key"],
    github: "https://github.com/Rezzadty/Text-To-Speech",
  },
  {
    title: "PDF to JSON Converter",
    languages: ["TypeScript", "JavaScript"],
    description:
      "A client-side tool that parses PDF documents, reconstructs layout coordinates, and extracts structured sections directly in the browser.",
    technologies: ["Next.js", "React", "pdfjs-dist", "TailwindCSS"],
    github: "https://github.com/Rezzadty/convertjson",
  },
  {
    title: "Ticketing App",
    languages: ["PHP", "Blade"],
    description:
      "A Laravel application for managing support tickets and task tracking, featuring role-based authentication and a Tailwind CSS interface.",
    technologies: ["Laravel", "PHP", "MySQL", "TailwindCSS", "Vite"],
    github: "https://github.com/Rezzadty/ticketing_app",
  },
  {
    title: "Abstract Reasoning Platform",
    languages: ["TypeScript"],
    description:
      "An assessment platform simulating pre-employment cognitive tests with timed sessions, randomized questions, and pattern breakdown reviews.",
    technologies: ["Next.js", "React", "TailwindCSS"],
    github: "https://github.com/Rezzadty/cogtest",
  }
];
