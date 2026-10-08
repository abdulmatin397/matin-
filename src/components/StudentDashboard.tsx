import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  BookOpen,
  CheckCircle2,
  Calendar,
  Award,
  FileText,
  User,
  HelpCircle,
  LogOut,
  Clock,
  PlayCircle,
  Download,
  ExternalLink,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const {
    currentUser,
    logout,
    enrollments,
    courses,
    trainingSessions,
    certificates,
    setSelectedCertificate,
    generateWhatsAppUrl,
    settings,
    openEnrollModal
  } = useApp();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'courses' | 'progress' | 'enrollments' | 'materials' | 'certificates' | 'profile' | 'support'
  >('overview');

  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({
    'c1-l1': true,
    'c1-l2': true,
    'c1-l3': true,
    'c2-l1': true,
  });

  const toggleLesson = (key: string) => {
    setCompletedLessons(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Student specific enrollments
  const studentEnrollments = enrollments.filter(
    (e) => e.studentEmail.toLowerCase() === currentUser?.email.toLowerCase() || currentUser?.role === 'admin'
  );

  // Stats calculation
  const enrolledCount = studentEnrollments.length || 2;
  const completedCount = 1;
  const upcomingCount = trainingSessions.filter(s => s.status === 'Upcoming').length;
  const certCount = certificates.length;

  const handleOpenCertificate = (cert: (typeof certificates)[0]) => {
    setSelectedCertificate(cert);
  };

  return (
    <div className="min-h-screen bg-[#060c1d] py-8 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Card */}
        <div className="p-6 rounded-3xl bg-[#091533] border border-amber-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-400 bg-slate-900 shrink-0">
              <img
                src={currentUser?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'}
                alt={currentUser?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  Student Portal
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600/80 text-white">
                  Active Student
                </span>
              </div>
              <h2 className="text-2xl font-black text-white font-heading">
                Welcome back, {currentUser?.name || 'Student'}!
              </h2>
              <p className="text-xs text-slate-400">
                {currentUser?.email} • Ghana Hub ID: DSA-STU-4829
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tutor WhatsApp</span>
            </a>
            <button
              onClick={logout}
              className="px-3.5 py-2 rounded-xl bg-rose-950/50 hover:bg-rose-900 text-rose-300 border border-rose-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 border-b border-slate-800 scrollbar-none">
          {[
            { id: 'overview', label: 'Overview', icon: BookOpen },
            { id: 'courses', label: 'My Courses', icon: PlayCircle },
            { id: 'progress', label: 'Course Progress', icon: CheckCircle2 },
            { id: 'enrollments', label: 'My Enrollments', icon: FileText },
            { id: 'materials', label: 'Learning Materials', icon: Download },
            { id: 'certificates', label: 'Certificates', icon: Award },
            { id: 'profile', label: 'Profile', icon: User },
            { id: 'support', label: 'Support & Help', icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
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

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* 4 Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-400">Enrolled Courses</span>
                <p className="text-3xl font-black text-white font-heading">{enrolledCount}</p>
                <span className="text-[11px] text-blue-400">Active learning journey</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-400">Completed Courses</span>
                <p className="text-3xl font-black text-emerald-400 font-heading">{completedCount}</p>
                <span className="text-[11px] text-slate-400">Exam completed</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-400">Upcoming Training</span>
                <p className="text-3xl font-black text-amber-400 font-heading">{upcomingCount}</p>
                <span className="text-[11px] text-amber-300/80">Starts next Monday</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-400">Certificates Earned</span>
                <p className="text-3xl font-black text-purple-400 font-heading">{certCount}</p>
                <span className="text-[11px] text-purple-300/80">Verified &amp; Printable</span>
              </div>
            </div>

            {/* Current Active Course Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0b1a42] via-[#091533] to-[#070e24] border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-amber-500 text-slate-950">
                    In Progress
                  </span>
                  <span className="text-xs text-slate-400">75% Completed</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                  Computer Skills for Beginners
                </h3>
                <p className="text-xs text-slate-300 max-w-xl">
                  Next Class: Windows File Mastery &amp; Cloud Drive Backups. Weekdays 9:00 AM in Accra Hub or Live via Zoom.
                </p>
                <div className="w-full sm:w-80 bg-slate-800 h-2 rounded-full overflow-hidden mt-3">
                  <div className="bg-amber-400 h-full w-3/4 rounded-full"></div>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('progress')}
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 cursor-pointer shadow"
              >
                Continue Learning →
              </button>
            </div>

            {/* Quick Actions & Recent Certificates */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Issued Certificates */}
              <div className="p-6 rounded-3xl bg-[#091533] border border-slate-800 space-y-4">
                <h4 className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  Your Verified Certificates
                </h4>
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-2xl bg-slate-900 border border-amber-500/20 flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-sm font-bold text-white">{cert.courseTitle}</p>
                      <p className="text-xs text-amber-400 font-mono mt-0.5">{cert.certificateCode}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Issued: {cert.issueDate}</p>
                    </div>
                    <button
                      onClick={() => handleOpenCertificate(cert)}
                      className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      View / Print
                    </button>
                  </div>
                ))}
              </div>

              {/* Learning Resource Cheat Sheets */}
              <div className="p-6 rounded-3xl bg-[#091533] border border-slate-800 space-y-4">
                <h4 className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Download className="w-5 h-5 text-blue-400" />
                  Latest Downloadable Materials
                </h4>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-200">Windows &amp; Mac Shortcut Cheat Sheet (PDF)</p>
                      <p className="text-[10px] text-slate-400">Essential shortcuts for Ghanaian office productivity</p>
                    </div>
                    <span className="text-amber-400 font-bold hover:underline cursor-pointer">Download</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-200">Gemini &amp; ChatGPT Prompt Bible for Ghana</p>
                      <p className="text-[10px] text-slate-400">200+ battle-tested marketing and business prompts</p>
                    </div>
                    <span className="text-amber-400 font-bold hover:underline cursor-pointer">Download</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: My Courses */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white font-heading">
              Enrolled Courses &amp; Modules
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.slice(0, 2).map((c) => (
                <div key={c.id} className="p-6 rounded-3xl bg-[#091533] border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-16 h-16 rounded-xl object-cover border border-amber-400/30"
                    />
                    <div>
                      <span className="text-[10px] font-bold text-amber-400 uppercase">{c.category}</span>
                      <h4 className="text-base font-bold text-white font-heading">{c.title}</h4>
                      <p className="text-xs text-slate-400">{c.duration}</p>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-slate-800 pt-3">
                    <p className="text-xs font-semibold text-slate-300">Course Syllabus Modules:</p>
                    {c.syllabus.map((s, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs text-slate-400 p-2 rounded-lg bg-slate-900">
                        <span>{s}</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <button
                      onClick={() => setActiveTab('progress')}
                      className="text-xs font-bold text-amber-400 hover:underline cursor-pointer"
                    >
                      Open Learning Checkpoints →
                    </button>
                    <span className="text-xs text-emerald-400 font-semibold">Status: Enrolled</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Course Progress Tracker */}
        {activeTab === 'progress' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Interactive Course Checkpoints
                </h3>
                <p className="text-xs text-slate-400">
                  Mark off lessons as you complete them to unlock your final Certificate of Competence.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { id: 'c1-l1', title: 'Lesson 1: Computer Hardware, Mouse Mastery & Fast Touch Typing', duration: '2 Hours' },
                { id: 'c1-l2', title: 'Lesson 2: Windows OS Navigation, Folders & File Organization', duration: '2 Hours' },
                { id: 'c1-l3', title: 'Lesson 3: Keyboard Shortcuts & Safe Flash Drive Handling', duration: '2 Hours' },
                { id: 'c1-l4', title: 'Lesson 4: Internet Safety, Avoiding MoMo Scams & Google Workspace', duration: '2 Hours' },
                { id: 'c1-l5', title: 'Lesson 5: Introduction to Generative AI (Gemini & ChatGPT)', duration: '3 Hours' },
                { id: 'c1-l6', title: 'Lesson 6: AI Content Creation & Marketing Graphics Lab', duration: '3 Hours' },
                { id: 'c1-l7', title: 'Lesson 7: Capstone Project Submission & Final Practical Exam', duration: '4 Hours' },
              ].map((lesson) => {
                const isDone = completedLessons[lesson.id];
                return (
                  <div
                    key={lesson.id}
                    onClick={() => toggleLesson(lesson.id)}
                    className={`p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                      isDone
                        ? 'bg-slate-900/90 border-emerald-500/40 text-slate-200'
                        : 'bg-[#091533] border-slate-800 text-slate-400 hover:border-amber-400/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                        isDone ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-600'
                      }`}>
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : null}
                      </div>
                      <div>
                        <p className={`text-sm font-bold ${isDone ? 'text-white' : 'text-slate-300'}`}>
                          {lesson.title}
                        </p>
                        <p className="text-xs text-slate-500">Duration: {lesson.duration}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold ${isDone ? 'text-emerald-400' : 'text-slate-500'}`}>
                      {isDone ? 'Completed' : 'Click to Mark Complete'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: My Enrollments */}
        {activeTab === 'enrollments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white font-heading">
                Registration History &amp; Receipts
              </h3>
              <button
                onClick={() => openEnrollModal()}
                className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 cursor-pointer"
              >
                Enroll in Another Course
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs bg-[#091533] border border-slate-800 rounded-2xl overflow-hidden">
                <thead className="bg-slate-900 text-slate-400 font-bold uppercase text-[10px] border-b border-slate-800">
                  <tr>
                    <th className="p-4">Reference</th>
                    <th className="p-4">Course</th>
                    <th className="p-4">Mode</th>
                    <th className="p-4">Tuition</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">WhatsApp Confirm</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {studentEnrollments.map((enr) => (
                    <tr key={enr.id} className="hover:bg-slate-900/50">
                      <td className="p-4 font-mono font-bold text-amber-400">{enr.referenceCode}</td>
                      <td className="p-4 font-semibold text-white">{enr.courseTitle}</td>
                      <td className="p-4 text-slate-300">{enr.learningMode}</td>
                      <td className="p-4 font-bold text-white">GH₵ {enr.amountGHS}</td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          enr.status === 'confirmed' || enr.status === 'paid'
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : 'bg-amber-500/20 text-amber-300'
                        }`}>
                          {enr.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <a
                          href={generateWhatsAppUrl({
                            courseTitle: enr.courseTitle,
                            studentName: enr.studentName,
                            phone: enr.studentPhone,
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:underline font-semibold"
                        >
                          Chat Admissions →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 5: Learning Materials */}
        {activeTab === 'materials' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white font-heading">
              Course Downloads, Templates &amp; Prompt Libraries
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Windows 11 Master Keyboard Shortcuts',
                  type: 'PDF Guide • 4.2 MB',
                  desc: 'Comprehensive visual cheat sheet for fast typing, window snapping, and desktop productivity.',
                },
                {
                  title: 'ChatGPT & Gemini Prompt Pack for Ghana',
                  type: 'Resource Hub • 12.8 MB',
                  desc: 'Templates for writing business proposals, sales letters, WhatsApp broadcast messages, and ad copy.',
                },
                {
                  title: 'HTML & CSS Starter Boilerplate',
                  type: 'ZIP Code Pack • 1.1 MB',
                  desc: 'Clean starter code for building Ghanaian corporate websites, including mobile nav and WhatsApp button.',
                },
                {
                  title: 'Microsoft Excel Corporate Budget Sheet',
                  type: 'XLSX Spreadsheet • 2.5 MB',
                  desc: 'Pre-formatted formulas for Ghana Cedis (GH₵) invoicing, tax calculations, and monthly expense sheets.',
                },
                {
                  title: 'Canva Social Media Flyer Template Kit',
                  type: 'Canva Cloud Links',
                  desc: '50+ flyer layouts for church events, sales discounts, restaurant menus, and educational academies.',
                },
                {
                  title: 'E-commerce Paystack & MoMo Setup Checklist',
                  type: 'PDF Checklist • 1.9 MB',
                  desc: 'Step-by-step documentation for accepting MTN MoMo and Telecel Cash on custom websites.',
                },
              ].map((res, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#091533] border border-slate-800 space-y-3">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{res.type}</span>
                  <h4 className="text-base font-bold text-white font-heading">{res.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{res.desc}</p>
                  <button
                    onClick={() => alert(`Starting download for: ${res.title}`)}
                    className="w-full py-2 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-300 text-xs font-semibold border border-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download File</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Certificates */}
        {activeTab === 'certificates' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white font-heading">
              Official Certificates of Completion
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <div key={cert.id} className="p-6 rounded-3xl bg-[#091533] border-2 border-amber-500/40 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 uppercase">Verified Academic Credential</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-bold">
                      QR Verified
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading">{cert.courseTitle}</h4>
                  <div className="text-xs text-slate-300 space-y-1">
                    <p>Awarded to: <strong className="text-white">{cert.studentName}</strong></p>
                    <p>Verification Code: <strong className="text-amber-400 font-mono">{cert.certificateCode}</strong></p>
                    <p>Issue Date: <strong className="text-white">{cert.issueDate}</strong></p>
                    <p>Performance Grade: <strong className="text-emerald-400">{cert.grade}</strong></p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => handleOpenCertificate(cert)}
                      className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                    >
                      <Award className="w-4 h-4" />
                      <span>View Official Printable Certificate</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 7: Profile */}
        {activeTab === 'profile' && (
          <div className="max-w-xl bg-[#091533] p-6 rounded-3xl border border-slate-800 space-y-5">
            <h3 className="text-xl font-bold text-white font-heading">
              Student Profile Information
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Full Name</label>
                <input
                  type="text"
                  defaultValue={currentUser?.name}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Email Address</label>
                <input
                  type="email"
                  defaultValue={currentUser?.email}
                  readOnly
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Phone Number</label>
                <input
                  type="tel"
                  defaultValue={currentUser?.phone || '024 456 7890'}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                />
              </div>
              <div className="pt-2">
                <button
                  onClick={() => alert('Profile details updated successfully.')}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 cursor-pointer"
                >
                  Save Profile Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 8: Support */}
        {activeTab === 'support' && (
          <div className="max-w-2xl bg-[#091533] p-6 sm:p-8 rounded-3xl border border-amber-500/30 space-y-6">
            <h3 className="text-xl font-bold text-white font-heading">
              Student Academic Support Desk
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Encountering difficulties with a software installation, lab exercises, or project submission? Our teaching assistants and lead instructor are here to help.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <a
                href={generateWhatsAppUrl({ customMessage: `Hello Digital Skills Academy tutor, I need assistance with my course exercises. My name is ${currentUser?.name}.` })}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-700/80 hover:bg-emerald-600 text-white border border-emerald-500/40 space-y-1 block"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300" />
                <p className="font-bold text-sm">Direct WhatsApp Tutor Desk</p>
                <p className="text-emerald-100 text-[11px]">Instant answers to coding &amp; design questions</p>
              </a>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <Calendar className="w-5 h-5 text-blue-400" />
                <p className="font-bold text-white text-sm">Office Hours &amp; Accra Lab</p>
                <p className="text-slate-400 text-[11px]">{settings.operatingHours}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
