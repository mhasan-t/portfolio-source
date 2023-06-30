import "./globals.css";
import { Raleway } from "next/font/google";

const fontClass = Raleway({ subsets: ["latin-ext"], weight: ["400"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={fontClass.className}>{children}</body>
		</html>
	);
}
