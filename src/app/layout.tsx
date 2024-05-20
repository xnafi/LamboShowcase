import "./globals.css";
import type { Metadata } from "next";

import { Cinzel } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/shared/navbar";
import ParticlesComponent from "@/components/Bg/ParticlesBg";
import Footer from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "LAMBO SHOWCASE",
  description: "Generated by create next app",
};

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cizel",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} font-sans w-full max-w-[1400px] flex flex-col justify-center items-center mx-auto custom-cursor container h-full`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <SpeedInsights />
        <ParticlesComponent />
        <Footer />
      </body>
    </html>
  );
}
