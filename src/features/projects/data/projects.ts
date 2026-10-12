import { ProjectItem } from "../types/project";

// ponytail: static list pre-sorted newest to oldest; sort dynamically by date if external API added
export const PROJECTS: ProjectItem[] = [
  {
    title: "ExpenseTracker App",
    languages: ["TypeScript"],
    description:
      "A personal expense tracking mobile app to help you monitor daily spending, set budgets, categorize expenses, and analyze spending trends.",
    technologies: ["React Native", "Expo", "Firebase", "NativeWind"],
    github: "https://github.com/Rezzadty/ExpenseTracker",
  },
  {
    title: "IoT Air Quality Dashboard",
    languages: ["React", "JavaScript"],
    description:
      "A web-based real-time dashboard monitoring system built as part of a bachelor's final project. Receives and displays air quality data from an ESP8266 microcontroller through Firebase Realtime Database with interactive data visualization.",
    technologies: ["React", "Vite", "Firebase", "CSS", "IoT"],
    github: "https://github.com/Rezzadty/IOT-DashboardAirQuality",
  },
  {
    title: "GomiTools — Volume Scanner CLI",
    languages: ["PowerShell"],
    description:
      "A simple PowerShell CLI tool that scans and displays volume (disk) information on your PC..",
    technologies: ["PowerShell", "Windows", "CLI"],
    github: "https://github.com/Rezzadty/gomitool",
  },
  {
    title: "BackendTele — Telegram Notification Backend",
    languages: ["JavaScript"],
    description:
      "An Express.js backend service that acts as a backup notification channel for the Gomi project. Polls Firebase Realtime Database to detect dangerous air quality conditions and automatically sends Telegram alerts when the main app fails to deliver notifications.",
    technologies: ["Express.js", "Node.js", "Firebase", "Telegram Bot API"],
    github: "https://github.com/Rezzadty/BackendTele",
  },
  {
    title: "Text-To-Speech",
    languages: ["Python"],
    description:
      "Turn your Word documents into audio files. Perfect for listening to articles, essays, or study materials on the go.",
    technologies: ["Python", "FFmpeg", "Gemini API key"],
    github: "https://github.com/Rezzadty/Text-To-Speech",
  },
  {
    title: "PDF to JSON Converter",
    languages: ["TypeScript", "JavaScript"],
    description:
      "A client-side PDF to JSON converter that reconstructs document coordinates and extracts semantic sections and contact information directly in the browser.",
    technologies: ["Next.js", "React", "pdfjs-dist", "TailwindCSS"],
    github: "https://github.com/Rezzadty/convertjson",
  },
  {
    title: "Ticketing App",
    languages: ["PHP", "Blade"],
    description:
      "A web-based ticketing application built with Laravel. Features ticket management, user authentication, and a clean UI with Tailwind CSS for handling support tickets and task tracking.",
    technologies: ["Laravel", "PHP", "MySQL", "TailwindCSS", "Vite"],
    github: "https://github.com/Rezzadty/ticketing_app",
  },
  {
    title: "Abstract Reasoning Platform",
    languages: ["TypeScript"],
    description:
      "An interactive assessment platform simulating pre-employment cognitive tests with timed sessions, randomized question sets, and detailed pattern breakdown reviews.",
    technologies: ["Next.js", "React", "TailwindCSS"],
    github: "https://github.com/Rezzadty/cogtest",
  }
];
