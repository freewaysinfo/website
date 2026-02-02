import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Erfahrenes & zuverlässiges Team",
    description: "Unsere Mitarbeiter sind geschult und motiviert, um besten Service zu garantieren."
  },
  {
    title: "Moderne Fahrzeuge",
    description: "Unsere Flotte ist auf dem neuesten Stand für maximale Effizienz."
  },
  {
    title: "Einsatz in ganz NRW",
    description: "Von Köln bis Dortmund – wir sind Ihr regionaler Partner vor Ort."
  },
  {
    title: "Strukturierte Abläufe",
    description: "Durch klare Prozesse sorgen wir für Transparenz und Verlässlichkeit."
  }
];

export function Benefits() {
  return (
    <Section id="warum-wir" className="bg-[var(--brand-light)]">
      <Container>
        <Stack direction="row" className="flex-wrap lg:flex-nowrap" gap={16}>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Warum Freeways</h2>
            <p className="text-lg text-[var(--brand-gray)] mb-8">
              Wir verbinden langjährige Erfahrung mit modernster Logistik, um Ihren Anforderungen in ganz NRW gerecht zu werden.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-y border-[var(--brand-border)]">
              <div>
                <div className="text-3xl font-bold text-[var(--brand-dark)]">50+</div>
                <div className="text-sm text-[var(--brand-gray)]">Fahrer im Einsatz</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--brand-dark)]">NRW</div>
                <div className="text-sm text-[var(--brand-gray)]">Weit verfügbar</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--brand-dark)]">7 Tage</div>
                <div className="text-sm text-[var(--brand-gray)]">Die Woche</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Stack key={index} gap={3}>
                <div className="w-10 h-10 rounded-full bg-[var(--brand-green)]/10 flex items-center justify-center text-[var(--brand-green)]">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{benefit.title}</h3>
                <p className="text-[var(--brand-gray)] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Stack>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
