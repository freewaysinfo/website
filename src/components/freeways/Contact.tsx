"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { Phone, Mail, MapPin, Send, Briefcase, Truck } from "lucide-react";
import { LazyIframe } from "@/components/ui/LazyIframe";
import { useState } from "react";

type InquiryType = "business" | "fahrer";

export function Contact() {
  const [type, setType] = useState<InquiryType>("business");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const message = (formData.get("message") as string) || "";

    const subjectPrefix = type === "business" ? "Geschäftsanfrage" : "Fahrer-Bewerbung";
    const subject = `[${subjectPrefix}] Anfrage von ${name}`;

    const body = [
      `Typ: ${type === "business" ? "Geschäftsanfrage" : "Fahrer-Bewerbung"}`,
      `Name: ${name}`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone}` : "",
      "",
      "Nachricht:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <Section id="kontakt" className="bg-white py-24 md:py-32 border-t border-gray-50 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Form */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-black tracking-tighter">Kontakt</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium max-w-lg">
              Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie Teil unseres Teams werden? Schreiben Sie uns direkt.
            </p>

            {/* Type Toggle */}
            <div className="flex gap-3 mb-10">
              <button
                type="button"
                onClick={() => setType("business")}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                  type === "business"
                    ? "bg-(--brand-green) text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Geschäftsanfrage
              </button>
              <button
                type="button"
                onClick={() => setType("fahrer")}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                  type === "fahrer"
                    ? "bg-(--brand-yellow) text-(--brand-anthracite) shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Truck className="w-4 h-4" />
                Fahrer-Bewerbung
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ihr vollständiger Name"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-(--brand-green)/50 focus:border-(--brand-green) transition-all font-medium"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    E-Mail *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="ihre@email.de"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-(--brand-green)/50 focus:border-(--brand-green) transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Telefon (optional)
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="Ihre Telefonnummer"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-(--brand-green)/50 focus:border-(--brand-green) transition-all font-medium"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder={
                    type === "business"
                      ? "Beschreiben Sie Ihre Anforderungen …"
                      : "Erzählen Sie uns kurz von sich und Ihrer Erfahrung …"
                  }
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-(--brand-green)/50 focus:border-(--brand-green) transition-all font-medium resize-none"
                />
              </div>

              <Button
                type="submit"
                className={`w-full h-16 rounded-2xl text-lg font-black border-none transition-all hover:scale-[1.02] active:scale-95 ${
                  type === "business"
                    ? "bg-(--brand-green) hover:bg-(--brand-green)/90 text-white glow-green shadow-[0_0_25px_rgba(74,222,128,0.3)]"
                    : "bg-(--brand-yellow) hover:bg-(--brand-yellow)/90 text-(--brand-anthracite) glow-gold shadow-[0_0_25px_rgba(212,175,55,0.3)]"
                }`}
              >
                <Send className="w-5 h-5 mr-2" />
                {type === "business" ? "Anfrage senden" : "Bewerbung senden"}
              </Button>

              <p className="text-xs text-gray-400 text-center">
                Mit dem Absenden stimmen Sie unserer{" "}
                <a href="/datenschutz" className="underline hover:text-(--brand-green)">Datenschutzerklärung</a> zu.
              </p>
            </form>

            {/* Contact info underneath */}
            <div className="mt-16 pt-10 border-t border-gray-100">
              <Stack gap={6}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-(--brand-green)/5 border border-(--brand-green)/10 flex items-center justify-center text-(--brand-green) shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold text-gray-700">
                    {siteConfig.contact.address.street}, {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-(--brand-green)/5 border border-(--brand-green)/10 flex items-center justify-center text-(--brand-green) shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <a href={siteConfig.contact.phoneUrl} className="text-sm font-bold text-gray-700 hover:text-(--brand-green) transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-(--brand-green)/5 border border-(--brand-green)/10 flex items-center justify-center text-(--brand-green) shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-bold text-gray-700 hover:text-(--brand-green) transition-colors break-all">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </Stack>
            </div>
          </div>

          {/* Right: Map */}
          <div className="lg:w-1/2 aspect-4/3 lg:aspect-auto min-h-[350px] md:min-h-[600px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 relative ring-4 md:ring-8 ring-gray-50/30">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 p-8 text-center italic font-medium z-0">
              Google Maps wird hier geladen... <br />
              (Standort: {siteConfig.contact.address.city})
            </div>
            <LazyIframe className="absolute inset-0 w-full h-full">
              <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.8699122190105!2d6.9987592!3d50.94461880000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2675f0e24c25%3A0x7943533c50633c98!2sWipperf%C3%BCrther%20Str.%2029-31%2C%2051103%20K%C3%B6ln!5e0!3m2!1sde!2sde!4v1770006861263!5m2!1sde!2sde"
                 title="Freeways GmbH Standort Köln"
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0 w-full h-full border-0 contrast-110 saturate-110 z-20 pointer-events-auto"
              />
            </LazyIframe>
          </div>
        </div>
      </Container>
    </Section>
  );
}
