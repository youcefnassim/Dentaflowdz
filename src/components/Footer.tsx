"use client";

import React from "react";
import Logo from "./Logo";
import { Linkedin, Instagram, Youtube, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <Logo dark />
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed font-medium">
              {t("footer_desc")}
            </p>
            <div className="pt-2 text-xs font-mono text-cyan-400">
              dentaflowdz.vercel.app
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Menu</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><a href="#product" className="hover:text-cyan-300 transition-colors">{t("nav_product")}</a></li>
              <li><a href="#features" className="hover:text-cyan-300 transition-colors">{t("nav_features")}</a></li>
              <li><a href="#security" className="hover:text-cyan-300 transition-colors">{t("nav_security")}</a></li>
              <li><a href="#pricing" className="hover:text-cyan-300 transition-colors">{t("nav_pricing")}</a></li>
              <li><a href="#faq" className="hover:text-cyan-300 transition-colors">{t("nav_faq")}</a></li>
            </ul>
          </div>

          {/* Col 3: Social Networks */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Réseaux sociaux</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan-300 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-cyan-400" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan-300 transition-colors"
                >
                  <Youtube className="w-4 h-4 text-cyan-400" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>{t("footer_rights")}</p>
          <p>made by DentaFlow</p>
        </div>
      </div>
    </footer>
  );
}

