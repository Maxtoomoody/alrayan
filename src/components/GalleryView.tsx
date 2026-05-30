/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TRANSLATIONS } from '../data';
import { Download, ZoomIn, Eye, Layers } from 'lucide-react';
import { Language } from '../types';

interface GalleryProps {
  lang: Language;
}

interface GalleryItem {
  id: number;
  title: string;
  titleAr: string;
  category: 'plants' | 'fleet' | 'projects' | 'quality' | 'blocks' | 'infrastructure';
  caption: string;
  captionAr: string;
  imageUrl: string;
}

export default function GalleryView({ lang }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'plants' | 'fleet' | 'projects' | 'quality' | 'blocks' | 'infrastructure'>('all');
  const [lightboxImg, setLightboxImg] = useState<GalleryItem | null>(null);

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const filters = [
    { id: 'all', label: isRtl ? "الكل" : "All Media" },
    { id: 'plants', label: isRtl ? "المحطات" : "Concrete Plants" },
    { id: 'fleet', label: isRtl ? "الأسطول" : "Heavy Fleet" },
    { id: 'projects', label: isRtl ? "المشاريع" : "Project Sites" },
    { id: 'quality', label: isRtl ? "الجودة" : "Quality & Labs" },
    { id: 'blocks', label: isRtl ? "الطوب البلوك" : "Cement Blocks" },
    { id: 'infrastructure', label: isRtl ? "البنية التحتية" : "Infrastructure" }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Batch Station Silos",
      titleAr: "صوامع تخزين محطة الخلط",
      category: "plants",
      caption: "High capacity moisture-insulated dry storage silos for rapid concrete mixing operations.",
      captionAr: "صوامع معدنية جافة ومحمية لتخزين احتياطيات الإسمنت بمعدل تدفق متناهي.",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Mercedes MP4 Smart Mixer",
      titleAr: "خلاطة مرسيدس MP4 الذكية",
      category: "fleet",
      caption: "Our Mercedes-Benz Arocs heavy mixer transit units sync with site coordinates via telemetry.",
      captionAr: "شاحنة مرسيدس بنز أروكس لنقل الخرقانة الجاهزة متصلة لوجستياً بمركز التوجيه والصب.",
      imageUrl: "https://images.unsplash.com/photo-1513828583845-9be990a7bc9a?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "New Alamein Skyline Pour",
      titleAr: "موقع الصب بأبراج العلمين الجديدة",
      category: "projects",
      caption: "Simultaneous high-altitude mobile boom pumping operations for foundation superstructures.",
      captionAr: "مضخات أذرع عملاقة تصب الخرسانة المسلحة في الطوابق العليا لأبراج العلمين.",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "ASTM Compressive Squeeze",
      titleAr: "اختبار كسر كرات الضغط الخرساني",
      category: "quality",
      caption: "Calibration crushing program at Alexandria University ensuring absolute compliance with ASTM C39.",
      captionAr: "اختبار مكعبات خرسانية تحت الكبس الهيدروليكي للمطابقة الصارمة مع الكود المصري للمواد.",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Automated Block Fabrication",
      titleAr: "مكابس صناعة الطوب البلوك",
      category: "blocks",
      caption: "Hydraulic vibrating pressers forming high-density solid blocks for retaining walls.",
      captionAr: "مصانع كبس هيدروليكية آلية تضغط الطوب الصلب لضمان زوايا هندسية ومقاومة رطوبة ممتازة.",
      imageUrl: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Strategic Highway Transit",
      titleAr: "نقليات مسار الطرق القومية الساحلية",
      category: "infrastructure",
      caption: "Providing aggregate materials and roadbed structures along the Alexandria–Matrouh segment.",
      captionAr: "تعبيد وصب جسور وأساسات الطرق والقطار الكهربائي السريع بنسب دمج مطابقة للمواصفات الاستشارية.",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 7,
      title: "On-Site Batch Lab Checks",
      titleAr: "الفحص السريع بمختبر المحطة الموقعي",
      category: "quality",
      caption: "Wet aggregate sieve analysis performed daily to check sand moisture gradients.",
      captionAr: "اختبار المنخل اليومي للركام للتأكد من ملوحة الرمل ومحور رطوبة خلطة الخرسانة الجاهزة.",
      imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 8,
      title: "60m Putzmeister Truck",
      titleAr: "مضخة صب بوتسمايستر 60 متراً",
      category: "fleet",
      caption: "Our largest multi-segment flexible arm pump deployed on broad structural foundation rafts.",
      captionAr: "المضخة الأكبر بالأسطول بأذرع ذكية مرنة مجهزة للصب العميق بمسطح اللبشة الخرسانية.",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredItems = galleryItems.filter(item => activeFilter === 'all' || item.category === activeFilter);

  return (
    <div className="py-12 pb-20 space-y-16 animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-4xl mx-auto px-4">
        <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase">
          {t.navGallery}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {isRtl ? "معرض الصور والوسائط الميدانية" : "Operational Media & Worksite Gallery"}
        </h1>
        <p className="text-xs text-gray-400 font-mono tracking-wider uppercase max-w-3xl mx-auto">
          {isRtl 
            ? "ندع الصور الميدانية الحقيقية تعكس حجم القوة الصناعية واللوجستية للريان جروب" 
            : "Real physical evidence showing our fleet, batch plants and active mega developments"
          }
        </p>
        <div className="w-16 h-1 bg-brand-gold mx-auto rounded" />
      </section>

      {/* Filter Category Control */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as any)}
              className={`px-3 py-1.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-brand-gold text-brand-blue font-bold shadow-md'
                  : 'bg-brand-navy border border-brand-gold/10 text-gray-400 hover:text-brand-gold hover:bg-brand-navy/80'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of gallery assets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-brand-navy border border-brand-gold/15 rounded-lg overflow-hidden group hover:border-brand-gold/45 transition-all relative cursor-pointer"
              onClick={() => setLightboxImg(item)}
            >
              <div className="h-60 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/85 to-transparent z-10" />
                <div className="absolute inset-0 bg-brand-blue/35 group-hover:bg-transparent transition-all z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-brand-gold text-brand-blue p-2.5 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="h-4 w-4" />
                  </div>
                </div>
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & Category caption */}
              <div className="p-4 relative z-20 space-y-1 bg-brand-navy">
                <span className="text-[9px] font-mono text-brand-gold uppercase tracking-widest">{item.category}</span>
                <h4 className="text-xs font-semibold text-white tracking-wide group-hover:text-brand-gold transition-colors">
                  {isRtl ? item.titleAr : item.title}
                </h4>
                <p className="text-[10px] text-gray-400 line-clamp-2 leading-normal font-sans">
                  {isRtl ? item.captionAr : item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Image Lightbox Dialog Panel */}
      {lightboxImg && (
        <div 
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-brand-blue border border-brand-gold/30 rounded-lg max-w-3xl w-full p-4 relative flex flex-col items-center"
          >
            <button 
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 bg-brand-navy hover:bg-brand-gold border border-brand-gold/15 p-2 rounded-full text-brand-gold hover:text-brand-blue transition-colors cursor-pointer z-50"
            >
              <XIcon className="h-4 w-4" />
            </button>
            
            <img 
              src={lightboxImg.imageUrl} 
              alt={lightboxImg.title} 
              className="w-full max-h-[60vh] object-contain rounded"
              referrerPolicy="no-referrer"
            />
            
            <div className="w-full text-left pt-4 space-y-1">
              <span className="text-[10px] font-mono text-brand-gold uppercase">{lightboxImg.category} / FILE COMPLIANT</span>
              <h3 className="text-sm font-bold text-white font-sans">{isRtl ? lightboxImg.titleAr : lightboxImg.title}</h3>
              <p className="text-xs text-gray-300 font-sans leading-relaxed">{isRtl ? lightboxImg.captionAr : lightboxImg.caption}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Inline fallback XIcon since lucide X was used inside lightbox
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
