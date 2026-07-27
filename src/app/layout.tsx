import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SeasonScape Pakistan | Smart Tourism Guide",
  description: "Discover the best places to visit in Pakistan based on the season. Your ultimate travel guide for Hunza, Skardu, Swat, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-slate-50 pt-20 relative">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <AIAssistant />
        <Footer />
      </body>
    </html>
  );
}
