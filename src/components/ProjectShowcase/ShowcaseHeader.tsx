import { motion } from "framer-motion";
import { ShowcaseProps } from "@/types";

export default function ShowcaseHeader(props: { data: ShowcaseProps }) {
  return (
    <motion.div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex rounded-full border border-text_secondary/20 bg-text_secondary/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-text_secondary">
          {props.data.year}
        </span>
        <span className="text-sm font-medium text-text_secondary">
          {props.data.type}
        </span>
      </div>

      <motion.div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text_primary">
        {props.data.title}
      </motion.div>
    </motion.div>
  );
}
