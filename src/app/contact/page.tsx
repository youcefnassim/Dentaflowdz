"use client";

import React, { useState } from "react";
import {
  User,
  Building2,
  Mail,
  Phone,
  Globe,
  Users,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  Instagram
} from "lucide-react";
import CTA from "@/components/CTA";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    clinicName: "",
    email: "",
    phone: "",
    country: "Algeria",
    practitioners: "1-3",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.clinicName.trim()) newErrors.clinicName = "Clinic name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const text = `Bonjour DentaFlow ! Demande de démonstration depuis la page Contact.

👤 Nom: ${formData.fullName}
🏥 Cabinet: ${formData.clinicName}
📞 Tél: ${formData.phone}
✉️ Email: ${formData.email}
🌍 Pays: ${formData.country}
👥 Praticiens: ${formData.practitioners}
💬 Message: ${formData.message || "Aucun message spécifique"}`;

    const whatsappUrl = `https://wa.me/213776665110?text=${encodeURIComponent(text)}`;

    setIsSubmitting(false);
    setIsSubmitted(true);

    window.location.href = whatsappUrl;
  };

  return (
    <div className="pt-28 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200">
            <Sparkles className="w-4 h-4" /> Get in Touch
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            Let's talk about <span className="text-blue-600">your clinic.</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
            Discover how DentaFlow can fit into your daily clinic workflow. Request a personalized demo or speak directly with our product team.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">DentaFlow Support & Demo Office</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                Our clinic specialists are ready to demonstrate DentaFlow, answer technical questions, and help configure licensing for your practice.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider">Email Inquiry</h4>
                  <p className="text-slate-300 mt-0.5">dentaflowdz@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider">WhatsApp Support</h4>
                  <a
                    href="https://wa.me/213776665110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 underline mt-0.5 inline-block font-mono text-xs font-bold"
                  >
                    +213 776 665 110 (Contact sur WhatsApp)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider">Instagram Officiel</h4>
                  <a
                    href="https://www.instagram.com/denta.flow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 underline mt-0.5 inline-block font-mono text-xs font-bold"
                  >
                    @denta.flow (Suivre l'actualité)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider">Support Availability</h4>
                  <p className="text-emerald-400 font-semibold mt-0.5">24/7 Active Support</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Personalized demo & privacy protected</span>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Demo Request Submitted</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm">
                  Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. We have received your clinic request for <span className="font-semibold text-slate-900">{formData.clinicName}</span>. A DentaFlow specialist will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request a Personalized Demo</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Dr. Sarah Alami"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg text-sm border bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                          errors.fullName ? "border-red-500" : "border-slate-300"
                        }`}
                      />
                    </div>
                    {errors.fullName && <p className="mt-1 text-xs text-red-500 font-medium">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Clinic Name *
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Alami Dental Care"
                        value={formData.clinicName}
                        onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg text-sm border bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                          errors.clinicName ? "border-red-500" : "border-slate-300"
                        }`}
                      />
                    </div>
                    {errors.clinicName && <p className="mt-1 text-xs text-red-500 font-medium">{errors.clinicName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        placeholder="doctor@clinic.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg text-sm border bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                          errors.email ? "border-red-500" : "border-slate-300"
                        }`}
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        placeholder="+213 776 665 110"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg text-sm border bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                          errors.phone ? "border-red-500" : "border-slate-300"
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-xs text-red-500 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Country
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg text-sm border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                      >
                        <option value="Algeria">Algeria</option>
                        <option value="France">France</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Morocco">Morocco</option>
                        <option value="UAE">United Arab Emirates</option>
                        <option value="Other">Other / International</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Number of Practitioners
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <select
                        value={formData.practitioners}
                        onChange={(e) => setFormData({ ...formData, practitioners: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg text-sm border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                      >
                        <option value="Solo">Solo Practitioner (1)</option>
                        <option value="1-3">Small Practice (1 - 3)</option>
                        <option value="4-10">Medium Practice (4 - 10)</option>
                        <option value="10+">Multi-specialty Clinic (10+)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Message / Special Workflow Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your clinic workflow or specific software features you would like to test..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg text-sm border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 disabled:opacity-50 transition-all shadow-md shadow-blue-600/20"
                >
                  {isSubmitting ? "Submitting Request..." : "Request a Demo"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
}
