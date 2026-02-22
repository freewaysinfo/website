"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { MessageSquare, Check } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Careers() {
  const whatsappUrl = `${siteConfig.links.whatsapp}?text=${encodeURIComponent("Hallo Freeways Team, ich interessiere mich für eine Stelle als Fahrer (m/w/d).")}`;

  return (
    <Section id="karriere" className="bg-(--brand-anthracite) text-white overflow-hidden relative min-h-[80vh] flex items-center transition-colors duration-700">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/career_driver.png"
          alt="Freeways GmbH Fahrer Jobs und Karriere in NRW"
          fill
          className="object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-(--brand-anthracite) via-(--brand-anthracite)/90 to-transparent" />
      </div>

      <Container className="relative z-10 w-full">
        <Stack direction="row" align="center" className="flex-wrap lg:flex-nowrap" gap={12}>
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-(--brand-yellow) text-(--brand-dark) text-[10px] font-black mb-8 uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              Karriere bei Freeways
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">
              Bewirb dich jetzt als <br className="hidden sm:block" />
              <span className="text-(--brand-yellow)">Fahrer (m/w/d)</span>
            </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12 w-full max-w-2xl">
            {[
              "Attraktive & pünktliche Bezahlung",
              "Flexibles Schichtmodell",
              "Moderner Fuhrpark",
              "Kollegiales & faires Teamumfeld"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-(--brand-green) flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-white stroke-[4px]" />
                </div>
                <span className="text-lg font-medium text-gray-300">{item}</span>
              </div>
            ))}
          </div>

            <Button size="lg" className="bg-(--brand-yellow) hover:bg-(--brand-yellow)/90 text-(--brand-dark) font-bold px-12 h-16 text-lg rounded-2xl shadow-2xl glow-gold transition-all hover:scale-105 active:scale-95 border-none" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-3 h-6 w-6" />
                Per WhatsApp bewerben
              </a>
            </Button>
            
            <p className="mt-8 text-gray-400 text-sm">
              Alternativ erreichst du uns unter: <a href={siteConfig.contact.phoneUrl} className="text-white hover:text-(--brand-yellow) transition-colors">{siteConfig.contact.phone}</a>
            </p>
          </div>
        </Stack>
      </Container>
      
      {/* Dynamic background decoration */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-(--brand-yellow)/10 rounded-full blur-[100px] z-0" 
      />
      <div className="absolute top-0 right-0 w-full h-full bg-linear-to-b from-transparent via-(--brand-anthracite)/50 to-(--brand-anthracite) pointer-events-none z-0" />
    </Section>
  );
}
