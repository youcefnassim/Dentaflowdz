"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Calendar,
  Activity,
  ClipboardList,
  CreditCard,
  BarChart2,
  ShieldCheck,
  WifiOff
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FeatureShowcase() {
  const { t, language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const features = [
    {
      icon: Users,
      title: t("feat_1_title"),
      desc: t("feat_1_desc"),
      img: "/images/photo1.jpg",
      color: "bg-blue-600 text-white",
    },
    {
      icon: Calendar,
      title: t("feat_2_title"),
      desc: t("feat_2_desc"),
      img: "/images/photo2.jpg",
      color: "bg-cyan-600 text-white",
    },
    {
      icon: Activity,
      title: t("feat_3_title"),
      desc: t("feat_3_desc"),
      img: "/images/photo3.jpg",
      color: "bg-teal-600 text-white",
    },
    {
      icon: ClipboardList,
      title: t("feat_4_title"),
      desc: t("feat_4_desc"),
      img: "/images/photo4.jpg",
      color: "bg-emerald-600 text-white",
    },
    {
      icon: CreditCard,
      title: t("feat_5_title"),
      desc: t("feat_5_desc"),
      img: "/images/photo5.jpg",
      color: "bg-indigo-600 text-white",
    },
    {
      icon: BarChart2,
      title: t("feat_6_title"),
      desc: t("feat_6_desc"),
      img: "/images/photo6.jpg",
      color: "bg-purple-600 text-white",
    },
    {
      icon: ShieldCheck,
      title: t("feat_7_title"),
      desc: t("feat_7_desc"),
      img: "/images/photo7.jpg",
      color: "bg-slate-800 text-white",
    },
    {
      icon: WifiOff,
      title: t("feat_8_title"),
      desc: t("feat_8_desc"),
      img: "/images/photo10.jpg",
      color: "bg-cyan-700 text-white",
    },
  ];

  // Tripled array for continuous seamless infinite auto-scrolling loop
  const displayFeatures = [...features, ...features, ...features];

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
    <section className="py-20 bg-white relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-4">
            Fonctionnalités essentielles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t("features_title")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t("features_subtitle")}
          </p>
        </div>
      </div>

      {/* Full-width Single Horizontal Auto-Moving Track */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto scrollbar-none py-6 px-4 select-none scroll-smooth cursor-grab active:cursor-grabbing max-w-full"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {displayFeatures.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className="w-[280px] sm:w-[320px] shrink-0 group bg-slate-50/90 rounded-2xl overflow-hidden border border-slate-200/90 hover:bg-white hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Screenshot Preview */}
              <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                <img
                  src={feat.img}
                  alt={feat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <div className={`p-2.5 rounded-xl ${feat.color} shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


