"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, Key, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import { useApp } from "@/lib/context";

export default function AdminLogin({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const { language, dir } = useApp();
  const isAr = language === "ar";

  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin password simulation
    if (password === "admin123" || password === "aboud2025") {
      sessionStorage.setItem("app_admin_auth", "true");
      onLoginSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Aurora glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-violet-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="glass-card max-w-md w-full p-8 rounded-3xl border border-white/10 relative z-10 text-center shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-8 h-8" />
        </div>

        <h1 className="text-2xl font-black text-white mb-2">
          {isAr ? "لوحة التحكم الخاصة" : "Private Admin Control Center"}
        </h1>
        <p className="text-xs text-gray-400 mb-8">
          {isAr
            ? "الرجاء إدخال كلمة المرور للوصول لإدارة المحتوى"
            : "Enter key to authenticate into site management"}
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder={isAr ? "كلمة المرور (admin123)" : "Password (admin123)"}
              className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors text-center font-mono"
            />
            <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {error && (
            <p className="text-xs text-rose-400 font-semibold">
              {isAr ? "كلمة المرور غير صحيحة!" : "Invalid administrator password!"}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
          >
            <span>{isAr ? "تسجيل الدخول" : "Authenticate"}</span>
            <Key className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-white/10 text-xs text-gray-500">
          <Link href="/" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1">
            {dir === "rtl" ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
            <span>{isAr ? "العودة للموقع الرئيسي" : "Back to Public Website"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
