"use client";

import StyledLogo from "@/components/Intro/StyledLogo";
import Intro from "@/components/Intro";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/WorkedOn";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";
import HorizontalLineWidens from "@/components/commons/HorizontalLineWidens";
import Expertise from "@/components/Expertise";
import Head from "next/head";
import { useEffect, useState } from "react";
import LoadingComponent from "@/components/commons/LoadingComponent";

export default function Home() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<div>
			<title>Muhib Al Hasan 🗿 Software Engineer</title>

			<div className="overflow-y-hidden border-l-4 md:border-l-6 border-text_primary bg-primary p-0">
				{loading && <LoadingComponent />}
				<Socials />
				<Intro />
				{/* <HorizontalLineWidens /> */}
				<ProjectShowcase />
				{/* <HorizontalLineWidens /> */}
				<Expertise />
				{/* <HorizontalLineWidens /> */}
				{/* <Skills /> */}
				<Contact />
			</div>
		</div>
	);
}
