import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
	title: "Modern Website",
	description: "Modern UI/UX App",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='icon'
					href='/boat.png'
				/>
			</head>
			<body>
				<Navbar />
				<main className='relative overflow-hidden'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
