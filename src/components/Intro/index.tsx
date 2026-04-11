import { motion } from "framer-motion";
import fonts from "@/app/fonts";
import FadeIn from "../commons/FadeIn";

export default function Header() {
  return (
    <section
      id="introSection"
      className="relative overflow-hidden bg-primary text-white min-h-screen"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(223,236,87,0.17),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_30%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-4 py-10 lg:px-8 lg:py-16">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <FadeIn from="left">
              <div className="max-w-3xl">
                <div className={`${fonts.title.className} text-4xl font-black leading-tight text-text_primary sm:text-5xl lg:text-6xl`}>Muhib Al Hasan</div>
                <div className={`${fonts.header.className} mt-4 text-xl font-medium text-text_secondary sm:text-2xl`}>Full Stack Software Engineer</div>
                <p className="mt-8 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                  I design resilient digital experiences with modern web and mobile systems. My work blends clean architecture, efficient delivery, and polished user interfaces for clients who need reliability at scale.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a href="#projectShowcase" className="inline-flex items-center justify-center rounded-full bg-text_primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-30px_rgba(223,236,87,0.9)]">
                    View Projects
                  </a>
                  <a href="#contactSection" className="inline-flex items-center justify-center rounded-full border border-text_primary/40 bg-white/5 px-7 py-3 text-sm font-medium text-text_secondary transition-all duration-300 hover:border-text_primary hover:text-text_primary">
                    Let&apos;s Talk
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="flex-1">
            <FadeIn from="right">
              <div className="rounded-[32px] border border-text_primary/15 bg-secondary/95 p-8 shadow-[0_35px_100px_-60px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                <div className="text-text_primary uppercase tracking-[0.25em] text-sm font-semibold">Professional Summary</div>
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-100">
                  <p>5+ years building scalable web and mobile platforms. Skilled in React, Next.js, React Native, Node.js, Python and AWS.</p>
                  <p>Focused on delivering strong architecture, cross-team collaboration, and polished user experiences.</p>
                  <p className="inline-flex items-center gap-2 text-text_primary">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-text_primary" />
                    Modern products • Agile delivery • Technical leadership
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
