import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Freeways GmbH | Logistik- & Lieferdienst in NRW",
  description: "Premium Kurier- und Lieferdienste in Nordrhein-Westfalen. Schnell, zuverlässig, persönlich.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={outfit.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
