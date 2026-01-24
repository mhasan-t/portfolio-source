import React from "react";
import fonts from "@/app/fonts";
import TextDance from "../commons/TextDance";

export default function StyledLogo() {
  return (
    <div className="static bg-primary md:absolute z-10 md:left-8 md:top-4 flex flex-col md:flex-row gap-1 md:gap-10 justify-center items-center animate-slide-in-down">
      <div className="animate-rotate-in">
        <img
          className="w-8 h-8 md:w-14 md:h-14"
          src="/logo.png"
          alt="logo"
        />
      </div>
      <div className={`${fonts.header.className} text-text_primary hover:text-text_secondary transition-colors duration-300 animate-fade-in`}>
        <a href="mailto:muhibalhasan1@gmail.com">muhibalhasan1@gmail.com</a>
      </div>
    </div>
  );
}
