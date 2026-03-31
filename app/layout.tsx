import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaMedia Studio — Vidéos IA Social Media pour Entreprises",
  description: "Votre contenu social media en 48h. Vidéos IA premium pour TikTok, Instagram Reels et LinkedIn. Résultats garantis.",
  openGraph: {
    title: "NovaMedia Studio",
    description: "Vidéos IA Social Media — Livraison 48h",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
