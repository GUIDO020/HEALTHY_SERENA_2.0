import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Nutrizione, benessere e rapporto con il cibo",
  description:
    "Articoli di Dott.ssa Serena Medri su nutrizione, benessere alimentare, disturbi del comportamento alimentare e strategie per vivere il cibo con più serenità.",
  alternates: { canonical: "https://www.healthyserena.it/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      {/* ── HERO ── */}
      <section className="section" style={{ paddingTop: "clamp(3rem,6vw,5rem)", paddingBottom: "2rem" }}>
        <div className="container">
          <header className="section-header">
            <div className="eyebrow">Blog</div>
            <h1 className="section-title">Nutrizione, benessere e cibo</h1>
            <p className="section-subtitle">
              Riflessioni, consigli pratici e contenuti educativi per vivere il
              cibo con più calma e consapevolezza.
            </p>
          </header>
        </div>
      </section>

      {/* ── POSTS GRID ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {posts.length === 0 ? (
            <div style={{
              textAlign: "center", padding: "4rem 2rem",
              background: "var(--primary-soft)", borderRadius: "var(--radius-xl)",
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✍️</div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text-main)" }}>
                Articoli in arrivo!
              </h2>
              <p style={{ color: "var(--text-muted)", maxWidth: 400, margin: "0 auto", marginBottom: "1.5rem" }}>
                Sto lavorando ai primi articoli. Iscriviti alla newsletter per
                essere notificatə non appena pubblico.
              </p>
              <NewsletterInline />
            </div>
          ) : (
            <>
              <div className="blog-grid">
                {posts.map((post) => (
                  <article key={post.slug} className="blog-card">
                    <div className="blog-card-img">
                      {post.cover ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={post.cover} alt={post.title} loading="lazy" />
                      ) : (
                        <div style={{ width: "100%", height: "100%", background: "var(--primary-soft)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem" }}>
                          🥗
                        </div>
                      )}
                    </div>
                    <div className="blog-card-body">
                      {post.tag && <div className="blog-tag">{post.tag}</div>}
                      <h2 className="blog-card-title">{post.title}</h2>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                        <div className="blog-card-meta">
                          <span>📅</span>
                          <span>{new Date(post.date).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}</span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="btn btn-ghost btn-sm"
                          style={{ padding: "0.4rem 0.75rem" }}
                        >
                          Leggi →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div style={{ marginTop: "4rem" }}>
                <div className="newsletter-box">
                  <div className="eyebrow" style={{ margin: "0 auto 0.75rem" }}>Newsletter</div>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.5rem" }}>
                    Ricevi i nuovi articoli in anteprima
                  </h2>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem" }}>
                    Niente spam. Solo contenuti utili, quando ho qualcosa di valore da condividere.
                  </p>
                  <NewsletterInline />
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function NewsletterInline() {
  return (
    <form
      className="newsletter-form"
      onSubmit={(e) => e.preventDefault()}
      action="/api/newsletter"
      method="post"
    >
      <label htmlFor="newsletter-email" style={{ display: "none" }}>Email</label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="La tua email"
        className="newsletter-input"
      />
      <button type="submit" className="btn btn-primary">
        Iscriviti →
      </button>
    </form>
  );
}
