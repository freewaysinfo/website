export const siteConfig = {
  name: "Freeways GmbH",
  description: "Zuverlässiger Liefer- & Logistikservice in NRW. Professioneller Partner für Essenslieferung, Kurier- und Logistikdienstleistungen.",
  contact: {
    phone: "02234 6808219",
    phoneUrl: "tel:022346808219",
    email: "info@freeways.info",
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
  },
  legal: {
    managingDirector: "Mohamad Hasan",
    registerCourt: "Amtsgericht Köln",
    registerNumber: "HRB 112389",
    vatId: "DE [Umsatzsteuer-ID]" // Still needs to be filled if available, but staying generic for now or user can provide
  }
};

export type SiteConfig = typeof siteConfig;
