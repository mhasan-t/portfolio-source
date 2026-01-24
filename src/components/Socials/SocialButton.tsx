import React from "react";

type Props = { imgSrc: string; alt: string; link: string };

export default function SocialButton({ imgSrc, alt, link }: Props) {
  return (
    <a
      className="cursor-pointer"
      href={link}
    >
      <img src={imgSrc} alt={alt} className="w-8 h-8" />
    </a>
  );
}
