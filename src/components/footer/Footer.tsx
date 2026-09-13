"use client";

import React from "react";
import { MessageCircle, Globe, ArrowUp, Share2 } from "lucide-react";
import { useApp } from "@/lib/context";

export default function Footer() {
  const { language } = useApp();
  const isAr = language === "ar";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = {
    whatsapp: "https://wa.me/966500000000",
    instagram: "https://instagram.com/aboudweb",
    facebook: "https://facebook.com/aboudweb",
  };

  const devUrl = "https://github.com/963abod";

  return (
    <footer className="relative border-t border-white/10 bg-black/80 pt-16 pb-8 px-4 backdrop-blur-2xl">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Agency Bio Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 flex items-center justify-center font-bold text-white text-sm">
                A
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                {isAr ? "عبود للحلول الرقمية" : "Aboud Web Agency"}
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
              {isAr
                ? "وكالة رقمية متخصصة في تطوير المواقع الفاخرة، الواجهات الزجاجية العصرية، وحلول الذكاء الاصطناعي بدءاً من $250."
                : "A luxury digital agency crafting high-converting websites, liquid glass UIs, and AI solutions starting at $250."}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              {isAr ? "روابط سريعة" : "Quick Navigation"}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">
                  {isAr ? "الرئيسية" : "Home"}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  {isAr ? "خدماتنا" : "Services"}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-400 transition-colors">
                  {isAr ? "أعمالنا" : "Portfolio"}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  {isAr ? "الأسعار ($250+)" : "Pricing ($250+)"}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  {isAr ? "عن الوكالة" : "About Us"}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              {isAr ? "معلومات التواصل" : "Get In Touch"}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li>{isAr ? "البريد: contact@aboudweb.agency" : "Email: contact@aboudweb.agency"}</li>
              <li>{isAr ? "الواتساب: +966 50 000 0000" : "WhatsApp: +966 50 000 0000"}</li>
              <li>{isAr ? "ساعات العمل: 24/7 طوال الأسبوع" : "Hours: 24/7 Client Support"}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Developer Credit */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} {isAr ? "جميع الحقوق محفوظة - وكالة عبود الرقمية" : "Aboud Digital Agency. All rights reserved."}
          </div>

          {/* Developer Credit */}
          <div className="flex items-center gap-2">
            <span>{isAr ? "تصميم وتطوير" : "Designed & Engineered by"}</span>
            <a
              href={devUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4"
            >
              {isAr ? "عبود" : "Aboud"}
            </a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
