/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DOWNLOADABLE_ASSETS, TRANSLATIONS } from '../data';
import { Download, FileText, CheckCircle2, ShieldEllipsis, UserCheck, Lock } from 'lucide-react';
import { Language } from '../types';

interface DownloadsProps {
  lang: Language;
}

export default function DownloadsView({ lang }: DownloadsProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    jobTitle: '',
    phone: '',
    email: ''
  });

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.company && formData.email) {
      setIsUnlocked(true);
    }
  };

  const handleDownload = (filename: string) => {
    // Simulated dynamic PDF download with alert indicating success
    alert(isRtl 
      ? `تم بدء تحميل الملف الإنشائي: ${filename}` 
      : `Initiated corporate PDF transfer secure link: ${filename}`
    );
  };

  return (
    <div className="py-12 pb-20 space-y-16 animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* 1. Page Header */}
      <section className="text-center space-y-4 max-w-4xl mx-auto px-4">
        <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase">
          {t.navDownloads}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {isRtl ? "المستندات الهندسية والتجهيزات" : "B2B Document Portal & Catalogues"}
        </h1>
        <p className="text-xs text-gray-400 font-mono tracking-wider uppercase max-w-3xl mx-auto">
          {isRtl 
            ? "بوابة تحميل الكتالوجات والملفات التقنية للمهندسين والاستشاريين والمقاولين" 
            : "Pull certified technical PDF pamphlets, machinery specifications, and corporate manuals"
          }
        </p>
        <div className="w-16 h-1 bg-brand-gold mx-auto rounded" />
      </section>

      {/* Gated Lead Form Section */}
      {!isUnlocked ? (
        <section className="max-w-2xl mx-auto px-4">
          <div className="bg-brand-navy border-2 border-brand-gold/20 rounded-xl p-8 space-y-6 relative overflow-hidden blueprint-grid">
            
            <div className="text-center space-y-2">
              <div className="mx-auto w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold border border-brand-gold/20 mb-3">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-sans uppercase">
                {isRtl ? "تأكيد الهوية الهندسية لفتح التحميل" : "Secure Procurement Verification"}
              </h3>
              <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                {isRtl 
                  ? "يتطلب تحميل الملفات الفنية وجداول معايرة خرسانات الساحل ملء استمارة الشركات لإرسال مستندات المطابقة والمكعبات المصدقة."
                  : "All structural technical catalogs, calibration files and mix recipe tables are restricted to verified developers, contractors or consultants."
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "الاسم الثنائي / الكامل" : "Your Full Name *"}</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g., Eng. Ahmed Al-Shorouk"
                    className="w-full bg-brand-blue border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "الشركة / جهة التعاقد" : "Company / Developer *"}</label>
                  <input 
                    type="text" 
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="e.g., Constec Contracting"
                    className="w-full bg-brand-blue border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "المسمى الوظيفي" : "Your Job Title"}</label>
                  <input 
                    type="text" 
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                    placeholder="e.g., Senior Procurement Director"
                    className="w-full bg-brand-blue border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "رقم الهاتف المباشر" : "Direct Phone / WhatsApp"}</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="e.g., 01080016516"
                    className="w-full bg-brand-blue border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "البريد الإلكتروني للعمل" : "Corporate Work Email *"}</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="name@company.com"
                  className="w-full bg-brand-blue border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-blue font-bold py-3.5 rounded text-xs uppercase tracking-wider cursor-pointer"
                >
                  {isRtl ? "تأكيد وفتح مستندات التحميل" : "Verify Information & Unlock Downloads"}
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between font-mono text-[9px] text-gray-500 pt-4 border-t border-brand-gold/10">
              <span className="flex items-center"><ShieldEllipsis className="h-3 w-3 mr-1" /> encrypted credentials handler</span>
              <span>ALRAYAN VETTED DATA PORTAL</span>
            </div>
          </div>
        </section>
      ) : (
        /* Unlocked Downloads Interface */
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="bg-emerald-950/20 border border-emerald-500/25 p-6 rounded-lg max-w-2xl mx-auto flex items-center space-x-4 text-xs">
            <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0 mr-1.5" />
            <div>
              <h4 className="text-emerald-400 font-bold font-sans">{isRtl ? "تحقق ناجح! تم فتح المستندات بنجاح" : "Identity Succeeded! Transfer Portal Active"}</h4>
              <p className="text-gray-300 font-sans mt-0.5">{isRtl ? `مرحباً بك مهندس / ${formData.name}. الكتالوجات والملفات الفنية جاهزة للتحميل الفوري الحصري.` : `Welcome ${formData.name} (${formData.company}). You have unlocked exclusive direct corporate manual links.`}</p>
            </div>
          </div>

          {/* Grid of assets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {DOWNLOADABLE_ASSETS.map((asset) => (
              <div 
                key={asset.id}
                className="bg-brand-navy border border-brand-gold/15 p-6 rounded-lg flex flex-col justify-between group hover:border-brand-gold/45 transition-colors relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-brand-gold/10 pb-3">
                    <span className="text-[10px] font-mono text-brand-gold/60 uppercase">PDF BOOKLET COMPLIANT</span>
                    <span className="text-[10px] font-mono text-gray-500">{asset.fileSize}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors">
                      {isRtl ? asset.titleAr : asset.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans">
                      {isRtl ? asset.descriptionAr : asset.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-gold/5 mt-6 flex justify-end">
                  <button 
                    onClick={() => handleDownload(asset.filename)}
                    className="bg-brand-blue border border-brand-gold/30 hover:bg-brand-gold text-brand-gold hover:text-brand-blue px-4 py-2 rounded text-xs font-mono tracking-widest uppercase flex items-center space-x-2 cursor-pointer transition-all"
                  >
                    <Download className="h-3.5 w-3.5 mr-1.5" />
                    <span>{isRtl ? "تحميل الملف" : "Download PDF"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <button 
              onClick={() => setIsUnlocked(false)}
              className="text-xs text-gray-500 hover:text-brand-gold underline font-mono"
            >
              {isRtl ? "إعادة قفل الاستمارة وتطهير الجلسة" : "Relock data session / Reset verified credentials"}
            </button>
          </div>

        </section>
      )}

    </div>
  );
}
