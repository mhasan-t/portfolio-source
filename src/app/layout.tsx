import "./globals.css";
import { Roboto } from "next/font/google";

const fontClass = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

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
