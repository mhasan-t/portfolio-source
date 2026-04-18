import React, { memo } from "react";
import SocialButton from "./SocialButton";

type Props = {};

function Socials({ }: Props) {
  return (
    <div className="fixed right-4 top-12 z-30 hidden flex-col items-center gap-3 md:flex">
      <div className="h-[1px] w-10 bg-text_primary/30" />
      <SocialButton
        imgSrc="/icons/gmail-soc.png"
        alt="email"
        link="mailto:muhibalhasan1@gmail.com"
      />
      <SocialButton
        imgSrc="/icons/linkedin-soc.png"
        alt="linkedin link"
        link="https://www.linkedin.com/in/muhib-al-hasan-121001160/"
      />
      <SocialButton
        imgSrc="/icons/github-soc.png"
        alt="Github Link"
        link="https://github.com/mhasan-t/"
      />
      <motion.div className="h-[1px] w-10 bg-text_primary/30" />
    </div>
  );
}

export default memo(Socials);
