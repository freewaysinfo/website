import React from 'react';

export default function Impressum() {
  return (
    <div className="min-h-screen pt-40 pb-24 px-safe max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter text-emerald-deep">Impressum</h1>
      
      <div className="space-y-16 text-emerald-deep/60 leading-relaxed font-medium">
        <section>
          <h2 className="text-xs font-bold text-emerald-deep mb-6 uppercase tracking-[0.3em] opacity-40">Angaben gemäß § 5 TMG</h2>
          <div className="space-y-1">
            <p className="text-emerald-deep text-lg font-bold">Freeways GmbH</p>
            <p>Wipperfürther Str. 29–31</p>
            <p>51103 Köln, Deutschland</p>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold text-emerald-deep mb-6 uppercase tracking-[0.3em] opacity-40">Vertreten durch</h2>
          <p className="text-emerald-deep text-lg font-bold">Mohamad Hasan</p>
        </section>

        <section>
          <h2 className="text-xs font-bold text-emerald-deep mb-6 uppercase tracking-[0.3em] opacity-40">Kontakt</h2>
          <div className="space-y-1">
            <p>Telefon: <span className="text-emerald-deep">02234 6808219</span></p>
            <p>E-Mail: <span className="text-emerald-deep">info@freeways.de</span></p>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold text-emerald-deep mb-6 uppercase tracking-[0.3em] opacity-40">Registereintrag</h2>
          <div className="space-y-1">
            <p>Eintragung im Handelsregister.</p>
            <p>Registergericht: Amtsgericht Köln</p>
            <p>Registernummer: HRB 112389</p>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold text-emerald-deep mb-6 uppercase tracking-[0.3em] opacity-40">Umsatzsteuer-ID</h2>
          <div className="space-y-1">
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p className="text-emerald-deep font-bold italic">DE 123456789</p>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold text-emerald-deep mb-6 uppercase tracking-[0.3em] opacity-40">Redaktionell verantwortlich</h2>
          <div className="space-y-1">
            <p className="text-emerald-deep text-lg font-bold">Mohamad Hasan</p>
            <p>Wipperfürther Str. 29–31</p>
            <p>51103 Köln</p>
          </div>
        </section>

        <section className="pt-12 border-t border-border">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">Quelle: <a href="https://www.e-recht24.de" className="hover:text-gold-premium transition-base">e-recht24.de</a></p>
        </section>
      </div>
    </div>
  );
}
