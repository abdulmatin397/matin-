import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  CheckCircle2,
  Calculator,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Layers,
  Globe
} from 'lucide-react';

export const WebsiteQuoteModal: React.FC = () => {
  const { isQuoteModalOpen, setIsQuoteModalOpen, settings, generateWhatsAppUrl } = useApp();

  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [projectType, setProjectType] = useState('Business Website');
  const [pageCount, setPageCount] = useState('1 - 5 Pages');
  const [features, setFeatures] = useState<string[]>([
    'Mobile Responsive',
    'WhatsApp Direct Chat',
    'Basic SEO Setup',
  ]);
  const [budgetEstimate, setBudgetEstimate] = useState<number>(1800);
  const [notes, setNotes] = useState('');
  const [quoteGenerated, setQuoteGenerated] = useState(false);

  if (!isQuoteModalOpen) return null;

  const featureOptions = [
    { id: 'Mobile Responsive', label: 'Mobile & Tablet Responsive', cost: 0 },
    { id: 'WhatsApp Direct Chat', label: '1-Click WhatsApp Floating Chat', cost: 100 },
    { id: 'Basic SEO Setup', label: 'Google Search & Maps SEO', cost: 200 },
    { id: 'MTN MoMo / Card Payment', label: 'MTN MoMo & Telecel Paystack Payment Gateway', cost: 650 },
    { id: 'Product Catalog & Cart', label: 'Online Store Product Catalog (Up to 50 items)', cost: 500 },
    { id: 'Student / Client Portal', label: 'User Registration & Login Portal', cost: 750 },
    { id: 'Custom Domain & 1-Yr Hosting', label: '.com / .com.gh Domain & Cloud Hosting', cost: 350 },
    { id: 'Blog / News Management', label: 'Content Management (CMS) for Articles', cost: 250 },
  ];

  const calculateEstimate = () => {
    let base = 1200;
    if (projectType === 'Business Website') base = 1800;
    if (projectType === 'School Website') base = 2500;
    if (projectType === 'E-commerce Website') base = 2800;
    if (projectType === 'Landing Pages') base = 950;
    if (projectType === 'Portfolio Websites') base = 1400;
    if (projectType === 'Website Maintenance') base = 350;

    let pagesAddon = 0;
    if (pageCount === '6 - 10 Pages') pagesAddon = 400;
    if (pageCount === '10+ Pages') pagesAddon = 800;

    let featureAddons = 0;
    features.forEach((feat) => {
      const found = featureOptions.find((f) => f.id === feat);
      if (found) featureAddons += found.cost;
    });

    return base + pagesAddon + featureAddons;
  };

  const handleFeatureToggle = (id: string) => {
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleGenerateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = calculateEstimate();
    setBudgetEstimate(finalAmount);
    setQuoteGenerated(true);
  };

  const handleSendToWhatsApp = () => {
    const message = `Hello Digital Skills Academy, I would like to request a website development quote for a *${projectType}* (${pageCount}).
My Name: ${clientName || '[Client]'}
Phone: ${clientPhone || '[Phone]'}
Selected Features: ${features.join(', ')}
Estimated Budget: GH₵ ${budgetEstimate}
Additional Notes: ${notes || 'None'}`;

    const url = generateWhatsAppUrl({ customMessage: message });
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsQuoteModalOpen(false);
    setQuoteGenerated(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#091533] border-2 border-blue-500/30 rounded-3xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800 bg-[#060e24]">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
              Request a Website Project Quote
            </h3>
          </div>
          <button
            onClick={() => {
              setIsQuoteModalOpen(false);
              setQuoteGenerated(false);
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {quoteGenerated ? (
            <div className="space-y-6 text-center py-2">
              <div className="w-14 h-14 mx-auto rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center text-blue-400">
                <Calculator className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  Instant Estimate Generated
                </span>
                <h4 className="text-2xl font-black text-white font-heading mt-1">
                  Estimated Investment: <span className="gh-gold-text">GH₵ {budgetEstimate}</span>
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                  Based on a custom {projectType} ({pageCount}) with {features.length} selected features.
                </p>
              </div>

              {/* Quote Breakdown */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Client Contact:</span>
                  <span className="font-semibold text-white">{clientName} ({clientPhone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Project Type:</span>
                  <span className="font-semibold text-white">{projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Page Scope:</span>
                  <span className="font-semibold text-white">{pageCount}</span>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-slate-400 block mb-1">Included Enhancements:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {features.map((f, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-200 text-[10px] border border-blue-700/50">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-200 fill-emerald-200/20" />
                  <span>Send Specification to WhatsApp for Immediate Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setQuoteGenerated(false)}
                  className="w-full py-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  ← Modify Parameters
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleGenerateQuote} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name or Business <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Chambers"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / WhatsApp <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="024 XXX XXXX"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-blue-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Type of Website Needed
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-blue-400 focus:outline-none"
                >
                  <option value="Business Website">Business Website (Starting GH₵ 1,800)</option>
                  <option value="Personal Website">Personal Website (Starting GH₵ 1,200)</option>
                  <option value="School Website">School Website &amp; Portal (Starting GH₵ 2,500)</option>
                  <option value="E-commerce Website">E-commerce Website with MoMo (Starting GH₵ 2,800)</option>
                  <option value="Landing Pages">High-Converting Landing Page (Starting GH₵ 950)</option>
                  <option value="Portfolio Websites">Creative Portfolio Website (Starting GH₵ 1,400)</option>
                  <option value="Website Maintenance">Website Maintenance &amp; Care (Starting GH₵ 350/mo)</option>
                </select>
              </div>

              {/* Page count */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Estimated Pages
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['1 - 5 Pages', '6 - 10 Pages', '10+ Pages'].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setPageCount(count)}
                      className={`p-2 rounded-xl text-xs font-semibold border transition-all ${
                        pageCount === count
                          ? 'bg-blue-600/30 text-blue-300 border-blue-400'
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features list */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Select Required Features:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {featureOptions.map((opt) => (
                    <label
                      key={opt.id}
                      className={`flex items-start gap-2 p-2.5 rounded-xl border cursor-pointer transition-all ${
                        features.includes(opt.id)
                          ? 'bg-blue-950/60 border-blue-500/60 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={features.includes(opt.id)}
                        onChange={() => handleFeatureToggle(opt.id)}
                        className="mt-0.5 rounded text-blue-600 focus:ring-0"
                      />
                      <div>
                        <span className="font-medium leading-tight block">{opt.label}</span>
                        {opt.cost > 0 && (
                          <span className="text-[10px] text-amber-400 font-mono">+GH₵ {opt.cost}</span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Specific Project Notes or Reference Website (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Needs to match our brand colors, here is a website we admire..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-blue-400 focus:outline-none"
                ></textarea>
              </div>

              {/* Calculate CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate Instant Estimate &amp; Prepare Proposal</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
