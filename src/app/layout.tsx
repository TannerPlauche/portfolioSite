import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "J. Tanner Plauché — Senior Software Developer",
  description:
    "Full-Stack Engineer and polyglot fluent in 8 languages. 10+ years building web, mobile, and cloud applications across healthcare, fintech, and enterprise.",
  keywords: [
    "Tanner Plauche",
    "software developer",
    "full-stack",
    "React",
    "TypeScript",
    "Nashville",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ margin: 0, minHeight: "100vh" }}>{children}</body>
    </html>
  );
}
