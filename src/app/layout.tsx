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
        <div className="fixed top-20 right-6 z-50 hidden sm:flex items-center gap-2 rounded-full glass glow-border px-3 py-1.5 text-xs text-slate-200 font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-faculty-red opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-faculty-red" />
          </span>
          Status: Open for Collaboration
        </div>
        <Navbar />
        <main className="relative z-10 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
