import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { FeaturedTrainingSection } from './components/FeaturedTrainingSection';
import { CoursesSection } from './components/CoursesSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AiStudioLab } from './components/AiStudioLab';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { LoginView } from './components/LoginView';
import { StudentDashboard } from './components/StudentDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { EnrollmentModal } from './components/EnrollmentModal';
import { WebsiteQuoteModal } from './components/WebsiteQuoteModal';
import { CertificateModal } from './components/CertificateModal';
import { MessageCircle, ArrowUp } from 'lucide-react';

const MainContent: React.FC = () => {
  const { currentView, setCurrentView, generateWhatsAppUrl, settings } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070d1e] text-slate-100 selection:bg-amber-400 selection:text-slate-950 font-sans">
      <Navbar />

      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero />
            <FeaturedTrainingSection />
            <CoursesSection />
            <ServicesSection />
            <PortfolioSection />
            <AiStudioLab />
            <AboutSection />
            <TestimonialsSection />
            <ContactSection />
          </>
        )}

        {currentView === 'courses' && (
          <div className="pt-6">
            <CoursesSection />
          </div>
        )}

        {currentView === 'training' && (
          <div className="pt-6">
            <FeaturedTrainingSection />
          </div>
        )}

        {currentView === 'services' && (
          <div className="pt-6">
            <ServicesSection />
          </div>
        )}

        {currentView === 'portfolio' && (
          <div className="pt-6">
            <PortfolioSection />
          </div>
        )}

        {currentView === 'ai-studio' && (
          <div className="pt-6">
            <AiStudioLab />
          </div>
        )}

        {currentView === 'about' && (
          <div className="pt-6">
            <AboutSection />
          </div>
        )}

        {currentView === 'testimonials' && (
          <div className="pt-6">
            <TestimonialsSection />
          </div>
        )}

        {currentView === 'contact' && (
          <div className="pt-6">
            <ContactSection />
          </div>
        )}

        {currentView === 'login' && <LoginView />}
        {currentView === 'student-dashboard' && <StudentDashboard />}
        {currentView === 'admin-dashboard' && <AdminDashboard />}
      </main>

      <Footer />

      {/* Global Modals */}
      <EnrollmentModal />
      <WebsiteQuoteModal />
      <CertificateModal />

      {/* Floating Instant WhatsApp Button at bottom right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/80 border-2 border-emerald-400/50 hover:scale-105 transition-all"
          title="Direct WhatsApp Support"
        >
          <MessageCircle className="w-6 h-6 fill-white/20 animate-pulse" />
          <span className="hidden sm:inline-block text-xs font-bold font-heading">
            WhatsApp Us ({settings.whatsAppDisplay})
          </span>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
