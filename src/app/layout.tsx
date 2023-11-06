import { store } from "@/reduxStore/store";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/lib/Provider";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LAMBO SHOWCASE",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={` ${inter.className} w-full max-w-[1400px] flex flex-col justify-center items-center mx-auto custom-cursor container`}
          suppressHydrationWarning={true}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
