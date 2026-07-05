import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consulenze Nutrizionali — Online e in Studio a Milano",
  description:
    "Consulenze nutrizionali personalizzate con Dott.ssa Serena Medri: online via Google Meet o in studio a Milano. Percorsi per benessere, condizioni cliniche e rapporto con il cibo.",
  alternates: { canonical: "https://www.healthyserena.it/consulenze" },
};

const forWho = [
  "Chi vive un rapporto faticoso con il cibo",
  "Chi convive con patologie che richiedono attenzione alimentare",
  "Chi è stancə di diete yo-yo e restrizioni",
  "Chi vuole ritrovare equilibrio e serenità a tavola",
  "Chi desidera lavorare sulla prevenzione e sul benessere",
  "Chi ha vissuto o vive con disturbi del comportamento alimentare",
];

const steps = [
  { n: 1, title: "Primo contatto", text: "Mi racconti brevemente la tua situazione e le tue esigenze. Insieme valutiamo quale tipo di consulenza è più adatta e fissiamo la prima visita." },
  { n: 2, title: "Prima visita", text: "Raccogliamo la tua anamnesi, esploriamo le abitudini alimentari e di vita, definiamo obiettivi realistici e identifichiamo gli strumenti migliori." },
  { n: 3, title: "Follow-up", text: "Le visite di controllo monitorano l'andamento rispetto agli obiettivi. Il focus non è la perfezione, ma un equilibrio realistico e sostenibile." },
];

export default function ConsulenzePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Consulenze Nutrizionali",
            provider: { "@type": "Person", name: "Dott.ssa Serena Medri" },
            areaServed: [
              { "@type": "City", name: "Milano" },
              { "@type": "Country", name: "Italy" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Consulenze",
              itemListElement: [
                { "@type": "Offer", name: "Consulenza online", url: "https://www.healthyserena.it/consulenze/online" },
                { "@type": "Offer", name: "Consulenza in studio", url: "https://www.healthyserena.it/consulenze/studio" },
              ],
            },
          }),
        }}
      />

      {/* ── HERO ── */}
      <section className="section" style={{ paddingTop: "clamp(3rem,6vw,5rem)" }} aria-labelledby="consulenze-heading">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "clamp(2rem,5vw,4rem)", alignItems: "center" }}>
            <div>
              <div className="eyebrow">Consulenze nutrizionali</div>
              <h1 id="consulenze-heading" className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
                Un percorso pensato su di te
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
                Che tu scelga una consulenza <strong>online</strong> o{" "}
                <strong>in studio</strong>, il mio obiettivo è accompagnarti verso
                un rapporto più sereno con il cibo, rispettando i tuoi tempi, i
                tuoi bisogni e la tua storia.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "2rem" }}>
                Niente diete rigide o numeri da inseguire, ma educazione
                alimentare, ascolto del corpo e strategie concrete per stare
                meglio nel quotidiano.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/consulenze/online" className="btn btn-primary">
                  Consulenze online →
                </Link>
                <Link href="/consulenze/studio" className="btn btn-secondary">
                  Consulenze in studio →
                </Link>
              </div>
              <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                Hai dubbi su quale scegliere?{" "}
                <a href="https://wa.me/393299764410" target="_blank" rel="noopener noreferrer"
                  style={{ color: "var(--primary)", fontWeight: 600 }}>
                  Scrivimi su WhatsApp →
                </a>
              </p>
            </div>

            {/* Info card */}
            <div className="card" style={{ border: "2px solid var(--border)" }}>
              <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>Da dove partiamo?</div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.25rem", color: "var(--text-main)" }}>
                Durante il primo incontro raccogliamo:
              </h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  ["🩺", "Anamnesi medica e alimentare", "storia clinica, patologie, farmaci, esami"],
                  ["🏃", "Abitudini e stile di vita", "routine, lavoro, attività fisica, contesto familiare"],
                  ["💭", "Relazione con il cibo", "fame emotiva, senso di colpa, pensieri ricorrenti"],
                  ["📏", "Valutazione antropometrica", "peso, altezza e misurazioni (se indicato)"],
                ].map(([icon, label, sub]) => (
                  <li key={label as string} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.1rem", flexShrink: 0, marginTop: "0.1rem" }}>{icon}</span>
                    <div>
                      <span style={{ fontWeight: 600, color: "var(--text-main)", fontSize: "0.9rem" }}>{label}: </span>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{sub}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODALITÀ ── */}
      <section className="section section-alt" aria-labelledby="modalita-heading">
        <div className="container">
          <header className="section-header">
            <div className="eyebrow">Come possiamo lavorare insieme</div>
            <h2 id="modalita-heading" className="section-title">Online o in studio: a te la scelta</h2>
            <p className="section-subtitle">
              La struttura del percorso resta la stessa, cambiano solo le modalità.
              Scegli ciò che ti fa sentire più a tuo agio.
            </p>
          </header>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: 860, margin: "0 auto" }}>
            {[
              {
                tag: "Online",
                icon: "💻",
                title: "Consulenze online",
                desc: "Perfette se vivi lontano, hai poco tempo o ti senti più tranquillə a casa. Utilizziamo Google Meet per incontrarci in modo semplice e sicuro.",
                features: ["Ti colleghi da dove vuoi, con pc o smartphone", "Ricevi materiali e indicazioni in formato digitale", "Stessa cura e qualità di una visita in studio"],
                href: "/consulenze/online",
              },
              {
                tag: "In studio",
                icon: "🏢",
                title: "Consulenze in studio",
                desc: "Se preferisci l'incontro dal vivo, ti accolgo in uno spazio tranquillo e riservato a Milano.",
                features: ["Incontro in presenza — Milano Centrale", "Valutazione antropometrica completa", "Uno spazio protetto per confrontarci con calma"],
                href: "/consulenze/studio",
              },
            ].map((opt) => (
              <article key={opt.tag} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  background: "var(--primary-soft)", color: "var(--primary)",
                  fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.08em", padding: "0.3rem 0.75rem",
                  borderRadius: "100px", marginBottom: "1rem", width: "fit-content",
                }}>
                  {opt.icon} {opt.tag}
                </div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.75rem" }}>{opt.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1rem" }}>{opt.desc}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem", flex: 1 }}>
                  {opt.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                      <span style={{ color: "var(--primary)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={opt.href} className="btn btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                  Scopri di più →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COME FUNZIONA ── */}
      <section className="section" aria-labelledby="percorso-heading">
        <div className="container">
          <header className="section-header">
            <div className="eyebrow">Come funziona</div>
            <h2 id="percorso-heading" className="section-title">Il percorso in 3 passaggi</h2>
          </header>
          <div className="steps-grid">
            {steps.map((s) => (
              <article key={s.n} className="step-card">
                <div className="step-number">{s.n}</div>
                <div className="step-title">{s.title}</div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PER CHI ── */}
      <section className="section section-alt" aria-labelledby="perchi-heading">
        <div className="container">
          <header className="section-header">
            <div className="eyebrow">Per chi</div>
            <h2 id="perchi-heading" className="section-title">Per chi sono pensate le mie consulenze</h2>
            <p className="section-subtitle">Qualsiasi cosa ti pesi nella gestione dell'alimentazione, possiamo lavorarci insieme.</p>
          </header>
          <div className="pill-grid">
            {forWho.map((p) => (
              <span key={p} className="pill">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Prontə a iniziare il tuo percorso?</h2>
            <p>Puoi prenotare direttamente oppure scrivermi per capire insieme da dove ha più senso partire.</p>
            <div className="cta-actions">
              <Link href="/consulenze/online" className="btn btn-white">Prenota online</Link>
              <Link href="/consulenze/studio" className="btn btn-outline-white">Prenota in studio</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
