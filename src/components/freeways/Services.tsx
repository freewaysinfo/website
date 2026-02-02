"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Zap, Truck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const services = [
  {
    title: "Essenslieferung",
    description: "Zuverlässige Zustellung für Gastronomie und Cloud Kitchens mit Fokus auf Geschwindigkeit und Qualität.",
    fullDescription: "Unsere spezialisierte Gastronomie-Logistik ist auf die hohen Anforderungen moderner Cloud Kitchens und Restaurants ausgelegt. Wir garantieren nicht nur Schnelligkeit, sondern auch die Einhaltung höchster Qualitätsstandards während des Transports. Unsere Fahrer sind geschult im Umgang mit empfindlichen Speisen, und unsere Ausrüstung sorgt für die optimale Temperaturhaltung bis zur Haustür.",
    details: [
      "Optimierte Routenführung für minimale Lieferzeiten",
      "Spezielle Thermotransport-Lösungen",
      "Erfahrenes Personal für Gastronomie-Handlings",
      "Echtzeit-Tracking für Partner & Kunden"
    ],
    icon: Utensils,
  },
  {
    title: "Kurier- & Expressdienste",
    description: "Schnelle und sichere Zustellung von Dokumenten und Paketen innerhalb von NRW – wenn jede Minute zählt.",
    fullDescription: "Wenn es schnell gehen muss, ist Freeways Ihr Partner. Ob wichtige Dokumente, kurzfristige Warenlieferungen oder Eilsendungen – wir schicken unsere Kuriere auf dem schnellsten Weg durch NRW. Wir verstehen, dass Zeit in diesem Bereich bares Geld bedeutet, und setzen daher auf maximale Flexibilität und prompte Ausführung Ihrer Aufträge.",
    details: [
      "Sofort-Abholung nach Auftragseingang",
      "Direktfahrten ohne Umwege",
      "Höchste Diskretion bei Dokumentenversand",
      "Flexible Flotte für verschiedene Paketgrößen"
    ],
    icon: Zap,
  },
  {
    title: "Logistik & Fahrerbereitstellung",
    description: "Skalierbare Lösungen für Ihren Personalbedarf. Wir stellen erfahrene Fahrer für Ihre eigene Flotte.",
    fullDescription: "Skalieren Sie Ihr Geschäft ohne das Risiko langer Personalsuchen. Wir stellen Ihnen qualifizierte und motivierte Fahrer (m/w/d) zur Verfügung, die nahtlos in Ihre bestehenden Prozesse integriert werden können. Unser Personalmanagement übernimmt die gesamte Koordination, sodass Sie sich voll und ganz auf Ihr Kerngeschäft konzentrieren können.",
    details: [
      "Kurz- und langfristige Personalüberlassung",
      "Professionell geschulte Fahrer",
      "Übernahme der administrativen Abwicklung",
      "Schnelle Reaktionszeiten bei Bedarfsspitzen"
    ],
    icon: Truck,
  }
];

export function Services() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <Stack gap={16}>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6">
              <span className="text-(--brand-green) font-bold text-sm uppercase tracking-widest block">
                Unsere Expertise
              </span>
              <h2 className="text-3xl md:text-5xl font-bold">Maßgeschneiderte Logistiklösungen</h2>
              <p className="text-(--brand-gray) text-lg md:text-xl leading-relaxed">
                Als spezialisierter Partner in NRW bieten wir Ihnen effiziente und pünktliche Logistiklösungen. Wir verstehen die Anforderungen moderner Lieferketten und setzen auf höchste Qualität.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="w-full lg:w-2/5 relative aspect-square rounded-3xl overflow-hidden shadow-xl"
            >
              <Image 
                src="/images/service_delivery.png"
                alt="Freeways GmbH food delivery service"
                fill
                className="object-cover"
              />
            </motion.div>
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
                <Dialog>
                  <Card className="h-full border-(--brand-border) hover:border-(--brand-green)/30 transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col cursor-default">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-(--brand-green)/10 flex items-center justify-center mb-6 group-hover:bg-(--brand-green) group-hover:text-white transition-all duration-300">
                        <service.icon className="h-7 w-7 text-(--brand-green) group-hover:text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold group-hover:text-(--brand-green) transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grow flex flex-col gap-6">
                      <p className="text-(--brand-gray) text-lg leading-relaxed">
                        {service.description}
                      </p>
                      
                      <DialogTrigger asChild>
                        <button className="flex items-center gap-2 text-sm font-bold text-(--brand-green) hover:gap-3 transition-all mt-auto group/btn cursor-pointer">
                          Mehr erfahren
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </DialogTrigger>
                    </CardContent>
                  </Card>

                  <DialogContent className="sm:max-w-[600px] border-none p-0 overflow-hidden rounded-3xl">
                    <div className="bg-(--brand-dark) p-8 text-white relative">
                      <div className="relative z-10">
                        <DialogHeader>
                          <div className="w-12 h-12 rounded-xl bg-(--brand-green) flex items-center justify-center mb-4">
                            <service.icon className="h-6 w-6 text-white" />
                          </div>
                          <DialogTitle className="text-3xl font-bold text-white">{service.title}</DialogTitle>
                          <DialogDescription className="text-gray-400 text-lg">
                            Detaillierte Informationen zu unserem Service
                          </DialogDescription>
                        </DialogHeader>
                      </div>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-(--brand-green)/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    </div>
                    
                    <div className="p-8 bg-white space-y-8">
                      <div className="space-y-4">
                        <h4 className="font-bold text-(--brand-dark) text-xl">Überblick</h4>
                        <p className="text-(--brand-gray) leading-relaxed">
                          {service.fullDescription}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-bold text-(--brand-dark) text-xl">Ihre Vorteile</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.details.map((detail, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-(--brand-green)/10 flex items-center justify-center shrink-0 mt-1">
                                <div className="w-2 h-2 rounded-full bg-(--brand-green)" />
                              </div>
                              <span className="text-sm text-(--brand-gray) font-medium">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100 flex justify-end">
                        <Button 
                          className="bg-(--brand-green) hover:bg-(--brand-green)/90 text-white rounded-xl px-8"
                          asChild
                        >
                          <a href="#kontakt">Jetzt anfragen</a>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
