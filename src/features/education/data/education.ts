import { EducationItem } from "../types/education";

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Informatics Engineering (S.Kom.)",
    institution: "Dian Nuswantoro University Semarang",
    period: "2022 - 2026",
    gpa: "3.66 / 4.00",
    description:
      "Focused on backend software engineering, database systems, and IoT system design, with a growing interest in networking infrastructure.",
    highlights: [
      "Thesis: Design of an IoT-Based Air Quality Monitoring System for Network Rack Servers at the Land and Building Tax Service Office, Region III, Semarang",
      "Owned the backend layer — built an Express.js REST API and Telegram Bot alert system, integrating ESP8266 sensor data (DHT20, MQ-7, MQ-135 via a 16-bit ADS1115 ADC) with Firebase Realtime Database and a React Native (Expo) monitoring dashboard",
      "Achieved 99.4% system uptime and 2.3s average end-to-end latency across 7 days of live deployment, with a 100% pass rate across 8 black-box functional test scenarios",
    ],
  },
];