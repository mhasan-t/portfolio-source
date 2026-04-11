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
              className="relative overflow-hidden rounded-[32px] border border-text_primary/10 bg-secondary/95 p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute inset-y-8 left-0 w-1 rounded-full bg-text_primary/20" />
              <div className="relative flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <div className="inline-flex rounded-full border border-text_primary/20 bg-text_primary/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-text_primary">
                    {item.duration}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text_secondary">{item.degree}</h3>
                  <p className="text-sm sm:text-base text-slate-300">{item.institution}</p>
                </div>

                <div className="rounded-[28px] border border-text_primary/10 bg-primary/10 p-6 text-base sm:text-lg leading-8 text-slate-200 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]">
                  {item.details}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
