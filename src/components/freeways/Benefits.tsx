"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

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
    <Section id="warum-wir" className="bg-(--brand-anthracite) overflow-hidden">
      <Container>
        <Stack direction="row" className="flex-wrap lg:flex-nowrap items-center" gap={16}>
          <div className="lg:w-1/2">
            <span className="text-(--brand-green) font-bold text-sm uppercase tracking-widest mb-4 block">
              Warum Freeways
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">Ihr Partner für zuverlässige Logistik</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-medium">
              Wir verbinden langjährige Erfahrung mit modernster Logistik, um Ihren Anforderungen in ganz NRW gerecht zu werden.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-10 border-y border-white/10">
              <div className="space-y-1">
                <div className="text-4xl font-bold text-white tracking-tight">50+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Fahrer im Einsatz</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-white tracking-tight">NRW</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Vollflächig</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-white tracking-tight text-glow-green">24/7</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Bereitschaft</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Stack gap={5}>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-(--brand-green) shadow-2xl glow-green transition-transform hover:scale-110 duration-500">
                    <Check className="h-7 w-7 stroke-[3px]" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </Stack>
              </motion.div>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
