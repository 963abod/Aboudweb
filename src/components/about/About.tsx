"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Code, Sparkles, Users, Rocket } from "lucide-react";
import { useApp } from "@/lib/context";
import { aboutStats } from "@/data/siteData";

export default function AboutSection() {
  const { language } = useApp();
  const isAr = language === "ar";

  const values = [
    {
      icon: Code,
      title: { ar: "تطوير برمجي مخصص", en: "Bespoke Code Architecture" },
      desc: {
        ar: "لا نعتمد على القوالب الجاهزة، بل نبني كل شطر برمجي بـ Next.js و React لضمان السرعة والأمان.",
        en: "Zero off-the-shelf templates. Every pixel and line of code is engineered with Next.js for high performance."
      }
    },
    {
      icon: Sparkles,
      title: { ar: "تصميم زجاجي Liquid UI", en: "Liquid Glass Experience" },
      desc: {
        ar: "تجربة مستخدم زجاجية فريدة بحركات سينمائية تترك انطباعاً راقياً لدى عميلك من اللحظة الأولى.",
        en: "Fluid glass interfaces with subtle animations designed to captivate visitors immediately."
      }
    },
    {
      icon: Rocket,
      title: { ar: "تحسين معدلات التحويل", en: "Conversion-Centric UX" },
      desc: {
        ar: "نراعي رحلة العميل وسهولة التنقل لتوجيه الزوار مباشرة إلى التواصل والشراء.",
        en: "Tailored user journeys engineered to eliminate friction and maximize client inquiries."
      }
    },
    {
      icon: Users,
      title: { ar: "دعم وتكامل مستمر", en: "Dedicated Partnership" },
      desc: {
        ar: "نحن معك خطوة بخطوة من الفكرة وحتى الإطلاق والنمو المستمر.",
        en: "We act as your extended digital tech team from initial strategy to launch and scale."
      }
    }
  ];

  return (
    <section id="about" className="relative py-28 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs sm:text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              <span>{isAr ? "عن الوكالة" : "About Our Agency"}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              {isAr ? (
                <>
                  نبتكر الهويات الرقمية التي{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    تصنع الفارق
                  </span>
                </>
              ) : (
                <>
                  Engineering Digital Identities That{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Define Industries
                  </span>
                </>
              )}
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              {isAr
                ? "نحن وكالة رقمية متخصصة في تطوير وبناء المواقع والتطبيقات الفاخرة للشركات والشركات الناشئة. ندمج بين أحدث التقنيات البرمجية والجماليات الزجاجية العصرية لتقديم منصات إلكترونية فائقة السرعة والجودة."
                : "We are a boutique digital agency dedicated to designing and building luxury web platforms for modern brands. We merge modern engineering stack with liquid glass visual art to deliver ultra-fast digital experiences."}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {aboutStats.map((stat, sIdx) => (
                <div key={sIdx} className="text-start">
                  <div className="text-2xl sm:text-3xl font-black text-cyan-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">
                    {isAr ? stat.label.ar : stat.label.en}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {values.map((val, vIdx) => {
              const Icon = val.icon;
              const title = isAr ? val.title.ar : val.title.en;
              const desc = isAr ? val.desc.ar : val.desc.en;

              return (
                <div
                  key={vIdx}
                  className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
