import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guillermo | Fullstack Developer & Software Engineer",
  description:
    "Fullstack Developer specializing in React, Node.js, and cloud architecture. Building scalable systems and beautiful interfaces.",
  openGraph: {
    title: "Guillermo | Fullstack Developer & Software Engineer",
    description:
      "Fullstack Developer specializing in React, Node.js, and cloud architecture.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guillermo | Fullstack Developer & Software Engineer",
    description:
      "Fullstack Developer specializing in React, Node.js, and cloud architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
