"use client";

import React from "react";
import { Users, Calendar, Activity, CreditCard, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyDentaFlow() {
  const cards = [
    {
      title: "Patient Management",
      description: "Keep patient information organized and accessible from one place.",
      icon: Users,
      badge: "Centralized Records",
      color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-600",
    },
    {
      title: "Appointments",
      description: "Manage your schedule and keep track of upcoming visits.",
      icon: Calendar,
      badge: "Smart Calendar",
      color: "from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-cyan-600",
    },
    {
      title: "Treatments",
      description: "Follow treatments and maintain a clear clinical history.",
      icon: Activity,
      badge: "Odontogram & Plans",
      color: "from-teal-500/10 to-emerald-500/10 border-teal-500/20 text-teal-600",
    },
    {
      title: "Billing",
      description: "Keep invoices and payment information organized.",
      icon: CreditCard,
      badge: "Invoicing & Revenue",
      color: "from-sky-500/10 to-blue-500/10 border-sky-500/20 text-sky-600",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Why DentaFlow
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Your clinic. Simplified.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Stop switching between disconnected tools. DentaFlow brings the essential workflows of your dental practice into one streamlined experience.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center border shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                  <Link href="/features" className="inline-flex items-center gap-1 hover:gap-2 transition-all">
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
