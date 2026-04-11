import { ShowcaseProps } from "@/types";
import ShowcaseCard from "./ShowcaseCard";
import TitleComponent from "../commons/TitleComponent";

const showCaseData = require("@/../data/ShowCaseData.json") as ShowcaseProps[];

export default function Showcase() {
  return (
    <section
      id="projectShowcase"
      className="relative overflow-hidden bg-primary/80 text-white pt-14 lg:pt-20 pb-20 px-4 sm:px-6 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <TitleComponent titleText="PROJECT SHOWCASE" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm sm:text-base text-text_secondary/80">
          Selected highlights from my portfolio, crafted with clean interfaces, robust architecture, and real-world impact.
        </p>

        <div className="mt-12 flex flex-col gap-10">
          {showCaseData.map((showcase: ShowcaseProps, index: number) => (
            <ShowcaseCard key={index} data={showcase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
