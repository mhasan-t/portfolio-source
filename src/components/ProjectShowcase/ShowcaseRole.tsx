import { motion } from "framer-motion";

export default function ShowcaseRole(props: {
  role: { title: string; description: string };
}) {
  return (
    <motion.div className="space-y-2">
      <motion.div className="text-lg sm:text-xl font-[700]">
        My Role - <span className="text-slate-300 font-normal text-base sm:text-lg">{props.role.title}</span>
      </motion.div>
      <motion.div className="text-base sm:text-lg leading-7 text-slate-100">
        {props.role.description}
      </motion.div>
    </motion.div>
  );
}
