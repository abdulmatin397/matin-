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
  CreditCard,
  Image as ImageIcon,
  Sparkles,
  Upload,
  BookOpen
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { settings, setCurrentView, generateWhatsAppUrl, courses, services, blogPosts } = useApp();

  // Get the most recent blog post featured image or a fallback
  const latestFeaturedImage = blogPosts[0]?.featuredImage || 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80';

  return (
    <footer className="bg-[#050b18] text-slate-400 border-t border-amber-500/20 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Kente color accent top bar */}
      <div className="kente-border-accent absolute top-0 left-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* PROMINENT FEATURED ADMIN PORTAL SECTION WITH FEATURED IMAGE (Requested by user) */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0c183b] via-[#091533] to-[#070e24] border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Featured Image Frame */}
            <div className="lg:col-span-5 relative group">
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-2xl bg-slate-950">
                <img
                  src={latestFeaturedImage}
                  alt="Admin Featured Post Preview"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 text-amber-400 border border-amber-400/30 text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm">
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Featured Post Image</span>
                </div>

                {/* Quick overlay CTA */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-white truncate max-w-[200px]">
                    {blogPosts[0]?.title || 'Latest Featured Article'}
                  </span>
                  <span className="text-[10px] text-amber-400 font-bold shrink-0">
                    Active on Blog
                  </span>
                </div>
              </div>
            </div>

            {/* Admin Portal Text & Actions */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-extrabold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                <span>Admin Management &amp; Content Studio</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                Admin Portal &amp; <span className="gh-gold-text">Image Publishing Desk</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Access your secure Administrator console to post new blog articles, upload and manage featured images, issue verified certificates, and adjust course tuition in Ghana Cedis.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setCurrentView('admin-dashboard');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Shield className="w-4 h-4" />
                  <span>Open Admin Portal to Post Images</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setCurrentView('ai-studio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Generate New AI Image (1K/2K/4K)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-blue-700 p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#070e22] rounded-[14px] flex items-center justify-center">
                  <span className="text-xl font-black text-amber-400 font-heading">M</span>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-white font-heading tracking-tight">
                  Matin Blog
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
                Founded &amp; Led by {settings.directorName}
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

          {/* Col 2: Top Pages & Blog */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Navigation &amp; Blog
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setCurrentView('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1 group cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  <span>Home Page</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('blog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1 group cursor-pointer font-bold text-amber-400"
                >
                  <ArrowRight className="w-3 h-3 text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  <span>Matin Blog Publications</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('skills');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1 group cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  <span>Digital Skills Matrix</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1 group cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  <span>About Our Founder</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1 group cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  <span>Contact &amp; Admissions</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Courses & Web Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-blue-500 pl-2">
              Courses &amp; Services
            </h3>
            <ul className="space-y-2 text-xs">
              {courses.slice(0, 4).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      setCurrentView('courses');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-blue-400 transition-colors text-left flex items-center gap-1 group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5" />
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
                  <span>5-Day Computer &amp; AI Training</span>
                </button>
              </li>
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
              Contact &amp; Location
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
              Ghana Card / Bank &amp; Visa
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
              className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer font-bold"
            >
              <Shield className="w-3 h-3 text-amber-400" />
              Admin Portal
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Matin Blog • {settings.academyName}. All Rights Reserved. Ghana.</p>
          <p className="flex items-center gap-1 text-slate-300">
            Empowering tech &amp; digital skills across Africa 🇬🇭
          </p>
        </div>
      </div>
    </footer>
  );
};
