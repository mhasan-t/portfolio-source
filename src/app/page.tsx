"use client";

import StyledLogo from "@/components/Intro/StyledLogo";
import Intro from "@/components/Intro";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<div>
			<StyledLogo />
			<Intro />
			<ProjectShowcase />
			<Skills />
		</div>
	);
}
