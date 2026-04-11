import fonts from "@/app/fonts";
import { motion } from "framer-motion";
import TextRotateIn from "../commons/TextRotateIn";

type Props = {
  titleText: string;
};

export default function TitleComponent({ titleText }: Props) {
  return (
    <div className="w-full flex flex-col items-center gap-4 text-center">
      <motion.div
        layout
        className={
          "text-text_primary font-bold text-3xl sm:text-4xl lg:text-5xl" +
          fonts.header.className
        }
      >
        <TextRotateIn>{titleText}</TextRotateIn>
      </motion.div>
      <span className="block h-1 w-24 rounded-full bg-text_primary/80" />
    </div>
  );
}
