import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Monitor, Shield, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Logo dark />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Modern software for modern dental practices. Centralize patient management, appointments, odontograms, clinical records, and billing in one offline-first desktop platform.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Desktop Architecture
              </span>
              <span>•</span>
              <span>Electron + React + SQLite</span>
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Product</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/product" className="hover:text-white transition-colors">
                  Product Overview
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  All Features
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Security & Data Architecture
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Request a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Resources</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ Accordion
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Documentation & Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Clinic Support Team
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Offline System Requirements
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Legal & Social</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li className="pt-2 flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors text-xs font-semibold"
                >
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors text-xs font-semibold"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors text-xs font-semibold"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 DentaFlow. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            <Shield className="w-3.5 h-3.5 text-blue-400" /> Designed for modern dental practices
          </p>
        </div>
      </div>
    </footer>
  );
}
