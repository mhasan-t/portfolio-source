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
      from={index % 2 === 0 ? "right" : "left"}
      classNames="w-full rounded-[28px] border border-text_primary/10 bg-secondary/95 p-8 text-center shadow-[0_30px_70px_-50px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex justify-center">
        <img
          src={`/images/exp/${logo}`}
          alt={title}
          className="h-16 w-16"
        />
      </div>
      <div className="mt-6 text-lg sm:text-xl font-semibold uppercase tracking-[0.08em] text-text_primary">{title}</div>
      <div className="mt-4 text-base sm:text-lg leading-7 text-slate-200">{description}</div>
    </FadeIn>
  );
}

export default VeryExpertHmm;
