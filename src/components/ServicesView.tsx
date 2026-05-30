/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SERVICES, TRANSLATIONS } from '../data';
import { ServiceDetail, Language } from '../types';
import { ArrowLeft, ArrowRight, Layers, FileSpreadsheet, ShieldCheck, CheckCircle, Factory, Database, Compass, Hammer, Briefcase } from 'lucide-react';

interface ServicesViewProps {
  lang: Language;
  setActivePage: (page: string) => void;
}

export default function ServicesView({ lang, setActivePage }: ServicesViewProps) {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  // Listen to hash changes in case a direct service deep link is clicked
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#services/')) {
        const sId = hash.split('/')[1];
        const srv = SERVICES.find(s => s.id === sId);
        if (srv) {
          setSelectedService(srv);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (hash === '#services') {
        setSelectedService(null);
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectService = (srv: ServiceDetail) => {
    window.location.hash = `services/${srv.id}`;
    setSelectedService(srv);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToOverview = () => {
    window.location.hash = 'services';
    setSelectedService(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerQuote = () => {
    window.location.hash = 'contact';
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceIconMap: Record<string, any> = {
    'ready-mix': Factory,
    'cement-blocks': Database,
    'logistics-fleet': Compass,
    'supply-installation': Hammer,
    'general-contracting': Briefcase,
  };

  // 1. AN INDIVIDUAL SERVICE SUBPAGE VIEW
  if (selectedService) {
    const IconComp = serviceIconMap[selectedService.id] || Factory;
    return (
      <div className="py-12 pb-20 space-y-16 animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
        
        {/* Breadcrumb / Back Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={handleBackToOverview}
            className="flex items-center space-x-2 text-xs font-mono text-brand-gold hover:text-brand-gold-light border border-brand-gold/20 px-4 py-2 bg-brand-navy rounded cursor-pointer transition-all"
          >
            <ArrowLeft className={`h-4 w-4 ${isRtl ? 'rotate-180 ml-2' : ''}`} />
            <span>{isRtl ? "مراجعة كافة الخدمات" : "Back to Integrated Solutions"}</span>
          </button>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy border border-brand-gold/15 p-8 sm:p-12 rounded-xl relative overflow-hidden blueprint-grid">
            <div className="absolute top-4 right-4 text-[100px] font-bold text-white/2 font-mono pointer-events-none select-none">
              CM
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-3 gap-10 items-center">
              
              <div className="lg:col-span-2 space-y-5">
                <div className="bg-brand-blue border border-brand-gold/20 p-2.5 text-brand-gold rounded-lg w-fit">
                  <IconComp className="h-7 w-7" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {isRtl ? selectedService.titleAr : selectedService.title}
                </h1>
                <p className="text-brand-gold-light text-sm sm:text-base font-mono">
                  {isRtl ? selectedService.subtitleAr : selectedService.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                  {isRtl ? selectedService.heroTextAr : selectedService.heroText}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={triggerQuote}
                    className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-bold px-6 py-3 rounded text-xs uppercase cursor-pointer"
                  >
                    {isRtl ? `طلب إمداد بالتوريد` : `Request Structural Supply`}
                  </button>
                  <button 
                    onClick={handleBackToOverview}
                    className="border border-brand-gold/30 hover:border-brand-gold text-white hover:text-brand-gold px-6 py-3 rounded text-xs font-mono transition-all cursor-pointer"
                  >
                    {isRtl ? "استكشاف قدرات التوريد الأخرى" : "View Other Portfolios"}
                  </button>
                </div>
              </div>

              {/* Infographic Specs Side */}
              <div className="space-y-4 border border-brand-gold/10 bg-brand-blue/65 p-6 rounded-lg font-mono text-xs">
                <h3 className="text-brand-gold font-bold uppercase tracking-wider border-b border-brand-gold/10 pb-2">
                  {isRtl ? "بيانات فنية معتمدة" : "VETTING METRICS"}
                </h3>
                {selectedService.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <span className="text-[10px] text-gray-500 uppercase block">{isRtl ? stat.labelAr : stat.label}</span>
                    <span className="text-sm font-bold text-white block">{isRtl ? stat.valueAr : stat.value}</span>
                  </div>
                ))}
                <div className="pt-4 border-t border-brand-gold/10 text-[10px] text-gray-400 font-sans leading-relaxed">
                  {isRtl 
                    ? "* كافة موازين المحطات والوحدات تتم معايرتها هندسياً ومطابقتها لدليل الفحص الفني المصري."
                    : "* Mechanical setups and weight systems calibrated periodically conforming to the Egyptian Building Research Center."
                  }
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Content Blocks & Best For specifications */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Technical block columns */}
            <div className="lg:col-span-2 space-y-10">
              {selectedService.contentBlocks.map((block, bIdx) => (
                <div key={bIdx} className="space-y-4">
                  <h3 className="text-lg font-bold text-white tracking-wide border-b border-brand-gold/25 pb-2 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2" />
                    <span>{isRtl ? block.titleAr : block.title}</span>
                  </h3>
                  
                  <ul className="space-y-3">
                    {block.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                        <CheckCircle className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                        <span>{isRtl ? block.pointsAr[pIdx] : pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Best Match Column Card */}
            <div className="bg-brand-navy border border-brand-gold/15 p-8 rounded-lg space-y-6 h-fit relative">
              <div className="absolute inset-x-0 top-0 h-1 bg-brand-gold" />
              
              <div className="space-y-2">
                <FileSpreadsheet className="h-6 w-6 text-brand-gold" />
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-mono">
                  {isRtl ? "الاستخدامات المطابقة هندسياً" : "Best System Applications"}
                </h3>
                <p className="text-[11px] text-gray-500">
                  {isRtl 
                    ? "تم تطوير واعتماد المخرجات لهذا القطاع ليناسب بشكل مثالي هذه البيئات التشغيلية:"
                    : "Optimized operational tolerances designed to satisfy client specifications in the following targets:"
                  }
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {(isRtl ? selectedService.bestForAr : selectedService.bestFor).map((match, mIdx) => (
                  <div key={mIdx} className="flex items-center space-x-2.5 text-xs text-gray-300 border-b border-brand-gold/5 pb-2 last:border-0">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0" />
                    <span className="font-sans">{match}</span>
                  </div>
                ))}
              </div>

              <div className="border border-brand-gold/10 p-4 rounded bg-brand-blue/50 text-[11px] text-gray-400 flex items-start space-x-2">
                <ShieldCheck className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  {isRtl 
                    ? "معايير السلامة ومطابقة الأبعاد حاصلة على تقييم امتياز وبلا حوادث في كبرى مشروعاتنا بالساحل الشمالي."
                    : "Zero technical incidents and 100% aggregate density approvals across all coastal luxury resorts."
                  }
                </span>
              </div>
            </div>

          </div>
        </section>

      </div>
    );
  }

  // 2. MAIN SERVICES OVERVIEW LIST
  return (
    <div className="py-12 pb-20 space-y-16 animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-4xl mx-auto px-4">
        <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase">
          {t.navServices}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {isRtl ? "منظومة حلول إنشائية متكاملة" : "Integrated Construction Solutions"}
        </h1>
        <p className="text-xs text-gray-400 font-mono tracking-wider uppercase max-w-3xl mx-auto">
          {isRtl 
            ? "التحكم الشامل في سلاسل الإمداد يحل معوقات ومخاطر تأخيرات التشييد بمصر" 
            : "Controlling the entire volume loop guarantees zero delay delivery for major developments"
          }
        </p>
        <div className="w-16 h-1 bg-brand-gold mx-auto rounded" />
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => {
            const IconComp = serviceIconMap[srv.id] || Factory;
            return (
              <div 
                key={srv.id}
                onClick={() => handleSelectService(srv)}
                className="bg-brand-navy border border-brand-gold/15 rounded-lg overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-brand-gold/45 transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Visual Line Decorator */}
                <div className="h-1.5 bg-gradient-to-r from-brand-gold to-brand-gold-light opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <div className="p-8 space-y-4 flex-1">
                  <div className="bg-brand-blue border border-brand-gold/15 text-brand-gold p-3 rounded w-fit group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-wide group-hover:text-brand-gold transition-colors">
                    {isRtl ? srv.titleAr : srv.title}
                  </h3>
                  <p className="text-brand-gold-light/80 text-[10px] font-mono tracking-wider uppercase">
                    {isRtl ? srv.stats[1].valueAr : srv.stats[1].value} &bull; {isRtl ? srv.stats[0].valueAr : srv.stats[0].value}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    {isRtl ? srv.subtitleAr : srv.subtitle}
                  </p>
                </div>

                <div className="p-6 border-t border-brand-gold/10 bg-black/20 flex items-center justify-between text-xs font-mono text-brand-gold group-hover:text-brand-gold-light">
                  <span>{isRtl ? "عرض المواصفات والتحكم الحراري" : "Explore Technical Spec Sheet"}</span>
                  <ArrowRight className={`h-3 w-3 ${isRtl ? 'rotate-180' : ''} transition-transform group-hover:translate-x-1`} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Splicer/B2B Statement Summary */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-brand-navy border border-brand-gold/20 p-8 rounded-lg relative overflow-hidden text-center">
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed max-w-2xl mx-auto">
            {isRtl 
              ? "نعمل كمنظومة مترابطة تدعم المقاولين والاستشاريين بفتح خطوط توريد مستمر صيفاً وشتاءً دون انقطاع. احصل على عينات اختبارية فورية ومطابقة معملية مجانية لمشروعك."
              : "We operate as a synchronized structure supporting B2B developers with uninterrupted flows. Request preliminary trial mixes and aggregate samples for laboratory validation."
            }
          </p>
          <div className="pt-6">
            <button 
              onClick={triggerQuote}
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-bold px-8 py-3 rounded text-xs uppercase cursor-pointer"
            >
              {isRtl ? "طلب المعاينة الفنية المجانية" : "Submit Technical Vetting Request"}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
