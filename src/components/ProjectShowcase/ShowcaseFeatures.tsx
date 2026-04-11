import { motion } from "framer-motion";

export default function ShowcaseFeatures({
  features,
}: {
  features: Array<string>;
}) {
  return (
    <motion.div className="space-y-4">
      <motion.div className="text-lg sm:text-xl font-semibold text-text_primary">Key highlights</motion.div>
      <ul className="grid gap-3 sm:grid-cols-1 list-disc list-inside pl-5">
        {features.map((feature) => (
          <li key={feature} className="text-base sm:text-lg leading-7 text-slate-200">
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
