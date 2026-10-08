import { Course, TrainingSession, Service, PortfolioProject, Testimonial, WebsiteSettings, Enrollment, Certificate, BlogPost } from '../types';

export const initialSettings: WebsiteSettings = {
  academyName: 'Digital Skills Academy',
  blogName: 'Matin Blog',
  tagline: 'Learn Digital Skills. Build Your Future.',
  directorName: '[YOUR NAME]', // Easily updated in Admin or config
  directorPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  directorBio: 'Professional Website Developer, Technology Educator, and Digital Skills Trainer in Ghana. Dedicated to empowering Ghanaian youth, professionals, and entrepreneurs with practical, market-ready digital and AI capabilities.',
  whatsAppNumber: '233240000000', // [WHATSAPP_NUMBER] format for wa.me link
  whatsAppDisplay: '024 XXX XXXX', // [WHATSAPP_NUMBER] formatted for Ghana
  phone: '024 XXX XXXX', // [PHONE NUMBER]
  email: 'info@digitalskillsacademy.edu.gh', // [EMAIL ADDRESS]
  location: 'East Legon, American House / Zoom & In-Person, Accra, Ghana', // [LOCATION]
  operatingHours: 'Mon - Fri: 8:30 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM',
  socialLinks: {
    facebook: 'https://facebook.com/DigitalSkillsAcademyGH',
    instagram: 'https://instagram.com/DigitalSkillsAcademyGH',
    tiktok: 'https://tiktok.com/@DigitalSkillsAcademyGH',
    linkedin: 'https://linkedin.com/company/digital-skills-academy-ghana',
    youtube: 'https://youtube.com/@DigitalSkillsAcademyGH',
  },
  announcementText: '🔥 New Cohort Alert: 5-Day Computer Skills & AI Content Creation Training starts next Monday! Limited seats available.',
  announcementActive: true,
};

export const initialCourses: Course[] = [
  {
    id: 'course-computer-skills-beginners',
    title: 'Computer Skills for Beginners',
    category: 'Fundamentals',
    shortDescription: 'Master computer hardware, operating systems, typing, file management, and everyday digital literacy from zero.',
    description: 'Designed specifically for absolute beginners, mature learners, job seekers, and business owners who want to overcome tech anxiety and gain total confidence using modern computers and operating systems for personal and work productivity.',
    level: 'Beginner',
    duration: '4 Weeks (24 Hours)',
    priceGHS: 450,
    originalPriceGHS: 600,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      'Module 1: Introduction to Computer Hardware, Mouse Mastery & Fast Touch Typing',
      'Module 2: Windows Operating System & File Organization (Folders, Flash Drives, Cloud)',
      'Module 3: Essential Keyboard Shortcuts, Settings, and Computer Maintenance',
      'Module 4: Printing, Scanning, PDF Document Handling & Everyday Office Tasks',
    ],
    features: ['Beginner-Friendly Pace', 'Hands-on Lab Practice', 'Printed Quick-Reference Guide', 'Certificate of Completion'],
    isFeatured: true,
    upcomingDate: 'Starts 1st & 15th of Every Month',
  },
  {
    id: 'course-website-development',
    title: 'Website Development',
    category: 'Development',
    shortDescription: 'Build modern, responsive, mobile-first websites from scratch with HTML, CSS, JavaScript, and modern CMS.',
    description: 'A practical, career-launching program where you build real websites for Ghanaian businesses. Learn HTML5, CSS3, modern responsive layouts, domain registration in Ghana, web hosting setup, and building dynamic websites clients will happily pay for.',
    level: 'Beginner',
    duration: '8 Weeks (48 Hours)',
    priceGHS: 1200,
    originalPriceGHS: 1600,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      'Module 1: Web Fundamentals, HTML5 Semantic Elements & Clean Structure',
      'Module 2: Modern CSS3, Flexbox, CSS Grid & Mobile Responsive Design',
      'Module 3: JavaScript Essentials for Interactive Websites & Forms',
      'Module 4: Domains, Ghana Hosting (.com / .com.gh), cPanel & SSL Deployment',
      'Module 5: Capstone Project: Build & Launch a Real Ghanaian Business Website',
    ],
    features: ['3 Live Portfolio Projects', 'Free Ghana Domain & Web Hosting during training', 'Client Acquisition Strategy Guide', 'Direct Code Reviews'],
    isFeatured: true,
    upcomingDate: 'Weekend & Weekday Cohorts Available',
  },
  {
    id: 'course-artificial-intelligence',
    title: 'Artificial Intelligence',
    category: 'AI & Tech',
    shortDescription: 'Understand and master AI tools (Gemini, ChatGPT, Claude) to automate workflows, research, and coding.',
    description: 'Demystify Artificial Intelligence and learn how to leverage generative AI models to multiply your output by 10x. Learn prompt engineering, autonomous research, workflow automation, data summarization, and how AI can elevate your daily business or student life.',
    level: 'All Levels',
    duration: '3 Weeks (18 Hours)',
    priceGHS: 950,
    originalPriceGHS: 1200,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      'Module 1: Foundations of Generative AI & Leading LLMs (Gemini, Claude, GPT)',
      'Module 2: Advanced Prompt Engineering & Multi-turn Reasoning Frameworks',
      'Module 3: AI for Business Automation, Report Writing & Financial Summaries',
      'Module 4: Ethical AI, Data Privacy & Building Personal AI Assistants',
    ],
    features: ['500+ Curated Prompt Library', 'Practical Workflow Templates', 'API & Integration Overview', 'Official Certificate'],
    isFeatured: true,
    upcomingDate: 'Flexible Evening & Weekend Batches',
  },
  {
    id: 'course-ai-content-creation',
    title: 'AI Content Creation',
    category: 'AI & Tech',
    shortDescription: 'Create viral video scripts, realistic AI images, marketing copy, and voiceovers that drive sales.',
    description: 'Harness state-of-the-art AI image generators (Gemini Studio, Midjourney, Canva AI) and video tools to produce compelling marketing collateral, brand graphics, product photography, and social media reels in minutes without expensive equipment.',
    level: 'All Levels',
    duration: '3 Weeks (18 Hours)',
    priceGHS: 750,
    originalPriceGHS: 950,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      'Module 1: AI Copywriting for Adverts, Sales Letters & Viral Social Hooks',
      'Module 2: AI Image Generation: Controlling Aspect Ratios, Lighting & High-Res 1K/2K/4K Styles',
      'Module 3: AI Video Generation & Voiceovers for TikTok, YouTube Shorts & Instagram',
      'Module 4: Content Calendars & Batch Publishing Systems for Ghanaian Brands',
    ],
    features: ['Access to DSA AI Creative Lab', 'Downloadable Brand Toolkits', 'Commercial Rights Training', 'Certificate of Completion'],
    isFeatured: true,
    upcomingDate: 'New Cohort Starting Weekly',
  },
  {
    id: 'course-graphic-design',
    title: 'Graphic Design',
    category: 'Design & Creative',
    shortDescription: 'Master Canva, Photoshop essentials, color theory, typography, and professional brand identity design.',
    description: 'Learn the principles of visual communication and build high-impact designs for flyers, church banners, business cards, social media ads, brand logos, and corporate brochures that attract high-paying clients in Ghana and internationally.',
    level: 'Beginner',
    duration: '6 Weeks (36 Hours)',
    priceGHS: 650,
    originalPriceGHS: 850,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      'Module 1: Design Principles: Balance, Visual Hierarchy, Contrast & Typography',
      'Module 2: Canva Pro Mastery for Fast High-Volume Commercial Design',
      'Module 3: Adobe Photoshop Fundamentals: Selections, Masking & Photo Retouching',
      'Module 4: Brand Identity Systems (Logos, Color Palettes, Brand Guidelines)',
      'Module 5: Print Prep (CMYK, Bleed, Resolution) & Ghanaian Print House Specs',
    ],
    features: ['Real Client Brief Projects', 'Design Assets & Fonts Pack (10GB+)', 'Portfolio Showcase on DSA Website', 'Certificate'],
    isFeatured: false,
    upcomingDate: 'Weekday Morning & Weekend Options',
  },
  {
    id: 'course-digital-marketing',
    title: 'Digital Marketing',
    category: 'Marketing & Business',
    shortDescription: 'Run profitable Meta Ads (Facebook & Instagram), Google Search campaigns, SEO, and email marketing.',
    description: 'Turn ad spend into measurable revenue. Learn how to target Ghanaian consumers, set up Meta Business Suite, configure Ghana Mobile Money ad billing, track conversions with pixels, optimize landing pages, and execute automated email funnels.',
    level: 'All Levels',
    duration: '5 Weeks (30 Hours)',
    priceGHS: 800,
    originalPriceGHS: 1100,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      'Module 1: Marketing Funnels & Customer Avatar Profiling in Ghana',
      'Module 2: Meta Ads Manager Setup, Audience Targeting & Ghana MoMo Ad Budgets',
      'Module 3: Google Ads (Search & Maps) & Local Search Engine Optimization (SEO)',
      'Module 4: WhatsApp Business Automation, Broadcast Lists & Closing Sales',
      'Module 5: Analytics, ROAS Calculation & Scaling Winning Ad Campaigns',
    ],
    features: ['Live Ad Budget Case Studies', 'WhatsApp CRM Automations', 'Ad Copywriting Formulas', 'Official Certificate'],
    isFeatured: false,
    upcomingDate: 'Evening Live Zoom & In-Person Lab',
  },
  {
    id: 'course-social-media-management',
    title: 'Social Media Management',
    category: 'Marketing & Business',
    shortDescription: 'Manage business pages on TikTok, Instagram, Facebook, and LinkedIn with consistency, growth, and analytics.',
    description: 'Become a highly paid Social Media Manager (SMM). Learn organic community building, short-form video strategies, aesthetic grid curation, influencer collaborations, crisis handling, and monthly client reporting.',
    level: 'Beginner',
    duration: '4 Weeks (24 Hours)',
    priceGHS: 550,
    originalPriceGHS: 750,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      'Module 1: Social Media Strategy & Brand Tone of Voice',
      'Module 2: Content Creation Workflow & Batch Scheduling (Meta Planner, Buffer)',
      'Module 3: Video Strategies for TikTok & Instagram Reels that go viral in Ghana',
      'Module 4: Community Management, DM Inquiries & Customer Retention',
      'Module 5: How to Package & Price Your SMM Services to Ghanaian Companies',
    ],
    features: ['Client Proposal Template', 'Monthly Analytics Reporting Sheet', 'Hashtag & Audio Research Strategy', 'Certificate'],
    isFeatured: false,
    upcomingDate: 'Flexible Schedule',
  },
  {
    id: 'course-microsoft-office',
    title: 'Microsoft Office',
    category: 'Fundamentals',
    shortDescription: 'Master Microsoft Word, Excel, PowerPoint, and Outlook for corporate offices and personal enterprise.',
    description: 'Equip yourself with the non-negotiable workplace toolkit. From professional Word business formatting and dynamic PowerPoint investor presentations to Excel data analysis, formulas (VLOOKUP, XLOOKUP, Pivot Tables) and charts.',
    level: 'Beginner',
    duration: '4 Weeks (24 Hours)',
    priceGHS: 450,
    originalPriceGHS: 650,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      'Module 1: Microsoft Word: Official Letters, CVs, Formatted Reports & Mail Merge',
      'Module 2: Microsoft Excel: Formulas (SUM, IF, VLOOKUP, INDEX/MATCH), Data Sorting',
      'Module 3: Excel Pivot Tables, Interactive Dashboards & Ghana Cedis Invoicing',
      'Module 4: Microsoft PowerPoint: Animated Pitch Decks & Corporate Slides',
      'Module 5: Outlook & OneDrive Cloud Collaboration',
    ],
    features: ['50+ Professional Office Templates', 'Real Office Case Scenarios', 'Practical Excel Test Prep', 'Certificate of Competence'],
    isFeatured: false,
    upcomingDate: 'Weekend & Weekday Morning Options',
  },
  {
    id: 'course-internet-online-research',
    title: 'Internet & Online Research',
    category: 'Fundamentals',
    shortDescription: 'Surf securely, find accurate academic/business information, verify sources, and use cloud collaboration.',
    description: 'Learn how to utilize the power of the global internet like a professional. Master advanced Google search operators, academic databases, digital safety, scam and phishing avoidance in Ghana, and cloud file sharing with Google Workspace.',
    level: 'Beginner',
    duration: '2 Weeks (12 Hours)',
    priceGHS: 350,
    originalPriceGHS: 500,
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      'Module 1: Web Browsing Mastery, Search Engine Operators & Boolean Filtering',
      'Module 2: Academic & Market Research: Finding Credible Statistics & Sources',
      'Module 3: Cyber Safety in Ghana: Recognizing Mobile Money Scams, Phishing & Safe Passwords',
      'Module 4: Google Workspace: Google Drive, Docs, Sheets & Forms for Online Surveys',
    ],
    features: ['Fast-track Digital Safety Kit', 'Interactive Research Challenges', 'Cybersecurity Checklist', 'Certificate'],
    isFeatured: false,
    upcomingDate: 'Available Both Online and In-Person',
  },
  {
    id: 'course-online-business-skills',
    title: 'Online Business Skills',
    category: 'Marketing & Business',
    shortDescription: 'Launch an online store, accept Mobile Money & card payments, manage customers, and monetize your skills.',
    description: 'Designed for Ghanaian entrepreneurs, freelancers, and side-hustlers. Discover how to package your digital skills, build an e-commerce shop, integrate Paystack/Hubtel payment gateways, handle logistics in Ghana, and sell services locally and globally.',
    level: 'All Levels',
    duration: '4 Weeks (24 Hours)',
    priceGHS: 650,
    originalPriceGHS: 900,
    image: 'https://images.unsplash.com/photo-1556742049-0a67e557224d?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      'Module 1: Finding Profitable Digital Products & Skill Monetization Avenues',
      'Module 2: Setting up Online Stores & Integrating Paystack/MoMo Gateways',
      'Module 3: Customer Service & Order Fulfillment via Ghana Delivery Couriers',
      'Module 4: Invoicing, Contracts, Pricing & Freelancing on Global Platforms (Upwork, Fiverr)',
    ],
    features: ['E-commerce Starter Blueprint', 'Contract & Invoice Templates', 'Payment Gateway Integration Guide', 'Certificate'],
    isFeatured: false,
    upcomingDate: 'Weekend Intensive Masterclass',
  },
];

export const featuredTrainingSession: TrainingSession = {
  id: 'featured-5day-intensive',
  title: '5-Day Computer Skills & AI Content Creation Training for Beginners',
  startDate: 'Monday, 19th October 2026',
  endDate: 'Friday, 23rd October 2026',
  schedule: '9:00 AM - 1:00 PM Daily (Morning Batch) OR 5:30 PM - 8:30 PM (Evening Batch)',
  mode: 'Hybrid',
  priceGHS: 350,
  originalPriceGHS: 550,
  maxSeats: 30,
  enrolledCount: 22,
  status: 'Upcoming',
  description: 'An intensive, hands-on 5-day bootcamp specifically engineered for Ghanaian beginners, students, entrepreneurs, and busy professionals. Go from zero tech background to fluently navigating computers, mastering online productivity, and generating professional AI content, graphics, and business copy.',
  topics: [
    {
      day: 'Day 1',
      title: 'Computer Fundamentals & OS Mastery',
      details: 'Hardware basics, mouse & fast touch typing exercises, file folder management, USB drives, keyboard shortcuts, and overcoming computer anxiety.',
    },
    {
      day: 'Day 2',
      title: 'Internet Skills, Cloud Drives & Cyber Safety',
      details: 'Browsing like a pro, Google Workspace (Docs & Drive), email etiquette, online research, avoiding MoMo scams, and safe online banking.',
    },
    {
      day: 'Day 3',
      title: 'Artificial Intelligence Introduction & Prompt Engineering',
      details: 'Understanding generative AI, getting started with ChatGPT & Gemini, crafting powerful prompts for research, writing, brainstorming, and translation.',
    },
    {
      day: 'Day 4',
      title: 'AI Content Creation & High-Res Graphics Lab',
      details: 'Creating flyer graphics, social media captions, viral video scripts, AI voiceovers, product images, and ad copy in minutes.',
    },
    {
      day: 'Day 5',
      title: 'Productivity Tools, Live Mini-Project & Certificate Presentation',
      details: 'Building your personal digital portfolio, saving time with productivity automation, live student project showcase, and certificate handover.',
    },
  ],
  certificateIncluded: true,
};

export const initialServices: Service[] = [
  {
    id: 'service-business-websites',
    title: 'Business Websites',
    category: 'Corporate & SME',
    description: 'Clean, credible, high-converting websites tailored for Ghanaian companies, enterprises, law firms, clinics, and service providers.',
    startingPriceGHS: 1800,
    timeline: '7 - 14 Days',
    features: ['Mobile & Tablet Responsive', 'Contact & Inquiry Forms with WhatsApp Integration', 'Ghana Google Maps Pin Setup', 'Domain (.com or .com.gh) & 1-Year Hosting', 'SEO Optimized for Local Ghanaian Search'],
    popular: true,
    badge: 'Most Popular',
  },
  {
    id: 'service-personal-websites',
    title: 'Personal Websites',
    category: 'Personal Brand',
    description: 'Showcase your expertise, leadership, speaking engagements, and consulting offerings with a distinctive personal website.',
    startingPriceGHS: 1200,
    timeline: '5 - 7 Days',
    features: ['Curated Bio & Media Kit', 'Speaking & Consultation Booking Link', 'Blog / Articles Section', 'Newsletter Signup Integration', 'Social Media Sync'],
  },
  {
    id: 'service-school-websites',
    title: 'School Websites',
    category: 'Education & Institutional',
    description: 'Modern educational portals for primary, secondary schools, colleges, and training academies with admission forms and fee notifications.',
    startingPriceGHS: 2500,
    timeline: '14 - 21 Days',
    features: ['Online Student Admissions Form', 'Academic Calendar & Events Board', 'Staff & Faculty Directory', 'Parent Portal & Gallery Showcase', 'Mobile Friendly for Parents on WhatsApp'],
  },
  {
    id: 'service-ecommerce-websites',
    title: 'E-commerce Websites',
    category: 'Retail & Online Store',
    description: 'Sell physical products, fashion, food, electronics, or digital downloads with integrated MTN MoMo, Telecel Cash, and Card checkout.',
    startingPriceGHS: 2800,
    timeline: '14 - 25 Days',
    features: ['MTN Mobile Money, Telecel Cash & Paystack Setup', 'Product Catalog with Filters & Search', 'Automated WhatsApp Order Alerts', 'Customer Accounts & Order Tracking', 'Inventory & Coupon Management'],
    popular: true,
    badge: 'High ROI',
  },
  {
    id: 'service-landing-pages',
    title: 'Landing Pages',
    category: 'Lead Gen & Campaigns',
    description: 'Single-page, laser-focused sales and lead generation funnels designed to convert Facebook, Instagram, and TikTok ad visitors into paying customers.',
    startingPriceGHS: 950,
    timeline: '3 - 5 Days',
    features: ['Ultra Fast Page Load Speed', 'Persuasive Direct Response Copywriting', 'Meta Pixel & Google Analytics Tracking', 'Direct 1-Click WhatsApp Lead Button', 'A/B Testing Ready'],
  },
  {
    id: 'service-portfolio-websites',
    title: 'Portfolio Websites',
    category: 'Creatives & Freelancers',
    description: 'Sleek visual portfolios for photographers, graphic designers, architects, makeup artists, videographers, and tech professionals.',
    startingPriceGHS: 1400,
    timeline: '5 - 10 Days',
    features: ['High-Definition Image Galleries', 'Interactive Project Lightboxes', 'Client Testimonial Carousel', 'Downloadable PDF CV / Rate Card', 'Custom Creative Typography'],
  },
  {
    id: 'service-website-maintenance',
    title: 'Website Maintenance & Security',
    category: 'Support & Care',
    description: 'Keep your website secure, blazing fast, updated, and error-free with our hands-off monthly technical support package.',
    startingPriceGHS: 350,
    timeline: 'Monthly Care Plan',
    features: ['Weekly Off-site Cloud Backups', 'Security Malware Scans & Firewall Checks', 'Software, Theme & Plugin Updates', 'Content Updates & Text/Image Adjustments', 'Priority WhatsApp Support'],
  },
];

export const initialPortfolio: PortfolioProject[] = [
  {
    id: 'port-1',
    title: 'Accra Premier Legal & Advisory Portal',
    category: 'Websites',
    client: 'Apex Chambers Ghana',
    description: 'A sophisticated corporate web portal with appointment booking, attorney directories, and client consultation intake for a top Accra law firm.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Corporate Web', 'WhatsApp Booking', 'SEO'],
    completedYear: '2026',
    liveUrl: '#',
  },
  {
    id: 'port-2',
    title: 'AfrikStyle E-Commerce Boutique',
    category: 'Websites',
    client: 'AfrikStyle Fashion Hub, Osu',
    description: 'Full-featured online fashion store featuring MTN MoMo checkout, automated size guides, international shipping calculator, and WhatsApp order alerts.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    tags: ['E-Commerce', 'Paystack/MoMo', 'Catalog', 'Mobile UX'],
    completedYear: '2026',
    liveUrl: '#',
  },
  {
    id: 'port-3',
    title: 'Volta Eco Lodge & Adventure Booking',
    category: 'Websites',
    client: 'Volta River Eco Retreat',
    description: 'Serene hospitality web platform with real-time room availability, boat tour packages, and interactive tour maps.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    tags: ['Hospitality', 'Booking Engine', 'Gallery', 'Fast Load'],
    completedYear: '2025',
    liveUrl: '#',
  },
  {
    id: 'port-4',
    title: 'Heritage Cocoa Exporters Brand Identity',
    category: 'Graphic Design',
    client: 'Golden Pod Agricultural Ventures',
    description: 'Complete brand packaging, luxury export carton labels, corporate stationery, and marketing brochures reflecting premium Ghanaian cocoa origins.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
    tags: ['Branding', 'Packaging Design', 'Print Media', 'Identity'],
    completedYear: '2026',
    liveUrl: '#',
  },
  {
    id: 'port-5',
    title: 'Digital Skills Campaign Flyers & Social Kit',
    category: 'Graphic Design',
    client: 'Youth in Tech Initiative Ghana',
    description: 'A vibrant collection of social media graphics, pull-up banners, and certificates designed for a national youth technology outreach.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    tags: ['Canva Pro', 'Photoshop', 'Flyers', 'Social Media'],
    completedYear: '2026',
    liveUrl: '#',
  },
  {
    id: 'port-6',
    title: 'AI Automated Product Photos & Marketing Visuals',
    category: 'AI Content',
    client: 'Kente Craft Co.',
    description: 'Generated 50+ studio-quality, diverse Ghanaian model product visuals with custom lighting and African aesthetics using Gemini AI image generation.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    tags: ['Gemini 3 Pro', '1K/2K/4K Images', 'Product Staging', 'AI Lab'],
    completedYear: '2026',
    liveUrl: '#',
  },
  {
    id: 'port-7',
    title: 'AI Viral Scriptwriting & Social Reel Series',
    category: 'AI Content',
    client: 'Accra Foodie Experience',
    description: 'Created 30 days of automated viral TikTok and Instagram video scripts, AI voiceovers, and captions that yielded 240,000+ organic impressions.',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80',
    tags: ['AI Prompting', 'Video Hooks', 'Content Strategy'],
    completedYear: '2026',
    liveUrl: '#',
  },
  {
    id: 'port-8',
    title: 'School Fee Payment & SMS Portal',
    category: 'Digital Projects',
    client: 'St. Augustine Model Academy',
    description: 'Custom portal enabling Ghanaian parents to check terminal reports, receive automated SMS alerts, and pay fees via Mobile Money API.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    tags: ['Web Application', 'MoMo API', 'SMS Gateway', 'Database'],
    completedYear: '2025',
    liveUrl: '#',
  },
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Abena Osei-Mensah',
    role: 'Boutique Owner & Entrepreneur',
    organization: 'Osei Fabrics, Makola & East Legon',
    location: 'Accra, Ghana',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    quote: 'Before joining Digital Skills Academy, I relied on someone else to do every simple design and ad for my shop. The 5-Day Training opened my eyes! Now I use AI to write my captions, create beautiful graphics on Canva, and run my own Instagram ads. My sales doubled within three weeks.',
    courseTaken: '5-Day Computer Skills & AI Training',
    rating: 5,
    isPlaceholder: true, // Clearly marked placeholder
  },
  {
    id: 'test-2',
    name: 'Kofi Kwakye Boateng',
    role: 'Computer Science Undergraduate',
    organization: 'University of Ghana, Legon',
    location: 'Greater Accra, Ghana',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quote: 'The Website Development course was so practical. University taught us mostly theory, but here I built actual client-ready websites, registered my own domain, and connected payment systems. I recently closed my first 1,800 GHS client website for a pharmacy in Kumasi!',
    courseTaken: 'Website Development',
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: 'test-3',
    name: 'Patricia Naa Darkua',
    role: 'Administrative Officer',
    organization: 'Logistics Firm',
    location: 'Tema, Ghana',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    quote: 'I used to struggle with Excel formulas, Pivot tables, and professional reporting at work. The Microsoft Office & Computer Skills course boosted my confidence completely. My manager noticed the difference in my reports, and I received a promotion last month.',
    courseTaken: 'Microsoft Office & Computer Skills',
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: 'test-4',
    name: 'Samuel Yaw Amankwah',
    role: 'Freelance Content Creator & Designer',
    organization: 'Apex Media Studio',
    location: 'Kumasi, Ghana',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    quote: 'The AI Content Creation course is mind-blowing. Learning how to control image aspect ratios and prompt AI for African concepts changed my design workflow. Tasks that took me 6 hours now take 30 minutes with higher quality. The trainer is patient and very knowledgeable.',
    courseTaken: 'AI Content Creation',
    rating: 5,
    isPlaceholder: true,
  },
];

export const initialEnrollments: Enrollment[] = [
  {
    id: 'enr-101',
    referenceCode: 'DSA-2026-7842',
    studentName: 'Kwame Koduah',
    studentEmail: 'student@digitalskills.edu.gh',
    studentPhone: '024 456 7890',
    studentWhatsApp: '024 456 7890',
    courseId: 'course-computer-skills-beginners',
    courseTitle: 'Computer Skills for Beginners',
    preferredDate: 'Next Upcoming Cohort',
    location: 'Accra (In-Person)',
    learningMode: 'In-Person Weekday',
    status: 'confirmed',
    amountGHS: 450,
    enrolledAt: '2026-10-01T10:15:00Z',
    paymentMethod: 'MTN Mobile Money',
  },
  {
    id: 'enr-102',
    referenceCode: 'DSA-2026-9021',
    studentName: 'Kwame Koduah',
    studentEmail: 'student@digitalskills.edu.gh',
    studentPhone: '024 456 7890',
    studentWhatsApp: '024 456 7890',
    courseId: 'course-ai-content-creation',
    courseTitle: 'AI Content Creation',
    preferredDate: 'Next Weekend Cohort',
    location: 'Online Live',
    learningMode: 'Online Live',
    status: 'paid',
    amountGHS: 750,
    enrolledAt: '2026-10-03T14:30:00Z',
    paymentMethod: 'Paystack Card',
  },
  {
    id: 'enr-103',
    referenceCode: 'DSA-2026-1184',
    studentName: 'Akosua Serwaa',
    studentEmail: 'serwaa.akosua@gmail.com',
    studentPhone: '055 123 9988',
    studentWhatsApp: '055 123 9988',
    courseId: 'course-website-development',
    courseTitle: 'Website Development',
    preferredDate: 'Next Month',
    location: 'Kumasi',
    learningMode: 'Online Live',
    status: 'pending',
    amountGHS: 1200,
    enrolledAt: '2026-10-07T09:00:00Z',
    paymentMethod: 'Pending Payment',
  },
];

export const initialCertificates: Certificate[] = [
  {
    id: 'cert-001',
    certificateCode: 'DSA-CERT-2026-4419',
    studentName: 'Kwame Koduah',
    studentEmail: 'student@digitalskills.edu.gh',
    courseTitle: 'Computer Skills for Beginners',
    issueDate: '05 October 2026',
    directorName: '[YOUR NAME]',
    grade: 'Distinction (94%)',
    qrVerified: true,
  },
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Top 7 In-Demand Digital Skills Every Ghanaian Graduate Needs in 2026',
    slug: 'top-digital-skills-ghana-2026',
    excerpt: 'Discover why computer proficiency, modern web development, prompt engineering, and digital marketing are replacing traditional resume bullet points across Ghana.',
    content: `The employment landscape in Ghana and across West Africa is experiencing a seismic shift. Companies in Accra, Kumasi, and remote global employers are no longer hiring based purely on degrees; they are actively seeking demonstrable digital competencies.

Here are the top seven digital skills that can accelerate your career or help you launch a thriving online business:

### 1. Hands-On Computer Literacy & Cloud Workflows
Beyond simple word processing, today's workplace requires mastering file structures, cloud storage with Google Workspace, document security, and keyboard productivity.

### 2. Website Development (HTML, CSS & Modern Frameworks)
Every Ghanaian enterprise, law firm, clinic, school, and boutique needs a credible web home. Developers who understand responsive layouts and local domain hosting earn anywhere between GH₵ 1,500 and GH₵ 6,000 per website.

### 3. Generative AI & Prompt Engineering
Tools like Google Gemini and ChatGPT are force multipliers. Learning structured prompting allows a single person to produce reports, research papers, customer proposals, and translations in minutes.

### 4. AI Content Creation & Visual Production
Creating studio-quality social media flyers, commercial mockups, and video scripts using AI saves thousands of Cedis in production costs for local businesses.

### 5. Meta & Google Digital Advertising
Knowing how to set up Meta Business Suite and fund ad budgets with Mobile Money (MoMo) is one of the highest-paying freelance services in Accra right now.

### 6. Advanced Microsoft Excel & Data Summarization
Office managers and analysts who can craft dynamic VLOOKUP formulas, Pivot tables, and revenue forecasting dashboards are indispensable.

### 7. Online Business & Payment Gateway Integration
Setting up Paystack, Hubtel, and automated WhatsApp order notifications turns local shops into 24/7 revenue engines.

At Digital Skills Academy, our hands-on bootcamps equip you with these exact practical tools from Day 1.`,
    featuredImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    category: 'Career & Tech',
    author: 'Matin • Tech Educator',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: '06 Oct 2026',
    readTime: '5 min read',
    tags: ['Digital Skills', 'Ghana Tech', 'Career Advice', 'AI'],
    isFeatured: true,
    views: 1420,
  },
  {
    id: 'post-2',
    title: 'How Generative AI is Helping Ghanaian Entrepreneurs Triple Social Media Sales',
    slug: 'how-generative-ai-helps-ghanaian-entrepreneurs',
    excerpt: 'A practical breakdown of how small business owners in Makola, Osu, and Kumasi use AI image generation and copy prompts to create viral marketing collateral.',
    content: `Small business marketing in Ghana has traditionally been limited by expensive graphic design rates and photography studios. Today, generative AI has leveled the playing field.

### Rapid Flyer & Product Staging
Using models like Gemini 3 Pro, Ghanaian fashion designers and skincare artisans can now stage their goods against luxurious marble backgrounds, warm sunset lighting, or contemporary African motifs without spending thousands on photo shoots.

### 10x Copywriting Speed
Crafting catchy WhatsApp broadcast messages, Instagram hooks, and Facebook captions used to take hours. With prompt engineering, entrepreneurs can input:
*"Generate 5 viral TikTok hooks for my Ghanaian Shea butter hair cream targeting young women in Accra"* and receive market-ready scripts instantly.

### Automated Customer Inquiries
Connecting AI-assisted message drafts to WhatsApp Business allows shop owners to respond professionally within seconds, closing deals faster.`,
    featuredImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    category: 'AI & Automation',
    author: 'Matin • Tech Educator',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: '04 Oct 2026',
    readTime: '4 min read',
    tags: ['AI Tools', 'Marketing', 'E-Commerce', 'WhatsApp'],
    isFeatured: true,
    views: 980,
  },
  {
    id: 'post-3',
    title: 'The Complete Step-by-Step Guide to Hosting Your First Website in Ghana',
    slug: 'guide-to-hosting-website-in-ghana',
    excerpt: 'Learn the differences between .com and .com.gh domains, choosing affordable cPanel hosting, configuring SSL certificates, and going live.',
    content: `Building a website locally on your computer is only half the journey. Launching it so that clients in Ghana and across the globe can access it requires domain registration and hosting.

### Choosing Your Domain Extension
- **.com**: Global recognition, ideal for international trade, exports, or digital agencies.
- **.com.gh**: Instantly identifies your business as a trusted Ghanaian entity.

### Setting Up cPanel & Secure SSL
Security is paramount. Modern web browsers flag sites without an SSL certificate (https://) as "Not Secure," which scares away Ghanaian buyers. Always activate free Let's Encrypt SSL.

### Connecting Local Payment Gateways
If you are running an online shop, connecting Paystack allows your customers to pay directly from their MTN Mobile Money, Telecel Cash, or local bank card seamlessly.

Join our 8-Week Website Development program at Digital Skills Academy to build and launch your first commercial client website under direct mentorship!`,
    featuredImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80',
    category: 'Web Development',
    author: 'Matin • Web Developer',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: '01 Oct 2026',
    readTime: '6 min read',
    tags: ['Web Dev', 'Hosting', 'Domains', 'Ghana Web'],
    isFeatured: false,
    views: 840,
  },
  {
    id: 'post-4',
    title: 'Integrating Mobile Money (MTN MoMo & Telecel) on Modern Websites',
    slug: 'integrating-mobile-money-ghana-websites',
    excerpt: 'Over 85% of online transactions in Ghana happen via Mobile Money. Here is how modern businesses accept payments effortlessly.',
    content: `In Ghana, card penetration is growing, but Mobile Money remains the absolute undisputed king of everyday commerce. If your website does not support MTN MoMo and Telecel Cash, you are leaving substantial revenue on the table.

### How Payment Gateways Work
Payment aggregators like Paystack, Hubtel, and Flutterwave bridge your website with telecom networks. When a customer inputs their phone number, they receive an instant USSD prompt on their mobile phone to approve the transaction with their MoMo PIN.

### Instant Webhooks & WhatsApp Confirmation
Once payment is approved, your website server receives a secure webhook, automatically updates the customer's order to "Paid", and can trigger an automated WhatsApp alert with their receipt.`,
    featuredImage: 'https://images.unsplash.com/photo-1556742049-0a67e557224d?auto=format&fit=crop&w=1000&q=80',
    category: 'E-Commerce',
    author: 'Matin • Tech Educator',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: '28 Sep 2026',
    readTime: '4 min read',
    tags: ['Mobile Money', 'Fintech', 'Paystack', 'Ghana'],
    isFeatured: false,
    views: 1120,
  },
  {
    id: 'post-5',
    title: 'Mastering AI Image Prompts for African Fashion & Product Photography',
    slug: 'mastering-ai-prompts-african-fashion',
    excerpt: 'How to specify aspect ratios (1:1, 9:16, 16:9), lighting, and authentic African cultural aesthetics with Gemini 3 Pro.',
    content: `Generative models often default to generic western aesthetics unless guided with intentional cultural and lighting keywords.

### Prompt Formula for Authentic African Visuals
1. **Subject:** Specify ethnic identity, attire (e.g. subtle Kente, modern Ghanaian Batakari, contemporary Accra streetwear).
2. **Environment:** Modern Ghanaian corporate high-rises, sunlit Osu cafes, or minimalist studio podiums.
3. **Lighting & Camera:** "Soft diffused studio lighting, 85mm f/1.4 lens, natural skin tones, photorealistic 8k".
4. **Aspect Ratio Control:** Use 1:1 for Instagram posts, 9:16 for TikTok/Reels, and 16:9 for YouTube and website hero banners.

Test this right now in our built-in **AI Studio Lab** on this website!`,
    featuredImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
    category: 'AI & Automation',
    author: 'Matin • Creative Lead',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: '24 Sep 2026',
    readTime: '5 min read',
    tags: ['AI Art', 'Gemini', 'Prompts', 'Design'],
    isFeatured: false,
    views: 750,
  },
];

