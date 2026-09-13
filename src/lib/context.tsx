"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, Theme } from "@/types";

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  dir: "rtl" | "ltr";
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar");
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("app_lang") as Language | null;
    const savedTheme = localStorage.getItem("app_theme") as Theme | null;

    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
      setLanguageState(savedLang);
    }
    if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
      setThemeState(savedTheme);
    }
    setMounted(true);
  }, []);

  const dir = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("app_lang", language);
    localStorage.setItem("app_theme", theme);
  }, [language, theme, dir, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const setTheme = (th: Theme) => {
    setThemeState(th);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        theme,
        setTheme,
        toggleTheme,
        dir,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
