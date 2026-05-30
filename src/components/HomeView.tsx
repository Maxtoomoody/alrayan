/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { KEY_STATS, INTEGRATED_ECOSYSTEM, VALUE_PILLARS, SECTORS, CLIENT_LOGOS, TRANSLATIONS } from '../data';
import { ArrowRight, CheckCircle2, Factory, Database, Compass, ShieldAlert, Layers, ArrowLeftRight } from 'lucide-react';
import { Language } from '../types';

interface HomeViewProps {
  lang: Language;
  setActivePage: (page: string) => void;
}

export default function HomeView({ lang, setActivePage }: HomeViewProps) {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const navigateTo = (page: string) => {
    window.location.hash = page;
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-20 animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* 1. HERO SECTION WITH CINEMATIC BLUEPRINT DESIGN */}
      <section className="relative min-h-[85vh] flex items-center bg-brand-blue border-b border-brand-gold/20 overflow-hidden blueprint-grid-gold pt-12">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] to-transparent pointer-events-none z-10" />
        
        {/* Background Image/Visual placeholder representing abstract heavy machinery */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-30 lg:opacity-50 h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200" 
            alt="Heavy Cement Silos and Mixers" 
            className="w-full h-full object-cover grayscale opacity-90 contrast-125"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-20 flex flex-col justify-center h-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Arabic Slogan Pill */}
            <div className="inline-flex items-center space-x-2 border border-brand-gold/40 bg-brand-navy/80 px-4 py-1.5 rounded-full text-brand-gold font-mono text-xs shadow-lg">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
              <span>{t.sloganArabic}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight leading-tight">
              {isRtl ? (
                <>
                  بناء يقين <span className="text-brand-gold italic">مستدام</span> <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light">
                    لكبرى المشروعات القومية
                  </span>
                </>
              ) : (
                <>
                  Building <span className="text-brand-gold italic">Certainty</span> for <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light">
                    High-Stakes Mega-Projects
                  </span>
                </>
              )}
            </h1>

            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-sans font-light">
              {t.subSlogan}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => navigateTo('contact')}
                className="w-full sm:w-auto bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-blue font-bold px-8 py-4 rounded-md shadow-lg hover:shadow-brand-gold/15 transition-all text-xs tracking-wider uppercase cursor-pointer"
              >
                {t.ctaQuote}
              </button>
              <button
                onClick={() => navigateTo('capabilities')}
                className="w-full sm:w-auto bg-brand-navy border border-brand-gold/35 text-white hover:text-brand-gold px-8 py-4 rounded-md transition-all text-xs font-mono tracking-wider cursor-pointer"
              >
                {t.ctaExplore}
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. KEY STATS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase">
            {t.keyNumbersTitle}
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white">{t.keyNumbersText}</p>
          <div className="w-12 h-1 bg-brand-gold mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-brand-navy border border-brand-gold/15 rounded-lg p-8 relative overflow-hidden group hover:border-brand-gold/45 transition-all duration-300"
            >
              {/* background decorative asset */}
              <div className="absolute right-0 bottom-0 text-[180px] font-bold text-white/2 pointer-events-none select-none font-mono translate-y-20 translate-x-10 leading-none">
                {stat.number}
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl sm:text-5xl font-mono font-bold text-brand-gold tracking-tight">{stat.number}</span>
                  {stat.unit && <span className="text-xs text-brand-gold-light font-mono pr-1">{stat.unit}</span>}
                </div>
                <h3 className="text-sm font-semibold text-white tracking-wide">
                  {isRtl ? stat.labelAr : stat.label}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  {isRtl ? stat.descAr : stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTEGRATED SUPPLY ECOSYSTEM (360° DIAGRAM MODULE) */}
      <section className="bg-brand-navy py-20 border-y border-brand-gold/10 relative blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase">
              {isRtl ? "سلاسل إمداد مترابطة" : "Integrated Supply Loop"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {isRtl ? "منظومة إمداد 360 درجة بلا تأخير" : "Integrated 360-degree supply model"}
            </h2>
            <p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {isRtl 
                ? "يقضي الريان جروب تماماً على التأخيرات التشغيلية المعتادة الناجمة عن تعدد الموردين والمقاولين الخارجيين عبر السيطرة التامة على كامل الخطوط التصنيعية." 
                : "Alrayan Group eliminates delays caused by fragmented supplier networks by offering one fully transparent, integrated operational loop."
              }
            </p>
            <div className="w-12 h-1 bg-brand-gold mx-auto rounded" />
          </div>

          {/* Interactive step list showing loop process */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {INTEGRATED_ECOSYSTEM.map((step) => (
              <div 
                key={step.step}
                className="border border-brand-gold/10 hover:border-brand-gold/45 bg-brand-blue/60 backdrop-blur rounded p-6 shadow-md transition-all duration-300 relative group"
              >
                <div className="absolute top-4 right-4 text-xs font-mono text-brand-gold/30 group-hover:text-brand-gold transition-colors font-bold">
                  {step.step}
                </div>
                <div className="space-y-3 pt-4">
                  <h3 className="text-sm font-semibold text-white tracking-wide border-b border-brand-gold/10 pb-1.5 group-hover:text-brand-gold transition-colors">
                    {isRtl ? step.titleAr : step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    {isRtl ? step.descAr : step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Splicing message box */}
          <div className="mt-12 bg-brand-blue/40 border border-brand-gold/15 p-6 rounded-lg max-w-3xl mx-auto text-center">
            <p className="text-xs sm:text-sm text-brand-gold-light italic">
              {isRtl 
                ? "\"لسنا مجرد موردين خامات، بل الذراع الإنتاجي والهندسي الذي يتحد لمسح ثغرات التوريد من المواقع الإنشائية الكبرى للمقاولين\""
                : "\"We are not just high-volume materials suppliers — we are your tactical execution partner managing capacity risk from start to completion.\""
              }
            </p>
          </div>

        </div>
      </section>

      {/* 4. WHY ALRAYAN GROUP VALUE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text panel */}
          <div className="space-y-6">
            <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase block">
              {t.whyUsTitle}
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              {t.whyUsSub}
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              {isRtl 
                ? "يتحرك الريان جروب ككيان تشغيلي مصنف من بين الأقوى بالساحل الشمالي وغرب الإسكندرية. نطبق أعلى درجات الصرامة الفنية لمجابهة المناخ الصعب وتحقيق الثبات الإنشائي المصدق."
                : "Alrayan Group operates with absolute technical discipline. We manage large-scale material flow securely, fulfilling concrete and block requirements along Egypt's coastal and desert projects."
              }
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{isRtl ? "عمل فاقد لنسب الخطأ" : "Zero-Delay Logistics Delivery"}</h4>
                  <p className="text-xs text-gray-400">{isRtl ? "أسطول مرسيدس MP4 يربط المحطة وبؤرة الصب بانتظام فوري." : "Coordinated dispatch ensures transit mixers arrive at site before standard limits."}</p>
                </div>
              </div>
              <div className="flex items-start space-x-35">
                <CheckCircle2 className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{isRtl ? "مواد معتمدة رسمياً" : "Vetted Materials Assurance"}</h4>
                  <p className="text-xs text-gray-400">{isRtl ? "نفحص كيميائياً وفنياً في معامل جامعة الإسكندرية ومختبر د. أشرف رجب." : "Our tests are audited by academic reference laboratories, satisfying local strict criteria."}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUE_PILLARS.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-brand-navy border border-brand-gold/10 hover:border-brand-gold/30 p-6 rounded transition-all group"
              >
                <div className="w-8 h-8 rounded bg-brand-gold/10 flex items-center justify-center mb-4 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
                  <Layers className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-white tracking-wide mb-2">
                  {isRtl ? pillar.titleAr : pillar.title}
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                  {isRtl ? pillar.descAr : pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SERVICES OVERVIEW GRID (LEADING TO SUBPAGES) */}
      <section className="bg-brand-navy py-20 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase block">
                {isRtl ? "حلول إنشائية متخصصة" : "Specialized Capabilities"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {isRtl ? "قدراتنا وخدماتنا الإنتاجية" : "Engineered Construction Solutions"}
              </h2>
            </div>
            <button 
              onClick={() => navigateTo('services')}
              className="text-xs text-brand-gold hover:text-brand-gold-light mt-4 sm:mt-0 font-mono flex items-center space-x-1 cursor-pointer"
            >
              <span>{isRtl ? "عرض تفاصيل الخدمات الهندسية" : "Detailed Services Overview"}</span>
              <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180 mr-1' : 'ml-1'}`} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'ready-mix',
                title: isRtl ? "خرسانة جاهزة معتمدة" : "Ready-Mix Concrete",
                desc: isRtl ? "محطات أوتوماتيكية متطورة وموازين دقيقة ومقاومة حرارية ومستلزمات صب فوري." : "Computerized automated batch plants and chemical hydration control for mass pours.",
                icon: Factory
              },
              {
                id: 'cement-blocks',
                title: isRtl ? "طوب وبلوك إسمنتي" : "Cement Blocks Production",
                desc: isRtl ? "مصانع كبس هيدروليكي أوتوماتيكية لإنتاج الطوب والبردورات والإنترلوك عالي التحمل." : "Vibrated mechanical block pressers generating solid and hollow blocks to ASTM specs.",
                icon: Database
              },
              {
                id: 'logistics-fleet',
                title: isRtl ? "أسطول النقل واللوجستيات" : "Logistics & Fleet",
                desc: isRtl ? "مضخات صب بأذرع ممتدة وخلاطات مرسيدس MP4 مبرمجة للسرعة والأمان." : "State-of-the-art Mercedes MP4 mixers and high boom Pumps (up to 60m reach capacity).",
                icon: Compass
              }
            ].map((srv) => {
              const IconComp = srv.icon;
              return (
                <div 
                  key={srv.id}
                  onClick={() => navigateTo('services')}
                  className="bg-brand-blue border border-brand-gold/10 hover:border-brand-gold/50 rounded-lg p-8 group cursor-pointer transition-all duration-300 transform hover:-translate-y-1 block"
                >
                  <div className="bg-brand-navy p-3 rounded-lg border border-brand-gold/10 text-brand-gold w-fit mb-6 group-hover:bg-brand-gold group-hover:text-brand-blue transition-all">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-white group-hover:text-brand-gold transition-colors block mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed block font-sans">
                    {srv.desc}
                  </p>
                  <div className="mt-6 flex items-center space-x-1.5 text-xs font-mono text-brand-gold group-hover:text-brand-gold-light">
                    <span>{isRtl ? "استكشف الخدمة" : "Read specifications"}</span>
                    <ArrowRight className={`h-3 w-3 ${isRtl ? 'rotate-180 mr-1' : 'ml-1'} transition-transform group-hover:translate-x-1`} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. FEATURED SECTORS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase">
            {t.featuredSectorsTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {t.featuredSectorsSub}
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SECTORS.map((sector) => (
            <div 
              key={sector.id}
              onClick={() => navigateTo('projects')}
              className="bg-brand-navy border border-brand-gold/15 rounded-lg overflow-hidden group hover:border-brand-gold/45 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="h-48 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-brand-blue/30 group-hover:bg-transparent transition-all z-10" />
                <img 
                  src={sector.image} 
                  alt={sector.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-white group-hover:text-brand-gold transition-colors">
                    {isRtl ? sector.titleAr : sector.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    {isRtl ? sector.descAr : sector.desc}
                  </p>
                </div>
                <div className="pt-4 mt-auto border-t border-brand-gold/10 flex items-center justify-between text-xs font-mono text-brand-gold group-hover:text-brand-gold-light">
                  <span>{isRtl ? "استعراض المشروعات المنجزة" : "Review delivered sites"}</span>
                  <ArrowRight className={`h-3 w-3 ${isRtl ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TRUSTED BY LOGO GRID SECTION */}
      <section className="bg-brand-navy/60 py-16 border-y border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="space-y-3 max-w-2xl mx-auto mb-12">
            <span className="text-xs text-brand-gold font-mono tracking-widest uppercase">
              {t.trustedByTitle}
            </span>
            <p className="text-lg font-bold text-white">{t.trustedBySub}</p>
          </div>

          <div className="space-y-8">
            {/* Master Developers */}
            <div>
              <h4 className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-4">
                {isRtl ? "المطورين العقاريين الكبار" : "Master Developers"}
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {CLIENT_LOGOS.developers.map((c, idx) => (
                  <span 
                    key={idx}
                    className="bg-brand-blue border border-brand-gold/10 hover:border-brand-gold/30 text-gray-300 hover:text-white px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider font-sans transition-all cursor-default"
                  >
                    {isRtl ? c.nameAr : c.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Tier-One Contractors */}
            <div>
              <h4 className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-4">
                {isRtl ? "شركات المقاولات الفئة الأولى" : "Tier-One Contractors"}
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {CLIENT_LOGOS.contractors.map((c, idx) => (
                  <span 
                    key={idx}
                    className="bg-brand-blue border border-brand-gold/10 hover:border-brand-gold/30 text-gray-300 hover:text-white px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider font-sans transition-all cursor-default"
                  >
                    {isRtl ? c.nameAr : c.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Consultants */}
            <div>
              <h4 className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-4">
                {isRtl ? "الاستشاريين الهندسيين" : "Engineering Consultants"}
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {CLIENT_LOGOS.consultants.map((c, idx) => (
                  <span 
                    key={idx}
                    className="bg-brand-blue border border-brand-gold/10 hover:border-brand-gold/30 text-gray-300 hover:text-white px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider font-sans transition-all cursor-default"
                  >
                    {isRtl ? c.nameAr : c.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. COVERAGE PREVIEW ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy border border-brand-gold/15 p-8 sm:p-12 rounded-lg relative overflow-hidden blueprint-grid-gold">
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-4 text-left">
              <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase block">
                {isRtl ? "تواجد إستراتيجي فوري" : "Strategic Geographic Presence"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                {isRtl ? "نغطي المحاور النشطة بالساحل والجمهورية" : "Full Coverage Across the Northern Development Corridor"}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                {isRtl 
                  ? "تتحرك محطاتنا وأسطولنا اللوجستي لتقديم خدمات توريد الخرسانة الجاهزة والطوب الإسمنتي في العلمين الجديدة والضبعة ومرسى مطروح وصولاً للإسكندرية والمحاور المجاورة."
                  : "Wherever your heavy construction takes place along the Mediterranean bypass, Alrayan batch plants are already pre-positioned to secure your concrete supply pipeline."
                }
              </p>
              <div className="pt-2">
                <button 
                  onClick={() => navigateTo('coverage')}
                  className="bg-brand-gold text-brand-blue hover:bg-brand-gold-light text-xs font-bold px-6 py-3 rounded transition-all cursor-pointer"
                >
                  {isRtl ? "فتح خريطة التغطية التفاعلية" : "Open Interactive Coverage Map"}
                </button>
              </div>
            </div>

            {/* Graphic visual representing structural design */}
            <div 
              role="presentation" 
              className="border border-brand-gold/20 p-6 rounded bg-brand-blue/85 flex flex-col space-y-4"
            >
              <div className="flex items-center justify-between border-b border-brand-gold/10 pb-3">
                <span className="text-xs font-mono text-brand-gold font-bold">ALRAYAN OPERATIONAL STATIONS</span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>3 ACTIVE PLANTS</span>
                </span>
              </div>
              <div className="text-xs space-y-2 text-gray-300 font-mono">
                <div className="flex justify-between">
                  <span>Unit 1: New Alamein Plant</span>
                  <span className="text-brand-gold">120 m³/hr - Active</span>
                </div>
                <div className="flex justify-between">
                  <span>Unit 2: El Dabaa Station</span>
                  <span className="text-brand-gold">120 m³/hr - Active</span>
                </div>
                <div className="flex justify-between">
                  <span>Unit 3: North Coast Corridor Hub</span>
                  <span className="text-brand-gold">120 m³/hr - Active</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-brand-navy to-brand-blue border border-brand-gold/25 p-12 sm:p-16 rounded-xl space-y-6 relative overflow-hidden blueprint-grid">
          <div className="absolute inset-0 bg-brand-navy/40 pointer-events-none" />
          
          <h2 className="text-xl sm:text-3xl font-bold text-white max-w-2xl mx-auto tracking-normal">
            {t.finalCtaTitle}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
            {t.finalCtaSub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 relative z-10">
            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-blue font-bold px-8 py-3.5 rounded text-xs tracking-wider uppercase cursor-pointer"
            >
              {t.ctaContactSales}
            </button>
            <button
              onClick={() => navigateTo('downloads')}
              className="w-full sm:w-auto bg-brand-navy border border-brand-gold/30 text-white hover:text-brand-gold px-8 py-3.5 text-xs font-mono rounded cursor-pointer"
            >
              {t.ctaDownloadProfile}
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
