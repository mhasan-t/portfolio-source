import fonts from "@/app/fonts";
import FadeIn from "../commons/FadeIn";
import StyledLogo from "./StyledLogo";

export default function Header() {
  return (
    <div
      id="introSection"
      className="z-[1] relative bg-gradient-to-br from-primary via-primary to-secondary text-white h-screen min-h-[600px] flex flex-col justify-around items-center mb-4 overflow-y-hidden p-2"
    >
      <StyledLogo />

      <div className="w-full flex flex-col justify-center items-center max-w-5xl animate-slide-in-up">
        <div className="w-full h-fit">
          <FadeIn from="top">
            <div
              className={`${fonts.title.className} font-bold text-4xl md:text-6xl text-center text-text_primary md:mt-24 hover:text-text_secondary transition-colors duration-300 animate-scale-in`}
            >
              MUHIB AL HASAN
            </div>
          </FadeIn>
          <FadeIn from="bottom">
            <div
              className={`${fonts.header.className} font-normal text-xl text-center text-text_secondary animate-slide-in-up`}
            >
              FULL STACK SOFTWARE DEVELOPER
            </div>
          </FadeIn>
          <FadeIn from="bottom" delay={0.5}>
            <div className="text-sm md:text-lg text-center mt-6 text-slate-200 px-4 animate-fade-in">
              I&apos;m a seasoned full-stack software developer
              with team leadership and system design expertise.
              I&apos;m deeply passionate about my work, excel in
              problem-solving with a strong LeetCode rating, and
              stay up-to-date with evolving tech trends.
            </div>
          </FadeIn>
        </div>
      </div>

      {/* CHECKOUT PROJECTS BELOW */}
      <a
        href="#projectShowcase"
        className="text-text_primary text-center rounded-full border-2 border-text_primary px-4 md:px-6 py-2 hover:bg-text_primary hover:text-primary transition-all duration-500 hover:scale-110 active:scale-90 animate-fade-in-top hover:animate-glow bg-gradient-to-r from-transparent via-text_primary/10 to-transparent bg-[length:200%_100%]"
      >
        checkout my projects below
      </a>
    </div>
  );
}
