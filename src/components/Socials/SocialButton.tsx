import React from "react";
import { motion } from "framer-motion";

type Props = { imgSrc: string; alt: string; link: string };

export default function SocialButton({ imgSrc, alt, link }: Props) {
  return (
    <motion.a
      href={link}
      className="cursor-pointer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <img src={imgSrc} alt={alt} className="w-8 h-8" />
    </motion.a>
  );
}
