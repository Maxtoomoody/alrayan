/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Imposing lazy/modular structures of our 12 page views
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import CapabilitiesView from './components/CapabilitiesView';
import ProjectsView from './components/ProjectsView';
import QualityView from './components/QualityView';
import PartnersView from './components/PartnersView';
import CoverageView from './components/CoverageView';
import GalleryView from './components/GalleryView';
import DownloadsView from './components/DownloadsView';
import CareersView from './components/CareersView';
import ContactView from './components/ContactView';

import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activePage, setActivePage] = useState<string>('home');

  // Handle URL Hash based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      // In case we have sub-routing like #services/ready-mix, map standard navigation active tab to services
      const mapBasePage = hash.split('/')[0];
      setActivePage(mapBasePage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on initial load
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderActiveView = () => {
    switch (activePage) {
      case 'home':
        return <HomeView lang={lang} setActivePage={setActivePage} />;
      case 'about':
        return <AboutView lang={lang} />;
      case 'services':
        return <ServicesView lang={lang} setActivePage={setActivePage} />;
      case 'capabilities':
        return <CapabilitiesView lang={lang} />;
      case 'projects':
        return <ProjectsView lang={lang} />;
      case 'quality':
        return <QualityView lang={lang} />;
      case 'partners':
        return <PartnersView lang={lang} />;
      case 'coverage':
        return <CoverageView lang={lang} />;
      case 'gallery':
        return <GalleryView lang={lang} />;
      case 'downloads':
        return <DownloadsView lang={lang} />;
      case 'careers':
        return <CareersView lang={lang} />;
      case 'contact':
        return <ContactView lang={lang} />;
      default:
        return <HomeView lang={lang} setActivePage={setActivePage} />;
    }
  };

  const isRtl = lang === 'ar';

  return (
    <div 
      className="min-h-screen flex flex-col justify-between bg-brand-blue selection:bg-brand-gold selection:text-brand-blue animate-fade-in"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Header section includes bilingual controls */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        activePage={activePage} 
        setActivePage={setActivePage} 
      />

      {/* Primary content router block */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Shared structured corporate footer */}
      <Footer 
        lang={lang} 
        setActivePage={setActivePage} 
      />
    </div>
  );
}
