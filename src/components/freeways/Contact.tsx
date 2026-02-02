"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { siteConfig } from "@/lib/site";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <Section id="kontakt" className="bg-(--brand-anthracite)">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">Kontakt</h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium">
              Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie ein unverbindliches Angebot erhalten? Wir freuen uns auf Ihre Nachricht.
            </p>
            
            <Stack gap={8}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-(--brand-green) shrink-0 glow-green">
                  <MapPin className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-white tracking-tight">Anschrift</h3>
                  <p className="text-gray-400 font-medium">
                    {siteConfig.contact.address.street}<br />
                    {siteConfig.contact.address.zip} {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-(--brand-green) shrink-0 glow-green">
                  <Phone className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-white tracking-tight">Telefon</h3>
                  <a href={siteConfig.contact.phoneUrl} className="text-gray-400 hover:text-(--brand-green) transition-colors text-lg font-medium">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-(--brand-green) shrink-0 glow-green">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-white tracking-tight">E-Mail</h3>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-400 hover:text-(--brand-green) transition-colors text-lg font-medium">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </Stack>
          </div>

          <div className="lg:w-1/2 min-h-[450px] h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-white/5 relative ring-1 ring-white/5">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 p-8 text-center italic font-medium">
              Google Maps wird hier geladen... <br />
              (Standort: {siteConfig.contact.address.city})
            </div>
            {/* Real embed would go here with proper API key or static link */}
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.864380894578!2d6.9944747!3d50.9254316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf26f9a0d8c06b%3A0xc3f8e5b6e6e8e8e!2sWipperf%C3%BCrther%20Str.%2029-31%2C%2051103%20K%C3%B6ln!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde"
               width="100%" 
               height="100%" 
               title="Freeways GmbH Standort Köln"
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale contrast-125 opacity-80 border-0"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
