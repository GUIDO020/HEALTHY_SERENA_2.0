import Link from "next/link";

const footerLinks = {
  servizi: [
    { href: "/consulenze/online", label: "Consulenze Online" },
    { href: "/consulenze/studio", label: "Consulenze in Studio" },
    { href: "/prenota", label: "Prenota una visita" },
  ],
  info: [
    { href: "/chi-sono", label: "Chi sono" },
    { href: "/blog", label: "Blog" },
    { href: "/accesso", label: "Area riservata" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/termini-condizioni", label: "Termini & Condizioni" },
    { href: "/cookies-policy", label: "Cookie Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
};

const socialLinks = [
  {
    href: "https://www.instagram.com/healthyserena",
    label: "Instagram",
    icon: "📸",
  },
  {
    href: "https://wa.me/393299764410",
    label: "WhatsApp",
    icon: "💬",
  },
  {
    href: "mailto:info@healthyserena.it",
    label: "Email",
    icon: "✉️",
  },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand">HealthySerena</div>
            <p className="footer-desc">
              Dott.ssa Serena Medri, dietista a Milano. Percorsi nutrizionali
              personalizzati online e in studio, con approccio empatico e basato
              sulle evidenze scientifiche.
            </p>
            <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    transition: "background 180ms ease-out",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(255,255,255,.2)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(255,255,255,.1)")
                  }
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Servizi */}
          <div>
            <p className="footer-heading">Servizi</p>
            <ul className="footer-links" role="list">
              {footerLinks.servizi.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="footer-heading">Informazioni</p>
            <ul className="footer-links" role="list">
              {footerLinks.info.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="footer-heading">Legale</p>
            <ul className="footer-links" role="list">
              {footerLinks.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Dott.ssa Serena Medri — P.IVA xxxxxxxx
            — Iscritta all&apos;Albo dei Dietisti
          </p>
          <p>
            Studio:{" "}
            <a
              href="https://maps.app.goo.gl/vVfFTVqbt7arB6xk6"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,.6)", textDecoration: "underline" }}
            >
              Centro Clinico Nuime, Via Fabio Filzi 45 — Milano
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
