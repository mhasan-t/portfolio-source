import React, { memo, useEffect, useState } from "react";
import SocialButton from "./SocialButton";

type Props = {};

function Socials({ }: Props) {
  return (
    <div className="absolute md:fixed h-screen right-3 md:right-6 top-0 z-30 text-text_primary flex flex-col justify-start items-center">
      <div
        className={`relative border w-[1px] border-r-2 border-text_primary animate-hang`}
      ></div>
      <SocialButton
        imgSrc="/icons/gmail-soc.png"
        alt="email"
        link="mailto:muhibalhasan1@gmail.com"
      />
      <div
        className={`border w-[1px] border-r-2 border-text_primary h-10 my-1`}
      ></div>

      <SocialButton
        imgSrc="/icons/linkedin-soc.png"
        alt="linkedin link"
        link="https://www.linkedin.com/in/muhib-al-hasan-121001160/"
      />
      <div
        className={`border w-[1px] border-r-2 border-text_primary h-10 my-1`}
      ></div>

      <SocialButton
        imgSrc="/icons/github-soc.png"
        alt="Github Link"
        link="https://github.com/mhasan-t/"
      />
    </div>
  );
}

export default memo(Socials);
