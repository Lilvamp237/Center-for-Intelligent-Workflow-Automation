import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientSpotlight from "@/components/ClientSpotlight";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "IWAC — Intelligent Workflow Automation Center",
  description:
    "The Intelligent Workflow Automation Center at KDU. Pioneering Agentic AI and Mission-Critical Software for national-scale impact.",
  keywords: ["AI", "Automation", "Agentic AI", "KDU", "Sri Lanka", "Research"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-cyber-black grid-bg min-h-screen text-slate-100`}
      >
        <ClientSpotlight />
        <Navbar />
        <main className="relative z-10 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
