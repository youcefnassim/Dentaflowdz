'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { User, Building2, Stethoscope } from 'lucide-react';

export default function TargetAudienceSection() {
  const { t } = useLanguage();

  const audiences = [
    {
      icon: User,
      title: t('aud_1_title'),
      desc: t('aud_1_desc'),
      badge: 'Cabinet individuel',
    },
    {
      icon: Building2,
      title: t('aud_2_title'),
      desc: t('aud_2_desc'),
      badge: 'Clinique & Groupe',
    },
    {
      icon: Stethoscope,
      title: t('aud_3_title'),
      desc: t('aud_3_desc'),
      badge: 'Praticien & Chirurgien',
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/80 relative" id="audience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-4">
            Pour qui ?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('audience_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 p-8 rounded-3xl border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-start"
              >
                <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/20 mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider mb-2">
                  {aud.badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {aud.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {aud.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
