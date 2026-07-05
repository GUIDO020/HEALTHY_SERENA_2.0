import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.healthyserena.it"),
  title: {
    default: "Healthy Serena | Dott.ssa Serena Medri — Dietista a Milano",
    template: "%s | Healthy Serena",
  },
  description:
    "Dott.ssa Serena Medri, dietista a Milano. Consulenze nutrizionali online e in studio: approccio empatico, basato sulle evidenze scientifiche. Nessuna dieta rigida.",
  keywords: [
    "dietista Milano",
    "consulenza nutrizionale online",
    "consulenza in studio Milano",
    "dietista online",
    "Serena Medri dietista",
    "disturbi comportamento alimentare",
    "nutrizionista Milano",
    "healthy serena",
  ],
  authors: [{ name: "Dott.ssa Serena Medri" }],
  creator: "Dott.ssa Serena Medri",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.healthyserena.it",
    siteName: "Healthy Serena",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healthy Serena — Dott.ssa Serena Medri, Dietista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@healthyserena",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
