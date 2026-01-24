import React from "react";

type Props = { imgSrc: string; alt: string; link: string };

export default function SocialButton({ imgSrc, alt, link }: Props) {
  return (
    <a
      className="cursor-pointer hover:scale-110 transition-all duration-300 animate-fade-in hover:animate-glow"
      href={link}
    >
      <img src={imgSrc} alt={alt} className="w-8 h-8 md:w-10 md:h-10 filter hover:brightness-110 transition-all duration-300" />
    </a>
  );
}
