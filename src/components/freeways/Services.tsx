import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Zap, Truck } from "lucide-react";

const services = [
  {
    title: "Essenslieferung",
    description: "Zuverlässige Zustellung für Gastronomie und Cloud Kitchens mit Fokus auf Geschwindigkeit und Qualität.",
    icon: Utensils,
  },
  {
    title: "Kurier- & Expressdienste",
    description: "Schnelle und sichere Zustellung von Dokumenten und Paketen innerhalb von NRW – wenn jede Minute zählt.",
    icon: Zap,
  },
  {
    title: "Logistik & Fahrerbereitstellung",
    description: "Skalierbare Lösungen für Ihren Personalbedarf. Wir stellen erfahrene Fahrer für Ihre eigene Flotte.",
    icon: Truck,
  }
];

export function Services() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <Stack gap={12}>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Leistungen</h2>
            <p className="text-[var(--brand-gray)] text-lg">
              Professionelle Logistiklösungen, maßgeschneidert für Ihren Erfolg in Nordrhein-Westfalen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-[var(--brand-border)] hover:border-[var(--brand-green)]/30 transition-all duration-300 shadow-sm hover:shadow-md group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[var(--brand-green)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-green)] group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6 text-[var(--brand-green)] group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--brand-gray)] leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
