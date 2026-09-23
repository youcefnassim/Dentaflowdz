import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dentaflow.website"),
  title: {
    default: "DentaFlow — Logiciel de gestion pour cabinet dentaire",
    template: "%s | DentaFlow",
  },
  description:
    "DentaFlow simplifie la gestion des cabinets dentaires : patients, rendez-vous, odontogrammes, traitements, facturation et statistiques, même hors ligne.",
  keywords: [
    "DentaFlow",
    "logiciel cabinet dentaire",
    "gestion dentaire",
    "odontogramme numérique",
    "dossier patient dentiste",
    "logiciel dentaire hors ligne",
    "facturation cabinet dentaire",
    "agenda dentiste",
  ],
  authors: [{ name: "DentaFlow" }],
  creator: "DentaFlow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.dentaflow.website",
    title: "DentaFlow — Logiciel de gestion pour cabinet dentaire",
    description:
      "DentaFlow simplifie la gestion des cabinets dentaires : patients, rendez-vous, odontogrammes, traitements, facturation et statistiques, même hors ligne.",
    siteName: "DentaFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "DentaFlow — Logiciel de gestion pour cabinet dentaire",
    description:
      "DentaFlow simplifie la gestion des cabinets dentaires : patients, rendez-vous, odontogrammes, traitements, facturation et statistiques, même hors ligne.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingWidgets />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

