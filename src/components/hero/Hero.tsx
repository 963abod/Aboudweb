"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, ShieldCheck, Zap, Code } from "lucide-react";
import { useApp } from "@/lib/context";

export default function HeroSection() {
  const { language, dir } = useApp();

  const isAr = language === "ar";

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Aurora Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-violet-600/20 to-fuchsia-500/10 blur-[120px] animate-aurora" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-cyan-400/15 blur-[90px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/15 blur-[100px]" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 text-center">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md text-cyan-300 text-xs sm:text-sm font-medium mb-8 shadow-lg shadow-cyan-500/5"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: "4s" }} />
          <span>
            {isAr
              ? "وكالة رقمية متكاملة للشركات الرفيعة"
              : "Premium Digital Agency for Modern Businesses"}
          </span>
        </motion.div>

        {/* Main Cinematic Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight sm:leading-none mb-6"
        >
          {isAr ? (
            <>
              نصمم ونبني{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                مواقع رقمية استثنائية
              </span>{" "}
              ترتقي بعلامتك
            </>
          ) : (
            <>
              We Engineer{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Exceptional Digital
              </span>{" "}
              Experiences
            </>
          )}
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 dark:text-gray-300 mb-10 font-normal leading-relaxed"
        >
          {isAr
            ? "نطور برمجيات فائقة السرعة مع واجهات زجاجية Liquid UI وحلول ذكاء اصطناعي مخصصة تجذب العملاء وتحقق أعلى معدلات التحويل."
            : "We craft ultra-fast websites with Liquid UI aesthetics and custom AI workflows engineered to elevate your brand and maximize revenue."}
        </motion.p>

        {/* Action Buttons (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
          >
            <span>{isAr ? "احصل على موقعك بـ $250+" : "Start Project from $250+"}</span>
            {dir === "rtl" ? (
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </a>

          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-gray-200 border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            <span>{isAr ? "استعرض أعمالنا" : "View Portfolio"}</span>
          </a>
        </motion.div>

        {/* Key Highlights / Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          <div className="glass-card p-5 rounded-2xl flex items-center gap-4 text-start">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                {isAr ? "سرعة أداء فائقة" : "Ultra-Fast Speed"}
              </div>
              <div className="text-xs text-gray-400">
                {isAr ? "Next.js & React 19" : "Optimized Next.js Stack"}
              </div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl flex items-center gap-4 text-start">
            <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                {isAr ? "تصميم زجاجي فاخر" : "Liquid UI Aesthetic"}
              </div>
              <div className="text-xs text-gray-400">
                {isAr ? "تجربة بصرية سينمائية" : "Cinematic Micro-Interactions"}
              </div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl flex items-center gap-4 text-start">
            <div className="p-3 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                {isAr ? "لوحة تحكم كاملة" : "Private Admin Center"}
              </div>
              <div className="text-xs text-gray-400">
                {isAr ? "تحكم شامل في المحتوى" : "Complete Content Control"}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
