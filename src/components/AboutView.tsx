/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TRANSLATIONS } from '../data';
import { Target, Compass, Award, Shield, Users, Truck, MapPin, Settings } from 'lucide-react';
import { Language } from '../types';

interface AboutViewProps {
  lang: Language;
}

export default function AboutView({ lang }: AboutViewProps) {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const differentiators = [
    {
      title: "One Accountable Partner",
      titleAr: "شريك واحد مسؤول بالكامل",
      desc: "By consolidating components, Alrayan assumes full responsibility, resolving the classic vendor finger-pointing loop.",
      descAr: "نجمع كافة مراحل التوريد تحت سقف واحد لتتحمل الشركة المسؤولية الفنية واللوجستية الكاملة دون أعذار.",
      icon: Users
    },
    {
      title: "Integrated Supply Chain",
      titleAr: "سلسلة إمداد إنتاجية مغلقة",
      desc: "Vertical integration from aggregate quarries and automated mixers to final job-site placement and contracting.",
      descAr: "امتلاك متكامل لدورة الإنتاج بدءاً من التوريد الأساسي والخلط الآلي وحتى الصب المسلح للموقع.",
      icon: Settings
    },
    {
      title: "High-Volume Capacity",
      titleAr: "طاقة تشغيلية كثيفة",
      desc: "Multiple batch units and automated blocking factories set up to easily sustain uninterrupted concrete flows.",
      descAr: "نقوم بتشغيل محطات وخطوط إنتاج متعددة مصممة للعمل تحت أقصى معدلات الطلب اليومية دون أعطال.",
      icon: Award
    },
    {
      title: "Strict Quality Testing Matrix",
      titleAr: "تأكيد فني صارم للجودة",
      desc: "Daily laboratory diagnostics conforming to ASTM and EN principles in validation partnership with Alexandria University.",
      descAr: "فحص قياسي دقيق يومياً طبقا للمواصفات الأمريكية بالتنسيق الهندسي مع كبرى المختبرات الجامعية.",
      icon: Shield
    },
    {
      title: "Dedicated Logistics Fleet",
      titleAr: "أسطول نقل هيدروليكي خاص",
      desc: "Manned fleet of Mercedes MP4 transit mixers and Putzmeister pumps under real-time coordinate telemetry tracking.",
      descAr: "أسطول نفاذ فوري من سيارات الخلاطات والمضخات العملاقة المجهزة للتحكم والصب السريع بالموقع.",
      icon: Truck
    },
    {
      title: "Strategic Location Corridors",
      titleAr: "تمركز إقليمي إستراتيجي",
      desc: "Operating along the busy North Coast, New Alamein, and El Dabaa zones for prompt, zero-delay arrivals.",
      descAr: "محطات ومصانع موزعة بدقة بمحاذاة الطريق الدولي الساحلي لضمان سرعة تلبية الطلبات ومنع تصلد الخرسانة.",
      icon: MapPin
    }
  ];

  return (
    <div className="space-y-24 py-12 pb-20 animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* 1. Header Banner */}
      <section className="text-center space-y-4 max-w-4xl mx-auto px-4">
        <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase">
          {t.navAbout}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {isRtl ? "ريادة هندسية وبناء موثوق" : "Industrial Strength & Corporate Legacy"}
        </h1>
        <p className="text-xs text-gray-400 font-mono tracking-wider max-w-2xl mx-auto uppercase">
          {isRtl ? "نبني اليقين في كبرى المعالم والمنشآت المصرية" : "Engineered Solid Infrastructure Solutions Since Inception"}
        </p>
        <div className="w-16 h-1 bg-brand-gold mx-auto rounded" />
      </section>

      {/* 2. Company Overview block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {isRtl ? "من نحن — الريان جروب" : "Who We Are — Alrayan Group"}
            </h2>
            
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              {isRtl 
                ? "تأسست الريان جروب كصرح إمداد متكامل في قطاع التشييد والبناء بمصر. نقدم حلولاً عملاقة مترابطة تضم إنتاج الخرسانة الجاهزة عبر ٣ محطات متطورة، وتصنيع الطوب الإسمنتي، ونقليات الخلاطات والمضخات ومقاولات التنفيذ المتكاملة."
                : "Alrayan Group stands as a premier integrated industrial and contracting corporation. We specialize in supplying high-grade ready-mix concrete, custom cement block masonry, heavy coordinated logistics fleet dispatch, on-site mechanical pumping, and structural general contracting."
              }
            </p>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              {isRtl
                ? "يتحرك فريقنا بناءً على قواعد الانضباط الفني الصارم لإلغاء تأخيرات التوريد المعتادة في المواقع الإنشائية الكبرى. ومنذ ذلك الوقت نبرم شراكات واعدة مع كبار المطورين العقاريين وهيئة المجتمعات العمرانية ومقاولي الفئة الأولى بالساحل الشمالي والجمهورية."
                : "Our entire operational structure is aligned to suppress delays caused by vendor friction. We serve major national projects, resort master-planners, and state authorities along the northern corridor of Egypt under rigorous QA/QC guidelines."
              }
            </p>

            {/* Sub stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-gold/10">
              <div className="space-y-1">
                <span className="text-xl font-bold text-brand-gold font-mono">B2B Core</span>
                <p className="text-[10px] text-gray-500 uppercase">{isRtl ? "شريحة الأعمال والمؤسسات" : "Exclusively Enterprise Services"}</p>
              </div>
              <div className="space-y-1">
                <span className="text-xl font-bold text-brand-gold font-mono">Aug 2026</span>
                <p className="text-[10px] text-gray-500 uppercase">{isRtl ? "صلاحيات شهادات التشغيل والاعتماد" : "Certified & Validated Cycle"}</p>
              </div>
            </div>
          </div>

          <div className="relative border border-brand-gold/15 p-2 rounded bg-black/40">
            <img 
              src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800"
              alt="Concrete plants and logistics fleet operations"
              className="w-full h-auto rounded filter grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            {/* Overlay blueprint label */}
            <div className="absolute bottom-6 left-6 right-6 bg-brand-blue/90 border border-brand-gold/20 p-4 rounded text-xs font-mono">
              <span className="text-brand-gold font-bold">ALRAYAN OPERATIONAL ASSETS</span>
              <p className="text-gray-400 text-[10px] mt-1">{isRtl ? "توريد إنشائي هندسي متكامل ومطابق لكود الأمان الدولي." : "Industrial capacity validated for major national-scale structural projects."}</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="bg-brand-navy py-16 border-y border-brand-gold/10 relative blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-brand-blue/60 backdrop-blur border border-brand-gold/15 p-8 rounded-lg space-y-4">
              <div className="w-12 h-12 rounded bg-brand-gold/10 flex items-center justify-center text-brand-gold border border-brand-gold/20">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-mono">
                {isRtl ? "رؤية الريان جروب" : "Corporate Vision"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {isRtl
                  ? "أن نصبح الشريك الإستراتيجي اللوجستي والفني الأول لقيادة وتطوير خطط التوسع العمراني والبنية التحتية العملاقة بجمهورية مصر العربية، مع توفير حلول إنشائية خالية من العيوب الهندسية."
                  : "To become the premier strategic supply partner driving Egypt's urban expansion by delivering robust and faultless heavy-structural concrete solutions for nationwide mega-developments."
                }
              </p>
            </div>

            <div className="bg-brand-blue/60 backdrop-blur border border-brand-gold/15 p-8 rounded-lg space-y-4">
              <div className="w-12 h-12 rounded bg-brand-gold/10 flex items-center justify-center text-brand-gold border border-brand-gold/20">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-mono">
                {isRtl ? "مهمة الشركة التشغيلية" : "Corporate Mission"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {isRtl
                  ? "تقديم منظومة إمداد وتوريدات متكاملة تضم الخرسانات والكتل الإسمنتية والخدمات التشغيلية والمقاولات، تقضي على تأخيرات العمل وتلتزم بالجودة والأمان المتناهي في صب هياكل المنشأ."
                  : "To deliver vertically integrated ready-mix concrete, dense block masonry, transport, deployment, and contracting services that enforce precision and safe delivery targets."
                }
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Chairman / Executive Message */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="border border-brand-gold/20 bg-brand-navy p-8 sm:p-12 rounded-xl relative overflow-hidden blueprint-grid-gold">
          
          <div className="space-y-6 relative z-10">
            <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase block">
              {isRtl ? "رسالة رئيس مجلس الإدارة" : "Chairman & Executive Message"}
            </span>

            {/* Bilingual big bold slogan */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans leading-snug">
              &ldquo; {isRtl ? "في المشروعات الكبرى، السرعة والجودة ليستا اختيارًا" : "In mega-projects, speed and quality are not a choice"} &rdquo;
            </h3>

            <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-brand-gold/10 text-xs sm:text-sm">
              <div className="space-y-3 leading-relaxed text-gray-300">
                <p className="font-semibold text-brand-gold-light font-mono">BILINGUAL EXECUTIVE STATEMENT:</p>
                <p className="font-sans">
                  "لقد صممنا الريان جروب لتكون بمثابة صمام أمان إنشائي ضد معوقات التوريد. نؤمن بأن الصرامة الفنية تبدأ من تحليل حبات الرمل ولا تنتهي إلا بصبة خشبية متوازنة الأبعاد. نقود طواقمنا لخدمة التشييد القومي بوعي هندسي صارم."
                </p>
              </div>
              <div className="space-y-3 leading-relaxed text-gray-400 font-sans">
                <p className="font-semibold text-brand-gold-light font-mono">ENGLISH STATEMENT SUMMARY:</p>
                <p>
                  "We have engineered Alrayan Group as a structural validation safeguard against procurement bottlenecks. Technical discipline begins with aggregate analysis in the laboratory and concludes with perfect dimensional placement. We direct our divisions with a deep understanding of tier-one compliance expectations."
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-brand-gold/10 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white font-sans">{isRtl ? "مجلس إدارة الريان جروب" : "The Board of Directors"}</p>
                <p className="text-[10px] text-brand-gold font-mono uppercase tracking-widest">{isRtl ? "قطاع التخطيط والتشغيل الهندسي" : "Structural Operations & General Management Division"}</p>
              </div>
              <span className="text-xs text-brand-gold/40 font-mono mt-2 sm:mt-0">ALAMEIN & NORTH COAST &bull; ESTABLISHED EGYPT</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. What Makes Us Different (Differentiators grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase block">
            {isRtl ? "سر التفوق الفني" : "Industrial Differentiators"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {isRtl ? "ما الذي يميز الريان جروب؟" : "What Makes Us Different"}
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, index) => {
            const IconComp = diff.icon;
            return (
              <div 
                key={index}
                className="bg-brand-navy border border-brand-gold/10 hover:border-brand-gold/40 p-8 rounded-lg relative overflow-hidden group transition-all duration-300"
              >
                {/* Decorative index */}
                <span className="absolute top-4 right-4 text-xs font-mono text-brand-gold/20 font-bold group-hover:text-brand-gold/80 transition-colors">
                  0{index + 1}
                </span>

                <div className="space-y-4">
                  <div className="bg-brand-blue border border-brand-gold/15 text-brand-gold p-3 rounded w-fit group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wide group-hover:text-brand-gold transition-colors">
                    {isRtl ? diff.titleAr : diff.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    {isRtl ? diff.descAr : diff.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
