/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Layout, FixedPlugin } from "@/components";

export const metadata: Metadata = {
  title: "Next.js + Tailwind Portfolio Page",
  description:
    "Introducing Tailwind Portfolio Page, a versatile and stylish portfolio template built on the foundation of Tailwind CSS and Material Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"}></link>
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" rel="stylesheet"></link>
        <script
          defer
          data-site="cabinet-guillaume-duc.fr"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`scroll-smooth`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
