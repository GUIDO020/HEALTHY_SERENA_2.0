"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/chi-sono", label: "Chi sono" },
  {
    href: "/consulenze",
    label: "Consulenze",
    children: [
      { href: "/consulenze/online", label: "Online" },
      { href: "/consulenze/studio", label: "In studio" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/prenota", label: "Prenota" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`} role="banner">
      <div className="container">
        <nav className="navbar-inner" aria-label="Navigazione principale">
          {/* Logo */}
          <Link href="/" className="navbar-logo" aria-label="Healthy Serena — Home">
            Healthy<span>Serena</span>
          </Link>

          {/* Desktop nav */}
          <ul className="navbar-nav" role="list">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.href} style={{ position: "relative" }}>
                  <button
                    className={`nav-link${pathname.startsWith(link.href) ? " active" : ""}`}
                    onClick={() => setDropdownOpen((v) => !v)}
                    onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="menu"
                    style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
                  >
                    {link.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div
                      role="menu"
                      style={{
                        position: "absolute",
                        top: "calc(100% + 8px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "var(--bg-card)",
                        border: "1px solid var(--border-light)",
                        borderRadius: "var(--radius-lg)",
                        boxShadow: "var(--shadow-md)",
                        padding: "0.5rem",
                        minWidth: "180px",
                        zIndex: 200,
                        animation: "fadeInUp 0.15s ease-out",
                      }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className={`nav-link${pathname === child.href ? " active" : ""}`}
                          style={{ display: "block", padding: "0.625rem 0.875rem" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link${pathname === link.href ? " active" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Desktop CTAs */}
          <div className="navbar-cta">
            <Link href="/accesso" className="btn btn-ghost btn-sm">
              Accedi
            </Link>
            <Link href="/prenota" className="btn btn-primary btn-sm">
              Prenota
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span style={{ transform: mobileOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ transform: mobileOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            className="mobile-nav"
            aria-label="Navigazione mobile"
            style={{ display: "flex" }}
          >
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link${pathname.startsWith(link.href) ? " active" : ""}`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.1rem" }}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`nav-link${pathname === child.href ? " active" : ""}`}
                        style={{ fontSize: "0.875rem" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div style={{ display: "flex", gap: "0.75rem", padding: "0.5rem 1rem 0" }}>
              <Link href="/accesso" className="btn btn-secondary btn-sm" style={{ flex: 1, justifyContent: "center" }}>
                Accedi
              </Link>
              <Link href="/prenota" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: "center" }}>
                Prenota
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
