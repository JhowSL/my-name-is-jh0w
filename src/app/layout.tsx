import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I'm Jh0w",
  description: "My project portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-600 text-zinc-50 container">{children}</body>
    </html>
  );
}
