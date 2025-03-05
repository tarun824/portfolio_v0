import React from "react";

function SkillMobile() {
  return (
    <div className="flex flex-col">
      <div
        className="border-[#2B2B2B] border-[1.5px] rounded-3xl px-5 py-2 font-medium"
        onClick={() => {}}
      >
        <p className="text-sm font-inter-sans pl-1.5 text-[#ffb703]">Mobile</p>
      </div>
      {/* listing of skills */}
      <div className="bg-black bg-opacity-50 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4">Item 1</div>
          <div className="bg-white p-4">Item 2</div>
          <div className="bg-white p-4">Item 3</div>
          <div className="bg-white p-4">Item 4</div>
          <div className="bg-white p-4">Item 5</div>
          <div className="bg-white p-4">Item 6</div>
        </div>
      </div>
    </div>
  );
}

export default SkillMobile;
