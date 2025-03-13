import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";

function SocialMediaLinks() {
  return (
    <div
      className="flex items-center cursor-pointer mt-3"
      onClick={() => {
        const phoneNumber = "+91-7676286822";
        window.location.href = `tel:${phoneNumber}`;
      }}
    >
      <FaLinkedin
        onClick={() => {
          window.open("https://www.linkedin.com/in/tarun-rs/");
        }}
        className="text-[#4FC3F7]  rounded-full w-10 h-10 p-[10px] bg-black"
      />
      <FaGithub
        onClick={() => {
          window.open("https://github.com/tarun824");
        }}
        className="text-[#4FC3F7]  rounded-full mx-2 w-10 h-10 p-[10px] bg-black"
      />
      <IoMdMail
        onClick={() => {
          const email = "tarun.rs82004@gmail.com";
          window.location.href = `mailto:${email}`;
        }}
        className="text-[#4FC3F7]  rounded-full  w-10 h-10 p-[10px] bg-black"
      />

      {/* <IoShareSocialSharp className="text-[#4FC3F7]  rounded-full  w-10 h-10 p-[10px] bg-black" /> */}
    </div>
  );
}

export default SocialMediaLinks;
