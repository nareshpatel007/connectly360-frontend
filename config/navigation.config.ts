export interface NavItem {
    title: string;
    description: string;
    href: string;
    icon: string;
    badge?: string;
    enabled?: boolean;
}

export interface NavGroup {
    groupTitle: string;
    groupSubtitle?: string;
    items: NavItem[];
}

export interface FeaturedCard {
    badge?: string;
    title: string;
    description: string;
    primaryCta: {
        text: string;
        href: string;
    };
    secondaryCta?: {
        text: string;
        href: string;
    };
}

export interface MegaMenuConfig {
    columns: NavGroup[];
    featured?: FeaturedCard;
    bottomBanner?: {
        text: string;
        linkText: string;
        href: string;
        secondaryText?: string;
        secondaryHref?: string;
    };
}

export interface TopLevelNavItem {
    id: string;
    label: string;
    type: "megaMenu" | "link";
    href?: string;
    megaMenu?: MegaMenuConfig;
}

export interface NavigationConfig {
    announcementBanner: {
        enabled: boolean;
        badge: string;
        text: string;
        ctaText: string;
        href: string;
    };
    primaryNav: TopLevelNavItem[];
    actions: {
        guest: {
            login: { label: string; href: string };
            register: { label: string; href: string };
        };
        authenticated: {
            help: { label: string; href: string };
            dashboard: { label: string; href: string };
        };
    };
}

export const navigationConfig: NavigationConfig = {
    announcementBanner: {
        enabled: true,
        badge: "Special Offer",
        text: "Launch your WhatsApp campaigns today — Pay ₹999 & Get 500 Messages Free!",
        ctaText: "Claim Credits →",
        href: "/pricing",
    },
    primaryNav: [
        {
            id: "products",
            label: "Products",
            type: "megaMenu",
            megaMenu: {
                columns: [
                    {
                        groupTitle: "WhatsApp Business",
                        groupSubtitle: "Connect & Communicate",
                        items: [
                            {
                                title: "WhatsApp Cloud Platform",
                                description: "Official Meta Cloud API with high throughput & verified sender trust.",
                                href: "/#products",
                                icon: "MessageSquare",
                                badge: "Official API",
                                enabled: true,
                            },
                            {
                                title: "Shared Team Inbox",
                                description: "Collaborate seamlessly across sales and support on a unified WhatsApp number.",
                                href: "/#products",
                                icon: "Inbox",
                                enabled: true,
                            },
                            {
                                title: "Broadcast Campaigns",
                                description: "Send bulk messages and rich-media campaigns with 98% open rates.",
                                href: "/pricing",
                                icon: "Megaphone",
                                enabled: true,
                            },
                            {
                                title: "WhatsApp Flows",
                                description: "Deploy native interactive forms, questionnaires & bookings in chat.",
                                href: "/#workflow",
                                icon: "GitBranch",
                                enabled: true,
                            },
                        ],
                    },
                    {
                        groupTitle: "Customer Engagement",
                        groupSubtitle: "Manage & Convert",
                        items: [
                            {
                                title: "Conversational CRM",
                                description: "Track customer history, contact attributes, notes, and timeline logs.",
                                href: "/#products",
                                icon: "Users",
                                enabled: true,
                            },
                            {
                                title: "Lead Management",
                                description: "Automatically capture, qualify, tag, and route inbound leads.",
                                href: "/#playground",
                                icon: "UserCheck",
                                enabled: true,
                            },
                            {
                                title: "Sales Pipeline",
                                description: "Visual deal stage progression from inquiry to won customer.",
                                href: "/#playground",
                                icon: "TrendingUp",
                                enabled: true,
                            },
                            {
                                title: "Customer Support Hub",
                                description: "Multi-agent assignment, SLA queues, canned responses & routing.",
                                href: "/contact",
                                icon: "Headphones",
                                enabled: true,
                            },
                        ],
                    },
                    {
                        groupTitle: "Automation & AI",
                        groupSubtitle: "Scale 24/7 Operations",
                        items: [
                            {
                                title: "Autonomous AI Agents",
                                description: "Resolve repetitive customer queries and qualify intent without human delay.",
                                href: "/#playground",
                                icon: "Bot",
                                badge: "AI Powered",
                                enabled: true,
                            },
                            {
                                title: "Interactive Chatbots",
                                description: "Build keyword-triggered chatbot flows and interactive button menus.",
                                href: "/#workflow",
                                icon: "Sparkles",
                                enabled: true,
                            },
                            {
                                title: "Workflow Automation",
                                description: "No-code visual drag-and-drop builder for custom routing logic.",
                                href: "/#workflow",
                                icon: "Zap",
                                enabled: true,
                            },
                            {
                                title: "Drip Nurture Journeys",
                                description: "Automated sequence messaging based on customer triggers and timelines.",
                                href: "/#workflow",
                                icon: "Clock",
                                enabled: true,
                            },
                        ],
                    },
                    {
                        groupTitle: "Growth & Commerce",
                        groupSubtitle: "Drive Revenue",
                        items: [
                            {
                                title: "WhatsApp Commerce",
                                description: "Share product catalogs, take cart orders, and collect instant payments.",
                                href: "/#playground",
                                icon: "ShoppingBag",
                                enabled: true,
                            },
                            {
                                title: "Click-to-WhatsApp Ads",
                                description: "Direct Meta ad traffic into qualified WhatsApp conversations with CRM tracking.",
                                href: "/book-demo",
                                icon: "Target",
                                enabled: true,
                            },
                            {
                                title: "AI Template Generator",
                                description: "Craft Meta-compliant WhatsApp broadcast templates in seconds with AI.",
                                href: "/#products",
                                icon: "FileText",
                                enabled: true,
                            },
                            {
                                title: "Integrations Directory",
                                description: "Connect Shopify, WooCommerce, CRMs, payment gateways & webhooks.",
                                href: "/integrations",
                                icon: "Plug",
                                enabled: true,
                            },
                        ],
                    },
                ],
                featured: {
                    badge: "Official Meta Tech Partner",
                    title: "Connect WhatsApp in minutes",
                    description: "Use the official WhatsApp Cloud API to start conversations, run broadcast campaigns, and automate customer support 24/7.",
                    primaryCta: {
                        text: "Start Free Trial →",
                        href: "/register",
                    },
                    secondaryCta: {
                        text: "Book a Demo",
                        href: "/book-demo",
                    },
                },
                bottomBanner: {
                    text: "Build smarter customer journeys with Connectly360 — Connect WhatsApp, CRM, AI, and automations.",
                    linkText: "Explore Platform",
                    href: "/#products",
                    secondaryText: "Book Setup Demo",
                    secondaryHref: "/book-demo",
                },
            },
        },
        {
            id: "solutions",
            label: "Solutions",
            type: "megaMenu",
            megaMenu: {
                columns: [
                    {
                        groupTitle: "By Industry",
                        groupSubtitle: "Tailored to your business model",
                        items: [
                            {
                                title: "E-Commerce & D2C",
                                description: "Recover abandoned carts, automate shipping updates & boost repeat orders.",
                                href: "/#playground",
                                icon: "ShoppingBag",
                                enabled: true,
                            },
                            {
                                title: "Real Estate & Housing",
                                description: "Capture property inquiries, qualify budgets, and book site visits automatically.",
                                href: "/#playground",
                                icon: "Building2",
                                enabled: true,
                            },
                            {
                                title: "Education & EdTech",
                                description: "Automate admissions inquiries, fee reminders, and student updates on WhatsApp.",
                                href: "/#playground",
                                icon: "GraduationCap",
                                enabled: true,
                            },
                            {
                                title: "Healthcare & Clinics",
                                description: "Automate appointment bookings, lab test reminders, and patient inquiries.",
                                href: "/#playground",
                                icon: "Shield",
                                enabled: true,
                            },
                            {
                                title: "Financial Services",
                                description: "Verified loan alerts, document collection, and secure transactional notices.",
                                href: "/#playground",
                                icon: "Coins",
                                enabled: true,
                            },
                            {
                                title: "B2B & Wholesale",
                                description: "Daily wholesale rate cards, GSTIN verification, and digital catalog delivery.",
                                href: "/#playground",
                                icon: "Truck",
                                enabled: true,
                            },
                        ],
                    },
                    {
                        groupTitle: "By Team",
                        groupSubtitle: "Built for every department",
                        items: [
                            {
                                title: "Sales Teams",
                                description: "Accelerate speed-to-lead and convert inbound WhatsApp chats into qualified deals.",
                                href: "/book-demo",
                                icon: "Briefcase",
                                enabled: true,
                            },
                            {
                                title: "Marketing Teams",
                                description: "Launch personalized broadcast campaigns with rich media and verified delivery.",
                                href: "/pricing",
                                icon: "Megaphone",
                                enabled: true,
                            },
                            {
                                title: "Customer Support",
                                description: "Resolve repetitive questions with AI 24/7 while keeping human agents in control.",
                                href: "/contact",
                                icon: "Headphones",
                                enabled: true,
                            },
                            {
                                title: "Founders & SMBs",
                                description: "All-in-one conversational CRM & marketing platform without enterprise costs.",
                                href: "/pricing",
                                icon: "Compass",
                                enabled: true,
                            },
                        ],
                    },
                ],
                featured: {
                    badge: "Interactive Industry Playground",
                    title: "Test your industry workflow live",
                    description: "Experience how pre-configured workflows handle Real Estate visits, E-Commerce tracking, B2B quotes, and Clinic appointments.",
                    primaryCta: {
                        text: "Launch Interactive Demo →",
                        href: "/#playground",
                    },
                    secondaryCta: {
                        text: "Talk to Solutions Expert",
                        href: "/contact",
                    },
                },
                bottomBanner: {
                    text: "Ready to scale your business on WhatsApp?",
                    linkText: "Calculate Your ROI",
                    href: "/#roi",
                },
            },
        },
        {
            id: "ai-automation",
            label: "AI & Automation",
            type: "megaMenu",
            megaMenu: {
                columns: [
                    {
                        groupTitle: "AI for Customer Support",
                        groupSubtitle: "Instant, accurate assistance",
                        items: [
                            {
                                title: "AI Support Agent",
                                description: "Answer customer questions 24/7 with human-like precision from your documentation.",
                                href: "/contact",
                                icon: "Bot",
                                badge: "AI Agent",
                                enabled: true,
                            },
                            {
                                title: "AI Knowledge Base",
                                description: "Train your AI on company documents, catalogs, PDFs, and FAQs securely.",
                                href: "/book-demo",
                                icon: "FileText",
                                enabled: true,
                            },
                            {
                                title: "Conversation Summaries",
                                description: "Generate instant context summaries for support handoffs and CRM logging.",
                                href: "/#products",
                                icon: "Sparkles",
                                enabled: true,
                            },
                        ],
                    },
                    {
                        groupTitle: "AI for Sales & Growth",
                        groupSubtitle: "Qualify & convert pipeline",
                        items: [
                            {
                                title: "AI Lead Qualification",
                                description: "Extract customer intent, budget, and contact details automatically in-chat.",
                                href: "/#playground",
                                icon: "UserCheck",
                                enabled: true,
                            },
                            {
                                title: "AI Follow-up Assistant",
                                description: "Re-engage cold leads with personalized context-aware nudges on WhatsApp.",
                                href: "/book-demo",
                                icon: "Clock",
                                enabled: true,
                            },
                            {
                                title: "Smart Lead Routing",
                                description: "Assign high-value leads to the right sales representatives instantly.",
                                href: "/#workflow",
                                icon: "TrendingUp",
                                enabled: true,
                            },
                        ],
                    },
                    {
                        groupTitle: "Automation Engine",
                        groupSubtitle: "No-code business logic",
                        items: [
                            {
                                title: "Visual Workflow Builder",
                                description: "Drag-and-drop canvas with triggers, conditional branches, and delay timers.",
                                href: "/#workflow",
                                icon: "Zap",
                                enabled: true,
                            },
                            {
                                title: "Event-Based Automations",
                                description: "Trigger WhatsApp alerts upon webhook payloads, store orders, or CRM updates.",
                                href: "/integrations",
                                icon: "Webhook",
                                enabled: true,
                            },
                            {
                                title: "Drip Nurture Sequences",
                                description: "Automate customer onboarding and post-purchase follow-up journeys.",
                                href: "/#workflow",
                                icon: "GitBranch",
                                enabled: true,
                            },
                        ],
                    },
                ],
                featured: {
                    badge: "AI Agent Engine",
                    title: "See what Connectly360 AI can automate",
                    description: "Deliver human-grade support and automated lead qualification 24/7 without scaling agent headcount.",
                    primaryCta: {
                        text: "Try Live AI Demo →",
                        href: "/#playground",
                    },
                    secondaryCta: {
                        text: "Book Setup Session",
                        href: "/book-demo",
                    },
                },
                bottomBanner: {
                    text: "Zero setup friction — connect your Meta WhatsApp Cloud API in minutes.",
                    linkText: "Explore Workflows",
                    href: "/#workflow",
                },
            },
        },
        {
            id: "resources",
            label: "Resources",
            type: "megaMenu",
            megaMenu: {
                columns: [
                    {
                        groupTitle: "Learn & Discover",
                        groupSubtitle: "Playbooks & Insights",
                        items: [
                            {
                                title: "Blog & Guides",
                                description: "Actionable WhatsApp marketing playbooks, CRM strategies, and tutorials.",
                                href: "/blog",
                                icon: "FileText",
                                enabled: true,
                            },
                            {
                                title: "Knowledge & FAQs",
                                description: "Answers to common questions about onboarding, Meta verification & pricing.",
                                href: "/faq",
                                icon: "HelpCircle",
                                enabled: true,
                            },
                            {
                                title: "ROI Calculator",
                                description: "Estimate hours and team cost saved by automating customer WhatsApp chats.",
                                href: "/#roi",
                                icon: "Coins",
                                enabled: true,
                            },
                        ],
                    },
                    {
                        groupTitle: "Developers & Ecosystem",
                        groupSubtitle: "Integrations & APIs",
                        items: [
                            {
                                title: "Integrations Directory",
                                description: "Connect Shopify, WooCommerce, HubSpot, Zoho, Razorpay & custom apps.",
                                href: "/integrations",
                                icon: "Plug",
                                enabled: true,
                            },
                            {
                                title: "Official WhatsApp Cloud API",
                                description: "Direct Meta Cloud API connection with one-click embedded signup.",
                                href: "/#products",
                                icon: "MessageSquare",
                                enabled: true,
                            },
                            {
                                title: "Webhooks & REST APIs",
                                description: "Sync messages, events, and contact data into your custom infrastructure.",
                                href: "/integrations",
                                icon: "Webhook",
                                enabled: true,
                            },
                        ],
                    },
                    {
                        groupTitle: "Company & Support",
                        groupSubtitle: "We are here to help",
                        items: [
                            {
                                title: "Contact Support",
                                description: "Reach out to our customer success team for setup guidance and questions.",
                                href: "/contact",
                                icon: "PhoneCall",
                                enabled: true,
                            },
                            {
                                title: "Book a 1-on-1 Demo",
                                description: "Get a live personalized walkthrough and custom proof-of-concept setup.",
                                href: "/book-demo",
                                icon: "Calendar",
                                enabled: true,
                            },
                            {
                                title: "Security & Privacy",
                                description: "Meta-compliant data protection, privacy policy, and encryption standards.",
                                href: "/privacy",
                                icon: "Shield",
                                enabled: true,
                            },
                            {
                                title: "Terms of Service",
                                description: "Clear service agreements and responsible messaging compliance guidelines.",
                                href: "/terms",
                                icon: "CheckCircle2",
                                enabled: true,
                            },
                        ],
                    },
                ],
                featured: {
                    badge: "1-on-1 Setup Support",
                    title: "Need help getting started?",
                    description: "Our solutions architects will guide you through Meta embedded signup, catalog setup, and custom workflow building.",
                    primaryCta: {
                        text: "Book Setup Demo →",
                        href: "/book-demo",
                    },
                    secondaryCta: {
                        text: "Contact Support",
                        href: "/contact",
                    },
                },
            },
        },
        {
            id: "pricing",
            label: "Pricing",
            type: "link",
            href: "/pricing",
        },
    ],
    actions: {
        guest: {
            login: {
                label: "Log In",
                href: "/login",
            },
            register: {
                label: "Start Free Trial",
                href: "/register",
            },
        },
        authenticated: {
            help: {
                label: "Need Help?",
                href: "/contact",
            },
            dashboard: {
                label: "Dashboard",
                href: "/dashboard",
            },
        },
    },
};
