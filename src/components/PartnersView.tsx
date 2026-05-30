/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CLIENT_LOGOS, TRANSLATIONS } from '../data';
import { Handshake, ChevronRight, Check } from 'lucide-react';
import { Language } from '../types';

interface PartnersViewProps {
  lang: Language;
}

export default function PartnersView({ lang }: PartnersViewProps) {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  return (
    <div className="py-12 pb-20 space-y-24 animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-4xl mx-auto px-4">
        <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase">
          {t.navPartners}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {isRtl ? "شراكات راسخة ومصداقية سوقية" : "Market Trust & Strategic Alliances"}
        </h1>
        <p className="text-xs text-gray-400 font-mono tracking-wider uppercase max-w-3xl mx-auto">
          {isRtl 
            ? "نترجم ثقة المقاول الميداني والاستشاري والكيان الحكومي إلى بناء متقن ومطابق للكود" 
            : "Direct physical endorsements from Egypt's tier-one builders, master planners and authorities"
          }
        </p>
        <div className="w-16 h-1 bg-brand-gold mx-auto rounded" />
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy border border-brand-gold/15 p-8 sm:p-12 rounded-xl relative overflow-hidden blueprint-grid">
          
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-brand-gold">
                <Handshake className="h-6 w-6 text-brand-gold" />
                <span className="text-xs font-bold font-mono uppercase tracking-widest">{isRtl ? "فلسفة التعاون الإستراتيجي" : "PARTNERSHIP PHILOSOPHY"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {isRtl ? "عصب وشريان شراكاتنا الإنشائية" : "The Bedrock of Our Partnerships"}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {isRtl 
                  ? "لا نتعامل في الريان جروب كبائع ومورد خامل يلقي بضاعته ويرحل. بل نندمج في صلب الهيكل القيادي للمشروع، فننسق مع طاقم الصب والاستشاريين ونضبط كرات التدفق حتى انتهاء مراحل كسر الضغط بسلامة مطلقة."
                  : "We do not represent a passive materials trader dropping shipments at a compound bypass. We merge our logistical timelines directly into our client's scaffold scheduling, managing batch heat and truck arrival intervals proactively."
                }
              </p>
              
              <ul className="space-y-3 font-mono text-xs">
                <li className="flex items-center space-x-2.5">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>{isRtl ? "جدولة فورية على مدار 24 ساعة للصب الليلي." : "24/7 technical batch shifts configured for mass night pours."}</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>{isRtl ? "مرافقة هندسية ميدانية من مشرفي جودة الخرسانة." : "On-site quality engineers tracking slump values live."}</span>
                </li>
              </ul>
            </div>

            {/* Quote block representing commitment */}
            <div className="bg-brand-blue/70 p-8 rounded-lg border border-brand-gold/10 space-y-4">
              <span className="text-[10px] text-brand-gold font-mono uppercase tracking-wider block">STATEMENT OF INTEGRITY</span>
              <p className="text-xs text-gray-300 italic leading-relaxed">
                {isRtl 
                  ? "\"نحن نتحمل الفشل قبل النجاح؛ سلاسل إمدادنا هي عصب أبراج الساحل ومزارين والضبعة، ونعمل لإلغاء أي تأخير يتسبب في اهتزاز موعد التسليم للمطور العقاري الكبار.\""
                  : "\"Our primary target is to make sure our clients' project deadlines are treated as sacred. By combining concrete production, blocks, pumps, transport, and contracting, we guarantee certainty.\""
                }
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-gray-400 border-t border-brand-gold/5">
                <span>ALRAYAN PROCUREMENT DIVISION</span>
                <span className="text-brand-gold">B2B SOLID PARTNERS</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Logo/Grids Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Master Developers */}
        <div className="space-y-6">
          <div className="border-b border-brand-gold/15 pb-2">
            <h3 className="text-xs text-brand-gold font-mono tracking-widest uppercase">
              {isRtl ? "المطورون العقاريون الكبار" : "Trusted by Master Developers"}
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CLIENT_LOGOS.developers.map((dev, idx) => (
              <div 
                key={idx}
                className="bg-brand-navy border border-brand-gold/10 hover:border-brand-gold/30 p-6 rounded-lg text-center font-sans font-semibold text-xs text-gray-300 hover:text-white transition-all duration-300 cursor-default"
              >
                {isRtl ? dev.nameAr : dev.name}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Tier-One Contractors */}
        <div className="space-y-6">
          <div className="border-b border-brand-gold/15 pb-2">
            <h3 className="text-xs text-brand-gold font-mono tracking-widest uppercase">
              {isRtl ? "مقاولو ومحاور التشييد الفئة الأولى" : "Contracting & Tier-One Builders"}
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CLIENT_LOGOS.contractors.map((cont, idx) => (
              <div 
                key={idx}
                className="bg-brand-navy border border-brand-gold/10 hover:border-brand-gold/30 p-6 rounded-lg text-center font-sans font-semibold text-xs text-gray-300 hover:text-white transition-all duration-300 cursor-default"
              >
                {isRtl ? cont.nameAr : cont.name}
              </div>
            ))}
          </div>
        </div>

        {/* 3. Engineering Consultants */}
        <div className="space-y-6">
          <div className="border-b border-brand-gold/15 pb-2">
            <h3 className="text-xs text-brand-gold font-mono tracking-widest uppercase">
              {isRtl ? "مكاتب الاستشارات ومختبرات الفحص الهندسي" : "Elite Engineering Consultants"}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CLIENT_LOGOS.consultants.map((cons, idx) => (
              <div 
                key={idx}
                className="bg-brand-navy border border-brand-gold/10 hover:border-brand-gold/30 p-6 rounded-lg text-center font-sans font-semibold text-xs text-gray-300 hover:text-white transition-all duration-300 cursor-default flex items-center justify-center space-x-3"
              >
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0" />
                <span>{isRtl ? cons.nameAr : cons.name}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}
