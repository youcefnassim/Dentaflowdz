'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { UserCheck, Stethoscope, Activity, ClipboardList, Calendar, CreditCard, Award, ChevronRight } from 'lucide-react';

export default function SolutionWorkflow() {
  const { t } = useLanguage();

  const steps = [
    { icon: UserCheck, title: t('step_1_title'), desc: t('step_1_desc'), color: 'from-blue-500 to-blue-600' },
    { icon: Stethoscope, title: t('step_2_title'), desc: t('step_2_desc'), color: 'from-cyan-500 to-blue-500' },
    { icon: Activity, title: t('step_3_title'), desc: t('step_3_desc'), color: 'from-teal-500 to-cyan-500' },
    { icon: ClipboardList, title: t('step_4_title'), desc: t('step_4_desc'), color: 'from-emerald-500 to-teal-500' },
    { icon: Calendar, title: t('step_5_title'), desc: t('step_5_desc'), color: 'from-indigo-500 to-purple-500' },
    { icon: CreditCard, title: t('step_6_title'), desc: t('step_6_desc'), color: 'from-blue-600 to-indigo-600' },
    { icon: Award, title: t('step_7_title'), desc: t('step_7_desc'), color: 'from-cyan-600 to-blue-600' },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Workflow Grid / Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3.5 rounded-xl bg-gradient-to-br ${step.color} text-white shadow-md shadow-blue-500/10`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 group-hover:text-blue-600 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>

                {idx < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-300 w-6 h-6 z-20 pointer-events-none group-hover:text-blue-500 transition-colors" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
