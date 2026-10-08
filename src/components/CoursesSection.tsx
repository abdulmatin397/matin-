import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Course } from '../types';
import {
  Clock,
  BarChart,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Check,
  Search,
  Filter
} from 'lucide-react';

export const CoursesSection: React.FC = () => {
  const { courses, openEnrollModal, setSelectedCourse, generateWhatsAppUrl } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Fundamentals',
    'Development',
    'AI & Tech',
    'Design & Creative',
    'Marketing & Business',
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleEnroll = (course: Course) => {
    openEnrollModal(course);
  };

  const handleWhatsAppEnroll = (course: Course) => {
    const url = generateWhatsAppUrl({
      courseTitle: course.title,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="courses" className="py-20 bg-[#060c1d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Practical Curriculum in Ghana</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading">
            Our Industry-Ready <span className="gh-gold-text">Digital Courses</span>
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Carefully curated for beginners, entrepreneurs, students, and professionals. 
            All courses include practical projects, software templates, and verified certification.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-white placeholder-slate-500"
            />
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl bg-[#091533]/80 border border-slate-800/80 hover:border-amber-500/40 shadow-xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Course Thumbnail Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091533] via-transparent to-transparent"></div>

                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900/90 text-amber-300 border border-amber-400/30 backdrop-blur-sm">
                  {course.category}
                </span>

                {/* Level badge */}
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-600/90 text-white backdrop-blur-sm">
                  {course.level}
                </span>

                {/* Price in GHS overlay */}
                <div className="absolute bottom-3 left-3 flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-black text-white font-heading drop-shadow-md">
                    GH₵ {course.priceGHS}
                  </span>
                  {course.originalPriceGHS && (
                    <span className="text-xs line-through text-slate-400 drop-shadow">
                      GH₵ {course.originalPriceGHS}
                    </span>
                  )}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-heading leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    {course.shortDescription}
                  </p>
                </div>

                {/* Meta details */}
                <div className="grid grid-cols-2 gap-2 py-2 border-y border-slate-800/80 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BarChart className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Syllabus Highlights Preview */}
                <div className="space-y-1 text-xs text-slate-300">
                  <p className="text-[11px] font-semibold uppercase text-slate-400">Key modules:</p>
                  {course.syllabus.slice(0, 2).map((mod, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1 text-[11px]">{mod}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons: Enroll Now & WhatsApp */}
                <div className="pt-2 grid grid-cols-2 gap-2">
                  {/* Enroll Now */}
                  <button
                    onClick={() => handleEnroll(course)}
                    className="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Register via WhatsApp */}
                  <button
                    onClick={() => handleWhatsAppEnroll(course)}
                    className="py-2.5 px-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-emerald-100 font-semibold text-xs border border-emerald-500/30 transition-all flex items-center justify-center gap-1 cursor-pointer"
                    title="Register via WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-300 fill-emerald-300/20" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search yields nothing */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <p className="text-base font-semibold">No courses match your filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-amber-400 underline font-bold cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
