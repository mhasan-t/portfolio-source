import React from "react";
import { motion } from "framer-motion";
import Brick from "@/components/commons/Brick";

export default function ShowcaseLinks(props: {
  links: Array<{
    title: string;
    url: string;
    icon: string;
  }>;
}) {
  return (
    <motion.div className="space-y-3">
      <motion.div className="text-lg sm:text-xl font-semibold text-text_primary">
        Links
      </motion.div>
      <motion.div className="flex flex-wrap gap-3">
        {props.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:-translate-y-0.5"
          >
            <Brick
              img_src={"/icons/" + link.icon}
              text={link.title}
              classNames="border border-secondary/20 bg-secondary/20 px-4 py-2"
            />
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}
