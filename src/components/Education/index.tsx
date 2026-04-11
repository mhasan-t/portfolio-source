import { motion } from "framer-motion";
import TitleComponent from "../commons/TitleComponent";
import educationData from "@/../data/EducationData.json";

export default function Education() {
  return (
    <section className="w-full bg-primary/90 py-16 px-4 text-white lg:px-20">
      <div className="mx-auto max-w-6xl">
        <TitleComponent titleText="EDUCATIONAL QUALIFICATIONS" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {educationData.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
              className="rounded-[32px] border border-text_primary/15 bg-secondary/90 p-8 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.75)]"
            >
              <div className="flex flex-col gap-3">
                <div className="text-sm uppercase tracking-[0.3em] text-text_primary">{item.duration}</div>
                <h3 className="text-2xl font-semibold text-text_secondary">{item.degree}</h3>
                <p className="text-sm text-slate-300">{item.institution}</p>
              </div>
              <p className="mt-6 text-base leading-7 text-slate-200">{item.details}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
