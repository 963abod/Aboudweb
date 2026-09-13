"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, BadgeDollarSign, ArrowLeft, ArrowRight } from "lucide-react";
import { useApp } from "@/lib/context";
import { initialPricingPlans } from "@/data/siteData";

export default function PricingSection() {
  const { language, dir } = useApp();
  const isAr = language === "ar";

  return (
    <section id="pricing" className="relative py-28 px-4 overflow-hidden">
      {/* Background Aurora Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-violet-600/15 to-fuchsia-500/10 blur-[140px] pointer-events-none -z-10" />

      <div className="container max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-medium mb-4"
          >
            <BadgeDollarSign className="w-4 h-4" />
            <span>{isAr ? "خطط الأسعار والاستثمار" : "Transparent Pricing"}</span>
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
                موقعك الرقمي الفاخر يبدأ من{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  $250 فقط
                </span>
              </>
            ) : (
              <>
                High-End Digital Agency Sites Starting at{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  $250+
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
              ? "استثمر في حضورك الرقمي بأسعار شفافة وخيارات مرنة تناسب جميع أحجام الشركات والشركات الناشئة."
              : "Invest in a high-converting digital presence with transparent pricing tailored for startups and scaling enterprises."}
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {initialPricingPlans.map((plan, index) => {
            const name = isAr ? plan.name.ar : plan.name.en;
            const description = isAr ? plan.description.ar : plan.description.en;
            const badge = plan.badge ? (isAr ? plan.badge.ar : plan.badge.en) : null;
            const features = isAr ? plan.features.ar : plan.features.en;
            const ctaText = isAr ? plan.ctaText.ar : plan.ctaText.en;
            const isStarter = plan.id === "starter";

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 backdrop-blur-2xl flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-violet-950/60 to-black/80 border-2 border-violet-500/80 shadow-2xl shadow-violet-500/20 scale-105 z-10"
                    : isStarter
                    ? "bg-gradient-to-b from-cyan-950/40 to-black/60 border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/10"
                    : "bg-black/40 border border-white/10 hover:border-white/20"
                }`}
              >
                {/* Popular or Starter Highlight Tag */}
                {badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                        plan.popular
                          ? "bg-gradient-to-r from-violet-600 to-fuchsia-600"
                          : "bg-gradient-to-r from-cyan-500 to-blue-600"
                      }`}
                    >
                      <Zap className="w-3 h-3 fill-current" />
                      {badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
                    <p className="text-xs text-gray-400 min-h-[36px]">{description}</p>
                  </div>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs text-gray-400">
                      {isAr ? "/ مشروع متكامل" : "/ complete build"}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="border-t border-white/10 pt-6 mb-8">
                    <p className="text-xs font-semibold text-gray-300 mb-4 uppercase tracking-wider">
                      {isAr ? "المميزات المتضمنة:" : "Included features:"}
                    </p>
                    <ul className="space-y-3">
                      {features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                          <div className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5 shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Link Button */}
                <a
                  href="#contact"
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-center inline-flex items-center justify-center gap-2 transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/30 hover:scale-102"
                      : isStarter
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-102"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                  }`}
                >
                  <span>{ctaText}</span>
                  {dir === "rtl" ? (
                    <ArrowLeft className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
