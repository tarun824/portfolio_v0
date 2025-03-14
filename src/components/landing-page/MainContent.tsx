import React from "react";
import bg from "../../assets/images/security-team.jpg";
import Image from "next/image";
import ButtonFullRounded from "../ButtonFullRounded";
import DownloadResumeOnClick from "@/utils/DownloadResumeOnClick";
import SocialMediaLinks from "../SocialMediaLinks";

function MainContent() {
  return (
    //     <div className="">
    //       <Image
    //         src="/images/landing-page/landing-main.svg"
    //         alt="Landing Page Background"
    //         width={500}
    //         height={500}

    // ></Image>    </div>
    <div className="relative mx-4 lg:mx-40">
      <Image
        src="/images/landing-page/landing-main.svg"
        alt="Landing Page Background"
        width={600}
        height={500}
        priority={true}
        className="absolute w-screen h-screen  overflow-auto justify-center opacity-70"
      />
      <div className=" flex flex-col relative z-10 items-center  justify-center h-full">
        <img
          src="/images/landing-page/profile-image.jpg"
          className="rounded-full w-16 h-16 sm:w-44 sm:h-44 mt-8 mb-2"
        />
        <p className="text-nowrap text-xl sm:text-2xl md:text-6xl font-bold font-poppins text-[#FFFFFF]">
          Tarun R S
        </p>
        {/* sub heading */}
        <div className="flex my-1.5 sm:mx-10">
          <p className=" text-center text-md md:text-2xl font-semibold font-poppins bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent">
            AI & ML Enthusiast
          </p>
          <p className="text-md md:text-2xl pl-1 pr-0.5 "> 🚀 </p>
          {"  "}
          <p className=" text-center text-md md:text-2xl pr-1 font-semibold font-poppins bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent">
            | Full Stack Developer
          </p>
          <p className="text-md md:text-2xl  ">🧑‍💻</p>
        </div>
        <p className="text-center mx-4 lg:mx-40 mb-8 font-poppins font-medium text-base md:text-2xl ">
          As an aspiring engineer with a strong foundation in cutting-edge
          technologies, I engage in AI, ML and Full-stack development projects,
          while exploring Generative AI for impactful solutions.
          {/* As an aspiring engineer with a strong foundation in cutting-edge
          technologies, I am actively engaged in Machine Learning, Artificial
          Intelligence and Full-stack development projects. I am also exploring
          the emerging field of Generative AI to drive impactful solutions. */}
          {/* As a passionate data scientist, with expertise in machine learning,
          AI, and data analytics, I thrive on the challenges of exploring
          complex data landscapes and uncovering meaningful patterns that drive
          innovation */}
        </p>
        <ButtonFullRounded
          text="Download Resume"
          onClick={DownloadResumeOnClick}
        />
        <SocialMediaLinks />
      </div>
    </div>
  );
}

export default MainContent;
