"use client";

import React, { useState, useEffect, useRef } from "react";
import { Download, Settings, Users, Activity, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    {
      number: "01",
      title: language === "fr" ? "Installation" : "Install",
      description: language === "fr" ? "Installez DentaFlow sur l'ordinateur de votre cabinet en quelques clics." : "Set up DentaFlow on your clinic computer with a simple installer.",
      icon: Download,
    },
    {
      number: "02",
      title: language === "fr" ? "Configuration" : "Configure",
      description: language === "fr" ? "Configurez les informations du cabinet, praticiens et préférences de soin." : "Configure your clinic details, practitioners, and preferences.",
      icon: Settings,
    },
    {
      number: "03",
      title: language === "fr" ? "Gestion" : "Manage",
      description: language === "fr" ? "Ajoutez vos patients, planifiez les rendez-vous et enregistrez les soins." : "Add patients, schedule appointments, and record clinical treatments.",
      icon: Users,
    },
    {
      number: "04",
      title: language === "fr" ? "Productivité" : "Work",
      description: language === "fr" ? "Pilotez le quotidien de votre cabinet avec une vitesse et une simplicité maximales." : "Run your daily clinic workflow efficiently from one centralized application.",
      icon: Activity,
    },
  ];

  // Tripled steps array for continuous seamless infinite auto-scrolling loop
  const displaySteps = [...steps, ...steps, ...steps];

  // Auto-scroll continuous loop
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
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            {language === "fr" ? "Mise en place Rapide" : "Simple Onboarding"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {language === "fr" ? "Comment DentaFlow s'intègre à votre cabinet" : "How DentaFlow works in your practice"}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {language === "fr"
              ? "Démarrez et opérationnalisez votre cabinet en quelques minutes en 4 étapes simples."
              : "Get your clinic up and running in minutes with four straightforward steps."}
          </p>
        </div>

        {/* Single-Line Horizontal Auto-Walking Marquee Track */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-14 flex gap-6 items-center overflow-x-auto scrollbar-none py-4 px-2 select-none scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displaySteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex items-center gap-4 flex-shrink-0">
                <div className="w-[280px] sm:w-[320px] flex-shrink-0 bg-slate-50 p-6 rounded-3xl border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 space-y-4 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-blue-600 font-mono tracking-tighter">
                        {step.number}
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-white text-blue-600 flex items-center justify-center border border-slate-200 shadow-sm group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="text-blue-400 flex-shrink-0">
                  <ArrowRight className="w-5 h-5 opacity-60" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
