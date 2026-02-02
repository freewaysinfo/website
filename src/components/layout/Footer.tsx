import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Separator } from '../ui/separator';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-sectionMobile md:py-sectionDesktop">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/freeways-logo.png"
                alt="Freeways GmbH"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div className="text-2xl font-black text-background">
                Freeways GmbH
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Ihr professioneller Partner für Liefer- und Logistikdienstleistungen in NRW.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p>Wipperfürther Str. 29–31</p>
                  <p>51103 Köln</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+4922346808219" className="hover:text-background transition-colors">
                  02234 6808219
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:info@freeways.de" className="hover:text-background transition-colors">
                  info@freeways.de
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Rechtliches</h3>
            <div className="space-y-2">
              <Link href="/impressum" className="block text-muted-foreground hover:text-background transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="block text-muted-foreground hover:text-background transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12">
          <Separator className="bg-border/30" />
          <div className="pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; {currentYear} Freeways GmbH. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
