"use client";

import React from "react";
import { Monitor, Code2, Cpu, Zap, Database } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TechStack() {
  const { t } = useLanguage();

  const techs = [
    { name: t("tech_1_name"), desc: t("tech_1_desc"), icon: Monitor },
    { name: t("tech_2_name"), desc: t("tech_2_desc"), icon: Code2 },
    { name: t("tech_3_name"), desc: t("tech_3_desc"), icon: Database },
    { name: t("tech_4_name"), desc: t("tech_4_desc"), icon: Zap },
  ];

  return (
    <section className="py-16 bg-slate-950 border-t border-slate-800 text-white relative overflow-hidden" id="tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 mb-3">
            Section Secondaire • Technologie
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t("tech_title")}
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            {t("tech_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {techs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col items-center text-center"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">{item.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

