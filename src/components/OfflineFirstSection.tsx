"use client";

import React, { useState, useEffect, useRef } from "react";
import { HardDrive, Database, Cpu, Zap, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function OfflineFirstSection() {
  const { language } = useLanguage();
  const flowScrollRef = useRef<HTMLDivElement>(null);
  const [isFlowPaused, setIsFlowPaused] = useState(false);

  const flowSteps = [
    {
      title: language === "fr" ? "Interface DentaFlow" : "DentaFlow App",
      sub: language === "fr" ? "Interface Bureau Desktop" : "Desktop Interface",
      desc: language === "fr" ? "Interface réactive et ultra-rapide pour le chirurgien-dentiste" : "Responsive practitioner desktop interface",
      icon: Cpu,
      badge: "STEP 1",
    },
    {
      title: language === "fr" ? "Moteur d'Exécution" : "Local Application",
      sub: language === "fr" ? "Moteur Electron Autonome" : "Electron Engine",
      desc: language === "fr" ? "Exécution 100% autonome sans dépendance serveur web" : "Standalone execution runtime without web server dependency",
      icon: Zap,
      badge: "STEP 2",
    },
    {
      title: language === "fr" ? "Base SQLite Locale" : "SQLite Database",
      sub: language === "fr" ? "Stockage Intégré Sécurisé" : "Embedded Local Storage",
      desc: language === "fr" ? "Accès instantané aux fiches patients sans latence réseau" : "Instant local patient query execution without network latency",
      icon: Database,
      badge: "STEP 3",
    },
    {
      title: language === "fr" ? "Poste du Cabinet" : "Clinic Computer",
      sub: language === "fr" ? "Hôte Windows / macOS" : "Windows / macOS Host",
      desc: language === "fr" ? "Données sauvegardées en toute sécurité sur le PC du cabinet" : "Data securely stored on clinic workstation",
      icon: HardDrive,
      badge: "STEP 4",
    },
  ];

  // Tripled steps array for continuous seamless infinite auto-scrolling loop
  const displaySteps = [...flowSteps, ...flowSteps, ...flowSteps];

  // Auto-scroll loop
  useEffect(() => {
    if (isFlowPaused || !flowScrollRef.current) return;

    const container = flowScrollRef.current;
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
  }, [isFlowPaused, language]);

  const features = [
    {
      title: language === "fr" ? "Accès local ultra-rapide" : "Fast local access",
      desc: language === "fr" ? "Chargement et recherche instantanés parmi des milliers de dossiers patients sans latence réseau." : "Instant page load and instant search across thousands of patient records with zero network latency.",
      icon: Zap,
    },
    {
      title: language === "fr" ? "Ininterrompu sans internet" : "Offline workflow",
      desc: language === "fr" ? "Continuez à enregistrer des patients, mettre à jour les schémas dentaires et facturer même lors d'une panne internet." : "Continue registering patients, updating dental charts, and managing billing even during internet outages.",
      icon: HardDrive,
    },
    {
      title: language === "fr" ? "Stockage local confidentiel" : "Local data storage",
      desc: language === "fr" ? "La base de données de votre cabinet réside directement sur votre ordinateur dans une base SQLite dédiée." : "Your clinic database resides directly on your workstation in an embedded SQLite database.",
      icon: Database,
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-4 py-1.5 rounded-full border border-cyan-800 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            {language === "fr" ? "Architecture Desktop Autonome" : "Desktop Local Architecture"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {language === "fr"
              ? "Votre cabinet ne doit jamais dépendre d'une connexion internet."
              : "Your workflow shouldn't depend on a perfect internet connection."}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {language === "fr"
              ? "DentaFlow est conçu comme un logiciel autonome local. Vos données opérationnelles restent accessibles, ultra-rapides et 100% fonctionnelles, que vous soyez connecté ou déconnecté."
              : "DentaFlow is engineered as an offline-first desktop application. Your clinic operational data stays accessible, lightning fast, and entirely functional whether your connection is online or disconnected."}
          </p>
        </div>

        {/* Single-Line Auto-Walking Architecture Data Flow Marquee Track */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {language === "fr" ? "DIAGRAMME DE FLUX DE DONNÉES DENTAFLOW (DÉFILEMENT AUTOMATIQUE)" : "DENTAFLOW DATA FLOW DIAGRAM (AUTO-WALKING)"}
            </h3>
          </div>

          <div
            ref={flowScrollRef}
            onMouseEnter={() => setIsFlowPaused(true)}
            onMouseLeave={() => setIsFlowPaused(false)}
            className="flex gap-4 items-center overflow-x-auto scrollbar-none py-4 px-2 select-none scroll-smooth cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {displaySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex items-center gap-4 flex-shrink-0">
                  <div className="w-[260px] sm:w-[300px] flex-shrink-0 p-5 rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/80 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 space-y-2.5 group">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/30 to-cyan-500/30 text-cyan-300 flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-950 text-cyan-400 border border-cyan-800">
                        {step.badge}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">{step.title}</h4>
                      <p className="text-[11px] font-mono text-cyan-400 mt-0.5">{step.sub}</p>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Flow Connection Arrow */}
                  <div className="text-cyan-400/80 flex-shrink-0">
                    <ArrowRight className="w-6 h-6 animate-pulse" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Core Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-500/20">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
