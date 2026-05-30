/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TRANSLATIONS } from '../data';
import { MapPin, Server, Activity, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { Language } from '../types';

interface CoverageProps {
  lang: Language;
}

interface CoverageHub {
  id: string;
  name: string;
  nameAr: string;
  type: string;
  typeAr: string;
  capacity: string;
  capacityAr: string;
  mixers: string;
  mixersAr: string;
  pumps: string;
  pumpsAr: string;
  desc: string;
  descAr: string;
  x: number; // SVG coordinate percentage
  y: number; // SVG coordinate percentage
}

export default function CoverageView({ lang }: CoverageProps) {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const HUBS: CoverageHub[] = [
    {
      id: "matrouh",
      name: "Marsa Matrouh Port Terminal",
      nameAr: "محطة ومركز مرسى مطروح اللوجستي",
      type: "Aggregate storage and logistics hub",
      typeAr: "موقع لوجستي ومخازن سن وركام إستراتيجي",
      capacity: "90k Tons Raw Storage",
      capacityAr: "90 ألف طن سعة تخزين خامات",
      mixers: "6 Dispatch Units",
      mixersAr: "6 شاحنات خلاطة جاهزة للتوجيه",
      pumps: "1 Putzmeister Pump",
      pumpsAr: "مضخة صب عملاقة",
      desc: "Securing raw aggregate supplies and material screening along Matrouh's border bypasses.",
      descAr: "تأمين إمدادات السن البازلتي وغربلة الرمل الطبيعي لدعم خطوط إنتاج الساحل.",
      x: 15,
      y: 40
    },
    {
      id: "dabaa",
      name: "El Dabaa Operational Batching Unit",
      nameAr: "محطة صب وتوريد الضبعة المركزية",
      type: "High-security concrete batch facility",
      typeAr: "محطة خرسانة جاهزة عالية الحماية الفنية",
      capacity: "120 m³/hr Throughput",
      capacityAr: "120 م³ / ساعة معدل إنتاج متواصل",
      mixers: "8 Arocs Mercedes Mixers",
      mixersAr: "8 خلاطات مرسيدس آروكس ثقيلة",
      pumps: "2 Mobile Boom Pumps (56m/60m)",
      pumpsAr: "2 مضخة أذرع صب عملاقة (56 و60 م)",
      desc: "Delivering continuous concrete pours complying with high-integrity seismic standards for nuclear development areas.",
      descAr: "إنتاج خرسانات ذات جودة استثنائية مقاومة للتفتت تحت الضغوط ومكيفة للصب الحساس بالضبعة.",
      x: 40,
      y: 45
    },
    {
      id: "alamein",
      name: "New Alamein City Production Hub",
      nameAr: "مجمع مصانع ومحطات العلمين الجديدة",
      type: "Primary corporate manufacturing center",
      typeAr: "مركز الإنتاج والصناعات الإنشائية الرئيسي",
      capacity: "240 m³/hr Triple Mixers & 3 Block Plants",
      capacityAr: "240 م³/س خلاطات ثلاثية و٣ مصانع بلوك",
      mixers: "12 Actros Smart Fleet",
      mixersAr: "12 خلاطة خرسانية ذكية مرسيدس",
      pumps: "3 Long-Reach Mobile Pumps (60m)",
      pumpsAr: "3 مضخات صب أذرع عملاقة (60 متراً)",
      desc: "Supplying extra-strength ready-mix concrete and structural hollow blocks for skyscrapers and the Latin Quarter.",
      descAr: "المغذي الأضخم لأبراج العلمين الشاهقة والحي اللاتيني بالخرسانات والبلوك الإسمنتي المتكامل.",
      x: 65,
      y: 50
    },
    {
      id: "alexandria",
      name: "Alexandria West Logistics Gateway",
      nameAr: "بوابات ومخازن غرب الإسكندرية",
      type: "Material testing lab and shipping channel",
      typeAr: "المكتب الفني ومعمل الهندسة وقاعدة الشحن",
      capacity: "Consolidated Engineering Lab",
      capacityAr: "المقر التنسيقي والتحليل الكيماوي المشترك",
      mixers: "Testing support vehicles",
      mixersAr: "طواقم فحص هيدروليكية متحركة للساحل",
      pumps: "Logistics Backup",
      pumpsAr: "دعم لوجستي واحتياطي تشغيلي",
      desc: "Managing cooperation audits with Alexandria University, checking chemical standards, and scheduling bulk cement silos.",
      descAr: "منسق المعايرات الرسمية مع جامعة الإسكندرية وموقع إدارة صوامع التخزين الجاف للإسمنت.",
      x: 90,
      y: 55
    }
  ];

  const [activeHub, setActiveHub] = useState<CoverageHub>(HUBS[2]); // Default New Alamein

  return (
    <div className="py-12 pb-20 space-y-16 animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-4xl mx-auto px-4">
        <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase">
          {t.navCoverage}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {isRtl ? "شريان ونطاق تغطية الساحل الشمالي" : "Geographic Operations & Stations Coverage"}
        </h1>
        <p className="text-xs text-gray-400 font-mono tracking-wider uppercase max-w-3xl mx-auto">
          {isRtl 
            ? "تمركز لوجستي مدروس ومحطات حيوية تضمن صفر تأخير في إمدادات الخرسانة" 
            : "Strategic pre-positioned terminals securing reliable delivery along Egypt's Mediterranean bypass"
          }
        </p>
        <div className="w-16 h-1 bg-brand-gold mx-auto rounded" />
      </section>

      {/* Supporting Copy Banner */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-brand-navy border border-brand-gold/15 p-6 rounded-lg text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {isRtl 
              ? "يضمن التوزيع الإستراتيجي لمحطات الصب ومصانع البلوك التابعة للريان جروب وصول الخرسانات الجاهزة وهي في أروع درجات الرطوبة ودرجة الحرارة لمختلف مشاريع الساحل الشمالي."
              : "Our strategic distribution of mixing units and blocking facilities guarantees ready-mix concrete arrives in optimal hydration conditions along Egypt's most active development corridor."
            }
          </p>
        </div>
      </section>

      {/* Interactive Map Layout Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-stretch">
          
          {/* Interactive Vector Map SVG (3cols desktop) */}
          <div className="lg:col-span-3 bg-brand-navy border border-brand-gold/15 rounded-xl p-6 relative flex flex-col justify-between blueprint-grid-gold overflow-hidden min-h-[400px]">
            <div className="absolute top-4 left-4 text-[10px] font-mono text-brand-gold font-bold">
              ALRAYAN NORTH COAST GEOGRAPHIC VECTOR INTERACTIVE
            </div>

            {/* Styled Line / Coastline SVG Graphic */}
            <div className="relative w-full h-80 flex items-center justify-center pt-8">
              <svg viewBox="0 0 500 200" className="w-full h-full text-brand-gold">
                {/* Coastal Bypass Line */}
                <path 
                  d="M 20,120 Q 150,110 250,115 T 480,140" 
                  fill="none" 
                  stroke="rgba(197, 168, 80, 0.25)" 
                  strokeWidth="3" 
                  strokeDasharray="4 6"
                />
                <path 
                  d="M 20,120 Q 150,110 250,115 T 480,140" 
                  fill="none" 
                  stroke="#C5A850" 
                  strokeWidth="1.5" 
                />
                
                {/* Sea/Land indicator texts */}
                <text x="250" y="50" fill="rgba(14, 165, 233, 0.15)" fontSize="14" fontWeight="600" fontFamily="monospace" textAnchor="middle">
                  MEDITERRANEAN SEA
                </text>
                <text x="250" y="180" fill="rgba(255, 255, 255, 0.04)" fontSize="12" fontWeight="600" fontFamily="monospace" textAnchor="middle">
                  EGYPT NORTH COAST REGION
                </text>

                {/* Draw active nodes */}
                {HUBS.map((hub) => (
                  <g 
                    key={hub.id} 
                    className="cursor-pointer group"
                    onClick={() => setActiveHub(hub)}
                  >
                    {/* Ripple animation circle */}
                    <circle 
                      cx={`${hub.x}%`} 
                      cy={`${hub.y}%`} 
                      r={activeHub.id === hub.id ? "11" : "6"} 
                      fill="none" 
                      stroke={activeHub.id === hub.id ? "#C5A850" : "rgba(14, 165, 233, 0.4)"} 
                      strokeWidth="1.5"
                      className="animate-pulse"
                    />
                    <circle 
                      cx={`${hub.x}%`} 
                      cy={`${hub.y}%`} 
                      r="4" 
                      fill={activeHub.id === hub.id ? "#C5A850" : "#0EA5E9"} 
                    />
                    {/* Node text tags */}
                    <text 
                      x={`${hub.x}%`} 
                      y={`${hub.y - 6}%`} 
                      fill={activeHub.id === hub.id ? "#ffffff" : "#94a3b8"} 
                      fontSize="9" 
                      fontWeight="bold" 
                      fontFamily="monospace"
                      textAnchor="middle"
                      className="transition-colors group-hover:fill-brand-gold"
                    >
                      {isRtl ? hub.nameAr.split(" ")[2] || hub.nameAr : hub.name.split(" ")[1] || hub.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 pt-4 border-t border-brand-gold/10">
              <span>* Click on blue/gold vector coordinate nodes to pull terminal specs</span>
              <span>SCADA FEED METRICS UPDATED</span>
            </div>
          </div>

          {/* Plant Telemetry Card Panel (2cols desktop) */}
          <div className="lg:col-span-2 bg-brand-blue border border-brand-gold/25 rounded-xl p-8 flex flex-col justify-between relative overflow-hidden blueprint-grid">
            <div className="absolute top-0 inset-x-0 h-1 bg-brand-gold" />
            
            <div className="space-y-6">
              
              <div className="space-y-2">
                <span className="text-[10px] text-brand-gold font-mono uppercase tracking-wider block flex items-center">
                  <Activity className="h-3.5 w-3.5 mr-1.5 shrink-0 animate-pulse text-brand-gold" />
                  <span>ACTIVE HUB TELEMETRY</span>
                </span>
                <h3 className="text-xl font-bold text-white font-sans">
                  {isRtl ? activeHub.nameAr : activeHub.name}
                </h3>
                <p className="text-xs text-brand-gold-light font-mono leading-relaxed">
                  {isRtl ? activeHub.typeAr : activeHub.type}
                </p>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed font-sans border-t border-brand-gold/10 pt-4">
                {isRtl ? activeHub.descAr : activeHub.desc}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-gold/10 font-mono text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase block">{isRtl ? "السعة التشغيلية" : "OUTPUT/CAPACITY"}</span>
                  <span className="text-white block font-bold">{isRtl ? activeHub.capacityAr : activeHub.capacity}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase block">{isRtl ? "المضخات بموقع العمل" : "ASSIGNED MIXERS"}</span>
                  <span className="text-white block font-bold">{isRtl ? activeHub.mixersAr : activeHub.mixers}</span>
                </div>
                <div className="space-y-1 col-span-2">
                  <span className="text-[10px] text-gray-500 uppercase block">{isRtl ? "طول ذراع الصب المتوفر" : "PUMP UNITS / MOBILE BOOM"}</span>
                  <span className="text-brand-gold block font-bold">{isRtl ? activeHub.pumpsAr : activeHub.pumps}</span>
                </div>
              </div>

            </div>

            <div className="pt-8 border-t border-brand-gold/10 mt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 font-bold shrink-0 flex items-center">
                <ShieldCheck className="h-4 w-4 mr-1 shrink-0" />
                <span>ONLINE & ACTIVE</span>
              </span>
              <button 
                onClick={() => { window.location.hash = 'contact'; }}
                className="text-brand-gold hover:text-brand-gold-light mt-2 sm:mt-0 font-mono flex items-center space-x-1 cursor-pointer"
              >
                <span>{isRtl ? "تواصل لتنسيق التوريد بالمنطقة" : "Coordinate dispatch here"}</span>
                <ArrowRight className={`h-3 w-3 ${isRtl ? 'rotate-180 mr-1' : 'ml-1'}`} />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
