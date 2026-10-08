import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  Course,
  TrainingSession,
  Enrollment,
  Certificate,
  Service,
  PortfolioProject,
  Testimonial,
  ContactMessage,
  WebsiteSettings,
} from '../types';
import {
  initialCourses,
  featuredTrainingSession,
  initialServices,
  initialPortfolio,
  initialTestimonials,
  initialSettings,
  initialEnrollments,
  initialCertificates,
} from '../data/initialData';

interface AppContextType {
  currentUser: User | null;
  currentView: string;
  setCurrentView: (view: string) => void;
  courses: Course[];
  trainingSessions: TrainingSession[];
  enrollments: Enrollment[];
  services: Service[];
  portfolio: PortfolioProject[];
  testimonials: Testimonial[];
  certificates: Certificate[];
  contactMessages: ContactMessage[];
  settings: WebsiteSettings;
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course | null) => void;
  isEnrollModalOpen: boolean;
  setIsEnrollModalOpen: (open: boolean) => void;
  openEnrollModal: (course?: Course) => void;
  closeEnrollModal: () => void;
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (open: boolean) => void;
  selectedCertificate: Certificate | null;
  setSelectedCertificate: (cert: Certificate | null) => void;
  login: (email: string, role?: 'student' | 'admin') => { success: boolean; error?: string };
  register: (name: string, email: string, phone: string) => { success: boolean; error?: string };
  logout: () => void;
  addEnrollment: (data: Omit<Enrollment, 'id' | 'referenceCode' | 'enrolledAt'>) => Enrollment;
  updateEnrollmentStatus: (id: string, status: Enrollment['status']) => void;
  addCourse: (course: Omit<Course, 'id'>) => void;
  updateCourse: (id: string, updated: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  addTrainingSession: (session: Omit<TrainingSession, 'id'>) => void;
  updateTrainingSession: (id: string, updated: Partial<TrainingSession>) => void;
  deleteTrainingSession: (id: string) => void;
  addPortfolioProject: (proj: Omit<PortfolioProject, 'id'>) => void;
  updatePortfolioProject: (id: string, updated: Partial<PortfolioProject>) => void;
  deletePortfolioProject: (id: string) => void;
  addTestimonial: (test: Omit<Testimonial, 'id'>) => void;
  updateTestimonial: (id: string, updated: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
  issueCertificate: (cert: Omit<Certificate, 'id' | 'certificateCode' | 'qrVerified'>) => Certificate;
  deleteCertificate: (id: string) => void;
  addContactMessage: (msg: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => void;
  updateContactMessageStatus: (id: string, status: ContactMessage['status']) => void;
  updateSettings: (newSettings: Partial<WebsiteSettings>) => void;
  generateWhatsAppUrl: (params?: {
    courseTitle?: string;
    studentName?: string;
    phone?: string;
    date?: string;
    mode?: string;
    customMessage?: string;
  }) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  USER: 'dsa_current_user',
  COURSES: 'dsa_courses_v1',
  TRAINING: 'dsa_training_v1',
  ENROLLMENTS: 'dsa_enrollments_v1',
  SERVICES: 'dsa_services_v1',
  PORTFOLIO: 'dsa_portfolio_v1',
  TESTIMONIALS: 'dsa_testimonials_v1',
  CERTIFICATES: 'dsa_certificates_v1',
  MESSAGES: 'dsa_messages_v1',
  SETTINGS: 'dsa_settings_v1',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.USER);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState<boolean>(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const [courses, setCourses] = useState<Course[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COURSES);
      return saved ? JSON.parse(saved) : initialCourses;
    } catch {
      return initialCourses;
    }
  });

  const [trainingSessions, setTrainingSessions] = useState<TrainingSession[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TRAINING);
      return saved ? JSON.parse(saved) : [featuredTrainingSession];
    } catch {
      return [featuredTrainingSession];
    }
  });

  const [enrollments, setEnrollments] = useState<Enrollment[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ENROLLMENTS);
      return saved ? JSON.parse(saved) : initialEnrollments;
    } catch {
      return initialEnrollments;
    }
  });

  const [services] = useState<Service[]>(initialServices);

  const [portfolio, setPortfolio] = useState<PortfolioProject[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PORTFOLIO);
      return saved ? JSON.parse(saved) : initialPortfolio;
    } catch {
      return initialPortfolio;
    }
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
      return saved ? JSON.parse(saved) : initialTestimonials;
    } catch {
      return initialTestimonials;
    }
  });

  const [certificates, setCertificates] = useState<Certificate[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CERTIFICATES);
      return saved ? JSON.parse(saved) : initialCertificates;
    } catch {
      return initialCertificates;
    }
  });

  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [settings, setSettings] = useState<WebsiteSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return saved ? JSON.parse(saved) : initialSettings;
    } catch {
      return initialSettings;
    }
  });

  // LocalStorage persistence effects
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(currentUser));
      } else {
        localStorage.removeItem(STORAGE_KEYS.USER);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [currentUser]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [courses]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TRAINING, JSON.stringify(trainingSessions));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [trainingSessions]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ENROLLMENTS, JSON.stringify(enrollments));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [enrollments]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PORTFOLIO, JSON.stringify(portfolio));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [portfolio]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [testimonials]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(certificates));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [certificates]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(contactMessages));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [contactMessages]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [settings]);

  // Enrollment Modal Controls
  const openEnrollModal = (course?: Course) => {
    if (course) {
      setSelectedCourse(course);
    }
    setIsEnrollModalOpen(true);
  };

  const closeEnrollModal = () => {
    setIsEnrollModalOpen(false);
  };

  // WhatsApp Link Generator
  const generateWhatsAppUrl = (params?: {
    courseTitle?: string;
    studentName?: string;
    phone?: string;
    date?: string;
    mode?: string;
    customMessage?: string;
  }) => {
    const cleanNumber = settings.whatsAppNumber.replace(/\D/g, '') || '233240000000';
    let text = '';

    if (params?.customMessage) {
      text = params.customMessage;
    } else if (params?.courseTitle) {
      const namePart = params.studentName ? ` My name is ${params.studentName}.` : '';
      const phonePart = params.phone ? ` My phone is ${params.phone}.` : '';
      const datePart = params.date ? ` Preferred date: ${params.date}.` : '';
      const modePart = params.mode ? ` Learning mode: ${params.mode}.` : '';
      text = `Hello Digital Skills Academy, I would like to register for ${params.courseTitle}.${namePart}${phonePart}${datePart}${modePart}`;
    } else {
      text = 'Hello Digital Skills Academy, I would like to enquire about your digital skills training and web development services.';
    }

    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
  };

  // Auth Handlers
  const login = (email: string, role: 'student' | 'admin' = 'student') => {
    const cleanEmail = email.trim().toLowerCase();
    if (role === 'admin' || cleanEmail.includes('admin')) {
      const adminUser: User = {
        id: 'user-admin-1',
        name: settings.directorName !== '[YOUR NAME]' ? settings.directorName : 'Academy Administrator',
        email: cleanEmail || 'admin@digitalskills.edu.gh',
        role: 'admin',
        phone: settings.phone,
        avatar: settings.directorPhoto,
      };
      setCurrentUser(adminUser);
      return { success: true };
    } else {
      const studentUser: User = {
        id: 'user-student-1',
        name: 'Kwame Koduah',
        email: cleanEmail || 'student@digitalskills.edu.gh',
        role: 'student',
        phone: '024 456 7890',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      };
      setCurrentUser(studentUser);
      return { success: true };
    }
  };

  const register = (name: string, email: string, phone: string) => {
    const newUser: User = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role: 'student',
      phone: phone.trim(),
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    };
    setCurrentUser(newUser);
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
    setCurrentView('home');
  };

  // Enrollment actions
  const addEnrollment = (data: Omit<Enrollment, 'id' | 'referenceCode' | 'enrolledAt'>) => {
    const randomCode = `DSA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newEnrollment: Enrollment = {
      ...data,
      id: `enr-${Date.now()}`,
      referenceCode: randomCode,
      enrolledAt: new Date().toISOString(),
    };
    setEnrollments(prev => [newEnrollment, ...prev]);
    return newEnrollment;
  };

  const updateEnrollmentStatus = (id: string, status: Enrollment['status']) => {
    setEnrollments(prev => prev.map(e => (e.id === id ? { ...e, status } : e)));
  };

  // Course actions
  const addCourse = (courseData: Omit<Course, 'id'>) => {
    const newCourse: Course = {
      ...courseData,
      id: `course-${Date.now()}`,
    };
    setCourses(prev => [newCourse, ...prev]);
  };

  const updateCourse = (id: string, updated: Partial<Course>) => {
    setCourses(prev => prev.map(c => (c.id === id ? { ...c, ...updated } : c)));
  };

  const deleteCourse = (id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  // Training Sessions
  const addTrainingSession = (sessionData: Omit<TrainingSession, 'id'>) => {
    const newSession: TrainingSession = {
      ...sessionData,
      id: `session-${Date.now()}`,
    };
    setTrainingSessions(prev => [newSession, ...prev]);
  };

  const updateTrainingSession = (id: string, updated: Partial<TrainingSession>) => {
    setTrainingSessions(prev => prev.map(s => (s.id === id ? { ...s, ...updated } : s)));
  };

  const deleteTrainingSession = (id: string) => {
    setTrainingSessions(prev => prev.filter(s => s.id !== id));
  };

  // Portfolio
  const addPortfolioProject = (proj: Omit<PortfolioProject, 'id'>) => {
    const newProj: PortfolioProject = {
      ...proj,
      id: `port-${Date.now()}`,
    };
    setPortfolio(prev => [newProj, ...prev]);
  };

  const updatePortfolioProject = (id: string, updated: Partial<PortfolioProject>) => {
    setPortfolio(prev => prev.map(p => (p.id === id ? { ...p, ...updated } : p)));
  };

  const deletePortfolioProject = (id: string) => {
    setPortfolio(prev => prev.filter(p => p.id !== id));
  };

  // Testimonials
  const addTestimonial = (test: Omit<Testimonial, 'id'>) => {
    const newTest: Testimonial = {
      ...test,
      id: `test-${Date.now()}`,
    };
    setTestimonials(prev => [newTest, ...prev]);
  };

  const updateTestimonial = (id: string, updated: Partial<Testimonial>) => {
    setTestimonials(prev => prev.map(t => (t.id === id ? { ...t, ...updated } : t)));
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  // Certificates
  const issueCertificate = (cert: Omit<Certificate, 'id' | 'certificateCode' | 'qrVerified'>) => {
    const newCert: Certificate = {
      ...cert,
      id: `cert-${Date.now()}`,
      certificateCode: `DSA-CERT-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      qrVerified: true,
    };
    setCertificates(prev => [newCert, ...prev]);
    return newCert;
  };

  const deleteCertificate = (id: string) => {
    setCertificates(prev => prev.filter(c => c.id !== id));
  };

  // Messages
  const addContactMessage = (msg: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => {
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'new',
    };
    setContactMessages(prev => [newMsg, ...prev]);
  };

  const updateContactMessageStatus = (id: string, status: ContactMessage['status']) => {
    setContactMessages(prev => prev.map(m => (m.id === id ? { ...m, status } : m)));
  };

  // Settings
  const updateSettings = (newSettings: Partial<WebsiteSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        currentView,
        setCurrentView,
        courses,
        trainingSessions,
        enrollments,
        services,
        portfolio,
        testimonials,
        certificates,
        contactMessages,
        settings,
        selectedCourse,
        setSelectedCourse,
        isEnrollModalOpen,
        setIsEnrollModalOpen,
        openEnrollModal,
        closeEnrollModal,
        isQuoteModalOpen,
        setIsQuoteModalOpen,
        selectedCertificate,
        setSelectedCertificate,
        login,
        register,
        logout,
        addEnrollment,
        updateEnrollmentStatus,
        addCourse,
        updateCourse,
        deleteCourse,
        addTrainingSession,
        updateTrainingSession,
        deleteTrainingSession,
        addPortfolioProject,
        updatePortfolioProject,
        deletePortfolioProject,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        issueCertificate,
        deleteCertificate,
        addContactMessage,
        updateContactMessageStatus,
        updateSettings,
        generateWhatsAppUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
