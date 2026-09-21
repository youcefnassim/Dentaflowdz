'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { X, Check } from 'lucide-react';

export default function BeforeAfterSection() {
  const { t } = useLanguage();

  const beforeItems = [
    t('before_1'),
    t('before_2'),
    t('before_3'),
    t('before_4'),
    t('before_5'),
  ];

  const afterItems = [
    t('after_1'),
    t('after_2'),
    t('after_3'),
    t('after_4'),
    t('after_5'),
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-4">
            Comparatif Visuel
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('comparison_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before Card */}
          <div className="bg-white rounded-3xl p-8 border border-red-200 shadow-sm relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-700 font-extrabold text-sm mb-6">
              {t('before_title')}
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600">
                  <div className="p-1 rounded-full bg-red-100 text-red-600 shrink-0 mt-0.5">
                    <X className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-gradient-to-b from-blue-900 to-slate-900 text-white rounded-3xl p-8 border border-blue-700 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-extrabold text-sm mb-6">
              {t('after_title')}
            </div>
            <ul className="space-y-4 relative z-10">
              {afterItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-100">
                  <div className="p-1 rounded-full bg-cyan-500 text-slate-950 shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
