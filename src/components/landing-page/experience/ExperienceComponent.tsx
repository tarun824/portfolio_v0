import React from "react";
import ExperienceCard from "./ExperienceCard";
import { ExperienceInterface } from "../../../interfaces/ExperienceInterface";

function ExperienceComponent() {
  const Experiences: ExperienceInterface[] = [
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
  ];
  return (
    <div className="flex flex-col mx-20">
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
