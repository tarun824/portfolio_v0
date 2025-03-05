import React from "react";
import { IoCalendar } from "react-icons/io5";
import { IoSchool } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";

function EducationCard() {
  return (
    <div className="flex flex-col mx-4 w-[45%] rounded-3xl border-2 border-[#2B2B2B] bg-linear-to-br from-[#2d2d2d] p-5">
      <div className="flex justify-end mb-2">
        <div className="flex  bg-black rounded-xl px-3 py-1">
          <IoCalendar className="text-[#ffb703] mt-0.5" />
          <p className="text-sm font-inter-sans pl-1.5 text-[#ffb703]">
            2021-2025
          </p>
        </div>
      </div>
      <p className="font-bold font-inter-sans text-2xl">
        Bachelor of Engineering in Information Science and Engineering
      </p>
      <div className="flex items-center">
        <IoSchool className="text-[#ffb703] my-2 rounded-full w-8 h-8 p-[6px] bg-black" />
        <p className="text-sm font-inter-sans pl-1.5 ">
          Global Academy of Technology
        </p>
      </div>
      <div className="flex items-center">
        <TbReportAnalytics className="text-[#ffb703] rounded-full w-8 h-8 p-[6px] bg-black" />
        <p className="text-sm font-inter-sans pl-1.5 ">Current CGPA: 8.8</p>
      </div>
    </div>
  );
}

export default EducationCard;
