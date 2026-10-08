import React from 'react';
import { useApp } from '../context/AppContext';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Users,
  Laptop,
  Target,
  Sparkles,
  ArrowRight,
  MessageCircle,
  MapPin,
  Clock
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { settings, setCurrentView, generateWhatsAppUrl } = useApp();

  return (
    <section id="about" className="py-20 bg-[#070e24] relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Empowering Ghanaians with High-Value Tech</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading">
            About <span className="gh-gold-text">Digital Skills Academy</span>
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {settings.tagline}
          </p>
        </div>

        {/* 2-Column Story and Trainer Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Mission & Training Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-snug">
              Democratizing Practical Technology Training Across Ghana &amp; Beyond
            </h3>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At <strong>Digital Skills Academy</strong>, we believe every Ghanaian—regardless of background, age, or education level—deserves the opportunity to master the tools driving today’s global economy. 
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We bridge the gap between abstract academic theory and tangible marketplace results. Whether you are an absolute beginner touching a computer for the first time, a small business owner aiming to triple sales through WhatsApp and Facebook ads, or a student aspiring to build websites for international clients, our training gives you direct, practical competence.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase">
                  <Laptop className="w-4 h-4" />
                  <span>100% Hands-On Labs</span>
                </div>
                <p className="text-xs text-slate-300">
                  Every lesson involves building real projects, spreadsheets, designs, and working websites on your own computer.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>Cutting-Edge AI Tools</span>
                </div>
                <p className="text-xs text-slate-300">
                  We integrate modern generative AI (Gemini, Claude, Midjourney) into every discipline to 10x your productivity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase">
                  <MessageCircle className="w-4 h-4" />
                  <span>Post-Training WhatsApp Hub</span>
                </div>
                <p className="text-xs text-slate-300">
                  Graduates join our lifetime alumni network for continuous job referrals, troubleshooting, and direct mentorship.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase">
                  <Award className="w-4 h-4" />
                  <span>Official Certificate</span>
                </div>
                <p className="text-xs text-slate-300">
                  Earn a verified Certificate of Competence to bolster your CV, Upwork profile, and employer credentials.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder & Trainer Card with [YOUR NAME] / [YOUR PHOTO] */}
          <div className="lg:col-span-5">
            <div className="bg-[#091533] p-6 sm:p-8 rounded-3xl border-2 border-amber-500/30 shadow-2xl relative">
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider">
                Founder &amp; Lead Trainer
              </div>

              {/* Trainer Photo Frame [YOUR PHOTO] */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-lg bg-slate-950 shrink-0">
                  <img
                    src={settings.directorPhoto}
                    alt={settings.directorName}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle placeholder indicator */}
                  <span className="absolute bottom-0 inset-x-0 bg-slate-900/90 text-amber-300 text-[8px] text-center font-mono py-0.5">
                    [YOUR PHOTO]
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-amber-400 uppercase font-mono tracking-wider block">
                    [YOUR NAME]
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-white font-heading">
                    {settings.directorName}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium mt-0.5">
                    Website Developer &amp; Digital Skills Trainer
                  </p>
                </div>
              </div>

              {/* Founder Statement from Brief */}
              <blockquote className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-amber-400 pl-3 py-1 mb-5 leading-relaxed bg-slate-900/50 p-3 rounded-r-xl">
                “I am a website developer and digital skills trainer helping beginners, students, entrepreneurs, and business owners learn practical computer skills, AI, website development, digital marketing, graphic design, Microsoft Office, social media management, and online business skills.”
              </blockquote>

              <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{settings.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{settings.operatingHours}</span>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-5">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Connect with Trainer on WhatsApp ({settings.whatsAppDisplay})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
