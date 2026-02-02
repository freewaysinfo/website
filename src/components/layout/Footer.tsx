import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-black text-emerald-400 mb-4">
              FREEWAYS
            </div>
            <p className="text-gray-400 mb-4">
              Ihr professioneller Partner für Liefer- und Logistikdienstleistungen in NRW.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p>Wipperfürther Str. 29–31</p>
                  <p>51103 Köln</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+4922346808219" className="hover:text-emerald-400 transition-colors">
                  02234 6808219
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:info@freeways-gmbh.de" className="hover:text-emerald-400 transition-colors">
                  info@freeways-gmbh.de
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Rechtliches</h3>
            <div className="space-y-2">
              <Link href="/impressum" className="block text-gray-400 hover:text-emerald-400 transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="block text-gray-400 hover:text-emerald-400 transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Freeways GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </Container>
    </footer>
  );
};
