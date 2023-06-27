import "./globals.css";
import { Alegreya_Sans_SC } from "next/font/google";

const fontClass = Alegreya_Sans_SC({ subsets: ["latin-ext"], weight: ["400"] });

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
