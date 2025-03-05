"use client";
import React, { useState } from "react";
import NavbarButton from "./NavbarButton";

function Navbar() {
  // const navbar_items=[{"name"}]
  const [selctedItem, setSelctedItem] = useState("home");
  return (
    <div className="flex justify-center my-7">
      <NavbarButton
        text="Home"
        setSelctedItem={setSelctedItem}
        selectedItem={selctedItem}
      />
      <NavbarButton
        text="About"
        setSelctedItem={setSelctedItem}
        selectedItem={selctedItem}
      />
      <NavbarButton
        text="Experience"
        setSelctedItem={setSelctedItem}
        selectedItem={selctedItem}
      />
      <NavbarButton
        text="Projects"
        setSelctedItem={setSelctedItem}
        selectedItem={selctedItem}
      />
      <NavbarButton
        text="Certification"
        setSelctedItem={setSelctedItem}
        selectedItem={selctedItem}
      />
      <NavbarButton
        text="Resume"
        setSelctedItem={setSelctedItem}
        selectedItem={selctedItem}
      />

      {/* <a
        onClick={() => {
          setSelctedItem("home");
        }}
        className={`${
          selctedItem ? "text-[#4FC3F7]" : "text-[#C1C1C1]"
        } cursor-pointer font-semibold font-sans text-[18px]`}
      >
        Home
      </a> */}
    </div>
  );
}

export default Navbar;
