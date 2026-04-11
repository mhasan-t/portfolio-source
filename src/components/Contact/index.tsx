import TitleComponent from "../commons/TitleComponent";

export default function index() {
  return (
    <section id="contactSection" className="relative overflow-hidden bg-primary/95 py-16 px-4 text-white lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_25%)]" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 rounded-[40px] border border-text_primary/10 bg-secondary/90 p-10 shadow-[0_40px_90px_-70px_rgba(0,0,0,0.75)] backdrop-blur-xl">
        <TitleComponent titleText="CONTACT ME" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-8 text-slate-200">
              If you are looking for a thoughtful engineer who can elevate your product with elegant architecture and polished delivery, let&apos;s connect.
            </p>
            <div className="rounded-3xl border border-text_primary/20 bg-primary/90 p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.75)]">
              <div className="text-sm uppercase tracking-[0.3em] text-text_primary">Email</div>
              <div className="mt-3 text-base font-semibold text-text_secondary">muhibalhasan1@gmail.com</div>
            </div>
            <div className="rounded-3xl border border-text_primary/20 bg-primary/90 p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.75)]">
              <div className="text-sm uppercase tracking-[0.3em] text-text_primary">Phone</div>
              <div className="mt-3 text-base font-semibold text-text_secondary">+880 1736 480320</div>
            </div>
            <div className="rounded-3xl border border-text_primary/20 bg-primary/90 p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.75)]">
              <div className="text-sm uppercase tracking-[0.3em] text-text_primary">Website</div>
              <a href="https://muhib.site" className="mt-3 inline-block text-base font-semibold text-text_secondary hover:text-text_primary">
                muhib.site
              </a>
            </div>
            <div className="rounded-3xl border border-text_primary/20 bg-primary/90 p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.75)]">
              <div className="text-sm uppercase tracking-[0.3em] text-text_primary">GitHub</div>
              <a href="https://github.com/mhasan-t" className="mt-3 inline-block text-base font-semibold text-text_secondary hover:text-text_primary">
                github.com/mhasan-t
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 rounded-[32px] bg-primary/80 p-8 text-slate-200 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.8)]">
            <div className="text-text_primary uppercase tracking-[0.3em] text-sm">LinkedIn</div>
            <a
              href="https://www.linkedin.com/in/muhibalhasan"
              className="mt-3 inline-block text-base font-semibold text-text_secondary hover:text-text_primary"
            >
              linkedin.com/in/muhibalhasan
            </a>
            <div className="mt-8 text-base leading-8">
              I&apos;m available for senior software roles, product-led teams, and collaborative projects with a clear focus on sustainable development and maintainable systems.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
