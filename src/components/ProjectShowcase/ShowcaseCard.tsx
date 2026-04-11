import React, { memo } from "react";
import { motion } from "framer-motion";

import { ShowcaseProps } from "@/types";
import ShowcaseHeader from "./ShowcaseHeader";
import ShowcaseDescription from "./ShowcaseDescription";
import ShowcaseRole from "./ShowcaseRole";
import ShowcaseFeatures from "./ShowcaseFeatures";
import ShowcaseTechs from "./ShowcaseTechs";
import ShowcaseLinks from "./ShowcaseLinks";

function ShowcaseCard({
  data,
  className,
  index = 0,
}: {
  data: ShowcaseProps;
  className?: string;
  index?: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={
        "group overflow-hidden rounded-[32px] border border-secondary/20 bg-secondary/10 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.8)] backdrop-blur-xl p-4 md:p-6 " +
        className
      }
    >
      <div
        className={`grid gap-6 lg:gap-8 ${index % 2 === 0 ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"
          } items-center`}
      >
        <div className="relative overflow-hidden rounded-[28px] border border-secondary/30 bg-slate-950/80">
          <img
            className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
            src={"/covers/" + data.cover}
            alt={data.title + " image"}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent px-5 py-6">
            <div className="text-xs uppercase tracking-[0.32em] text-text_secondary/60">
              {data.type}
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-semibold text-text_primary">
              {data.title}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <ShowcaseHeader data={data} />

          <div className="grid gap-6">
            <ShowcaseDescription description={data.description} />
            <ShowcaseRole role={data.myRole} />
            <ShowcaseFeatures features={data.features} />
          </div>

          <div className="grid gap-4">
            <ShowcaseTechs tech_stack={data.tech_stack} />
            {data.links !== undefined && data.links.length !== 0 && (
              <ShowcaseLinks links={data.links} />
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default memo(ShowcaseCard);
