import { motion } from "framer-motion";

export default function ShowcaseDescription(props: { description: string }) {
  return (
    <motion.div className="space-y-3">
      <motion.div className="text-lg sm:text-xl font-semibold text-text_primary">Overview</motion.div>
      <motion.div className="text-base sm:text-lg leading-8 text-slate-200">
        {props.description}
      </motion.div>
    </motion.div>
  );
}
