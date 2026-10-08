import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  GraduationCap,
  Users,
  Award,
  Laptop,
  CheckCircle2,
  Calendar,
  Flame
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { setCurrentView, openEnrollModal, generateWhatsAppUrl, settings } = useApp();

  return (
    <section className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-[#070e22] via-[#091533] to-[#060c1d]">
      {/* Decorative background glows & African geometric tech lines */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-12 right-10 w-72 h-72 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping"></span>
              <span className="flex h-2 w-2 rounded-full bg-amber-400 -ml-4"></span>
              <span>🇬🇭 Ghana’s Premier Practical Tech Academy</span>
              <span className="text-slate-500">•</span>
              <span className="text-amber-300">Cohort Enrolling Now</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.12]">
              Learn Digital Skills.{' '}
              <span className="gh-gold-text">Build Your Future.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Practical digital skills training for beginners, entrepreneurs, students, and professionals in Ghana and beyond.
              Master computer proficiency, modern website development, AI tools, and online business skills with 100% hands-on training.
            </p>

            {/* 3 Prominent Required CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              {/* Button 1: Explore Courses */}
              <button
                onClick={() => {
                  setCurrentView('courses');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 2: Register Now */}
              <button
                onClick={() => openEnrollModal()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Register Now</span>
              </button>

              {/* Button 3: Register via WhatsApp */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-emerald-700 hover:bg-emerald-600 text-white border border-emerald-500/40 shadow-lg shadow-emerald-900/30 transition-all flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300 fill-emerald-300/20 group-hover:scale-110 transition-transform" />
                <span>Register via WhatsApp</span>
              </a>
            </div>

            {/* Quick Guarantees & Features */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Practical & Hands-on</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Verified Certificate</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>In-Person & Online Live</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame with Ghanaian Navy/Gold aesthetic */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-slate-950 group">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Young Ghanaian students and professionals learning digital skills in a modern computer lab"
                  className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060c1d] via-[#060c1d]/30 to-transparent"></div>

                {/* Floating badge top left: Live Classroom */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-amber-500/40 text-xs text-slate-200 flex items-center gap-2.5 shadow-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="font-bold text-white">Live Accra Lab & Zoom</span>
                </div>

                {/* Floating badge top right: MoMo verified */}
                <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-slate-950 text-[11px] font-black tracking-wide shadow-lg">
                  🇬🇭 MTN MoMo / Telecel
                </div>

                {/* Floating Card at Bottom: Featured 5-Day Alert */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#091533]/95 backdrop-blur-md p-4 rounded-xl border border-amber-400/30 shadow-2xl">
                  <div className="flex items-center justify-between pb-1">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      Featured Special Training
                    </span>
                    <span className="text-xs font-bold text-white bg-blue-600 px-2 py-0.5 rounded">
                      GH₵ 350 Promo
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    5-Day Computer Skills & AI Content Creation for Beginners
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                    Computer basics, internet safety, Gemini AI, social flyers & certificates.
                  </p>
                  <div className="mt-2.5 flex items-center justify-between gap-2">
                    <button
                      onClick={() => {
                        setCurrentView('training');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 cursor-pointer"
                    >
                      View Syllabus & Dates →
                    </button>
                    <button
                      onClick={() => openEnrollModal()}
                      className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg cursor-pointer shadow"
                    >
                      Quick Enroll
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill 1 */}
              <div className="hidden sm:flex absolute -top-5 -left-6 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 p-3.5 rounded-2xl shadow-2xl items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-lg font-black text-white leading-tight font-heading">850+</p>
                  <p className="text-[11px] text-slate-400">Ghanaians Trained</p>
                </div>
              </div>

              {/* Floating Stat Pill 2 */}
              <div className="hidden sm:flex absolute -bottom-5 -right-6 bg-slate-900/95 backdrop-blur-md border border-amber-500/40 p-3.5 rounded-2xl shadow-2xl items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-lg font-black text-white leading-tight font-heading">98%</p>
                  <p className="text-[11px] text-slate-400">Practical Pass Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Props Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm text-center">
          <div className="p-3">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-heading">10+</p>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">Practical Courses</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Beginner to Advanced</p>
          </div>
          <div className="p-3 border-l border-slate-800">
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-heading">100%</p>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">Hands-On Practice</p>
            <p className="text-[11px] text-slate-400 mt-0.5">No theoretical fluff</p>
          </div>
          <div className="p-3 border-l border-slate-800">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading">GH₵</p>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">Affordable Rates</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Mobile Money supported</p>
          </div>
          <div className="p-3 border-l border-slate-800">
            <p className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-heading">24/7</p>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">WhatsApp Mentorship</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Support after graduation</p>
          </div>
        </div>
      </div>
    </section>
  );
};
