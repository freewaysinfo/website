import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freeways GmbH | Premium Kurierdienst NRW",
  description: "Ihre erste Wahl für professionelle Logistik. Essenslieferung & Kurierdienst in Nordrhein-Westfalen.",
};

import { SmoothScroll } from "@/components/ui/SmoothScroll";

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
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

