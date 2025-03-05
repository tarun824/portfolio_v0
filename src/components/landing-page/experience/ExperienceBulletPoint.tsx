import React from "react";
import { BiSend } from "react-icons/bi";

function ExperienceBulletPoint({ text }: { text: string }) {
  return (
    <div key={text} className="flex items-center my-0.5">
      <BiSend className="mr-2 h-4 w-4 shrink-0" />
      <p className="font-inter-sans">{text}</p>
    </div>
  );
}

export default ExperienceBulletPoint;
