/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TECHNICAL_EQUIPMENT, TRANSLATIONS } from '../data';
import { ThermometerSun, ShieldAlert, Cpu, Truck, Check, AlertTriangle, Fan } from 'lucide-react';
import { Language } from '../types';

interface CapabilitiesProps {
  lang: Language;
}

export default function CapabilitiesView({ lang }: CapabilitiesProps) {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const statsCap = [
    { label: "Ready-Mix Batch Stations", labelAr: "محطات صب وخلط خرساني مركزية", value: "3 Stations", valueAr: "3 محطات إستراتيجية" },
    { label: "Cement Block Manufacturing Hubs", labelAr: "مصانع ومخازن البلوك الإسمنتي", value: "3 Hubs", valueAr: "3 مصانع ومستودعات" },
    { label: "High-Capacity Storage Silos", labelAr: "صوامع تخزين الإسمنت الدائم", value: "6 Silos", valueAr: "6 صوامع ضخمة" },
    { label: "Single Unit Throughput", labelAr: "معدل التدفق والتجهيز لكل ساعة", value: "120 m³/hr", valueAr: "120 م³ / ساعة وحدة" },
    { label: "Mercedes Smart Mixers", labelAr: "خلاطات مرسيدس النفاذة", value: "24 Trucks", valueAr: "24 شاحنة خلاطة" },
    { label: "Putzmeister mobile/boom pumps", labelAr: "مضخات صب أذرع عملاقة", value: "6 Pumps", valueAr: "6 مضخات صب" },
    { label: "Caterpillar Backup Generators", labelAr: "مولدات كهربائية طوارئ كاتربيلر", value: "Fully Fitted", valueAr: "مجهزة بالكامل للطوارئ" }
  ];

  return (
    <div className="py-12 pb-20 space-y-24 animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-4xl mx-auto px-4">
        <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase">
          {t.navCapabilities}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {isRtl ? "القوة والمعدات اللوجستية" : "Operational Power & Fleet Capacity"}
        </h1>
        <p className="text-xs text-gray-400 font-mono tracking-wider uppercase max-w-2xl mx-auto">
          {isRtl 
            ? "نمتلك أحدث التروس والمعدات الصناعية المجهزة لتنفيذ أضخم أحجام الصب بالجمهورية" 
            : "Heavy-duty machinery setup to sustain non-stop high pressure delivery cycles"
          }
        </p>
        <div className="w-16 h-1 bg-brand-gold mx-auto rounded" />
      </section>

      {/* 1. Operational Capacity Highlight Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
            {isRtl ? "القدرات اللوجستية والإنتاجية" : "Consolidated Machine Power"}
          </h2>
          <p className="text-xs text-gray-400 font-sans">
            {isRtl 
              ? "مؤشرات تعكس السقف الإنتاجي المعتمد للريان جروب واستقرار إمدادات المواد دون انقطاع:" 
              : "Numerical indices showing Alrayan absolute volume limit for heavy B2B concrete requirements:"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCap.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-brand-navy border border-brand-gold/15 p-6 rounded relative overflow-hidden group hover:border-brand-gold/40 transition-all"
            >
              <div className="relative z-10 space-y-2">
                <span className="text-xs text-gray-500 font-mono block uppercase">{isRtl ? stat.labelAr : stat.label}</span>
                <span className="text-xl sm:text-2xl font-mono font-bold text-brand-gold tracking-tight block">
                  {isRtl ? stat.valueAr : stat.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Advanced Temperature & Thermal Control Systems */}
      <section className="bg-brand-navy py-20 border-y border-brand-gold/10 relative blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative border border-brand-gold/15 p-2 rounded bg-black/50">
              <div className="absolute top-6 left-6 bg-brand-blue/90 border border-brand-gold/25 p-3 rounded font-mono text-[10px] text-brand-gold flex items-center space-x-2">
                <ThermometerSun className="h-4 w-4 animate-pulse" />
                <span>ACTIVE THERMAL MITIGATION</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
                alt="High accuracy concrete batch thermal units"
                className="w-full h-auto rounded grayscale brightness-95 opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-brand-gold">
                <Fan className="h-6 w-6 animate-spin-slow text-brand-gold" />
                <span className="text-xs font-semibold font-mono tracking-widest uppercase">
                  {isRtl ? "نظام التبريد الفائق والتحكم الحراري" : "CLIMATE THERMAL CONTROL"}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {isRtl ? "تكنولوجيا الصب في درجات الحرارة المرتفعة" : "Combating Hot Climate Slump Challenges"}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {isRtl 
                  ? "تتعرض خرسانات الساحل والمشاريع الصحراوية بمصر إلى بخر سريع للخلطة وتشقق الهيكل الإنشائي نتيجة صيفنا الحار. للتغلب على ذلك، ندمج بالمحطات أنظمة تبريد ذكية تعتمد على رقائق الثلج وحقن النيتروجين السائل لتبديد حرارة الخلط فورياً."
                  : "Desert and coastal developments in Egypt experience rapid water evaporation, affecting cement hydration. Alrayan Group manages concrete heat by incorporating on-site chilled water dosing and specialized nitrogen-injection blocks."
                }
              </p>

              <div className="space-y-4 pt-2 font-mono text-xs">
                <div className="flex items-start space-x-2.5">
                  <Check className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">{isRtl ? "حقن المواد وتثبيط الجفاف" : "Retarded Hydration Setup"}</span>
                    <span className="text-gray-400 text-[11px] block">{isRtl ? "إضافة تركيبات كيميائية معتمدة لتمديد زمن الشك الابتدائي ومنع التصلب المبكر." : "Using certified retarders to prolong concrete workability window."}</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">{isRtl ? "محطة إنتاج الثلج المتكاملة" : "On-Site Automated Flake Ice Plants"}</span>
                    <span className="text-gray-400 text-[11px] block">{isRtl ? "كبس وتوزيع رقائق الجليد المغسول مباشرة بخلاط سيكوما لقياس السخونة الفورية." : "Dosing mixing water with shaved ice maintaining output below 30°C."}</span>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-brand-gold bg-brand-blue/70 p-4 rounded text-xs text-brand-gold-light font-mono flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 shrink-0" />
                <span>
                  {isRtl 
                    ? "ملتزمون بكافة لوائح الكود المصري وأرقى المواصفات الإنشائية للمشاريع الحساسة."
                    : "Calibrated to prevent volumetric shrinkage cracks in concrete structural segments."
                  }
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Detailed Equipment Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <span className="text-xs text-brand-gold font-mono tracking-widest uppercase">
            {isRtl ? "مكونات أسطول الخدمة والصب" : "ENGINEERING SPEC SHEET"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {isRtl ? "تفاصيل ومواصفات الأسطول" : "Mechanical Equipment & Transit Fleet"}
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECHNICAL_EQUIPMENT.map((eq, sIdx) => (
            <div 
              key={sIdx}
              className="bg-brand-navy border border-brand-gold/15 hover:border-brand-gold/40 p-8 rounded-lg relative overflow-hidden group transition-all"
            >
              <div className="absolute top-4 right-4 bg-brand-gold/10 border border-brand-gold/25 px-2.5 py-1 rounded font-mono text-[10px] text-brand-gold">
                {isRtl ? eq.countAr : eq.count}
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-base font-semibold text-white group-hover:text-brand-gold transition-colors">
                  {isRtl ? eq.categoryAr : eq.category}
                </h3>
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-500 font-mono uppercase block">{isRtl ? "الماركات والمصانع المعتمدة" : "VENDED MANUFACTURERS"}</span>
                  <span className="text-xs text-brand-gold-light font-mono block">{isRtl ? eq.brandsAr : eq.brands}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-500 font-mono uppercase block">{isRtl ? "المواصفات الفنية الميكانيكية" : "MECHANICAL SPECIFICATION"}</span>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">{isRtl ? eq.specsAr : eq.specs}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
