"use client";

import React, { useState } from "react";
import CTA from "@/components/CTA";
import {
  Users,
  Calendar,
  FolderOpen,
  Stethoscope,
  Activity,
  CreditCard,
  Receipt,
  FileText,
  BarChart2,
  FileSpreadsheet,
  UserCheck,
  Settings,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import DemoModal from "@/components/DemoModal";

export default function FeaturesPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const featuresList = [
    {
      title: "Patient Management",
      icon: Users,
      badge: "Core Module",
      description: "Organize patient demographics, contact details, medical alerts, emergency contacts, and complete medical histories in structured profiles.",
      details: ["Centralized profile index", "Penicillin & medical allergy warnings", "Quick search by phone, code or name"],
    },
    {
      title: "Appointments",
      icon: Calendar,
      badge: "Clinic Calendar",
      description: "Manage practice appointments with intuitive day/week calendar views, chair assignments, and real-time status indicators.",
      details: ["Waiting room & in-chair tracking", "Multi-practitioner schedule grids", "Duration & status management"],
    },
    {
      title: "Patient Records",
      icon: FolderOpen,
      badge: "Clinical Files",
      description: "Store comprehensive clinical consultation records, tooth notes, examination findings, and practitioner comments securely.",
      details: ["Chronological visit history", "Consultation session notes", "Exportable record summaries"],
    },
    {
      title: "Dental Chart (Odontogram)",
      icon: Stethoscope,
      badge: "FDI Visualizer",
      description: "Visualize adult and pediatric dental arches using standard FDI tooth numbering for surface condition and restoration tracking.",
      details: ["FDI tooth arch layout", "Surface condition recording", "Color-coded clinical history"],
    },
    {
      title: "Treatment Plans",
      icon: Activity,
      badge: "Procedure Steps",
      description: "Structure complex dental procedures into multi-visit treatment plans with cost estimations and step completion tracking.",
      details: ["Multi-phase treatment estimates", "Procedure status tracking", "Session-by-session history"],
    },
    {
      title: "Billing",
      icon: CreditCard,
      badge: "Invoicing",
      description: "Generate official clinic invoices from recorded treatments, calculate total balances, and maintain clear payment ledgers.",
      details: ["Instant invoice generation", "Customizable clinic receipt headers", "Patient balance overview"],
    },
    {
      title: "Payments",
      icon: Receipt,
      badge: "Cash & Ledger",
      description: "Log partial deposits, cash or card payments, track installments, and issue printed payment receipts to patients.",
      details: ["Partial payment logging", "Installment plan tracking", "Printed receipt records"],
    },
    {
      title: "Documents",
      icon: FileText,
      badge: "Attachments",
      description: "Attach X-rays, lab prescriptions, consent forms, and external medical documents directly to patient record files.",
      details: ["X-ray image attachments", "Lab work order records", "Consent form storage"],
    },
    {
      title: "Statistics",
      icon: BarChart2,
      badge: "Analytics",
      description: "Monitor clinic performance metrics, including monthly patient volume, appointment fulfillment rates, and top procedures.",
      details: ["Patient growth metrics", "Procedure frequency insights", "Appointment fulfillment rates"],
    },
    {
      title: "Reports",
      icon: FileSpreadsheet,
      badge: "Export",
      description: "Generate monthly financial revenue breakdowns, treatment volume summaries, and administrative audit reports.",
      details: ["Monthly revenue reports", "Practitioner activity logs", "Data export options"],
    },
    {
      title: "User Management",
      icon: UserCheck,
      badge: "Security & Roles",
      description: "Configure user accounts for dentists, dental assistants, and reception staff with role-based access permissions.",
      details: ["Role-based access control", "Practitioner account setup", "User activity audit logging"],
    },
    {
      title: "Settings & Configuration",
      icon: Settings,
      badge: "Customization",
      description: "Customize clinic branding, fee lists, default appointment durations, and local database backup configurations.",
      details: ["Custom procedure price lists", "Clinic header & logo setup", "Local SQLite backup tools"],
    },
  ];

  return (
    <div className="pt-28 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200">
            <Sparkles className="w-4 h-4" /> 12 Core Clinic Modules
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            Powerful features. <span className="text-blue-600">Simple workflow.</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
            DentaFlow combines essential clinical tools and practice administration into a unified, high-performance desktop application.
          </p>
        </div>

        {/* 12 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feat.description}</p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {feat.details.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-semibold text-blue-600">
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    <span>Request demo for this feature</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <CTA />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
