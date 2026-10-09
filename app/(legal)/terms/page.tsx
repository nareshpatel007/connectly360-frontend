"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LandingHeader } from "@/components/landing-header";
import { LandingFooter } from "@/components/landing-footer";
import { Card } from "@/components/ui/card";
import {
    Scale,
    ShieldAlert,
    CreditCard,
    Smartphone,
    ExternalLink,
    ChevronRight,
    AlertTriangle,
    Mail,
    Phone,
    MapPin,
    FileCheck
} from "lucide-react";

export default function TermsPage() {
    const [activeSection, setActiveSection] = useState<string>("sec-1");

    const tocItems = [
        { id: "sec-1", title: "1. Acceptance of Terms" },
        { id: "sec-2", title: "2. Description of Connectly360" },
        { id: "sec-3", title: "3. Account Registration & Eligibility" },
        { id: "sec-4", title: "4. Workspace Accounts & Security" },
        { id: "sec-5", title: "5. Team Members & Access Roles" },
        { id: "sec-6", title: "6. WhatsApp & Meta Platform Services" },
        { id: "sec-7", title: "7. Customer Compliance Responsibilities" },
        { id: "sec-8", title: "8. Acceptable Use Policy" },
        { id: "sec-9", title: "9. Messaging Compliance & Regulations" },
        { id: "sec-10", title: "10. Mandatory WhatsApp Opt-In" },
        { id: "sec-11", title: "11. Prohibited Content & Use Cases" },
        { id: "sec-12", title: "12. Campaign & Broadcast Obligations" },
        { id: "sec-13", title: "13. Templates & Content Approval" },
        { id: "sec-14", title: "14. Third-Party Services & Integrations" },
        { id: "sec-15", title: "15. Subscriptions, Plans & Fees" },
        { id: "sec-16", title: "16. WhatsApp Usage Charges & Models" },
        { id: "sec-17", title: "17. Connectly360 Credits & Ledgers" },
        { id: "sec-18", title: "18. Payment Terms & Razorpay Processing" },
        { id: "sec-19", title: "19. Suspension for Non-Payment / Abuse" },
        { id: "sec-20", title: "20. Account Termination & Disconnection" },
        { id: "sec-21", title: "21. Data Protection & Privacy" },
        { id: "sec-22", title: "22. Intellectual Property Rights" },
        { id: "sec-23", title: "23. Customer Content & License" },
        { id: "sec-24", title: "24. Third-Party Platform Rules (Meta)" },
        { id: "sec-25", title: "25. Service Availability & Maintenance" },
        { id: "sec-26", title: "26. Disclaimers of Warranties" },
        { id: "sec-27", title: "27. Limitation of Liability" },
        { id: "sec-28", title: "28. Indemnification" },
        { id: "sec-29", title: "29. Changes to the Services" },
        { id: "sec-30", title: "30. Changes to These Terms" },
        { id: "sec-31", title: "31. Dispute Resolution & Governing Law" },
        { id: "sec-32", title: "32. Contact Information" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden selection:bg-[#2F8F83] selection:text-white">
            <LandingHeader />

            <main className="pt-36 sm:pt-40">
                {/* Hero Header */}
                <section className="relative pb-12 sm:pb-16 overflow-hidden border-b border-slate-200/80 bg-white">
                    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F8F83]/10 text-[#2F8F83] text-xs font-bold border border-[#2F8F83]/25">
                            <Scale size={14} className="text-[#2F8F83]" />
                            <span>Legal Terms & Platform Agreement</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Terms of Service
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            Effective Date: October 8, 2026 &bull; Last Updated: October 8, 2026
                        </p>
                        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                            Please review these terms carefully before creating a workspace or connecting your WhatsApp Business Account to Connectly360.
                        </p>
                    </div>
                </section>

                {/* Main Content Layout */}
                <section className="py-12 sm:py-16">
                    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            
                            {/* Sticky Sidebar Navigation (Desktop) */}
                            <aside className="hidden lg:block lg:col-span-4 sticky top-28 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs max-h-[calc(100vh-8rem)] overflow-y-auto">
                                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <FileCheck size={14} className="text-[#2F8F83]" />
                                    Table of Contents
                                </h3>
                                <nav className="space-y-1">
                                    {tocItems.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            onClick={() => setActiveSection(item.id)}
                                            className={`block text-xs py-1.5 px-2.5 rounded-lg transition-colors font-medium ${
                                                activeSection === item.id
                                                    ? "bg-[#2F8F83]/10 text-[#2F8F83] font-bold"
                                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                            }`}
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                                <div className="mt-6 pt-6 border-t border-slate-200 space-y-2">
                                    <Link
                                        href="/privacy"
                                        className="flex items-center justify-between text-xs font-bold text-[#2F8F83] hover:underline"
                                    >
                                        <span>Privacy Policy</span>
                                        <ChevronRight size={14} />
                                    </Link>
                                    <Link
                                        href="/data-deletion"
                                        className="flex items-center justify-between text-xs font-bold text-slate-600 hover:text-slate-900"
                                    >
                                        <span>Data Deletion Instructions</span>
                                        <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </aside>

                            {/* Main Legal Content */}
                            <div className="lg:col-span-8">
                                <Card className="p-6 sm:p-10 md:p-12 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-12">
                                    
                                    {/* Callout Notice */}
                                    <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                                        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                                            <AlertTriangle size={16} className="text-amber-700" />
                                            <span>Important Platform Notice for WhatsApp Senders</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed font-normal">
                                            Connectly360 provides software infrastructure and integrations to manage your official WhatsApp Business Account. We do <strong>not</strong> provide unconsented recipient phone numbers or automate spam. You are strictly responsible for obtaining verifiable customer opt-in consent, complying with Meta&rsquo;s WhatsApp Business Messaging Policy, using approved message templates, and honoring consumer opt-out requests immediately.
                                        </p>
                                    </div>

                                    {/* Section 1 */}
                                    <section id="sec-1" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            1. Acceptance of Terms
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            These Terms of Service (&ldquo;Terms&rdquo; or &ldquo;Agreement&rdquo;) constitute a legally binding agreement between you (&ldquo;Customer&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;) and <strong>Connectly360</strong> (&ldquo;Connectly360&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using the Connectly360 website, signing up for an account, launching a workspace, connecting a WhatsApp Business Account, or utilizing our APIs, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <Link href="/privacy" className="text-[#2F8F83] font-semibold underline">Privacy Policy</Link>.
                                        </p>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            If you are entering into these Terms on behalf of an enterprise, company, or legal entity, you represent and warrant that you possess the legal authority to bind that entity to this Agreement. If you do not agree to these Terms, you must not access or use Connectly360.
                                        </p>
                                    </section>

                                    {/* Section 2 */}
                                    <section id="sec-2" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            2. Description of Connectly360
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Connectly360 is a multi-tenant Conversational CRM, unified team inbox, workflow automation builder, and marketing campaign platform designed to interface with the official Meta WhatsApp Business Cloud API. Connectly360 enables businesses to connect their own WhatsApp Business Accounts (WABAs), manage multi-agent customer conversations, automate incoming inquiries, configure WhatsApp message templates, and dispatch broadcast campaigns.
                                        </p>
                                    </section>

                                    {/* Section 3 */}
                                    <section id="sec-3" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            3. Account Registration & Eligibility
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            To use Connectly360, you must register for an account. You agree to:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li>Be at least 18 years of age or the age of legal majority in your jurisdiction.</li>
                                            <li>Provide accurate, current, and complete registration information (including legal business name, valid business email, and phone number).</li>
                                            <li>Maintain and promptly update your account profile to keep it true and accurate.</li>
                                            <li>Never create an account on behalf of a prohibited or sanctioned entity.</li>
                                        </ul>
                                    </section>

                                    {/* Section 4 */}
                                    <section id="sec-4" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            4. Workspace Accounts & Security
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Your account operates within a designated workspace. You are responsible for safeguarding your login credentials (passwords, Google OAuth access, and API tokens). You are entirely responsible for all activities that occur under your workspace, whether authorized by you or not. You agree to notify us immediately at <a href="mailto:support@connectly360.com" className="text-[#2F8F83] font-semibold underline">support@connectly360.com</a> of any unauthorized access or breach of security.
                                        </p>
                                    </section>

                                    {/* Section 5 */}
                                    <section id="sec-5" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            5. Team Members & Access Roles
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Workspace administrators may invite team members to collaborate. Connectly360 enforces Role-Based Access Control (RBAC). Administrators are responsible for assigning appropriate permissions (e.g., viewing contacts, editing templates, launching campaigns, managing billing) and revoking access promptly when a team member leaves the organization.
                                        </p>
                                    </section>

                                    {/* Section 6 */}
                                    <section id="sec-6" className="space-y-3 scroll-mt-28">
                                        <div className="flex items-center gap-2">
                                            <span className="p-1.5 rounded-lg bg-[#2F8F83]/10 text-[#2F8F83]">
                                                <Smartphone size={18} />
                                            </span>
                                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                                6. WhatsApp & Meta Platform Services
                                            </h2>
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Connectly360 operates as a software interface and Tech Provider for the official Meta WhatsApp Business Platform. By connecting your WhatsApp Business Account (WABA) through Meta&rsquo;s Embedded Signup or OAuth authorization flow, you acknowledge and agree that:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li>Meta Platforms, Inc. is an independent third party that owns and operates the WhatsApp messaging network.</li>
                                            <li>Your connection to and use of WhatsApp is governed directly by Meta&rsquo;s terms, including the <a href="https://www.whatsapp.com/legal/business-terms" target="_blank" rel="noopener noreferrer" className="text-[#2F8F83] underline inline-flex items-center gap-1 font-semibold">WhatsApp Business Terms <ExternalLink size={12} /></a> and Meta Commercial Terms.</li>
                                            <li>Connectly360 cannot guarantee message delivery rates, sender reputation, phone number quality ratings, or bypass messaging tier limits enforced by Meta.</li>
                                            <li>Meta reserves the right to restrict, suspend, or terminate WABAs or phone numbers that violate Meta guidelines.</li>
                                        </ul>
                                    </section>

                                    {/* Section 7 */}
                                    <section id="sec-7" className="space-y-3 scroll-mt-28">
                                        <div className="flex items-center gap-2">
                                            <span className="p-1.5 rounded-lg bg-[#2F8F83]/10 text-[#2F8F83]">
                                                <ShieldAlert size={18} />
                                            </span>
                                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                                7. Customer Compliance Responsibilities
                                            </h2>
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
                                            Connectly360 provides the software tool, but the Customer is strictly and solely responsible for compliance with all applicable messaging, privacy, and consumer protection laws. You warrant that:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                                            <li>You have the legal authority and authorization to connect the designated WhatsApp Business Account and phone numbers.</li>
                                            <li>You have obtained all required consents, permissions, and opt-ins from each recipient before sending WhatsApp messages.</li>
                                            <li>You will honor consumer opt-out requests immediately and update your contact records accordingly.</li>
                                            <li>Your business information, display names, and commercial representations in your WhatsApp profile are truthful and accurate.</li>
                                            <li>You will not use Connectly360 to transmit spam, fraudulent communications, or unapproved commercial promotions.</li>
                                        </ul>
                                    </section>

                                    {/* Section 8 */}
                                    <section id="sec-8" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            8. Acceptable Use Policy
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            You agree not to use Connectly360, directly or indirectly, to:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li>Transmit unsolicited commercial messages, bulk spam, or communications to individuals who have not provided verifiable consent.</li>
                                            <li>Engage in phishing, social engineering, identity theft, or impersonating another business, person, or brand.</li>
                                            <li>Transmit malware, viruses, spyware, corrupted files, or harmful computational code.</li>
                                            <li>Harvest, scrape, or extract recipient contact details without authorization.</li>
                                            <li>Evade Meta account bans, quality downgrade warnings, or rate limits by rotating unauthorized phone numbers.</li>
                                            <li>Interfere with or disrupt the security, integrity, or performance of our servers, databases, or API endpoints.</li>
                                            <li>Reverse-engineer, decompile, or attempt to derive the source code of the Connectly360 platform.</li>
                                        </ul>
                                    </section>

                                    {/* Section 9 */}
                                    <section id="sec-9" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            9. Messaging Compliance & Regulations
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            You are responsible for adhering to all local, national, and international telecommunications and messaging laws applicable in the countries where your recipients reside (such as TCPA, CAN-SPAM, GDPR, TRAI regulations in India, and equivalent standards). Connectly360 is not responsible for legal sanctions, fines, or damages resulting from your failure to comply with local messaging regulations.
                                        </p>
                                    </section>

                                    {/* Section 10 */}
                                    <section id="sec-10" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            10. Mandatory WhatsApp Opt-In Requirements
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Under Meta&rsquo;s <a href="https://www.whatsapp.com/legal/business-messaging-policy" target="_blank" rel="noopener noreferrer" className="text-[#2F8F83] underline inline-flex items-center gap-1 font-semibold">WhatsApp Business Messaging Policy <ExternalLink size={12} /></a>, businesses must obtain verifiable opt-in consent from customers before sending messages outside of a 24-hour service window. The opt-in must clearly specify the business name and state that the person is opting in to receive messages over WhatsApp. Purchasing third-party telephone number lists or scraping directories is strictly prohibited.
                                        </p>
                                    </section>

                                    {/* Section 11 */}
                                    <section id="sec-11" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            11. Prohibited Content & Use Cases
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            You may not use Connectly360 to transmit content promoting or relating to:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li>Illegal drugs, narcotics, prescription drugs without licensing, tobacco, or vaping products.</li>
                                            <li>Weapons, ammunition, explosives, or military ordinance.</li>
                                            <li>Unregulated gambling, betting, adult content, pornography, or sexually explicit material.</li>
                                            <li>Multi-level marketing (MLM), get-rich-quick schemes, cryptocurrency scams, or predatory lending.</li>
                                            <li>Hate speech, harassment, defamation, threats, or incitement to violence.</li>
                                        </ul>
                                    </section>

                                    {/* Section 12 */}
                                    <section id="sec-12" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            12. Campaign & Broadcast Obligations
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            When using our broadcast campaign engine, you must review audience segmentation filters, template variable values, and timing parameters prior to launching. Connectly360 is not liable for unintended broadcast dispatches caused by user configuration error or misconfigured recipient segments.
                                        </p>
                                    </section>

                                    {/* Section 13 */}
                                    <section id="sec-13" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            13. Templates & Content Approval
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            All WhatsApp message templates (Marketing, Utility, Authentication) must be submitted to and approved by Meta before they can be used for proactive customer outreach. Connectly360 submits templates to Meta Graph API on your behalf, but does not control template approval decisions, rejection reasons, or categorization updates issued by Meta.
                                        </p>
                                    </section>

                                    {/* Section 14 */}
                                    <section id="sec-14" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            14. Third-Party Services & Integrations
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Connectly360 integrates with third-party software including Meta Platforms (WhatsApp Business Cloud API), Razorpay, OpenAI (AI auto-reply models), Google OAuth, and Pusher. We are not responsible for service interruptions, latency, rate changes, or policy alterations enforced by these independent third-party providers.
                                        </p>
                                    </section>

                                    {/* Section 15 */}
                                    <section id="sec-15" className="space-y-3 scroll-mt-28">
                                        <div className="flex items-center gap-2">
                                            <span className="p-1.5 rounded-lg bg-[#2F8F83]/10 text-[#2F8F83]">
                                                <CreditCard size={18} />
                                            </span>
                                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                                15. Subscriptions, Plans & Fees
                                            </h2>
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Connectly360 provides subscription plans (such as Starter, Growth, Business, and Enterprise) billed on a recurring monthly or annual basis. Plan details, credit quotas, user seats, and feature entitlements are described on our <Link href="/pricing" className="text-[#2F8F83] font-semibold underline">Pricing Page</Link>. Subscriptions renew automatically at the end of each billing cycle unless cancelled prior to renewal in your workspace settings.
                                        </p>
                                    </section>

                                    {/* Section 16 */}
                                    <section id="sec-16" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            16. WhatsApp Usage Charges & Billing Models
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Depending on your WhatsApp Business Account setup, country of operation, and commercial arrangement:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li><strong>Direct Meta Billing:</strong> In standard Cloud API setups where you provide a credit card or payment method directly in your Meta Business Manager, Meta bills conversation charges directly according to Meta WhatsApp conversation-based pricing.</li>
                                            <li><strong>Connectly360 Credit Ledger:</strong> Where messaging usage is administered through Connectly360, each outbound conversation or broadcast template consumes platform credits calculated according to recipient country and conversation category (MARKETING, UTILITY, AUTHENTICATION, SERVICE).</li>
                                            <li>Connectly360 makes no representation that Meta messaging rates are static; Meta periodically revises conversation fees and category rules.</li>
                                        </ul>
                                    </section>

                                    {/* Section 17 */}
                                    <section id="sec-17" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            17. Connectly360 Credits & Ledgers
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Credits purchased for messaging, automated AI workflows, or campaigns are recorded in your workspace ledger. Credits are non-transferable between unrelated workspaces and carry no cash surrender value. In accordance with our <Link href="/refund-policy" className="text-[#2F8F83] font-semibold underline">Refund Policy</Link>, consumed credits are non-refundable.
                                        </p>
                                    </section>

                                    {/* Section 18 */}
                                    <section id="sec-18" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            18. Payment Terms & Razorpay Processing
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Payments are processed through our payment gateway partner, Razorpay Software Pvt. Ltd. You authorize Razorpay to charge your selected payment method for applicable subscription fees, auto-recharges, and credit purchases. You agree to provide valid, up-to-date billing details and are responsible for any applicable government taxes (including Goods and Services Tax, GST).
                                        </p>
                                    </section>

                                    {/* Section 19 */}
                                    <section id="sec-19" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            19. Suspension for Non-Payment / Policy Violations
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Connectly360 reserves the right to immediately pause, restrict, or suspend your workspace services if:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li>Your recurring subscription payment fails or your required credit balance is depleted.</li>
                                            <li>Your workspace triggers excessive spam complaints, recipient block rates, or Meta quality downgrades.</li>
                                            <li>You breach our Acceptable Use Policy, Meta WhatsApp policies, or applicable messaging laws.</li>
                                            <li>We receive an official notice or suspension order from Meta Platforms or regulatory authorities.</li>
                                        </ul>
                                    </section>

                                    {/* Section 20 */}
                                    <section id="sec-20" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            20. Account Termination & Disconnection
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            You may disconnect your WhatsApp Business Account or cancel your Connectly360 account at any time in your workspace settings. When you disconnect a WhatsApp account:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li>Connectly360 stops using the access token for new WhatsApp operations and invalidates active session tokens.</li>
                                            <li>Outbound message dispatches and campaign automations for that number are halted.</li>
                                            <li>Historical CRM conversations and contact logs remain accessible until you cancel your workspace or request permanent deletion under our <Link href="/data-deletion" className="text-[#2F8F83] font-semibold underline">Data Deletion Instructions</Link>.</li>
                                        </ul>
                                    </section>

                                    {/* Section 21 */}
                                    <section id="sec-21" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            21. Data Protection & Privacy
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Our collection and processing of personal data is governed by our <Link href="/privacy" className="text-[#2F8F83] font-semibold underline">Privacy Policy</Link>, which is incorporated into these Terms by reference. Both parties agree to comply with applicable data protection legislation regarding customer contact information and message logs.
                                        </p>
                                    </section>

                                    {/* Section 22 */}
                                    <section id="sec-22" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            22. Intellectual Property Rights
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Connectly360 and its licensors retain all rights, title, and interest (including all patent, copyright, trademark, and trade secret rights) in and to the Connectly360 software, user interfaces, branding, logos, APIs, and documentation. You may not copy, reproduce, modify, or create derivative works of any part of our platform without prior written consent.
                                        </p>
                                    </section>

                                    {/* Section 23 */}
                                    <section id="sec-23" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            23. Customer Content & License
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            You retain full ownership of all data, text, images, templates, and contact lists you transmit or upload to Connectly360 (&ldquo;Customer Content&rdquo;). You grant Connectly360 a non-exclusive, worldwide, royalty-free license to host, transmit, format, and display Customer Content solely as necessary to provide the contracted services to you.
                                        </p>
                                    </section>

                                    {/* Section 24 */}
                                    <section id="sec-24" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            24. Third-Party Platform Rules (Meta)
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            You agree to strictly comply with all third-party platform rules that apply to your use of Connectly360, including the <a href="https://www.facebook.com/legal/terms" target="_blank" rel="noopener noreferrer" className="text-[#2F8F83] underline inline-flex items-center gap-1 font-semibold">Meta Terms of Service <ExternalLink size={12} /></a>, <a href="https://www.whatsapp.com/legal/business-terms" target="_blank" rel="noopener noreferrer" className="text-[#2F8F83] underline inline-flex items-center gap-1 font-semibold">WhatsApp Business Terms <ExternalLink size={12} /></a>, and <a href="https://www.whatsapp.com/legal/commerce-policy" target="_blank" rel="noopener noreferrer" className="text-[#2F8F83] underline inline-flex items-center gap-1 font-semibold">WhatsApp Commerce Policy <ExternalLink size={12} /></a>. Any violation of Meta&rsquo;s terms constitutes a material violation of these Terms.
                                        </p>
                                    </section>

                                    {/* Section 25 */}
                                    <section id="sec-25" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            25. Service Availability & Maintenance
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We strive to maintain continuous platform availability. However, Connectly360 is provided over telecommunication networks and cloud providers. From time to time, scheduled maintenance, updates, or third-party API outages (such as Meta Cloud API downtime or cloud host disruptions) may cause temporary service interruptions. We are not liable for communication delays or delivery failures caused by third-party network outages.
                                        </p>
                                    </section>

                                    {/* Section 26 */}
                                    <section id="sec-26" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            26. Disclaimers of Warranties
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed uppercase text-xs sm:text-sm font-semibold tracking-wide text-slate-600">
                                            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CONNECTLY360 AND ITS SERVICES ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE FROM THIRD-PARTY INTERFERENCE.
                                        </p>
                                    </section>

                                    {/* Section 27 */}
                                    <section id="sec-27" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            27. Limitation of Liability
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CONNECTLY360, ITS FOUNDERS, OFFICERS, DIRECTORS, EMPLOYEES, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS INTERRUPTION) ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE PLATFORM, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                                        </p>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY ARISING UNDER THESE TERMS EXCEED THE TOTAL FEES ACTUALLY PAID BY YOU TO CONNECTLY360 IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
                                        </p>
                                    </section>

                                    {/* Section 28 */}
                                    <section id="sec-28" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            28. Indemnification
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            You agree to defend, indemnify, and hold harmless Connectly360, its affiliates, directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&rsquo; fees) arising out of or related to: (a) your use of Connectly360; (b) your violation of these Terms; (c) your violation of Meta WhatsApp Business Policies; (d) any Customer Content or messages transmitted through your workspace; or (e) your failure to obtain required opt-in consents from recipients.
                                        </p>
                                    </section>

                                    {/* Section 29 */}
                                    <section id="sec-29" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            29. Changes to the Services
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We continuously improve Connectly360. We reserve the right to modify, enhance, update, or discontinue features of our platform at any time, provided that we will make reasonable efforts to notify you of material deprecations that substantially impair core CRM functionality.
                                        </p>
                                    </section>

                                    {/* Section 30 */}
                                    <section id="sec-30" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            30. Changes to These Terms
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We may update these Terms periodically to reflect evolving features, legal updates, or changes in Meta&rsquo;s platform ecosystem. When changes occur, we will update the &ldquo;Last Updated&rdquo; date at the top of this document. Continued use of Connectly360 following such updates constitutes your full acceptance of the revised Terms.
                                        </p>
                                    </section>

                                    {/* Section 31 */}
                                    <section id="sec-31" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            31. Dispute Resolution & Governing Law
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            These Terms and any disputes arising out of or relating to them shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. The competent courts located in Ahmedabad, Gujarat, India shall have exclusive jurisdiction over any legal proceedings arising under this Agreement.
                                        </p>
                                    </section>

                                    {/* Section 32 */}
                                    <section id="sec-32" className="space-y-3 scroll-mt-28">
                                        <div className="flex items-center gap-2">
                                            <span className="p-1.5 rounded-lg bg-[#2F8F83]/10 text-[#2F8F83]">
                                                <Mail size={18} />
                                            </span>
                                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                                32. Contact Information
                                            </h2>
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            If you have questions, notices, or inquiries regarding these Terms of Service, please contact our legal desk:
                                        </p>
                                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-3 text-sm text-slate-800">
                                            <p className="font-extrabold text-slate-900 text-base">Connectly360 Legal Agreements Desk</p>
                                            <div className="space-y-2 text-slate-700">
                                                <div className="flex items-center gap-2.5">
                                                    <Mail size={15} className="text-[#2F8F83]" />
                                                    <span>Email: <a href="mailto:support@connectly360.com" className="text-[#2F8F83] font-bold underline">support@connectly360.com</a></span>
                                                </div>
                                                <div className="flex items-center gap-2.5">
                                                    <Phone size={15} className="text-[#2F8F83]" />
                                                    <span>Phone: <span className="font-semibold">+91 9586557162</span></span>
                                                </div>
                                                <div className="flex items-center gap-2.5">
                                                    <MapPin size={15} className="text-[#2F8F83]" />
                                                    <span>Location: Ahmedabad, Gujarat, India</span>
                                                </div>
                                            </div>
                                            <div className="pt-2 flex flex-wrap gap-3">
                                                <Link
                                                    href="/privacy"
                                                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-[#2F8F83] text-white hover:bg-[#2c7168] transition-colors"
                                                >
                                                    Read Privacy Policy
                                                </Link>
                                                <Link
                                                    href="/contact"
                                                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 transition-colors"
                                                >
                                                    Contact Support
                                                </Link>
                                            </div>
                                        </div>
                                    </section>

                                </Card>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <LandingFooter />
        </div>
    );
}
