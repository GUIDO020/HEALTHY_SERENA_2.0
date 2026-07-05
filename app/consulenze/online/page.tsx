import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consulenze Nutrizionali Online | Dietista via Google Meet",
  description:
    "Consulenze nutrizionali online con Dott.ssa Serena Medri via Google Meet. Flessibile, personalizzata, da casa tua. Prima visita e follow-up con la stessa qualità dello studio.",
  alternates: {
    canonical: "https://www.healthyserena.it/consulenze/online",
  },
};

const pricing = [
  {
    type: "Prima Visita",
    name: "Prima visita online",
    price: "90",
    note: "circa 60-75 min",
    features: [
      "Anamnesi alimentare e clinica completa",
      "Definizione obiettivi personalizzati",
      "Prima valutazione e indicazioni immediate",
      "Piano nutrizionale personalizzato incluso",
      "Documenti in area riservata",
    ],
    featured: false,
    cta: "Prenota la prima visita",
    href: "https://cal.com/healthyserena/prima-visita-online",
  },
  {
    type: "Follow-up",
    name: "Visita di controllo online",
    price: "60",
    note: "circa 40-50 min",
    features: [
      "Monitoraggio progressi e difficoltà",
      "Revisione e aggiornamento del piano",
      "Supporto per la quotidianità",
      "Strumenti pratici personalizzati",
      "Documenti in area riservata",
    ],
    featured: true,
    tag: "Più scelto",
    cta: "Prenota una visita di controllo",
    href: "https://cal.com/healthyserena/visita-di-controllo-online",
  },
];

const faqs = [
  {
    q: "Cosa mi serve per la consulenza online?",
    a: "Bastano un pc, tablet o smartphone con webcam e microfono, e una buona connessione internet. Utilizziamo Google Meet — ti mando il link prima della visita.",
  },
  {
    q: "La consulenza online è efficace quanto quella in studio?",
    a: "Assolutamente sì. Il percorso, la qualità e l'attenzione sono identici. L'unica differenza è che non posso effettuare la valutazione antropometrica (misurazione) in presenza.",
  },
  {
    q: "Come ricevo il mio piano alimentare?",
    a: "Dopo la visita, caricherò il tuo piano direttamente nell'area riservata del sito. Riceverai una notifica via email e potrai scaricarlo in qualsiasi momento.",
  },
];

export default function ConsulenzaOnlinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Consulenza Nutrizionale Online",
            provider: { "@type": "Person", name: "Dott.ssa Serena Medri" },
            description: "Consulenza nutrizionale online via Google Meet, personalizzata e flessibile.",
            url: "https://www.healthyserena.it/consulenze/online",
            offers: [
              { "@type": "Offer", name: "Prima visita online", price: "90", priceCurrency: "EUR" },
              { "@type": "Offer", name: "Visita di controllo online", price: "60", priceCurrency: "EUR" },
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
            <li aria-current="page">Online</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="section" style={{ paddingTop: "2rem" }} aria-labelledby="online-heading">
        <div className="container">
          <div style={{ maxWidth: 720 }}>
            <div className="eyebrow">💻 Consulenze nutrizionali online</div>
            <h1 id="online-heading" className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
              Consulenze online via Google Meet
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
              Un percorso completo e personalizzato che puoi seguire da casa, dal
              lavoro o da dove ti senti più al sicuro, senza rinunciare alla
              qualità di una consulenza in studio.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Ti basta una buona connessione e un dispositivo con webcam e
              microfono. Il link per il Meet ti arriva via email prima della visita.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/prenota" className="btn btn-primary btn-lg">
                Prenota ora →
              </Link>
              <Link href="/consulenze/studio" className="btn btn-secondary">
                Preferisci lo studio? →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VANTAGGI ── */}
      <section className="section section-alt" aria-label="Vantaggi">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {[
              { icon: "🌍", title: "Da ovunque", text: "Ti colleghi da casa, dall'ufficio, o mentre sei in viaggio. Nessun vincolo geografico." },
              { icon: "⏰", title: "Orari flessibili", text: "Slot mattutini, pomeridiani e serali per adattarsi ai tuoi impegni." },
              { icon: "🔒", title: "Sicuro e riservato", text: "Google Meet è protetto. La tua privacy è garantita in ogni momento." },
              { icon: "📁", title: "Documenti digitali", text: "Piani e fatture direttamente nell'area riservata, sempre accessibili." },
            ].map((v) => (
              <div key={v.title} style={{
                background: "var(--bg-card)", borderRadius: "var(--radius-lg)",
                padding: "1.5rem", border: "1px solid var(--border-light)",
              }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{v.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.4rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREZZI ── */}
      <section className="section" aria-labelledby="prezzi-heading">
        <div className="container">
          <header className="section-header">
            <div className="eyebrow">Tariffe</div>
            <h2 id="prezzi-heading" className="section-title">Consulenze online</h2>
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
          <p style={{ textAlign: "center", marginTop: "1.25rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Hai bisogno di un pacchetto personalizzato?{" "}
            <a href="https://wa.me/393299764410" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontWeight: 600 }}>
              Scrivimi →
            </a>
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-alt" aria-labelledby="faq-online-heading">
        <div className="container">
          <header className="section-header">
            <div className="eyebrow">FAQ</div>
            <h2 id="faq-online-heading" className="section-title">Domande sulle consulenze online</h2>
          </header>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item" style={{ pointerEvents: "none" }}>
                <div className="faq-question" style={{ cursor: "default" }}>
                  <span>{f.q}</span>
                </div>
                <div className="faq-answer" style={{ maxHeight: "none" }}>
                  <p className="faq-answer-inner">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
