"use client";

import StyledLogo from "@/components/Intro/StyledLogo";
import Intro from "@/components/Intro";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";

export default function Home() {
	return (
		<div className="overflow-y-hidden border-l-4 md:border-l-6 border-text_primary">
			<Intro />
			<ProjectShowcase />
			<Socials />
			{/* <Skills />   */}
			{/* <Contact /> */}
		</div>
	);
}
