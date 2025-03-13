import React from "react";
import SkillSingleSkillBox from "./SkillSingleSkillBox";

const webSkillsData = [
  {
    languageName: "JavaScript",
    link: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
  },
  {
    languageName: "TypeScript",
    link: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
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
  {
    languageName: "Next.js",
    link: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
  },
  {
    languageName: "TailwindCSS",
    link: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
  },
  {
    languageName: "Socket.IO",
    link: "https://e7.pngegg.com/pngimages/307/948/png-clipart-socket-io-node-js-javascript-network-socket-websocket-electrical-cable-angle-triangle.png",
  },
  {
    languageName: "Flask",
    link: "https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000",
  },
  {
    languageName: "Prisma",
    link: "https://img.icons8.com/?size=100&id=YKKmRFS8Utmm&format=png&color=000000",
  },

  {
    languageName: "MySQL",
    link: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
  },
  {
    languageName: "PostgreSQL",
    link: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
  },
  {
    languageName: "MongoDB",
    link: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
  },

  {
    languageName: "Firestore",
    link: "https://img.icons8.com/?size=100&id=87330&format=png&color=000000",
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
  {
    languageName: "Redux",
    link: "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",
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
