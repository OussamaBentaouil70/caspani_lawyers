import React, { useState } from 'react';
import { ShieldCheck, Send, CheckCircle2, Lock, User, Mail, Phone, Scale } from 'lucide-react';

interface ConsultationFormProps {
  id?: string;
  title?: string;
  subtitle?: string;
  presetService?: string;
  theme?: 'light' | 'card';
  compact?: boolean;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  id = 'consultation-form',
  title = 'Request Legal Consultation',
  subtitle = 'Direct case evaluation & response within 24 hours',
  presetService = '',
  theme = 'card',
  compact = false
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    service: presetService || '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Caspani Lawyers, my name is ${formData.fullName}. I would like to inquire about: ${formData.service || 'Legal Services'}.\nMy email: ${formData.email}\nPhone: ${formData.countryCode} ${formData.phone}\nDetails: ${formData.message}`
    );
    window.open(`https://wa.me/5541998247700?text=${text}`, '_blank');
  };

  if (submitted) {
    return (
      <div className="bg-white text-[#1a1c1d] rounded-xl p-6 lg:p-8 shadow-2xl border border-[#c5a059]/40 text-center animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#f3ede0] text-[#775a19] mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-9 h-9 text-[#775a19]" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-2">Consultation Request Received</h3>
        <p className="text-[#44474d] text-sm leading-relaxed mb-6">
          Thank you, <strong className="text-[#0f1e36]">{formData.fullName}</strong>. A licensed bilingual Brazilian attorney will review your dossier and contact you at <span className="underline decoration-[#c5a059]">{formData.email}</span> within 24 business hours.
        </p>

        <div className="p-4 bg-[#f9f9fb] rounded-lg border border-[#e2e2e4] mb-6 text-left text-xs text-[#44474d] space-y-1">
          <p><strong className="text-[#0f1e36]">Selected Matter:</strong> {formData.service || 'Brazilian Cross-Border Consultation'}</p>
          <p><strong className="text-[#0f1e36]">Contact Phone:</strong> {formData.countryCode} {formData.phone}</p>
          <p><strong className="text-[#0f1e36]">Status:</strong> Assigned for Preliminary Review (OAB/PR 58.420)</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleWhatsAppRedirect}
            type="button"
            className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-4 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Speed Up Review via WhatsApp Concierge</span>
          </button>
          <button
            onClick={() => setSubmitted(false)}
            type="button"
            className="text-xs text-[#775a19] hover:underline"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={`bg-white text-[#1a1c1d] rounded-xl ${compact ? 'p-5' : 'p-6 lg:p-8'} shadow-2xl border border-[#c5a059]/30 relative`}>
      <div className="flex items-start justify-between mb-4 pb-3 border-b border-[#e8e8ea]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Scale className="w-5 h-5 text-[#775a19]" />
            <h3 className="font-serif text-xl lg:text-2xl font-semibold text-[#0f1e36]">{title}</h3>
          </div>
          <p className="text-xs text-[#44474d]">{subtitle}</p>
        </div>
        <span className="bg-[#edeef0] text-[#775a19] px-2.5 py-1 rounded text-[11px] font-mono font-semibold uppercase tracking-wider border border-[#c5a059]/30 shrink-0">
          OAB Certified
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[11px] font-semibold text-[#44474d] uppercase tracking-wider mb-1" htmlFor={`${id}-fullName`}>
            Full Legal Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-[#75777e]" />
            <input
              id={`${id}-fullName`}
              required
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Dr. Julian Vance or Full Name"
              className="w-full bg-[#f3f3f5] pl-9 pr-3 py-2.5 rounded-lg border border-[#c5c6ce] text-sm text-[#1a1c1d] placeholder:text-[#75777e] focus:outline-none focus:border-[#775a19] focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-[#44474d] uppercase tracking-wider mb-1" htmlFor={`${id}-email`}>
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-[#75777e]" />
            <input
              id={`${id}-email`}
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="personal@domain.com or holding@corp.com"
              className="w-full bg-[#f3f3f5] pl-9 pr-3 py-2.5 rounded-lg border border-[#c5c6ce] text-sm text-[#1a1c1d] placeholder:text-[#75777e] focus:outline-none focus:border-[#775a19] focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="sm:col-span-1">
            <label className="block text-[11px] font-semibold text-[#44474d] uppercase tracking-wider mb-1" htmlFor={`${id}-countryCode`}>
              Jurisdiction
            </label>
            <select
              id={`${id}-countryCode`}
              value={formData.countryCode}
              onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
              className="w-full bg-[#f3f3f5] px-2 py-2.5 rounded-lg border border-[#c5c6ce] text-sm text-[#1a1c1d] focus:outline-none focus:border-[#775a19] focus:bg-white"
            >
              <option value="+1">US (+1)</option>
              <option value="+44">UK (+44)</option>
              <option value="+55">BR (+55)</option>
              <option value="+33">FR (+33)</option>
              <option value="+49">DE (+49)</option>
              <option value="+39">IT (+39)</option>
              <option value="+34">ES (+34)</option>
              <option value="+971">UAE (+971)</option>
              <option value="+595">PY (+595)</option>
              <option value="+41">CH (+41)</option>
              <option value="+61">AU (+61)</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[11px] font-semibold text-[#44474d] uppercase tracking-wider mb-1" htmlFor={`${id}-phone`}>
              WhatsApp / Phone *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-4 h-4 text-[#75777e]" />
              <input
                id={`${id}-phone`}
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone / WhatsApp number"
                className="w-full bg-[#f3f3f5] pl-9 pr-3 py-2.5 rounded-lg border border-[#c5c6ce] text-sm text-[#1a1c1d] placeholder:text-[#75777e] focus:outline-none focus:border-[#775a19] focus:bg-white transition-colors"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-[#44474d] uppercase tracking-wider mb-1" htmlFor={`${id}-service`}>
            Primary Legal Matter *
          </label>
          <div className="relative">
            <select
              id={`${id}-service`}
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full bg-[#f3f3f5] px-3 py-2.5 rounded-lg border border-[#c5c6ce] text-sm text-[#1a1c1d] focus:outline-none focus:border-[#775a19] focus:bg-white"
            >
              <option value="" disabled>Select Area of Engagement</option>
              <optgroup label="Immigration & Nationality">
                <option value="Brazilian Visas & Residence Permits">Brazilian Visas & Residence Permits</option>
                <option value="Digital Nomad Visa (VITEM XIV)">Digital Nomad Visa (VITEM XIV)</option>
                <option value="Property Investor Visa (Golden Visa)">Property Investor Visa (Golden Visa)</option>
                <option value="Marriage Permanent Residency">Marriage Permanent Residency</option>
                <option value="Brazilian Naturalization & Citizenship">Brazilian Naturalization & Citizenship</option>
                <option value="Paraguay Residency & Mercosur">Paraguay Residency & Mercosur</option>
              </optgroup>
              <optgroup label="Real Estate & Wealth">
                <option value="Real Estate Purchase Due Diligence">Real Estate Purchase Due Diligence</option>
                <option value="Remote Property Acquisition (Power of Attorney)">Remote Property Acquisition</option>
                <option value="Off-Plan (Na Planta) Property Contract Review">Off-Plan (Na Planta) Property Review</option>
                <option value="Holding & Entity Structures (LLC)">Holding & Entity Structures (LLC)</option>
                <option value="Property Disputes & Title Defense">Property Disputes & Title Defense</option>
              </optgroup>
              <optgroup label="Banking, Succession & Courts">
                <option value="Cross-Border Money Transfers & CDE Accounts">Money Transfers & CDE Accounts</option>
                <option value="International Inheritance & Brazilian Probate">Inheritance & Brazilian Probate (Inventário)</option>
                <option value="Foreign Divorce Recognition (Homologação STJ)">Foreign Divorce Recognition (STJ)</option>
                <option value="Foreign Judgment Recognition">Foreign Judgment Recognition</option>
                <option value="Commercial Litigation & Arbitration">Commercial Litigation & Arbitration</option>
                <option value="Commercial Debt Collection & Protest">Debt Collection & Protesto</option>
                <option value="Non-Resident Brazilian Tax (CPF / DARF)">Non-Resident Brazilian Tax (CPF / DARF)</option>
              </optgroup>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-[#44474d] uppercase tracking-wider mb-1" htmlFor={`${id}-message`}>
            Case Brief / Objectives in Brazil
          </label>
          <textarea
            id={`${id}-message`}
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Briefly describe your timeline, property target, family status, or specific legal challenge in Brazil..."
            className="w-full bg-[#f3f3f5] p-3 rounded-lg border border-[#c5c6ce] text-sm text-[#1a1c1d] placeholder:text-[#75777e] focus:outline-none focus:border-[#775a19] focus:bg-white transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#fed488] hover:bg-[#775a19] text-[#785a1a] hover:text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span>Send Consultation Request</span>
          <Send className="w-4 h-4" />
        </button>

        <div className="flex items-center justify-center gap-1.5 pt-1 text-center">
          <Lock className="w-3.5 h-3.5 text-[#775a19]" />
          <p className="text-[11px] font-mono text-[#44474d]">
            256-bit Encrypted • Strict Attorney-Client Privilege
          </p>
        </div>
      </form>
    </div>
  );
};
