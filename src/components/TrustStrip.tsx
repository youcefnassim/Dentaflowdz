import React from "react";
import { Users, Calendar, Activity, Building } from "lucide-react";

export default function TrustStrip() {
  const benefits = [
    { title: "Manage patients", icon: Users, desc: "Centralized record directory" },
    { title: "Organize appointments", icon: Calendar, desc: "Intuitive clinic schedule" },
    { title: "Track treatments", icon: Activity, desc: "Complete clinical history" },
    { title: "Control your clinic", icon: Building, desc: "Unified billing & insights" },
  ];

  return (
    <div className="bg-slate-900 border-y border-slate-800 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl bg-slate-800/40 border border-slate-800/80 hover:border-slate-700 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-tight">{b.title}</h4>
                  <p className="text-xs text-slate-400">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
