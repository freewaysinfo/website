"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Zap, Truck } from "lucide-react";
import { motion } from "framer-motion";

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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Unsere Leistungen</h2>
            <p className="text-(--brand-gray) text-lg md:text-xl leading-relaxed">
              Als spezialisierter Partner in NRW bieten wir Ihnen effiziente und pünktliche Logistiklösungen. Wir verstehen die Anforderungen moderner Lieferketten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-(--brand-border) hover:border-(--brand-green)/30 transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-(--brand-green)/10 flex items-center justify-center mb-6 group-hover:bg-(--brand-green) group-hover:text-white transition-all duration-300">
                      <service.icon className="h-7 w-7 text-(--brand-green) group-hover:text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-(--brand-green) transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grow">
                    <p className="text-(--brand-gray) text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
