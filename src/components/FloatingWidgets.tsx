"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUp,
  Headphones,
  X,
  MessageSquare,
  Phone,
  Mail,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DemoModal from "./DemoModal";

export default function FloatingWidgets() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Fixed Action Floating Buttons Container (Bottom-Right) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 select-none">
        {/* Support Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSupportOpen(!isSupportOpen)}
          className="relative group flex items-center justify-center w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-600/30 border border-blue-400/40 transition-all"
          aria-label="Support & Clinic Help"
        >
          {/* Active online pulse ring */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-slate-900" />
          </span>

          {isSupportOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Headphones className="w-6 h-6" />
          )}

          {/* Tooltip on Hover */}
          <span className="absolute right-16 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-lg border border-slate-700">
            Clinic Support & Help
          </span>
        </motion.button>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={scrollToTop}
              className="relative group flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-slate-800 shadow-xl border border-slate-200 hover:bg-slate-50 hover:text-blue-600 transition-all"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-5 h-5 stroke-[2.5]" />
              <span className="absolute right-16 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-lg border border-slate-700">
                Back to Top
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Support Modal Popup */}
      <AnimatePresence>
        {isSupportOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-3 left-3 sm:left-auto sm:right-6 sm:max-w-sm z-50 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-5 relative">
              <button
                onClick={() => setIsSupportOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider font-mono">
                  DentaFlow Support Active
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">How can we help your clinic?</h4>
              <p className="text-xs text-slate-300 mt-1">
                Our support team and product specialists are online to assist you.
              </p>
            </div>

            {/* Quick Actions List */}
            <div className="p-4 space-y-2.5 bg-slate-50">
              <button
                onClick={() => {
                  setIsSupportOpen(false);
                  setIsDemoModalOpen(true);
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  <span>Request Live Software Demo</span>
                </div>
                <Send className="w-3.5 h-3.5 text-blue-200" />
              </button>

              <a
                href="https://wa.me/213776665110"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 text-slate-800 text-xs font-semibold transition-all hover:bg-emerald-100/50"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <div>
                    <p className="text-slate-900 font-bold">Contact Support sur WhatsApp</p>
                    <p className="text-[10px] text-emerald-700 font-mono">+213 776 665 110</p>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold border border-emerald-200">
                  WhatsApp
                </span>
              </a>

              <a
                href="mailto:dentaflowdz@gmail.com"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 text-slate-800 text-xs font-semibold transition-all hover:bg-slate-50"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-cyan-600" />
                  <div>
                    <p className="text-slate-900 font-bold">Email Support</p>
                    <p className="text-[10px] text-slate-500 font-mono">dentaflowdz@gmail.com</p>
                  </div>
                </div>
                <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  24h Reply
                </span>
              </a>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" /> 24/7 Support Active
                </span>
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" /> Secure
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Demo Request Modal Trigger */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
}
