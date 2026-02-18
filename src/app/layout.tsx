import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DotGrid from "@/components/DotGrid";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Web 4.0 Explained — The Next Evolution of the Internet",
    template: "%s | Web 4.0 Explained",
  },
  description:
    "The definitive guide to Web 4.0. Understand the agentic web, symbiotic intelligence, and the next evolution of the internet — from AI agents to spatial computing.",
  openGraph: {
    title: "Web 4.0 Explained — The Next Evolution of the Internet",
    description:
      "The definitive guide to Web 4.0. Understand the agentic web, symbiotic intelligence, and the next evolution of the internet.",
    type: "website",
    siteName: "Web 4.0 Explained",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web 4.0 Explained — The Next Evolution of the Internet",
    description:
      "The definitive guide to Web 4.0. Understand the agentic web, symbiotic intelligence, and the next evolution of the internet.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <DotGrid />
        <NavBar />
        <div className="relative z-10 pt-16">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
