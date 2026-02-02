import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name + " | Professionelle Logistik & Lieferdienste in NRW",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://freeways-logistik.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://freeways-logistik.de",
    title: siteConfig.name + " | Ihr Partner für Logistik & Transport in NRW",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero_van.png",
        width: 1200,
        height: 630,
        alt: "Freeways GmbH Logistik Fleet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name + " | Logistik & Lieferdienst in NRW",
    description: siteConfig.description,
    images: ["/images/hero_van.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://freeways-logistik.de/#organization",
                  "name": siteConfig.name,
                  "image": "https://freeways-logistik.de/images/logo.png",
                  "description": siteConfig.description,
                  "url": "https://freeways-logistik.de",
                  "telephone": siteConfig.contact.phone,
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": siteConfig.contact.address.street,
                    "addressLocality": siteConfig.contact.address.city,
                    "postalCode": siteConfig.contact.address.zip,
                    "addressRegion": siteConfig.contact.address.state,
                    "addressCountry": "DE"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 50.9254,
                    "longitude": 6.9945
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                    ],
                    "opens": "00:00",
                    "closes": "23:59"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Essenslieferung & Gastronomie-Logistik",
                  "provider": { "@id": "https://freeways-logistik.de/#organization" },
                  "areaServed": "Nordrhein-Westfalen",
                  "description": "Spezialisierte Logistik für Restaurants und Cloud Kitchens."
                },
                {
                  "@type": "Service",
                  "name": "Kurier- & Expressdienste",
                  "provider": { "@id": "https://freeways-logistik.de/#organization" },
                  "areaServed": "Nordrhein-Westfalen",
                  "description": "Schnelle und sichere Zustellung von Dokumenten und Paketen."
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased min-h-screen">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
