"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Calendar as CalendarIcon,
  Activity,
  Receipt,
  BarChart3,
  Settings,
  Search,
  Plus,
  Bell,
  CheckCircle2,
  Clock,
  ChevronRight,
  TrendingUp,
  Sparkles,
  CreditCard,
  Stethoscope,
  Shield,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "patients" | "chart" | "appointments" | "billing">("dashboard");
  const [selectedTooth, setSelectedTooth] = useState<number | null>(14);
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const tabs = [
    { id: "dashboard", label: t("dash_tab_dashboard"), icon: LayoutDashboard },
    { id: "patients", label: t("dash_tab_patients"), icon: Users, badge: "1,284" },
    { id: "appointments", label: t("dash_tab_appointments"), icon: CalendarIcon, badge: "24" },
    { id: "chart", label: t("dash_tab_chart"), icon: Stethoscope },
    { id: "billing", label: t("dash_tab_billing"), icon: Receipt },
  ];

  // Teeth numbers for FDI dental chart mockup
  const upperTeethRight = [18, 17, 16, 15, 14, 13, 12, 11];
  const upperTeethLeft = [21, 22, 23, 24, 25, 26, 27, 28];
  const lowerTeethRight = [48, 47, 46, 45, 44, 43, 42, 41];
  const lowerTeethLeft = [31, 32, 33, 34, 35, 36, 37, 38];

  return (
    <div className={`relative w-full rounded-2xl p-2 sm:p-3 shadow-2xl transition-all duration-300 backdrop-blur-xl ${
      isDarkMode
        ? "bg-slate-900/95 border border-slate-700/80 shadow-blue-500/10"
        : "bg-slate-100/95 border border-slate-300 shadow-slate-400/20"
    }`}>
      {/* Electron / macOS Window Header Bar */}
      <div className={`flex items-center justify-between px-4 py-2.5 rounded-t-xl border-b transition-colors ${
        isDarkMode ? "bg-slate-950/90 border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700"
      }`}>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <span className="text-xs font-bold tracking-wide font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            DentaFlow v2.4 Pro • SQLite Offline Mode
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            {language === "fr" ? "Cabinet: Dr. Alami" : "Clinic: Dr. Alami"}
          </span>
          <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
            <Zap className="w-3 h-3 text-amber-400" /> Local Synced
          </span>
        </div>
      </div>

      {/* Modern Top Horizontal Navigation Bar */}
      <div className={`p-3 border-b flex flex-col sm:flex-row items-center justify-between gap-3 ${
        isDarkMode ? "bg-slate-950/80 border-slate-800/80" : "bg-slate-50 border-slate-200"
      }`}>
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none py-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/25 scale-[1.02]"
                    : isDarkMode
                    ? "text-slate-400 hover:text-white hover:bg-slate-800/60"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-cyan-400"}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-300"
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Doctor User Badge */}
        <div className="hidden lg:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-800/50 border border-slate-700/60">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-xs text-white">
            DA
          </div>
          <div className="text-left leading-none">
            <p className="text-xs font-bold text-white">Dr. Amine Alami</p>
            <p className="text-[10px] text-slate-400">Lead Surgeon</p>
          </div>
        </div>
      </div>

      {/* Main Workspace Body */}
      <div className={`p-4 sm:p-6 min-h-[500px] rounded-b-xl ${
        isDarkMode ? "bg-slate-900/60 text-slate-100" : "bg-white text-slate-900"
      }`}>
        {/* Top Search & Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-800/80">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder={t("dash_search_placeholder")}
              readOnly
              className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs placeholder-slate-400 focus:outline-none transition-colors ${
                isDarkMode
                  ? "bg-slate-950/80 border border-slate-800 text-slate-200"
                  : "bg-slate-100 border border-slate-200 text-slate-800"
              }`}
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors">
              <Bell className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Notifications</span>
            </button>
            <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/30 transition-all">
              <Plus className="w-3.5 h-3.5" />
              <span>{t("dash_btn_new_app")}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Views */}
        <AnimatePresence mode="wait">
          {activeTab === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-5"
            >
              {/* Header Greeting */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                    {t("dash_greeting")}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {t("dash_greeting_sub")}
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Clinic Active • 24 Appointments Today
                </span>
              </div>

              {/* 4 Statistics KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-blue-500/50 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t("dash_stat_patients")}</span>
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white mt-2">1,284</p>
                  <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-semibold">
                    <TrendingUp className="w-3 h-3" /> +18 this month
                  </p>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-cyan-500/50 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t("dash_stat_today_app")}</span>
                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <CalendarIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white mt-2">24</p>
                  <p className="text-[11px] text-cyan-300 mt-1 flex items-center gap-1 font-semibold">
                    <Clock className="w-3 h-3" /> Next patient at 09:00 AM
                  </p>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-indigo-500/50 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t("dash_stat_treatments")}</span>
                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <Activity className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white mt-2">36</p>
                  <p className="text-[11px] text-indigo-300 mt-1 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3 h-3" /> 14 Completed today
                  </p>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-emerald-500/50 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t("dash_stat_revenue")}</span>
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CreditCard className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xl sm:text-2xl font-extrabold text-white mt-2">245,000 DA</p>
                  <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-semibold">
                    <TrendingUp className="w-3 h-3" /> +12.4% vs last week
                  </p>
                </div>
              </div>

              {/* Schedule & Odontogram Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Today's Scheduled Patients */}
                <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-400" /> Scheduled Patient Queue
                    </h4>
                    <span className="text-xs text-slate-400 font-mono">Today</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-blue-950/50 border border-blue-800/50">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded-lg bg-blue-900/80 text-blue-300 font-mono text-xs font-bold">
                          09:00
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white">Karim Benali</p>
                          <p className="text-[11px] text-slate-400">Consultation & Examination • Room 1</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] bg-emerald-900/80 text-emerald-300 font-bold">
                        In Progress
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs font-bold">
                          10:30
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white">Amine Mansouri</p>
                          <p className="text-[11px] text-slate-400">Root Canal Treatment (#14) • Room 2</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] bg-blue-900/80 text-blue-300 font-bold">
                        Confirmed
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs font-bold">
                          11:30
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white">Yasmine Khelifi</p>
                          <p className="text-[11px] text-slate-400">Tooth Scaling & Polishing • Room 1</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] bg-amber-900/80 text-amber-300 font-bold">
                        Waiting Room
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactive Odontogram Quick Card */}
                <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <Stethoscope className="w-4 h-4 text-cyan-400" /> Odontogram FDI Chart
                      </h4>
                      <span className="text-[10px] text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-800 font-mono">
                        Tooth #14
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Quick clinical condition record for Karim Benali.
                    </p>

                    <div className="mt-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                      <div className="flex justify-between text-slate-300">
                        <span className="text-slate-500">Diagnosis:</span>
                        <span className="font-bold text-amber-400">Deep Occlusal Caries</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span className="text-slate-500">Procedure:</span>
                        <span className="font-semibold text-slate-200">Composite Restoration</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span className="text-slate-500">Status:</span>
                        <span className="text-emerald-400 font-semibold">Scheduled Today</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveTab("chart")}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-cyan-300 border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Open Full Interactive FDI Chart</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Patients View */}
          {activeTab === "patients" && (
            <motion.div
              key="patients"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Patient Records Directory</h3>
                <span className="text-xs text-slate-400 font-mono">1,284 Patient Records</span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/80">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900 text-slate-400 uppercase tracking-wider font-bold border-b border-slate-800">
                    <tr>
                      <th className="px-4 py-3">Code</th>
                      <th className="px-4 py-3">Patient Name</th>
                      <th className="px-4 py-3">Phone</th>
                      <th className="px-4 py-3">Last Visit</th>
                      <th className="px-4 py-3">Medical Note</th>
                      <th className="px-4 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    <tr>
                      <td className="px-4 py-3 font-mono text-cyan-400">#PAT-0842</td>
                      <td className="px-4 py-3 font-bold text-white">Karim Benali</td>
                      <td className="px-4 py-3">+213 550 12 34 56</td>
                      <td className="px-4 py-3">Today, 09:00 AM</td>
                      <td className="px-4 py-3 text-slate-400">Penicillin Allergy noted</td>
                      <td className="px-4 py-3 text-right">
                        <button className="text-xs text-blue-400 hover:underline font-bold">View Record</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-cyan-400">#PAT-0843</td>
                      <td className="px-4 py-3 font-bold text-white">Amine Mansouri</td>
                      <td className="px-4 py-3">+213 555 98 76 54</td>
                      <td className="px-4 py-3">Today, 10:30 AM</td>
                      <td className="px-4 py-3 text-slate-400">Endodontic treatment #14</td>
                      <td className="px-4 py-3 text-right">
                        <button className="text-xs text-blue-400 hover:underline font-bold">View Record</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-cyan-400">#PAT-0844</td>
                      <td className="px-4 py-3 font-bold text-white">Yasmine Khelifi</td>
                      <td className="px-4 py-3">+213 560 33 22 11</td>
                      <td className="px-4 py-3">Today, 11:30 AM</td>
                      <td className="px-4 py-3 text-slate-400">Scaling & Polishing</td>
                      <td className="px-4 py-3 text-right">
                        <button className="text-xs text-blue-400 hover:underline font-bold">View Record</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* FDI Dental Chart Tab */}
          {activeTab === "chart" && (
            <motion.div
              key="chart"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Interactive Odontogram Chart</h3>
                  <p className="text-xs text-slate-400">FDI Dental Numbering System Visualizer</p>
                </div>
                <span className="text-xs text-cyan-400 font-mono font-bold">Karim Benali (#PAT-0842)</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-center">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Upper Arch (Maxillary)</div>
                <div className="flex justify-center gap-1.5 flex-wrap">
                  {upperTeethRight.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTooth(t)}
                      className={`w-9 h-11 rounded-xl text-xs font-mono font-bold border transition-all flex flex-col items-center justify-center ${
                        selectedTooth === t
                          ? "bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-500/30 scale-105"
                          : t === 14
                          ? "bg-amber-950 text-amber-300 border-amber-700"
                          : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"
                      }`}
                    >
                      <span className="text-[9px] text-slate-400">T</span>
                      {t}
                    </button>
                  ))}
                  <div className="w-4" />
                  {upperTeethLeft.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTooth(t)}
                      className={`w-9 h-11 rounded-xl text-xs font-mono font-bold border transition-all flex flex-col items-center justify-center ${
                        selectedTooth === t
                          ? "bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-500/30 scale-105"
                          : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"
                      }`}
                    >
                      <span className="text-[9px] text-slate-400">T</span>
                      {t}
                    </button>
                  ))}
                </div>

                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest pt-3">Lower Arch (Mandibular)</div>
                <div className="flex justify-center gap-1.5 flex-wrap">
                  {lowerTeethRight.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTooth(t)}
                      className={`w-9 h-11 rounded-xl text-xs font-mono font-bold border transition-all flex flex-col items-center justify-center ${
                        selectedTooth === t
                          ? "bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-500/30 scale-105"
                          : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"
                      }`}
                    >
                      <span className="text-[9px] text-slate-400">T</span>
                      {t}
                    </button>
                  ))}
                  <div className="w-4" />
                  {lowerTeethLeft.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTooth(t)}
                      className={`w-9 h-11 rounded-xl text-xs font-mono font-bold border transition-all flex flex-col items-center justify-center ${
                        selectedTooth === t
                          ? "bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-500/30 scale-105"
                          : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"
                      }`}
                    >
                      <span className="text-[9px] text-slate-400">T</span>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-slate-400">Tooth Condition: </span>
                  <span className="font-bold text-white text-sm">Tooth #{selectedTooth || 14} (First Premolar)</span>
                  <p className="text-slate-400 mt-0.5">Occlusal Surface Caries • Composite Restoration</p>
                </div>
                <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors shadow-md">
                  Log Clinical Note
                </button>
              </div>
            </motion.div>
          )}

          {/* Appointments Tab */}
          {activeTab === "appointments" && (
            <motion.div
              key="appointments"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Appointments Calendar</h3>
                <span className="text-xs text-cyan-400 font-mono">Week View</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3.5 rounded-xl bg-blue-950/50 border border-blue-800/50 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-white">09:00 - 10:00 • Karim Benali</p>
                    <p className="text-slate-400 text-[11px]">Consultation & Examination</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-900/80 text-emerald-300 font-bold">Confirmed</span>
                </div>
                <div className="p-3.5 rounded-xl bg-purple-950/50 border border-purple-800/50 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-white">10:30 - 11:30 • Amine Mansouri</p>
                    <p className="text-slate-400 text-[11px]">Root Canal #14</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-900/80 text-blue-300 font-bold">In Office</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Billing Tab */}
          {activeTab === "billing" && (
            <motion.div
              key="billing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Invoicing & Receipts</h3>
                <span className="text-xs text-emerald-400 font-mono font-bold">Total Today: 245,000 DA</span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/80">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900 text-slate-400 uppercase tracking-wider font-bold border-b border-slate-800">
                    <tr>
                      <th className="px-4 py-3">Invoice ID</th>
                      <th className="px-4 py-3">Patient</th>
                      <th className="px-4 py-3">Service</th>
                      <th className="px-4 py-3">Amount</th>
                      <th className="px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    <tr>
                      <td className="px-4 py-3 font-mono text-cyan-400">#INV-2026-091</td>
                      <td className="px-4 py-3 font-bold text-white">Karim Benali</td>
                      <td className="px-4 py-3">Consultation + X-Ray</td>
                      <td className="px-4 py-3 font-bold">12,000 DA</td>
                      <td className="px-4 py-3"><span className="px-2.5 py-1 rounded-full bg-emerald-900/80 text-emerald-300 font-bold">Paid (Cash)</span></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-cyan-400">#INV-2026-092</td>
                      <td className="px-4 py-3 font-bold text-white">Amine Mansouri</td>
                      <td className="px-4 py-3">Root Canal Treatment</td>
                      <td className="px-4 py-3 font-bold">35,000 DA</td>
                      <td className="px-4 py-3"><span className="px-2.5 py-1 rounded-full bg-amber-900/80 text-amber-300 font-bold">Partial Deposit</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
