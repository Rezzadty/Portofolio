import { EducationItem } from "../types/education";

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Informatics Engineering (S.Kom.)",
    institution: "Dian Nuswantoro University Semarang",
    period: "2022 - 2026",
    gpa: "3.66 / 4.00",
    description:
      "Focused on backend software engineering, database systems, and IoT system design, with practical training in networking infrastructure.",
    highlights: [
      "Thesis: Design of an IoT-Based Air Quality Monitoring System for Network Rack Servers at Land and Building Tax Service Office, Region III, Semarang",
      "Built the backend layer: an Express.js REST API and Telegram alert bot syncing ESP8266 sensor readings (DHT20, MQ-7, MQ-135 via 16-bit ADS1115 ADC) with Firebase Realtime Database and an Expo dashboard",
      "Achieved 99.4% system uptime and 2.3s average end-to-end latency across 7 days live deployment, with a 100% pass rate across 8 black-box functional test scenarios",
    ],
  },
];
