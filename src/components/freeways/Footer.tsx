import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-(--brand-light)] py-12 md:py-20 border-t border-(--brand-border)]">
      <Container>
        <Stack gap={10}>
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="max-w-sm">
              <div className="text-2xl font-bold text-(--brand-dark)] mb-4">{siteConfig.name}</div>
              <p className="text-(--brand-gray)] text-sm leading-relaxed">
                Ihr professioneller Partner für Liefer- und Logistikdienste in NRW. Qualitativ hochwertige Dienstleistungen seit über 5 Jahren.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <Stack gap={4}>
                <h4 className="font-bold text-sm uppercase tracking-wider text-(--brand-dark)]">Leistungen</h4>
                <a href="#services" className="text-sm text-(--brand-gray)] hover:text-(--brand-green)]">Essenslieferung</a>
                <a href="#services" className="text-sm text-(--brand-gray)] hover:text-(--brand-green)]">Kurierdienst</a>
                <a href="#services" className="text-sm text-(--brand-gray)] hover:text-(--brand-green)]">Logistik</a>
              </Stack>
              
              <Stack gap={4}>
                <h4 className="font-bold text-sm uppercase tracking-wider text-(--brand-dark)]">Unternehmen</h4>
                <a href={siteConfig.links.career} className="text-sm text-(--brand-gray)] hover:text-(--brand-green)]">Karriere</a>
                <a href="#warum-wir" className="text-sm text-(--brand-gray)] hover:text-(--brand-green)]">Über uns</a>
                <a href="#kontakt" className="text-sm text-(--brand-gray)] hover:text-(--brand-green)]">Kontakt</a>
              </Stack>

              <Stack gap={4}>
                <h4 className="font-bold text-sm uppercase tracking-wider text-(--brand-dark)]">Rechtliches</h4>
                <a href="/impressum" className="text-sm text-(--brand-gray)] hover:text-(--brand-green)]">Impressum</a>
                <a href="/datenschutz" className="text-sm text-(--brand-gray)] hover:text-(--brand-green)]">Datenschutz</a>
              </Stack>
            </div>
          </div>

          <Separator className="bg-(--brand-border)]" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-(--brand-gray)]">
              © {currentYear} {siteConfig.name}. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6 text-xs text-(--brand-gray)]">
              <span>Made with ❤️ in NRW</span>
            </div>
          </div>
        </Stack>
      </Container>
    </footer>
  );
}
