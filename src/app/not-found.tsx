import React from "react";
import Link from "next/link";
import { ArrowLeft, Stethoscope } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-900 text-white flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/30">
        <Stethoscope className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight">404 — Page Not Found</h1>
      <p className="mt-3 text-slate-400 max-w-md text-sm leading-relaxed">
        The requested DentaFlow page could not be located. Return to the home landing page or explore our features.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-all shadow-md shadow-blue-600/30"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
