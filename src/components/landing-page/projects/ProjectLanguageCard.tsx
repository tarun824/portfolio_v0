import React from "react";

function ProjectLanguageCard({
  language,
  languageLink,
}: {
  language: string;
  languageLink: string;
}) {
  return (
    <div className="flex items-center w-max rounded-full p-1 pr-2 bg-white">
      {languageLink != "" ? (
        <img
          src={languageLink}
          // "/images/landing-page/havric-ai-profile.png"
          className="h-[30px] w-[30px]  rounded-full"
        />
      ) : (
        <div></div>
      )}

      <p className=" text-[15px]  ml-0.5 font-inter-sans font-semibold text-black ">
        {/* Havric AI */}
        {language}
      </p>
    </div>
  );
}

export default ProjectLanguageCard;
