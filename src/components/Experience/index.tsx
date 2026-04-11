import { motion } from "framer-motion";
import TitleComponent from "../commons/TitleComponent";
import expData from "@/../data/ExperienceData.json";

export default function Experience() {
  return (
    <section className="w-full bg-secondary/10 py-16 px-4 text-white lg:px-20">
      <div className="mx-auto max-w-6xl">
        <TitleComponent titleText="PROFESSIONAL EXPERIENCE" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {expData.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="group rounded-[32px] border border-text_primary/15 bg-primary/90 p-8 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-3 text-sm sm:text-base">
                  <span className="rounded-full border border-text_primary/20 bg-text_primary/10 px-3 py-1 text-text_primary">
                    {item.location}
                  </span>
                  <span className="rounded-full border border-text_primary/20 bg-text_primary/10 px-3 py-1 text-text_primary">
                    {item.workMode}
                  </span>
                  <span className="rounded-full border border-text_primary/20 bg-text_primary/10 px-3 py-1 text-text_primary">
                    {item.employment}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text_secondary">{item.company}</h3>
                  <p className="text-base sm:text-lg text-slate-200">{item.summary}</p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div className="rounded-3xl border border-text_primary/10 bg-secondary/90 p-5">
                  <div className="text-base uppercase tracking-[0.25em] text-text_primary">Roles</div>
                  <div className="mt-4 space-y-3">
                    {item.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="rounded-2xl border border-text_primary/10 p-4">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div className="text-lg font-semibold text-text_secondary">{role.title}</div>
                          <div className="text-sm uppercase tracking-[0.28em] text-text_secondary/70">{role.duration}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-text_primary/10 bg-secondary/90 p-5">
                  <div className="text-base uppercase tracking-[0.25em] text-text_primary">Achievements</div>
                  <ul className="mt-4 space-y-3 text-sm sm:text-base text-slate-300">
                    {item.roles.flatMap((role) => role.highlights).map((point, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-text_primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
