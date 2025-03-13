import React from "react";

function HeadingWithSubtitle({
  heading,
  subTitle,
  sectionScroll,
}: {
  heading: string;
  subTitle: string;
  sectionScroll: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      ref={sectionScroll}
      className="flex flex-col justify-center items-center mt-44 mb-14 mx-20 bg-transparent"
    >
      <p className=" text-center text-4xl font-extrabold font-inter-sans text-[#FFFFFF]">
        {heading}
      </p>
      <p className=" text-center text-sm font-semibold font-inter-sans bg-gradient-to-r from-[#4FC3F7] to-[#F5F5F5] bg-clip-text text-transparent">
        {/* Get to know me{" "} */}
        {subTitle}
      </p>
    </div>
  );
}

export default HeadingWithSubtitle;
