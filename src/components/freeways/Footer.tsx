import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-(--brand-anthracite) py-16 md:py-24 border-t border-white/5">
      <Container>
        <Stack gap={10}>
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-105">
                  <Image 
                    src="/images/logo.png" 
                    alt="Freeways GmbH Logo" 
                    width={40}
                    height={40}
                    sizes="(max-width: 768px) 32px, 40px"
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="text-2xl font-bold text-white tracking-tight">{siteConfig.name}</div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                Ihr professioneller Partner für Liefer- und Logistikdienste in NRW. Qualitativ hochwertige Dienstleistungen seit über 5 Jahren.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <Stack gap={5}>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-gray-500">Leistungen</h4>
                <Link href="/#services" className="text-sm text-gray-400 hover:text-(--brand-green) transition-colors font-bold py-1 block">Essenslieferung</Link>
                <Link href="/#services" className="text-sm text-gray-400 hover:text-(--brand-green) transition-colors font-bold py-1 block">Kurierdienst</Link>
                <Link href="/#services" className="text-sm text-gray-400 hover:text-(--brand-green) transition-colors font-bold py-1 block">Logistik</Link>
              </Stack>
              
              <Stack gap={5}>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-gray-500">Unternehmen</h4>
                <Link href={siteConfig.links.career} className="text-sm text-gray-400 hover:text-(--brand-green) transition-colors font-bold py-1 block">Karriere</Link>
                <Link href="/#warum-wir" className="text-sm text-gray-400 hover:text-(--brand-green) transition-colors font-bold py-1 block">Über uns</Link>
                <Link href="/#kontakt" className="text-sm text-gray-400 hover:text-(--brand-green) transition-colors font-bold py-1 block">Kontakt</Link>
              </Stack>

              <Stack gap={5}>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-gray-500">Rechtliches</h4>
                <Link href="/impressum" className="text-sm text-gray-400 hover:text-(--brand-green) transition-colors font-bold py-1 block">Impressum</Link>
                <Link href="/datenschutz" className="text-sm text-gray-400 hover:text-(--brand-green) transition-colors font-bold py-1 block">Datenschutz</Link>
              </Stack>
            </div>
          </div>

          <Separator className="bg-white/5" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              © {currentYear} {siteConfig.name}. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-500">
              <span>Made with ❤️ in NRW</span>
            </div>
          </div>
        </Stack>
      </Container>
    </footer>
  );
}
