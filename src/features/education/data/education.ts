import { EducationItem } from "../types/education";

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Informatics Engineering (S.Kom.)",
    institution: "Dian Nuswantoro University Semarang",
    period: "2022 - 2026",
    gpa: "3.66 / 4.00",
    description:
      "Focusing in backend software engineering, database systems, IoT system design and intrested in networking. \
      Undergraduate thesis: designed and deployed a live IoT-based air quality monitoring system for network rack server rooms at a government tax office (Pos Pelayanan PBB Wilayah III) in Semarang, integrating an ESP8266 microcontroller, multi-sensor array, Firebase Realtime Database, and automated Telegram alerting.",
    highlights: [
      "Thesis: Design of an IoT-Based Air Quality Monitoring System for Network Rack Servers at the Land and Building Tax Service Office, Region III, Semarang",
      "Built with ESP8266, DHT20 / MQ-7 / MQ-135 sensors, ADS1115 16-bit ADC, Firebase Realtime Database, React Native Expo, and an Express.js + Telegram Bot API alert backend",
      "Achieved 99.4% system uptime, 2.3s average end-to-end latency, and a 100% pass rate across 8 black-box functional test scenarios during 7 days of live deployment",
    ],
  },
];