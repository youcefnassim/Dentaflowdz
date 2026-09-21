"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight, Users, Calendar, Activity, ClipboardList, CreditCard, ShieldCheck, WifiOff } from "lucide-react";
import { motion } from "framer-motion";
import DashboardPreview from "./DashboardPreview";
import DemoModal from "./DemoModal";
import Exocad3DViewer from "./Exocad3DViewer";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { t } = useLanguage();

  const microBadges = [
    { icon: Users, label: "Patients", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
    { icon: Calendar, label: "Agenda", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
    { icon: Activity, label: "Odontogramme", color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
    { icon: ClipboardList, label: "Traitements", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
    { icon: CreditCard, label: "Facturation", color: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white" id="hero">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-semibold border border-cyan-500/20 shadow-xs"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Logiciel professionnel pour cabinets dentaires</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            {t("hero_title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-medium"
          >
            {t("hero_subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-base transition-all shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95"
            >
              <span>{t("hero_cta_demo")}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-base border border-slate-700 transition-all hover:scale-105"
            >
              <span>{t("hero_cta_explore")}</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-2 inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-extrabold text-cyan-300 bg-slate-800/60 px-5 py-2 rounded-full border border-slate-700/80"
          >
            <span>{t("hero_trust_strip")}</span>
          </motion.div>

          {/* Micro visual badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-2.5"
          >
            {microBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border ${badge.color}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Hero Product Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 sm:mt-16 relative"
          id="product"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-20" />
          <DashboardPreview />
        </motion.div>
      </div>

      {/* Demo Modal Trigger */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  );
}

