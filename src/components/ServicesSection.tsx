import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Globe,
  Briefcase,
  User,
  GraduationCap,
  ShoppingCart,
  Zap,
  Palette,
  Wrench,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Clock,
  Sparkles
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { services, setIsQuoteModalOpen, generateWhatsAppUrl } = useApp();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'service-business-websites':
        return Briefcase;
      case 'service-personal-websites':
        return User;
      case 'service-school-websites':
        return GraduationCap;
      case 'service-ecommerce-websites':
        return ShoppingCart;
      case 'service-landing-pages':
        return Zap;
      case 'service-portfolio-websites':
        return Palette;
      case 'service-website-maintenance':
        return Wrench;
      default:
        return Globe;
    }
  };

  const handleWhatsAppInquiry = (serviceTitle: string) => {
    const text = `Hello Digital Skills Academy, I would like to enquire about your *${serviceTitle}* development service.`;
    const url = generateWhatsAppUrl({ customMessage: text });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-20 bg-[#070e24] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Professional Web Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading">
            Modern Web Development <span className="gh-gold-text">Services</span>
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Tailor-made for Ghanaian businesses, startups, schools, and personal brands.
            Mobile-first, lightning-fast, secure, and integrated with Mobile Money payment gateways.
          </p>

          {/* Prominent "Request a Website" Master CTA Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request a Website (Instant Quote Calculator)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = getServiceIcon(service.id);
            return (
              <div
                key={service.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                  service.popular
                    ? 'bg-[#0d1c44] border-amber-400/50 shadow-2xl shadow-blue-950/50'
                    : 'bg-[#091533]/80 border-slate-800 hover:border-blue-500/40 shadow-lg'
                }`}
              >
                {/* Popular or Category Badge */}
                {service.badge && (
                  <span className="absolute -top-3 right-6 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
                    {service.badge}
                  </span>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                        {service.category}
                      </span>
                      <h3 className="text-xl font-bold text-white font-heading">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Pricing and Timeline */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Starting From</span>
                      <span className="text-lg font-black text-white font-heading">
                        GH₵ {service.startingPriceGHS}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block">Delivery Time</span>
                      <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {service.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6">
                    <p className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                      Included Deliverables:
                    </p>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Request Site</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppInquiry(service.title)}
                    className="py-2.5 px-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-emerald-100 font-semibold text-xs border border-emerald-500/30 transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
