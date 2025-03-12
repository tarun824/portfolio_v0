import React from "react";

function SkillSingleSkillBox({
  programmingLanguage,
  linkForLanguageLogo,
}: {
  programmingLanguage: string;
  linkForLanguageLogo: string;
}) {
  return (
    <div
      onClick={() => {
        let data = {
          languageName: programmingLanguage,
          link: linkForLanguageLogo,
        };
        navigator.clipboard.writeText(JSON.stringify(data));
      }}
      className="flex flex-col h-28 w-28 justify-center items-center bg-[rgba(0,0,22,0.9)] rounded-xl "
    >
      <img
        src={linkForLanguageLogo}
        // "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000"
        alt={`${programmingLanguage} Image`}
        className=" w-14 h-14 "
      />{" "}
      <p className="font-semibold font-inter-sans mt-2">
        {programmingLanguage}
      </p>
    </div>
  );
}

export default SkillSingleSkillBox;
