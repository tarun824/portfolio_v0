import React from "react";

interface NavbarButtonProps {
  text: string;
  setSelctedItem: (item: string) => void;
  selectedItem: string;
  onClick: Function;
}

function NavbarButton({
  text,
  setSelctedItem,
  selectedItem,
  onClick,
}: NavbarButtonProps) {
  return (
    <a
      onClick={() => {
        setSelctedItem(text.toLowerCase());
        onClick();
      }}
      className={`${
        selectedItem == text.toLowerCase()
          ? "text-[#4FC3F7] font-semibold"
          : "text-[#C1C1C1] font-medium"
      } cursor-pointer    text-[18px] mx-7`}
    >
      {text}
    </a>
  );
}

export default NavbarButton;
