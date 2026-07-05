import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consulenze Nutrizionali in Studio Milano | Dietista Centro",
  description:
    "Consulenze nutrizionali in studio a Milano — Via Fabio Filzi 45, Centro Clinico Nuime. Valutazione antropometrica, piano personalizzato. Prima visita e follow-up.",
  alternates: {
    canonical: "https://www.healthyserena.it/consulenze/studio",
  },
};

const pricing = [
  {
    type: "Prima Visita",
    name: "Prima visita in studio",
    price: "100",
    note: "circa 60-75 min",
    features: [
      "Anamnesi alimentare e clinica completa",
      "Valutazione antropometrica (peso, misurazioni)",
      "Analisi composizione corporea se necessaria",
      "Piano nutrizionale personalizzato incluso",
      "Documenti in area riservata",
    ],
    featured: false,
    cta: "Prenota la prima visita",
    href: "https://cal.com/healthyserena/prima-visita-in-studio",
  },
  {
    type: "Follow-up",
    name: "Visita di controllo in studio",
    price: "70",
    note: "circa 40-50 min",
    features: [
      "Monitoraggio progressi con misurazione",
      "Revisione e aggiornamento del piano",
      "Valutazione antropometrica di controllo",
      "Strumenti pratici e supporto",
      "Documenti in area riservata",
    ],
    featured: true,
    tag: "Più scelto",
    cta: "Prenota una visita di controllo",
    href: "https://cal.com/healthyserena/visita-di-controllo-studio",
  },
];

export default function ConsulenzaStudioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Consulenza Nutrizionale in Studio",
            provider: { "@type": "Person", name: "Dott.ssa Serena Medri" },
            description: "Consulenza nutrizionale in studio a Milano con valutazione antropometrica.",
            url: "https://www.healthyserena.it/consulenze/studio",
            areaServed: { "@type": "City", name: "Milano" },
            location: {
              "@type": "Place",
              name: "Centro Clinico Nuime",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via Fabio Filzi 45",
                addressLocality: "Milano",
                addressCountry: "IT",
              },
            },
            offers: [
              { "@type": "Offer", name: "Prima visita in studio", price: "100", priceCurrency: "EUR" },
              { "@type": "Offer", name: "Visita di controllo in studio", price: "70", priceCurrency: "EUR" },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ paddingTop: "1.5rem", paddingBottom: "0.5rem" }}>
        <div className="container">
          <ol style={{ display: "flex", gap: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            <li><Link href="/" style={{ color: "var(--primary)" }}>Home</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/consulenze" style={{ color: "var(--primary)" }}>Consulenze</Link></li>
            <li aria-hidden>›</li>
            <li aria-current="page">In studio</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="section" style={{ paddingTop: "2rem" }} aria-labelledby="studio-heading">
        <div className="container">
          <div style={{ maxWidth: 720 }}>
            <div className="eyebrow">🏢 Consulenze in studio a Milano</div>
            <h1 id="studio-heading" className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
              Consulenze in studio — Via Fabio Filzi 45, Milano
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
              Se preferisci l&apos;incontro dal vivo, ti accolgo presso il{" "}
              <strong>Centro Clinico Nuime</strong> in uno spazio tranquillo e
              riservato, a pochi minuti dalla stazione Milano Centrale.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Le visite in studio includono la <strong>valutazione antropometrica</strong>{" "}
              (peso, altezza, misurazioni corporee) e, se necessario, la{" "}
              valutazione della composizione corporea.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/prenota" className="btn btn-primary btn-lg">Prenota ora →</Link>
              <Link href="/consulenze/online" className="btn btn-secondary">Preferisci online? →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOVE ── */}
      <section className="section section-alt" aria-labelledby="dove-heading">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
            <div>
              <div className="eyebrow">Dove trovarci</div>
              <h2 id="dove-heading" className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
                Centro Clinico Nuime — Milano
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: "📍", label: "Indirizzo", text: "Via Fabio Filzi 45, 20124 Milano" },
                  { icon: "🚇", label: "Metro", text: "MM2 Caiazzo / MM3 Centrale FS (5 min a piedi)" },
                  { icon: "🚌", label: "Bus", text: "Linee 60, 81, 92 — fermata Filzi" },
                  { icon: "🅿️", label: "Parcheggio", text: "Parcheggi pubblici nelle vie circostanti" },
                ].map((l) => (
                  <div key={l.label} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{l.icon}</span>
                    <div>
                      <span style={{ fontWeight: 600, color: "var(--text-main)", fontSize: "0.9rem" }}>{l.label}: </span>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{l.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://maps.app.goo.gl/vVfFTVqbt7arB6xk6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: "1.5rem" }}
              >
                📍 Apri su Google Maps
              </a>
            </div>

            {/* Map embed placeholder */}
            <div style={{
              borderRadius: "var(--radius-xl)", overflow: "hidden",
              boxShadow: "var(--shadow-md)", border: "1px solid var(--border-light)",
              aspectRatio: "4/3", background: "var(--primary-soft)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.8!2d9.2032!3d45.4849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI5JzA1LjYiTiA5wrAxMicrMTEuNSJF!5e0!3m2!1sit!2sit!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Centro Clinico Nuime — Via Fabio Filzi 45, Milano"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PREZZI ── */}
      <section className="section" aria-labelledby="prezzi-studio-heading">
        <div className="container">
          <header className="section-header">
            <div className="eyebrow">Tariffe</div>
            <h2 id="prezzi-studio-heading" className="section-title">Consulenze in studio</h2>
            <p className="section-subtitle">Prezzi chiari, senza sorprese. Fattura elettronica inclusa.</p>
          </header>
          <div className="pricing-grid">
            {pricing.map((p) => (
              <div key={p.name} className={`pricing-card${p.featured ? " featured" : ""}`}>
                {p.tag && <div className="pricing-tag">{p.tag}</div>}
                <div className="pricing-type">{p.type}</div>
                <div className="pricing-name">{p.name}</div>
                <div className="pricing-price">€{p.price}</div>
                <div className="pricing-price-note">{p.note}</div>
                <hr className="pricing-divider" />
                <ul className="pricing-features">
                  {p.features.map((f) => (
                    <li key={f} className="pricing-feature">{f}</li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn${p.featured ? " btn-white" : " btn-primary"}`}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {p.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="cta-banner">
            <h2>Prenota la tua visita in studio</h2>
            <p>Scegli il giorno e l&apos;orario che fa per te. Il reminder con le indicazioni per lo studio ti arriva via email.</p>
            <div className="cta-actions">
              <Link href="/prenota" className="btn btn-white btn-lg">Prenota ora →</Link>
              <a href="https://wa.me/393299764410" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
