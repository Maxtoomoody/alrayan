/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CAREER_POSITIONS, TRANSLATIONS } from '../data';
import { JobPosition, Language } from '../types';
import { MapPin, Briefcase, Calendar, CheckSquare, ChevronDown, Check, Send, Sparkles } from 'lucide-react';

interface CareersProps {
  lang: Language;
}

export default function CareersView({ lang }: CareersProps) {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<JobPosition | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    cvFile: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const lifePillars = [
    {
      title: "Field Deployment Crews",
      titleAr: "طواقم الصب والتنفيذ الميداني",
      desc: "Deploying high-duty Putzmeister and Mercedes fleets at flagship developments, operating under safety rules.",
      descAr: "طواقم متدربة على توجيه المضخات والصب بسلامة في الأراضي الطينية والرملية والصب الليلي المستمر."
    },
    {
      title: "Engineering & QA Controls",
      titleAr: "قطاع الهندسة ومراقبة الجودة الفنية",
      desc: "Setting mix recipes, evaluating slump grades in active laboratories, and validating compliance.",
      descAr: "كيمياء وسرعة صب! إدارة نسب خلط المكونات مع كلية الهندسة ومعايرة الضغط اليومي بمكابس الكسر."
    },
    {
      title: "Supply Chain & Logistics",
      titleAr: "إدارة الإمداد وحركة اللوجستيات",
      desc: "Using telemetry systems to route continuous aggregate flows and cement imports.",
      descAr: "التحكم اللوح المبرمج بمحاور SCADA وجدولة الشاحنات لمنع تصلد الخرسانة في الطريق للساحل."
    }
  ];

  const handleApplyClick = (role: JobPosition) => {
    setSelectedRole(role);
    setIsSuccess(false);
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', experience: '', cvFile: '' });
    }
  };

  return (
    <div className="py-12 pb-20 space-y-24 animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-4xl mx-auto px-4">
        <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase">
          {t.navCareers}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {isRtl ? "انضم لطاقم الريان جروب الهندسي" : "Build Your Technical Career With Us"}
        </h1>
        <p className="text-xs text-gray-400 font-mono tracking-wider uppercase max-w-3xl mx-auto">
          {isRtl 
            ? "نبحث عن العقول والخبرات الهندسية المتميزة لإدارة أضخم محطات وناقلات الساحلية بمصر" 
            : "Seeking elite structural professionals, SCADA dispatchers and quality control specialists"
          }
        </p>
        <div className="w-16 h-1 bg-brand-gold mx-auto rounded" />
      </section>

      {/* 1. Life at Alrayan Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
            {isRtl ? "مهنتك ومجالات التشغيل الفنية بالشركة" : "Corporate Culture & Operational Quadrants"}
          </h2>
          <p className="text-xs text-gray-400">
            {isRtl 
              ? "العمل في الريان جروب يجمع بين الانضباط الفني الميداني والتطوير الهندسي الدائم:" 
              : "Working at Alrayan combines on-site coordination with ongoing academic and mechanical training:"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lifePillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-brand-navy border border-brand-gold/15 p-8 rounded-lg relative overflow-hidden group hover:border-brand-gold/45 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-xs font-mono text-brand-gold font-bold bg-brand-gold/10 px-2 py-1 rounded">
                  Q{idx + 1}
                </span>
                <h3 className="text-sm font-semibold text-white tracking-wide group-hover:text-brand-gold transition-colors">
                  {isRtl ? pillar.titleAr : pillar.title}
                </h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                {isRtl ? pillar.descAr : pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Open Positions (Filterable Accordion Style) */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
            {isRtl ? "الوظائف الهندسية المتاحة حالياً" : "Current Active Strategic Vacancies"}
          </h2>
          <p className="text-xs text-gray-500 font-mono">
            {isRtl 
              ? "محدث بانتظام للتوافق مع خطط عقود أغسطس ٢٠٢٦" 
              : "Regularly updated to align with upcoming accelerated coastal resort timelines"
            }
          </p>
        </div>

        <div className="space-y-4">
          {CAREER_POSITIONS.map((role) => (
            <div 
              key={role.id}
              className="bg-brand-navy border border-brand-gold/15 rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Header block (always visible) */}
              <div 
                onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
                className="p-6 cursor-pointer flex items-center justify-between hover:bg-brand-blue/30"
              >
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-white hover:text-brand-gold transition-colors">
                    {isRtl ? role.titleAr : role.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-[10px] font-mono text-brand-gold-light mt-1">
                    <span className="flex items-center"><Briefcase className="h-3 w-3 mr-1" /> {isRtl ? role.departmentAr : role.department}</span>
                    <span className="flex items-center"><MapPin className="h-3 w-3 mr-1" /> {isRtl ? role.locationAr : role.location}</span>
                    <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {isRtl ? role.typeAr : role.type}</span>
                  </div>
                </div>
                <ChevronDown className={`h-5 w-5 text-brand-gold transition-transform duration-300 ${expandedRole === role.id ? 'rotate-180' : ''}`} />
              </div>

              {/* Collapsed specifications */}
              {expandedRole === role.id && (
                <div className="p-6 border-t border-brand-gold/10 bg-brand-blue/35 space-y-6 text-xs sm:text-sm">
                  
                  <div className="space-y-2">
                    <h4 className="text-brand-gold font-mono uppercase text-[10px] tracking-widest">{isRtl ? "الوصف الوظيفي والمسؤوليات" : "Primary Scope & Role Duties"}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans">
                      {isRtl ? role.descriptionAr : role.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-brand-gold font-mono uppercase text-[10px] tracking-widest">{isRtl ? "المتطلبات الهندسية والشروط" : "Vetting Selection Criteria"}</h4>
                    <ul className="space-y-2">
                      {(isRtl ? role.requirementsAr : role.requirements).map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-2 text-xs text-gray-400">
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5 mr-1.5" />
                          <span className="font-sans">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-brand-gold/10 flex justify-end">
                    <button
                      onClick={() => handleApplyClick(role)}
                      className="bg-brand-gold text-brand-blue hover:bg-brand-gold-light font-bold px-6 py-2.5 rounded text-xs tracking-wider uppercase cursor-pointer"
                    >
                      {isRtl ? "التقدم الفوري للسي في للملف" : "Apply to this Position"}
                    </button>
                  </div>

                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Sliding Application form */}
      {selectedRole && (
        <section className="max-w-xl mx-auto px-4" id="application-form">
          <div className="bg-brand-blue border-2 border-brand-gold/30 rounded-xl p-8 space-y-6 relative overflow-hidden blueprint-grid">
            <div className="absolute top-0 inset-x-0 h-1 bg-brand-gold" />
            
            <div className="text-center space-y-2">
              <span className="text-[10px] text-brand-gold font-mono uppercase tracking-widest">SUBMIT CV FILE</span>
              <h3 className="text-base font-bold text-white font-sans">
                {isRtl ? "نموذج تقديم طلب التوظيف للريال جروب" : "Corporate Application Gate"}
              </h3>
              <p className="text-xs text-brand-gold-light font-semibold">
                ROLE: {isRtl ? selectedRole.titleAr : selectedRole.title}
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-emerald-950/20 border border-emerald-500/25 p-6 rounded-lg text-center space-y-2">
                <Sparkles className="h-8 w-8 text-emerald-400 mx-auto animate-bounce mb-2" />
                <h4 className="text-emerald-400 font-bold text-xs">{isRtl ? "تم إرسال مستندات تقديمك بنجاح!" : "Application Succeeded!"}</h4>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {isRtl 
                    ? "نشكرك لاهتمامك بالانضمام للريان جروب. سيتم فحص السي في ومراجعة المؤهلات من الإدارة الهندسية للتواصل معك هاتفياً."
                    : "Receipt is confirmed. Our engineering HR panel will review your B.Sc. credentials and contact your phone within 3 workdays."
                  }
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => setSelectedRole(null)}
                    className="text-xs text-brand-gold hover:text-brand-gold-light underline font-mono"
                  >
                    {isRtl ? "العودة لباقي الوظائف" : "Close Apply panel"}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-sans">
                <div className="space-y-1">
                  <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "الاسم الرباعي الكامل *" : "Your Name *"}</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ahmed Hassan Selim"
                    className="w-full bg-brand-navy border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "البريد الإلكتروني *" : "Email Address *"}</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="name@email.com"
                      className="w-full bg-brand-navy border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "الهاتف مباشر *" : "Direct Mobile Phone *"}</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g., 01070042063"
                      className="w-full bg-brand-navy border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "إجمالي سنوات الخبرة والتعليقات" : "Years of Experience / Technical Highlights"}</label>
                  <textarea 
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    placeholder="e.g., 4 years supervising batch plant slump adjustments at Hassan Allam sites."
                    rows={3}
                    className="w-full bg-brand-navy border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold font-sans"
                  />
                </div>

                {/* CV File upload (simulated drag & drop input) */}
                <div className="space-y-1">
                  <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "إرفاق ملف السيرة الذاتية PDF *" : "Attach CV File (PDF Format only) *"}</label>
                  <div className="border border-dashed border-brand-gold/30 hover:border-brand-gold rounded p-4 text-center cursor-pointer bg-brand-navy/60">
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={(e) => setFormData({...formData, cvFile: e.target.value})}
                      className="hidden" 
                      id="cv-upload"
                    />
                    <label htmlFor="cv-upload" className="cursor-pointer">
                      <p className="text-[11px] text-brand-gold font-semibold font-mono">
                        {formData.cvFile ? `${isRtl ? "تم إرفاق:" : "Attached:"} ${formData.cvFile.split('\\').pop()}` : `${isRtl ? "انقر لإرفاق ملف PDF للسي في" : "Drag CV or Click to choose PDF"}`}
                      </p>
                      <span className="text-[10px] text-gray-500 mt-0.5 block">Maximum file size: 5 MB</span>
                    </label>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full bg-brand-gold text-brand-blue font-bold py-3 text-xs uppercase tracking-wider rounded cursor-pointer hover:bg-brand-gold-light"
                  >
                    {isRtl ? "إرسال ملف طلب التوظيف" : "Submit File Application"}
                  </button>
                  <button 
                    type="button"
                    onClick={() => setSelectedRole(null)}
                    className="border border-brand-gold/20 hover:border-brand-gold text-gray-400 hover:text-white px-4 py-3 text-xs font-mono rounded cursor-pointer"
                  >
                    {isRtl ? "إلغاء لتقديم لاحقاً" : "Cancel"}
                  </button>
                </div>
              </form>
            )}

            <div className="flex items-center justify-between font-mono text-[9px] text-gray-500 pt-4 border-t border-brand-gold/10">
              <span className="flex items-center">encrypted HR dispatch protocol</span>
              <span>ALRAYAN CAREERS</span>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
