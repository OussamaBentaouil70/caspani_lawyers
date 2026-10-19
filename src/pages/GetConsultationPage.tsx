import React from 'react';
import { ConsultationForm } from '../components/ConsultationForm';
import { ShieldCheck, MapPin, Phone, Mail, Clock, CheckCircle2, MessageSquare, Video } from 'lucide-react';

interface GetConsultationPageProps {
  onNavigate: (route: string) => void;
}

export const GetConsultationPage: React.FC<GetConsultationPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* Hero Header */}
      <section className="relative w-full bg-[#0f1e36] text-white py-14 lg:py-20 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#775a19]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full bg-[#e9c176]/10 blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#fed488] border border-[#c5a059]/40 backdrop-blur-sm mb-4 shadow-sm mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#fed488] animate-pulse"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
              CONFIDENTIAL CASE INTAKE
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Book Your Legal Consultation
          </h1>

          <p className="text-sm sm:text-base text-[#edeef0] leading-relaxed">
            Schedule a strategic assessment with Erica Montarini Gaspani (OAB/PR 58.420). We analyze your documentation, identify potential legal pitfalls, and outline a clear action plan under Brazilian law.
          </p>
        </div>
      </section>

      {/* Main Intake Section */}
      <section className="w-full py-16 bg-[#f9f9fb]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Direct Consultation Form */}
            <div className="lg:col-span-7">
              <ConsultationForm
                id="dedicated-consultation-form"
                title="Legal Consultation Dossier"
                subtitle="Please provide preliminary case information for your attorney"
                presetService="Brazilian Visas & Residence Permits"
              />
            </div>

            {/* Right Column: Contact Details, WhatsApp Concierge & Procedure */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* WhatsApp Fast-Track Card */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0f1e36]">
                      Immediate WhatsApp Assistance
                    </h3>
                    <p className="text-xs text-[#44474d]">Direct legal concierge for foreign clients</p>
                  </div>
                </div>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  For urgent property deposits, impending visa expiration dates, or swift questions, contact our legal assistant directly on WhatsApp.
                </p>
                <a
                  href="https://wa.me/5541998247700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Open WhatsApp: +55 (41) 99824-7700</span>
                </a>
              </div>

              {/* Consultation Format Options */}
              <div className="bg-white rounded-xl p-6 border border-[#e2e2e4] shadow-xs">
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-4">
                  How We Conduct Consultations
                </h3>
                <div className="space-y-3 text-xs text-[#44474d]">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f9f9fb] border border-[#e8e8ea]">
                    <Video className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0f1e36] block">High-Definition Video Conference</strong>
                      <span>Available worldwide via Google Meet, Zoom, or Microsoft Teams with screen sharing for contracts.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f9f9fb] border border-[#e8e8ea]">
                    <MessageSquare className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0f1e36] block">Direct WhatsApp & Phone Channel</strong>
                      <span>Voice and text communication for clients on the move or across shifting time zones.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f9f9fb] border border-[#e8e8ea]">
                    <MapPin className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0f1e36] block">In-Person Chambers (By Appointment)</strong>
                      <span>Formal meeting facilities in Curitiba (Paraná) and Rio de Janeiro.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information & Hours */}
              <div className="bg-white rounded-xl p-6 border border-[#e2e2e4] shadow-xs">
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-3">
                  Direct Office Channels
                </h3>
                <div className="space-y-2.5 text-xs text-[#44474d]">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#775a19]" />
                    <a href="mailto:contact@caspanilawyers.com" className="hover:text-[#775a19]">
                      contact@caspanilawyers.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#775a19]" />
                    <span>+55 (41) 99824-7700</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#775a19]" />
                    <span>Mon – Fri: 09:00 – 18:00 (BRT / UTC-3)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
