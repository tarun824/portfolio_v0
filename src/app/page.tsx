"use client";

import FooterComponent from "@/components/footer/FooterComponent";
import EducationComponent from "@/components/landing-page/education/EducationComponent";
import ExperienceComponent from "@/components/landing-page/experience/ExperienceComponent";
import HeadingWithSubtitle from "@/components/landing-page/HeadingWithSubtitle";
import MainContent from "@/components/landing-page/MainContent";
import ProjectComponent from "@/components/landing-page/projects/ProjectComponent";
import SkillComponent from "@/components/landing-page/skills/SkillComponent";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const homeSection = useRef<HTMLDivElement>(null!);
  const educationSection = useRef<HTMLDivElement>(null!);
  const experienceSection = useRef<HTMLDivElement>(null!);
  const skillsSection = useRef<HTMLDivElement>(null!);
  const projectSection = useRef<HTMLDivElement>(null!);
  return (
    <div className="flex flex-col">
      <Navbar
        refs={{
          homeSection: homeSection,
          educationSection: educationSection,
          experienceSection: experienceSection,
          skillsSection: skillsSection,
          projectSection: projectSection,
        }}
      />
      <div ref={homeSection}></div>
      <MainContent />
      <div className="h-[70px]"></div>
      <HeadingWithSubtitle
        heading="Education"
        sectionScroll={educationSection}
        subTitle="Uncover my academic strengths"
      />
      <EducationComponent />
      <HeadingWithSubtitle
        heading="Experience"
        subTitle="Explore my professional milestones"
        sectionScroll={experienceSection}
      />

      <ExperienceComponent />

      <HeadingWithSubtitle
        heading="Skills & Abilities"
        subTitle="Explore the expertise I bring to the table"
        sectionScroll={skillsSection}
      />
      <SkillComponent />
      <HeadingWithSubtitle
        heading="Projects"
        subTitle="Some of my Work"
        sectionScroll={projectSection}
      />
      <ProjectComponent />
      <FooterComponent
        refs={{
          homeSection: homeSection,
          educationSection: educationSection,
          experienceSection: experienceSection,
          skillsSection: skillsSection,
          projectSection: projectSection,
        }}
      />
    </div>
  );
}
