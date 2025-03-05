"use client";

import EducationComponent from "@/components/landing-page/education/EducationComponent";
import ExperienceComponent from "@/components/landing-page/experience/ExperienceComponent";
import HeadingWithSubtitle from "@/components/landing-page/HeadingWithSubtitle";
import MainContent from "@/components/landing-page/MainContent";
import SkillComponent from "@/components/landing-page/skills/SkillComponent";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <MainContent />
      <HeadingWithSubtitle
        heading="Education"
        subTitle="Uncover my academic strengths"
      />
      <EducationComponent />
      <HeadingWithSubtitle
        heading="Experience"
        subTitle="Explore my professional milestones"
      />
      <ExperienceComponent />

      <HeadingWithSubtitle
        heading="Skills & Abilities"
        subTitle="Explore the expertise I bring to the table"
      />
      <SkillComponent />
    </div>
  );
}
