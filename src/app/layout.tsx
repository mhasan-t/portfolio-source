import "./globals.css";
import fonts from "@/app/fonts";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={fonts.primary.className}>{children}</body>
		</html>
	);
}
