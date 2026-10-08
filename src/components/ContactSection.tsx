import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Share2,
  ShieldCheck
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { settings, addContactMessage, courses, generateWhatsAppUrl } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [courseInterested, setCourseInterested] = useState('Computer Skills for Beginners');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitting(true);
    addContactMessage({
      name,
      email,
      phone,
      courseInterested,
      message,
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hello Digital Skills Academy, my name is ${name || '[Name]'}. I am inquiring about the ${courseInterested} course. Phone: ${phone || '[Phone]'}. Message: ${message || 'I would like more information.'}`;
    const url = generateWhatsAppUrl({ customMessage: text });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-[#070e24] relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch with Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading">
            Contact &amp; <span className="gh-gold-text">Admissions Desk</span>
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Have questions about upcoming cohorts, course fees, corporate training, or custom website projects? We are here to help you.
          </p>
        </div>

        {/* 2-Column Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Cards & Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#091533] p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-slate-300">
                Reach out to us via call, WhatsApp, or visit our training lab in Accra.
              </p>

              {/* Contact item 1: WhatsApp [WHATSAPP NUMBER] */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-emerald-400">
                      WhatsApp Line
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">[WHATSAPP NUMBER]</span>
                  </div>
                  <p className="text-sm font-bold text-white truncate">
                    {settings.whatsAppDisplay}
                  </p>
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1 mt-0.5"
                  >
                    Click to Open WhatsApp Chat →
                  </a>
                </div>
              </div>

              {/* Contact item 2: Phone [PHONE NUMBER] */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-blue-400">
                      Telephone / Voice Call
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 ml-4">[PHONE NUMBER]</span>
                  </div>
                  <p className="text-sm font-bold text-white">
                    {settings.phone}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Mon - Sat (Office Hours)
                  </p>
                </div>
              </div>

              {/* Contact item 3: Email [EMAIL ADDRESS] */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-purple-400">
                      Official Email
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 ml-4">[EMAIL ADDRESS]</span>
                  </div>
                  <p className="text-sm font-bold text-white truncate">
                    {settings.email}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Response within 24 hours
                  </p>
                </div>
              </div>

              {/* Contact item 4: Location [LOCATION] */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-amber-400">
                      Physical Academy &amp; Hub
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 ml-4">[LOCATION]</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {settings.location}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {settings.operatingHours}
                  </p>
                </div>
              </div>

              {/* Social Channels Placeholders */}
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Social Media Links [FACEBOOK / INSTAGRAM / TIKTOK / LINKEDIN / YOUTUBE]:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {Object.entries(settings.socialLinks).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-center font-medium text-slate-300 hover:text-amber-400 transition-colors capitalize text-[11px]"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-[#091533] p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white font-heading">
                    Thank You, {name}!
                  </h4>
                  <p className="text-sm text-slate-300 mt-1 max-w-md mx-auto">
                    Your message regarding the <span className="text-amber-400 font-bold">{courseInterested}</span> course has been received. Our admissions tutor will contact you shortly.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Send Message Instantly to WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading mb-1">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill out the form below and receive our full course brochure and schedule.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ama Darko"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none placeholder-slate-500"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ama@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Ghana Phone Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="024 XXX XXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none placeholder-slate-500"
                    />
                  </div>
                </div>

                {/* Course Interested */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Course or Service of Interest
                  </label>
                  <select
                    value={courseInterested}
                    onChange={(e) => setCourseInterested(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="5-Day Computer Skills & AI Training">
                      ⭐ 5-Day Computer Skills &amp; AI Bootcamp (GH₵ 350 Promo)
                    </option>
                    {courses.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title} (GH₵ {c.priceGHS})
                      </option>
                    ))}
                    <option value="Custom Website Development Service">
                      🌐 Custom Website Development Service
                    </option>
                    <option value="Corporate / Group Training">
                      🏢 Corporate / Staff Digital Training
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Message or Questions
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you would like to learn or ask about..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none placeholder-slate-500 leading-relaxed"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Contact Form</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm border border-emerald-500/40 shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300 fill-emerald-300/20" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>We value your privacy. No spam. Quick replies.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
