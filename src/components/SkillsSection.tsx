import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Code,
  Laptop,
  Sparkles,
  Palette,
  TrendingUp,
  FileSpreadsheet,
  ShoppingCart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Award,
  Zap
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { setCurrentView, openEnrollModal, setIsQuoteModalOpen } = useApp();

  const skillGroups = [
    {
      category: 'Web Development & Architecture',
      icon: Code,
      color: 'blue',
      description: 'Building blazing-fast, mobile-responsive, SEO-optimized web solutions and portals for Ghanaian companies and global startups.',
      proficiency: '96%',
      technologies: ['HTML5 & Modern CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'React / TypeScript', 'Node.js / Express', 'Ghana Domains (.com / .com.gh)', 'cPanel & SSL Security'],
      highlights: ['Responsive Mobile-First UI', 'MoMo / Paystack Integration', 'Google Search & Local SEO', 'Speed & Performance Optimization'],
    },
    {
      category: 'Artificial Intelligence & Prompt Engineering',
      icon: Sparkles,
      color: 'amber',
      description: 'Harnessing generative AI models (Gemini 3 Pro, Claude, ChatGPT) to multiply business output, research, and coding velocity.',
      proficiency: '98%',
      technologies: ['Google Gemini Models', 'ChatGPT & Claude Opus', 'Few-Shot Prompt Engineering', 'Autonomous Research Workflows', 'Workflow Automation', 'AI Video Scriptwriting'],
      highlights: ['500+ Curated Prompt Library', '10x Faster Content Turnaround', 'AI-Assisted Business Proposals', 'Corporate Ethics & Data Safety'],
    },
    {
      category: 'AI Content Creation & High-Res Graphics',
      icon: Zap,
      color: 'purple',
      description: 'Creating commercial-grade visual assets, social flyers, product photography, and marketing copy with resolution and aspect ratio controls.',
      proficiency: '94%',
      technologies: ['Gemini Image Generation', 'Aspect Ratio Control (1:1, 9:16, 16:9)', '1K, 2K & 4K UHD Sizing', 'Canva AI Magic Studio', 'Photoshop AI Generative Fill'],
      highlights: ['Zero-Cost Commercial Mockups', 'Viral TikTok / Reels Scripts', 'Authentic African Aesthetic Prompts', 'Instant High-Res Downloads'],
    },
    {
      category: 'Graphic Design & Brand Identity',
      icon: Palette,
      color: 'emerald',
      description: 'Crafting visually arresting brand identities, corporate stationery, church flyers, social media kits, and print-ready collateral.',
      proficiency: '92%',
      technologies: ['Canva Pro Mastery', 'Adobe Photoshop Essentials', 'Typography & Color Harmony', 'Vector Logo Design', 'Ghana Print House Specifications'],
      highlights: ['Print & Digital Export Formats', 'Brand Guideline Documentation', 'Social Media Grid Aesthetics', 'Packaging & Box Labeling'],
    },
    {
      category: 'Digital Marketing & Social Media Strategy',
      icon: TrendingUp,
      color: 'rose',
      description: 'Executing high-converting ad campaigns on Facebook, Instagram, and TikTok with local Ghanaian Mobile Money ad funding.',
      proficiency: '95%',
      technologies: ['Meta Business Suite', 'Facebook & Instagram Ads', 'Ghana MoMo Ad Billing', 'WhatsApp Business Automation', 'TikTok Marketing', 'Google Maps Local Pin SEO'],
      highlights: ['Data-Driven ROAS Optimization', 'WhatsApp CRM Lead Funnels', 'Targeting Ghanaian Demographics', 'Direct Response Copywriting'],
    },
    {
      category: 'Office Productivity & Microsoft Office Suite',
      icon: FileSpreadsheet,
      color: 'cyan',
      description: 'Mastering the non-negotiable tools for corporate administration, data organization, and executive reporting.',
      proficiency: '97%',
      technologies: ['Microsoft Excel (Formulas & Pivot Tables)', 'Microsoft Word (Formatting & Mail Merge)', 'Microsoft PowerPoint Pitch Decks', 'Google Workspace (Drive & Docs)'],
      highlights: ['GH₵ Currency Invoicing Sheets', 'Executive Presentation Decks', 'Touch Typing Speed (60+ WPM)', 'Cloud Document Collaboration'],
    },
    {
      category: 'Fintech & E-Commerce Integration',
      icon: ShoppingCart,
      color: 'yellow',
      description: 'Seamless integration of Ghanaian Mobile Money and card payment gateways on digital storefronts and educational portals.',
      proficiency: '93%',
      technologies: ['Paystack API', 'MTN Mobile Money USSD API', 'Telecel Cash Gateway', 'Instant Webhook Handlers', 'Automated WhatsApp Order Alerts'],
      highlights: ['85%+ MoMo Payment Conversion', 'Automated Receipts & Invoices', 'Inventory Management Systems', 'Low-Fee Transaction Setup'],
    },
    {
      category: 'Computer Literacy & Cyber Safety',
      icon: Laptop,
      color: 'indigo',
      description: 'Overcoming tech anxiety for absolute beginners, teaching hardware mastery, file organization, and fraud prevention.',
      proficiency: '99%',
      technologies: ['Windows 11 OS Navigation', 'Hardware & Peripherals', 'Folder & USB Organization', 'Phishing & MoMo Scam Defense', 'PDF & Scanning Workflows'],
      highlights: ['Beginner-Friendly Coaching', 'Cyber Safety Checklists', 'Everyday Workplace Readiness', 'Confidence in Modern Workspaces'],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#070e24] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Core Competencies &amp; Expertise</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading">
            Our Digital Skills <span className="gh-gold-text">Matrix</span>
          </h1>
          <p className="mt-3 text-base text-slate-300">
            A comprehensive breakdown of the practical technologies, software tools, and digital capabilities taught in our bootcamps and delivered to client businesses.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#091533] border border-slate-800 hover:border-amber-400/50 shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-5"
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-tight">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">Industry Standard</p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xl sm:text-2xl font-black text-amber-400 font-heading">
                      {group.proficiency}
                    </span>
                    <span className="text-[10px] text-slate-400 block font-semibold">Mastery</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {group.description}
                </p>

                {/* Progress bar */}
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-gradient-to-r from-blue-500 via-amber-400 to-amber-500 h-full rounded-full"
                    style={{ width: group.proficiency }}
                  ></div>
                </div>

                {/* Technology Badges */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Tools &amp; Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs border border-slate-800 hover:border-amber-400/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {group.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setCurrentView('courses');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Related Training Courses</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openEnrollModal()}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-700 cursor-pointer"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0b1736] via-[#091533] to-[#070e24] border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Need these skills deployed for your business or project?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Hire us for custom web development, corporate staff training, or digital media solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm cursor-pointer shadow"
            >
              Request a Website Quote
            </button>
            <button
              onClick={() => setCurrentView('contact')}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
