import React from "react";
import SkillSingleSkillBox from "./SkillSingleSkillBox";

const aiMlSkillsData = [
  {
    languageName: "Python",
    link: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
  {
    languageName: "UIPath Studio",
    link: "https://img.icons8.com/?size=100&id=HhCUhcFcSjU8&format=png&color=000000",
  },
  {
    languageName: "Flask",
    link: "https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000",
  },
  //   {
  //     languageName: "Pickle",
  //     link: "",
  //   },
  {
    languageName: "Rasa",
    link: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*yCZIz_ByODXdOLkUtaWBLQ.png",
  },
  {
    languageName: "Ollama",
    link: "https://cdn.brandfetch.io/idrRDmZ2_F/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1740053459943",
  },
  {
    languageName: "Llama 3.2",
    link: "data:image/jpeg;base64,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",
  },
  {
    languageName: "Scikit learn",
    link: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
];
function SkillAiMl() {
  return (
    <div className="flex flex-col  bg-[rgba(0,0,22,0.4)] rounded-2xl">
      {/* <div
        className="border-[#2B2B2B] border-[1.5px]  w-min rounded-3xl px-5 py-2 font-medium"
        onClick={() => {}}
      > */}
      <p className="text-sm text-center mx-5 my-3 font-semibold font-inter-sans text-nowrap pl-1.5 text-[#ffb703]">
        AI ML
      </p>
      {/* </div> */}
      {/* listing of skills */}
      <div className=" bg-opacity-50 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center place-items-center">
          {aiMlSkillsData.map((data, index) => {
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

export default SkillAiMl;
