"use client";

import React, { useState, useEffect, useRef } from "react";
import { Monitor, Code2, Database, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TechStack() {
  const { t, language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const techs = [
    { name: t("tech_1_name"), desc: t("tech_1_desc"), icon: Monitor },
    { name: t("tech_2_name"), desc: t("tech_2_desc"), icon: Code2 },
    { name: t("tech_3_name"), desc: t("tech_3_desc"), icon: Database },
    { name: t("tech_4_name"), desc: t("tech_4_desc"), icon: Zap },
  ];

  // Tripled array for continuous seamless infinite auto-scrolling loop
  const displayTechs = [...techs, ...techs, ...techs];

  // Auto-scroll loop
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
    <section className="py-16 bg-slate-950 border-t border-slate-800 text-white relative overflow-hidden" id="tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto mb-10">
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
      </div>

      {/* Full-width Single Horizontal Auto-Moving Track */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto scrollbar-none py-4 px-4 select-none scroll-smooth cursor-grab active:cursor-grabbing max-w-full"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {displayTechs.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="w-[260px] sm:w-[280px] shrink-0 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 flex flex-col items-center text-center transition-all duration-300 group"
            >
              <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{item.name}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}


