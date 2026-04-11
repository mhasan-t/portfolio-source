import React, { memo } from "react";
import TitleComponent from "../commons/TitleComponent";
import VeryExpertHmm from "./VeryExpertHmm";

import expData from "@/../data/ExpertiseData.json";

type Props = {};

function index({ }: Props) {
  return (
    <section className="w-full bg-secondary/5 py-16 px-4 text-white lg:px-20">
      <div className="mx-auto max-w-6xl">
        <TitleComponent titleText="I CREATE..." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {expData.map((data, index) => (
            <VeryExpertHmm
              title={data.title}
              description={data.description}
              logo={data.logo}
              index={index + 1}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(index);
