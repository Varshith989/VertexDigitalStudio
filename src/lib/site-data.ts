/**
 * All editable site content for Vertex Digital Studio lives here.
 * Update pricing, services, FAQs, contact details, projects and examples in one place.
 */

export const site = {
  name: "Vertex Digital Studio",
  founder: "Varshith Reddy",
  founderTitle: "Founder & Web Developer",
  tagline: "Web Design & Development Studio",
  startingPrice: "₹5,000",
  whatsappDisplay: "+91 83176 46088",
  whatsappUrl: "https://wa.me/918317646088",
  email: "reddyvarshith122@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/varshith-reddy-b2914b23a",
  githubHandle: "Varshith989",
  githubUrl: "https://github.com/Varshith989",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    index: "01",
    icon: "Rocket",
    title: "Landing Pages",
    description:
      "High-impact single-page websites for products, services, campaigns and businesses.",
    cta: "Get Started",
  },
  {
    index: "02",
    icon: "Globe",
    title: "Starter Websites",
    description: "Professional websites for individuals and small businesses getting online.",
    cta: "Get Started",
  },
  {
    index: "03",
    icon: "Building2",
    title: "Business Websites",
    description:
      "Multi-page websites designed to establish a strong and professional online presence.",
    cta: "Build My Website",
  },
  {
    index: "04",
    icon: "UserRound",
    title: "Portfolio Websites",
    description:
      "Modern personal websites for professionals, freelancers, creators and personal brands.",
    cta: "Build My Portfolio",
  },
  {
    index: "05",
    icon: "ShoppingBag",
    title: "E-commerce Websites",
    description: "Modern online stores for businesses that want to sell products online.",
    cta: "Discuss E-commerce",
  },
  {
    index: "06",
    icon: "LayoutDashboard",
    title: "Custom Web Applications",
    description: "Advanced websites, dashboards, portals and custom digital solutions.",
    cta: "Discuss Your Idea",
  },
] as const;

export type Project = {
  name: string;
  category: string;
  description: string;
  url: string;
  badge: string;
  tags: string[];
  imageKey: "aerova";
};

export const projects: Project[] = [
  {
    name: "Aerova Travels",
    category: "Travel Agency Website",
    description:
      "A premium travel agency website designed to showcase destinations, curated journeys and travel experiences through an immersive and modern digital experience.",
    url: "https://travel-agency-site-ten.vercel.app/",
    badge: "LIVE WEBSITE",
    tags: ["Travel", "Responsive Web Design", "Modern UI"],
    imageKey: "aerova",
  },
];

export const websiteExamples = [
  { title: "Restaurant", imageKey: "restaurant" },
  { title: "Travel Agency", imageKey: "travel" },
  { title: "Real Estate", imageKey: "realestate" },
  { title: "Startup", imageKey: "startup" },
  { title: "Personal Brand", imageKey: "personal" },
  { title: "Local Business", imageKey: "local" },
] as const;

export const features = [
  { icon: "MonitorSmartphone", label: "Responsive Design" },
  { icon: "Smartphone", label: "Mobile Optimization" },
  { icon: "Sparkles", label: "Modern UI" },
  { icon: "Zap", label: "Fast Performance" },
  { icon: "Search", label: "Basic SEO Setup" },
  { icon: "Mail", label: "Contact Forms" },
  { icon: "MessageCircle", label: "WhatsApp Integration" },
  { icon: "Share2", label: "Social Media Integration" },
  { icon: "MapPin", label: "Google Maps Integration" },
  { icon: "UploadCloud", label: "Deployment Assistance" },
  { icon: "Globe2", label: "Domain & Hosting Guidance" },
  { icon: "RefreshCw", label: "Up to 5 Revisions" },
] as const;

export const pricing = [
  {
    name: "LANDING",
    price: "₹5,000",
    description: "For businesses, products and campaigns that need a focused online presence.",
    includes: [
      "1-page website",
      "Modern responsive design",
      "Mobile optimization",
      "Contact section",
      "WhatsApp integration",
      "Social links",
      "Basic SEO setup",
      "Deployment assistance",
      "Up to 5 revisions",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "STARTER",
    price: "₹10,000",
    description: "For individuals and small businesses.",
    includes: [
      "Up to 4 pages",
      "Responsive design",
      "Modern UI",
      "Contact form",
      "WhatsApp integration",
      "Basic SEO",
      "Social media integration",
      "Deployment",
      "Up to 5 revisions",
    ],
    cta: "Choose Starter",
    popular: true,
  },
  {
    name: "BUSINESS",
    price: "₹15,000",
    description: "For businesses that need a stronger online presence.",
    includes: [
      "Up to 7 pages",
      "Premium UI",
      "Responsive design",
      "Contact forms",
      "WhatsApp integration",
      "Basic SEO",
      "Google Maps integration",
      "Social integrations",
      "Analytics setup",
      "Deployment",
      "Up to 5 revisions",
    ],
    cta: "Build My Website",
    popular: false,
  },
  {
    name: "CUSTOM",
    price: "₹20,000+",
    description: "For advanced requirements and custom solutions.",
    includes: [
      "Custom design",
      "Advanced functionality",
      "Database integration",
      "Authentication",
      "API integration",
      "Admin dashboards",
      "Payment integration",
      "Third-party integrations",
      "Custom backend",
      "Deployment",
      "Up to 5 revisions",
    ],
    cta: "Discuss Your Project",
    popular: false,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Share Your Idea",
    text: "Tell us about your business, goals, website type and requirements.",
  },
  {
    step: "02",
    title: "Plan",
    text: "We'll discuss the structure, pages, features and suitable package.",
  },
  {
    step: "03",
    title: "Design & Build",
    text: "We design and develop your website with a modern responsive experience.",
  },
  {
    step: "04",
    title: "Review",
    text: "You review the website and provide feedback.",
    note: "Up to 5 revisions are included within the agreed project scope.",
  },
  {
    step: "05",
    title: "Launch",
    text: "Your website is deployed and ready to go live.",
  },
];

export const whyVertex = [
  {
    icon: "MessagesSquare",
    title: "Direct Communication",
    text: "Work directly with the person behind your project.",
  },
  {
    icon: "PenTool",
    title: "Modern Design",
    text: "Clean and contemporary interfaces designed around your brand.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Flexible Solutions",
    text: "Your website is built around your actual requirements.",
  },
  {
    icon: "BadgeIndianRupee",
    title: "Transparent Pricing",
    text: "Clear packages and straightforward project discussions.",
  },
  {
    icon: "MonitorSmartphone",
    title: "Responsive Development",
    text: "Your website works beautifully across desktop, tablet and mobile.",
  },
  {
    icon: "HeartHandshake",
    title: "Personal Attention",
    text: "Every project receives focused attention from start to launch.",
  },
] as const;

export const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
  "Git",
  "GitHub",
];

export const faqs = [
  {
    q: "How much does a website cost?",
    a: "Website projects start from ₹5,000. Final pricing depends on the pages, features and functionality required.",
  },
  {
    q: "How long does a website take?",
    a: "The timeline depends on the size and complexity of the project. The expected timeline will be discussed before development begins.",
  },
  {
    q: "Are domain and hosting included?",
    a: "Domain and hosting can be arranged separately depending on the project requirements.",
  },
  {
    q: "How many revisions are included?",
    a: "Up to 5 revisions are included within the agreed project scope.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. Existing websites can be redesigned and modernized.",
  },
  {
    q: "Do you build e-commerce websites?",
    a: "Yes. E-commerce websites are available as custom projects.",
  },
  {
    q: "Can you build custom web applications?",
    a: "Yes. Custom dashboards, portals, authentication systems, APIs and business applications can be discussed as custom projects.",
  },
  {
    q: "Can I request a website not listed here?",
    a: "Yes. Contact Vertex Digital Studio with your requirements and we'll discuss a suitable solution.",
  },
  {
    q: "How do I start?",
    a: "Click Start a Project and submit your requirements through the contact form.",
  },
];

export const websiteTypeOptions = [
  "Landing Page",
  "Starter Website",
  "Portfolio Website",
  "Business Website",
  "E-commerce Website",
  "Custom Website",
  "Website Redesign",
  "Other",
];

export const budgetOptions = [
  "₹5,000 – ₹10,000",
  "₹10,000 – ₹20,000",
  "₹20,000 – ₹50,000",
  "₹50,000+",
  "Not Sure Yet",
];
