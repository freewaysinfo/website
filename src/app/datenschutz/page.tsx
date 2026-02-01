import React from 'react';

export default function Datenschutz() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-12">Datenschutzerklärung</h1>
      
      <div className="space-y-12 text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">1. Datenschutz auf einen Blick</h2>
          <h3 className="font-bold text-white mt-4 mb-2">Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">2. Hosting und Content Delivery Networks (CDN)</h2>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          <p className="font-bold text-white mt-2">Vercel</p>
          <p>Anbieter ist die Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="font-bold text-white mt-4 mb-2">Datenschutz</h3>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">4. Datenerfassung auf dieser Website</h2>
          <h3 className="font-bold text-white mt-4 mb-2">Cookies</h3>
          <p>Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an.</p>
        </section>

        <section className="pt-8 border-t border-white/10 text-xs">
          <p>Hinweis: Dies ist eine verkürzte Darstellung für Demonstrationszwecke. Eine vollständige DSGVO-konforme Erklärung sollte von einem Rechtsbeistand geprüft werden.</p>
        </section>
      </div>
    </div>
  );
}
