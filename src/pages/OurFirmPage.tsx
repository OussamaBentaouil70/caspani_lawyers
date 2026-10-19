import React from 'react';
import { ShieldCheck, Scale, Award, Globe, Building2, UserCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface OurFirmPageProps {
  onNavigate: (route: string) => void;
}

export const OurFirmPage: React.FC<OurFirmPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* 1. HERO SECTION (Without reservation form, as specified in instructions) */}
      <section className="relative w-full bg-[#0f1e36] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#775a19]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#e9c176]/10 blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#fed488] border border-[#c5a059]/40 backdrop-blur-sm mb-4 shadow-sm mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#fed488] animate-pulse"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
              OUR FIRM & LEADERSHIP
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6">
            Caspani & Montarini Lawyers — Advocacia Internacional
          </h1>

          <p className="text-base sm:text-lg text-[#edeef0] leading-relaxed mb-8 max-w-3xl mx-auto">
            A Brazilian boutique law firm bridging international standards with Brazilian legal precision. We protect foreign individuals, multi-jurisdiction families, and overseas investors navigating visas, citizenship, real estate transactions, and complex cross-border assets.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('consultation')}
              className="bg-[#fed488] hover:bg-[#775a19] text-[#785a1a] hover:text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              Schedule Consultation
            </button>
            <a
              href="https://wa.me/5541998247700"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-[#c5a059]/40 transition-colors inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px] text-[#fed488]">chat</span>
              <span>Contact via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER PROFILE & DUAL LICENSURE SECTION */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px]">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#fed488]/40 pointer-events-none"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#e2e2e4]">
                  <img
                    alt="Erica Montarini Gaspani - Founder & Brazilian Attorney"
                    className="w-full h-auto object-cover object-top aspect-[3/4]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJsUmL67soV84dyFH96N8oM-3bQn0Lk44fXqt7sTDPE_hOMDEkZttX4KKruMmreaBTNJJrQCQvyHYTQXAi1G-vR7-nqhj50nFkRDuSPIiWx2tqfQBrBeIetVh9Xbtqt-oBdM72Adp-pEIlRjgN6KX05WBmjJ5O8QrOYA-SS-8F9TuRznAJ4w5hqIsOofChUJeJILrYEgxj9X7cRvw2mRNjYWqZwpeHypWOxAAXRxaQPaMvixoQHSAO"
                  />
                  <div className="p-4 bg-[#0f1e36] text-white">
                    <p className="font-serif text-lg font-bold">Erica Montarini Gaspani</p>
                    <p className="text-xs text-[#fed488] font-mono">OAB/PR 58.420 • CRECI-PR F57569</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Column */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[2px] bg-[#775a19]"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19]">
                  MEET THE FOUNDER
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-6">
                Erica Montarini Gaspani
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                <p>
                  <strong>Erica Montarini Gaspani</strong> is a licensed Brazilian attorney, licensed real estate agent and founder of Montarini & Caspani Lawyers, providing legal services to international clients, individuals, families, investors, and businesses throughout Brazil.
                </p>
                <p>
                  With extensive cross-border legal experience, she assists foreign clients with immigration, visas, residency, Brazilian citizenship, real estate transactions, estate planning, and cross-border litigation.
                </p>
                <p>
                  Holding rare dual licensure as both a Brazilian attorney (OAB/PR 58.420) and a registered real estate broker (CRECI-PR F57569), she provides seamless oversight for property investors — combining contractual safeguards with real-world real estate transaction expertise.
                </p>
              </div>

              {/* Core Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#e8e8ea]">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f9f9fb] border border-[#e8e8ea]">
                  <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#0f1e36] block">Direct Senior Access</span>
                    <span className="text-xs text-[#44474d]">You communicate directly with your attorney, not junior paralegals.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f9f9fb] border border-[#e8e8ea]">
                  <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#0f1e36] block">Multilingual Fluency</span>
                    <span className="text-xs text-[#44474d]">English, Portuguese, Spanish, Italian, French & Arabic assistance.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PHILOSOPHY & WHY WORK WITH US */}
      <section className="w-full bg-[#f3f3f5] py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              Why International Clients Choose Us
            </h2>
            <p className="text-sm sm:text-base text-[#44474d]">
              We eliminate bureaucratic friction and protect foreign assets with unwavering professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-[#e2e2e4] shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-[#0f1e36] text-[#fed488] flex items-center justify-center mb-6">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-3">
                Brazilian Legal Expertise
              </h3>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
                Registered under the Federal Bar Association of Brazil (OAB/PR 58.420). We operate strictly within the legal code, providing bulletproof due diligence, contracts, and administrative representations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#e2e2e4] shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-[#0f1e36] text-[#fed488] flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-3">
                Global Remote Assistance
              </h3>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
                Access Brazilian legal services from anywhere in the world. We handle powers of attorney, digital signatures, bank setups, and real estate purchases completely remotely.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#e2e2e4] shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-[#0f1e36] text-[#fed488] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-3">
                100% Confidentiality
              </h3>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
                All communications and shared documents are shielded by strict attorney-client privilege and LGPD data protection guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OFFICE HUBS & NATIONWIDE COVERAGE */}
      <section className="w-full bg-white py-16 border-t border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-[#0f1e36] text-white rounded-2xl p-8 lg:p-12 border border-[#c5a059]/40 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#fed488] block mb-2">
                NATIONAL & INTERNATIONAL REACH
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-3">
                Chambers in Curitiba & Rio de Janeiro — Serving All 27 Brazilian States
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                From federal matters in Brasília before the STJ and Federal Police to property closings in São Paulo, Rio, Bahia, Santa Catarina, and Paraná.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate('consultation')}
                className="bg-[#fed488] hover:bg-[#775a19] text-[#785a1a] hover:text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
