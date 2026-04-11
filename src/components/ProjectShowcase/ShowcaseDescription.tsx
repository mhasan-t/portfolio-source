import { motion } from "framer-motion";

export default function ShowcaseDescription(props: { description: string }) {
  return (
    <motion.div className="space-y-2">
      <motion.div className="text-lg sm:text-xl font-[700] text-text_primary">Description</motion.div>
      <motion.div className="text-base sm:text-lg leading-7 text-slate-100">{props.description}</motion.div>
    </motion.div>
  );
}
