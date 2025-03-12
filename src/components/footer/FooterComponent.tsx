import React from "react";
import FooterQuickLinkButton from "./FooterQuickLinkButton";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function FooterComponent({
  refs,
}: {
  refs: {
    homeSection: React.RefObject<HTMLDivElement>;
    educationSection: React.RefObject<HTMLDivElement>;
    experienceSection: React.RefObject<HTMLDivElement>;
    skillsSection: React.RefObject<HTMLDivElement>;
    projectSection: React.RefObject<HTMLDivElement>;
  };
}) {
  const scrollToSection = (section: keyof typeof refs) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex mb-14 mt-20  mx-24 justify-between  ">
      {/*  */}
      <div className="w-56">
        <p className="text-2xl font-inter-sans">Tarun's Portfolio</p>
        <p className="text-sm py-6 font-inter-sans">
          Thank you for visiting my personal portfolio website. Connect with me
          over socials.
        </p>
        <p className="text-sm font-inter-sans">
          Keep Rising 🚀. Connect with me over live chat!
        </p>
      </div>
      {/* quick links */}
      {/* Home
Education
Experience
Skills
Projects */}
      <div className="w-56">
        <p className="text-2xl mb-6 font-inter-sans">Quick links</p>
        {/* links */}
        <FooterQuickLinkButton
          text="Home"
          link=""
          onClick={() => scrollToSection("homeSection")}
        />
        <FooterQuickLinkButton
          text="Education"
          link=""
          onClick={() => scrollToSection("educationSection")}
        />
        <FooterQuickLinkButton
          text="Experience"
          link=""
          onClick={() => scrollToSection("experienceSection")}
        />
        <FooterQuickLinkButton
          text="Skills"
          link=""
          onClick={() => scrollToSection("skillsSection")}
        />
        <FooterQuickLinkButton
          text="Projects"
          link=""
          onClick={() => scrollToSection("projectSection")}
        />
      </div>
      {/* contact info */}
      <div className="w-64">
        <p className="text-2xl mb-6 font-inter-sans">Contact Info</p>

        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            const phoneNumber = "+91-7676286822";
            window.location.href = `tel:${phoneNumber}`;
          }}
        >
          <IoCall className="text-[#ffb703]  rounded-full w-8 h-8 p-[6px] bg-black" />
          <p className="text-sm font-inter-sans pl-1.5 ">+91-7676286822</p>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            const email = "tarun.rs82004@gmail.com";
            window.location.href = `mailto:${email}`;
          }}
        >
          <IoMdMail className="text-[#ffb703] my-2 rounded-full w-8 h-8 p-[6px] bg-black" />
          <p className="text-sm font-inter-sans pl-1.5 ">
            tarun.rs82004@gmail.com
          </p>
        </div>
        <div className="flex items-center">
          <FaLocationDot className="text-[#ffb703] rounded-full w-8 h-8 p-[7px] bg-black" />
          <p className="text-sm font-inter-sans pl-1.5 ">
            Bengaluru Karnataka India
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
