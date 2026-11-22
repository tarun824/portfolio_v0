"use client";
import React, { useState } from "react";
import ProjectFieldSelectionButton from "./ProjectFieldSelectionButton";
import ProjectSingleCard from "./ProjectSingleCard";
import { ProjectInterface } from "@/interfaces/ProjectInterface";

const allProjects = {
  all: [
        {
      "title": "School Information Multi-Agent System",
      "details": [
        "Architected Multi-Agent Routing: Built central Router Agent with LangChain & GPT-4o-mini for intent classification and domain-specific routing.",
        "Developed Specialized Agents: Implemented Student Agent for roll-number verification and profile lookups with narrow context windows.",
        "Engineered Custom Toolsets: Created Python tools (get_student_data, get_class_subjects) for precise structured data retrieval.",
        "Optimized Orchestration Flow: Designed centralized kickoff_flow for seamless end-to-end request-response lifecycle management."
      ],
      "skills": [
        {
          "languageName": "Python",
          "link": "/images/skills/python.png"
        },
        {
          "languageName": "LangChain",
          "link": "/images/skills/langchain-icon.png"
        },
        {
          "languageName": "OpenAI",
          "link": "/images/skills/openai.png"
        },
        {
          "languageName": "Agents",
          "link": "/images/skills/agents.png"
        }
      ],
      "link": "https://github.com/tarun824/School-Agents"
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
          link: "/images/skills/nodejs.png",
        },
        {
          languageName: "TypeScript",
          link: "/images/skills/typescript.png",
        },
        {
          languageName: "MongoDB",
          link: "/images/skills/mongodb.png",
        },
        {
          languageName: "Redis",
          link: "/images/skills/redis.png",
        },
        {
          languageName: "Grafana",
          link: "/images/skills/grafana.png",
        },
      ],
      link: "",
      __v: 0,
    },
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
          link: "/images/skills/python.png",
        },
        {
          languageName: "Flask",
          link: "/images/skills/flask.png",
        },
        {
          languageName: "ReactJS",
          link: "/images/skills/reactjs.png",
        },
        {
          languageName: "Ollama",
          link: "https://cdn.brandfetch.io/idrRDmZ2_F/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1740053459943",
        },
        {
          languageName: "Llama 3.2",
          link: "/images/skills/llama-3-2.jpg",
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
          link: "/images/skills/flutter.png",
        },
        {
          languageName: "Dart",
          link: "/images/skills/dart.png",
        },
        {
          languageName: "Firestore",
          link: "/images/skills/firestore.png",
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
          link: "/images/skills/flutter.png",
        },
        {
          languageName: "Dart",
          link: "/images/skills/dart.png",
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
          link: "/images/skills/flutter.png",
        },
        {
          languageName: "Dart",
          link: "/images/skills/dart.png",
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
          link: "/images/skills/flutter.png",
        },
        {
          languageName: "Dart",
          link: "/images/skills/dart.png",
        },
      ],
      link: "https://github.com/tarun824/Shopin_buyer_app",
      __v: 0,
    },
  ],
  "ai ml": [
    {
      "title": "School Information Multi-Agent System",
      "details": [
        "Architected Multi-Agent Routing: Built central Router Agent with LangChain & GPT-4o-mini for intent classification and domain-specific routing.",
        "Developed Specialized Agents: Implemented Student Agent for roll-number verification and profile lookups with narrow context windows.",
        "Engineered Custom Toolsets: Created Python tools (get_student_data, get_class_subjects) for precise structured data retrieval.",
        "Optimized Orchestration Flow: Designed centralized kickoff_flow for seamless end-to-end request-response lifecycle management."
      ],
      "skills": [
        {
          "languageName": "Python",
          "link": "/images/skills/python.png"
        },
        {
          "languageName": "LangChain",
          "link": "/images/skills/langchain-icon.png"
        },
        {
          "languageName": "OpenAI",
          "link": "/images/skills/openai.png"
        },
        {
          "languageName": "Agents",
          "link": "/images/skills/agents.png"
        }
      ],
      "link": "https://github.com/tarun824/School-Agents"
    },
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
          link: "/images/skills/python.png",
        },
        {
          languageName: "Scikit learn",
          link: "/images/skills/scikit-learn.svg",
        },
        {
          languageName: "Flask",
          link: "/images/skills/flask.png",
        },
        {
          languageName: "ReactJS",
          link: "/images/skills/reactjs.png",
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
          link: "/images/skills/python.png",
        },
        {
          languageName: "Scikit learn",
          link: "/images/skills/scikit-learn.svg",
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
          link: "/images/skills/python.png",
        },
        {
          languageName: "Flask",
          link: "/images/skills/flask.png",
        },
        {
          languageName: "ReactJS",
          link: "/images/skills/reactjs.png",
        },
        {
          languageName: "Ollama",
          link: "https://cdn.brandfetch.io/idrRDmZ2_F/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1740053459943",
        },
        {
          languageName: "Llama 3.2",
          link: "/images/skills/llama-3-2.jpg",
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
          link: "/images/skills/flask.png",
        },
        {
          languageName: "Selenium",
          link: "",
        },
        {
          languageName: "ReactJS",
          link: "/images/skills/reactjs.png",
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
          link: "/images/skills/nextjs.png",
        },
        {
          languageName: "TailwindCSS",
          link: "/images/skills/tailwindcss.png",
        },
        {
          languageName: "TypeScript",
          link: "/images/skills/typescript.png",
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
          link: "/images/skills/mongodb.png",
        },
        {
          languageName: "NodeJS",
          link: "/images/skills/nodejs.png",
        },
        {
          languageName: "ExpressJS",
          link: "/images/skills/expressjs.png",
        },
        {
          languageName: "ReactJS",
          link: "/images/skills/reactjs.png",
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
          link: "/images/skills/mongodb.png",
        },
        {
          languageName: "NodeJS",
          link: "/images/skills/nodejs.png",
        },
        {
          languageName: "ExpressJS",
          link: "/images/skills/expressjs.png",
        },
        {
          languageName: "JavaScript",
          link: "/images/skills/javascript.png",
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
          link: "/images/skills/nodejs.png",
        },
        {
          languageName: "ExpressJS",
          link: "/images/skills/expressjs.png",
        },
        {
          languageName: "TypeScript",
          link: "/images/skills/typescript.png",
        },
        { languageName: "Zod", link: "" },
        {
          languageName: "PostgreSQL",
          link: "/images/skills/postgresql.png",
        },
        {
          languageName: "Prisma",
          link: "/images/skills/prisma.png",
        },
        {
          languageName: "Docker",
          link: "/images/skills/docker.png",
        },
        {
          languageName: "Redis",
          link: "/images/skills/redis.png",
        },
        {
          languageName: "Grafana",
          link: "/images/skills/grafana.png",
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
          link: "/images/skills/nodejs.png",
        },
        {
          languageName: "TypeScript",
          link: "/images/skills/typescript.png",
        },
        {
          languageName: "MongoDB",
          link: "/images/skills/mongodb.png",
        },
        {
          languageName: "Redis",
          link: "/images/skills/redis.png",
        },
        {
          languageName: "Grafana",
          link: "/images/skills/grafana.png",
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
    <div className="flex flex-col mx-2  sm:mx-20 ">
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
      <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  ">
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
