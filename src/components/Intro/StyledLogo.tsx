import React from "react";
import fonts from "@/app/fonts";
import TextDance from "../commons/TextDance";

export default function StyledLogo() {
  return (
    <div className="static bg-primary md:absolute z-10 md:left-8 md:top-4 flex flex-col md:flex-row gap-1 md:gap-10 justify-center items-center">
      <div
        className=""
      >
        <img
          className="w-8 h-8 md:w-14 md:h-14"
          src="/logo.png"
          alt="logo"
        />
      </div>
      <div className={`${fonts.header.className} text-text_primary`}>
        <TextDance>muhibalhasan1@gmail.com</TextDance>
      </div>
    </div>
  );
}
