import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RotatingImage from "@/components/loadingPage";
import Script from "next/script"; // ✅ import Script

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sigmalinks Research",
  description:
    "  SigmaLinks Research bridges the gap between academic rigor and industry practice, delivering actionable insights for the maritime, port, and transportation sectors",
  icons: {
    icon: "/images/14.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
  
      <body className="bg-base-100 text-base-content min-h-screen">
        <RotatingImage />
        {children}
      </body>
    </html>
  );
}
