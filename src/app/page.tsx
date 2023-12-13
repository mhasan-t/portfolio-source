"use client";

import StyledLogo from "@/components/Intro/StyledLogo";
import Intro from "@/components/Intro";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";
import HorizontalLineWidens from "@/components/commons/HorizontalLineWidens";

export default function Home() {
	return (
		<div className="overflow-y-hidden border-l-4 md:border-l-6 border-text_primary bg-primary">
			<Intro />
			<HorizontalLineWidens />

			<ProjectShowcase />
			<Socials />
			{/* <Skills />   */}
			{/* <Contact /> */}
		</div>
	);
}
