import { ServiceItem, PortfolioItem, PricingPlan, AboutStat, ContactSubmission } from "@/types";

export const initialServices: ServiceItem[] = [
  {
    id: "web-dev",
    title: { ar: "تطوير الويب الفاخر", en: "Luxury Web Development" },
    shortDesc: {
      ar: "منصات ويب فورية، متجاوبة، ومصممة بأعلى معايير السرعة والأمان.",
      en: "High-performance, responsive websites built with cutting-edge speed and security."
    },
    fullDesc: {
      ar: "نحن نستخدم أحدث التقنيات مثل Next.js و React لبناء تطبيقات منصات ويب استثنائية تقدم تجربة سريعة وسلسة للعملاء مع تحسين محركات البحث ودعم اللغات المزدوجة.",
      en: "We leverage Next.js and React to engineer exceptional web applications delivering ultra-fast user experiences, SEO excellence, and full internationalization."
    },
    icon: "Globe",
    tag: { ar: "الأكثر طلباً", en: "Most Popular" },
    features: {
      ar: [
        "بناء متكامل بـ Next.js & React",
        "سرعة أداء فائقة ومتوافق مع SEO",
        "تصميم متجاوب بالكامل لجميع الأجهزة",
        "لوحة تحكم خاصة ومزودة بأمان عالي"
      ],
      en: [
        "Full-stack Next.js & React architecture",
        "Ultra-fast performance & SEO optimized",
        "Fully responsive across all screen sizes",
        "Custom high-security admin control dashboard"
      ]
    }
  },
  {
    id: "ui-ux",
    title: { ar: "تصميم واجهات المستخدم UI/UX", en: "UI/UX Experience Design" },
    shortDesc: {
      ar: "تجربة مستخدم سائلة وواجهات زجاجية عصرية تعزز التحويل والهوية.",
      en: "Fluid glass user experiences and modern interfaces built to drive conversion."
    },
    fullDesc: {
      ar: "نبتكر واجهات تفاعلية مذهلة تستخدم الجماليات الزجاجية والتأثيرات الحركية السينمائية لجذب الزوار وتحويلهم إلى عملاء دائمين.",
      en: "We create captivating visual interfaces using liquid glass, subtle glows, and cinematic motion graphics that turn visitors into loyal clients."
    },
    icon: "Sparkles",
    tag: { ar: "تصميم سائل", en: "Liquid Glass" },
    features: {
      ar: [
        "واجهات زجاجية Liquid Glass فريدة",
        "دراسة سلوك المستهلك ورحلة المستخدم",
        "أنظمة تصميم متكاملة (Design Systems)",
        "نماذج تفاعلية بروتوتايب قبل التنفيذ"
      ],
      en: [
        "Custom Liquid Glass design systems",
        "In-depth user journey analysis",
        "Scalable design components & style guides",
        "Interactive prototypes prior to build"
      ]
    }
  },
  {
    id: "ai-solutions",
    title: { ar: "حلول الذكاء الاصطناعي", en: "AI Integration & Automation" },
    shortDesc: {
      ar: "دمج الذكاء الاصطناعي في عمليات أعمالك لزيادة الكفاءة والإنتاجية.",
      en: "Integrate custom AI and automation workflows into your core business operations."
    },
    fullDesc: {
      ar: "نطور حلول وكلاء الذكاء الاصطناعي والبوتات الذكية وتطبيقات معالجة اللغات الطبيعية لأتمتة أعمالك وتحسين خدمة العملاء على مدار الساعة.",
      en: "We build custom AI agent workflows, smart chatbots, and predictive algorithms to automate processes and provide 24/7 client engagement."
    },
    icon: "Cpu",
    tag: { ar: "ابتكار", en: "Innovation" },
    features: {
      ar: [
        "دمج نماذج LLM و OpenAI/Claude",
        "أتمتة خدمة العملاء والبوتات الذكية",
        "تحليل البيانات والتنبؤ الآلي",
        "ربط الأنظمة عبر API مخصصة"
      ],
      en: [
        "LLM & OpenAI/Claude model integrations",
        "Automated customer service bots",
        "Advanced data analytics & predictions",
        "Custom API backend integrations"
      ]
    }
  },
  {
    id: "e-commerce",
    title: { ar: "المتاجر الإلكترونية المتقدمة", en: "Next-Gen E-Commerce" },
    shortDesc: {
      ar: "متاجر إلكترونية فاخرة تدعم بوابات الدفع وتوفر تجربة شراء سلسة.",
      en: "Premium online store solutions with smooth payment gateways and high conversions."
    },
    fullDesc: {
      ar: "تصميم وتطوير متاجر إلكترونية متكاملة مع بوابات الدفع وإدارة المخزون وتجربة تسوق سريعة ومصممة لرفع معدلات البيع.",
      en: "Design and development of full-scale e-commerce platforms with seamless checkout, inventory sync, and conversion-focused design."
    },
    icon: "ShoppingBag",
    tag: { ar: "نمو المبيعات", en: "Sales Growth" },
    features: {
      ar: [
        "ربط بوابات الدفع المحلية والعالمية",
        "لوحة إدارة منتجات وطلبات سهلة الاستخدام",
        "سرعة تحميل فائقة للمنتجات",
        "دعم متعدد العملات واللغات"
      ],
      en: [
        "Local & global payment gateway integration",
        "Intuitive product & order management dashboard",
        "Lightning-fast product page loads",
        "Multi-currency & multi-language support"
      ]
    }
  }
];

export const initialPortfolio: PortfolioItem[] = [
  {
    id: "aura-pay",
    title: { ar: "منصة أورا للمدفوعات الرقمية", en: "Aura Pay Financial Platform" },
    category: { ar: "تطبيقات الويب", en: "Web Application" },
    categorySlug: "web",
    description: {
      ar: "تطبيق ويب للخدمات المالية بجماليات زجاجية معتمة ولوحة بيانات تفاعلية سريعة.",
      en: "Financial technology dashboard with liquid dark aesthetic and real-time transaction tracking."
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://example.com/aura-pay",
    client: { ar: "شركة أورا كابيتال", en: "Aura Capital Corp" },
    completionYear: "2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    featured: true
  },
  {
    id: "luxe-realestate",
    title: { ar: "عقارات لوكس العالمية", en: "Luxe Luxury Estate Portal" },
    category: { ar: "المتاجر والمنصات", en: "Platforms & E-Commerce" },
    categorySlug: "platforms",
    description: {
      ar: "منصة استعراض العقارات الفاخرة بتقنية المعاينة ثلاثية الأبعاد وواجهة فائقة الأناقة.",
      en: "Luxury real estate portal with 3D interactive virtual tours and elegant glass UI."
    },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://example.com/luxe",
    client: { ar: "مجموعة لوكس العقارية", en: "Luxe Group Real Estate" },
    completionYear: "2024",
    technologies: ["React", "Three.js", "Tailwind CSS", "Node.js"],
    featured: true
  },
  {
    id: "nebulous-ai",
    title: { ar: "مساعد نيبولا للذكاء الاصطناعي", en: "Nebula AI Assistant Hub" },
    category: { ar: "ذكاء اصطناعي", en: "AI & Automation" },
    categorySlug: "ai",
    description: {
      ar: "تطبيق إدارة وكلاء الذكاء الاصطناعي المؤسسي لمعالجة البيانات وتحليل المستندات.",
      en: "Enterprise AI agent management hub for automated data processing and insights."
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://example.com/nebula",
    client: { ar: "تقنيات نيبولا", en: "Nebula Technologies" },
    completionYear: "2023",
    technologies: ["Next.js", "Python FastApi", "OpenAI API", "Tailwind CSS"],
    featured: true
  },
  {
    id: "velox-branding",
    title: { ar: "هوية فيلوكس الرقمية", en: "Velox Digital Brand Identity" },
    category: { ar: "تصميم الهويات", en: "UI/UX & Branding" },
    categorySlug: "design",
    description: {
      ar: "إعادة بناء الهوية البصرية والنظام التصميمي الكامل لعلامة تجارية متخصصة في السيارات الفاخرة.",
      en: "Complete visual identity and design system overhaul for a high-end automotive brand."
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://example.com/velox",
    client: { ar: "سيارات فيلوكس", en: "Velox Motors" },
    completionYear: "2024",
    technologies: ["Figma", "Design Systems", "Motion Graphics"],
    featured: false
  }
];

export const initialPricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: { ar: "الباقة الأساسية", en: "Essential Launch" },
    price: "$250+",
    badge: { ar: "الأنسب للبداية", en: "Ideal Starting Point" },
    description: {
      ar: "الحل الأمثل لإطلاق حضورك الرقمي الفاخر بأسلوب عصري وسريع.",
      en: "The perfect package to launch a high-impact digital presence quickly."
    },
    features: {
      ar: [
        "موقع إلكتروني ذو صفحة واحدة (Landing Page)",
        "تصميم زجاجي فاخر ومتجاوب مع جميع الأجهزة",
        "دعم كامل للغتين العربية والإنجليزي (RTL/LTR)",
        "نموذج تواصل مباشر مع البريد الإلكتروني",
        "تحسين أداء وسرعة تحميل ممتازة",
        "تسليم خفيف وسريع خلال 5-7 أيام"
      ],
      en: [
        "High-converting single-page website",
        "Responsive Liquid Glass visual design",
        "Full Arabic & English (RTL/LTR) support",
        "Direct contact form with notification integration",
        "Speed optimized & performance ready",
        "Fast turnaround in 5-7 days"
      ]
    },
    ctaText: { ar: "ابدأ الآن من $250", en: "Get Started from $250" }
  },
  {
    id: "growth",
    name: { ar: "باقة النمو الاحترافية", en: "Pro Growth Suite" },
    price: "$750+",
    popular: true,
    badge: { ar: "الأكثر شعبية", en: "Most Popular" },
    description: {
      ar: "موقع متكامل مع لوحة تحكم خاصة وسطح تفاعلي لإدارة كل أعمالك.",
      en: "Full multi-page web platform equipped with custom admin management."
    },
    features: {
      ar: [
        "موقع متعدد الصفحات (حتى 6 صفحات فرعية)",
        "لوحة تحكم خاصة (Admin Dashboard) لإدارة المحتوى",
        "معرض أعمال تفاعلي وسي إس إس حركي سينمائي",
        "ربط أدوات التحليل وتحسين SEO المتقدم",
        "ربط الواتساب والنماذج الذكية",
        "دعم فني وتحديثات لمدة 3 أشهر"
      ],
      en: [
        "Multi-page architecture (up to 6 core pages)",
        "Private Admin Control Center for easy management",
        "Interactive portfolio carousel & dynamic glass effects",
        "Advanced SEO & analytics setup",
        "WhatsApp chat & smart contact forms integration",
        "3 months of technical support & maintenance"
      ]
    },
    ctaText: { ar: "طلب الباقة الاحترافية", en: "Choose Pro Growth" }
  },
  {
    id: "enterprise",
    name: { ar: "الباقة المؤسسية المخصصة", en: "Enterprise Custom" },
    price: "$1,800+",
    badge: { ar: "حلول مخصصة", en: "Custom Scale" },
    description: {
      ar: "منصات معقدة، حلول ذكاء اصطناعي، ومتاجر متقدمة مصممة خصيصاً لمؤسستك.",
      en: "Tailor-made web ecosystems, custom AI workflows, and advanced enterprise platforms."
    },
    features: {
      ar: [
        "تصميم وتطوير برمجيات مخصصة بالكامل",
        "دمج وكلاء الذكاء الاصطناعي وبوتات الأتمتة",
        "ربط متقدم مع قواعد البيانات وAPIs خارجية",
        "بوابات دفع إلكترونية متعددة مع دعم للعملات",
        "حماية فائقة واستضافة عالية الأداء",
        "دعم وصيانة مستمرة مع فريق اختصاصي"
      ],
      en: [
        "Fully custom web architecture & bespoke UI",
        "AI agents integration & workflow automations",
        "Complex database setup & custom external APIs",
        "Multi-currency e-commerce payment integrations",
        "Enterprise grade security & high-performance hosting",
        "Dedicated ongoing support team"
      ]
    },
    ctaText: { ar: "استشارة مخصصة", en: "Request Custom Quote" }
  }
];

export const aboutStats: AboutStat[] = [
  { value: "50+", label: { ar: "مشروع ناجح", en: "Projects Delivered" } },
  { value: "99%", label: { ar: "رضا العملاء", en: "Client Satisfaction" } },
  { value: "24/7", label: { ar: "دعم مستمر", en: "Dedicated Support" } },
  { value: "5x", label: { ar: "سرعة الأداء", en: "Faster Performance" } }
];

export const initialSubmissions: ContactSubmission[] = [
  {
    id: "sub-1",
    name: "سارة الأحمد",
    email: "sara@example.com",
    phone: "+966500000000",
    serviceId: "web-dev",
    message: "أود الاستفسار عن تطوير موقع إلكتروني لشركتنا الفندقية بدعم للغتين العربية والإنجليزي.",
    createdAt: "2025-01-15 10:30",
    status: "new"
  },
  {
    id: "sub-2",
    name: "John Miller",
    email: "john@techflow.io",
    phone: "+14155552671",
    serviceId: "ai-solutions",
    message: "We are interested in integrating custom AI chatbots for our customer portal.",
    createdAt: "2025-01-14 16:20",
    status: "read"
  }
];
