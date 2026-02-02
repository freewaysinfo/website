import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { MessageSquare } from "lucide-react";

export function Careers() {
  return (
    <Section id="karriere" className="bg-[var(--brand-dark)] text-white overflow-hidden relative">
      <Container className="relative z-10">
        <Stack align="center" justify="center" className="text-center max-w-3xl mx-auto py-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand-yellow)] text-[var(--brand-dark)] text-sm font-bold mb-6">
            Wir wachsen!
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Fahrer (m/w/d) gesucht – <br className="hidden sm:block" />
            <span className="text-[var(--brand-yellow)]">Jetzt bewerben</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Werde Teil unseres Teams und starte als Fahrer in NRW durch. Flexible Arbeitszeiten, faire Entlohnung und ein starkes Team erwarten dich.
          </p>
          <Button size="lg" className="bg-[var(--brand-yellow)] hover:bg-[var(--brand-yellow)]/90 text-[var(--brand-dark)] font-bold px-10" asChild>
            <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-5 w-5" />
              👉 Per WhatsApp bewerben
            </a>
          </Button>
        </Stack>
      </Container>
      
      {/* Background decoration */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[var(--brand-yellow)]/10 rounded-full blur-3xl -z-0" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[var(--brand-green)]/10 rounded-full blur-3xl -z-0" />
    </Section>
  );
}
