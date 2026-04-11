import { motion } from "framer-motion";

export default function ShowcaseRole(props: {
  role: { title: string; description: string };
}) {
  return (
    <motion.div className="space-y-3">
      <motion.div className="text-lg sm:text-xl font-semibold text-text_primary">Role</motion.div>
      <div className="rounded-3xl border border-secondary/20 bg-slate-950/80 p-4 text-base sm:text-lg leading-7 text-slate-200">
        <div className="font-semibold text-text_primary">{props.role.title}</div>
        <div className="mt-2 text-slate-200">{props.role.description}</div>
      </div>
    </motion.div>
  );
}
