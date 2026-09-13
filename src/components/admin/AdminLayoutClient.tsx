"use client";

import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Layers,
  Briefcase,
  BadgeDollarSign,
  MessageCircle,
  Settings,
  LogOut,
  Sun,
  Moon,
  ExternalLink,
} from "lucide-react";
import { useApp } from "@/lib/context";
import AdminLogin from "./AdminLogin";

interface AdminLayoutProps {
  children: (activeTab: string) => React.ReactNode;
}

export default function AdminLayoutClient({ children }: AdminLayoutProps) {
  const { language, toggleLanguage, theme, toggleTheme, dir } = useApp();
  const isAr = language === "ar";

  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const isAuth = sessionStorage.getItem("app_admin_auth") === "true";
    setAuthenticated(isAuth);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("app_admin_auth");
    setAuthenticated(false);
  };

  if (authenticated === null) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!authenticated) {
    return <AdminLogin onLoginSuccess={() => setAuthenticated(true)} />;
  }

  const navTabs = [
    { id: "dashboard", labelAr: "نظرة عامة", labelEn: "Overview", icon: LayoutDashboard },
    { id: "portfolio", labelAr: "إدارة الأعمال", labelEn: "Portfolio", icon: Layers },
    { id: "services", labelAr: "إدارة الخدمات", labelEn: "Services", icon: Briefcase },
    { id: "pricing", labelAr: "إدارة الأسعار", labelEn: "Pricing ($250+)", icon: BadgeDollarSign },
    { id: "submissions", labelAr: "طلبات التواصل", labelEn: "Contact Leads", icon: MessageCircle },
    { id: "settings", labelAr: "إعدادات الموقع", labelEn: "Settings & SEO", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row font-sans" dir={dir}>
      {/* Sidebar / Mobile Nav Header */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 bg-black/90 backdrop-blur-2xl p-4 flex flex-col justify-between shrink-0">
        <div>
          {/* Admin Header */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 flex items-center justify-center font-bold text-white shadow-lg">
                A
              </div>
              <div>
                <h2 className="text-sm font-bold text-white">
                  {isAr ? "لوحة التحكم" : "Admin Center"}
                </h2>
                <p className="text-[10px] text-cyan-400 font-mono">v2.0 • Aboud Agency</p>
              </div>
            </div>

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              title={isAr ? "معاينة الموقع" : "View Live Site"}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const label = isAr ? tab.labelAr : tab.labelEn;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/20 to-violet-600/20 text-cyan-300 border border-cyan-500/30 shadow-md"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-gray-300 transition-colors uppercase"
              title="Toggle Language"
            >
              {language === "ar" ? "EN" : "عربي"}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 transition-colors"
              title="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold hover:bg-rose-500/20 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{isAr ? "خروج" : "Logout"}</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto max-w-6xl mx-auto w-full">
        {children(activeTab)}
      </main>
    </div>
  );
}
