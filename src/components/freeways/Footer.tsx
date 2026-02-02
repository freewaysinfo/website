import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-(--brand-light) py-12 md:py-20 border-t border-(--brand-border)">
      <Container>
        <Stack gap={10}>
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-8 h-8 md:w-10 md:h-10">
                  <Image 
                    src="/images/logo.png" 
                    alt="Freeways GmbH Logo" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div className="text-2xl font-bold text-(--brand-dark)">{siteConfig.name}</div>
              </div>
              <p className="text-(--brand-gray) text-sm leading-relaxed">
                Ihr professioneller Partner für Liefer- und Logistikdienste in NRW. Qualitativ hochwertige Dienstleistungen seit über 5 Jahren.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <Stack gap={4}>
                <h4 className="font-bold text-sm uppercase tracking-wider text-(--brand-dark)">Leistungen</h4>
                <Link href="/#services" className="text-sm text-(--brand-gray) hover:text-(--brand-green)">Essenslieferung</Link>
                <Link href="/#services" className="text-sm text-(--brand-gray) hover:text-(--brand-green)">Kurierdienst</Link>
                <Link href="/#services" className="text-sm text-(--brand-gray) hover:text-(--brand-green)">Logistik</Link>
              </Stack>
              
              <Stack gap={4}>
                <h4 className="font-bold text-sm uppercase tracking-wider text-(--brand-dark)">Unternehmen</h4>
                <Link href={siteConfig.links.career} className="text-sm text-(--brand-gray) hover:text-(--brand-green)">Karriere</Link>
                <Link href="/#warum-wir" className="text-sm text-(--brand-gray) hover:text-(--brand-green)">Über uns</Link>
                <Link href="/#kontakt" className="text-sm text-(--brand-gray) hover:text-(--brand-green)">Kontakt</Link>
              </Stack>

              <Stack gap={4}>
                <h4 className="font-bold text-sm uppercase tracking-wider text-(--brand-dark)">Rechtliches</h4>
                <a href="/impressum" className="text-sm text-(--brand-gray) hover:text-(--brand-green)">Impressum</a>
                <a href="/datenschutz" className="text-sm text-(--brand-gray) hover:text-(--brand-green)">Datenschutz</a>
              </Stack>
            </div>
          </div>

          <Separator className="bg-(--brand-border)" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-(--brand-gray)">
              © {currentYear} {siteConfig.name}. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6 text-xs text-(--brand-gray)">
              <span>Made with ❤️ in NRW</span>
            </div>
          </div>
        </Stack>
      </Container>
    </footer>
  );
}
