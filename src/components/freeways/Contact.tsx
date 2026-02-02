"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { siteConfig } from "@/lib/site";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <Section id="kontakt" className="bg-white py-24 md:py-32 border-t border-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-black tracking-tighter">Kontakt</h2>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium max-w-lg">
              Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie ein unverbindliches Angebot erhalten? Wir freuen uns auf Ihre Nachricht.
            </p>
            
            <Stack gap={8}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-[1.5rem] bg-(--brand-green)/5 border border-(--brand-green)/10 flex items-center justify-center text-(--brand-green) shrink-0 glow-green transition-transform hover:rotate-3">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-black text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Anschrift</h3>
                  <p className="text-xl font-bold text-black tracking-tight leading-snug">
                    {siteConfig.contact.address.street}<br />
                    {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-[1.5rem] bg-(--brand-green)/5 border border-(--brand-green)/10 flex items-center justify-center text-(--brand-green) shrink-0 glow-green transition-transform hover:rotate-3">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-black text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Telefon</h3>
                  <a href={siteConfig.contact.phoneUrl} className="text-2xl font-black text-black hover:text-(--brand-green) transition-all tracking-tighter block">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-[1.5rem] bg-(--brand-green)/5 border border-(--brand-green)/10 flex items-center justify-center text-(--brand-green) shrink-0 glow-green transition-transform hover:rotate-3">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-black text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">E-Mail</h3>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-xl font-bold text-black hover:text-(--brand-green) transition-all tracking-tight break-all block">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </Stack>
          </div>

          <div className="lg:w-1/2 aspect-[4/3] lg:aspect-auto min-h-[350px] md:min-h-[600px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 relative ring-4 md:ring-8 ring-gray-50/30">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 p-8 text-center italic font-medium z-0">
              Google Maps wird hier geladen... <br />
              (Standort: {siteConfig.contact.address.city})
            </div>
            {/* Natural Styled Map for Light Mode */}
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.8699122190105!2d6.9987592!3d50.94461880000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2675f0e24c25%3A0x7943533c50633c98!2sWipperf%C3%BCrther%20Str.%2029-31%2C%2051103%20K%C3%B6ln!5e0!3m2!1sde!2sde!4v1770006861263!5m2!1sde!2sde"
               width="100%" 
               height="100%" 
               title="Freeways GmbH Standort Köln"
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0 w-full h-full border-0 contrast-110 saturate-110 z-20 pointer-events-auto"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
