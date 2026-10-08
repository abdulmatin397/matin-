import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Sparkles,
  BookOpen,
  Calendar,
  Briefcase,
  Layers,
  HelpCircle,
  Mail,
  User as UserIcon,
  Shield,
  LogOut,
  ChevronDown,
  GraduationCap,
  Code,
  PenTool,
  Award
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    settings,
    currentUser,
    logout,
    openEnrollModal,
    generateWhatsAppUrl
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [academyMenuOpen, setAcademyMenuOpen] = useState(false);

  // The primary top pages requested by user:
  // home page, blog, contact, about and skills, profile
  const primaryNavLinks = [
    { id: 'home', label: 'Home' },
    { id: 'blog', label: 'Blog', badge: 'New' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
    { id: 'profile', label: 'Profile', icon: UserIcon },
  ];

  // Secondary academy offerings for comprehensive functionality
  const academyLinks = [
    { id: 'courses', label: 'All Courses (10)', icon: BookOpen },
    { id: 'training', label: '5-Day Bootcamp (Promo)', icon: Calendar, badge: 'HOT' },
    { id: 'services', label: 'Web Development Services', icon: Briefcase },
    { id: 'portfolio', label: 'Client Portfolio', icon: Layers },
    { id: 'ai-studio', label: 'AI Studio Lab (Gemini)', icon: Sparkles },
    { id: 'testimonials', label: 'Testimonials', icon: Award },
  ];

  const handleNavClick = (viewId: string) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
    setAcademyMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#070e22]/95 backdrop-blur-md border-b border-amber-500/20 shadow-xl transition-all">
      {/* Top Notification Announcement Bar */}
      {settings.announcementActive && (
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-slate-950 text-xs sm:text-sm font-semibold py-1.5 px-4 text-center flex items-center justify-center gap-2 shadow-inner">
          <span className="inline-block animate-pulse text-base">🇬🇭</span>
          <span className="truncate max-w-3xl">{settings.announcementText}</span>
          <button
            onClick={() => handleNavClick('blog')}
            className="hidden md:inline-flex items-center underline hover:text-black font-bold ml-1 cursor-pointer"
          >
            Read Latest Post →
          </button>
        </div>
      )}

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Branding: Changed to 'Matin Blog' as requested */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-blue-700 p-0.5 shadow-lg group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-[#070e22] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                <span className="text-xl font-black text-amber-400 font-heading tracking-tighter">
                  M
                </span>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors font-heading">
                  Matin Blog
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Tech &amp; Skills
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                Learn Digital Skills. Build Your Future.
              </p>
            </div>
          </div>

          {/* Desktop Primary Navigation Links: home, blog, about, contact, skills, profile */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {primaryNavLinks.map((link) => {
              const isActive = currentView === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all relative flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/15 border border-amber-500/30 font-bold shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-amber-500 text-slate-950">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Academy & Courses Dropdown */}
            <div className="relative ml-1">
              <button
                onClick={() => setAcademyMenuOpen(!academyMenuOpen)}
                className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1 cursor-pointer border ${
                  academyMenuOpen || ['courses', 'training', 'services', 'portfolio', 'ai-studio'].includes(currentView)
                    ? 'bg-blue-600/20 text-blue-300 border-blue-500/40'
                    : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>Courses &amp; Studio</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {academyMenuOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-[#091533] border border-amber-500/30 shadow-2xl p-2 z-50">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400">
                    Training &amp; Services
                  </div>
                  {academyLinks.map((sub) => {
                    const SubIcon = sub.icon;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => handleNavClick(sub.id)}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400 flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <SubIcon className="w-4 h-4 text-amber-400" />
                          <span>{sub.label}</span>
                        </div>
                        {sub.badge && (
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500 text-slate-950">
                            {sub.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick WhatsApp Registration Button */}
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-700/80 hover:bg-emerald-600 text-emerald-100 border border-emerald-500/40 hover:border-emerald-400 shadow-sm transition-all"
              title="Chat or Register via WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300 fill-emerald-300/20" />
              <span>WhatsApp: {settings.whatsAppDisplay}</span>
            </a>

            {/* Auth/Dashboard Button */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 pl-2.5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-amber-400/50 text-slate-200 text-xs sm:text-sm cursor-pointer"
                >
                  <span className="font-semibold max-w-[100px] truncate">{currentUser.name}</span>
                  <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${currentUser.role === 'admin' ? 'bg-rose-500 text-white' : 'bg-blue-600 text-white'}`}>
                    {currentUser.role}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-slate-900 border border-amber-500/30 shadow-2xl py-2 z-50">
                    <div className="px-4 py-2 border-b border-slate-800">
                      <p className="text-xs text-slate-400">Signed in as</p>
                      <p className="text-sm font-bold text-white truncate">{currentUser.name}</p>
                      <p className="text-xs text-amber-400">{currentUser.email}</p>
                    </div>

                    {currentUser.role === 'admin' ? (
                      <button
                        onClick={() => {
                          handleNavClick('admin-dashboard');
                          setUserDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-slate-800 flex items-center gap-2 cursor-pointer"
                      >
                        <Shield className="w-4 h-4 text-amber-400" />
                        Admin Portal
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          handleNavClick('student-dashboard');
                          setUserDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-slate-800 flex items-center gap-2 cursor-pointer"
                      >
                        <GraduationCap className="w-4 h-4 text-blue-400" />
                        Student Dashboard
                      </button>
                    )}

                    <button
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-rose-400 hover:bg-slate-800 flex items-center gap-2 cursor-pointer border-t border-slate-800"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => handleNavClick('login')}
                className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <UserIcon className="w-4 h-4 text-amber-400" />
                <span>Portal Login</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => openEnrollModal()}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-slate-950 sm:hidden cursor-pointer"
            >
              Enroll
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white hover:border-amber-400 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#091329] border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
          {/* Top Quick Actions */}
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-emerald-700 text-emerald-100 text-xs font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <button
              onClick={() => {
                openEnrollModal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold"
            >
              Register Now
            </button>
          </div>

          {/* Requested Pages: home, blog, about, contact, skills */}
          <div className="space-y-1 py-1">
            <p className="text-[10px] uppercase font-bold text-amber-400 px-3 pt-1">
              Main Pages
            </p>
            {primaryNavLinks.map((link) => {
              const isActive = currentView === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 font-bold'
                      : 'text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4 text-amber-400" />}
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Courses & Academy links */}
          <div className="space-y-1 py-1 border-t border-slate-800">
            <p className="text-[10px] uppercase font-bold text-slate-400 px-3 pt-2">
              Courses &amp; Services
            </p>
            {academyLinks.map((link) => {
              const isActive = currentView === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-300 font-bold'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5 text-amber-400" />
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500 text-slate-950">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* User Auth Section in Mobile Menu */}
          <div className="pt-3 border-t border-slate-800 space-y-2">
            {currentUser ? (
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">{currentUser.name}</p>
                    <p className="text-xs text-amber-400">{currentUser.email}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${currentUser.role === 'admin' ? 'bg-rose-500 text-white' : 'bg-blue-600 text-white'}`}>
                    {currentUser.role}
                  </span>
                </div>
                <div className="flex gap-2 pt-1">
                  {currentUser.role === 'admin' ? (
                    <button
                      onClick={() => handleNavClick('admin-dashboard')}
                      className="flex-1 py-1.5 text-xs font-semibold bg-amber-500 text-slate-950 rounded-lg"
                    >
                      Admin Portal
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavClick('student-dashboard')}
                      className="flex-1 py-1.5 text-xs font-semibold bg-blue-600 text-white rounded-lg"
                    >
                      Dashboard
                    </button>
                  )}
                  <button
                    onClick={() => logout()}
                    className="px-3 py-1.5 text-xs font-semibold bg-rose-950/60 text-rose-300 border border-rose-800 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleNavClick('login')}
                  className="py-2.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-200 border border-slate-700 text-center"
                >
                  Student Login
                </button>
                <button
                  onClick={() => handleNavClick('admin-dashboard')}
                  className="py-2.5 rounded-xl text-xs font-bold bg-slate-800 text-amber-400 border border-amber-500/30 text-center"
                >
                  Admin Portal
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
