"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DemoModal from "./DemoModal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const faqs = [
    {
      question: "What is DentaFlow?",
      answer:
        "DentaFlow is a modern dental practice management software designed to centralize patient records, clinic appointments, clinical odontograms, treatment plans, and billing in one fast desktop application.",
    },
    {
      question: "Who is DentaFlow designed for?",
      answer:
        "DentaFlow is built for solo dental practitioners, group dental clinics, and multi-specialty dental centers looking for a clean, efficient software solution to streamline daily operations.",
    },
    {
      question: "Can DentaFlow work offline?",
      answer:
        "Yes. DentaFlow is built with an offline-first desktop application architecture using Electron and embedded SQLite database. Your clinic data and software features remain fully functional without requiring an active internet connection.",
    },
    {
      question: "What operating systems are supported?",
      answer:
        "DentaFlow is a desktop application designed for standard desktop operating systems including Windows (10/11) and macOS.",
    },
    {
      question: "How does the license work?",
      answer:
        "DentaFlow operates on a straightforward software licensing model per clinic computer or practitioner seat. Contact our sales team for exact licensing configurations for your clinic size.",
    },
    {
      question: "Can I manage multiple users?",
      answer:
        "Yes. DentaFlow supports user management allowing clinic administrators to set up account access for dentists, dental assistants, and reception staff.",
    },
    {
      question: "Can I back up my data?",
      answer:
        "Yes. Because DentaFlow stores data locally on your computer, administrators can perform manual or scheduled local database backups to external drives or clinic server backups.",
    },
    {
      question: "How can I request a demo?",
      answer:
        "You can request a live product walkthrough by clicking the 'Request a Demo' button on our website or filling out our contact form. Our team will schedule a session to demonstrate DentaFlow tailored to your clinic requirements.",
    },
    {
      question: "Can DentaFlow be customized for my clinic?",
      answer:
        "DentaFlow provides flexible clinic settings including custom procedure fee lists, appointment duration defaults, clinic branding on invoices, and practitioner user roles.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Everything you need to know about DentaFlow software and clinic installation.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-blue-600" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-blue-50 p-6 sm:p-8 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-lg font-bold text-slate-900">Have a specific question about your clinic?</h4>
            <p className="text-sm text-slate-600">Speak directly with a DentaFlow product specialist.</p>
          </div>
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Ask Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  );
}
