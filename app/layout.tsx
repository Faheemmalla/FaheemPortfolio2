import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faheem Yousuf Malla | AI Engineer",
  description:
    "Faheem Yousuf Malla's portfolio showcasing AI engineering, LLM evaluations, AI agents, RAG, and machine learning projects.",
  openGraph: {
    title: "Faheem Yousuf Malla | AI Engineer",
    description:
      "Explore Faheem's AI engineering projects, experience, and technical skills.",
    url: "https://faheem-portfolio-fawn.vercel.app",
    siteName: "Faheem Yousuf Malla Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Faheem Yousuf Malla | AI Engineer",
    description:
      "AI Engineer working with LLMs, AI agents, RAG, and machine learning.",
  },
  icons: {
    icon: "/k.png",
    shortcut: "/k.png",
    apple: "/k.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}