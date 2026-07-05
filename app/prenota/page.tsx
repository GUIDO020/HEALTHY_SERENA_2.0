import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prenota una Consulenza Nutrizionale",
  description:
    "Prenota la tua prima visita o una visita di controllo con Dott.ssa Serena Medri — online o in studio a Milano. Scegli giorno e orario.",
  alternates: { canonical: "https://www.healthyserena.it/prenota" },
  robots: { index: true, follow: true },
};

export default function PrenotaPage() {
  return (
    <div className="section" style={{ paddingTop: "clamp(3rem,6vw,5rem)" }}>
      <div className="container">
        <header className="section-header">
          <div className="eyebrow">Calendario</div>
          <h1 className="section-title">Prenota la tua consulenza</h1>
          <p className="section-subtitle">
            Scegli il tipo di consulenza, il giorno e l&apos;orario che fa per te.
            Riceverai una conferma via email con tutti i dettagli.
          </p>
        </header>

        {/* Type selector */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem", maxWidth: 860, margin: "0 auto 3rem",
        }}>
          {[
            { icon: "💻", label: "Prima visita online", color: "var(--primary-soft)" },
            { icon: "🏢", label: "Prima visita in studio", color: "var(--primary-soft)" },
            { icon: "💻", label: "Visita di controllo online", color: "var(--accent-soft)" },
            { icon: "🏢", label: "Visita di controllo in studio", color: "var(--accent-soft)" },
          ].map((t) => (
            <div
              key={t.label}
              style={{
                background: t.color,
                border: "1.5px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.25rem",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 180ms ease-out",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "var(--text-main)",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{t.icon}</div>
              {t.label}
            </div>
          ))}
        </div>

        {/* Cal.com embed placeholder */}
        <div style={{
          background: "var(--bg-card)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border-light)",
          boxShadow: "var(--shadow-md)",
          padding: "2rem",
          minHeight: 600,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: "1rem",
          color: "var(--text-muted)",
        }}>
          {/* Cal.com embed goes here — replace with actual Cal.com embed code */}
          <div style={{ fontSize: "2rem" }}>📅</div>
          <p style={{ textAlign: "center", maxWidth: 400, fontSize: "0.9375rem" }}>
            Il calendario di prenotazione sarà qui — configuralo su{" "}
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontWeight: 600 }}>
              cal.com
            </a>{" "}
            e incolla il codice embed.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://cal.com/healthyserena/prima-visita-online" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Prima visita online
            </a>
            <a href="https://cal.com/healthyserena/prima-visita-in-studio" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Prima visita in studio
            </a>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
            Preferisci prenotare via WhatsApp o hai domande prima di fissare una visita?{" "}
          </p>
          <a
            href="https://wa.me/393299764410"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ marginTop: "0.75rem" }}
          >
            💬 Scrivimi su WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
