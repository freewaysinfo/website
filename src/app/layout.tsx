import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freeways GmbH | Logistik- & Lieferdienst in NRW",
  description: "Ihr professioneller Partner für Essenslieferung, Kurier- und Logistikdienstleistungen in Nordrhein-Westfalen.",
};

import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ConciergeBot } from "@/components/ConciergeBot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased selection:bg-accent selection:text-white`}
      >
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ConciergeBot />
        </SmoothScroll>
      </body>
    </html>
  );
}

