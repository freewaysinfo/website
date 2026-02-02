"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { siteConfig } from "@/lib/site";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <Section id="kontakt" className="bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Kontakt</h2>
            <p className="text-lg text-[var(--brand-gray)] mb-10 leading-relaxed">
              Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie ein unverbindliches Angebot erhalten? Wir freuen uns auf Ihre Nachricht.
            </p>
            
            <Stack gap={8}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--brand-light)] flex items-center justify-center text-[var(--brand-green)] shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Anschrift</h3>
                  <p className="text-[var(--brand-gray)]">
                    {siteConfig.contact.address.street}<br />
                    {siteConfig.contact.address.zip} {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--brand-light)] flex items-center justify-center text-[var(--brand-green)] shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telefon</h3>
                  <a href={siteConfig.contact.phoneUrl} className="text-[var(--brand-gray)] hover:text-[var(--brand-green)] transition-colors text-lg">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--brand-light)] flex items-center justify-center text-[var(--brand-green)] shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">E-Mail</h3>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--brand-gray)] hover:text-[var(--brand-green)] transition-colors text-lg">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </Stack>
          </div>

          <div className="lg:w-1/2 min-h-[400px] h-full rounded-2xl overflow-hidden shadow-sm border border-[var(--brand-border)] bg-[var(--brand-light)] relative">
            <div className="absolute inset-0 flex items-center justify-center text-[var(--brand-gray)] p-8 text-center italic">
              Google Maps wird hier geladen... <br />
              (Lazy loading Maps Embed)
            </div>
            {/* Real embed would go here with proper API key or static link */}
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.864380894578!2d6.9944747!3d50.9254316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf26f9a0d8c06b%3A0xc3f8e5b6e6e8e8e!2sWipperf%C3%BCrther%20Str.%2029-31%2C%2051103%20K%C3%B6ln!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale contrast-125 opacity-80"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
