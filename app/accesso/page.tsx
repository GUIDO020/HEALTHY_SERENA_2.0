"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function AccessoPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setLoading(false);

    if (error) {
      setError("Errore nell'invio. Riprova o scrivici a info@healthyserena.it");
    } else {
      setSent(true);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card animate-fade-in-up">
        <div className="auth-logo">HealthySerena</div>

        {!sent ? (
          <>
            <h1 className="auth-title">Accedi all&apos;area riservata</h1>
            <p className="auth-subtitle">
              Inserisci la tua email. Ti invieremo un link sicuro — nessuna
              password da ricordare.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Indirizzo email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="la-tua-email@esempio.it"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {error && (
                <div className="alert alert-error" style={{ marginBottom: "1rem" }}>
                  ⚠️ {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full"
                style={{ justifyContent: "center", opacity: loading ? 0.7 : 1 }}
              >
                {loading ? "Invio in corso…" : "Inviami il link di accesso →"}
              </button>
            </form>

            <p style={{ fontSize: "0.8125rem", color: "var(--text-light)", textAlign: "center", marginTop: "1.5rem" }}>
              Non hai ancora un account?{" "}
              <a href="https://wa.me/393299764410" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontWeight: 600 }}>
                Scrivimi per accedere →
              </a>
            </p>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✉️</div>
            <h1 className="auth-title">Controlla la tua email</h1>
            <p className="auth-subtitle">
              Ti abbiamo inviato un link sicuro a{" "}
              <strong style={{ color: "var(--text-main)" }}>{email}</strong>.
              Clicca il link per accedere — scade in 10 minuti.
            </p>
            <div className="alert alert-success" style={{ marginBottom: "1.5rem" }}>
              ✅ Email inviata correttamente
            </div>
            <button
              onClick={() => { setSent(false); setEmail(""); }}
              className="btn btn-ghost"
              style={{ fontSize: "0.875rem" }}
            >
              Usa un&apos;altra email
            </button>
          </div>
        )}

        <div
          style={{
            borderTop: "1px solid var(--border-light)",
            marginTop: "2rem",
            paddingTop: "1.25rem",
            textAlign: "center",
          }}
        >
          <Link href="/" style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            ← Torna al sito
          </Link>
        </div>
      </div>
    </div>
  );
}
