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
    languageName: "Java",
    link: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
  },
  {
    languageName: "Gradle",
    link: "https://private-user-images.githubusercontent.com/95350584/252301866-80efaa46-a449-467d-865d-79ae62d8d6ce.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE3OTcxMzcsIm5iZiI6MTc0MTc5NjgzNywicGF0aCI6Ii85NTM1MDU4NC8yNTIzMDE4NjYtODBlZmFhNDYtYTQ0OS00NjdkLTg2NWQtNzlhZTYyZDhkNmNlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzEyVDE2MjcxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQwZjY1MzRhOGMwZWU5ZWY5OThlNTk2N2VkODNmYjhjNDg3Mzg3YWNmNTM1NDMwZDFjOTUxYWZjM2NjY2ViY2MmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.lcclH6wiuJ683DkMsOhrIznsTaxoHnEiZgkXzu-VWxY",
  },
];
function SkillMobile() {
  return (
    <div className="flex flex-col  bg-[rgba(0,0,22,0.4)] rounded-2xl">
      <div
        className="border-[#2B2B2B] border-[1.5px]  w-min rounded-3xl px-5 py-2 font-medium"
        onClick={() => {}}
      >
        <p className="text-sm font-inter-sans  pl-1.5 text-[#ffb703]">Mobile</p>
      </div>
      {/* listing of skills */}
      <div className=" bg-opacity-50 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
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
