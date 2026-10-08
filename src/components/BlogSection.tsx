import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BlogPost } from '../types';
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Sparkles,
  Share2,
  Eye,
  Tag,
  X,
  MessageCircle,
  ThumbsUp,
  Bookmark
} from 'lucide-react';

export const BlogSection: React.FC = () => {
  const { blogPosts, selectedBlogPost, setSelectedBlogPost, setCurrentView, generateWhatsAppUrl } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePostModal, setActivePostModal] = useState<BlogPost | null>(null);

  const categories = [
    'All',
    'Career & Tech',
    'AI & Automation',
    'Web Development',
    'E-Commerce',
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(p => p.isFeatured) || blogPosts[0];

  const handleReadPost = (post: BlogPost) => {
    setActivePostModal(post);
  };

  return (
    <section id="blog" className="py-16 sm:py-20 bg-[#060c1d] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 fill-amber-400/20" />
            <span>Articles, Tutorials &amp; Tech Insights</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight">
            Matin Blog <span className="gh-gold-text">Publications</span>
          </h1>
          <p className="mt-3 text-base text-slate-300">
            Practical guides on computer skills, web development, AI content creation, Ghanaian freelancing, and building profitable digital solutions.
          </p>
        </div>

        {/* Featured Hero Article */}
        {featuredPost && selectedCategory === 'All' && !searchQuery && (
          <div className="mb-14 rounded-3xl bg-[#091533] border-2 border-amber-500/30 overflow-hidden shadow-2xl hover:border-amber-400/50 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              {/* Featured Image */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px] overflow-hidden bg-slate-950">
                <img
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091533] via-transparent to-transparent lg:hidden"></div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Featured Editorial</span>
                </div>
              </div>

              {/* Text content */}
              <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  <span>{featuredPost.category}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2
                  onClick={() => handleReadPost(featuredPost)}
                  className="text-2xl sm:text-3xl font-black text-white font-heading hover:text-amber-400 transition-colors cursor-pointer leading-tight"
                >
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                {/* Author and Date */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-amber-400/50 bg-slate-800">
                      <img
                        src={featuredPost.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                        alt={featuredPost.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white leading-tight">{featuredPost.author}</p>
                      <p className="text-[11px] text-slate-400">{featuredPost.date}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleReadPost(featuredPost)}
                    className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search & Categories Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search posts or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-white placeholder-slate-500"
            />
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl bg-[#091533] border border-slate-800 hover:border-amber-400/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Featured Image */}
                <div
                  onClick={() => handleReadPost(post)}
                  className="relative h-48 sm:h-52 overflow-hidden bg-slate-950 cursor-pointer"
                >
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091533] via-transparent to-transparent"></div>

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-900/90 text-amber-300 border border-amber-400/30 backdrop-blur-sm">
                    {post.category}
                  </span>

                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-900/80 text-slate-300 backdrop-blur-sm flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {post.readTime}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    {post.date}
                  </span>

                  <h3
                    onClick={() => handleReadPost(post)}
                    className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-heading leading-snug cursor-pointer line-clamp-2"
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px] border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-amber-400/40 bg-slate-800">
                    <img
                      src={post.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                      alt={post.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="truncate max-w-[120px] font-medium">{post.author}</span>
                </div>

                <button
                  onClick={() => handleReadPost(post)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <p className="text-base font-semibold">No blog articles match your search.</p>
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

      {/* Full Article Reader Modal */}
      {activePostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#091533] border-2 border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-[#060c1d] shrink-0">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-400/30">
                {activePostModal.category}
              </span>
              <button
                onClick={() => setActivePostModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Featured Image inside Modal */}
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                <img
                  src={activePostModal.featuredImage}
                  alt={activePostModal.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Metadata */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-amber-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {activePostModal.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {activePostModal.readTime}
                  </span>
                  <span>•</span>
                  <span>By {activePostModal.author}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-white font-heading leading-tight">
                  {activePostModal.title}
                </h1>
              </div>

              {/* Excerpt callout */}
              <div className="p-4 rounded-xl bg-slate-900 border-l-4 border-amber-400 text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                {activePostModal.excerpt}
              </div>

              {/* Article Content formatted */}
              <div className="text-sm text-slate-200 leading-relaxed space-y-4 whitespace-pre-line font-normal">
                {activePostModal.content}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                {activePostModal.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs border border-slate-800"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Next Action Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0b1736] to-[#070e24] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    Want to learn these skills hands-on?
                  </h4>
                  <p className="text-xs text-slate-400">
                    Join our upcoming in-person or online live training batches in Ghana.
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a
                    href={generateWhatsAppUrl({
                      customMessage: `Hello Matin Blog, I just read your article "${activePostModal.title}" and would like to learn more!`,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Discuss on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setActivePostModal(null);
                      setCurrentView('courses');
                    }}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
                  >
                    View Courses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
