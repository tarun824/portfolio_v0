"use client";
import React, { useState } from "react";
import NavbarButton from "./NavbarButton";
import DownloadResumeOnClick from "@/utils/DownloadResumeOnClick";

function Navbar({
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
  // const navbar_items=[{"name"}]
  const [selctedItem, setSelctedItem] = useState("home");
  const scrollToSection = (section: keyof typeof refs) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex justify-center my-7">
      <NavbarButton
        text="Home"
        setSelctedItem={setSelctedItem}
        selectedItem={selctedItem}
        onClick={() => scrollToSection("homeSection")}
      />
      <NavbarButton
        text="Education"
        setSelctedItem={setSelctedItem}
        selectedItem={selctedItem}
        onClick={() => scrollToSection("educationSection")}
      />
      <NavbarButton
        text="Experience"
        setSelctedItem={setSelctedItem}
        selectedItem={selctedItem}
        onClick={() => scrollToSection("experienceSection")}
      />
      <NavbarButton
        text="Skills"
        setSelctedItem={setSelctedItem}
        selectedItem={selctedItem}
        onClick={() => scrollToSection("skillsSection")}
      />
      <NavbarButton
        text="Projects"
        setSelctedItem={setSelctedItem}
        selectedItem={selctedItem}
        onClick={() => scrollToSection("projectSection")}
      />
      {/* <NavbarButton
        text="Certification"
        setSelctedItem={setSelctedItem}
        selectedItem={selctedItem}
      /> */}
      <NavbarButton
        text="Resume"
        setSelctedItem={setSelctedItem}
        selectedItem={selctedItem}
        // TODO: make a function to open resume or download
        onClick={() => {
          DownloadResumeOnClick();
        }}
      />

      {/* <a
        onClick={() => {
          setSelctedItem("home");
        }}
        className={`${
          selctedItem ? "text-[#4FC3F7]" : "text-[#C1C1C1]"
        } cursor-pointer font-semibold font-sans text-[18px]`}
      >
        Home
      </a> */}
    </div>
  );
}

export default Navbar;
