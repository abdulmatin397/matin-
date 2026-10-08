import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Shield,
  Edit3,
  CheckCircle2,
  Camera,
  ExternalLink,
  MessageCircle,
  FileText,
  Key,
  LogOut,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ProfileView: React.FC = () => {
  const {
    currentUser,
    login,
    logout,
    settings,
    updateSettings,
    certificates,
    setSelectedCertificate,
    blogPosts,
    enrollments,
    setCurrentView,
    generateWhatsAppUrl
  } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [saveNotice, setSaveNotice] = useState(false);

  // Local state for profile fields
  const [name, setName] = useState(currentUser?.name || settings.directorName !== '[YOUR NAME]' ? settings.directorName : 'Abdul Matin');
  const [email, setEmail] = useState(currentUser?.email || 'abdulmatinm397@gmail.com');
  const [phone, setPhone] = useState(currentUser?.phone || settings.phone);
  const [bio, setBio] = useState(
    settings.directorBio || 'Website developer, digital skills trainer, and technology blogger empowering creators, students, and businesses in Ghana with modern web technologies and AI.'
  );
  const [avatar, setAvatar] = useState(
    currentUser?.avatar || settings.directorPhoto || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  );
  const [location, setLocation] = useState(settings.location || 'Accra, Ghana');
  const [titleRole, setTitleRole] = useState('Creator, Author & Lead Trainer');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    setSaveNotice(true);
    // If current user is logged in, sync
    if (currentUser) {
      currentUser.name = name;
      currentUser.phone = phone;
      currentUser.avatar = avatar;
    }
    // Also sync to settings directorName
    updateSettings({
      directorName: name,
      directorPhoto: avatar,
      directorBio: bio,
      phone: phone,
      location: location,
    });
    setTimeout(() => setSaveNotice(false), 3000);
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#060c1d] py-12 sm:py-16 text-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Profile Header Hero Card */}
        <div className="relative rounded-3xl bg-[#091533] border-2 border-amber-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 relative z-10 text-center md:text-left">
            {/* Avatar Frame with Upload Trigger */}
            <div className="relative group shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-4 border-amber-400/60 shadow-2xl bg-slate-950">
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              <label className="absolute -bottom-2 -right-2 p-2.5 rounded-2xl bg-amber-500 text-slate-950 shadow-xl cursor-pointer hover:bg-amber-400 transition-transform hover:scale-110 flex items-center justify-center">
                <Camera className="w-4 h-4" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Profile Info */}
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500 text-slate-950">
                  {currentUser?.role === 'admin' ? 'Super Admin & Author' : 'Verified Member'}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                  <span>🇬🇭</span>
                  <span>Ghana</span>
                </span>
                <span className="text-xs text-amber-400/90 font-mono">
                  ID: MB-{name.replace(/\s+/g, '').slice(0, 4).toUpperCase()}-2026
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-white font-heading">
                {name}
              </h1>

              <p className="text-sm font-semibold text-amber-300">
                {titleRole}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                {bio}
              </p>

              {/* Key Meta row */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-slate-400 border-t border-slate-800/80">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-slate-200">{email}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-slate-200">{phone}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-slate-200">{location}</span>
                </span>
              </div>
            </div>

            {/* Edit / Quick actions */}
            <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-700 transition-colors cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditing ? 'Close Edit Form' : 'Edit Profile'}</span>
              </button>

              <button
                onClick={() => {
                  setCurrentView('admin-dashboard');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin &amp; Images Desk</span>
              </button>
            </div>
          </div>
        </div>

        {/* Save Notice Banner */}
        {saveNotice && (
          <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>Profile details updated successfully!</span>
          </div>
        )}

        {/* Edit Form Modal/Drawer if open */}
        {isEditing && (
          <div className="p-6 sm:p-8 rounded-3xl bg-[#091533] border-2 border-amber-500/40 shadow-2xl space-y-5">
            <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white font-heading">
                Update Profile Information
              </h2>
              <span className="text-xs text-slate-400">All updates are instantly applied</span>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Professional Title / Tagline
                  </label>
                  <input
                    type="text"
                    value={titleRole}
                    onChange={(e) => setTitleRole(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Ghana Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">
                  Avatar Image URL (or upload above)
                </label>
                <input
                  type="text"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">
                  Bio / Statement
                </label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none leading-relaxed"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold cursor-pointer shadow"
                >
                  Save Profile Changes
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-1">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-400" />
              Published Blog Articles
            </span>
            <p className="text-3xl font-black text-white font-heading">{blogPosts.length}</p>
            <span className="text-[11px] text-amber-400">Live on Matin Blog</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-1">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-400" />
              Academic Credentials
            </span>
            <p className="text-3xl font-black text-white font-heading">{certificates.length}</p>
            <span className="text-[11px] text-blue-400">Verified QR Certificates</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-1">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Active Course Enrollments
            </span>
            <p className="text-3xl font-black text-white font-heading">{enrollments.length}</p>
            <span className="text-[11px] text-emerald-400">Practical Training Labs</span>
          </div>
        </div>

        {/* Two-Column Detail Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (7 cols): Certificates & Badges */}
          <div className="lg:col-span-7 bg-[#091533] p-6 sm:p-7 rounded-3xl border border-slate-800 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>My Verified Academic Certificates</span>
              </h3>
              <span className="text-xs text-slate-400">{certificates.length} Issued</span>
            </div>

            <div className="space-y-3">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-2xl bg-slate-900 border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-amber-400 font-bold block">
                      {cert.certificateCode}
                    </span>
                    <h4 className="text-sm font-bold text-white">{cert.courseTitle}</h4>
                    <p className="text-xs text-slate-400">
                      Awarded: {cert.issueDate} • Grade: <strong className="text-emerald-400">{cert.grade}</strong>
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedCertificate(cert)}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shrink-0 cursor-pointer transition-colors"
                  >
                    View / Print
                  </button>
                </div>
              ))}
            </div>

            {/* Professional Badges */}
            <div className="pt-3 border-t border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Skill Mastery Badges Earned:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-slate-300">
                  <span className="text-base">🚀</span>
                  <span className="font-semibold text-[11px]">Full-Stack Web</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-slate-300">
                  <span className="text-base">🧠</span>
                  <span className="font-semibold text-[11px]">Gemini 3 Pro AI</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-slate-300">
                  <span className="text-base">💳</span>
                  <span className="font-semibold text-[11px]">MTN MoMo API</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-slate-300">
                  <span className="text-base">🎨</span>
                  <span className="font-semibold text-[11px]">Visual Branding</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-slate-300">
                  <span className="text-base">📊</span>
                  <span className="font-semibold text-[11px]">Excel Dashboards</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-slate-300">
                  <span className="text-base">🛡️</span>
                  <span className="font-semibold text-[11px]">Cyber Security</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Quick Actions & Portal Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#091533] p-6 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white font-heading">
                Quick Shortcuts
              </h3>

              <div className="space-y-2 text-xs">
                <button
                  onClick={() => {
                    setCurrentView('blog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left flex items-center justify-between text-slate-200 transition-colors cursor-pointer"
                >
                  <span className="font-semibold">Browse Matin Blog Publications</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>

                <button
                  onClick={() => {
                    setCurrentView('ai-studio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left flex items-center justify-between text-slate-200 transition-colors cursor-pointer"
                >
                  <span className="font-semibold">Launch AI Image Studio (1K/2K/4K)</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>

                <button
                  onClick={() => {
                    setCurrentView('skills');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left flex items-center justify-between text-slate-200 transition-colors cursor-pointer"
                >
                  <span className="font-semibold">View Digital Skills Matrix</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>

                <button
                  onClick={() => {
                    setCurrentView('admin-dashboard');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full p-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-left flex items-center justify-between text-amber-300 transition-colors cursor-pointer"
                >
                  <span className="font-bold">Post Blog Articles &amp; Images (Admin)</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>

            {/* Direct WhatsApp Assistance */}
            <div className="p-5 rounded-3xl bg-emerald-950/40 border border-emerald-500/30 space-y-2 text-xs">
              <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4" />
                Need Account or Training Assistance?
              </span>
              <p className="text-slate-300">
                Direct WhatsApp line for enrollment verification, tutor consultations, and feedback.
              </p>
              <a
                href={generateWhatsAppUrl({ customMessage: `Hello Matin Blog, this is ${name} inquiring regarding my profile and training details.` })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-300 font-bold hover:underline pt-1"
              >
                <span>Connect via WhatsApp ({settings.whatsAppDisplay}) →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
