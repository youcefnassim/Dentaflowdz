"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Users,
  Calendar,
  Receipt,
  BarChart3,
  ShieldCheck,
  Quote,
  Sparkles,
  ArrowRight,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutFounder() {
  const { t, language } = useLanguage();
  const pillarScrollRef = useRef<HTMLDivElement>(null);
  const [isPillarPaused, setIsPillarPaused] = useState(false);

  const pillars = [
    {
      title: language === "fr" ? "Gestion des Patients" : "Patient Management",
      desc: language === "fr" ? "Tous les dossiers au même endroit" : "All patient data in one place",
      icon: Users,
    },
    {
      title: language === "fr" ? "Rendez-vous Intelligents" : "Smart Appointments",
      desc: language === "fr" ? "Planning et rappels automatisés" : "Easy scheduling and reminders",
      icon: Calendar,
    },
    {
      title: language === "fr" ? "Facturation & Recettes" : "Billing & Payments",
      desc: language === "fr" ? "Factures et encaissements rapides" : "Simplify billing and get paid faster",
      icon: Receipt,
    },
    {
      title: language === "fr" ? "Analyses & Rapports" : "Analytics & Reports",
      desc: language === "fr" ? "Indicateurs clés pour décider" : "Data-driven insights for better decisions",
      icon: BarChart3,
    },
    {
      title: language === "fr" ? "Sécurisé & Local" : "Secure & Offline",
      desc: language === "fr" ? "Vos données protégées localement" : "Your data is safe and protected",
      icon: ShieldCheck,
    },
  ];

  // Tripled pillars array for continuous seamless infinite auto-scrolling loop
  const displayPillars = [...pillars, ...pillars, ...pillars];

  // Auto-scroll loop for the 5 Pillars track
  useEffect(() => {
    if (isPillarPaused || !pillarScrollRef.current) return;

    const container = pillarScrollRef.current;
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
  }, [isPillarPaused, language]);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Subtle ambient backlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <Sparkles className="w-4 h-4 text-cyan-400" /> {t("ceo_badge")}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {language === "fr" ? "Rencontrez notre Fondateur & PDG" : "Meet Our CEO & Founder"}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {language === "fr"
              ? "DentaFlow est animé par la passion de moderniser la gestion des cabinets dentaires grâce à un logiciel simple, rapide et autonome."
              : "DentaFlow is driven by a passionate mission to transform dental practice management through smart, simple, and reliable software."}
          </p>
        </div>

        {/* Centered CEO Poster Presentation Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative"
        >
          {/* Centered CEO Poster Image Container */}
          <div className="relative w-full max-w-2xl mx-auto pt-6 px-4 flex justify-center bg-gradient-to-b from-slate-900/60 to-slate-950">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80 max-w-xl w-full">
              <Image
                src="/images/youcef-nassim.png"
                alt="Youcef Nassim — Founder & CEO of DentaFlow"
                width={700}
                height={850}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Centered CEO Details & Mission Section */}
          <div className="p-8 sm:p-12 text-center space-y-8 bg-slate-950 border-t border-slate-800/80">
            <div>
              <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-cyan-300 bg-cyan-950/80 px-4 py-1.5 rounded-full border border-cyan-700/60 shadow-sm shadow-cyan-500/20 inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> {t("ceo_badge")}
              </span>
              <h3 className="text-3xl sm:text-5xl font-black tracking-tight mt-4 bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                {t("ceo_title_1")} <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">{t("ceo_title_2")}</span>
              </h3>
              <p className="text-xs sm:text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">
                {t("ceo_role")}
              </p>
            </div>

            {/* CEO Quote Callout - Ultra Stylish Glassmorphic Quote */}
            <div className="max-w-2xl mx-auto p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/95 to-slate-950 border border-slate-700/80 shadow-2xl shadow-blue-500/10 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-teal-400 rounded-l-2xl shadow-[0_0_12px_#38bdf8]" />
              <Quote className="w-12 h-12 text-blue-500/15 absolute top-3 right-4 transform group-hover:scale-110 group-hover:text-blue-500/25 transition-all duration-300" />
              <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight italic leading-relaxed relative z-10">
                <span className="text-cyan-400 text-3xl font-serif">“</span>
                {language === "fr" ? (
                  <>La technologie doit <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent underline decoration-cyan-400/50 decoration-wavy underline-offset-4">simplifier votre travail</span>, pas le <span className="text-cyan-300 not-italic font-bold">compliquer</span>.</>
                ) : (
                  <>Technology should <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent underline decoration-cyan-400/50 decoration-wavy underline-offset-4">simplify your work</span>, not <span className="text-cyan-300 not-italic font-bold">complicate it</span>.</>
                )}
                <span className="text-cyan-400 text-3xl font-serif">”</span>
              </p>
            </div>

            {/* Mission Statement */}
            <div className="max-w-2xl mx-auto space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center justify-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" /> {t("ceo_mission_title")}
              </h4>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 rounded-2xl border border-slate-800 shadow-inner">
                {language === "fr" ? (
                  <>“Ma mission est de fournir aux professionnels de santé dentaire des outils intelligents et intuitifs qui <span className="text-blue-400 font-bold underline decoration-blue-500/40">gagnent du temps</span>, <span className="text-cyan-300 font-bold underline decoration-cyan-400/40">améliorent le soin patient</span> et <span className="text-emerald-400 font-bold underline decoration-emerald-500/40">stimulent la croissance</span>.”</>
                ) : (
                  <>“My mission is to empower dental professionals with smart, intuitive solutions that <span className="text-blue-400 font-bold underline decoration-blue-500/40">save time</span>, <span className="text-cyan-300 font-bold underline decoration-cyan-400/40">improve patient care</span>, and <span className="text-emerald-400 font-bold underline decoration-emerald-500/40">drive growth</span>.”</>
                )}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-base transition-all shadow-xl shadow-blue-600/30 scale-100 hover:scale-[1.02]"
              >
                <span>{t("ceo_demo_btn")}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 5 Core Pillars Single-Line Auto-Walking Marquee Track */}
        <div className="mt-20 pt-12 border-t border-slate-800 space-y-6">
          <div className="text-center">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {language === "fr" ? "Les 5 Piliers du Logiciel DentaFlow" : "The 5 Pillars of DentaFlow Software"}
            </h4>
          </div>

          <div
            ref={pillarScrollRef}
            onMouseEnter={() => setIsPillarPaused(true)}
            onMouseLeave={() => setIsPillarPaused(false)}
            className="flex gap-4 overflow-x-auto scrollbar-none py-3 px-2 select-none scroll-smooth cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {displayPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="w-[240px] sm:w-[280px] flex-shrink-0 p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800/90 text-center hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 space-y-3 flex flex-col items-center justify-center group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">{pillar.title}</h5>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Banner */}
          <div className="pt-6 text-center">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-6 py-2 rounded-full border border-blue-800/80">
              {language === "fr" ? "BÂTIR L'AVENIR DE LA GESTION DE CABINET DENTAIRE" : "BUILDING THE FUTURE OF DENTAL PRACTICE MANAGEMENT"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
