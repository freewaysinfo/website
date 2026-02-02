export const siteConfig = {
  name: "Freeways GmbH",
  description: "Zuverlässiger Liefer- & Logistikservice in NRW. Professioneller Partner für Essenslieferung, Kurier- und Logistikdienstleistungen.",
  contact: {
    phone: "02234 6808219",
    phoneUrl: "tel:022346808219",
    email: "info@freeways.de",
    address: {
      street: "Wipperfürther Str. 29–31",
      zip: "51103",
      city: "Köln",
      state: "NRW"
    }
  },
  links: {
    whatsapp: "https://wa.me/4922346808219",
    career: "#karriere",
    services: "#services",
    contact: "#kontakt"
  }
};

export type SiteConfig = typeof siteConfig;
