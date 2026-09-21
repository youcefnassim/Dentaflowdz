"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, Sparkles, User, Mail, Phone, MapPin, Building2, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    wilaya: "",
    cabinetType: "Cabinet individuel",
    practitioners: "1 Praticien",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Ce champ est obligatoire";
    if (!formData.phone.trim()) newErrors.phone = "Ce champ est obligatoire";
    if (!formData.email.trim()) {
      newErrors.email = "Ce champ est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Adresse email invalide";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const text = `Bonjour DentaFlow ! Je souhaite recevoir une démonstration du logiciel.

👤 Praticien / Nom: ${formData.name}
📞 Téléphone: ${formData.phone}
✉️ Email: ${formData.email}
📍 Wilaya: ${formData.wilaya || "Non spécifiée"}
🏥 Cabinet: ${formData.cabinetType} (${formData.practitioners})`;

    const whatsappUrl = `https://wa.me/213776665110?text=${encodeURIComponent(text)}`;

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Direct synchronous navigation (bypasses popup blockers on Android & iOS Chrome/Safari)
    window.location.href = whatsappUrl;
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      wilaya: "",
      cabinetType: "Cabinet individuel",
      practitioners: "1 Praticien",
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  const currentWhatsappText = `Bonjour DentaFlow ! Je souhaite recevoir une démonstration.
👤 Nom: ${formData.name}
📞 Tél: ${formData.phone}
✉️ Email: ${formData.email}
📍 Wilaya: ${formData.wilaya || "Non spécifiée"}`;
  const currentWhatsappUrl = `https://wa.me/213776665110?text=${encodeURIComponent(currentWhatsappText)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
        >
          {/* Header banner */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white p-4 sm:p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
              aria-label="Close modal"
            >
              <X className="w-4.5 h-4.5" />
            </button>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[11px] font-semibold tracking-wide border border-cyan-500/20 mb-2">
              <Sparkles className="w-3 h-3 text-cyan-400" /> Démonstration Personnalisée
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight text-white leading-tight">
              {t("demo_modal_title")}
            </h3>
            <p className="mt-1 text-slate-300 text-xs sm:text-sm leading-snug">
              {t("demo_modal_subtitle")}
            </p>
          </div>

          {/* Form / Success view */}
          <div className="p-4 sm:p-6 bg-white">
            {isSubmitted ? (
              <div className="text-center py-4 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-1">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Demande enregistrée</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                  Si l'application WhatsApp ne s'est pas ouverte automatiquement sur votre appareil, cliquez ci-dessous pour envoyer votre message :
                </p>
                <div className="pt-2 flex flex-col gap-2.5">
                  <a
                    href={currentWhatsappUrl}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2"
                  >
                    <span>📲 Ouvrir WhatsApp (+213 776 665 110)</span>
                  </a>
                  <button
                    onClick={resetForm}
                    className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-200 transition-colors border border-slate-200"
                  >
                    Fermer la fenêtre
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Nom & Prénom */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t("form_name")} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder={t("form_name_placeholder")}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-xs sm:text-sm border bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.name ? "border-red-500" : "border-slate-200"
                      }`}
                    />
                  </div>
                  {errors.name && <p className="mt-0.5 text-[11px] text-red-500 font-medium">{errors.name}</p>}
                </div>

                {/* Téléphone & Wilaya (2 Columns on mobile & desktop) */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {t("form_phone")} *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        placeholder="0550 12 34 56"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-8 pr-2.5 py-2.5 rounded-xl text-xs border bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                          errors.phone ? "border-red-500" : "border-slate-200"
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="mt-0.5 text-[11px] text-red-500 font-medium">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {t("form_wilaya")}
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Alger, Oran..."
                        value={formData.wilaya}
                        onChange={(e) => setFormData({ ...formData, wilaya: e.target.value })}
                        className="w-full pl-8 pr-2.5 py-2.5 rounded-xl text-xs border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t("form_email")} *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      placeholder={t("form_email_placeholder")}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-xs sm:text-sm border bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.email ? "border-red-500" : "border-slate-200"
                      }`}
                    />
                  </div>
                  {errors.email && <p className="mt-0.5 text-[11px] text-red-500 font-medium">{errors.email}</p>}
                </div>

                {/* Type de cabinet & Praticiens (2 Columns) */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {t("form_cabinet_type")}
                    </label>
                    <select
                      value={formData.cabinetType}
                      onChange={(e) => setFormData({ ...formData, cabinetType: e.target.value })}
                      className="w-full px-2.5 py-2.5 rounded-xl text-xs border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="Cabinet individuel">{t("form_type_individual")}</option>
                      <option value="Clinique dentaire">{t("form_type_clinic")}</option>
                      <option value="Autre">{t("form_type_other")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Praticiens
                    </label>
                    <select
                      value={formData.practitioners}
                      onChange={(e) => setFormData({ ...formData, practitioners: e.target.value })}
                      className="w-full px-2.5 py-2.5 rounded-xl text-xs border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="1 Praticien">{t("form_practitioners_1")}</option>
                      <option value="2 à 5 Praticiens">{t("form_practitioners_2")}</option>
                      <option value="Plus de 5 Praticiens">{t("form_practitioners_plus")}</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? "Envoi en cours..." : t("form_submit_btn")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

