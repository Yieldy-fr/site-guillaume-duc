import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Layout, ChatbotScript } from "@/components";

export const metadata: Metadata = {
  title:
    "Guillaume Duc — Je vous aide à protéger ceux que vous aimez | Patrimoine & Assurance, Paris",
  description:
    "Protéger vos proches, préparer votre retraite, anticiper les étapes de la vie — Guillaume Duc vous accompagne avec clarté, sans jargon et sans pression. Agent général AXA à Paris. Prenez rendez-vous.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"}></link>
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" rel="stylesheet"></link>
        <Script
          defer
          data-site="cabinet-guillaume-duc.fr"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        />
        <link rel="shortcut icon" href="/logos/logo_axa.svg" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`scroll-smooth h-full w-full`}>
        <ChatbotScript />
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
