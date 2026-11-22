import React from "react";
import SkillSingleSkillBox from "./SkillSingleSkillBox";

const mobileSkillsData = [
  {
    languageName: "Flutter",
    link: "https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000",
  },
  {
    languageName: "Dart",
    link: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000",
  },
  {
    languageName: "Kotlin",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/kotlin/kotlin-original.svg",
  },
  {
    languageName: "Java",
    link: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
  },
  {
    languageName: "Swift",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/swift/swift-original.svg",
  },
  {
    languageName: "Firebase",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/firebase/firebase-plain.svg",
  },
  {
    languageName: "Gradle",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/gradle/gradle-original.svg",
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
