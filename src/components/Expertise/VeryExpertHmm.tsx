import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  logo: string;
  index: number;
};

function VeryExpertHmm({ title, description, logo, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
      className="w-full rounded-[28px] border border-text_primary/10 bg-secondary/95 p-8 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:-translate-y-1 hover:border-text_primary/30 hover:shadow-[0_35px_120px_-50px_rgba(223,236,87,0.25)]"
    >
      <div className="flex items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-text_primary/15 bg-primary/10 shadow-sm">
          <img
            src={`/images/exp/${logo}`}
            alt={title}
            className="h-12 w-12"
          />
        </div>
      </div>
      <div className="mt-8 text-center">
        {/* <div className="text-sm uppercase tracking-[0.35em] text-text_primary/80">Expertise</div> */}
        <div className="mt-3 text-2xl font-semibold text-text_secondary">{title}</div>
        <div className="mt-4 text-base leading-7 text-slate-200">{description}</div>
      </div>
    </motion.article>
  );
}

export default VeryExpertHmm;
