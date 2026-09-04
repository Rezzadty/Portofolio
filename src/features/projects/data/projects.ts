import { ProjectItem } from "../types/project";

export const PROJECTS: ProjectItem[] = [
  {
    title: "Gomi — Air Quality Monitoring App",
    description:
      "A mobile dashboard monitoring application built with React Native and Expo. Visualizes real-time sensor data from an ESP8266 microcontroller that transmits air quality readings (CO, NH3, temperature, humidity) to Firebase Realtime Database.",
    technologies: ["React Native", "Expo", "Firebase", "ESP8266", "NativeWind"],
    github: "https://github.com/Rezzadty/Gomi",
  },
  {
    title: "IoT Air Quality Dashboard",
    description:
      "A web-based real-time dashboard monitoring system built as part of a bachelor's final project. Receives and displays air quality data from an ESP8266 microcontroller through Firebase Realtime Database with interactive data visualization.",
    technologies: ["React", "Vite", "Firebase", "CSS", "IoT"],
    github: "https://github.com/Rezzadty/IOT-DashboardAirQuality",
  },
  {
    title: "BackendTele — Telegram Notification Backend",
    description:
      "An Express.js backend service that acts as a backup notification channel for the Gomi project. Polls Firebase Realtime Database to detect dangerous air quality conditions and automatically sends Telegram alerts when the main app fails to deliver notifications.",
    technologies: ["Express.js", "Node.js", "Firebase", "Telegram Bot API"],
    github: "https://github.com/Rezzadty/BackendTele",
  },
  {
    title: "GomiTools — Volume Scanner CLI",
    description:
      "A PowerShell CLI tool that scans and displays volume (disk) information on your PC. Features interactive menu to scan volumes, display details (label, file system, health, size), and detect temporary files for cleanup.",
    technologies: ["PowerShell", "Windows", "CLI"],
    github: "https://github.com/Rezzadty/gomitool",
  },
  {
    title: "Ticketing App",
    description:
      "A web-based ticketing application built with Laravel. Features ticket management, user authentication, and a clean UI with Tailwind CSS for handling support tickets and task tracking.",
    technologies: ["Laravel", "PHP", "MySQL", "TailwindCSS", "Vite"],
    github: "https://github.com/Rezzadty/ticketing_app",
  },
];
