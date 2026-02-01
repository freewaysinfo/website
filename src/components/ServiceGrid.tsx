"use client";

import React from 'react';
import { Utensils, Zap, Users, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: "gastronomie",
    title: "Essenslieferung",
    description: "Professionelle und pünktliche Lieferung warmer Speisen. Wir sind der zuverlässige Partner für Gastronomie, Plattformen und Ghost Kitchens in NRW.",
    icon: Utensils,
    bullets: ["HACCP-konform", "Pünktlichkeitsgarantie", "Erfahrene Fahrer"]
  },
  {
    id: "express",
    title: "Kurier- & Expressdienste",
    description: "Zeitkritische Lieferungen für Dokumente und Waren. Wir führen Expressfahrten in ganz Nordrhein-Westfalen zuverlässig und schnell aus.",
    icon: Zap,
    bullets: ["Sofort-Einsatz", "NRW-weite Abdeckung", "Dokumentensicher"]
  },
  {
    id: "logistik",
    title: "Logistik & Fahrerbereitstellung",
    description: "Wir stellen professionelle Fahrer und moderne Fahrzeuge für Plattformen, Unternehmen und Großkunden zur Verfügung.",
    icon: Users,
    bullets: ["Flexibel skalierbar", "Moderner Fuhrpark", "Full-Service"]
  }
];

export const ServiceGrid = () => {
  return (
    <section id="leistungen" className="section-padding bg-zinc-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Unsere Leistungen</h2>
          <p className="text-lg text-zinc-600">
            Klare Prozesse, zuverlässige Durchführung. Entdecken Sie unsere Kernkompetenzen in der NRW-Logistik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-900">
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-zinc-900 mb-4">{service.title}</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-zinc-500 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
