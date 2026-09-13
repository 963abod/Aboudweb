"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, CheckCircle2, Phone, Mail, Sparkles } from "lucide-react";
import { useApp } from "@/lib/context";
import { ContactSubmission } from "@/types";
import { initialSubmissions } from "@/data/siteData";

export default function ContactSection() {
  const { language } = useApp();
  const isAr = language === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceId: "web-dev",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const newSubmission: ContactSubmission = {
      id: `sub-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceId: formData.serviceId,
      message: formData.message,
      createdAt: new Date().toISOString().replace("T", " ").substring(0, 16),
      status: "new",
    };

    // Store in localStorage so Admin dashboard can read submitted leads
    const existing = localStorage.getItem("app_contact_submissions");
    let submissions: ContactSubmission[] = existing ? JSON.parse(existing) : initialSubmissions;
    submissions = [newSubmission, ...submissions];
    localStorage.setItem("app_contact_submissions", JSON.stringify(submissions));

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", serviceId: "web-dev", message: "" });
  };

  const whatsappUrl = "https://wa.me/966500000000?text=" + encodeURIComponent(isAr ? "مرحباً، أود الاستفسار عن خدمات تطوير المواقع" : "Hello, I would like to inquire about web development services");

  return (
    <section id="contact" className="relative py-28 px-4 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-violet-600/15 to-fuchsia-500/15 blur-[150px] pointer-events-none -z-10" />

      <div className="container max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-medium mb-4"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isAr ? "تواصل معنا" : "Get In Touch"}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4"
          >
            {isAr ? (
              <>
                جاهز لبدء مشروعك{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  الرقمي القادم؟
                </span>
              </>
            ) : (
              <>
                Ready to Build Your{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Next Legacy?
                </span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            {isAr
              ? "تواصل معنا مباشرة عبر الواتساب للحصول على استجابة فورية، أو املأ النموذج وسيتواصل معك فريقنا خلال ساعات."
              : "Reach out directly via WhatsApp for instant response or submit the contact form below."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Quick Direct Channels Column */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Primary WhatsApp Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-900/30 backdrop-blur-xl transition-all duration-300 shadow-xl shadow-emerald-500/5"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {isAr ? "محادثة واتساب مباشرة" : "Direct WhatsApp Chat"}
                  </h3>
                  <p className="text-xs text-emerald-400/80 mt-1">
                    {isAr ? "رد سريع خلال دقائق ⚡" : "Instant response within minutes ⚡"}
                  </p>
                </div>
              </div>
            </a>

            {/* Email Contact Card */}
            <div className="p-6 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {isAr ? "البريد الإلكتروني" : "Direct Email"}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">contact@aboudweb.agency</p>
                </div>
              </div>
            </div>

            {/* Pricing Hint Card */}
            <div className="p-6 rounded-3xl border border-violet-500/20 bg-violet-950/20 backdrop-blur-xl text-start">
              <div className="flex items-center gap-2 text-violet-300 font-bold text-sm mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{isAr ? "تذكير بخطة الـ $250+" : "$250+ Starter Reminder"}</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {isAr
                  ? "يمكنك البدء بموقع متكامل وعصري ابتداءً من $250 مع تسليم سريع ودعم كامل للغتين."
                  : "Launch your custom high-converting single-page site starting from $250 with fast 5-day delivery."}
              </p>
            </div>
          </motion.div>

          {/* Interactive Form Column */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8 rounded-3xl border border-white/10"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {isAr ? "تم إرسال طلبك بنجاح!" : "Message Sent Successfully!"}
                </h3>
                <p className="text-sm text-gray-300 mb-6">
                  {isAr
                    ? "شكراً لتواصلك معنا. سيتواصل معك فريقنا في أقرب وقت ممكن."
                    : "Thank you for reaching out. Our team will review your inquiry and get back shortly."}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  {isAr ? "إرسال رسالة أخرى" : "Send Another Inquiry"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      {isAr ? "الاسم الكامل *" : "Full Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isAr ? "أحمد المحمد" : "John Doe"}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      {isAr ? "البريد الإلكتروني *" : "Email Address *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      {isAr ? "رقم الهاتف / الواتساب" : "Phone / WhatsApp"}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+966 50 000 0000"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      {isAr ? "الخدمة المطلوبة" : "Interested Service"}
                    </label>
                    <select
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                    >
                      <option value="web-dev">{isAr ? "تطوير موقع ($250+)" : "Web Development ($250+)"}</option>
                      <option value="ui-ux">{isAr ? "تصميم واجهات UI/UX" : "UI/UX Design"}</option>
                      <option value="ai-solutions">{isAr ? "حلول ذكاء اصطناعي" : "AI Solutions"}</option>
                      <option value="e-commerce">{isAr ? "متجر إلكتروني" : "E-Commerce"}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    {isAr ? "تفاصيل المشروع *" : "Project Details *"}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isAr ? "اكتب باختصار أهداف مشروعك والخدمة المطلوبة..." : "Describe your project goals and requirements..."}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <span>{isAr ? "إرسال الطلب الآن" : "Submit Inquiry"}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
