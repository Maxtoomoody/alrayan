/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Globe, Building2 } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Navbar({ lang, setLang, activePage, setActivePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'services', label: t.navServices },
    { id: 'capabilities', label: t.navCapabilities },
    { id: 'projects', label: t.navProjects },
    { id: 'quality', label: t.navQuality },
    { id: 'partners', label: t.navPartners },
    { id: 'coverage', label: t.navCoverage },
    { id: 'gallery', label: t.navGallery },
    { id: 'downloads', label: t.navDownloads },
    { id: 'careers', label: t.navCareers },
    { id: 'contact', label: t.navContact },
  ];

  const handleNavClick = (id: string) => {
    window.location.hash = id;
    setActivePage(id);
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const isRtl = lang === 'ar';

  return (
    <nav className="sticky top-0 z-50 bg-brand-blue border-b border-brand-gold/20 backdrop-blur-md bg-opacity-95 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Section */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="bg-brand-gold p-2 rounded-lg border border-brand-gold/30 hover:bg-brand-gold-light transition-all duration-300">
              <Building2 className="h-6 w-6 text-brand-blue" />
            </div>
            <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
              <span className="text-xl font-bold text-white tracking-wider font-sans group-hover:text-brand-gold transition-colors">
                {t.brandName}
              </span>
              <span className="text-[10px] text-brand-gold font-mono uppercase tracking-widest leading-none">
                {t.brandSub}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 justify-end flex-1 px-8">
            <div className={`flex ${isRtl ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-xs font-medium rounded transition-all duration-200 cursor-pointer ${
                    activePage === item.id
                      ? 'text-brand-blue bg-brand-gold border-b-2 border-brand-gold-light shadow-md font-bold'
                      : 'text-gray-300 hover:text-brand-gold hover:bg-brand-navy/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-xs font-medium text-brand-gold hover:text-brand-gold-light border border-brand-gold/30 px-3 py-1.5 rounded bg-brand-navy transition-all duration-300 cursor-pointer"
            >
              <Globe className="h-4 w-4" />
              <span>{t.langLabel}</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-blue text-xs font-bold px-4 py-2.5 rounded-md hover:brightness-110 shadow-lg tracking-wide transition-all cursor-pointer"
            >
              {t.ctaQuote}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-xs text-brand-gold border border-brand-gold/25 px-2 py-1 rounded bg-brand-navy"
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="text-[10px]">{t.langLabel}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-brand-gold hover:bg-brand-navy focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-brand-navy border-t border-brand-gold/15 transition-all">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2.5 rounded text-sm font-medium transition-colors ${
                  activePage === item.id
                    ? 'text-brand-blue bg-brand-gold font-semibold'
                    : 'text-gray-300 hover:text-brand-gold hover:bg-brand-blue/50'
                } ${isRtl ? 'text-right' : 'text-left'}`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 px-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full bg-brand-gold text-brand-blue text-center text-sm font-bold py-2.5 rounded hover:bg-brand-gold-light"
              >
                {t.ctaQuote}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
