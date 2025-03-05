import React from "react";

function HeadingWithSubtitle({
  heading,
  subTitle,
}: {
  heading: string;
  subTitle: string;
}) {
  return (
    <div className="flex flex-col mt-44 mb-14 mx-20 bg-transparent">
      <p className="text-4xl  text-center font-extrabold font-inter-sans text-[#FFFFFF]">
        {heading}
      </p>
      <p className="text-sm  text-center font-semibold font-inter-sans bg-gradient-to-r from-[#4FC3F7] to-[#F5F5F5] bg-clip-text text-transparent">
        {/* Get to know me{" "} */}
        {subTitle}
      </p>
    </div>
  );
}

export default HeadingWithSubtitle;
