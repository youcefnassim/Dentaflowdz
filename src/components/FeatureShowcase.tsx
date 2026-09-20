"use client";

import React from "react";
import {
  Users,
  Calendar,
  Stethoscope,
  Activity,
  CreditCard,
  BarChart2,
  CheckCircle2,
  ArrowRight,
  Search,
  Plus,
  Clock,
  ShieldCheck,
  TrendingUp,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FeatureShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Comprehensive Suite
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything your practice needs.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover the six core modules engineered to transform daily clinical operations, improve patient care, and streamline administration.
          </p>
        </div>

        {/* Feature 1 — Patient Management */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-800 text-slate-100"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-bold text-white">Patient Record Directory</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">1,284 Total Patients</span>
            </div>

            <div className="mt-4 space-y-3">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 font-bold text-sm flex items-center justify-center border border-blue-500/30">
                    KB
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Karim Benali (#PAT-0842)</h4>
                    <p className="text-xs text-slate-400">Male • 38 yrs • Phone: +213 550 12 34 56</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    Active Patient
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Medical Alerts</span>
                  <span className="font-semibold text-rose-400">Penicillin Allergy</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Total Visits</span>
                  <span className="font-semibold text-white">12 Procedures</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Balance</span>
                  <span className="font-semibold text-emerald-400">0.00 DA (Cleared)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Know every patient at a glance.
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
              Keep patient profiles organized and make essential medical information easy to access when you need it most during consultation.
            </p>

            <ul className="space-y-3 pt-1">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Centralized patient profile history & contact information</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Instant medical alert & allergy warnings</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Organized clinical documentation & attachments</span>
              </li>
            </ul>

            <Link
              href="/product#patients"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 pt-2"
            >
              <span>Explore Patient Records Module</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Feature 2 — Appointment Management (Alternating layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Your schedule, under control.
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
              Manage appointments with a clear and intuitive calendar designed specifically for busy dental practices and multi-chair clinics.
            </p>

            <ul className="space-y-3 pt-1">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span>Daily schedule visualization & chair assignment</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span>Appointment status tracking (Waiting, In Chair, Completed)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span>Instant patient details lookup from calendar view</span>
              </li>
            </ul>

            <Link
              href="/product#appointments"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 pt-2"
            >
              <span>Explore Appointment Calendar</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-800 text-slate-100 order-1 lg:order-2"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold text-white">Interactive Clinic Calendar</span>
              </div>
              <span className="text-xs text-cyan-400 font-mono">Today: 24 Appointments</span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="px-2.5 py-1 rounded bg-blue-900/60 text-blue-300 font-mono text-xs font-bold">
                    09:00 AM
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Karim Benali</h5>
                    <p className="text-[11px] text-slate-400">Consultation & Exam • Dr. Alami</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800">
                  In Progress
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="px-2.5 py-1 rounded bg-slate-700 text-slate-300 font-mono text-xs font-bold">
                    10:30 AM
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Amine Mansouri</h5>
                    <p className="text-[11px] text-slate-400">Endodontic Treatment #14 • Dr. Alami</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] bg-blue-950 text-blue-300 border border-blue-800">
                  Waiting Room
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature 3 — Dental Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-800 text-slate-100"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-teal-400" />
                <span className="text-sm font-bold text-white">FDI Odontogram & Dental Chart</span>
              </div>
              <span className="text-xs text-teal-300 font-mono">Tooth #14 Selected</span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center space-y-3">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Upper Maxillary Arch Preview
              </span>
              <div className="flex justify-center gap-2 flex-wrap">
                {[18, 17, 16, 15, 14, 13, 12, 11].map((tooth) => (
                  <div
                    key={tooth}
                    className={`w-9 h-10 rounded-lg text-xs font-mono font-bold flex items-center justify-center border ${
                      tooth === 14
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-md shadow-amber-500/20"
                        : "bg-slate-800 text-slate-300 border-slate-700"
                    }`}
                  >
                    #{tooth}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 pt-2">
                Click any tooth to record surface conditions, crowns, fillings or root treatments.
              </p>
            </div>
          </motion.div>

          {/* Right Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              A clearer view of every smile.
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
              Visualize and manage clinical dental information through an intuitive FDI dental chart built directly into patient files.
            </p>

            <ul className="space-y-3 pt-1">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Interactive adult & pediatric odontogram layout</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Tooth surface condition & restoration logging</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Historical dental chart progression tracking</span>
              </li>
            </ul>

            <Link
              href="/product#chart"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 pt-2"
            >
              <span>Explore Dental Charting</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Feature 4 — Treatment Management */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              04
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Follow treatments from start to finish.
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
              Structure treatment plans, estimate clinical steps, and track completed procedures across multiple visits seamlessly.
            </p>

            <ul className="space-y-3 pt-1">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <span>Multi-stage treatment planning & cost estimates</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <span>Clinical procedure progress & completion status</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <span>Detailed clinical session history per practitioner</span>
              </li>
            </ul>

            <Link
              href="/product#treatments"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 pt-2"
            >
              <span>Explore Treatment Planning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-800 text-slate-100 order-1 lg:order-2"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-bold text-white">Treatment Plan Tracker</span>
              </div>
              <span className="text-xs text-indigo-300 font-mono">Plan #TP-2026-04</span>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 flex justify-between items-center">
                <div>
                  <h5 className="font-bold text-white">Step 1: Endodontic Root Canal (#14)</h5>
                  <p className="text-slate-400">Pulpectomy & shaping completed</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Completed
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/60 flex justify-between items-center">
                <div>
                  <h5 className="font-bold text-white">Step 2: Zirconia Crown Placement (#14)</h5>
                  <p className="text-slate-400">Impression taken • Scheduled next week</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
                  Pending
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature 5 — Billing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-800 text-slate-100"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-white">Invoice & Billing Manager</span>
              </div>
              <span className="text-xs text-emerald-400 font-mono">Revenue: 245,000 DA</span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-slate-700">
                <span className="text-slate-400">Invoice #INV-2026-091</span>
                <span className="font-bold text-white">12,000 DA</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-700">
                <span className="text-slate-400">Patient: Karim Benali</span>
                <span className="text-emerald-400 font-semibold">Paid in Full</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-400">Payment Method: Cash / Receipt Printed</span>
                <span className="text-slate-400">Today, 09:45 AM</span>
              </div>
            </div>
          </motion.div>

          {/* Right Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              05
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Keep the financial side organized.
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
              Generate clear invoices, track partial payments, maintain payment history, and simplify clinic accounting.
            </p>

            <ul className="space-y-3 pt-1">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Instant invoice creation from treatment entries</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Deposit & installment payment logging</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Clean financial history per patient profile</span>
              </li>
            </ul>

            <Link
              href="/product#billing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 pt-2"
            >
              <span>Explore Invoicing Module</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Feature 6 — Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              06
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Understand your practice.
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
              Get actionable insights into patient volume, completed treatments, appointment fulfillment, and monthly clinic revenue.
            </p>

            <ul className="space-y-3 pt-1">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>Patient attendance & retention statistics</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>Treatment volume & procedure breakdowns</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>Monthly revenue & financial reports</span>
              </li>
            </ul>

            <Link
              href="/product#reports"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 pt-2"
            >
              <span>Explore Statistics & Reports</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-800 text-slate-100 order-1 lg:order-2"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-bold text-white">Clinic Analytics Overview</span>
              </div>
              <span className="text-xs text-purple-300 font-mono">September 2026</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 block">Monthly Appointments</span>
                <span className="text-xl font-bold text-white mt-1 block">412 Visits</span>
                <span className="text-[10px] text-emerald-400">+8.4% vs August</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 block">Treatments Completed</span>
                <span className="text-xl font-bold text-white mt-1 block">584 Procedures</span>
                <span className="text-[10px] text-cyan-400">Top: Scaling & Restorations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
