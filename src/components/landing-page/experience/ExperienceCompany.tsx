import React from "react";
import { IoLocationSharp } from "react-icons/io5";

function ExperienceCompany({
  companyName,
  companyProfileImgLocation,
  workLocation,
}: {
  companyName: string;
  companyProfileImgLocation: string;
  workLocation: string;
}) {
  return (
    <div className="flex  w-max rounded-full p-1 bg-black">
      <img
        src={companyProfileImgLocation}
        // "/images/landing-page/havric-ai-profile.png"
        className="h-[55px] w-[55px] bg-white rounded-full"
      />
      <div className="flex flex-col mr-2 px-1.5 my-0.5 ">
        <p className=" text-[18px] mb-0 ml-0.5 font-inter-sans font-bold text-[#ffb703]">
          {/* Havric AI */}
          {companyName}
        </p>
        {/* location */}
        <div className="flex items-center  ">
          <IoLocationSharp className="text-[#ffb703] rounded-full w-5 h-5 p-[2px] bg-[#2B2B2B]" />
          <p className="text-[12px] font-inter-sans pl-1 ">
            {/* Bangalore, Karnataka, India */}
            {workLocation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCompany;
