"use client";

import React, { useState } from "react";
import DashboardPreview from "@/components/DashboardPreview";
import CTA from "@/components/CTA";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Stethoscope,
  Activity,
  Receipt,
  BarChart2,
  Settings,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  HardDrive
} from "lucide-react";
import { motion } from "framer-motion";
import DemoModal from "@/components/DemoModal";

export default function ProductPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>("all");

  const modules = [
    {
      id: "dashboard",
      name: "Dashboard Overview",
      icon: LayoutDashboard,
      headline: "The morning command center for your clinic.",
      description:
        "Get instant visibility over today's scheduled appointments, active room statuses, patient arrivals, and revenue metrics as soon as you launch the desktop app.",
      functions: [
        "Real-time appointment schedule counter",
        "Quick search bar for instant patient retrieval",
        "Patient waiting room arrival indicators",
        "Daily clinic financial revenue summary",
      ],
      tag: "Command Center",
    },
    {
      id: "patients",
      name: "Patient Management",
      icon: Users,
      headline: "Comprehensive patient directory & medical history.",
      description:
        "Centralize contact details, emergency numbers, medical alerts, penicillin allergies, historical visit logs, and attached documents into clean patient files.",
      functions: [
        "Patient ID auto-generation and categorization",
        "Medical alert banners (allergies, systemic conditions)",
        "Historical procedure records per patient",
        "Exportable patient profile summaries",
      ],
      tag: "Core Database",
    },
    {
      id: "appointments",
      name: "Appointments & Schedule",
      icon: Calendar,
      headline: "An intuitive schedule designed for busy practices.",
      description:
        "Manage appointment slots, assign chairs/practitioners, update status (Waiting, In Chair, Completed), and prevent double bookings effortlessly.",
      functions: [
        "Day and Week grid calendar views",
        "Appointment status indicators & room assignments",
        "Quick reschedule and duration adjustment",
        "Direct patient chart opening from appointment cards",
      ],
      tag: "Clinic Calendar",
    },
    {
      id: "chart",
      name: "FDI Dental Chart (Odontogram)",
      icon: Stethoscope,
      headline: "Visual tooth mapping & surface condition tracking.",
      description:
        "Record tooth conditions, existing restorations, caries, root canal treatments, crowns, and planned procedures using standard FDI numbering.",
      functions: [
        "Adult and pediatric tooth arch layouts",
        "Multi-surface tooth condition logging (Occlusal, Mesial, Distal, etc.)",
        "Color-coded clinical status (Existing, Treatment Needed, Completed)",
        "Historical chart progression timeline",
      ],
      tag: "Clinical Tool",
    },
    {
      id: "treatments",
      name: "Treatment Plans & Procedures",
      icon: Activity,
      headline: "Follow clinical treatments from estimate to completion.",
      description:
        "Break down complex dental treatments into multi-stage plans with cost estimates, session tracking, and clinical notes.",
      functions: [
        "Multi-visit treatment plan creation",
        "Step-by-step procedure completion tracking",
        "Estimated fee calculation per treatment step",
        "Practitioner session note log",
      ],
      tag: "Clinical Planning",
    },
    {
      id: "billing",
      name: "Invoicing & Billing",
      icon: Receipt,
      headline: "Transparent clinic financial management.",
      description:
        "Convert completed treatments into invoices, log cash/card payments, track partial deposits, and maintain clear financial records.",
      functions: [
        "Automated invoice generation from procedure entries",
        "Deposit and installment payment logging",
        "Receipt printing and financial export",
        "Patient account balance tracker",
      ],
      tag: "Finance Module",
    },
    {
      id: "reports",
      name: "Statistics & Reports",
      icon: BarChart2,
      headline: "Actionable analytics to understand your practice.",
      description:
        "Track monthly patient volume, appointment attendance rates, most requested dental procedures, and total revenue breakdown.",
      functions: [
        "Patient acquisition & retention trends",
        "Procedure frequency distribution",
        "Monthly and annual revenue reports",
        "Practitioner productivity metrics",
      ],
      tag: "Analytics",
    },
    {
      id: "settings",
      name: "Clinic Settings & Users",
      icon: Settings,
      headline: "Tailor DentaFlow to your clinic's operational preferences.",
      description:
        "Customize clinic contact information, fee schedules, practitioner accounts, role permissions, and local database backup configurations.",
      functions: [
        "Practitioner & staff user account setup",
        "Customizable procedure price list",
        "Invoice header & clinic branding customization",
        "Local database backup & restore tools",
      ],
      tag: "Administration",
    },
  ];

  return (
    <div className="pt-28 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Product Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200">
            <Sparkles className="w-4 h-4" /> Full Product Walkthrough
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            Meet <span className="text-blue-600">DentaFlow.</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
            A comprehensive, offline-first dental practice management platform engineered for maximum speed, simplicity, and clinical precision.
          </p>

          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/20 transition-all"
            >
              Request a Demo
            </button>
          </div>
        </div>

        {/* Live Software Mockup Visual */}
        <div className="relative">
          <div className="text-center mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Interactive DentaFlow Application Interface
          </div>
          <DashboardPreview />
        </div>

        {/* Detailed Module Breakdown */}
        <div className="space-y-12 pt-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">Module Deep Dive</h2>
            <p className="text-slate-600 text-sm mt-2">
              Every section of DentaFlow is crafted to solve specific dental practice challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={mod.id}
                  id={mod.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 font-bold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                        {mod.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">{mod.name}</h3>
                    <p className="text-sm font-semibold text-blue-600">{mod.headline}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{mod.description}</p>

                    <div className="pt-2 space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Functions</h4>
                      <ul className="space-y-1.5">
                        {mod.functions.map((fn, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span>{fn}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                    <button
                      onClick={() => setIsDemoModalOpen(true)}
                      className="inline-flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      <span>See live demo of {mod.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <CTA />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
