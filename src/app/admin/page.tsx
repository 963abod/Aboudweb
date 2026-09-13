"use client";

import React, { useState, useEffect } from "react";
import {
  Layers,
  Briefcase,
  BadgeDollarSign,
  MessageCircle,
  Plus,
  Trash2,
  Edit,
} from "lucide-react";
import { useApp } from "@/lib/context";
import {
  initialPortfolio,
  initialServices,
  initialPricingPlans,
  initialSubmissions,
} from "@/data/siteData";
import { PortfolioItem, ServiceItem, PricingPlan, ContactSubmission } from "@/types";
import AdminLayoutClient from "@/components/admin/AdminLayoutClient";

export default function AdminPage() {
  const { language } = useApp();
  const isAr = language === "ar";

  // Persistent Admin State
  const [portfolioList, setPortfolioList] = useState<PortfolioItem[]>(initialPortfolio);
  const [servicesList] = useState<ServiceItem[]>(initialServices);
  const [pricingList] = useState<PricingPlan[]>(initialPricingPlans);
  const [submissionsList, setSubmissionsList] = useState<ContactSubmission[]>(initialSubmissions);

  // Modals & Forms State
  const [editingProject, setEditingProject] = useState<PortfolioItem | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);

  // Load from LocalStorage if existing
  useEffect(() => {
    const savedSubmissions = localStorage.getItem("app_contact_submissions");
    if (savedSubmissions) {
      try {
        setSubmissionsList(JSON.parse(savedSubmissions));
      } catch (e) {
        console.error("Error parsing submissions", e);
      }
    }
  }, []);

  // Handlers for Portfolio CRUD
  const handleDeleteProject = (id: string) => {
    setPortfolioList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    setPortfolioList((prev) => {
      const exists = prev.some((item) => item.id === editingProject.id);
      if (exists) {
        return prev.map((item) => (item.id === editingProject.id ? editingProject : item));
      }
      return [editingProject, ...prev];
    });

    setEditingProject(null);
    setIsAddingProject(false);
  };

  return (
    <AdminLayoutClient>
      {(activeTab) => (
        <div>
          {/* Dashboard Overview Tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-2xl font-black text-white mb-1">
                  {isAr ? "لوحة التحليلات والنظرة العامة" : "Admin Executive Overview"}
                </h1>
                <p className="text-xs text-gray-400">
                  {isAr
                    ? "إدارة وإشراف متكامل على كافة أقسام ومحتوى الموقع الرقمي."
                    : "Real-time content management and incoming lead monitoring."}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">{portfolioList.length}</div>
                    <div className="text-xs text-gray-400">
                      {isAr ? "المشاريع بالمعرض" : "Portfolio Projects"}
                    </div>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">{servicesList.length}</div>
                    <div className="text-xs text-gray-400">
                      {isAr ? "الخدمات المتاحة" : "Active Services"}
                    </div>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <BadgeDollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">$250+</div>
                    <div className="text-xs text-gray-400">
                      {isAr ? "خطة البداية الأساسية" : "Starter Pricing"}
                    </div>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">{submissionsList.length}</div>
                    <div className="text-xs text-gray-400">
                      {isAr ? "طلب تواصل مستلم" : "Submitted Leads"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Submissions Table */}
              <div className="glass-card p-6 rounded-3xl border border-white/10">
                <h2 className="text-lg font-bold text-white mb-4">
                  {isAr ? "أحدث الطلبات المستلمة" : "Latest Client Inquiries"}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-start">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-400">
                        <th className="py-3 px-3">{isAr ? "الاسم" : "Client Name"}</th>
                        <th className="py-3 px-3">{isAr ? "البريد الإلكتروني" : "Email"}</th>
                        <th className="py-3 px-3">{isAr ? "الهاتف" : "Phone"}</th>
                        <th className="py-3 px-3">{isAr ? "الخدمة" : "Service"}</th>
                        <th className="py-3 px-3">{isAr ? "التاريخ" : "Date"}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {submissionsList.map((sub) => (
                        <tr key={sub.id} className="hover:bg-white/5 transition-colors">
                          <td className="py-3 px-3 font-semibold text-white">{sub.name}</td>
                          <td className="py-3 px-3 text-gray-300">{sub.email}</td>
                          <td className="py-3 px-3 text-gray-300">{sub.phone || "-"}</td>
                          <td className="py-3 px-3 text-cyan-400 font-medium">{sub.serviceId}</td>
                          <td className="py-3 px-3 text-gray-400">{sub.createdAt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Portfolio Management Tab */}
          {activeTab === "portfolio" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-bold text-white">
                    {isAr ? "إدارة معرض الأعمال" : "Portfolio Management"}
                  </h1>
                  <p className="text-xs text-gray-400">
                    {isAr
                      ? "إضافة وتعديل وحذف المشاريع المعروضة في Carousel والصفحة الرئيسية."
                      : "Add, update, or reorder showcase projects."}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEditingProject({
                      id: `proj-${Date.now()}`,
                      title: { ar: "مشروع جديد", en: "New Project" },
                      category: { ar: "تطبيقات الويب", en: "Web App" },
                      categorySlug: "web",
                      description: { ar: "وصف المشروع...", en: "Project description..." },
                      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
                      client: { ar: "عميل جديد", en: "New Client" },
                      completionYear: "2025",
                      technologies: ["Next.js", "Tailwind CSS"],
                      featured: true,
                    });
                    setIsAddingProject(true);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>{isAr ? "إضافة مشروع" : "Add Project"}</span>
                </button>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portfolioList.map((item) => (
                  <div key={item.id} className="glass-card p-4 rounded-2xl border border-white/10 flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title.en}
                      className="w-24 h-24 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {isAr ? item.category.ar : item.category.en}
                        </span>
                        <h3 className="text-sm font-bold text-white mt-1">
                          {isAr ? item.title.ar : item.title.en}
                        </h3>
                        <p className="text-xs text-gray-400 line-clamp-1">
                          {isAr ? item.description.ar : item.description.en}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => {
                            setEditingProject(item);
                            setIsAddingProject(false);
                          }}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(item.id)}
                          className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Edit/Add Modal */}
              {editingProject && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                  <div className="glass-card max-w-lg w-full p-6 rounded-3xl border border-white/15 max-h-[90vh] overflow-y-auto">
                    <h2 className="text-lg font-bold text-white mb-4">
                      {isAddingProject
                        ? isAr
                          ? "إضافة مشروع جديد"
                          : "Add New Project"
                        : isAr
                        ? "تعديل المشروع"
                        : "Edit Project"}
                    </h2>

                    <form onSubmit={handleSaveProject} className="space-y-4 text-xs">
                      <div>
                        <label className="block text-gray-300 font-semibold mb-1">
                          {isAr ? "العنوان بالعربية" : "Arabic Title"}
                        </label>
                        <input
                          type="text"
                          required
                          value={editingProject.title.ar}
                          onChange={(e) =>
                            setEditingProject({
                              ...editingProject,
                              title: { ...editingProject.title, ar: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-300 font-semibold mb-1">
                          {isAr ? "العنوان بالإنجليزية" : "English Title"}
                        </label>
                        <input
                          type="text"
                          required
                          value={editingProject.title.en}
                          onChange={(e) =>
                            setEditingProject({
                              ...editingProject,
                              title: { ...editingProject.title, en: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-300 font-semibold mb-1">
                          {isAr ? "رابط صورة المشروع" : "Image URL"}
                        </label>
                        <input
                          type="url"
                          required
                          value={editingProject.image}
                          onChange={(e) =>
                            setEditingProject({ ...editingProject, image: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white"
                        />
                      </div>

                      <div className="flex items-center justify-end gap-2 pt-4">
                        <button
                          type="button"
                          onClick={() => setEditingProject(null)}
                          className="px-4 py-2 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5"
                        >
                          {isAr ? "إلغاء" : "Cancel"}
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold"
                        >
                          {isAr ? "حفظ التغييرات" : "Save Changes"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Services Management Tab */}
          {activeTab === "services" && (
            <div className="space-y-6">
              <h1 className="text-xl font-bold text-white">
                {isAr ? "إدارة الخدمات المقدمة" : "Services Management"}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicesList.map((srv) => (
                  <div key={srv.id} className="glass-card p-5 rounded-2xl border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-bold text-white">
                        {isAr ? srv.title.ar : srv.title.en}
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {isAr ? srv.tag.ar : srv.tag.en}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mb-4">
                      {isAr ? srv.shortDesc.ar : srv.shortDesc.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Management Tab ($250+) */}
          {activeTab === "pricing" && (
            <div className="space-y-6">
              <h1 className="text-xl font-bold text-white">
                {isAr ? "إدارة الخطط والأسعار ($250+)" : "Pricing Plans Management"}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pricingList.map((plan) => (
                  <div key={plan.id} className="glass-card p-5 rounded-2xl border border-white/10">
                    <span className="text-xs font-bold text-cyan-400">{plan.price}</span>
                    <h3 className="text-base font-bold text-white mt-1">
                      {isAr ? plan.name.ar : plan.name.en}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2">
                      {isAr ? plan.description.ar : plan.description.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Submissions Tab */}
          {activeTab === "submissions" && (
            <div className="space-y-6">
              <h1 className="text-xl font-bold text-white">
                {isAr ? "طلبات ورسائل التواصل" : "Incoming Client Inquiries"}
              </h1>

              <div className="space-y-3">
                {submissionsList.map((sub) => (
                  <div key={sub.id} className="glass-card p-5 rounded-2xl border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-bold text-white">{sub.name}</h3>
                      <span className="text-xs text-gray-400">{sub.createdAt}</span>
                    </div>
                    <p className="text-xs text-cyan-400 mb-2">
                      {sub.email} • {sub.phone || "No Phone"}
                    </p>
                    <p className="text-xs text-gray-300 bg-black/40 p-3 rounded-xl border border-white/5">
                      {sub.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
              <h1 className="text-xl font-bold text-white mb-2">
                {isAr ? "إعدادات الهوية ومحركات البحث SEO" : "Site Settings & SEO"}
              </h1>
              <p className="text-xs text-gray-400">
                {isAr
                  ? "تحكم في كلمات المفاتيح، هاتف الواتساب الموحد، وروابط المطور."
                  : "Central site configurations, SEO meta tags, and developer credits."}
              </p>

              <div className="space-y-3 text-xs pt-4 border-t border-white/10">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    {isAr ? "عنوان الموقع (Meta Title)" : "Site Title"}
                  </label>
                  <input
                    type="text"
                    defaultValue="وكالة عبود الرقمية | Aboud Web Agency - $250+"
                    className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    {isAr ? "رابط الواتساب الموحد" : "Unified WhatsApp URL"}
                  </label>
                  <input
                    type="text"
                    defaultValue="https://wa.me/966500000000"
                    className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </AdminLayoutClient>
  );
}
