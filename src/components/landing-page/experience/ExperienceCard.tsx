import React from "react";
import ExperienceCompany from "./ExperienceCompany";
import { HiMiniCalendarDays } from "react-icons/hi2";
import { ExperienceInterface } from "@/interfaces/ExperienceInterface";
import ExperienceBulletPoint from "./ExperienceBulletPoint";

function ExperienceCard({
  companyName,
  companyProfileImgLocation,
  workLocation,
  duration,
  role,
  details,
}: ExperienceInterface) {
  return (
    <div className="flex flex-col  rounded-3xl border-2 my-3 border-[#2B2B2B] bg-linear-to-br from-[#2d2d2d] p-5">
      <div className="flex flex-col sm:flex-row sm:justify-between ">
        <ExperienceCompany
          companyName={companyName}
          companyProfileImgLocation={companyProfileImgLocation}
          workLocation={workLocation}
        />
        <div className="flex mt-2 sm:mt-0 bg-[#ffe7a9] rounded-xl px-3 py-1 h-min">
          <HiMiniCalendarDays className="text-black mt-0.5 h-5 w-5" />
          <p className="text-sm font-bold font-inter-sans mt-0.5 pl-1.5 text-black">
            {/* Nov 2024 – Feb 2025 */}
            {duration}
          </p>
        </div>
        {/* <div className="flex  bg-black rounded-xl px-3 py-1 h-min">
          <HiMiniCalendarDays className="text-[#ffb703] mt-0.5 h-5 w-5" />
          <p className="text-sm font-bold font-inter-sans mt-0.5 pl-1.5 text-[#ffb703]">
            Nov 2024 – Feb 2025
          </p>
        </div> */}
      </div>
      {/* Role */}
      <div className="flex items-center my-2">
        <img
          src="/images/landing-page/profile-image.jpg"
          className="rounded-full w-10 h-10 "
        />
        <p className="font-semibold font-inter-sans text-[20px] pl-2">
          {/* AI/ML Intern{" "} */}
          {role}
        </p>
      </div>
      {/* details  */}
      {details.map((detail) => {
        return <ExperienceBulletPoint key={detail} text={detail} />;
      })}
      {/* <ExperienceBulletPoint text="work on bullshit man work on bullshit work on bullshit work on buork on bullshit man work on bullshit work on bullshit work on buork on bullshit man work on bullshit work on bullshit work on buork on bullshit man work on bullshit work on bullshit work on buork on bullshit man work on bullshit work on bullshit work on buork on bullshit man work on bullshit work on bullshit work on buork on bullshit man work on bullshit work on bullshit work on buork on bullshit man work on bullshit work on bullshit work on buork on bullshit man work on bullshit work on bullshit work on bullshit" />
      <ExperienceBulletPoint text="work on bullshit man work on bullshit work on bullshit work on bullshit" />
      <ExperienceBulletPoint text="work on bullshit man work on bullshit work on bullshit work on bullshit" />
      <ExperienceBulletPoint text="work on bullshit man work on bullshit work on bullshit work on bullshit" />
      <ExperienceBulletPoint text="work on bullshit man work on bullshit work on bullshit work on bullshit" /> */}
    </div>
  );
}

export default ExperienceCard;
