"use client";

import React from "react";
import { WifiOff, CheckCircle2, ShieldCheck, Database, HardDrive, RefreshCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function OfflineFirstSection() {
  const { t } = useLanguage();

  const checks = [
    t("offline_check_1"),
    t("offline_check_2"),
    t("offline_check_3"),
    t("offline_check_4"),
    t("offline_check_5"),
    t("offline_check_6"),
    t("offline_check_7"),
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800" id="offline">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-4">
            <WifiOff className="w-4 h-4 text-cyan-400" /> Mode Hors Ligne 100% Garantis
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t("offline_title")}
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            {t("offline_subtitle")}
          </p>
        </div>

        {/* Bullet checklist grid */}
        <div className="max-w-4xl mx-auto bg-slate-950/80 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {checks.map((check, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-300 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-sm font-medium text-slate-200 leading-snug">{check}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

