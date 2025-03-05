import React from "react";
import EducationCard from "./EducationCard";

function EducationComponent() {
  return (
    <div className="flex mx-20 justify-evenly lg:flex-row flex-col">
      <EducationCard />
      <EducationCard />
    </div>
  );
}

export default EducationComponent;
