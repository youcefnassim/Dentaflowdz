"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "ui" | "clinic" | "leadership" | "records";
  description: string;
}

import { useLanguage } from "@/context/LanguageContext";

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const photos: GalleryItem[] = [
    {
      id: 1,
      src: "/images/photo1.jpg",
      title: language === "fr" ? "Tableau de bord & Statistiques Cabinet" : "Clinic Dashboard & Patient Insights",
      category: "ui",
      description: language === "fr" ? "Panneau de contrôle intuitif affichant les rendez-vous du jour, les statistiques et le suivi des dossiers." : "Intuitive practice control panel displaying daily appointments, statistics, and patient queues.",
    },
    {
      id: 2,
      src: "/images/photo2.jpg",
      title: language === "fr" ? "Répertoire & Gestion des Patients" : "Patient Management Directory",
      category: "records",
      description: language === "fr" ? "Système centralisé conservant les fiches médicales organisées et immédiatement accessibles." : "Centralized record system keeping patient information organized and instantly accessible.",
    },
    {
      id: 3,
      src: "/images/photo3.jpg",
      title: language === "fr" ? "Agenda Intelligents & Planning RDV" : "Smart Appointment Calendar",
      category: "clinic",
      description: language === "fr" ? "Planification quotidienne fluide avec attribution de fauteuils et gestion de la salle d'attente." : "Seamless daily scheduling with chair assignments, waiting room tracking, and instant updates.",
    },
    {
      id: 4,
      src: "/images/photo4.jpg",
      title: language === "fr" ? "Schéma Dentaire FDI & Odontogramme 3D" : "FDI Dental Chart & Odontogram",
      category: "ui",
      description: language === "fr" ? "Interface visuelle de cartographie des dents pour le suivi des caries, soins et restaurations." : "Visual tooth mapping interface for surface condition tracking, caries, and restoration logging.",
    },
    {
      id: 5,
      src: "/images/photo5.jpg",
      title: language === "fr" ? "Suivi des Plans de Traitement" : "Treatment Plan Tracker",
      category: "records",
      description: language === "fr" ? "Planification des interventions multi-séances, devis et historique des soins." : "Multi-visit procedure planning, cost estimates, and session history management.",
    },
    {
      id: 6,
      src: "/images/photo6.jpg",
      title: "Facturation & Reçus Financiers",
      category: "clinic",
      description: language === "fr" ? "Générateur automatique de factures avec suivi des règlements, acomptes et reçus d'impression." : "Automated billing generator with payment status logging, deposit records, and printed receipts.",
    },
    {
      id: 7,
      src: "/images/photo7.jpg",
      title: language === "fr" ? "Rapports de Performance & Croissance" : "Clinic Analytics & Growth Reports",
      category: "ui",
      description: language === "fr" ? "Statistiques précises sur le volume des soins, la fidélisation des patients et le chiffre d'affaires." : "Data-driven performance metrics for treatment volume, patient retention, and revenue.",
    },
    {
      id: 8,
      src: "/images/photo10.jpg",
      title: language === "fr" ? "Architecture Hors-Ligne SQLite Autonome" : "Offline-First Desktop Architecture",
      category: "clinic",
      description: language === "fr" ? "Base de données locale ultra-rapide fonctionnant sans aucune interruption d'internet." : "Fast local SQLite database operation running seamlessly with or without internet connection.",
    },
    {
      id: 9,
      src: "/images/youcef-nassim.png",
      title: language === "fr" ? "Direction & Vision — Youcef Nassim (PDG)" : "Leadership & Vision — Youcef Nassim (CEO)",
      category: "leadership",
      description: language === "fr" ? "La direction de DentaFlow engagée à fournir aux dentistes des outils modernes et performants." : "DentaFlow leadership committed to empowering dental professionals with smart, simple solutions.",
    },
    {
      id: 10,
      src: "/images/logo.jpg",
      title: language === "fr" ? "Identité Visuelle DentaFlow" : "DentaFlow Brand Identity",
      category: "leadership",
      description: language === "fr" ? "Le symbole de précision dentaire alliée à la fluidité technologique." : "Modern software symbol combining dental care precision with fluid software flow.",
    },
  ];

  const filteredPhotos =
    activeCategory === "all"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  // Duplicated photos array for continuous seamless infinite auto-scrolling loop
  const displayPhotos = [...filteredPhotos, ...filteredPhotos];

  // Auto-scroll loop logic (pauses when modal is open)
  useEffect(() => {
    if (selectedImageIndex !== null || !scrollRef.current) return;

    const container = scrollRef.current;
    let animationFrameId: number;

    const scroll = () => {
      if (!container) return;
      container.scrollLeft += 1.2;

      // Loop back smoothly when reaching halfway
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedImageIndex, activeCategory]);

  const openLightbox = (originalIndex: number) => {
    const realIndex = originalIndex % filteredPhotos.length;
    setSelectedImageIndex(realIndex);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    setIsZoomed(false);
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? filteredPhotos.length - 1 : selectedImageIndex - 1
      );
      setIsZoomed(false);
    }
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === filteredPhotos.length - 1 ? 0 : selectedImageIndex + 1
      );
      setIsZoomed(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/40 to-white relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" /> {t("gallery_badge")}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t("gallery_title_1")}{" "}
            <span className="text-blue-600">{t("gallery_title_2")}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t("gallery_subtitle")}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {[
            { id: "all", label: t("gallery_tab_all") },
            { id: "ui", label: t("gallery_tab_ui") },
            { id: "clinic", label: t("gallery_tab_clinic") },
            { id: "records", label: t("gallery_tab_records") },
            { id: "leadership", label: t("gallery_tab_leadership") },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id);
                if (scrollRef.current) scrollRef.current.scrollLeft = 0;
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === tab.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Single-Line Auto-Walking Horizontal Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none py-4 px-2 select-none scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayPhotos.map((photo, idx) => (
            <motion.div
              key={`${photo.id}-${idx}`}
              onClick={() => openLightbox(idx)}
              className="w-[300px] sm:w-[380px] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/90 cursor-pointer transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between"
            >
              {/* Framed Image Box */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-950 p-2 overflow-hidden flex items-center justify-center">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 300px, 380px"
                  priority={idx < 4}
                />
                
                {/* Hover overlay with zoom reader icon */}
                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="px-4 py-2.5 rounded-full bg-blue-600 text-white shadow-xl transform scale-90 group-hover:scale-100 transition-transform flex items-center gap-2 text-xs font-semibold">
                    <ZoomIn className="w-4 h-4" /> Click to Read & Zoom
                  </span>
                </div>

                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-white border border-slate-700">
                  {photo.category.toUpperCase()}
                </span>
              </div>

              {/* Card Title & Caption */}
              <div className="p-4 sm:p-5 bg-white space-y-1.5 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {photo.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optimistic Value Banner */}
        <div className="mt-16 bg-white p-6 sm:p-8 rounded-2xl border border-blue-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Smarter workflows, happier smiles</h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Empowering practitioners with software that makes daily clinic management enjoyable and stress-free.
              </p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100 whitespace-nowrap">
            100% Practice Focused
          </span>
        </div>
      </div>

      {/* High-Resolution HD Reader Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-2 sm:p-6">
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-6xl w-full h-[88vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-between"
            >
              {/* Modal Header Bar */}
              <div className="px-4 sm:px-6 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between z-20">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-blue-900/60 text-blue-300 text-[10px] font-bold border border-blue-700/50">
                    {filteredPhotos[selectedImageIndex].category.toUpperCase()}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-white truncate max-w-xs sm:max-w-md">
                    {filteredPhotos[selectedImageIndex].title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                  >
                    {isZoomed ? (
                      <>
                        <ZoomOut className="w-4 h-4 text-cyan-400" />
                        <span className="hidden sm:inline">Taille normale</span>
                      </>
                    ) : (
                      <>
                        <ZoomIn className="w-4 h-4 text-cyan-400" />
                        <span className="hidden sm:inline">Zoom HD (Lire le texte)</span>
                      </>
                    )}
                  </button>

                  <span className="text-xs text-slate-400 font-mono px-1">
                    {selectedImageIndex + 1} / {filteredPhotos.length}
                  </span>

                  <button
                    onClick={closeLightbox}
                    className="p-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Image Display Box (Scrollable when zoomed) */}
              <div className="relative flex-1 bg-slate-950 overflow-auto flex items-center justify-center p-2 sm:p-4">
                <div
                  className={`relative transition-all duration-300 ${
                    isZoomed
                      ? "w-[160%] sm:w-[190%] min-h-[1100px] cursor-zoom-out"
                      : "w-full h-full cursor-zoom-in"
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <Image
                    src={filteredPhotos[selectedImageIndex].src}
                    alt={filteredPhotos[selectedImageIndex].title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="px-4 sm:px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 z-20">
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                  {filteredPhotos[selectedImageIndex].description}
                </p>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={prevImage}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Précédent
                  </button>
                  <button
                    onClick={nextImage}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-md"
                  >
                    Suivant <ChevronRight className="w-4 h-4" />
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
