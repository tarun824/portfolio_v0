import React from "react";
import ExperienceCard from "./ExperienceCard";
import { ExperienceInterface } from "../../../interfaces/ExperienceInterface";

function ExperienceComponent() {
  const Experiences: ExperienceInterface[] = [
    {
  role: "Software Engineer",
  companyName: "Prodoc AI",
  duration: "Mar 2025 - Present",
  companyProfileImgLocation: "/images/landing-page/prodoc-logo.png",
  workLocation: "Bangalore, Karnataka, India  ",
  details: [
    "Engineered intelligent AI agents powered by Model Context Protocol (MCP) framework; built specialized tools connecting LLMs with enterprise databases and external APIs for seamless real-time data access and autonomous task execution.",
    "Architected Azure VM production environments with NGINX reverse proxying and SSL termination; implemented Zero-Trust session framework via Redis with real-time revocation and RBAC for multi-tenant security.",
    "Engineered high-frequency data pipelines using Agenda.js and Cron jobs to automate medical alerts and sync 70,000+ records per batch; optimized MongoDB with Compound Indexing for sub-second query latency.",
    "Solved critical race conditions between Flutter frontend and Kotlin background services via UUID-based Shared Session Ledger, ensuring 100% data integrity for real-time call-tracking and telephony metrics."
      ],
    },
    {
      companyName: "Havric AI",
      companyProfileImgLocation: "/images/landing-page/havric-ai-profile.png",
      workLocation: "Bangalore, Karnataka, India ",
      duration: "Nov 2024 – Feb 2025",
      role: "AI/ML Intern",
      details: [
        "Developed a scalable chatbot using ReactJS, Flask, and Docker Compose, streamlining user registration and API key management.",
        "Engineered a conversational AI solution with Razorpay integration and a database for dynamic query responses, enhancing user engagement.",
        "Implemented NLP algorithms to improve the chatbot’s understanding of user emotions, providing personalized responses and reducing response time.",
        "Created a chatbot architecture that efficiently retrieves and delivers data-driven responses from the database, ensuring accurate and relevant user interactions.",
      ],
    },
    {
      role: "Intern- Flutter Developer",
      workLocation: "Bangalore, Karnataka, India ",
      companyName: "CSTech Info solutions Pvt. Ltd.",
      duration: "Mar 2024 - Oct 2024",
      companyProfileImgLocation: "/images/landing-page/cs-tech-profile.png",
      details: [
        "Built Mobile App called Calley using Flutter & Dart both for Android and IOS. Added advance feature like In-App Purchase, Push Notification, Deep Linking.",
        "Wrote Swift code and connected to Flutter using Platform channel,Back ground services.Deployed on both Apple Store and Play Store. Handled deployment rejection on both.",
        "Apple Store : https://apps.apple.com/in/app/ calley/id1222888599",
        "Play Store : https://play.google.com/store/ apps/details?id=com.getcalley.app.calley",
      ],
    },
    {
      role: "Developer Executive",
      companyName: "AIE Technologies Pvt",
      duration: "Sep 2023 - Nov 2023",
      companyProfileImgLocation:
        "/images/landing-page/aie-technologies-profile.png",
      workLocation: "Remote",
      details: [
        "Built end-to-end application, translating Figma designs into high-fidelity UI/UX experiences, and employed state management .",
        "Proficient in designing, deploying, and managing fault-tolerant, highly available, and scalable AWS solutions.",
        "Developed a streamlined Flask-MongoDB backend, seamlessly integrating with frontend.",
      ],
    },
  ];
  return (
    <div className="flex flex-col mx-4 md:mx-20">
      {Experiences.map((singleExperience) => {
        return (
          <ExperienceCard
            key={singleExperience.companyName}
            companyName={singleExperience.companyName}
            companyProfileImgLocation={
              singleExperience.companyProfileImgLocation
            }
            workLocation={singleExperience.workLocation}
            duration={singleExperience.duration}
            role={singleExperience.role}
            details={singleExperience.details}
          />
        );
      })}
    </div>
  );
}

export default ExperienceComponent;
