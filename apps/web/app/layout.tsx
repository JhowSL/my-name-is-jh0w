import type { Metadata } from "next";
import "@ui/styles/globals.css";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="container h-screen p-6 bg-slate-300">{children}</body>
		</html>
	);
}