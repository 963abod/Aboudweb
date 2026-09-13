"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Home,
  Briefcase,
  Layers,
  BadgeDollarSign,
  MessageCircle,
  Sun,
  Moon,
  Globe,
} from "lucide-react";
import { useApp } from "@/lib/context";

type NavItem = {
  id: string;
  ar: string;
  en: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { id: "home", ar: "الرئيسية", en: "Home", icon: Home },
  { id: "services", ar: "خدماتنا", en: "Services", icon: Briefcase },
  { id: "portfolio", ar: "أعمالنا", en: "Portfolio", icon: Layers },
  { id: "pricing", ar: "الأسعار", en: "Pricing", icon: BadgeDollarSign },
  { id: "contact", ar: "تواصل", en: "Contact", icon: MessageCircle },
];

export default function CyberAuroraLiquidNav() {
  const { language, toggleLanguage, theme, toggleTheme, dir } = useApp();
  const [active, setActive] = useState("home");

  const navRef = useRef<HTMLElement | null>(null);
  const pillRef = useRef<HTMLDivElement | null>(null);

  const labels = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        label: language === "ar" ? item.ar : item.en,
      })),
    [language]
  );

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const current = sections
        .map((section) => ({
          id: section.id,
          top: Math.abs(section.getBoundingClientRect().top - 140),
        }))
        .sort((a, b) => a.top - b.top)[0];

      if (current) setActive(current.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const pill = pillRef.current;

    if (!nav || !pill) return;

    const button = nav.querySelector<HTMLButtonElement>(
      `[data-nav-id="${active}"]`
    );

    if (!button) return;

    const navRect = nav.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    pill.style.width = `${buttonRect.width}px`;
    pill.style.transform = `translateX(${buttonRect.left - navRect.left}px)`;
  }, [active, language]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const nav = navRef.current;

      if (!nav) return;

      const rect = nav.getBoundingClientRect();

      nav.style.setProperty("--x", `${event.clientX - rect.left}px`);
      nav.style.setProperty("--y", `${event.clientY - rect.top}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navigate = (id: string) => {
    setActive(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <div className="relative">
        {/* Floating Aurora Glare Blobs */}
        <div className="pointer-events-none absolute -inset-16 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-28 w-28 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
          <div className="absolute right-1/4 top-8 h-32 w-32 rounded-full bg-violet-600/20 blur-3xl animate-pulse" />
          <div className="absolute left-1/2 bottom-0 h-24 w-24 rounded-full bg-fuchsia-500/15 blur-3xl animate-pulse" />
        </div>

        <nav
          ref={navRef}
          dir={dir}
          className="liquid-nav relative flex items-center gap-1 overflow-hidden rounded-full border border-white/15 bg-black/50 p-1.5 shadow-2xl backdrop-blur-2xl"
          style={
            {
              "--x": "50%",
              "--y": "50%",
            } as React.CSSProperties
          }
        >
          {/* Dynamic Mouse Glare */}
          <div
            className="pointer-events-none absolute inset-0 opacity-70 transition-opacity"
            style={{
              background:
                "radial-gradient(circle 120px at var(--x) var(--y), rgba(255,255,255,0.18), transparent 70%)",
            }}
          />

          {/* Sliding Active Pill */}
          <div
            ref={pillRef}
            className="absolute bottom-1.5 top-1.5 rounded-full bg-white/15 border border-white/20 shadow-lg transition-[width,transform] duration-500"
            style={{
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />

          {/* Navigation Items */}
          {labels.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              data-nav-id={id}
              onClick={() => navigate(id)}
              className="relative z-10 flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:text-white sm:px-4 sm:text-sm"
              aria-current={active === id ? "page" : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}

          <div className="mx-1 h-6 w-px bg-white/15" />

          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="relative z-10 flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label="Toggle Language"
            title={language === "ar" ? "Switch to English" : "التحويل للعربية"}
          >
            <Globe className="h-3.5 w-3.5" />
            <span className="uppercase">{language === "ar" ? "EN" : "عربي"}</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="relative z-10 rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
