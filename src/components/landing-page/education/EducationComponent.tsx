import React from "react";
import EducationCard from "./EducationCard";

function EducationComponent() {
  const allEducationData = [
    {
      year: "2021-2025",
      title: "Bachelor of Engineering in Information Science and Engineering",
      college: "Global Academy of Technology",
      cgpa: "8.8",
    },
    {
      year: "2024-2025",
      title: "Minor in Artificial Intelligence",
      college: "Indian Institute of Technology Ropar(IIT Ropar)",
      cgpa: "9",
    },
  ];
  return (
    <div className="flex mx-20 justify-evenly lg:flex-row flex-col">
      <EducationCard education={allEducationData[0]} />
      <EducationCard education={allEducationData[1]} />
    </div>
  );
}

export default EducationComponent;
