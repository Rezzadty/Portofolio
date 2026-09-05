import { ProjectItem } from "../types/project";

export const PROJECTS: ProjectItem[] = [
  {
    title: "ExpenseTracker App",
    description:
      "A personal expense tracking mobile app to help you monitor daily spending, set budgets, categorize expenses, and analyze spending trends.",
    technologies: ["React Native", "Expo", "Firebase", "NativeWind"],
    github: "https://github.com/Rezzadty/ExpenseTracker",
  },
  {
    title: "Text-To-Speech",
    description:
      "Turn your Word documents into audio files. Perfect for listening to articles, essays, or study materials on the go.",
    technologies: ["Python", "FFmpeg", "Gemini API key"],
    github: "https://github.com/Rezzadty/Text-To-Speech",
  },
  {
    title: "GomiTools — Volume Scanner CLI",
    description:
      "A simple PowerShell CLI tool that scans and displays volume (disk) information on your PC..",
    technologies: ["PowerShell", "Windows", "CLI"],
    github: "https://github.com/Rezzadty/gomitool",
  },
  {
    title: "BackendTele — Telegram Notification Backend",
    description:
      "An Express.js backend service that acts as a backup notification channel for the Gomi project. Polls Firebase Realtime Database to detect dangerous air quality conditions and automatically sends Telegram alerts when the main app fails to deliver notifications.",
    technologies: ["Express.js", "Node.js", "Firebase", "Telegram Bot API"],
    github: "https://github.com/Rezzadty/BackendTele",
  },
  {
    title: "IoT Air Quality Dashboard",
    description:
      "A web-based real-time dashboard monitoring system built as part of a bachelor's final project. Receives and displays air quality data from an ESP8266 microcontroller through Firebase Realtime Database with interactive data visualization.",
    technologies: ["React", "Vite", "Firebase", "CSS", "IoT"],
    github: "https://github.com/Rezzadty/IOT-DashboardAirQuality",
  },
  {
    title: "Ticketing App",
    description:
      "A web-based ticketing application built with Laravel. Features ticket management, user authentication, and a clean UI with Tailwind CSS for handling support tickets and task tracking.",
    technologies: ["Laravel", "PHP", "MySQL", "TailwindCSS", "Vite"],
    github: "https://github.com/Rezzadty/ticketing_app",
  },
];
