import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Course, TrainingSession, Enrollment, Testimonial, PortfolioProject, WebsiteSettings, BlogPost } from '../types';
import {
  Shield,
  Users,
  BookOpen,
  FileText,
  Calendar,
  CreditCard,
  Award,
  MessageSquare,
  Briefcase,
  Mail,
  Settings,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  XCircle,
  ExternalLink,
  MessageCircle,
  DollarSign,
  Lock,
  ArrowRight,
  Image as ImageIcon,
  Sparkles,
  Upload
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    currentUser,
    login,
    logout,
    courses,
    addCourse,
    updateCourse,
    deleteCourse,
    enrollments,
    updateEnrollmentStatus,
    trainingSessions,
    addTrainingSession,
    deleteTrainingSession,
    certificates,
    issueCertificate,
    deleteCertificate,
    testimonials,
    addTestimonial,
    deleteTestimonial,
    portfolio,
    addPortfolioProject,
    deletePortfolioProject,
    contactMessages,
    updateContactMessageStatus,
    settings,
    updateSettings,
    generateWhatsAppUrl,
    blogPosts,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    setCurrentView
  } = useApp();

  const [activeTab, setActiveTab] = useState<
    | 'overview'
    | 'blog'
    | 'courses'
    | 'enrollments'
    | 'training'
    | 'payments'
    | 'certificates'
    | 'testimonials'
    | 'portfolio'
    | 'messages'
    | 'settings'
  >('blog');

  // Blog post modal/creation state
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [blogForm, setBlogForm] = useState<Partial<BlogPost>>({
    title: '',
    category: 'Career & Tech',
    excerpt: '',
    content: '',
    featuredImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    author: 'Matin • Tech Educator',
    readTime: '5 min read',
    tags: ['Tech', 'Digital Skills', 'Ghana'],
    isFeatured: true,
  });

  // Course modal state
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [courseForm, setCourseForm] = useState<Partial<Course>>({
    title: '',
    category: 'Fundamentals',
    shortDescription: '',
    description: '',
    level: 'Beginner',
    duration: '4 Weeks',
    priceGHS: 450,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    syllabus: ['Module 1: Introduction', 'Module 2: Core Concepts', 'Module 3: Project & Certificate'],
    features: ['Practical Exercises', 'Certificate of Completion'],
  });

  // Certificate issuance modal state
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [certForm, setCertForm] = useState({
    studentName: '',
    studentEmail: '',
    courseTitle: '5-Day Computer Skills & AI Content Creation Training for Beginners',
    issueDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }),
    directorName: settings.directorName,
    grade: 'Distinction (92%)',
  });

  // Settings form local state
  const [settingsForm, setSettingsForm] = useState<WebsiteSettings>(settings);
  const [savedSettingsNotice, setSavedSettingsNotice] = useState(false);

  const handleCreateBlogPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title) return;
    addBlogPost({
      title: blogForm.title,
      slug: (blogForm.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category: blogForm.category || 'Career & Tech',
      excerpt: blogForm.excerpt || '',
      content: blogForm.content || '',
      featuredImage: blogForm.featuredImage || 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
      author: blogForm.author || 'Matin • Tech Educator',
      authorAvatar: settings.directorPhoto,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      readTime: blogForm.readTime || '4 min read',
      tags: typeof blogForm.tags === 'string' ? (blogForm.tags as string).split(',').map((t: string) => t.trim()) : (blogForm.tags || ['Ghana', 'Tech']),
      isFeatured: Boolean(blogForm.isFeatured),
    });
    setIsBlogModalOpen(false);
    setBlogForm({
      title: '',
      category: 'Career & Tech',
      excerpt: '',
      content: '',
      featuredImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
      author: 'Matin • Tech Educator',
      readTime: '5 min read',
      tags: ['Tech', 'Digital Skills', 'Ghana'],
      isFeatured: false,
    });
  };

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlogForm(prev => ({ ...prev, featuredImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Protected Role check
  if (!currentUser || currentUser.role !== 'admin') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4 bg-[#060c1d]">
        <div className="max-w-md w-full bg-[#091533] p-8 rounded-3xl border border-rose-500/30 text-center space-y-4 shadow-2xl">
          <div className="w-16 h-16 mx-auto rounded-full bg-rose-500/20 border-2 border-rose-500 flex items-center justify-center text-rose-400">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-white font-heading">
            Admin Access Restricted
          </h2>
          <p className="text-xs text-slate-300">
            You must be logged in as an Administrator to manage Academy curriculum, students, and settings.
          </p>
          <button
            onClick={() => login('admin@digitalskills.edu.gh', 'admin')}
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer shadow"
          >
            Authenticate as Demo Admin (Director)
          </button>
        </div>
      </div>
    );
  }

  // Financial aggregates
  const totalRevenueGHS = enrollments.reduce((acc, curr) => acc + (curr.amountGHS || 0), 0);
  const pendingCount = enrollments.filter(e => e.status === 'pending').length;
  const confirmedCount = enrollments.filter(e => e.status === 'confirmed' || e.status === 'paid').length;

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(settingsForm);
    setSavedSettingsNotice(true);
    setTimeout(() => setSavedSettingsNotice(false), 3000);
  };

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseForm.title) return;
    addCourse({
      title: courseForm.title,
      category: courseForm.category as any || 'Fundamentals',
      description: courseForm.description || courseForm.shortDescription || '',
      shortDescription: courseForm.shortDescription || '',
      level: courseForm.level as any || 'Beginner',
      duration: courseForm.duration || '4 Weeks',
      priceGHS: Number(courseForm.priceGHS) || 500,
      image: courseForm.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      syllabus: courseForm.syllabus || ['Module 1', 'Module 2'],
      features: courseForm.features || ['Practical exercises'],
    });
    setIsCourseModalOpen(false);
  };

  const handleIssueCertificateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certForm.studentName) return;
    issueCertificate({
      studentName: certForm.studentName,
      studentEmail: certForm.studentEmail,
      courseTitle: certForm.courseTitle,
      issueDate: certForm.issueDate,
      directorName: certForm.directorName,
      grade: certForm.grade,
    });
    setIsCertModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050b18] py-8 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Admin Banner */}
        <div className="p-6 rounded-3xl bg-[#091533] border-2 border-amber-500/40 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-400 shrink-0">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                  Academy Management Console
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white uppercase">
                  Super Admin
                </span>
              </div>
              <h2 className="text-2xl font-black text-white font-heading">
                {settings.academyName} Control Center
              </h2>
              <p className="text-xs text-slate-400">
                Logged in as: {currentUser.name} ({currentUser.email})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={logout}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 border-b border-slate-800 scrollbar-none">
          {[
            { id: 'overview', label: 'Dashboard', icon: Shield },
            { id: 'blog', label: `Blog & Images (${blogPosts.length})`, icon: ImageIcon },
            { id: 'enrollments', label: `Enrollments (${enrollments.length})`, icon: FileText },
            { id: 'courses', label: `Courses (${courses.length})`, icon: BookOpen },
            { id: 'training', label: 'Training Sessions', icon: Calendar },
            { id: 'payments', label: 'Payments & Revenue', icon: CreditCard },
            { id: 'certificates', label: `Certificates (${certificates.length})`, icon: Award },
            { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
            { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
            { id: 'messages', label: `Inquiries (${contactMessages.length})`, icon: Mail },
            { id: 'settings', label: 'Website Settings', icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab: Blog & Featured Images */}
        {activeTab === 'blog' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-[#091533] border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase text-amber-400">Content Studio &amp; Featured Images</span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                  Blog Posts &amp; Image Publishing
                </h3>
                <p className="text-xs text-slate-400">
                  Publish articles, upload or paste featured image URLs, and preview in real-time.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsBlogModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Post with Featured Image</span>
                </button>
                <button
                  onClick={() => {
                    setCurrentView('ai-studio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>AI Studio Lab</span>
                </button>
              </div>
            </div>

            {/* List of Blog Posts with Featured Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <div key={post.id} className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div>
                    {/* Featured Image Thumbnail */}
                    <div className="relative h-44 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 mb-3">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/90 text-amber-400 border border-amber-400/30">
                        {post.category}
                      </span>
                      {post.isFeatured && (
                        <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-black bg-amber-500 text-slate-950">
                          FEATURED
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white font-heading line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                      {post.excerpt}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-2">
                      Published: {post.date} • {post.readTime}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => {
                        const newImg = prompt("Enter new Featured Image URL for this post:", post.featuredImage);
                        if (newImg && newImg.trim()) {
                          updateBlogPost(post.id, { featuredImage: newImg.trim() });
                        }
                      }}
                      className="text-xs text-amber-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>Change Image</span>
                    </button>

                    <button
                      onClick={() => {
                        if (confirm(`Delete blog post "${post.title}"?`)) {
                          deleteBlogPost(post.id);
                        }
                      }}
                      className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-950 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-400">Total Enrolled Students</span>
                <p className="text-3xl font-black text-white font-heading">{enrollments.length}</p>
                <span className="text-[11px] text-emerald-400">+{pendingCount} pending reviews</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-400">Total Revenue (GHS)</span>
                <p className="text-3xl font-black text-amber-400 font-heading">
                  GH₵ {totalRevenueGHS.toLocaleString()}
                </p>
                <span className="text-[11px] text-slate-400">MTN MoMo / Telecel / Cards</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-400">Active Courses</span>
                <p className="text-3xl font-black text-blue-400 font-heading">{courses.length}</p>
                <span className="text-[11px] text-slate-400">Ghana practical syllabus</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-400">Certificates Issued</span>
                <p className="text-3xl font-black text-purple-400 font-heading">{certificates.length}</p>
                <span className="text-[11px] text-purple-300">Verified QR codes</span>
              </div>
            </div>

            {/* Recent Registrations Table */}
            <div className="p-6 rounded-3xl bg-[#091533] border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-heading">
                  Recent Student Registrations
                </h3>
                <button
                  onClick={() => setActiveTab('enrollments')}
                  className="text-xs text-amber-400 hover:underline font-semibold cursor-pointer"
                >
                  View All Enrollments →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 text-slate-400 font-bold uppercase text-[10px] border-b border-slate-800">
                    <tr>
                      <th className="p-3">Ref Code</th>
                      <th className="p-3">Student Name</th>
                      <th className="p-3">Course</th>
                      <th className="p-3">Phone / WhatsApp</th>
                      <th className="p-3">Tuition</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {enrollments.slice(0, 5).map((enr) => (
                      <tr key={enr.id} className="hover:bg-slate-900/40">
                        <td className="p-3 font-mono font-bold text-amber-400">{enr.referenceCode}</td>
                        <td className="p-3 font-semibold text-white">{enr.studentName}</td>
                        <td className="p-3 text-slate-300">{enr.courseTitle}</td>
                        <td className="p-3 text-slate-300">{enr.studentPhone}</td>
                        <td className="p-3 font-bold text-white">GH₵ {enr.amountGHS}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            enr.status === 'paid' || enr.status === 'confirmed'
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : 'bg-amber-500/20 text-amber-300'
                          }`}>
                            {enr.status}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="flex gap-1.5">
                            <button
                              onClick={() => updateEnrollmentStatus(enr.id, 'paid')}
                              className="px-2 py-1 bg-emerald-600/30 text-emerald-300 hover:bg-emerald-600 hover:text-white rounded text-[10px] font-bold cursor-pointer"
                            >
                              Mark Paid
                            </button>
                            <a
                              href={generateWhatsAppUrl({
                                courseTitle: enr.courseTitle,
                                studentName: enr.studentName,
                                phone: enr.studentPhone,
                              })}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-1 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded text-[10px]"
                            >
                              WhatsApp
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Enrollments Full Table */}
        {activeTab === 'enrollments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white font-heading">
                All Student Registrations ({enrollments.length})
              </h3>
            </div>

            <div className="overflow-x-auto bg-[#091533] border border-slate-800 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-slate-400 font-bold uppercase text-[10px] border-b border-slate-800">
                  <tr>
                    <th className="p-4">Reference</th>
                    <th className="p-4">Student</th>
                    <th className="p-4">Course</th>
                    <th className="p-4">Contact</th>
                    <th className="p-4">Location &amp; Mode</th>
                    <th className="p-4">Tuition</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Change Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {enrollments.map((enr) => (
                    <tr key={enr.id} className="hover:bg-slate-900/40">
                      <td className="p-4 font-mono font-bold text-amber-400">{enr.referenceCode}</td>
                      <td className="p-4">
                        <p className="font-bold text-white">{enr.studentName}</p>
                        <p className="text-[11px] text-slate-400">{enr.studentEmail}</p>
                      </td>
                      <td className="p-4 text-slate-200">{enr.courseTitle}</td>
                      <td className="p-4">
                        <p className="text-slate-300">{enr.studentPhone}</p>
                        <a
                          href={generateWhatsAppUrl({
                            courseTitle: enr.courseTitle,
                            studentName: enr.studentName,
                            phone: enr.studentPhone,
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1 mt-0.5"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>WhatsApp Chat</span>
                        </a>
                      </td>
                      <td className="p-4">
                        <p className="text-slate-300">{enr.location}</p>
                        <p className="text-[11px] text-slate-500">{enr.learningMode}</p>
                      </td>
                      <td className="p-4 font-bold text-white">GH₵ {enr.amountGHS}</td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          enr.status === 'paid'
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : enr.status === 'confirmed'
                            ? 'bg-blue-500/20 text-blue-300'
                            : enr.status === 'completed'
                            ? 'bg-purple-500/20 text-purple-300'
                            : 'bg-amber-500/20 text-amber-300'
                        }`}>
                          {enr.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <select
                          value={enr.status}
                          onChange={(e) => updateEnrollmentStatus(enr.id, e.target.value as any)}
                          className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-xs text-white"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="paid">Paid</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Courses Management */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Course Catalog Management ({courses.length})
                </h3>
                <p className="text-xs text-slate-400">
                  Update course tuition prices in GH₵, syllabi, and details.
                </p>
              </div>
              <button
                onClick={() => setIsCourseModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-amber-400 cursor-pointer shadow"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Course</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-amber-400 uppercase">{course.category}</span>
                      <span className="text-sm font-black text-white font-heading">GH₵ {course.priceGHS}</span>
                    </div>
                    <h4 className="text-base font-bold text-white font-heading">{course.title}</h4>
                    <p className="text-xs text-slate-300 line-clamp-2">{course.shortDescription}</p>
                    <p className="text-[11px] text-slate-400">Duration: {course.duration} • Level: {course.level}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => {
                        const newPrice = prompt(`Enter new price in GHS for ${course.title}:`, String(course.priceGHS));
                        if (newPrice && !isNaN(Number(newPrice))) {
                          updateCourse(course.id, { priceGHS: Number(newPrice) });
                        }
                      }}
                      className="text-xs text-amber-400 hover:underline font-semibold cursor-pointer"
                    >
                      Update Price
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete ${course.title}?`)) {
                          deleteCourse(course.id);
                        }
                      }}
                      className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-950 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Training Sessions */}
        {activeTab === 'training' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white font-heading">
              Bootcamp &amp; Training Sessions
            </h3>
            {trainingSessions.map((session) => (
              <div key={session.id} className="p-6 rounded-3xl bg-[#091533] border border-amber-500/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase">Special Cohort</span>
                    <h4 className="text-xl font-bold text-white font-heading">{session.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{session.startDate} • {session.schedule}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-amber-400">GH₵ {session.priceGHS}</span>
                    <p className="text-xs text-slate-400">{session.enrolledCount} / {session.maxSeats} Seats Filled</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-2">
                  {session.topics.map((t, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                      <p className="font-bold text-amber-400">{t.day}</p>
                      <p className="font-semibold text-white mt-0.5 line-clamp-1">{t.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Payments */}
        {activeTab === 'payments' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-[#091533] border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white font-heading">
                Ghana Payment &amp; Revenue Ledger
              </h3>
              <p className="text-xs text-slate-300">
                Tracking Mobile Money (MTN MoMo, Telecel Cash) and Card deposits.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400">Total Booked Volume</span>
                  <p className="text-2xl font-black text-white font-heading mt-1">
                    GH₵ {totalRevenueGHS.toLocaleString()}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400">Paid &amp; Cleared (MoMo / Card)</span>
                  <p className="text-2xl font-black text-emerald-400 font-heading mt-1">
                    GH₵ {(totalRevenueGHS * 0.7).toLocaleString()}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400">Pending Approvals</span>
                  <p className="text-2xl font-black text-amber-400 font-heading mt-1">
                    GH₵ {(totalRevenueGHS * 0.3).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Certificates */}
        {activeTab === 'certificates' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Issued Certificates Database ({certificates.length})
                </h3>
                <p className="text-xs text-slate-400">
                  Issue official Digital Skills Academy Certificates with unique verification codes.
                </p>
              </div>
              <button
                onClick={() => setIsCertModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-amber-400 cursor-pointer shadow"
              >
                <Award className="w-4 h-4" />
                <span>Issue New Certificate</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificates.map((cert) => (
                <div key={cert.id} className="p-5 rounded-2xl bg-[#091533] border border-amber-500/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-amber-400">{cert.certificateCode}</span>
                    <button
                      onClick={() => deleteCertificate(cert.id)}
                      className="text-rose-400 hover:text-rose-300 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{cert.studentName}</h4>
                    <p className="text-xs text-slate-300">{cert.courseTitle}</p>
                    <p className="text-[11px] text-slate-400 mt-1">Issue Date: {cert.issueDate} • Grade: {cert.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 7: Testimonials */}
        {activeTab === 'testimonials' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white font-heading">
              Student Testimonials &amp; Placeholders ({testimonials.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map((t) => (
                <div key={t.id} className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-bold text-white">{t.name}</h4>
                      <p className="text-xs text-slate-400">{t.role} ({t.location})</p>
                    </div>
                    {t.isPlaceholder && (
                      <span className="text-[9px] px-2 py-0.5 rounded bg-slate-800 text-amber-400 font-mono">
                        PLACEHOLDER
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 italic">"{t.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 8: Portfolio */}
        {activeTab === 'portfolio' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white font-heading">
              Client &amp; Student Portfolio Projects ({portfolio.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {portfolio.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-[#091533] border border-slate-800 space-y-2">
                  <span className="text-[10px] font-bold text-amber-400 uppercase">{p.category}</span>
                  <h4 className="text-sm font-bold text-white line-clamp-1">{p.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{p.description}</p>
                  <p className="text-[10px] text-slate-500">Client: {p.client}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 9: Contact Inquiries */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white font-heading">
              Website Contact Inquiries ({contactMessages.length})
            </h3>
            {contactMessages.length === 0 ? (
              <div className="p-8 rounded-2xl bg-[#091533] text-center text-slate-400 text-xs">
                No new messages received yet. Test by submitting the contact form on the home page!
              </div>
            ) : (
              <div className="space-y-3">
                {contactMessages.map((m) => (
                  <div key={m.id} className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">{m.name}</h4>
                        <p className="text-xs text-slate-400">{m.email} • {m.phone}</p>
                      </div>
                      <a
                        href={generateWhatsAppUrl({ customMessage: `Hello ${m.name}, thank you for contacting Digital Skills Academy regarding ${m.courseInterested}.` })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold"
                      >
                        Reply on WhatsApp
                      </a>
                    </div>
                    <p className="text-xs text-amber-300 font-semibold">Interested in: {m.courseInterested}</p>
                    <p className="text-xs text-slate-300 p-2.5 rounded-xl bg-slate-900 border border-slate-800">{m.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 10: Website Settings (Update WhatsApp number, contact info, placeholders) */}
        {activeTab === 'settings' && (
          <div className="max-w-3xl bg-[#091533] p-6 sm:p-8 rounded-3xl border border-amber-500/30 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white font-heading">
                Website Branding &amp; Contact Settings
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Update your Ghana WhatsApp number, contact info, and director placeholders across the entire website instantly.
              </p>
            </div>

            {savedSettingsNotice && (
              <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Website settings updated successfully! All pages reflect the new values.</span>
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-4">
              {/* WhatsApp Config */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp Link Number [WHATSAPP NUMBER] (e.g. 233240000000)
                  </label>
                  <input
                    type="text"
                    value={settingsForm.whatsAppNumber}
                    onChange={(e) => setSettingsForm({ ...settingsForm, whatsAppNumber: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp Display Format (e.g. 024 XXX XXXX)
                  </label>
                  <input
                    type="text"
                    value={settingsForm.whatsAppDisplay}
                    onChange={(e) => setSettingsForm({ ...settingsForm, whatsAppDisplay: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone Number [PHONE NUMBER]
                  </label>
                  <input
                    type="text"
                    value={settingsForm.phone}
                    onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address [EMAIL ADDRESS]
                  </label>
                  <input
                    type="email"
                    value={settingsForm.email}
                    onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                  />
                </div>
              </div>

              {/* Director Name & Photo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Lead Trainer Name [YOUR NAME]
                  </label>
                  <input
                    type="text"
                    value={settingsForm.directorName}
                    onChange={(e) => setSettingsForm({ ...settingsForm, directorName: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Photo URL [YOUR PHOTO]
                  </label>
                  <input
                    type="text"
                    value={settingsForm.directorPhoto}
                    onChange={(e) => setSettingsForm({ ...settingsForm, directorPhoto: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Physical Hub / Location [LOCATION]
                </label>
                <input
                  type="text"
                  value={settingsForm.location}
                  onChange={(e) => setSettingsForm({ ...settingsForm, location: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                />
              </div>

              {/* Announcement Banner */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Top Header Announcement Text
                </label>
                <input
                  type="text"
                  value={settingsForm.announcementText}
                  onChange={(e) => setSettingsForm({ ...settingsForm, announcementText: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition-colors cursor-pointer"
                >
                  Save Website Settings
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Modal: Add New Course */}
      {isCourseModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-[#091533] border-2 border-amber-500/40 rounded-3xl max-w-lg w-full p-6 space-y-4">
            <h3 className="text-xl font-bold text-white font-heading">Add New Course</h3>
            <form onSubmit={handleCreateCourse} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 block mb-1">Course Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Advanced AI Workflow Automation"
                  value={courseForm.title}
                  onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1">Price in GH₵</label>
                  <input
                    type="number"
                    required
                    value={courseForm.priceGHS}
                    onChange={(e) => setCourseForm({ ...courseForm, priceGHS: Number(e.target.value) })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1">Duration</label>
                  <input
                    type="text"
                    value={courseForm.duration}
                    onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-300 block mb-1">Short Description</label>
                <textarea
                  rows={2}
                  value={courseForm.shortDescription}
                  onChange={(e) => setCourseForm({ ...courseForm, shortDescription: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                ></textarea>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsCourseModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold cursor-pointer"
                >
                  Create Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Issue Certificate */}
      {isCertModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-[#091533] border-2 border-amber-500/40 rounded-3xl max-w-lg w-full p-6 space-y-4">
            <h3 className="text-xl font-bold text-white font-heading">Issue Official Certificate</h3>
            <form onSubmit={handleIssueCertificateSubmit} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 block mb-1">Student Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samuel Yaw Amankwah"
                  value={certForm.studentName}
                  onChange={(e) => setCertForm({ ...certForm, studentName: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-slate-300 block mb-1">Course Title</label>
                <select
                  value={certForm.courseTitle}
                  onChange={(e) => setCertForm({ ...certForm, courseTitle: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                >
                  <option value="5-Day Computer Skills & AI Content Creation Training for Beginners">
                    5-Day Computer Skills &amp; AI Bootcamp
                  </option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1">Grade</label>
                  <input
                    type="text"
                    value={certForm.grade}
                    onChange={(e) => setCertForm({ ...certForm, grade: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1">Issue Date</label>
                  <input
                    type="text"
                    value={certForm.issueDate}
                    onChange={(e) => setCertForm({ ...certForm, issueDate: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                  />
                </div>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsCertModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold cursor-pointer"
                >
                  Issue Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Create Blog Post with Featured Image */}
      {isBlogModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#091533] border-2 border-amber-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-7 space-y-4 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-amber-400" />
                <span>Create Post with Featured Image</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsBlogModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateBlogPost} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-300 block mb-1 font-semibold">
                  Post Title <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 10 Essential Tech Skills for Ghanaian Freelancers in 2026"
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1 font-semibold">Category</label>
                  <select
                    value={blogForm.category}
                    onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                  >
                    <option value="Career & Tech">Career &amp; Tech</option>
                    <option value="AI & Automation">AI &amp; Automation</option>
                    <option value="Web Development">Web Development</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Graphic Design">Graphic Design</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-semibold">Estimated Read Time</label>
                  <input
                    type="text"
                    value={blogForm.readTime}
                    onChange={(e) => setBlogForm({ ...blogForm, readTime: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                  />
                </div>
              </div>

              {/* Featured Image Management */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-3">
                <label className="text-slate-200 block font-bold text-xs flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <ImageIcon className="w-4 h-4" />
                    Featured Image URL or File Upload
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setIsBlogModalOpen(false);
                      setCurrentView('ai-studio');
                    }}
                    className="text-[10px] text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Generate in AI Studio Lab</span>
                  </button>
                </label>

                {/* URL Input */}
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={blogForm.featuredImage}
                  onChange={(e) => setBlogForm({ ...blogForm, featuredImage: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono"
                />

                {/* File Upload Option */}
                <div className="flex items-center gap-2">
                  <label className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer border border-slate-700 flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Local Image File</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileUpload}
                      className="hidden"
                    />
                  </label>
                  <span className="text-[11px] text-slate-400">JPG, PNG, WebP supported</span>
                </div>

                {/* Live Image Preview */}
                {blogForm.featuredImage && (
                  <div className="relative h-36 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                    <img
                      src={blogForm.featuredImage}
                      alt="Featured Image Preview"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/90 text-amber-400">
                      Live Preview
                    </span>
                  </div>
                )}
              </div>

              <div>
                <label className="text-slate-300 block mb-1 font-semibold">Excerpt / Summary</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Short introductory summary for cards..."
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                ></textarea>
              </div>

              <div>
                <label className="text-slate-300 block mb-1 font-semibold">Full Article Content</label>
                <textarea
                  rows={6}
                  required
                  placeholder="Write the full body of the post here..."
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-normal leading-relaxed"
                ></textarea>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isFeatured"
                  checked={blogForm.isFeatured}
                  onChange={(e) => setBlogForm({ ...blogForm, isFeatured: e.target.checked })}
                  className="rounded text-amber-500"
                />
                <label htmlFor="isFeatured" className="text-slate-300 text-xs cursor-pointer font-semibold">
                  Pin as Top Featured Editorial on Matin Blog
                </label>
              </div>

              <div className="pt-2 flex justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsBlogModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold cursor-pointer shadow"
                >
                  Publish Post &amp; Featured Image
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
