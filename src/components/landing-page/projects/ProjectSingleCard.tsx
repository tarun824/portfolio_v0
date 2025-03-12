import React from "react";
import ExperienceBulletPoint from "../experience/ExperienceBulletPoint";
import { ProjectInterface } from "@/interfaces/ProjectInterface";
import ProjectLanguageCard from "./ProjectLanguageCard";

function ProjectSingleCard(project: { project: ProjectInterface }) {
  return (
    <div className="flex flex-col mx-4 my-4 rounded-3xl border-2 border-[#2B2B2B] bg-linear-to-br from-[#2d2d2d] p-5">
      {/* <div className="flex justify-end mb-2">
        <div className="flex  bg-black rounded-xl px-3 py-1">
          <IoCalendar className="text-[#ffb703] mt-0.5" />
          <p className="text-sm font-inter-sans pl-1.5 text-[#ffb703]">
            2021-2025
          </p>
        </div>
      </div> */}

      <div className="flex items-center">
        <img
          src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
          // "/images/landing-page/havric-ai-profile.png"
          className="h-[55px] w-[55px] bg-white rounded-full"
        />
        <p className="font-bold font-inter-sans text-xl ml-2">
          {project.project.title}
        </p>
      </div>
      {/* skills space */}
      <p className=" text-[15px] my-2 ml-0.5 font-inter-sans   ">
        {/* Havric AI */}
        Technologies I have used
      </p>
      {/* skills area */}
      <div className="flex flex-wrap gap-2 my-1">
        {project.project.skills &&
          project.project.skills.map((skill) => (
            <ProjectLanguageCard
              key={skill.languageName}
              language={skill.languageName}
              languageLink={skill.link}
            />
          ))}
      </div>
      {/* details */}
      {project.project.details.map((detail) => {
        return <ExperienceBulletPoint key={detail} text={detail} />;
      })}
      {/* <ExperienceBulletPoint text="Developed a responsive landing page for a bus booking website using Next.js, TypeScript, and Tailwind CSS" />
      <ExperienceBulletPoint text="Improving user engagement and Interaction." /> */}
      {/* <div className="flex items-center">
        <IoSchool className="text-[#ffb703] my-2 rounded-full w-8 h-8 p-[6px] bg-black" />
        <p className="text-sm font-inter-sans pl-1.5 ">
          Global Academy of Technology
        </p>
      </div>
      <div className="flex items-center">
        <TbReportAnalytics className="text-[#ffb703] rounded-full w-8 h-8 p-[6px] bg-black" />
        <p className="text-sm font-inter-sans pl-1.5 ">Current CGPA: 8.8</p>
      </div> */}
    </div>
  );
}

export default ProjectSingleCard;
