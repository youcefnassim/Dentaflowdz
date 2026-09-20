"use client";

import React, { useState, useEffect, useRef } from "react";
import { Cpu, Code2, Database, Zap, Monitor, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TechStack() {
  const { language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const techItems = [
    {
      name: "Electron",
      desc: language === "fr" ? "Moteur desktop multiplateforme" : "Cross-platform desktop runner",
      icon: Monitor,
    },
    {
      name: "React 19",
      desc: language === "fr" ? "Interface utilisateur réactive" : "Component-driven user interface",
      icon: Code2,
    },
    {
      name: "TypeScript",
      desc: language === "fr" ? "Codebase robuste et typé" : "Type-safe robust application codebase",
      icon: Cpu,
    },
    {
      name: "Vite",
      desc: language === "fr" ? "Performances et bundling ultra-rapides" : "Ultra-fast bundling & performance",
      icon: Zap,
    },
    {
      name: "SQLite",
      desc: language === "fr" ? "Base de données relationnelle locale" : "Embedded local relational database",
      icon: Database,
    },
  ];

  // Tripled array for continuous seamless infinite auto-scrolling loop
  const displayItems = [...techItems, ...techItems, ...techItems];

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
    <section className="py-16 bg-slate-900 border-t border-slate-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            {language === "fr" ? "Architecture Technique Open Standard" : "Technical Architecture"}
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === "fr" ? "Technologie moderne. Expérience fluide." : "Modern technology. Simple experience."}
          </h3>
          <p className="text-sm text-slate-300">
            {language === "fr"
              ? "Conçu sur des briques technologiques éprouvées pour offrir une expérience bureau stable et réactive."
              : "Built on proven open technology stacks designed to deliver a responsive, stable desktop experience."}
          </p>
        </div>

        {/* Single-Line Horizontal Auto-Walking Marquee Track */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-4 overflow-x-auto scrollbar-none py-3 px-2 select-none scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayItems.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="w-[200px] sm:w-[240px] flex-shrink-0 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/80 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 text-center space-y-2 flex flex-col items-center justify-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">{tech.name}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{tech.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
