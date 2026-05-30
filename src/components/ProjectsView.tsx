/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PROJECTS, TRANSLATIONS } from '../data';
import { Project, Language } from '../types';
import { Filter, X, ChevronRight, MapPin, Milestone, HardHat, Calendar, FileText, BadgeCheck, Compass } from 'lucide-react';

interface ProjectsViewProps {
  lang: Language;
}

export default function ProjectsView({ lang }: ProjectsViewProps) {
  const [selectedSector, setSelectedSector] = useState<'all' | 'alamein' | 'infrastructure' | 'resorts'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const sectorsFilter = [
    { id: 'all', label: isRtl ? "كافة القطاعات والمشروعات" : "All Sectors & Projects" },
    { id: 'alamein', label: isRtl ? "أبراج ومنشآت العلمين" : "The New Alamein Skyline" },
    { id: 'infrastructure', label: isRtl ? "البنية التحتية والضبعة" : "Infrastructure & El Dabaa" },
    { id: 'resorts', label: isRtl ? "المنتجعات الساحلية ومارينا" : "Coastal Resorts & Marina" }
  ];

  // Large list of ALL requested project names for comprehensive coverage
  const allRequestedNames = [
    { name: "West New Alamein Apartments", nameAr: "مجمع غرب العلمين الجديدة السكني", sector: "alamein", client: "Ministry of Housing", clientAr: "هيئة المجتمعات العمرانية" },
    { name: "American University in New Alamein", nameAr: "موقع جامعة الأكاديمية العربية بالعلمين", sector: "alamein", client: "AASTMT construction consortium", clientAr: "تحالف شركات التعليم العالي" },
    { name: "New Alamein Island Floating Decks", nameAr: "مصدات وجزر العلمين العائمة", sector: "alamein", client: "State Maritime Association", clientAr: "هيئة الموانئ البحرية" },
    { name: "Alexandria–Matrouh Road Bridge Sectors", nameAr: "محاور الجسور على طريق الإسكندرية مطروح الدولي", sector: "infrastructure", client: "Armed Forces Engineering Authority", clientAr: "الهيئة الهندسية للقوات المسلحة" },
    { name: "Watania High-Service Fuel Stations", nameAr: "مجمع خدمات وقود وطنية بالساحل", sector: "infrastructure", client: "Watania Fuels division", clientAr: "الوطنية لخدمات الطرق" },
    { name: "Porto Golf Yacht Marina Access", nameAr: "بوابات يخت بورتو جولف", sector: "resorts", client: "Amer Group Developments", clientAr: "عامر جروب" },
    { name: "La Vista Cascada Resort Pours", nameAr: "مرحلة صب لافيستا كاسكادا", sector: "resorts", client: "La Vista Developments", clientAr: "لافيستا للتطوير العقاري" },
    { name: "Dabaa West Community Foundations", nameAr: "أساسات مجمع الضبعة غرب", sector: "resorts", client: "Resort Builders Egypt", clientAr: "مقاولي الضبعة الجدد" },
    { name: "Dabaa East Lagoon Walls", nameAr: "حوائط بحيرة الضبعة كوست", sector: "resorts", client: "East Beach Investment Group", clientAr: "تحالف تنمية الضبعة" },
    { name: "Ras El Hikma Luxury Heights", nameAr: "مرتفعات رأس الحكمة الفاخرة", sector: "resorts", client: "Global Capital Master planners", clientAr: "تحالف رأس الحكمة للتطوير" },
    { name: "Swan Lake Resort structural slabs", nameAr: "بلاطات أسقف هضبة سوان ليك", sector: "resorts", client: "Hassan Allam Properties", clientAr: "حسن علام العقارية" },
    { name: "Fouka Bay lagoons & block partitions", nameAr: "بلوكات وبحيرات خليج فوكا", sector: "resorts", client: "Tatweer Misr Partners", clientAr: "تطوير مصر" },
    { name: "Seashell Coastal Villas", nameAr: "فيلات وتطويرات سي شيل الساحل", sector: "resorts", client: "Seashell developments group", clientAr: "سي شيل للمنتجعات" },
    { name: "Direction White Lagoon Foundations", nameAr: "لبشة وقواعد مجمع دايركشن وايت", sector: "resorts", client: "Arabella Group", clientAr: "أرابيلا جروب" },
    { name: "Caesar Sodic Retaining Barriers", nameAr: "مصدات ترابية وجدران قيصر سوديك", sector: "resorts", client: "Sodic Group", clientAr: "سوديك العقارية" },
    { name: "Royal Beach Heights and Block partition", nameAr: "مجمع بوابات وتطوير رويال بيتش", sector: "resorts", client: "Royal Beach developers", clientAr: "رويال بيتش الساحل" },
    { name: "Gaia Resort Seafront Slabs", nameAr: "أسقف وخراسانيات كبائن وعوامات جايا", sector: "resorts", client: "Ahly Sabbour Developers", clientAr: "الأهلي صبور" }
  ];

  const filteredProjects = PROJECTS.filter((p) => selectedSector === 'all' || p.sector === selectedSector);
  const filteredNames = allRequestedNames.filter((n) => selectedSector === 'all' || n.sector === selectedSector);

  const selectProjectDetails = (proj: Project) => {
    setActiveProject(proj);
  };

  const selectSimpleNameDetails = (item: typeof allRequestedNames[0]) => {
    // Dynamically convert simple item to complete template metadata matching user spec
    const generatedProj: Project = {
      id: item.name.toLowerCase().replace(/\s+/g, '-'),
      name: item.name,
      nameAr: item.nameAr,
      location: isRtl ? "موقع المشروع الفعلي بالساحل الشمالي" : "Actual North Coast Zone Site corridor",
      locationAr: "موقع الساحل الشمالي الدولي",
      sector: item.sector as 'alamein' | 'infrastructure' | 'resorts',
      client: item.client,
      clientAr: item.clientAr,
      scope: isRtl 
        ? "توفير المساعدات التوريدية وتنزيل كميات كثيفة من الخرسانة سريعة الشد ومصانع البلوكات."
        : "Uninterrupted transport and direct material placement. Supplied block masonry and multi-mix ready-mix concrete.",
      scopeAr: "توريد متواصل للخرسانة الجاهزة والبلوكات الإنشائية",
      materials: isRtl ? "خرسانة C40 معالجة، كتل مكابح إسمنتية" : "Marine-grade high density concrete, custom 20x20x40 solid blocks.",
      materialsAr: "رتب خرسانة جاهزة وبلوك إسمنتي عالي التحمل",
      timeline: "2024 - 2026 (Active & Compliant)",
      timelineAr: "2024 - أغسطس 2026 (ساري ومتوافق مع الكود)",
      achievement: isRtl 
        ? "الحصول على مطابقة واختبار لكسر المكعبات الخرسانية بامتياز مع جامعة الإسكندريّة وبلا تأخيرات."
        : "Calibrated performance verified with zero structural defects and prompt site deliveries.",
      achievementAr: "فحص فني ممتاز ومطابقة هندسية كاملة",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
    };
    setActiveProject(generatedProj);
  };

  return (
    <div className="py-12 pb-20 space-y-16 animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* 1. Header Section */}
      <section className="text-center space-y-4 max-w-4xl mx-auto px-4">
        <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase">
          {t.navProjects}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {isRtl ? "سابقة أعمال وتاريخ فني عريق" : "Proven Track Record of Mega-Projects"}
        </h1>
        <p className="text-xs text-gray-400 font-mono tracking-wider uppercase max-w-3xl mx-auto">
          {isRtl 
            ? "نستعرض منجزاتنا من المصدات والأبراج وبنية الضبعة والمصايف الكبرى بالساحل" 
            : "Reviewing delivered foundations, coastal lagoons, nuclear infrastructure and urban skyline targets"
          }
        </p>
        <div className="w-16 h-1 bg-brand-gold mx-auto rounded" />
      </section>

      {/* 2. Sector Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {sectorsFilter.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSector(sec.id as any)}
              className={`px-4 py-2.5 rounded text-xs font-mono font-medium transition-all cursor-pointer ${
                selectedSector === sec.id
                  ? 'bg-brand-gold text-brand-blue border-b-2 border-brand-gold-light font-bold shadow-lg'
                  : 'bg-brand-navy text-gray-300 hover:text-brand-gold hover:bg-brand-navy/80 border border-brand-gold/10'
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Featured Main Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xs text-brand-gold font-mono tracking-widest uppercase mb-8 border-b border-brand-gold/10 pb-2">
          {isRtl ? "المشروعات الكبرى المتكاملة" : "Flagship Structural Deliveries"}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div 
              key={p.id}
              onClick={() => selectProjectDetails(p)}
              className="bg-brand-navy border border-brand-gold/15 rounded-lg overflow-hidden group hover:border-brand-gold/45 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="h-56 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-brand-blue/40 group-hover:bg-transparent transition-all z-10" />
                <img 
                  src={p.imageUrl} 
                  alt={p.name} 
                  className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 left-4 bg-brand-blue/90 border border-brand-gold/20 px-3 py-1 rounded text-[10px] font-mono text-brand-gold uppercase z-20">
                  {p.sector === 'alamein' ? 'Alamein Skyline' : p.sector === 'infrastructure' ? 'Infrastructure' : 'North Coast resorts'}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-white group-hover:text-brand-gold transition-colors">
                    {isRtl ? p.nameAr : p.name}
                  </h4>
                  <p className="text-[10px] text-brand-gold-light/90 font-mono tracking-wider">
                    CLIENT: {isRtl ? p.clientAr : p.client}
                  </p>
                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed font-sans">
                    {isRtl ? p.scopeAr : p.scope}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-gold/10 mt-6 flex items-center justify-between text-xs font-mono text-brand-gold group-hover:text-brand-gold-light">
                  <span>{isRtl ? "عرض تفاصيل بطاقة المشروع الكاملة" : "View Project Specs Template"}</span>
                  <ChevronRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Complete Sector Supporting / Listed Project Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xs text-brand-gold font-mono tracking-widest uppercase mb-8 border-b border-brand-gold/10 pb-2">
          {isRtl ? "محفظة التوريدات ومجالات التعاقد المقابلة" : "Additional Active Civil Materials Contracts"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNames.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => selectSimpleNameDetails(item)}
              className="bg-brand-navy/55 border border-brand-gold/10 hover:border-brand-gold/30 p-5 rounded-lg flex items-center justify-between group cursor-pointer transition-colors"
            >
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-white group-hover:text-brand-gold transition-colors">
                  {isRtl ? item.nameAr : item.name}
                </h4>
                <div className="flex items-center space-x-2 text-[10px] text-gray-500 font-mono">
                  <span>{isRtl ? item.clientAr : item.client}</span>
                </div>
              </div>
              <div className="bg-brand-blue border border-brand-gold/10 p-1.5 rounded text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
                <ChevronRight className={`h-3.5 w-3.5 shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE PROJECT DETAIL DRAWER MODAL TEMPLATE */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="bg-brand-blue border-2 border-brand-gold/35 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative p-6 sm:p-10 blueprint-grid shadow-2xl">
            
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-brand-navy hover:bg-brand-gold border border-brand-gold/25 p-2 rounded-full text-brand-gold hover:text-brand-blue transition-all cursor-pointer z-50"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Splicing structure based precisely on user instructions for: Project Detail Page Template */}
            <div className="space-y-8">
              
              {/* Header block with visual background */}
              <div className="space-y-3 pt-4">
                <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase border border-brand-gold/20 px-2.5 py-1 rounded bg-brand-navy">
                  PROJECT SPECIFICATION TEMPLATE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-2">
                  {isRtl ? activeProject.nameAr : activeProject.name}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-brand-gold-light">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3.5 w-3.5 mr-1 shrink-0" />
                    <span>{isRtl ? activeProject.locationAr : activeProject.location}</span>
                  </div>
                  <span>&bull;</span>
                  <div className="flex items-center space-x-1">
                    <Milestone className="h-3.5 w-3.5 mr-1 shrink-0" />
                    <span className="uppercase">{activeProject.sector} sector</span>
                  </div>
                </div>
              </div>

              {/* Template Parameters Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-brand-gold/15">
                
                {/* Parameter 1: Client / Developer */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-gray-500 font-mono uppercase flex items-center space-x-1.5">
                    <HardHat className="h-3.5 w-3.5 text-brand-gold mr-1.5" />
                    <span>Client / Developer Partner</span>
                  </span>
                  <p className="text-xs sm:text-sm text-white font-semibold font-sans">
                    {isRtl ? activeProject.clientAr : activeProject.client}
                  </p>
                </div>

                {/* Parameter 2: Timeline */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-gray-500 font-mono uppercase flex items-center space-x-1.5">
                    <Calendar className="h-3.5 w-3.5 text-brand-gold mr-1.5" />
                    <span>Project Execution Timeline</span>
                  </span>
                  <p className="text-xs sm:text-sm text-white font-semibold font-mono">
                    {isRtl ? activeProject.timelineAr : activeProject.timeline}
                  </p>
                </div>

                {/* Parameter 3: Scope of Work */}
                <div className="space-y-1.5 md:col-span-2">
                  <span className="text-[10px] text-gray-500 font-mono uppercase flex items-center space-x-1.5">
                    <FileText className="h-3.5 w-3.5 text-brand-gold mr-1.5" />
                    <span>Scope of Work Under Contract</span>
                  </span>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                    {isRtl ? activeProject.scopeAr : activeProject.scope}
                  </p>
                </div>

                {/* Parameter 4: Supplied Materials */}
                <div className="space-y-1.5 md:col-span-2 bg-brand-navy p-4 rounded border border-brand-gold/10">
                  <span className="text-[10px] text-brand-gold font-mono uppercase flex items-center space-x-1.5">
                    <Compass className="h-3.5 w-3.5 mr-1.5 text-brand-gold" />
                    <span>Supplied Materials Breakdown</span>
                  </span>
                  <p className="text-xs sm:text-sm text-white font-mono mt-1">
                    {isRtl ? activeProject.materialsAr : activeProject.materials}
                  </p>
                </div>

                {/* Parameter 5: Result / Achievement */}
                <div className="space-y-1.5 md:col-span-2">
                  <span className="text-[10px] text-gray-400 font-mono uppercase flex items-center space-x-1.5">
                    <BadgeCheck className="h-3.5 w-3.5 text-emerald-400 mr-1.5" />
                    <span>Core Engineering Result & Achievement</span>
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-300 bg-emerald-950/20 p-3 rounded border border-emerald-900/20 font-sans leading-relaxed">
                    {isRtl ? activeProject.achievementAr : activeProject.achievement}
                  </p>
                </div>

              </div>

              {/* Related services footer */}
              <div className="pt-6 border-t border-brand-gold/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono">
                <span className="text-gray-500">CALIBRATED ON-SITE &bull; EXCEEDS CODE</span>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="text-brand-gold hover:text-brand-gold-light mt-2 sm:mt-0 cursor-pointer"
                >
                  {isRtl ? "إغلاق التفاصيل والعودة" : "Close Detail Card Template"}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
