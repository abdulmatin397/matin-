import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Star,
  Quote,
  CheckCircle,
  GraduationCap,
  MessageCircle,
  Sparkles
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { testimonials, openEnrollModal, generateWhatsAppUrl } = useApp();

  return (
    <section id="testimonials" className="py-20 bg-[#060c1d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Stories from Ghana</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading">
            What Our <span className="gh-gold-text">Students Say</span>
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Real feedback from beginners, university students, corporate employees, and business owners across Accra, Kumasi, Takoradi, and online.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-[#091533] p-6 rounded-2xl border border-slate-800 hover:border-amber-400/50 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Clearly marked placeholder pill as requested */}
              {test.isPlaceholder && (
                <div className="absolute top-3 right-3 text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-amber-400/20">
                  [TESTIMONIAL PLACEHOLDER]
                </div>
              )}

              <div className="space-y-4">
                {/* Star rating */}
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-amber-400/40 bg-slate-900 shrink-0">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-white font-heading truncate">
                    {test.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 truncate">
                    {test.role}
                  </p>
                  <span className="text-[10px] text-amber-400 font-medium block truncate">
                    📍 {test.location} • {test.courseTaken}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar below testimonials */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0b1736] via-[#091533] to-[#070e24] border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Ready to write your own tech success story in Ghana?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Join our upcoming cohort or chat directly with our lead trainer on WhatsApp today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => openEnrollModal()}
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Enroll in a Course
            </button>
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm border border-emerald-500/40 shadow-md transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
