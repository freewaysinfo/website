import React from 'react';

export default function Impressum() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-12">Impressum</h1>
      
      <div className="space-y-12 text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Angaben gemäß § 5 TMG</h2>
          <p>Freeways GmbH</p>
          <p>Musterstraße 123</p>
          <p>12345 Musterstadt</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Vertreten durch</h2>
          <p>Max Mustermann (Geschäftsführer)</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Kontakt</h2>
          <p>Telefon: +49 (0) 123 456789</p>
          <p>E-Mail: info@freeways.de</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Registereintrag</h2>
          <p>Eintragung im Handelsregister.</p>
          <p>Registergericht: Amtsgericht Musterstadt</p>
          <p>Registernummer: HRB 123456</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
          <p>DE 123456789</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Redaktionell verantwortlich</h2>
          <p>Max Mustermann</p>
          <p>Musterstraße 123</p>
          <p>12345 Musterstadt</p>
        </section>

        <section className="pt-8 border-t border-white/10 text-xs">
          <p>Quelle: <a href="https://www.e-recht24.de" className="hover:text-accent">e-recht24.de</a></p>
        </section>
      </div>
    </div>
  );
}
