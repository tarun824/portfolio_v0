import React from "react";

function ProjectFieldSelectionButton({
  text,
  isSelected,
  setSelctedItem,
}: {
  text: string;
  isSelected: string;
  setSelctedItem: (item: string) => void;
}) {
  return (
    <button
      className={`${
        isSelected == text.toLowerCase()
          ? "bg-[#484E53] text-white"
          : "text-[#A9A9A9]"
      } rounded-3xl w-40 py-3 mx-2 border border-[#484E53] cursor-pointer  `}
      onClick={() => {
        setSelctedItem(text.toLowerCase());
      }}
    >
      {text}
    </button>
  );
}

export default ProjectFieldSelectionButton;
