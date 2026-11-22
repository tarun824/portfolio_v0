import React from "react";
import SkillSingleSkillBox from "./SkillSingleSkillBox";

const webSkillsData = [
  {
    languageName: "JavaScript",
    link: "/images/skills/javascript.png",
  },
  {
    languageName: "TypeScript",
    link: "/images/skills/typescript.png",
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
  {
    languageName: "Next.js",
    link: "/images/skills/nextjs.png",
  },
  {
    languageName: "TailwindCSS",
    link: "/images/skills/tailwindcss.png",
  },
  {
    languageName: "Socket.IO",
    link: "/images/skills/socket-io.png",
  },
  {
    languageName: "Flask",
    link: "/images/skills/flask.png",
  },
  {
    languageName: "Prisma",
    link: "/images/skills/prisma.png",
  },

  {
    languageName: "MySQL",
    link: "/images/skills/mysql.png",
  },
  {
    languageName: "PostgreSQL",
    link: "/images/skills/postgresql.png",
  },
  {
    languageName: "MongoDB",
    link: "/images/skills/mongodb.png",
  },

  {
    languageName: "Firestore",
    link: "/images/skills/firestore.png",
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
  {
    languageName: "Redux",
    link: "/images/skills/redux.png",
  },
  {
    languageName: "FastAPI",
    link: "/images/skills/fastapi.svg",
  },
  {
    languageName: "Prometheus",
    link: "/images/skills/prometheus.svg",
  },
  {
    languageName: "Datadog",
    link: "/images/skills/datadog.svg",
  },
  {
    languageName: "NGINX",
    link: "/images/skills/nginx.svg",
  },
  {
    languageName: "Azure",
    link: "/images/skills/azure.svg",
  },
];

function SkillMWeb() {
  return (
    <div className="flex flex-col  bg-[rgba(0,0,22,0.4)] rounded-2xl">
      {/* <div
        className="border-[#2B2B2B] border-[1.5px]  w-min rounded-3xl px-5 py-2 font-medium"
        onClick={() => {}}
      > */}
      <p className="text-sm text-center mx-5 my-3 font-semibold font-inter-sans text-nowrap pl-1.5 text-[#ffb703]">
        Full Stack - Web
      </p>
      {/* </div> */}
      {/* listing of skills */}
      <div className="bg-opacity-50 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center place-items-center">
          {webSkillsData.map((data, index) => {
            return (
              <SkillSingleSkillBox
                key={index}
                linkForLanguageLogo={data.link}
                programmingLanguage={data.languageName}
              />
            );
          })}
          {/* <SkillSingleSkillBox />
          <SkillSingleSkillBox />
          <SkillSingleSkillBox />
          <SkillSingleSkillBox />
          <SkillSingleSkillBox /> */}
        </div>
      </div>
    </div>
  );
}

export default SkillMWeb;
