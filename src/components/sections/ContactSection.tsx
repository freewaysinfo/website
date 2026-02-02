'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: ['Wipperfürther Str. 29–31', '51103 Köln'],
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: ['02234 6808219'],
      link: 'tel:+4922346808219',
    },
    {
      icon: Mail,
      title: 'E-Mail',
      content: ['info@freeways.de'],
      link: 'mailto:info@freeways.de',
    },
  ];

  return (
    <section id="kontakt" className="py-sectionMobile md:py-sectionDesktop bg-background scroll-mt-24">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Kontakt
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Nehmen Sie Kontakt mit uns auf – wir freuen uns auf Ihre Anfrage
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">
          <div className="grid gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-muted p-6"
                >
                  <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center border border-border">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      {info.link ? (
                        <a
                          href={info.link}
                          className="hover:text-primary transition-colors"
                        >
                          {info.content.map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </a>
                      ) : (
                        info.content.map((line, i) => (
                          <div key={i}>{line}</div>
                        ))
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-xl">
            <iframe
              title="Google Maps Freeways GmbH"
              src="https://www.google.com/maps?q=Wipperf%C3%BCrther%20Str.%2029-31%2C%2051103%20K%C3%B6ln&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-80 md:h-[420px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
