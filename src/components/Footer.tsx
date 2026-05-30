/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Building2, Phone, Mail, Globe, ArrowRight, Download } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface FooterProps {
  lang: Language;
  setActivePage: (p: string) => void;
}

export default function Footer({ lang, setActivePage }: FooterProps) {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const handleNav = (page: string) => {
    window.location.hash = page;
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brand-blue border-t border-brand-gold/15 pt-16 pb-12 overflow-hidden blueprint-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Company Description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNav('home')}>
              <div className="bg-brand-gold p-1.5 rounded">
                <Building2 className="h-5 w-5 text-brand-blue" />
              </div>
              <span className="text-lg font-bold text-white font-sans">{t.brandName}</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              {isRtl 
                ? "شريكك الإسنادي المتكامل لإنتاج الخرسانة الجاهزة والطوب الإسمنتي، مدعوماً بأسطول نقل لوجستي ومقاولات عامة متفوقة لمشاريع مصر القومية بالساحل الشمالي والجمهورية."
                : "Your integrated elite partner for high-output ready-mix concrete, cement masonry, and general contracting for Egypt's flagship developments."
              }
            </p>
            <div className="pt-2">
              <button 
                onClick={() => handleNav('downloads')}
                className="flex items-center space-x-2 text-xs bg-brand-navy border border-brand-gold/25 hover:border-brand-gold/80 px-4 py-2.5 rounded text-brand-gold font-mono hover:text-white transition-all cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span className="text-[11px]">{t.ctaDownloadProfile}</span>
              </button>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-mono border-l-2 border-brand-gold pl-2 mb-4">
              {isRtl ? "خدمات متكاملة" : "Core Services"}
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { name: isRtl ? "الخرسانة الجاهزة" : "Ready-Mix Concrete", id: "ready-mix" },
                { name: isRtl ? "الطوب الإسمنتي" : "Cement Blocks", id: "cement-blocks" },
                { name: isRtl ? "اللوجستيات ومضخات الصب" : "Logistics & Pumping Fleet", id: "logistics-fleet" },
                { name: isRtl ? "التوريدات والتركيبات" : "Supply & Installation", id: "supply-installation" },
                { name: isRtl ? "عقود المقاولات العامة" : "General Contracting", id: "general-contracting" }
              ].map((s) => (
                <li key={s.id}>
                  <button 
                    onClick={() => handleNav('services')} 
                    className="text-gray-400 hover:text-brand-gold transition-colors flex items-center group cursor-pointer"
                  >
                    <ArrowRight className={`h-3 w-3 ${isRtl ? 'rotate-180 ml-1.5' : 'mr-1.5'} text-brand-gold/50 group-hover:translate-x-1 transition-transform`} />
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Operational Sectors */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-mono border-l-2 border-brand-gold pl-2 mb-4">
              {isRtl ? "قطاعات التشغيل الرئيسية" : "Operational Sectors"}
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { name: isRtl ? "أبراج العلمين الجديدة" : "The New Alamein Skyline", id: "alamein" },
                { name: isRtl ? "البنية التحتية والضبعة" : "El Dabaa & Infrastructure", id: "infrastructure" },
                { name: isRtl ? "منطقة مارينا والساحل" : "Marina Resorts & Coastline", id: "resorts" },
                { name: isRtl ? "المشروعات القومية" : "National Mega-Projects", id: "home" }
              ].map((sec, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => handleNav('projects')} 
                    className="text-gray-400 hover:text-brand-gold transition-colors flex items-center group cursor-pointer"
                  >
                    <ArrowRight className={`h-3 w-3 ${isRtl ? 'rotate-180 ml-1.5' : 'mr-1.5'} text-brand-gold/50 group-hover:translate-x-1 transition-transform`} />
                    {sec.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Channels */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-mono border-l-2 border-brand-gold pl-2 mb-4">
              {isRtl ? "تواصل مباشر" : "Direct Contact"}
            </h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-brand-gold mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-mono">HOTLINE / SALES</span>
                  <span className="text-white font-mono">01080016516</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-brand-gold mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-mono">OPERATIONS / MOBILITY</span>
                  <span className="text-white font-mono">01070042063</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-brand-gold mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-mono">OFFICIAL PROCUREMENT</span>
                  <span className="text-white hover:text-brand-gold transition-colors">sales@alrayan-group.net</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Globe className="h-4 w-4 text-brand-gold mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-mono">COOPERATIVE DOMAIN</span>
                  <span className="text-white">alrayan-group.com</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-brand-gold/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {TRANSLATIONS[lang].brandName}. {TRANSLATIONS[lang].rightsReserved}
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <button onClick={() => handleNav('quality')} className="hover:text-brand-gold cursor-pointer">QA/QC Vetted</button>
            <span>&bull;</span>
            <button onClick={() => handleNav('downloads')} className="hover:text-brand-gold cursor-pointer">B2B Documentation</button>
            <span>&bull;</span>
            <button onClick={() => handleNav('careers')} className="hover:text-brand-gold cursor-pointer">We are Hiring</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
