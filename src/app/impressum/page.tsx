import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Navbar } from "@/components/freeways/Navbar";
import { Footer } from "@/components/freeways/Footer";
import { siteConfig } from "@/lib/site";

export default function Impressum() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Section>
          <Container className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-10">Impressum</h1>
            
            <div className="space-y-8 text-[var(--brand-gray)]">
              <div>
                <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-4">Angaben gemäß § 5 TMG</h2>
                <p>
                  {siteConfig.name}<br />
                  {siteConfig.contact.address.street}<br />
                  {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-4">Vertreten durch</h2>
                <p>Geschäftsführer: [Name des Geschäftsführers]</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-4">Kontakt</h2>
                <p>
                  Telefon: {siteConfig.contact.phone}<br />
                  E-Mail: {siteConfig.contact.email}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-4">Registereintrag</h2>
                <p>
                  Eintragung im Handelsregister.<br />
                  Registergericht: Amtsgericht Köln<br />
                  Registernummer: [Eintragen]
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-4">Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  [Eintragen]
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-4">EU-Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-[var(--brand-green)]" target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr/</a>.<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-4">Verbraucher­streit­beilegung/Universal-Schlichtungs­stelle</h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
