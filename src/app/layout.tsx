import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
	title: "Arduino Day Philippines 2025",
	description: "The Official Website of Arduino Day Philippines 2025.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="overflow-x-hidden">
			<body className={`${montserrat.variable} antialiased min-h-screen overflow-x-hidden`}>
				{children}
			</body>
		</html>
	);
}
