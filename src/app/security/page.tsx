"use client";

import React, { useState } from "react";
import CTA from "@/components/CTA";
import {
  ShieldCheck,
  Lock,
  HardDrive,
  Key,
  Save,
  Cpu,
  Database,
  ArrowRight,
  FileCode,
  Shield,
  Layers,
  CheckCircle2
} from "lucide-react";
import DemoModal from "@/components/DemoModal";

export default function SecurityPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-16 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <ShieldCheck className="w-4 h-4" /> Technical Architecture & Integrity
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Security & <span className="text-cyan-400">Data Architecture</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
            DentaFlow is designed around local data containment, controlled application authentication, and reliable database backup workflows.
          </p>
        </div>

        {/* Technical Architecture Diagram */}
        <div className="bg-slate-950 p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" /> DentaFlow System & Storage Architecture
          </h2>
          <p className="text-xs text-slate-400 mb-8">
            Visual breakdown of software layers operating locally on your clinic workstation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">1. Desktop UI Layer</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                React & TypeScript rendering engine packaged inside an Electron runtime for native desktop windowing and fast UI interactions.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">2. Application Controller</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Manages role-based authentication, practitioner permissions, license token checks, and local query validation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">3. SQLite Storage</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Embedded relational database file stored locally on the clinic computer's hard drive. All SQL queries execute locally with zero network roundtrips.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Security Philosophy</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our engineering philosophy prioritizes local data sovereignty. By storing clinic records locally on your station, DentaFlow eliminates reliance on external cloud servers for core daily operations.
            </p>
          </div>

          <div className="bg-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Local Data Storage</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Patient profiles, appointment histories, dental charts, and billing ledgers are contained in your local SQLite database file on your workstation directory.
            </p>
          </div>

          <div className="bg-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Authentication & Roles</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Application access requires user login credentials. Administrator accounts can configure practitioner and assistant profiles to prevent unauthorized access to sensitive financial or clinical records.
            </p>
          </div>

          <div className="bg-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">License Protection</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              DentaFlow uses protected software license key activation to verify active software subscriptions and authorized clinic computer installations.
            </p>
          </div>

          <div className="bg-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <Save className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Database Backup & Recovery</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Clinic administrators can perform direct database file backups to external storage drives or local network storage, allowing straightforward recovery if a computer hardware failure occurs.
            </p>
          </div>

          <div className="bg-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <FileCode className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Privacy Considerations</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Because patient data remains on your local workstation, your clinic retains complete physical custody and administrative control over patient records and clinical documentation.
            </p>
          </div>
        </div>
      </div>

      <CTA />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
