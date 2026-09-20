import React from "react";
import { HeartHandshake, ShieldCheck, Stethoscope, Sparkles } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
          <HeartHandshake className="w-4 h-4" /> Practice Commitment
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Built for the everyday reality of modern dental practices.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          DentaFlow was designed from the ground up by studying real dental clinic workflows — eliminating friction, reducing administrative overhead, and letting practitioners focus on patient care.
        </p>

        <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60">
            <Stethoscope className="w-6 h-6 text-cyan-400 mb-3" />
            <h4 className="text-base font-bold text-white">Practitioner Centric</h4>
            <p className="text-xs text-slate-400 mt-1">
              Fewer clicks to record odontogram entries and patient progress notes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="text-base font-bold text-white">Local Data Ownership</h4>
            <p className="text-xs text-slate-400 mt-1">
              Your patient database stays in your clinic, controlled by your staff.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60">
            <Sparkles className="w-6 h-6 text-blue-400 mb-3" />
            <h4 className="text-base font-bold text-white">Zero Latency UI</h4>
            <p className="text-xs text-slate-400 mt-1">
              Native desktop speed with zero loading delay during busy consultation hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
