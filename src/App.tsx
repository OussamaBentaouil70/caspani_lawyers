import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { CategoryPage } from './pages/CategoryPage';
import { SubpageTemplate } from './components/SubpageTemplate';
import { OurFirmPage } from './pages/OurFirmPage';
import { GetConsultationPage } from './pages/GetConsultationPage';
import { MarriageResidencyPage } from './pages/MarriageResidencyPage';
import { DigitalNomadVisaPage } from './pages/DigitalNomadVisaPage';
import { RetirementVisaPage } from './pages/RetirementVisaPage';
import { BusinessInvestorVisaPage } from './pages/BusinessInvestorVisaPage';
import { FamilyReunionVisaPage } from './pages/FamilyReunionVisaPage';
import { ChildResidencyPage } from './pages/ChildResidencyPage';
import { WorkVisasPage } from './pages/WorkVisasPage';
import { BrazilianCitizenshipPage } from './pages/BrazilianCitizenshipPage';
import { SERVICES_DATA, findCategoryBySlug, findSubpageBySlugs } from './data/servicesData';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync route with URL hash on load and changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (hash) {
        setCurrentRoute(hash);
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    window.location.hash = `#/${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route parser
  const renderContent = () => {
    if (currentRoute === 'home') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'services') {
      return <ServicesIndexPage onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'our-firm') {
      return <OurFirmPage onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'consultation') {
      return <GetConsultationPage onNavigate={handleNavigate} />;
    }

    // Check specialized page for Brazilian Citizenship
    if (
      currentRoute === 'services/brazilian-citizenship' ||
      currentRoute === 'services/brazilian-citizenship/' ||
      currentRoute === 'category/brazilian-citizenship' ||
      currentRoute === 'category/brazilian-citizenship/'
    ) {
      return <BrazilianCitizenshipPage onNavigate={handleNavigate} />;
    }

    // Check category route: e.g. "category/brazil-immigration"
    if (currentRoute.startsWith('category/')) {
      const catSlug = currentRoute.replace('category/', '');
      const category = findCategoryBySlug(catSlug);
      if (category) {
        return <CategoryPage category={category} onNavigate={handleNavigate} />;
      }
      return <ServicesIndexPage onNavigate={handleNavigate} />;
    }

    // Check specialized subpage for Marriage Permanent Residency
    if (
      currentRoute === 'services/immigration/permanent-residency-marriage' ||
      currentRoute === 'services/immigration/permanent-residency-marriage/' ||
      currentRoute === 'subpage/brazil-immigration/marriage-permanent-residency'
    ) {
      return <MarriageResidencyPage onNavigate={handleNavigate} />;
    }

    // Check specialized subpage for Digital Nomad Visa
    if (
      currentRoute === 'services/immigration/digital-nomad-visa' ||
      currentRoute === 'services/immigration/digital-nomad-visa/' ||
      currentRoute === 'subpage/brazil-immigration/digital-nomad-visa'
    ) {
      return <DigitalNomadVisaPage onNavigate={handleNavigate} />;
    }

    // Check specialized subpage for Retirement Visa
    if (
      currentRoute === 'services/immigration/retirement-visa' ||
      currentRoute === 'services/immigration/retirement-visa/' ||
      currentRoute === 'subpage/brazil-immigration/retirement-visa'
    ) {
      return <RetirementVisaPage onNavigate={handleNavigate} />;
    }

    // Check specialized subpage for Business Investor Visa
    if (
      currentRoute === 'services/immigration/company-investment-visa-brazil' ||
      currentRoute === 'services/immigration/company-investment-visa-brazil/' ||
      currentRoute === 'services/immigration/business-investment-visa' ||
      currentRoute === 'services/immigration/business-investment-visa/' ||
      currentRoute === 'subpage/brazil-immigration/business-investment-visa' ||
      currentRoute === 'subpage/brazil-immigration/company-investment-visa-brazil'
    ) {
      return <BusinessInvestorVisaPage onNavigate={handleNavigate} />;
    }

    // Check specialized subpage for Family Reunion Visa
    if (
      currentRoute === 'services/immigration/family-reunion-visa' ||
      currentRoute === 'services/immigration/family-reunion-visa/' ||
      currentRoute === 'services/immigration/brazil-family-reunion-visa-specialists' ||
      currentRoute === 'services/immigration/brazil-family-reunion-visa-specialists/' ||
      currentRoute === 'subpage/brazil-immigration/brazil-family-reunion-visa-specialists' ||
      currentRoute === 'subpage/brazil-immigration/family-reunion-visa'
    ) {
      return <FamilyReunionVisaPage onNavigate={handleNavigate} />;
    }

    // Check specialized subpage for Residency Through a Brazilian Child
    if (
      currentRoute === 'services/immigration/permanent-residency-childbirth' ||
      currentRoute === 'services/immigration/permanent-residency-childbirth/' ||
      currentRoute === 'services/immigration/residency-through-a-brazilian-child' ||
      currentRoute === 'services/immigration/residency-through-a-brazilian-child/' ||
      currentRoute === 'subpage/brazil-immigration/residency-through-a-brazilian-child' ||
      currentRoute === 'subpage/brazil-immigration/permanent-residency-childbirth'
    ) {
      return <ChildResidencyPage onNavigate={handleNavigate} />;
    }

    // Check specialized subpage for Work Visas & Employment Authorization
    if (
      currentRoute === 'services/immigration/work-visas-brazil' ||
      currentRoute === 'services/immigration/work-visas-brazil/' ||
      currentRoute === 'services/immigration/work-visas' ||
      currentRoute === 'services/immigration/work-visas/' ||
      currentRoute === 'subpage/brazil-immigration/work-visas' ||
      currentRoute === 'subpage/brazil-immigration/work-visas-brazil'
    ) {
      return <WorkVisasPage onNavigate={handleNavigate} />;
    }

    // Check subpage route: e.g. "subpage/brazil-immigration/digital-nomad-visa"
    if (currentRoute.startsWith('subpage/')) {
      const parts = currentRoute.replace('subpage/', '').split('/');
      if (parts.length >= 2) {
        const [catSlug, subSlug] = parts;
        const result = findSubpageBySlugs(catSlug, subSlug);
        if (result) {
          return (
            <SubpageTemplate
              category={result.category}
              subpage={result.subpage}
              onNavigate={handleNavigate}
            />
          );
        }
      }
      return <ServicesIndexPage onNavigate={handleNavigate} />;
    }

    // Fallback to home
    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9fb] text-[#1a1c1d]">
      {/* Top Header */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 pt-20">
        {renderContent()}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* Back to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full bg-[#0f1e36] hover:bg-[#775a19] text-white shadow-lg flex items-center justify-center transition-all cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating WhatsApp Quick Concierge */}
        <a
          href="https://wa.me/5541998247700"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat directly on WhatsApp: +55 (41) 99824-7700"
          className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-full shadow-2xl hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300"
        >
          <span className="material-symbols-outlined text-[24px]">chat</span>
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline-block pr-1">
            WhatsApp Counsel
          </span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#fed488]"></span>
          </span>
        </a>
      </div>
    </div>
  );
}
