import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function FooterQuickLinkButton({
  text,
  link,
  onClick,
}: {
  text: string;
  link: string;
  onClick: Function;
}) {
  return (
    <div
      className="flex items-center hover:text-[#ffb703] cursor-pointer my-1.5 "
      onClick={() => {
        onClick();
      }}
    >
      <IoIosArrowDroprightCircle />
      <p className="text-sm font-inter-sans ml-1 ">{text} </p>
    </div>
  );
}

export default FooterQuickLinkButton;
