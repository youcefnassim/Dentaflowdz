"use client";

import React, { useState } from "react";
import { Lock, Save, RefreshCw, Users, ShieldCheck, Download, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import DemoModal from "./DemoModal";

export default function SecuritySection() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const securityItems = [
    { icon: Lock, title: t("sec_1_title"), desc: t("sec_1_desc") },
    { icon: Save, title: t("sec_2_title"), desc: t("sec_2_desc") },
    { icon: RefreshCw, title: t("sec_3_title"), desc: t("sec_3_desc") },
    { icon: Users, title: t("sec_4_title"), desc: t("sec_4_desc") },
    { icon: ShieldCheck, title: t("sec_5_title"), desc: t("sec_5_desc") },
    { icon: Download, title: t("sec_6_title"), desc: t("sec_6_desc") },
  ];

  return (
    <>
      <section className="py-20 bg-slate-900 text-white relative border-t border-slate-800 overflow-hidden" id="security">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-4">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> Sécurité & Confidentialité
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t("security_title")}
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              {t("security_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {securityItems.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{sec.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{sec.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white border border-slate-700 font-semibold text-sm transition-all"
            >
              <span>{t("security_cta")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

