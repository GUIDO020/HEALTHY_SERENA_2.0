import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chi sono — Dott.ssa Serena Medri, Dietista Milano",
  description:
    "Conosci Dott.ssa Serena Medri: dietista a Milano con Master in DCA (Unibo), esperienza all'Ospedale San Carlo Borromeo, approccio anti-diet culture basato sull'empatia.",
  alternates: { canonical: "https://www.healthyserena.it/chi-sono" },
};

const timeline = [
  {
    year: "Oggi",
    title: "Libera Professione",
    text: "Esercito la libera professione online e in studio a Milano, adottando un approccio anti-diet culture basato sull'empatia, l'ascolto e il rispetto delle esigenze di ogni persona. Creo percorsi personalizzati per risultati concreti e sostenibili nel tempo.",
  },
  {
    year: "2024",
    title: "Attività Ospedaliera",
    text: "Dal 2024 lavoro come dietista presso l'Ospedale San Carlo Borromeo di Milano (ASST Santi Paolo Carlo), confrontandomi con diverse patologie e lavorando all'interno di un team multidisciplinare. Questo arricchisce il mio approccio professionale e la mia capacità di costruire piani nutrizionali personalizzati.",
  },
  {
    year: "2023",
    title: "Master in DCA",
    text: "Mi sono iscritta al Master in Trattamento Integrato dei Disturbi del Comportamento Alimentare, promosso dall'Università di Bologna e dalla Fondazione Gruber. Ho discusso una tesi sperimentale sull'immagine corporea e i comportamenti alimentari negli uomini adulti frequentanti palestre.",
  },
  {
    year: "2023",
    title: "Tesi di Laurea — Mindful Eating",
    text: "Ho contribuito alla realizzazione di un percorso di gruppo psico-nutrizionale basato sul Mindful Eating, rivolto a pazienti con obesità presso l'Ospedale Sant'Orsola. Ho condotto uno studio per valutarne l'efficacia rispetto ad approcci alternativi nel trattamento dell'obesità.",
  },
  {
    year: "2023",
    title: "Laurea in Dietistica",
    text: "Il percorso universitario non è stato solo formazione accademica, ma anche crescita personale. Mi ha permesso di sviluppare una consapevolezza critica nei confronti della diet culture e di costruire un rapporto più sano e sereno con il cibo.",
  },
];

const values = [
  { icon: "🫶🏻", title: "Empatia", text: "Ogni persona porta con sé una storia unica. Il mio punto di partenza è sempre l'ascolto, senza giudizi." },
  { icon: "🔬", title: "Evidence-based", text: "Il mio approccio è fondato sulle evidenze scientifiche più aggiornate, non su mode o regole rigide." },
  { icon: "🌱", title: "Sostenibilità", text: "Costruiamo insieme abitudini che durano nel tempo, non diete lampo che si dimenticano dopo una settimana." },
  { icon: "🤝", title: "Collaborazione", text: "Lavoro in sinergia con psicologi e psicoterapeuti per offrirti un percorso integrato e completo." },
];

export default function ChiSonoPage() {
  return (
    <>
      {/* Schema Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Serena Medri",
            jobTitle: "Dietista",
            honorificPrefix: "Dott.ssa",
            affiliation: {
              "@type": "Hospital",
              name: "Ospedale San Carlo Borromeo",
              address: { "@type": "PostalAddress", addressLocality: "Milano" },
            },
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Università di Bologna",
            },
            url: "https://www.healthyserena.it/chi-sono",
            image: "https://www.healthyserena.it/wp-content/uploads/2025/12/chi-sono-scaled.jpg",
            sameAs: ["https://www.instagram.com/healthyserena"],
          }),
        }}
      />

      {/* ── HERO ── */}
      <section className="section" aria-labelledby="chi-sono-heading" style={{ paddingTop: "clamp(3rem, 6vw, 5rem)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "clamp(2rem, 5vw, 4rem)", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{
                borderRadius: "var(--radius-2xl)",
                overflow: "hidden",
                boxShadow: "var(--shadow-xl)",
                aspectRatio: "4/5",
              }}>
                <Image
                  src="https://www.healthyserena.it/wp-content/uploads/2025/12/chi-sono-scaled.jpg"
                  alt="Dott.ssa Serena Medri, dietista"
                  width={480}
                  height={600}
                  priority
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* floating badge */}
              <div style={{
                position: "absolute", bottom: "1.5rem", left: "-1.5rem",
                background: "var(--bg-card)", borderRadius: "var(--radius-lg)",
                padding: "1rem 1.25rem", boxShadow: "var(--shadow-md)",
                border: "1px solid var(--border-light)",
              }}>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-main)" }}>
                  🏥 Ospedale San Carlo Borromeo
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>
                  Dietista dal 2024
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up">
              <div className="eyebrow">Conosciamoci meglio</div>
              <h1 id="chi-sono-heading" className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
                Chi sono
              </h1>
              <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
                Sono la <strong>Dott.ssa Serena Medri</strong> e sono una dietista.
                Come tale mi occupo di nutrizione e di quello che il cibo rappresenta:
                emozioni, salute, relazioni e benessere quotidiano.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                La mia strada non è stata lineare: durante questi cambiamenti ho
                imparato cosa significhi cercare equilibrio e come il cibo sia uno
                specchio dei nostri stati d&apos;animo.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "2rem" }}>
                Oggi esercito <strong>in studio a Milano e online</strong>, lavorando
                con persone che sentono il rapporto con il cibo faticoso, che vivono
                con una condizione clinica o che desiderano ritrovare equilibrio
                senza sensi di colpa.
              </p>

              <div style={{
                background: "var(--primary-soft)",
                border: "1px solid var(--accent-soft)",
                borderRadius: "var(--radius-lg)",
                padding: "1.25rem",
                display: "flex", gap: "0.75rem", alignItems: "flex-start",
              }}>
                <span style={{ fontSize: "1.5rem" }}>🫶🏻</span>
                <div>
                  <strong style={{ color: "var(--text-main)" }}>La mia convinzione:</strong>
                  <span style={{ color: "var(--text-muted)" }}>
                    {" "}non esiste una "dieta perfetta". Esiste un percorso costruito{" "}
                    <strong>su di te</strong>, sulle tue esigenze e sulla tua storia.
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
                <Link href="/prenota" className="btn btn-primary">Prenota un colloquio</Link>
                <Link href="/consulenze" className="btn btn-secondary">I miei servizi</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALORI ── */}
      <section className="section section-alt" aria-labelledby="valori-heading">
        <div className="container">
          <header className="section-header">
            <div className="eyebrow">Il mio approccio</div>
            <h2 id="valori-heading" className="section-title">Come lavoro</h2>
          </header>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {values.map((v) => (
              <div key={v.title} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{v.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.5rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section" aria-labelledby="formazione-heading">
        <div className="container">
          <header className="section-header">
            <div className="eyebrow">La mia formazione</div>
            <h2 id="formazione-heading" className="section-title">Il mio percorso professionale</h2>
            <p className="section-subtitle">
              Dalla formazione accademica alle specializzazioni, ecco come ho sviluppato
              le mie competenze nel campo della nutrizione e dei disturbi alimentari.
            </p>
          </header>

          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.title} className="timeline-item">
                <div className="timeline-year-wrap">
                  <div className="timeline-dot" />
                  <span className="timeline-year">{item.year}</span>
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="cta-banner">
            <h2>Vuoi iniziare un percorso insieme?</h2>
            <p>
              Prenota il tuo primo colloquio. È uno spazio di ascolto, senza giudizi,
              per capire davvero di cosa hai bisogno.
            </p>
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
