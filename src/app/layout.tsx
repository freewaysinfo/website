import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Freeways GmbH | Logistik, Kurier & Essenslieferung in NRW",
  description:
    "Freeways GmbH bietet Premium-Logistik, Kurier- und Essenslieferung in NRW. Schnell, zuverlässig, persönlich.",
  keywords: [
    "Freeways GmbH",
    "Logistik",
    "Kurierdienst",
    "Essenslieferung",
    "NRW",
    "Fahrerbereitstellung",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Freeways GmbH",
  telephone: "+4922346808219",
  email: "info@freeways.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wipperfürther Str. 29-31",
    addressLocality: "Köln",
    postalCode: "51103",
    addressCountry: "DE",
  },
  areaServed: "Nordrhein-Westfalen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased font-body">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
