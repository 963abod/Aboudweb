"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers } from "lucide-react";
import { useApp } from "@/lib/context";
import { initialPortfolio } from "@/data/siteData";
import StylishCarousel from "./StylishCarousel";

export default function PortfolioSection() {
  const { language } = useApp();
  const isAr = language === "ar";
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = useMemo(
    () => [
      { slug: "all", labelAr: "الكل", labelEn: "All Projects" },
      { slug: "web", labelAr: "تطبيقات الويب", labelEn: "Web Apps" },
      { slug: "platforms", labelAr: "المنصات والمتاجر", labelEn: "Platforms" },
      { slug: "ai", labelAr: "الذكاء الاصطناعي", labelEn: "AI Solutions" },
      { slug: "design", labelAr: "التصميم والتجربة", labelEn: "UI/UX & Design" },
    ],
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return initialPortfolio;
    return initialPortfolio.filter((item) => item.categorySlug === activeCategory);
  }, [activeCategory]);

  const carouselItems = useMemo(
    () =>
      filteredProjects.map((item) => ({
        src: item.image,
        title: isAr ? item.title.ar : item.title.en,
        alt: isAr ? item.title.ar : item.title.en,
        demoUrl: item.demoUrl,
        category: isAr ? item.category.ar : item.category.en,
        client: isAr ? item.client.ar : item.client.en,
        technologies: item.technologies,
      })),
    [filteredProjects, isAr]
  );

  return (
    <section id="portfolio" className="relative py-28 px-4 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-fuchsia-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-medium mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isAr ? "معرض الأعمال" : "Featured Portfolio"}</span>
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
                مشاريع نعتز{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  بتطويرها وتنفيذها
                </span>
              </>
            ) : (
              <>
                Selected Works &{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Digital Craftsmanship
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
              ? "تصفح عبر المعرض التفاعلي للتعرف على أحدث مشاريعنا المنفذة بأعلى معايير السرعة والأناقة."
              : "Explore our interactive portfolio showcasing high-impact digital products designed for growth."}
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            const label = isAr ? cat.labelAr : cat.labelEn;

            return (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20 scale-105"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Stylish Carousel Showcase */}
        {carouselItems.length > 0 ? (
          <StylishCarousel
            items={carouselItems}
            autoPlay={5000}
            showArrows={true}
            showDots={true}
          />
        ) : (
          <div className="text-center py-12 text-gray-400">
            {isAr ? "لا توجد مشاريع مضافة في هذه الفئة حالياً." : "No projects found in this category."}
          </div>
        )}
      </div>
    </section>
  );
}
