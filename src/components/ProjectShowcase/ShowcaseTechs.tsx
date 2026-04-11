import React from "react";
import { motion } from "framer-motion";
import Brick from "@/components/commons/Brick";

export default function ShowcaseTechs(props: {
  tech_stack: Array<{
    title: string;
    icon: string;
  }>;
}) {
  return (
    <motion.div className="space-y-3">
      <motion.div className="text-lg sm:text-xl font-semibold text-text_primary">
        Technologies Used
      </motion.div>
      <motion.div className="flex flex-wrap gap-3">
        {props.tech_stack.map((tech) => (
          <Brick
            key={tech.title}
            img_src={"/icons/" + tech.icon}
            text={tech.title}
            classNames="border border-secondary/20 bg-slate-950/70 px-3 py-2"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
