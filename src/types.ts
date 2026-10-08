export type Role = 'admin' | 'student';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  phone?: string;
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  category: 'Fundamentals' | 'Development' | 'AI & Tech' | 'Design & Creative' | 'Marketing & Business';
  description: string;
  shortDescription: string;
  level: 'Beginner' | 'Intermediate' | 'All Levels';
  duration: string;
  priceGHS: number;
  originalPriceGHS?: number;
  image: string;
  syllabus: string[];
  features: string[];
  isFeatured?: boolean;
  upcomingDate?: string;
  instructor?: string;
}

export interface TrainingSession {
  id: string;
  title: string;
  courseId?: string;
  startDate: string;
  endDate: string;
  schedule: string;
  mode: 'In-Person (Accra Hub)' | 'Online Live (Zoom)' | 'Hybrid';
  priceGHS: number;
  originalPriceGHS?: number;
  maxSeats: number;
  enrolledCount: number;
  status: 'Upcoming' | 'In Progress' | 'Completed' | 'Registration Closed';
  description: string;
  topics: { day: string; title: string; details: string }[];
  certificateIncluded: boolean;
}

export interface Enrollment {
  id: string;
  referenceCode: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  studentWhatsApp: string;
  courseId: string;
  courseTitle: string;
  preferredDate: string;
  location: string;
  learningMode: 'Online Live' | 'In-Person Weekday' | 'In-Person Weekend';
  message?: string;
  status: 'pending' | 'confirmed' | 'paid' | 'completed' | 'cancelled';
  amountGHS: number;
  enrolledAt: string;
  paymentMethod?: string;
}

export interface Certificate {
  id: string;
  certificateCode: string;
  studentName: string;
  studentEmail: string;
  courseTitle: string;
  issueDate: string;
  directorName: string;
  grade?: string;
  qrVerified: boolean;
}

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  startingPriceGHS: number;
  timeline: string;
  features: string[];
  badge?: string;
  popular?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Websites' | 'Graphic Design' | 'AI Content' | 'Digital Projects';
  client: string;
  description: string;
  image: string;
  liveUrl?: string;
  tags: string[];
  completedYear: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  location: string;
  avatar: string;
  quote: string;
  courseTaken: string;
  rating: number;
  isPlaceholder?: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  courseInterested: string;
  message: string;
  createdAt: string;
  status: 'new' | 'replied' | 'in-progress';
}

export interface WebsiteSettings {
  academyName: string;
  tagline: string;
  directorName: string; // [YOUR NAME]
  directorPhoto: string; // [YOUR PHOTO]
  directorBio: string;
  whatsAppNumber: string; // [WHATSAPP_NUMBER]
  whatsAppDisplay: string;
  phone: string; // [PHONE NUMBER]
  email: string; // [EMAIL ADDRESS]
  location: string; // [LOCATION]
  operatingHours: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    tiktok: string;
    linkedin: string;
    youtube: string;
  };
  announcementText: string;
  announcementActive: boolean;
}
