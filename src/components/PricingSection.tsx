'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Check, Bell, ShieldCheck } from 'lucide-react';
import DemoModal from './DemoModal';

export default function PricingSection() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    t('pricing_feature_1'),
    t('pricing_feature_2'),
    t('pricing_feature_3'),
    t('pricing_feature_4'),
  ];

  return (
    <>
      <section className="py-20 bg-slate-50 border-t border-slate-200/80 relative" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-4">
              Transparence & Tarifs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t('pricing_title')}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {t('pricing_subtitle')}
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
              Lancement 2026
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {t('pricing_card_title')}
            </h3>

            <div className="my-6 inline-block px-6 py-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 font-extrabold text-xl">
              {t('pricing_status')}
            </div>

            <p className="text-slate-600 text-sm mb-8 leading-relaxed">
              {t('pricing_card_desc')}
            </p>

            <ul className="text-left space-y-3.5 mb-8 border-t border-slate-100 pt-6">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <div className="p-1 rounded-full bg-blue-100 text-blue-600 shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-base shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Bell className="w-5 h-5" />
              {t('pricing_cta')}
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Sans aucun engagement préalable</span>
            </div>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
