import { motion } from "framer-motion";

export default function ShowcaseFeatures({
  features,
}: {
  features: Array<string>;
}) {
  return (
    <motion.div className="space-y-2">
      <motion.div className="text-lg sm:text-xl font-[700] text-text_primary">Features</motion.div>
      <motion.div className="lg:flex lg:flex-col lg:gap-2">
        <ul className="list-disc list-inside space-y-2 pl-5">
          {features.map((feature) => {
            return (
              <li key={feature} className="text-base sm:text-lg m-0 p-0 leading-7 text-slate-100">
                {feature}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </motion.div>
  );
}
