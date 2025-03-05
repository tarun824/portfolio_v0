import React from "react";
import bg from "../../assets/images/security-team.jpg";
import Image from "next/image";
import ButtonFullRounded from "../ButtonFullRounded";

function MainContent() {
  function downloadResumeButton() {}
  return (
    //     <div className="">
    //       <Image
    //         src="/images/landing-page/landing-main.svg"
    //         alt="Landing Page Background"
    //         width={500}
    //         height={500}

    // ></Image>    </div>
    <div className="relative mx-40 ">
      <Image
        src="/images/landing-page/landing-main.svg"
        alt="Landing Page Background"
        width={600}
        height={500}
        className="absolute w-screen h-screen  overflow-auto justify-center opacity-70"
      />
      <div className=" flex flex-col relative z-10 items-center  justify-center h-full">
        <img
          src="/images/landing-page/profile-image.jpg"
          className="rounded-full w-44 h-44 mt-8 mb-2"
        />
        <p className="text-6xl font-bold font-poppins text-[#FFFFFF]">
          Tarun R S
        </p>
        {/* sub heading */}
        <div className="flex my-1.5">
          <p className="text-2xl font-semibold font-poppins bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent">
            AI & ML Enthusiast
          </p>
          <p className="text-2xl pl-1 pr-0.5 "> 🚀 </p>
          {"  "}
          <p className="text-2xl pr-1 font-semibold font-poppins bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent">
            | Full Stack Developer
          </p>
          <p className="text-2xl  ">🧑‍💻</p>
        </div>
        <p className="text-center mx-40 mb-8 font-poppins font-medium text-[19px]">
          As a passionate data scientist, with expertise in machine learning,
          AI, and data analytics, I thrive on the challenges of exploring
          complex data landscapes and uncovering meaningful patterns that drive
          innovation
        </p>
        <ButtonFullRounded
          text="Download Resume"
          onClick={downloadResumeButton}
        />
      </div>
    </div>
  );
}

export default MainContent;
