import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundEffects from "@/components/BackgroundEffects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rakshit Pavagadhi | Software Engineer",
  description: "Premium Portfolio of Rakshit Pavagadhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} text-slate-100 antialiased selection:bg-blue-500/30`}>
        <SmoothScroll>
          <BackgroundEffects />
          <main className="min-h-screen px-6 md:px-12 lg:px-24 mx-auto max-w-7xl">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}