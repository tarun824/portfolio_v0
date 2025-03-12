"use client";
import React, { useState } from "react";
import ProjectFieldSelectionButton from "./ProjectFieldSelectionButton";
import ProjectSingleCard from "./ProjectSingleCard";
import { ProjectInterface } from "@/interfaces/ProjectInterface";

const allProjects = {
  all: [
    {
      title: "Intelligent Context-Aware Chatbot",
      details: [
        "Developed an AI-powered chatbot using Ollama and Llama 3.2, implementing context-aware responses to enhance user engagement and support.",
        "Customized Llama 3.2 models for specific applications, improving the chatbot's ability to understand and respond accurately to user queries.",
        "Implemented Retrieval-Augmented Generation (RAG) techniques locally, enhancing the chatbot's information retrieval capabilities and overall performance.",
      ],
      skills: [
        {
          languageName: "Python",
          link: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
        },
        {
          languageName: "Flask",
          link: "https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000",
        },
        {
          languageName: "ReactJS",
          link: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
        },
        {
          languageName: "Ollama",
          link: "https://cdn.brandfetch.io/idrRDmZ2_F/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1740053459943",
        },
        {
          languageName: "Llama 3.2",
          link: "data:image/jpeg;base64,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",
        },
      ],
      link: "",
      __v: 0,
    },
    {
      _id: "67b61b690d16cfecd2a4db73",
      title: "Escrow System",
      details: [
        "Secure and Scalable Backend Architect: Architected a secure and scalable backend application using Node.js (Typescript), featuring JWT authentication, Redis caching, and MongoDB for efficient data management and enhanced performance.",
        "Robust Wallet and Escrow System: Designed and implemented a comprehensive wallet system with escrow functionality, utilizing BullMQ and Redis for asynchronous task handling to ensure secure and reliable fund transactions (funding, release, refund).",
        "Advanced API Development & Monitoring: Developed RESTful APIs with Zod validation for data integrity and integrated Prometheus metrics via prom-client for comprehensive application monitoring with Grafana, ensuring high reliability and insightful performance tracking.",
      ],
      skills: [
        {
          languageName: "NodeJS",
          link: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
        },
        {
          languageName: "TypeScript",
          link: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
        },
        {
          languageName: "MongoDB",
          link: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
        },
        {
          languageName: "Redis",
          link: "https://img.icons8.com/?size=100&id=pHS3eRpynIRQ&format=png&color=000000",
        },
        {
          languageName: "Grafana",
          link: "https://img.icons8.com/?size=100&id=9uVrNMu3Zx1K&format=png&color=000000",
        },
      ],
      link: "",
      __v: 0,
    },
    {
      _id: "67b619cb0d16cfecd2a4db67",
      title: "YouTube Comment analyser",
      details: [
        "Built a system to accept YouTube links, scrape comments with Selenium, and Segmentation analysis using TextBlob.",
        "Displayed categorized sentiment results on a web interface using Flask and ReactJS.",
      ],
      skills: [
        {
          languageName: "Flask",
          link: "https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000",
        },
        {
          languageName: "Selenium",
          link: "",
        },
        {
          languageName: "ReactJS",
          link: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
        },
        {
          languageName: "NLP",
          link: "",
        },
      ],
      link: "",
      __v: 0,
    },
    {
      _id: "67b6180e0f1d9fa6528fcd61",
      title: "Shopin App",
      details: [
        "Responsive, Scalable with user, Provider, clean architecture,Language localization",
        "Saved user data in Secure Storage. Theme, Favourites, Cart, history, check delivery status.",
        "Can make Group of members and message, add products to group cart, make place order in group with Coupon and Coins.",
      ],
      skills: [
        {
          languageName: "Flutter",
          link: "https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000",
        },
        {
          languageName: "Dart",
          link: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000",
        },
        {
          languageName: "Firestore",
          link: "https://img.icons8.com/?size=100&id=87330&format=png&color=000000",
        },
      ],
      link: "https://github.com/tarun824/Shopin_buyer_app",
      __v: 0,
    },
  ],
  mobile: [
    {
      _id: "67b6180e0f1d9fa6528fcd61",
      title: "Shopin App",
      details: [
        "Responsive, Scalable with user, Provider, clean architecture,Language localization",
        "Saved user data in Secure Storage. Theme, Favourites, Cart, history, check delivery status.",
        "Can make Group of members and message, add products to group cart, make place order in group with Coupon and Coins.",
      ],
      skills: [
        {
          languageName: "Flutter",
          link: "https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000",
        },
        {
          languageName: "Dart",
          link: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000",
        },
      ],
      link: "https://github.com/tarun824/Shopin_buyer_app",
      __v: 0,
    },
    {
      _id: "67b6180e0f1d9fa6528fcd61",
      title: "CabTo",
      details: [
        "Developed app using Google Maps API to show users the route between their source and destination, and with three transportation options and built with Clean Architecture.  ",
        ,
        " Dark/Light Theme (Including for map), Language localization. ",
      ],
      skills: [
        {
          languageName: "Flutter",
          link: "https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000",
        },
        {
          languageName: "Dart",
          link: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000",
        },
      ],
      link: "https://github.com/tarun824/Shopin_buyer_app",
      __v: 0,
    },
    {
      _id: "67b6180e0f1d9fa6528fcd61",
      title: "Smartphone LED Control using ESP32 ",
      details: [
        "Developed a Flutter App that can communicate with a Firebase Realtime Database and wrote Arduino program to communicate with Firebase Realtime Database and ESP32 microcontroller ",
      ],
      skills: [
        {
          languageName: "Flutter",
          link: "https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000",
        },
        {
          languageName: "Dart",
          link: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000",
        },
      ],
      link: "https://github.com/tarun824/Shopin_buyer_app",
      __v: 0,
    },
  ],
  "ai ml": [
    {
      title: "Cardiovascular Prediction",
      details: [
        "Data Analysis: Conducted analysis to identify key features influencing cardiovascular health outcomes.",
        "Model Implementation: Implemented a Decision Tree classifier to predict cardiovascular conditions.",
        "Initial Results: Achieved an initial accuracy of 63% with the baseline model.",
        "Performance Improvement: Enhanced accuracy to 72% through hyperparameter tuning for optimal model performance.",
      ],
      skills: [
        {
          languageName: "Python",
          link: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
        },
        {
          languageName: "Scikit learn",
          link: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        },
        {
          languageName: "Flask",
          link: "https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000",
        },
        {
          languageName: "ReactJS",
          link: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
        },
      ],
      link: "",
    },
    {
      title: "Pet recommendation system ",
      details: [
        "I implemented a regression-based model to predict pet suitability based on user preferences.",
        "I transformed categorical variables into numerical formats using encoding techniques, enabling effective analysis by the model.",
        "I trained the model on a dataset of pet attributes and user preferences, rigorously evaluating its performance using R-squared, mean absolute error (MAE), and mean squared error (MSE) for accuracy.",
      ],
      skills: [
        {
          languageName: "Python",
          link: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
        },
        {
          languageName: "Scikit learn",
          link: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        },
      ],
      link: "",
    },
    {
      _id: "67b716bb9d2b952fcf24ccff",
      title: "Automated Question Bank Generator",
      details: [
        "Designed and implemented a question bank generator application that accepts chapter inputs to create tailored question sets for specific lessons.",
        "Leveraged Ollama and Llama 3.2 to enhance automated question generation, improving educational content delivery and user interaction.",
        "Streamlined the learning process by providing educators with customizable question banks, fostering better assessment and engagement for students.",
      ],
      skills: [
        {
          languageName: "Python",
          link: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
        },
        {
          languageName: "Flask",
          link: "https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000",
        },
        {
          languageName: "ReactJS",
          link: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
        },
        {
          languageName: "Ollama",
          link: "https://cdn.brandfetch.io/idrRDmZ2_F/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1740053459943",
        },
        {
          languageName: "Llama 3.2",
          link: "data:image/jpeg;base64,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",
        },
      ],
      link: "",
      __v: 0,
    },
    {
      title: "YouTube Comment analyser",
      details: [
        "Built a system to accept YouTube links, scrape comments with Selenium, and Segmentation analysis using TextBlob.",
        "Displayed categorized sentiment results on a web interface using Flask and ReactJS.",
      ],
      skills: [
        {
          languageName: "Flask",
          link: "https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000",
        },
        {
          languageName: "Selenium",
          link: "",
        },
        {
          languageName: "ReactJS",
          link: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
        },
        {
          languageName: "NLP",
          link: "",
        },
      ],
      link: "",
    },
  ],
  "full stack - web": [
    {
      title: "Bus booking Website",
      details: [
        "Developed a responsive landing page for a bus booking website using Next.js, TypeScript, and Tailwind CSS",
        "Improving user engagement and Interaction.",
      ],
      skills: [
        {
          languageName: "Next.js",
          link: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
        },
        {
          languageName: "TailwindCSS",
          link: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
        },
        {
          languageName: "TypeScript",
          link: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
        },
      ],
      link: "",
    },
    {
      title: "Course Selling website",
      details: [
        "Developed a Course Selling Website . It has Admin ,User Portal.",
        "Admin: Signup, login, Add course, get all course",
        "Users: signup ,login ,buy courses ,purchased courses.",
      ],
      skills: [
        {
          languageName: "MongoDB",
          link: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
        },
        {
          languageName: "NodeJS",
          link: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
        },
        {
          languageName: "ExpressJS",
          link: "https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000",
        },
        {
          languageName: "ReactJS",
          link: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
        },
      ],
      link: "",
    },
    {
      title: "Hotel Heaven",
      details: [
        "Developed a robust backend system that includes authentication for both admin and staff, allowing for secure management of hotel operations.",
        "Staff Functionality: Implemented features enabling staff to add new customers via phone number verification, manage room bookings, check availability with filters, and facilitate check-outs.",
        "Customer Self-Service: Enabled customers to sign up and log in independently using OTP verification, allowing them to book rooms directly and streamline the reservation process.",
      ],
      skills: [
        {
          languageName: "MongoDB",
          link: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
        },
        {
          languageName: "NodeJS",
          link: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
        },
        {
          languageName: "ExpressJS",
          link: "https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000",
        },
        {
          languageName: "JavaScript",
          link: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
        },
      ],
      link: "https://github.com/tarun824/hotel_heaven",
    },
    {
      title: "Pet Shop Backend",
      details: [
        "Developed RESTful APIs on pets ,sellers and users, implementing data validation with Zod for enhanced reliability.",
        "Utilized Docker to streamline deployment processes, ensuring consistent environments across development and production.",
        "Implemented Redis for caching pet data to achieve faster response times and organized the application into modules for better readability.",
        "Tech Stack: PostgreSQL, Prisma, Zod, TypeScript, Node.js, Express, Docker, Docker Compose, Redis.",
      ],
      skills: [
        {
          languageName: "NodeJS",
          link: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
        },
        {
          languageName: "ExpressJS",
          link: "https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000",
        },
        {
          languageName: "TypeScript",
          link: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
        },
        { languageName: "Zod", link: "" },
        {
          languageName: "PostgreSQL",
          link: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
        },
        {
          languageName: "Prisma",
          link: "https://img.icons8.com/?size=100&id=YKKmRFS8Utmm&format=png&color=000000",
        },
        {
          languageName: "Docker",
          link: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
        },
        {
          languageName: "Redis",
          link: "https://img.icons8.com/?size=100&id=pHS3eRpynIRQ&format=png&color=000000",
        },
        {
          languageName: "Grafana",
          link: "https://img.icons8.com/?size=100&id=9uVrNMu3Zx1K&format=png&color=000000",
        },
      ],
      link: "",
    },
    {
      title: "Escrow System",
      details: [
        "Secure and Scalable Backend Architect: Architected a secure and scalable backend application using Node.js (Typescript), featuring JWT authentication, Redis caching, and MongoDB for efficient data management and enhanced performance.",
        "Robust Wallet and Escrow System: Designed and implemented a comprehensive wallet system with escrow functionality, utilizing BullMQ and Redis for asynchronous task handling to ensure secure and reliable fund transactions (funding, release, refund).",
        "Advanced API Development & Monitoring: Developed RESTful APIs with Zod validation for data integrity and integrated Prometheus metrics via prom-client for comprehensive application monitoring with Grafana, ensuring high reliability and insightful performance tracking.",
      ],
      skills: [
        {
          languageName: "NodeJS",
          link: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
        },
        {
          languageName: "TypeScript",
          link: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
        },
        {
          languageName: "MongoDB",
          link: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
        },
        {
          languageName: "Redis",
          link: "https://img.icons8.com/?size=100&id=pHS3eRpynIRQ&format=png&color=000000",
        },
        {
          languageName: "Grafana",
          link: "https://img.icons8.com/?size=100&id=9uVrNMu3Zx1K&format=png&color=000000",
        },
      ],
      link: "",
    },
  ],
};

function ProjectComponent() {
  const [projectFieldSelected, setProjectFieldSelected] = useState("all");
  const allSkillsName = ["All", "AI ML", "Full Stack - Web", "Mobile"];
  return (
    <div className="flex flex-col mx-20 ">
      {/* Field selection area */}
      <div className="flex justify-evenly mx-10">
        {allSkillsName.map((data) => {
          return (
            <ProjectFieldSelectionButton
              key={data}
              //   isSelected={projectFieldSelected == data.toLowerCase()}
              isSelected={projectFieldSelected}
              text={data}
              setSelctedItem={setProjectFieldSelected}
            />
          );
        })}
      </div>
      {/* projects based on selection */}
      <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2  ">
        {(allProjects as any)[projectFieldSelected].map(
          (project: ProjectInterface) => {
            return <ProjectSingleCard key={project.title} project={project} />;
          }
        )}
      </div>
    </div>
  );
}

export default ProjectComponent;
