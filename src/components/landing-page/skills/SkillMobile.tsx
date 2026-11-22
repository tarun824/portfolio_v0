import React from "react";
import SkillSingleSkillBox from "./SkillSingleSkillBox";

const mobileSkillsData = [
  {
    languageName: "Flutter",
    link: "/images/skills/flutter.png",
  },
  {
    languageName: "Dart",
    link: "/images/skills/dart.png",
  },
  {
    languageName: "Kotlin",
    link: "/images/skills/kotlin.svg",
  },
  {
    languageName: "Java",
    link: "/images/skills/java.png",
  },
  {
    languageName: "Swift",
    link: "/images/skills/swift.svg",
  },
  {
    languageName: "Firebase",
    link: "/images/skills/firebase.svg",
  },
  {
    languageName: "Gradle",
    link: "/images/skills/gradle.svg",
  },
];
function SkillMobile() {
  return (
    <div className="flex flex-col  bg-[rgba(0,0,22,0.4)] rounded-2xl">
      {/* <div
        className="border-[#2B2B2B] border-[1.5px]  w-min rounded-3xl px-5 py-2 font-medium"
        onClick={() => {}}
      > */}
      <p className="text-sm text-center mx-5 my-3 font-semibold font-inter-sans text-nowrap pl-1.5 text-[#ffb703]">
        Mobile
      </p>
      {/* </div> */}
      {/* listing of skills */}
      <div className=" bg-opacity-50 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center place-items-center">
          {mobileSkillsData.map((data, index) => {
            return (
              <SkillSingleSkillBox
                key={index}
                linkForLanguageLogo={data.link}
                programmingLanguage={data.languageName}
              />
            );
          })}
          {/* <SkillSingleSkillBox />
          <SkillSingleSkillBox />
          <SkillSingleSkillBox />
          <SkillSingleSkillBox />
          <SkillSingleSkillBox /> */}
        </div>
      </div>
    </div>
  );
}

export default SkillMobile;
