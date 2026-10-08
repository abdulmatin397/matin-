import React from 'react';
import { useApp } from '../context/AppContext';
import {
  GraduationCap,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  ArrowRight,
  ExternalLink,
  Award,
  CreditCard
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { settings, setCurrentView, generateWhatsAppUrl, courses, services } = useApp();

  return (
    <footer className="bg-[#050b18] text-slate-400 border-t border-amber-500/20 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Kente color accent top bar */}
      <div className="kente-border-accent absolute top-0 left-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-950 border border-amber-400/50 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-heading tracking-tight">
                  {settings.academyName}
                </span>
                <p className="text-xs text-amber-400 font-medium">
                  {settings.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              A premier Ghanaian digital skills training and modern web development studio.
              We empower beginners, entrepreneurs, tertiary students, and corporate teams with
              practical computer proficiency, AI tools, and bespoke online solutions.
            </p>

            {/* Director Bio Placeholder */}
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1">
              <p className="font-semibold text-amber-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                Founded & Led by {settings.directorName}
              </p>
              <p className="text-slate-400 line-clamp-2">
                {settings.directorBio}
              </p>
            </div>

            {/* Quick WhatsApp Connect */}
            <div className="pt-2">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat Directly on WhatsApp ({settings.whatsAppDisplay})</span>
              </a>
            </div>
          </div>

          {/* Col 2: Popular Courses */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Popular Courses
            </h3>
            <ul className="space-y-2 text-xs">
              {courses.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      setCurrentView('courses');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition-colors text-left flex items-center gap-1 group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                    <span>{c.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setCurrentView('training');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1 pt-1 cursor-pointer"
                >
                  <span>5-Day Computer & AI Training</span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1 rounded">HOT</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Web Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-blue-500 pl-2">
              Web Development
            </h3>
            <ul className="space-y-2 text-xs">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      setCurrentView('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-blue-400 transition-colors text-left flex items-center gap-1 group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setCurrentView('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-blue-400 font-semibold hover:underline pt-1 cursor-pointer"
                >
                  Request a Website Quote →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-2">
              Contact & Location
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{settings.location}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{settings.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{settings.email}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{settings.operatingHours}</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider mb-1.5">
                Connect on Socials
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {Object.entries(settings.socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 rounded bg-slate-800 hover:bg-amber-500 hover:text-slate-950 transition-colors capitalize text-[11px] font-medium"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Payment acceptance & Localization section */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2 flex-wrap text-slate-300">
            <span className="font-semibold text-white flex items-center gap-1">
              <CreditCard className="w-3.5 h-3.5 text-amber-400" />
              Ghana Payment Modes Accepted:
            </span>
            <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-300 font-bold border border-yellow-500/30">
              MTN Mobile Money (MoMo)
            </span>
            <span className="px-2 py-1 rounded bg-red-500/20 text-red-300 font-bold border border-red-500/30">
              Telecel Cash
            </span>
            <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
              Ghana Card / Bank & Visa
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setCurrentView('login');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Student Portal
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => {
                setCurrentView('admin-dashboard');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Shield className="w-3 h-3 text-amber-400" />
              Admin Portal
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {settings.academyName}. All Rights Reserved. Ghana.</p>
          <p className="flex items-center gap-1 text-slate-300">
            Built with modern technology for practical empowerment across Africa 🇬🇭
          </p>
        </div>
      </div>
    </footer>
  );
};
