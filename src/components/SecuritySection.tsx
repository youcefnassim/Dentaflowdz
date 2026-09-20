"use client";

import React, { useState, useEffect, useRef } from "react";
import { Lock, HardDrive, Key, Save, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function SecuritySection() {
  const { language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const securityCards = [
    {
      title: language === "fr" ? "Authentification Sécurisée" : "Authentication",
      description: language === "fr" ? "Accès contrôlé au logiciel avec identifiants praticiens et gestion des rôles." : "Controlled access to the application with role-based practitioner logins and password controls.",
      icon: Lock,
    },
    {
      title: language === "fr" ? "Données 100% Locales" : "Local Data",
      description: language === "fr" ? "Stockage local direct sur votre poste de travail sans dépendance au cloud." : "Data stored locally on your workstation according to the application's local architecture.",
      icon: HardDrive,
    },
    {
      title: language === "fr" ? "Protection par Licence" : "License Protection",
      description: language === "fr" ? "Système d'activation protégé avec vérification liée au matériel." : "Protected software activation and hardware-bound licensing verification system.",
      icon: Key,
    },
    {
      title: language === "fr" ? "Sauvegarde & Restauration" : "Backup & Recovery",
      description: language === "fr" ? "Workflows de sauvegarde et d'exportation fiables configurés par l'administrateur." : "Support reliable backup and data export recovery workflows when configured by clinic administrators.",
      icon: Save,
    },
  ];

  // Tripled cards array for continuous seamless infinite auto-scrolling loop
  const displayCards = [...securityCards, ...securityCards, ...securityCards];

  // Auto-scroll continuous loop
  useEffect(() => {
    if (isPaused || !scrollRef.current) return;

    const container = scrollRef.current;
    let animationFrameId: number;

    const scroll = () => {
      if (!container) return;
      container.scrollLeft += 1.2;

      // Loop back smoothly when reaching one third of total scroll width
      if (container.scrollLeft >= container.scrollWidth / 3) {
        container.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, language]);

  return (
    <section className="py-20 bg-slate-900 text-white relative border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-4 py-1.5 rounded-full border border-blue-800 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            {language === "fr" ? "Intégrité & Sécurité des Données" : "Data Integrity & Security"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {language === "fr" ? "Conçu avec la sécurité comme priorité." : "Built with security in mind."}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {language === "fr"
              ? "Les données de votre cabinet méritent une protection absolue. DentaFlow met l'accent sur l'isolation des données locales et la maîtrise des accès."
              : "Your clinic's data deserves thoughtful protection. DentaFlow emphasizes local data isolation, controlled access, and reliable system backup options."}
          </p>
        </div>

        {/* Single-Line Horizontal Auto-Walking Marquee Track */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-12 flex gap-6 overflow-x-auto scrollbar-none py-4 px-2 select-none scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="w-[280px] sm:w-[320px] flex-shrink-0 bg-slate-800/60 p-6 rounded-2xl border border-slate-700/80 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 space-y-3 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{card.title}</h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 text-xs font-semibold text-cyan-400 flex items-center gap-1 group-hover:text-cyan-300 transition-colors">
                  <span>{language === "fr" ? "Détails d'architecture" : "Architecture details"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/security"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>{language === "fr" ? "En savoir plus sur la sécurité et l'architecture locale" : "Read full Security & Data Architecture details"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
