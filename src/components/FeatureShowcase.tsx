"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Calendar,
  Activity,
  ClipboardList,
  CreditCard,
  BarChart2,
  ShieldCheck,
  WifiOff,
  ZoomIn,
  ZoomOut,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface FeatureItem {
  id: number;
  icon: React.ElementType;
  title: string;
  desc: string;
  img: string;
  color: string;
  badge: string;
  highlights: string[];
}

export default function FeatureShowcase() {
  const { t, language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const features: FeatureItem[] = [
    {
      id: 1,
      icon: Users,
      title: t("feat_1_title"),
      desc: t("feat_1_desc"),
      img: "/images/gestion patient.png",
      color: "bg-blue-600 text-white",
      badge: language === "fr" ? "Dossiers Praticiens" : "Patient Records",
      highlights:
        language === "fr"
          ? [
              "Fiche médicale centralisée avec antécédents et allergies",
              "Historique complet des consultations et actes dentaires",
              "Gestion des pièces jointes, radiographies et documents",
              "Recherche rapide multi-critères (nom, téléphone, n° dossier)",
            ]
          : [
              "Centralized medical record with history and allergies",
              "Complete log of past consultations and dental procedures",
              "Document management for attachments, X-rays, and files",
              "Instant multi-criteria search (name, phone, record ID)",
            ],
    },
    {
      id: 2,
      icon: Calendar,
      title: t("feat_2_title"),
      desc: t("feat_2_desc"),
      img: "/images/agenda et rdv.png",
      color: "bg-cyan-600 text-white",
      badge: language === "fr" ? "Planning & Fauteuils" : "Chairside Schedule",
      highlights:
        language === "fr"
          ? [
              "Vue quotidienne, hebdomadaire et mensuelle de l'agenda",
              "Gestion des salles d'attente et statut des patients",
              "Attribution des fauteuils et types de consultations",
              "Gestion des annulations et créneaux d'urgence",
            ]
          : [
              "Daily, weekly, and monthly schedule views",
              "Waiting room management and real-time patient status",
              "Chairside assignments and consultation types",
              "Cancellations and emergency slot booking",
            ],
    },
    {
      id: 3,
      icon: Activity,
      title: t("feat_3_title"),
      desc: t("feat_3_desc"),
      img: "/images/ondo.png",
      color: "bg-teal-600 text-white",
      badge: language === "fr" ? "Cartographie FDI" : "FDI Charting",
      highlights:
        language === "fr"
          ? [
              "Numérotation internationale FDI (système 2 chiffres)",
              "Saisie visuelle des caries, restaurations, couronnes et implants",
              "Distinction nette entre denture adulte et pédiatrique",
              "Historique d'évolution bucco-dentaire au fil des séances",
            ]
          : [
              "International FDI two-digit tooth numbering",
              "Visual logging of caries, restorations, crowns, and implants",
              "Clear switching between adult and pediatric dentition",
              "Oral health evolution timeline across sessions",
            ],
    },
    {
      id: 4,
      icon: ClipboardList,
      title: t("feat_4_title"),
      desc: t("feat_4_desc"),
      img: "/images/plan de treatment.png",
      color: "bg-emerald-600 text-white",
      badge: language === "fr" ? "Devis & Phasing" : "Phased Care",
      highlights:
        language === "fr"
          ? [
              "Élaboration de devis clairs pour les patients",
              "Découpage du traitement en phases et consultations",
              "Suivi en temps réel des actes réalisés vs planifiés",
              "Explication visuelle pour rassurer le patient",
            ]
          : [
              "Clear treatment estimates and patient quotes",
              "Phased procedure scheduling across multiple visits",
              "Real-time tracking of completed vs pending care",
              "Visual explanations to reassure patients",
            ],
    },
    {
      id: 5,
      icon: CreditCard,
      title: t("feat_5_title"),
      desc: t("feat_5_desc"),
      img: "/images/gestion de patient2.png",
      color: "bg-indigo-600 text-white",
      badge: language === "fr" ? "Comptabilité Cabinet" : "Practice Billing",
      highlights:
        language === "fr"
          ? [
              "Édition instantanée de reçus et factures au format cabinet",
              "Gestion des acomptes, versements échelonnés et reste à payer",
              "Suivi des devis validés et règlements par mode de paiement",
              "Exportation comptable et états de caisse quotidiens",
            ]
          : [
              "Instant printing of custom practice receipts and invoices",
              "Tracking of deposits, partial payments, and remaining due",
              "Approved estimates logging and payment method breakdown",
              "Daily financial totals and accounting exports",
            ],
    },
    {
      id: 6,
      icon: BarChart2,
      title: t("feat_6_title"),
      desc: t("feat_6_desc"),
      img: "/images/Statistics.png",
      color: "bg-purple-600 text-white",
      badge: language === "fr" ? "Pilotage Financier" : "Analytics & Growth",
      highlights:
        language === "fr"
          ? [
              "Chiffre d'affaires quotidien, mensuel et annuel",
              "Volume des actes dentaires et taux d'occupation fauteuil",
              "Statistiques de fréquentation et nouveaux patients",
              "Graphiques interactifs pour piloter la croissance du cabinet",
            ]
          : [
              "Daily, monthly, and annual revenue tracking",
              "Dental procedure breakdown & chair utilization rates",
              "Patient visit metrics and new patient acquisition",
              "Interactive visual charts to drive clinic growth",
            ],
    },
    {
      id: 7,
      icon: ShieldCheck,
      title: t("feat_7_title"),
      desc: t("feat_7_desc"),
      img: "/images/photo7.jpg",
      color: "bg-slate-800 text-white",
      badge: language === "fr" ? "Protection Données" : "Data Integrity",
      highlights:
        language === "fr"
          ? [
              "Sauvegarde de la base de données SQLite en 1 clic",
              "Protection par mot de passe et sessions sécurisées",
              "Aucun transfert de données médicales vers des serveurs tierces",
              "Restauration ultra-simple en cas de changement d'ordinateur",
            ]
          : [
              "One-click local SQLite database backup",
              "Password protection and secure user sessions",
              "Zero medical data leakage to third-party cloud servers",
              "Instant database restore when changing computers",
            ],
    },
    {
      id: 8,
      icon: WifiOff,
      title: t("feat_8_title"),
      desc: t("feat_8_desc"),
      img: "/images/offline.png",
      color: "bg-cyan-700 text-white",
      badge: language === "fr" ? "Autonomie Totale" : "Zero Cloud Lag",
      highlights:
        language === "fr"
          ? [
              "Zéro dépendance à la connexion Internet ou au réseau externe",
              "Vitesse maximale : lecture et écriture instantanées sur disque",
              "Aucune coupure de service lors des pannes de réseau",
              "Autonomie clinique totale pour le praticien",
            ]
          : [
              "Zero dependence on internet connectivity or external cloud",
              "Maximum speed: instant disk read/write operation",
              "No service interruptions during internet outages",
              "Complete clinical autonomy for dental practitioners",
            ],
    },
  ];

  // Tripled array for continuous seamless infinite auto-scrolling loop
  const displayFeatures = [...features, ...features, ...features];

  // Auto-scroll loop
  useEffect(() => {
    if (isPaused || selectedFeatureIndex !== null || !scrollRef.current) return;

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
  }, [isPaused, selectedFeatureIndex, language]);

  // Keyboard navigation & body scroll lock for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedFeatureIndex === null) return;
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        prevFeature();
      } else if (e.key === "ArrowRight") {
        nextFeature();
      }
    };

    if (selectedFeatureIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedFeatureIndex]);

  const openModal = (index: number) => {
    setSelectedFeatureIndex(index % features.length);
    setIsZoomed(false);
  };

  const closeModal = () => {
    setSelectedFeatureIndex(null);
    setIsZoomed(false);
  };

  const prevFeature = () => {
    if (selectedFeatureIndex !== null) {
      setSelectedFeatureIndex(
        selectedFeatureIndex === 0 ? features.length - 1 : selectedFeatureIndex - 1
      );
      setIsZoomed(false);
    }
  };

  const nextFeature = () => {
    if (selectedFeatureIndex !== null) {
      setSelectedFeatureIndex(
        selectedFeatureIndex === features.length - 1 ? 0 : selectedFeatureIndex + 1
      );
      setIsZoomed(false);
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Fonctionnalités essentielles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t("features_title")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t("features_subtitle")}
          </p>
        </div>
      </div>

      {/* Full-width Single Horizontal Auto-Moving Track */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto scrollbar-none py-6 px-4 select-none scroll-smooth cursor-grab active:cursor-grabbing max-w-full"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {displayFeatures.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              onClick={() => openModal(idx)}
              className="w-[300px] sm:w-[340px] shrink-0 group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
            >
              {/* Framed Application Window Mockup */}
              <div className="bg-slate-900 border-b border-slate-800">
                {/* Mockup Top Window Bar */}
                <div className="px-3 py-2 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 font-medium truncate max-w-[140px]">
                    DentaFlow • {feat.badge}
                  </span>
                </div>

                {/* Uncropped Screenshot Viewbox */}
                <div className="relative aspect-[16/10] bg-slate-950 p-1.5 flex items-center justify-center overflow-hidden">
                  <img
                    src={feat.img}
                    alt={feat.title}
                    className="w-full h-full object-contain rounded drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Icon Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className={`p-2 rounded-xl ${feat.color} shadow-lg backdrop-blur-md`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Hover Overlay with Read Badge */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                    <span className="px-3.5 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-xl transform scale-90 group-hover:scale-100 transition-transform flex items-center gap-1.5">
                      <ZoomIn className="w-4 h-4" /> {language === "fr" ? "Agrandir & Lire" : "Expand & Read"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content & Text */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                  <span>{language === "fr" ? "Voir les détails" : "View details"}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox / Card Detail Reader Modal */}
      <AnimatePresence>
        {selectedFeatureIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-2 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full max-h-[92vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-between my-auto"
            >
              {/* Modal Header Bar */}
              <div className="px-4 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between z-20">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className={`p-2 rounded-xl ${features[selectedFeatureIndex].color} shadow-sm shrink-0`}>
                    {React.createElement(features[selectedFeatureIndex].icon, { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-blue-950 text-blue-400 text-[10px] font-bold uppercase tracking-wider border border-blue-800/60">
                        {features[selectedFeatureIndex].badge}
                      </span>
                      <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                        {selectedFeatureIndex + 1} / {features.length}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-lg font-bold text-white truncate">
                      {features[selectedFeatureIndex].title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                    title={isZoomed ? "Reset Zoom" : "Zoom Image HD"}
                  >
                    {isZoomed ? (
                      <>
                        <ZoomOut className="w-4 h-4 text-cyan-400" />
                        <span className="hidden sm:inline">{language === "fr" ? "Taille normale" : "Fit to screen"}</span>
                      </>
                    ) : (
                      <>
                        <ZoomIn className="w-4 h-4 text-cyan-400" />
                        <span className="hidden sm:inline">{language === "fr" ? "Zoom HD (Lire texte)" : "HD Zoom"}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={closeModal}
                    className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Split Body: Interactive HD Viewer + Card Content */}
              <div className="flex-1 bg-slate-950 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Screenshot Display Frame (Zoomable) */}
                <div className="lg:col-span-7 bg-slate-900/80 rounded-xl p-2 sm:p-3 border border-slate-800 flex flex-col justify-center items-center overflow-hidden">
                  <div
                    className={`relative w-full rounded-lg overflow-auto bg-slate-950 transition-all duration-300 flex items-center justify-center ${
                      isZoomed ? "min-h-[600px] cursor-zoom-out" : "h-[280px] sm:h-[380px] cursor-zoom-in"
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                  >
                    <img
                      src={features[selectedFeatureIndex].img}
                      alt={features[selectedFeatureIndex].title}
                      className={`max-w-full max-h-full object-contain ${
                        isZoomed ? "scale-150 transform transition-transform duration-300" : ""
                      }`}
                    />
                  </div>
                  <p className="mt-2 text-[11px] text-slate-400 flex items-center gap-1">
                    <ZoomIn className="w-3.5 h-3.5 text-blue-400" />
                    {language === "fr"
                      ? "Cliquer sur l'image pour basculer en mode zoom HD"
                      : "Click image to toggle HD zoom mode"}
                  </p>
                </div>

                {/* Card Detailed Content */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {features[selectedFeatureIndex].title}
                    </h4>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {features[selectedFeatureIndex].desc}
                    </p>

                    <div className="space-y-3">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                        {language === "fr" ? "Points clés du logiciel" : "Key Software Highlights"}
                      </h5>
                      <ul className="space-y-2.5">
                        {features[selectedFeatureIndex].highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Banner */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
                    <div className="text-xs text-slate-300">
                      <p className="font-semibold text-white">
                        {language === "fr" ? "Prêt à essayer DentaFlow ?" : "Ready to try DentaFlow?"}
                      </p>
                      <p className="text-slate-400 text-[11px]">
                        {language === "fr" ? "Démonstration personnalisée gratuite" : "Free personalized demo"}
                      </p>
                    </div>
                    <a
                      href="#early-access"
                      onClick={closeModal}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors whitespace-nowrap shadow-md"
                    >
                      {language === "fr" ? "Demander démo" : "Request Demo"}
                    </a>
                  </div>
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="px-4 sm:px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between z-20">
                <div className="text-xs text-slate-400 hidden sm:block font-mono">
                  {language === "fr" ? "Navigation au clavier : ← Précédent | Suivant → | Échap pour fermer" : "Keyboard nav: ← Prev | Next → | Esc to close"}
                </div>

                <div className="flex items-center gap-2.5 ml-auto sm:ml-0">
                  <button
                    onClick={prevFeature}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> {language === "fr" ? "Précédent" : "Previous"}
                  </button>
                  <button
                    onClick={nextFeature}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-md"
                  >
                    {language === "fr" ? "Suivant" : "Next"} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}



