import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Healthy Serena | Dott.ssa Serena Medri — Dietista a Milano",
  description:
    "Se sei stancə di sentirti in guerra con il cibo, sei nel posto giusto. Percorsi nutrizionali personalizzati, online e in studio a Milano. Approccio empatico e basato sulle evidenze.",
  alternates: { canonical: "https://www.healthyserena.it" },
};

const services = [
  {
    icon: "🍽️",
    title: "Benessere e stile di vita",
    text: "Percorso verso uno stile di vita sano ed equilibrato, con scelte alimentari più consapevoli. Niente sensi di colpa, niente schemi rigidi: solo benessere reale, costruito per durare.",
    href: "/consulenze",
  },
  {
    icon: "🩺",
    title: "Approccio clinico personalizzato",
    text: "Lavoro in presenza di condizioni cliniche come diabete, obesità, ipertensione, dislipidemie e patologie gastrointestinali e renali, con piani personalizzati sulla tua storia.",
    href: "/consulenze",
  },
  {
    icon: "💜",
    title: "Comportamento alimentare",
    text: "Percorsi per migliorare il rapporto con il cibo e con il corpo, supportando chi soffre di disturbi del comportamento alimentare, fame nervosa e comportamenti disfunzionali.",
    href: "/consulenze",
  },
];

const steps = [
  {
    n: 1,
    title: "Primo colloquio",
    text: "Raccogliamo la tua storia alimentare, le eventuali condizioni cliniche, lo stile di vita e le tue aspettative. Uno spazio di ascolto, senza giudizi.",
  },
  {
    n: 2,
    title: "Piano personalizzato",
    text: "Costruisco un percorso nutrizionale su misura: guida, piano alimentare flessibile o strumenti pratici per gestire spesa, pasti fuori casa, abitudini familiari.",
  },
  {
    n: 3,
    title: "Follow-up e supporto",
    text: "Le visite di controllo monitorano l'andamento rispetto agli obiettivi. Il focus non è la perfezione, ma un equilibrio realistico, funzionale e sostenibile.",
  },
];

const faqs = [
  {
    q: "Qual è la differenza tra dietista e nutrizionista?",
    a: "Il dietista è un professionista sanitario con laurea triennale in Dietistica, abilitato per legge a prescrivere piani alimentari clinici. Il nutrizionista è un titolo non regolamentato in Italia: chiunque può usarlo. Serena è Dott.ssa in Dietistica, iscritta all'albo.",
  },
  {
    q: "Le consulenze online sono efficaci quanto quelle in studio?",
    a: "Sì. La struttura del percorso è identica: anamnesi completa, piano personalizzato, follow-up regolari. La differenza è solo logistica. Molti pazienti preferiscono l'online per la comodità e la continuità anche quando viaggiano.",
  },
  {
    q: "Quanto dura il primo colloquio?",
    a: "La prima visita dura circa 60-75 minuti. È il momento più importante: raccogliamo la tua storia alimentare e clinica, parliamo delle tue abitudini e definiamo gli obiettivi insieme.",
  },
  {
    q: "Lavori anche con persone che non hanno patologie specifiche?",
    a: "Assolutamente sì. Lavoro con chiunque voglia migliorare il proprio rapporto con il cibo, ritrovare equilibrio a tavola o semplicemente imparare a mangiare in modo più consapevole e sostenibile.",
  },
  {
    q: "Come posso accedere ai miei documenti (fatture, piani alimentari)?",
    a: 'Dopo ogni visita, puoi trovare i tuoi documenti nell\'area riservata del sito. Accedi con la tua email tramite link sicuro — nessuna password da ricordare. Troverai fatture, piani alimentari e referti sempre disponibili.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Healthy Serena — Dott.ssa Serena Medri",
            description:
              "Dietista a Milano. Consulenze nutrizionali online e in studio.",
            url: "https://www.healthyserena.it",
            telephone: "+393299764410",
            email: "info@healthyserena.it",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Via Fabio Filzi 45",
              addressLocality: "Milano",
              addressCountry: "IT",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 45.4849,
              longitude: 9.2032,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday","Tuesday","Wednesday","Thursday","Friday",
              ],
              opens: "09:00",
              closes: "19:00",
            },
            priceRange: "€€",
            image:
              "https://www.healthyserena.it/wp-content/uploads/2025/12/PRIMA-PAGINA-2-scaled.jpg",
          }),
        }}
      />

      {/* ── HERO ── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fade-in-up">
              <div className="hero-eyebrow">
                <span>🫶🏻</span>
                Benvenutə sul mio sito · Dott.ssa Serena Medri
              </div>
              <h1 id="hero-heading" className="hero-title">
                Se sei stancə di sentirti{" "}
                <em>in guerra con il cibo</em>, sei nel posto giusto.
              </h1>
              <p className="hero-subtitle">
                Come dietista, ti accompagno in un percorso che va oltre la
                "solita dieta": niente sensi di colpa, niente regole rigide, ma{" "}
                <strong>ascolto</strong>, <strong>personalizzazione</strong> e{" "}
                <strong>attenzione</strong> alla tua storia con il cibo.
              </p>
              <div className="hero-cta-row">
                <Link href="/prenota" className="btn btn-primary btn-lg">
                  Inizia il tuo percorso →
                </Link>
                <Link href="#servizi" className="btn btn-secondary btn-lg">
                  Scopri di cosa mi occupo
                </Link>
              </div>
              <div className="hero-trust">
                <div className="hero-trust-item">
                  <span className="hero-trust-icon">🏥</span>
                  <span>Ospedale San Carlo Borromeo, Milano</span>
                </div>
                <div className="hero-trust-item">
                  <span className="hero-trust-icon">🎓</span>
                  <span>Master in DCA · Unibo & Fond. Gruber</span>
                </div>
                <div className="hero-trust-item">
                  <span className="hero-trust-icon">✅</span>
                  <span>Approccio evidence-based</span>
                </div>
              </div>
            </div>

            <div className="hero-photo-wrap animate-fade-in-up delay-2">
              <div className="hero-photo-card">
                <Image
                  src="https://www.healthyserena.it/wp-content/uploads/2025/12/PRIMA-PAGINA-2-scaled.jpg"
                  alt="Dott.ssa Serena Medri durante una consulenza nutrizionale"
                  width={600}
                  height={750}
                  priority
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
                <div className="hero-photo-badge">
                  <div className="hero-photo-badge-name">Dott.ssa Serena Medri</div>
                  <div className="hero-photo-badge-role">
                    Dietista · Online & Studio Milano
                  </div>
                </div>
              </div>
              <div className="hero-float-tag">
                <span>♡</span> Consulenze online e in studio
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIZI ── */}
      <section id="servizi" className="section section-alt" aria-labelledby="servizi-heading">
        <div className="container">
          <header className="section-header">
            <div className="eyebrow">Cosa posso fare per te</div>
            <h2 id="servizi-heading" className="section-title">
              Di cosa mi occupo
            </h2>
            <p className="section-subtitle">
              Il mio lavoro non è farti perdere peso velocemente, ma accompagnarti
              nella costruzione di uno stile di vita{" "}
              <strong>equilibrato e sostenibile</strong>, mantenendo un{" "}
              <strong>rapporto sereno con il cibo</strong>, in ogni fase della
              tua vita.
            </p>
          </header>

          <div className="services-grid">
            {services.map((s) => (
              <article key={s.title} className="card animate-fade-in-up">
                <div className="card-icon">{s.icon}</div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.75rem" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  {s.text}
                </p>
                <Link
                  href={s.href}
                  className="btn-ghost"
                  style={{ padding: "0.5rem 0", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
                >
                  Scopri di più →
                </Link>
              </article>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "2.5rem",
              fontStyle: "italic",
              color: "var(--text-muted)",
              fontSize: "0.9375rem",
            }}
          >
            Se senti che il tuo rapporto con il cibo è faticoso, ricorda:{" "}
            <strong>non si è mai "troppo poco malatə" per chiedere aiuto</strong>.
          </p>
        </div>
      </section>

      {/* ── COME FUNZIONA ── */}
      <section id="percorso" className="section" aria-labelledby="percorso-heading">
        <div className="container">
          <header className="section-header">
            <div className="eyebrow">Come lavoriamo insieme</div>
            <h2 id="percorso-heading" className="section-title">
              Come funziona il percorso
            </h2>
            <p className="section-subtitle">
              Ogni persona è diversa. Per questo il percorso è flessibile e si
              adatta al tuo punto di partenza, ai tuoi obiettivi e al tempo che
              hai a disposizione.
            </p>
          </header>

          <div className="steps-grid">
            {steps.map((s) => (
              <article key={s.n} className="step-card animate-fade-in-up" style={{ animationDelay: `${s.n * 0.1}s` }}>
                <div className="step-number">{s.n}</div>
                <div className="step-title">{s.title}</div>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                  {s.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-alt" aria-labelledby="faq-heading">
        <div className="container">
          <header className="section-header">
            <div className="eyebrow">Domande frequenti</div>
            <h2 id="faq-heading" className="section-title">
              Hai delle domande?
            </h2>
            <p className="section-subtitle">
              Le risposte alle domande più comuni. Se non trovi quello che cerchi,
              scrivimi su WhatsApp.
            </p>
          </header>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-banner">
            <h2 id="cta-heading">Prontə a iniziare il tuo percorso?</h2>
            <p>
              Che tu voglia lavorare sul benessere generale, su una condizione
              clinica o sul tuo rapporto con il cibo, possiamo farlo passo dopo
              passo.
            </p>
            <div className="cta-actions">
              <Link href="/prenota" className="btn btn-white btn-lg">
                Prenota una consulenza 📅
              </Link>
              <a
                href="https://wa.me/393299764410"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-lg"
              >
                💬 Scrivimi su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
