import Head from "next/head";
import "./globals.css";
import fonts from "@/app/fonts";

const title = "Muhib Al Hasan | Software Engineer.";
const description = "Portfolio of Muhib Al Hasan, Software Engineer.";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<meta
					key="image"
					name="og:image"
					content="https://muhibalhasan.com/logo.png"
				/>
				<meta
					key="description"
					name="description"
					content={description}
				/>
				<meta key="og-title" property="og:title" content={title} />
				<meta
					key="og-description"
					property="og:description"
					content={description}
				/>
				<meta
					key="twitter-title"
					name="twitter:title"
					content={title}
				/>
				<meta
					key="twitter-description"
					name="twitter:description"
					content={description}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@lighter_app" />
				<meta
					name="twitter:image"
					content={`https://lighter.com/home-card.png`}
				/>

				<link rel="canonical" href="https://lighter.com/" />
			</Head>
			<body className={fonts.primary.className}>{children}</body>
		</html>
	);
}
