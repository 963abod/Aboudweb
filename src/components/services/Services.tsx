"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Sparkles, Cpu, ShoppingBag, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { useApp } from "@/lib/context";
import { initialServices } from "@/data/siteData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Sparkles,
  Cpu,
  ShoppingBag,
};

export default function ServicesSection() {
  const { language, dir } = useApp();
  const isAr = language === "ar";

  return (
    <section id="services" className="relative py-28 px-4 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs sm:text-sm font-medium mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? "خدماتنا الرقمية" : "Our Digital Capabilities"}</span>
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
                حلول برمجية ومصممة{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  لنمو أعمالك
                </span>
              </>
            ) : (
              <>
                Crafted Digital Services for{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Exponential Growth
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
              ? "نجمع بين جماليات التصميم الزجاجي وأحدث تقنيات التطوير لبناء مواقع وتطبيقات تفوق التوقعات."
              : "We pair fluid liquid glass aesthetics with high-grade engineering to deliver industry-leading web solutions."}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initialServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;
            const title = isAr ? service.title.ar : service.title.en;
            const shortDesc = isAr ? service.shortDesc.ar : service.shortDesc.en;
            const tag = isAr ? service.tag.ar : service.tag.en;
            const features = isAr ? service.features.ar : service.features.en;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl hover:border-cyan-500/40 hover:bg-black/60 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                {/* Glow ring effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-b from-cyan-500/10 via-transparent to-violet-600/10" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300">
                      {tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {shortDesc}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                >
                  <span>{isAr ? "طلب هذه الخدمة" : "Request Service"}</span>
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
