"use client";

import StyledLogo from "@/components/Intro/StyledLogo";
import Intro from "@/components/Intro";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<div className="overflow-y-hidden">
			<StyledLogo />
			<Intro />
			<ProjectShowcase />
			<Skills />
			<Contact />
		</div>
	);
}
