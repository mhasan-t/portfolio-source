import React from "react";
import FadeIn from "../commons/FadeIn";

type Props = {
  title: string;
  description: string;
  logo: string;
  index: number;
};

function VeryExpertHmm({ title, description, logo, index }: Props) {
  return (
    <FadeIn
      from={index % 2 == 0 ? "right" : "left"}
      classNames="w-full max-w-xs sm:max-w-sm md:max-w-md text-center flex flex-col justify-start items-center bg-secondary p-4 md:p-6 rounded-md shadow-lg gap-4 md:gap-6 text-text_secondary"
    >
      <div className="">
        <img
          src={`/images/exp/${logo}`}
          alt={title}
          className="w-14 h-14"
        />
      </div>
      <div className="w-full font-bold text-lg uppercase">{title}</div>
      <div className="text-sm ">{description}</div>
    </FadeIn>
  );
}

export default VeryExpertHmm;
