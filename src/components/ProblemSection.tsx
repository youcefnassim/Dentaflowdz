'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { XCircle, ArrowDown } from 'lucide-react';

export default function ProblemSection() {
  const { t } = useLanguage();

  const painPoints = [
    t('problem_1'),
    t('problem_2'),
    t('problem_3'),
    t('problem_4'),
    t('problem_5'),
    t('problem_6'),
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-100 text-red-700 mb-4">
            Problématiques courantes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('problem_title')}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t('problem_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-2.5 bg-red-50 text-red-600 rounded-xl shrink-0 mt-0.5">
                <XCircle className="w-6 h-6" />
              </div>
              <p className="text-base text-slate-700 font-medium leading-snug">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Transition callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-3 p-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl shadow-xl shadow-blue-500/20 max-w-xl mx-auto">
            <span className="text-xl sm:text-2xl font-bold tracking-tight">
              {t('problem_transition')}
            </span>
            <ArrowDown className="w-6 h-6 text-cyan-200 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
