"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, ChevronRight, Play, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import DashboardPreview from "./DashboardPreview";
import DemoModal from "./DemoModal";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Background Subtle Tech Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-cyan-400 text-xs sm:text-sm font-medium border border-cyan-500/20 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>{t("hero_badge")}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            {t("hero_title_1")}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              {t("hero_title_2")}
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal"
          >
            {t("hero_desc")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t("hero_cta_demo")}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <Link
              href="/product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700/80 transition-all hover:-translate-y-0.5"
            >
              <span>{t("hero_cta_explore")}</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Link>
          </motion.div>

          {/* Small Trust Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-1 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 flex-wrap"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{t("hero_trust_1")}</span>
            <span className="text-slate-600">•</span>
            <span>{t("hero_trust_2")}</span>
          </motion.div>
        </div>

        {/* Hero Product Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 sm:mt-16 relative"
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
