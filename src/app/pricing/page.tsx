"use client";

import React, { useState } from "react";
import CTA from "@/components/CTA";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, UserCheck, HelpCircle } from "lucide-react";
import DemoModal from "@/components/DemoModal";
import Link from "next/link";

export default function PricingPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const tiers = [
    {
      name: "Free Demo",
      subtitle: "Explore DentaFlow features with a guided software trial.",
      price: "Free Trial",
      priceDetail: "Personalized Walkthrough",
      cta: "Request Demo",
      highlight: false,
      features: [
        "Full DentaFlow desktop interface trial",
        "Sample patient dataset & odontogram",
        "Personalized feature walkthrough session",
        "No commitment required",
      ],
    },
    {
      name: "Professional",
      subtitle: "Designed for solo dental practitioners & single-chair practices.",
      price: "Custom License",
      priceDetail: "Per Workstation / Seat",
      cta: "Contact Sales",
      highlight: true,
      features: [
        "Complete Patient Management Directory",
        "Full FDI Dental Chart (Odontogram)",
        "Clinic Appointment Calendar & Scheduling",
        "Treatment Plans & Procedure History",
        "Billing, Invoicing & Payment Receipts",
        "Offline-first SQLite Local Storage",
        "Standard Email & Remote Support",
      ],
    },
    {
      name: "Clinic Multi-Seat",
      subtitle: "Tailored for multi-doctor practices and multi-chair clinics.",
      price: "Custom Quote",
      priceDetail: "Multi-Practitioner Volume",
      cta: "Request Clinic Quote",
      highlight: false,
      features: [
        "All Professional Tier Features",
        "Multiple Practitioner Accounts & User Roles",
        "Multi-Chair Appointment Scheduling",
        "Custom Procedure Fee List Setup",
        "Custom Invoice Header & Clinic Branding",
        "Advanced Clinic Revenue Analytics",
        "Priority Onboarding & Data Migration Support",
      ],
    },
  ];

  return (
    <div className="pt-28 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200">
            <Sparkles className="w-4 h-4" /> Transparent Licensing
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            Flexible software plans for <span className="text-blue-600">every practice.</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
            Choose the license configuration that matches your clinic setup. All plans include full offline desktop capability.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                tier.highlight
                  ? "bg-slate-900 text-white shadow-2xl border-2 border-blue-500 relative"
                  : "bg-white text-slate-900 shadow-sm border border-slate-200"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  Most Popular Choice
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className={`text-2xl font-bold ${tier.highlight ? "text-white" : "text-slate-900"}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-xs mt-1 leading-relaxed ${tier.highlight ? "text-slate-300" : "text-slate-500"}`}>
                    {tier.subtitle}
                  </p>
                </div>

                <div className="py-2 border-y border-slate-700/50">
                  <div className={`text-3xl font-extrabold ${tier.highlight ? "text-cyan-400" : "text-blue-600"}`}>
                    {tier.price}
                  </div>
                  <div className={`text-xs mt-0.5 ${tier.highlight ? "text-slate-400" : "text-slate-500"}`}>
                    {tier.priceDetail}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <span className={`text-xs font-bold uppercase tracking-wider block ${tier.highlight ? "text-slate-400" : "text-slate-500"}`}>
                    What's Included
                  </span>
                  <ul className="space-y-2">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.highlight ? "text-cyan-400" : "text-blue-600"}`} />
                        <span className={tier.highlight ? "text-slate-200" : "text-slate-700"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 ${
                    tier.highlight
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom enterprise callout */}
        <div className="bg-blue-50 p-6 sm:p-8 rounded-2xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900">Need a multi-clinic or custom installation?</h3>
            <p className="text-sm text-slate-600">
              We provide tailored licensing, network setup guidance, and data onboarding for larger dental groups.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap"
          >
            Contact Clinic Sales
          </Link>
        </div>
      </div>

      <CTA />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
