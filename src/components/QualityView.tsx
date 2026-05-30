/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TESTING_MATRIX, TRANSLATIONS } from '../data';
import { TestingMatrixItem, Language } from '../types';
import { ShieldCheck, Award, FileSpreadsheet, FlaskConical, CheckCircle, Search } from 'lucide-react';

interface QualityViewProps {
  lang: Language;
}

export default function QualityView({ lang }: QualityViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const badges = [
    {
      title: "NRMCA Approved Guidelines",
      titleAr: "شهادة ومواصفات NRMCA الدولية",
      desc: "Fully aligned with National Ready Mixed Concrete Association manufacturing and testing procedures.",
      descAr: "مطابقة نظام الخلط والتشغيل لمعايير ومواصفات الجمعية الوطنية الأمريكية للخرسانة الجاهزة."
    },
    {
      title: "AMS Validated Systems",
      titleAr: "اعتماد الهيئة المصرية لمواصفات الجودة",
      desc: "Rigorous testing and verification procedures fully monitored under state and AMS validated protocols.",
      descAr: "اعتماد ومراقبة لآليات سحب العينات واختبارات كسر الضغط المتوافقة مع الكود المصري للمواد."
    },
    {
      title: "Active Compliance thru Aug 2026",
      titleAr: "صلاحية فنية معتمدة حتى أغسطس 2026",
      desc: "All physical batch audits, scale calibrations, and laboratory credentials certified and active through August 2026.",
      descAr: "مستندات الترخيص التشغيلي وتأكيد ومعايرة الموازين سارية وفعالة بالكامل حتى أغسطس 2026."
    }
  ];

  const filteredMatrix = TESTING_MATRIX.filter((item) => {
    const text = (isRtl ? item.parameterAr + item.standardAr : item.parameter + item.standard).toLowerCase();
    return text.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="py-12 pb-20 space-y-24 animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* 1. Page Header */}
      <section className="text-center space-y-4 max-w-4xl mx-auto px-4">
        <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase">
          {t.navQuality}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {isRtl ? "علم اليقين والتحكم الهندسي" : "The Science of Certainty"}
        </h1>
        <p className="text-xs text-gray-400 font-mono tracking-wider uppercase max-w-3xl mx-auto">
          {isRtl 
            ? "نحن لا نترك شيئاً للصدفة؛ جودة كل مليمتر صب خرساني تخضع لأشد المعايير المخبرية" 
            : "Precision controls ensuring structural integrity has zero capacity for error"
          }
        </p>
        <div className="w-16 h-1 bg-brand-gold mx-auto rounded" />
      </section>

      {/* 2. Quality Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy border border-brand-gold/15 p-8 sm:p-12 rounded-xl relative overflow-hidden blueprint-grid">
          
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-6">
              <div className="flex items-center space-x-2.5 text-brand-gold">
                <FlaskConical className="h-6 w-6" />
                <span className="text-xs font-bold font-mono uppercase tracking-widest">{isRtl ? "عقيدة ومبدأ الجودة" : "GUIDING CONTEXT"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {isRtl ? "الدقة الهندسية تحكم كل صبة خرسانية" : "Scale Without Precision is Meaningless"}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {isRtl 
                  ? "ندرك في الريان جروب أن الأبراج الساحلية والمنشآت النووية في العلمين والضبعة لا تحتمل مجرد تخمين. لذلك، نتبع فلسفة مراقبة صارمة تبدأ من جيولوجيا المحاجر والرمال وتمر بغسل السن ومعايرة أوزان الإسمنت، دعماً بصب فوري مسجل ومفحوص حركياً."
                  : "We believe strength isn't just about output volume but continuous physical validation. From sizing and checking aggregates to monitoring water ratios and checking hydration heat on computer SCADA consoles, our QA/QC supervisors verify parameters without compromise."
                }
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center text-xs text-brand-gold font-mono border border-brand-gold/15 px-3 py-1.5 rounded bg-brand-blue">
                  {isRtl ? "مراجعة واعتمادات رسمية مع جامعة الإسكندرية" : "Validated in Cooperation with Alexandria University Faculty of Engineering"}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-brand-gold/10 p-5 rounded hover:border-brand-gold/35 bg-brand-blue/40 transition-all space-y-2">
                <h4 className="text-xs font-bold text-white font-mono uppercase">{isRtl ? "مقاومة ضغط كسر المكعبات" : "Compressive Strength Crushing"}</h4>
                <p className="text-xs text-gray-400">{isRtl ? "أخذ عينات من كرات قمع الهبوط ونقاط الصب لكسر المكعبات بعد 7 و28 يوماً لمطابقة مخطط الإجهاد." : "Regular cylinder molds squeezed under computer calibration ensuring design tolerances match the exact requested MPa limits."}</p>
              </div>
              <div className="border border-brand-gold/10 p-5 rounded hover:border-brand-gold/35 bg-brand-blue/40 transition-all space-y-2">
                <h4 className="text-xs font-bold text-white font-mono uppercase">{isRtl ? "الفحوصات الهيدروجينية والكيماوية" : "Chemical Purity Assays"}</h4>
                <p className="text-xs text-gray-400">{isRtl ? "التحقق من خلو الخرسانات والمياه والمواد من أي كلوريدات أو كبريتات مسببة لتآكل حديد التسليح." : "Dynamic checking of sulfate and chloride counts in aggregate quarries protecting reinforcing rebar elements from internal rust."}</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Certifications & Validation Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {isRtl ? "التراخيص والاعتمادات السارية" : "Vetted Corporate Certifications"}
          </h2>
          <p className="text-xs text-gray-400">
            {isRtl 
              ? "مستندات التقييس والجودة والتشريعات الهندسية معتمدة وسارية بالكامل:" 
              : "State and international credentials active for current mega contracts specifications:"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, idx) => (
            <div 
              key={idx}
              className="bg-brand-navy border border-brand-gold/15 p-8 rounded-lg relative overflow-hidden group hover:border-brand-gold/45 transition-all text-center"
            >
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold mx-auto mb-4 group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase font-mono mb-2">
                {isRtl ? badge.titleAr : badge.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                {isRtl ? badge.descAr : badge.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Interactive Testing Matrix Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div className="space-y-2">
            <span className="text-xs text-brand-gold font-mono tracking-widest uppercase block">
              {isRtl ? "جدول الاختبارات المعملية" : "DAILY QUALITY TESTING CONTROL MATRIX"}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {isRtl ? "المحدّدات والبروتوكولات المعياريّة" : "Standardized Sieve & Compression Parameters"}
            </h2>
          </div>

          {/* Table Search Input */}
          <div className="relative w-full md:w-80">
            <input 
              type="text"
              placeholder={isRtl ? "ابحث عن الفحص أو الكود..." : "Search tests or ASTM specs..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-brand-navy border border-brand-gold/25 rounded px-4 py-2.5 pl-10 text-xs text-white focus:outline-none focus:border-brand-gold"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-brand-gold/60" />
          </div>
        </div>

        {/* Real Bilingual testing matrix table */}
        <div className="border border-brand-gold/15 rounded-lg overflow-hidden bg-brand-navy/60 backdrop-blur shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#071324] text-brand-gold-light border-b border-brand-gold/10 font-mono text-[10px] uppercase tracking-wider">
                <tr>
                  <th className="p-4">{isRtl ? "الفحص / المعادل الفني" : "Testing Parameter"}</th>
                  <th className="p-4">{isRtl ? "الكود القياسي العلمي" : "Standard Specification"}</th>
                  <th className="p-4">{isRtl ? "معدل دورة تكرار الفحص" : "Test Frequency"}</th>
                  <th className="p-4">{isRtl ? "المختبر المسؤول" : "Execution / Lab Location"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-gold/5 font-sans">
                {filteredMatrix.length > 0 ? (
                  filteredMatrix.map((item, index) => (
                    <tr key={index} className="hover:bg-brand-blue/35 transition-colors">
                      <td className="p-4 font-semibold text-white">
                        {isRtl ? item.parameterAr : item.parameter}
                      </td>
                      <td className="p-4 text-brand-gold">
                        {isRtl ? item.standardAr : item.standard}
                      </td>
                      <td className="p-4 text-gray-300 font-mono text-[11px]">
                        {isRtl ? item.frequencyAr : item.frequency}
                      </td>
                      <td className="p-4 text-gray-400">
                        {isRtl ? item.locationAr : item.location}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-gray-500 font-mono">
                      {isRtl ? "لم يتم العثور على فحوصات مطابقة للبحث." : "No matching test protocols found."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verification citation panel */}
        <div className="mt-6 border border-brand-gold/15 p-5 rounded-lg bg-brand-navy/40 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-400 gap-4">
          <span className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-brand-gold shrink-0 mr-1.5" />
            <span>{isRtl ? "* كافة الفحوصات الخارجية والتحليلات الكيماوية مصدقة رسمياً من معامل الهندسة بجامعة الإسكندريّة." : "* Off-site validation and cement analysis independently audited by Alexandria University Engineering Center."}</span>
          </span>
          <span className="text-brand-gold shrink-0">REGISTRATION COMPLIANCE: ECP-203</span>
        </div>

      </section>

    </div>
  );
}
