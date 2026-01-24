import { Dancing_Script, Alegreya_Sans_SC } from "next/font/google";

import { ShowcaseProps } from "@/types";

export default function ShowcaseHeader(props: { data: ShowcaseProps }) {
  return (
    <div className="flex flex-col items-end animate-slide-in-down">
      <div className="text-right text-xl md:text-2xl text-text_primary font-bold hover:text-text_secondary transition-colors duration-300 animate-scale-in">
        {props.data.title}
      </div>
      <div className="text-center text-slate-200 text-xs font-[500] animate-fade-in">
        {props.data.type} - {props.data.year}
      </div>
    </div>
  );
}
