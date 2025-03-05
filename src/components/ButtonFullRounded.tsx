"use client";
import React from "react";

function ButtonFullRounded({
  text,
  onClick,
}: {
  text: string;
  onClick: Function;
}) {
  return (
    <button
      className="border-[#4FC3F7] border-[1.5px] rounded-3xl px-5 py-2 font-medium"
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </button>
  );
}

export default ButtonFullRounded;
