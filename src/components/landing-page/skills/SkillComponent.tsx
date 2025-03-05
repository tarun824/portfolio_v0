import React from "react";
import SkillMobile from "./SkillMobile";

function SkillComponent() {
  return (
    <div className="flex mb-20 mx-20 justify-evenly">
      <SkillMobile />
      <SkillMobile />
      <SkillMobile />
    </div>
  );
}

export default SkillComponent;
