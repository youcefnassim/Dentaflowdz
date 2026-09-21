'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Play, CheckCircle2, Monitor } from 'lucide-react';
import DemoModal from './DemoModal';

export default function VideoDemoSection() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoHighlights = [
    t('video_feature_1'),
    t('video_feature_2'),
    t('video_feature_3'),
    t('video_feature_4'),
  ];

  return (
    <>
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="video">
        {/* Glow background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
              <Monitor className="w-3.5 h-3.5" /> Démo en vidéo
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t('video_title')}
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              {t('video_subtitle')}
            </p>
          </div>

          {/* Video Container / Player Mockup */}
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-800 bg-slate-950/80 shadow-2xl relative group">
            <div className="aspect-video relative flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
              {!isPlaying ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  {/* Backdrop Preview Image */}
                  <img
                    src="/images/photo1.jpg"
                    alt="DentaFlow Demo Video Preview"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]" />

                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 w-20 h-20 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:scale-110 transition-all duration-300"
                    aria-label="Play Video"
                  >
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </button>
                  <p className="relative z-10 mt-4 text-sm font-semibold text-cyan-300 tracking-wide uppercase">
                    Regarder la présentation DentaFlow (90s)
                  </p>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="DentaFlow Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Highlights Bar */}
            <div className="p-6 bg-slate-900/90 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {videoHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all"
            >
              {t('video_cta')}
            </button>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
