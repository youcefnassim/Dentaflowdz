import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DentaFlow — Dental Practice Management Software",
    template: "%s | DentaFlow",
  },
  description:
    "DentaFlow is modern dental practice management software designed for managing patients, appointments, clinical records, dental charts, treatment plans, and billing in one fast, offline-first desktop platform.",
  keywords: [
    "dental software",
    "dental practice management",
    "odontogram chart",
    "dental records software",
    "clinic management system",
    "offline dental software",
    "electron dental app",
    "dentist clinic software",
  ],
  authors: [{ name: "DentaFlow Technologies" }],
  creator: "DentaFlow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dentaflow.app",
    title: "DentaFlow — Dental Practice Management Software",
    description:
      "DentaFlow brings patients, appointments, treatments, dental charts, records and billing together in one powerful dental management platform.",
    siteName: "DentaFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "DentaFlow — Dental Practice Management Software",
    description:
      "DentaFlow brings patients, appointments, treatments, clinical records and billing together in one powerful dental management platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors duration-300">
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
