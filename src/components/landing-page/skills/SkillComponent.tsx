import React from "react";
import SkillMobile from "./SkillMobile";
import SkillMWeb from "./SkillWeb";
import SkillAiMl from "./SkillAiMl";

function SkillComponent() {
  return (
    <div className=" mx-4 sm:mx-20 p-2 rounded-2xl bg-linear-to-b from-[#57059e] to-[#4a00e0]">
      {/* <div className="flex justify-evenly p-5"> */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        <SkillAiMl />
        <SkillMWeb />
        <SkillMobile />
      </div>
    </div>
  );
}

export default SkillComponent;
