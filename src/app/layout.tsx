import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Layout, ChatbotScript } from "@/components";

export const metadata: Metadata = {
  title: "Cabinet Guillaume DUC - Expert en gestion de patrimoine",
  description:
    "Découvrez le Cabinet Guillaume DUC, votre partenaire de confiance en gestion de patrimoine. Nous offrons des conseils personnalisés pour optimiser votre patrimoine et atteindre vos objectifs financiers. Contactez-nous dès aujourd'hui pour une consultation gratuite.",
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
