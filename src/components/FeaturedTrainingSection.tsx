import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Flame,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Award,
  MessageCircle,
  Users,
  ShieldCheck,
  Sparkles,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export const FeaturedTrainingSection: React.FC = () => {
  const { trainingSessions, openEnrollModal, generateWhatsAppUrl, courses, setSelectedCourse } = useApp();
  const session = trainingSessions[0];

  const handleRegister = () => {
    // Find or simulate corresponding course for enrollment form pre-selection
    const courseMatch = courses.find(c => c.id === 'course-computer-skills-beginners') || courses[0];
    openEnrollModal(courseMatch);
  };

  const handleWhatsApp = () => {
    const url = generateWhatsAppUrl({
      courseTitle: '5-Day Computer Skills & AI Content Creation Training for Beginners',
      date: session.startDate,
      mode: 'Hybrid (In-Person / Online Zoom)'
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="featured-training" className="py-20 bg-[#070f26] relative overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="w-4 h-4 fill-amber-400" />
            <span>Featured Flagship Bootcamp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight">
            5-Day Computer Skills &amp; <span className="gh-gold-text">AI Content Creation</span> Training
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A comprehensive, step-by-step practical accelerator designed for absolute beginners, business owners, students, and workers in Ghana.
          </p>
        </div>

        {/* Feature Bento Card */}
        <div className="bg-[#0b1736] rounded-3xl border-2 border-amber-500/30 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          {/* Ghana Flag Accent Badge */}
          <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-to-l from-amber-500 to-amber-600 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase rounded-bl-2xl shadow-md">
            🇬🇭 Cohort Promo Rate: GH₵ {session.priceGHS}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Curriculum breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Master the Fundamentals in 5 Days
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
                  From Zero Computer Experience to Confident AI Creator
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {session.description}
                </p>
              </div>

              {/* Day-by-day Syllabus Accordion/Timeline */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  5-Day Practical Syllabus Outline
                </h4>

                <div className="space-y-2.5">
                  {session.topics.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-colors flex items-start gap-3.5"
                    >
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-extrabold shrink-0 border border-amber-500/30">
                        {item.day}
                      </span>
                      <div>
                        <h5 className="text-sm font-bold text-white font-heading">
                          {item.title}
                        </h5>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Highlights, Pricing, CTAs */}
            <div className="lg:col-span-5 bg-[#070e24] p-6 sm:p-8 rounded-2xl border border-amber-500/20 space-y-6">
              {/* Pricing Box */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold uppercase text-amber-400">Special Ghana Rate</span>
                  {session.originalPriceGHS && (
                    <span className="text-sm line-through text-slate-400">
                      GH₵ {session.originalPriceGHS}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-white font-heading">
                    GH₵ {session.priceGHS}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">all-inclusive</span>
                </div>
                <p className="text-[11px] text-amber-300 mt-1">
                  ⚡ Includes hands-on lab access, software templates, and physical/digital Certificate.
                </p>
              </div>

              {/* Schedule and Venue meta */}
              <div className="space-y-3 text-xs text-slate-300 border-b border-slate-800 pb-5">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400">Start Date: </span>
                    <strong className="text-white">{session.startDate}</strong>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400">Time Options: </span>
                    <strong className="text-white">Morning (9am-1pm) OR Evening (5:30pm-8:30pm)</strong>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400">Learning Mode: </span>
                    <strong className="text-white">In-Person (Accra Hub) &amp; Live Zoom Nationwide</strong>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400">Class Size: </span>
                    <strong className="text-white">Small batches for maximum tutor attention</strong>
                  </div>
                </div>
              </div>

              {/* What you get list */}
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  What is Included in This Training:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Computer Fundamentals</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Internet &amp; Cloud Skills</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>AI Intro &amp; Prompting</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>AI Content Creation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Productivity Mastery</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Verified Certificate</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 pt-2">
                {/* Register Now */}
                <button
                  onClick={handleRegister}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Register Now for 5-Day Bootcamp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* WhatsApp Registration */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm border border-emerald-500/40 shadow-lg shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-300 fill-emerald-300/20" />
                  <span>WhatsApp Registration</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant confirmation via WhatsApp &amp; Email</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
