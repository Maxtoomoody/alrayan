/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TRANSLATIONS } from '../data';
import { Phone, Mail, Globe, HardHat, FileText, CheckCircle2, AlertCircle, FileUp, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
}

export default function ContactView({ lang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    jobTitle: '',
    phone: '',
    email: '',
    location: '',
    service: 'ready-mix',
    quantity: '',
    message: '',
    boqFile: ''
  });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const departmentContacts = [
    {
      title: "Sales & Partnerships",
      titleAr: "إدارة المبيعات والشراكات الإستراتيجية",
      email: "sales@alrayan-group.net",
      desc: "For ready-mix contracts, cement blocks procurement, and general contracting quotes.",
      descAr: "لعقود توريدات الخرسانة الكثيفة، وطلبات شراء الطوب البلوك، والاتفاقات الإسنادية."
    },
    {
      title: "Technical Engineering Department",
      titleAr: "الإدارة الفنية ومختبرات الجودة الهندسية",
      email: "hane@alrayan-group.net",
      desc: "Contact our chief materials scientist regarding custom concrete recipes and test cylinders validation.",
      descAr: "للاستفسارات ومطابقة مواصفات الخلط والكسر المخبري والأكاديمي وإرسال التعديلات."
    },
    {
      title: "General Inquiries Information",
      titleAr: "الاستعلامات العامة وخدمات المستندات",
      email: "info@alrayan-group.net",
      desc: "Corporate communications, vendor listings, and technical credential sheets queries.",
      descAr: "للاتصالات العامة، وتراخيص التشغيل، ومقترحات التعاون واللوائح الإدارية للشركة."
    }
  ];

  const directLines = [
    { title: "Execution & Fleet Dispatch", titleAr: "إدارة تشغيل حركة الأسطول والصب", phone: "01070042063" },
    { title: "Direct Sales & Procurement Hotline", titleAr: "الخط الساخن للمبيعات والتوريد المباشر", phone: "01080016516" },
    { title: "Stores & Raw Materials Compound", titleAr: "إدارة المخازن والمستودعات والمحاجر", phone: "01080016517" },
    { title: "Quality Control & Aggregate validation", titleAr: "إدارة وضبط الجودة واختبارات الضغط", phone: "01080016518" }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.company && formData.email) {
      setIsSubmitSuccess(true);
    }
  };

  const handleResetForm = () => {
    setIsSubmitSuccess(false);
    setFormData({
      name: '',
      company: '',
      jobTitle: '',
      phone: '',
      email: '',
      location: '',
      service: 'ready-mix',
      quantity: '',
      message: '',
      boqFile: ''
    });
  };

  return (
    <div className="py-12 pb-20 space-y-24 animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-4xl mx-auto px-4">
        <span className="text-xs font-semibold text-brand-gold font-mono tracking-widest uppercase">
          {t.navContact}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {isRtl ? "تواصل مباشر مع الإدارات الفنية والتشغيلية" : "Connect with Sales & Engineering"}
        </h1>
        <p className="text-xs text-gray-400 font-mono tracking-wider uppercase max-w-2xl mx-auto">
          {isRtl 
            ? "ندعم المقاولين ومهندسي المشروعات بالقنوات التنسيقية المناسبة لمنع تأخر التشييد" 
            : "Direct hotlines, departmental emails and secure procurement requisition portals in Egypt"
          }
        </p>
        <div className="w-16 h-1 bg-brand-gold mx-auto rounded" />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Department Contact cards and lines (2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Direct Telephone Hotline List */}
            <div className="space-y-4 bg-brand-navy p-6 rounded-lg border border-brand-gold/15">
              <h3 className="text-xs text-brand-gold font-mono tracking-widest uppercase border-b border-brand-gold/10 pb-2 flex items-center">
                <Phone className="h-4 w-4 mr-2 text-brand-gold shrink-0 animate-pulse" />
                <span>{isRtl ? "أرقام وهواتف الإدارات التنفيذية" : "DIRECT TELEPHONE HOTLINES"}</span>
              </h3>
              
              <div className="space-y-3 font-mono">
                {directLines.map((line, idx) => (
                  <div key={idx} className="flex justify-between items-start text-xs border-b border-brand-gold/5 pb-2.5 last:border-0 last:pb-0">
                    <span className="text-gray-400 font-sans">{isRtl ? line.titleAr : line.title}</span>
                    <span className="text-white hover:text-brand-gold-light transition-all font-bold tracking-wider">{line.phone}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Emails Panel */}
            <div className="space-y-6">
              
              <div className="border-b border-brand-gold/15 pb-2">
                <h3 className="text-xs text-brand-gold font-mono tracking-widest uppercase">
                  {isRtl ? "صناديق البريد الرسمي للإدارات" : "DEPARTMENTAL DIRECTORY"}
                </h3>
              </div>

              <div className="space-y-6">
                {departmentContacts.map((contact, idx) => (
                  <div key={idx} className="group border border-brand-gold/10 p-5 rounded-lg bg-brand-navy/60 hover:border-brand-gold/30 transition-all flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-brand-gold shrink-0 mt-1 mr-2" />
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold text-white uppercase font-mono group-hover:text-brand-gold transition-colors">
                        {isRtl ? contact.titleAr : contact.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                        {isRtl ? contact.descAr : contact.desc}
                      </p>
                      <span className="text-brand-gold-light font-mono text-[11px] block select-all">
                        {contact.email}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Website Portal validation */}
              <div className="flex items-center space-x-2 text-xs font-mono text-gray-500 justify-center">
                <Globe className="h-4 w-4 text-brand-gold" />
                <span>OFFICIAL PORTAL: alrayan-group.com</span>
              </div>

            </div>

          </div>

          {/* Secure B2B Procurement Form (3 cols on desktop) */}
          <div className="lg:col-span-3 bg-brand-navy border border-brand-gold/15 rounded-xl p-8 relative overflow-hidden blueprint-grid">
            <div className="absolute top-0 inset-x-0 h-1 bg-brand-gold" />
            
            <div className="space-y-2 mb-8">
              <span className="text-[10px] text-brand-gold font-mono uppercase tracking-widest block font-bold">B2B SECURE ENVELOPE</span>
              <h3 className="text-lg font-bold text-white uppercase">
                {isRtl ? "طلب مقايسة وإرسال كميات مسبقة" : "Request Quote / Submit Requisition"}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans mt-1">
                {isRtl 
                  ? "قم بتدوين كميات المواد الخرسانية أو الطوب ونطاق موقع الفيلات أو الأبراج مرفقاً ملف المقايسات BOQ لفحصها فورياً."
                  : "Submit aggregate requirements, mix properties types, estimated quantity, and upload layouts or Bill of Quantities (BOQ) files for immediate calculation."
                }
              </p>
            </div>

            {isSubmitSuccess ? (
              <div className="bg-emerald-950/20 border border-emerald-500/25 p-8 rounded-lg text-center space-y-4 animate-fade-in">
                <Sparkles className="h-10 w-10 text-emerald-400 mx-auto animate-bounce mb-2" />
                <h4 className="text-emerald-400 font-bold font-sans text-sm">{isRtl ? "تم إرسال طلب المقايسة بنجاح!" : "Requisition Submitted Successfully!"}</h4>
                <p className="text-xs text-gray-300 font-sans leading-relaxed max-w-md mx-auto">
                  {isRtl 
                    ? "نشكرك على مراجعة الشراكة مع الريان جروب. سيتم تكليف مهندس فني من قطاع المبيعات لدراسة المقايسة وبحث زمن صب اللبشة وتزويدك بتقرير فني خلال ساعات."
                    : "Your technical request has been securely dispatched to our Sales division. An Alrayan engineering manager will review your BOQ files and phone you within 4 hours."
                  }
                </p>
                <div className="pt-6">
                  <button 
                    onClick={handleResetForm}
                    className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-bold px-6 py-2.5 rounded text-xs uppercase cursor-pointer"
                  >
                    {isRtl ? "إرسال مقايسة جديدة" : "Submit Another Requisition"}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-sans">
                
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "الاسم الثنائي الكامل *" : "Your Name *"}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g., Eng. Ahmed Al-Shorouk"
                      className="w-full bg-brand-blue border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "الشركة / المؤسسة المطور العقاري *" : "Company Name *"}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="e.g., Constec Contracting"
                      className="w-full bg-brand-blue border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>

                {/* Job Title & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "المسمى الوظيفي" : "Your Job Title"}</label>
                    <input 
                      type="text" 
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                      placeholder="e.g., Procurement Director"
                      className="w-full bg-brand-blue border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "رقم الهاتف الفوري للمتابعة *" : "Phone Number *"}</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g., 01080016516"
                      className="w-full bg-brand-blue border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>

                {/* Work Email & Project Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "البريد الإلكتروني للعمل *" : "Work Email *"}</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="name@company.com"
                      className="w-full bg-brand-blue border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "موقع ومحافظة المشروع *" : "Project Location Area *"}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="e.g., New Alamein, Tower 4 zone"
                      className="w-full bg-brand-blue border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>

                {/* Required service & Estimated quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                  <div className="space-y-1">
                    <label className="text-gray-400 uppercase text-[10px] block">{isRtl ? "نوع الخدمة أو المادة المطلوبة" : "Required Material / Asset"}</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-brand-blue border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold font-sans"
                    >
                      <option value="ready-mix">{isRtl ? "الخرسانة الجاهزة المعتمدة" : "Ready-Mix Concrete"}</option>
                      <option value="cement-blocks">{isRtl ? "الطوب البلوك الإسمنتي" : "Cement Blocks Production"}</option>
                      <option value="logistics">{isRtl ? "تأجير المضخات والأسطول" : "Pumping Rent & Logistics"}</option>
                      <option value="supply-install">{isRtl ? "التوريد والتركيب الفوري" : "Supply & Placement"}</option>
                      <option value="contracting">{isRtl ? "تنفيذ حفر خرسانة مسلحة" : "General Contracting"}</option>
                    </select>
                  </div>
                  <div className="space-y-1 font-sans">
                    <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "الكمية التقديرية بالـ م³ أو حجر *" : "Estimated Quantity Needed *"}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      placeholder="e.g., 45,000 m³ or 250,000 units"
                      className="w-full bg-brand-blue border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>

                {/* Comments / Message */}
                <div className="space-y-1">
                  <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "توضيحات إضافية ومقايسات الخلط" : "Message / Additional Special recipes"}</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="e.g., High salinity-resistance C45 mix with silica fume is required for seaside lagoon foundation pours."
                    rows={3}
                    className="w-full bg-brand-blue border border-brand-gold/20 rounded p-3 text-white focus:outline-none focus:border-brand-gold font-sans"
                  />
                </div>

                {/* Upload BOQ file (simulated input) */}
                <div className="space-y-1">
                  <label className="text-gray-400 font-mono uppercase text-[10px] block">{isRtl ? "إرفاق ملف المقايسة BOQ / الرسومات والخرائط الهندسية *" : "Upload Bill of Quantities (BOQ) or Drawings *"}</label>
                  <div className="border border-dashed border-brand-gold/20 hover:border-brand-gold rounded p-4 text-center cursor-pointer bg-brand-blue/30 leading-tight">
                    <input 
                      type="file" 
                      accept=".pdf,.xls,.xlsx,.dwg"
                      required
                      onChange={(e) => setFormData({...formData, boqFile: e.target.value})}
                      className="hidden" 
                      id="boq-upload"
                    />
                    <label htmlFor="boq-upload" className="cursor-pointer">
                      <p className="text-[11px] text-brand-gold font-mono font-semibold flex items-center justify-center">
                        <FileUp className="h-4 w-4 mr-1.5" />
                        <span>{formData.boqFile ? `${isRtl ? "تم إرفاق:" : "Selected:"} ${formData.boqFile.split('\\').pop()}` : `${isRtl ? "انقر لإرفاق جدول المقايسات PDF / Excel / Autocad" : "Click to select BOQ worksheet"}`}</span>
                      </p>
                      <span className="text-[9px] text-gray-500 mt-0.5 block">Supported file formats: PDF, DWG, EXCEL. Maximum size: 15 MB</span>
                    </label>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-blue font-bold py-3.5 text-xs uppercase tracking-wider rounded cursor-pointer transition-all hover:shadow-brand-gold/15 shadow-xl"
                  >
                    {isRtl ? "إرسال مقايسة العمل الفني الفوري" : "Dispatch Secured Quote Requisition"}
                  </button>
                </div>

              </form>
            )}

            <div className="flex items-center justify-between font-mono text-[9px] text-gray-500 pt-4 border-t border-brand-gold/10">
              <span className="flex items-center"><AlertCircle className="h-3 w-3 mr-1" /> secure military/civil data encryption active</span>
              <span>ALRAYAN GROUP PORTAL</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
