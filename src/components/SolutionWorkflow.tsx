'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { UserCheck, Stethoscope, Activity, ClipboardList, Calendar, CreditCard, Award, ArrowRight } from 'lucide-react';

export default function SolutionWorkflow() {
  const { t, language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    { icon: UserCheck, title: t('step_1_title'), desc: t('step_1_desc'), color: 'from-blue-500 to-blue-600' },
    { icon: Stethoscope, title: t('step_2_title'), desc: t('step_2_desc'), color: 'from-cyan-500 to-blue-500' },
    { icon: Activity, title: t('step_3_title'), desc: t('step_3_desc'), color: 'from-teal-500 to-cyan-500' },
    { icon: ClipboardList, title: t('step_4_title'), desc: t('step_4_desc'), color: 'from-emerald-500 to-teal-500' },
    { icon: Calendar, title: t('step_5_title'), desc: t('step_5_desc'), color: 'from-indigo-500 to-purple-500' },
    { icon: CreditCard, title: t('step_6_title'), desc: t('step_6_desc'), color: 'from-blue-600 to-indigo-600' },
    { icon: Award, title: t('step_7_title'), desc: t('step_7_desc'), color: 'from-cyan-600 to-blue-600' },
  ];

  // Tripled steps array for continuous seamless infinite auto-scrolling loop
  const displaySteps = [...steps, ...steps, ...steps];

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
    <section className="py-20 bg-white relative overflow-hidden" id="solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-4">
            Parcours complet
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('solution_title')}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t('solution_subtitle')}
          </p>
        </div>
      </div>

      {/* Full-width Single Horizontal Auto-Moving Track */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto scrollbar-none py-6 px-4 select-none scroll-smooth cursor-grab active:cursor-grabbing max-w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {displaySteps.map((step, idx) => {
          const Icon = step.icon;
          const stepNumber = (idx % steps.length) + 1;
          return (
            <div key={idx} className="flex items-center gap-6 shrink-0">
              <div
                className="w-[280px] sm:w-[320px] shrink-0 bg-slate-50 p-6 rounded-2xl border border-slate-200/90 hover:border-blue-500 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3.5 rounded-xl bg-gradient-to-br ${step.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 group-hover:text-blue-600 transition-colors">
                    0{stepNumber}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Arrow Connector between steps */}
              <div className="text-slate-300 shrink-0">
                <ArrowRight className="w-6 h-6 animate-pulse text-blue-500/60" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

