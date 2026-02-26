import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function Trust() {
  const certificates = [
    { title: "ISO 9001", description: "Qualitätsmanagement" },
    { title: "ISO 45001", description: "Arbeitsschutzmanagement" },
    { title: "ISO 14001", description: "Umweltmanagement" },
    { title: "ISO 27001", description: "Informationssicherheit" },
  ];

  return (
    <Section className="bg-(--brand-anthracite) border-t border-b border-white/5">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Zertifizierte <span className="text-(--brand-green)">Exzellenz</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unser Anspruch an höchste Qualität, Sicherheit und Nachhaltigkeit wird durch international anerkannte Normen bestätigt.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div key={cert.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all hover:border-(--brand-green)/50 hover:bg-white/10 group">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-(--brand-green) transition-colors">{cert.title}</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{cert.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
