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
  PhoneCall,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import DemoModal from "./DemoModal";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Globe, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

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

  // Lock body scroll when mobile menu is open
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
    { name: t("nav_product"), href: "/product", icon: LayoutDashboard },
    { name: t("nav_features"), href: "/features", icon: Layers },
    { name: t("nav_security"), href: "/security", icon: ShieldCheck },
    { name: t("nav_pricing"), href: "/pricing", icon: CreditCard },
    { name: t("nav_faq"), href: "/faq", icon: HelpCircle },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? theme === "dark"
              ? "bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-md py-3"
              : "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs py-3"
            : "bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-200/60 p-1.5 rounded-full border border-slate-300/50 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white text-blue-600 shadow-xs font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>{t("nav_contact")}</span>
            </Link>

            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-sm shadow-blue-600/20 active:scale-98"
            >
              <span>{t("nav_demo_btn")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile header controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-3.5 py-1.5 text-xs rounded-xl bg-blue-600 text-white font-semibold shadow-sm flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Demo</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-200/60 transition-colors border border-slate-300/60"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Premium Full-Overlay Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Slide-over Dark Navy Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-sm bg-slate-900 text-white h-full shadow-2xl flex flex-col justify-between p-6 z-10 border-l border-slate-800"
            >
              {/* Drawer Top Header */}
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <Logo dark />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
                    aria-label="Close mobile menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links List */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 px-3">
                    Navigation Menu
                  </span>

                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          isActive
                            ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                            : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-cyan-400"}`} />
                          <span>{link.name}</span>
                        </div>
                        {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                      </Link>
                    );
                  })}
                </div>
              </div>

                {/* Drawer Bottom Actions: Language & Theme Controls + CTA */}
                <div className="space-y-3 pt-6 border-t border-slate-800">
                  {/* Sidebar Language & Theme Controls Row */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all active:scale-95"
                    >
                      <Globe className="w-4 h-4 text-blue-400" />
                      <span>{language === "fr" ? "🇫🇷 Français" : "🇬🇧 English"}</span>
                    </button>

                    <button
                      onClick={toggleTheme}
                      className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all active:scale-95"
                    >
                      {theme === "dark" ? (
                        <>
                          <Moon className="w-4 h-4 text-cyan-400" />
                          <span>Mode Sombre</span>
                        </>
                      ) : (
                        <>
                          <Sun className="w-4 h-4 text-amber-400" />
                          <span>Mode Clair</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsDemoModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30"
                  >
                    <span>{t("nav_demo_btn")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-cyan-400" />
                    <span>{t("nav_contact")}</span>
                  </Link>

                  <p className="text-[11px] text-center text-slate-500 pt-2 font-mono">
                    DentaFlow Desktop v2.4 • Offline-First
                  </p>
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Demo Request Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
}
