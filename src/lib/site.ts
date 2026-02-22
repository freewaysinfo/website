export const siteConfig = {
  name: "Freeways GmbH",
  url: "https://freeways.info",
  description:
    "Freeways GmbH in NRW: Ihr Experte für Logistik, Essenslieferungen & Express-Kuriere. Zuverlässige Zustellung & Fahrerbereitstellung in Köln & ganz NRW.",
  keywords: [
    "Logistik NRW",
    "Essenslieferung Köln",
    "Kurierdienst NRW",
    "Expresslieferung",
    "Freeways GmbH",
    "Fahrer Jobs NRW",
    "Logistikdienstleistungen Köln",
    "Cloud Kitchen Logistik",
    "Zustellservice",
  ],
  contact: {
    phone: "02234 6808219",
    phoneUrl: "tel:022346808219",
    email: "info@freeways.info",
    address: {
      street: "Wipperfürther Str. 29–31",
      zip: "51103",
      city: "Köln",
      state: "NRW",
    },
  },
  links: {
    whatsapp: "https://wa.me/4917684750669",
    career: "#karriere",
    services: "#services",
    contact: "#kontakt",
  },
  legal: {
    managingDirector: "Mohamad Hasan",
    registerCourt: "Amtsgericht Köln",
    registerNumber: "HRB 112389",
    vatId: "DE [Umsatzsteuer-ID]", // Still needs to be filled if available, but staying generic for now or user can provide
  },
};

export type SiteConfig = typeof siteConfig;
