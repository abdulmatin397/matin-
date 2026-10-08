import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  CheckCircle2,
  MessageCircle,
  Calendar,
  MapPin,
  Laptop,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const EnrollmentModal: React.FC = () => {
  const {
    isEnrollModalOpen,
    closeEnrollModal,
    selectedCourse,
    courses,
    addEnrollment,
    generateWhatsAppUrl,
    settings
  } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [courseId, setCourseId] = useState('');
  const [preferredDate, setPreferredDate] = useState('Next Upcoming Batch (Starts Monday)');
  const [location, setLocation] = useState('Accra (In-Person)');
  const [learningMode, setLearningMode] = useState<'Online Live' | 'In-Person Weekday' | 'In-Person Weekend'>('In-Person Weekday');
  const [message, setMessage] = useState('');

  const [submittedEnrollment, setSubmittedEnrollment] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedCourse) {
      setCourseId(selectedCourse.id);
    } else if (courses.length > 0 && !courseId) {
      setCourseId(courses[0].id);
    }
  }, [selectedCourse, courses]);

  if (!isEnrollModalOpen) return null;

  const currentCourse = courses.find((c) => c.id === courseId) || courses[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, and Phone Number).');
      return;
    }

    setIsSubmitting(true);

    try {
      const newEnrollment = addEnrollment({
        studentName: fullName.trim(),
        studentEmail: email.trim(),
        studentPhone: phone.trim(),
        studentWhatsApp: whatsapp.trim() || phone.trim(),
        courseId: currentCourse.id,
        courseTitle: currentCourse.title,
        preferredDate,
        location,
        learningMode,
        message: message.trim(),
        status: 'pending',
        amountGHS: currentCourse.priceGHS,
        paymentMethod: 'Pending (Mobile Money / Cash)',
      });

      setSubmittedEnrollment(newEnrollment);
    } catch (err: any) {
      setErrorMsg(err?.message || 'Error saving registration.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinueWhatsApp = () => {
    if (!submittedEnrollment) return;
    const url = generateWhatsAppUrl({
      courseTitle: submittedEnrollment.courseTitle,
      studentName: submittedEnrollment.studentName,
      phone: submittedEnrollment.studentPhone,
      date: submittedEnrollment.preferredDate,
      mode: submittedEnrollment.learningMode,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
    closeEnrollModal();
    setSubmittedEnrollment(null);
  };

  const handleClose = () => {
    closeEnrollModal();
    setSubmittedEnrollment(null);
    setErrorMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0a142e] border-2 border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden my-8">
        {/* Header bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800 bg-[#070e22]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
              {submittedEnrollment ? 'Registration Confirmed!' : 'Student Course Enrollment'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {submittedEnrollment ? (
            /* Confirmation View */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-black text-white font-heading">
                  Akwaaba, {submittedEnrollment.studentName}!
                </h4>
                <p className="text-sm text-slate-300 mt-1">
                  Your registration application for{' '}
                  <span className="text-amber-400 font-bold">{submittedEnrollment.courseTitle}</span>{' '}
                  has been submitted successfully.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-left text-xs space-y-2.5">
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Enrollment Reference:</span>
                  <span className="font-mono font-bold text-amber-400">
                    {submittedEnrollment.referenceCode}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tuition Fee:</span>
                  <span className="font-bold text-white">GH₵ {submittedEnrollment.amountGHS}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Learning Mode:</span>
                  <span className="font-bold text-white">{submittedEnrollment.learningMode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Preferred Date:</span>
                  <span className="font-bold text-white">{submittedEnrollment.preferredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-bold text-white">{submittedEnrollment.location}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                <p className="font-semibold">Next Step:</p>
                <p className="mt-0.5">
                  Click the button below to send your pre-formatted confirmation message directly to our admissions team on WhatsApp.
                </p>
              </div>

              {/* Continue on WhatsApp Button */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleContinueWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-200 fill-emerald-200/20" />
                  <span>Continue on WhatsApp ({settings.whatsAppDisplay})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleClose}
                  className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Done &amp; Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Enrollment Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Selected Course preview */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400">Selected Program</span>
                  <h4 className="text-sm font-bold text-white font-heading">
                    {currentCourse.title}
                  </h4>
                  <p className="text-xs text-slate-400">{currentCourse.duration}</p>
                </div>
                <div className="text-right">
                  <span className="text-base sm:text-lg font-black text-amber-400 font-heading">
                    GH₵ {currentCourse.priceGHS}
                  </span>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kwame Mensah"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none placeholder-slate-500"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. kwame@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none placeholder-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone Number <span className="text-rose-400">*</span>
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

              {/* WhatsApp Number (if different) */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  WhatsApp Number (if different from phone)
                </label>
                <input
                  type="tel"
                  placeholder="024 XXX XXXX"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none placeholder-slate-500"
                />
              </div>

              {/* Course Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Change Course (optional)
                </label>
                <select
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} — GH₵ {c.priceGHS} ({c.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferred Start Date
                  </label>
                  <select
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Next Upcoming Batch (Starts Monday)">Next Upcoming Batch (Monday)</option>
                    <option value="Upcoming Weekend Intensive">Upcoming Weekend Batch</option>
                    <option value="First Week of Next Month">First Week of Next Month</option>
                    <option value="Self-Paced / Immediate Access">Immediate / Flexible Start</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Location / Region
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Accra (In-Person)">Greater Accra (In-Person)</option>
                    <option value="Kumasi (Online / Hybrid)">Kumasi (Online / Hybrid)</option>
                    <option value="Takoradi (Online)">Takoradi (Online)</option>
                    <option value="Sunyani / Tamale (Online)">Sunyani / Tamale (Online)</option>
                    <option value="Cape Coast / Central (Online)">Cape Coast (Online)</option>
                    <option value="Other Ghana Region (Online)">Other Ghana Region (Online)</option>
                    <option value="International / Diaspora (Online)">Outside Ghana (Online)</option>
                  </select>
                </div>
              </div>

              {/* Learning Mode */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Preferred Learning Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['In-Person Weekday', 'In-Person Weekend', 'Online Live'] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setLearningMode(mode)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                        learningMode === mode
                          ? 'bg-amber-500/20 text-amber-300 border-amber-400'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Goal */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  What is your main goal for taking this course? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. I want to build a website for my business, or switch careers..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none placeholder-slate-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Enrollment...</span>
                  ) : (
                    <>
                      <span>Complete Enrollment &amp; Get Reference</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Your details are secure. Pay easily via MTN MoMo, Telecel or Card.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
