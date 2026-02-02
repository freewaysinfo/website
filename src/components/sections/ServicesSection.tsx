'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';
import { Truck, Package, Users } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Package,
      title: 'Essenslieferung',
      description: 'Schnelle und zuverlässige Lieferung von Speisen für Restaurants und Gastronomiebetriebe in ganz NRW.',
      image: '/images/service-gastronomy.png',
    },
    {
      icon: Truck,
      title: 'Kurier- & Expressdienste',
      description: 'Professionelle Kurierdienste für zeitkritische Sendungen und Expresslieferungen innerhalb kürzester Zeit.',
      image: '/images/service-express.png',
    },
    {
      icon: Users,
      title: 'Logistik & Fahrerbereitstellung',
      description: 'Umfassende Logistiklösungen und qualifizierte Fahrer für Ihre individuellen Anforderungen.',
      image: '/images/service-logistics.png',
    },
  ];

  return (
    <section id="leistungen" className="py-sectionMobile md:py-sectionDesktop bg-background scroll-mt-24">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Leistungen
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Professionelle Lösungen für alle Ihre Liefer- und Logistikbedürfnisse
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                  <CardContent className="pt-6 flex h-full flex-col">
                    <div className="overflow-hidden rounded-xl border border-border mb-6">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={520}
                        height={320}
                        className="h-40 w-full object-cover"
                      />
                    </div>
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="mt-6 text-sm font-semibold text-primary">
                      Mehr erfahren →
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
