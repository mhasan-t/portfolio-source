import React from "react";
import { Fira_Sans } from "next/font/google";

const textFont = Fira_Sans({
  weight: ["200", "300", "400", "700"],
  subsets: ["latin"],
});

export default function Brick({
  img_src,
  text,
  classNames,
}: {
  img_src: string;
  text: string;
  classNames?: string;
}) {
  return (
    <div
      className={
        "text-text_secondary text-sm sm:text-base font-[400] rounded-md flex flex-row items-center gap-2 " +
        classNames +
        " " +
        textFont.className
      }
    >
      <img src={img_src} alt={text + " logo"} className="w-5 h-5" />
      {text}
    </div>
  );
}
