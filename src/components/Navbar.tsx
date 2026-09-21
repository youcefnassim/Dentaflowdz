"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Monitor,
  LayoutDashboard,
  Layers,
  ShieldCheck,
  CreditCard,
  HelpCircle,
  Globe
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import DemoModal from "./DemoModal";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t("nav_product"), href: "#product", icon: LayoutDashboard },
    { name: t("nav_features"), href: "#features", icon: Layers },
    { name: t("nav_security"), href: "#security", icon: ShieldCheck },
    { name: t("nav_pricing"), href: "#pricing", icon: CreditCard },
    { name: t("nav_faq"), href: "#faq", icon: HelpCircle },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm py-3"
            : "bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo dark={!scrolled} />

          {/* Desktop Nav Items */}
          <nav className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border ${
            scrolled ? "bg-slate-100/80 border-slate-200" : "bg-slate-800/60 border-slate-700/60"
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  scrolled
                    ? "text-slate-700 hover:text-blue-600 hover:bg-white shadow-xs"
                    : "text-slate-200 hover:text-white hover:bg-slate-700/80"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border ${
                scrolled
                  ? "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                  : "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
              }`}
            >
              <Globe className="w-4 h-4 text-blue-500" />
              <span>{t("lang_code")}</span>
            </button>

            <a
              href="#product"
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all border ${
                scrolled
                  ? "border-slate-300 text-slate-800 hover:bg-slate-100"
                  : "border-slate-700 text-white hover:bg-slate-800"
              }`}
            >
              {t("nav_product_btn")}
            </a>

            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm transition-all shadow-md shadow-blue-500/20 active:scale-95"
            >
              <span>{t("nav_demo_btn")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile header controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-3 py-1.5 text-xs rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow-xs"
            >
              Démo
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-xl transition-colors border ${
                scrolled
                  ? "text-slate-800 border-slate-300 bg-slate-100"
                  : "text-white border-slate-700 bg-slate-800"
              }`}
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-sm bg-slate-900 text-white h-full shadow-2xl flex flex-col justify-between p-6 z-10 border-l border-slate-800"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <Logo dark />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-800 transition-all"
                      >
                        <Icon className="w-5 h-5 text-cyan-400" />
                        <span>{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-800">
                <button
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs border border-slate-700"
                >
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>{t("lang_name")} ({t("lang_code")})</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsDemoModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm shadow-lg"
                >
                  <span>{t("nav_demo_btn")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
}

