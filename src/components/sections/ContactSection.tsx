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
    <section id="kontakt" className="py-sectionMobile md:py-sectionDesktop bg-background">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Nehmen Sie Kontakt mit uns auf – wir freuen uns auf Ihre Anfrage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-brand-light rounded-xl border border-brand-border"
              >
                <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center mx-auto mb-4 border border-brand-border">
                  <Icon className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-3">
                  {info.title}
                </h3>
                <div className="text-sm text-muted-foreground">
                  {info.link ? (
                    <a
                      href={info.link}
                      className="hover:text-brand-green transition-colors"
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
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12">
          <div className="overflow-hidden rounded-xl border border-brand-border">
            <iframe
              title="Google Maps Freeways GmbH"
              src="https://www.google.com/maps?q=Wipperf%C3%BCrther%20Str.%2029-31%2C%2051103%20K%C3%B6ln&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-80 md:h-96"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
