"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LandingHeader } from "@/components/landing-header";
import { LandingFooter } from "@/components/landing-footer";
import { Card } from "@/components/ui/card";
import {
    Shield,
    Lock,
    Eye,
    Server,
    FileText,
    CheckCircle2,
    AlertCircle,
    Mail,
    Phone,
    MapPin,
    ExternalLink,
    ChevronRight,
    RefreshCw,
    Database,
    Cpu,
    Smartphone
} from "lucide-react";

export default function PrivacyPolicyPage() {
    const [activeSection, setActiveSection] = useState<string>("sec-1");

    const tocItems = [
        { id: "sec-1", title: "1. Introduction" },
        { id: "sec-2", title: "2. Who We Are" },
        { id: "sec-3", title: "3. Scope of this Policy" },
        { id: "sec-4", title: "4. Information We Collect" },
        { id: "sec-5", title: "5. Information Provided by Customers" },
        { id: "sec-6", title: "6. WhatsApp & Meta Information" },
        { id: "sec-7", title: "7. How We Use Information" },
        { id: "sec-8", title: "8. Legal Bases for Processing" },
        { id: "sec-9", title: "9. WhatsApp Business Account (WABA) Data" },
        { id: "sec-10", title: "10. Message & Conversation Data" },
        { id: "sec-11", title: "11. Contact & Customer CRM Data" },
        { id: "sec-12", title: "12. Campaign & Broadcast Data" },
        { id: "sec-13", title: "13. Account & Workspace Data" },
        { id: "sec-14", title: "14. Team Member & RBAC Data" },
        { id: "sec-15", title: "15. Device & Technical Information" },
        { id: "sec-16", title: "16. Cookies & Tracking Technologies" },
        { id: "sec-17", title: "17. Analytics & Diagnostics" },
        { id: "sec-18", title: "18. Third-Party Services & Subprocessors" },
        { id: "sec-19", title: "19. Meta / WhatsApp Data Use & Non-Sale" },
        { id: "sec-20", title: "20. Data Sharing & Disclosures" },
        { id: "sec-21", title: "21. Data Processing on Behalf of Customers" },
        { id: "sec-22", title: "22. Data Retention Schedule" },
        { id: "sec-23", title: "23. Data Deletion & Removal" },
        { id: "sec-24", title: "24. Customer Data Export" },
        { id: "sec-25", title: "25. Security & Encryption Practices" },
        { id: "sec-26", title: "26. International Data Transfers" },
        { id: "sec-27", title: "27. Children's Privacy" },
        { id: "sec-28", title: "28. Marketing Communications" },
        { id: "sec-29", title: "29. Your Privacy Rights" },
        { id: "sec-30", title: "30. Customer Compliance Responsibilities" },
        { id: "sec-31", title: "31. Changes to This Privacy Policy" },
        { id: "sec-32", title: "32. Contact Information" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden selection:bg-[#35877D] selection:text-white">
            <LandingHeader />

            <main className="pt-36 sm:pt-40">
                {/* Hero Header */}
                <section className="relative pb-12 sm:pb-16 overflow-hidden border-b border-slate-200/80 bg-white">
                    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#35877D]/10 text-[#35877D] text-xs font-bold border border-[#35877D]/25">
                            <Shield size={14} className="text-[#35877D]" />
                            <span>Privacy & Compliance Center</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            Effective Date: October 8, 2026 &bull; Last Updated: October 8, 2026
                        </p>
                        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                            Connectly360 provides a multi-tenant Conversational CRM and marketing platform powered by official Meta WhatsApp Business Cloud APIs. This policy explains how we collect, process, safeguard, and delete your data.
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
                                    <FileText size={14} className="text-[#35877D]" />
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
                                                    ? "bg-[#35877D]/10 text-[#35877D] font-bold"
                                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                            }`}
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                                <div className="mt-6 pt-6 border-t border-slate-200 space-y-2">
                                    <Link
                                        href="/data-deletion"
                                        className="flex items-center justify-between text-xs font-bold text-[#35877D] hover:underline"
                                    >
                                        <span>User Data Deletion Page</span>
                                        <ChevronRight size={14} />
                                    </Link>
                                    <Link
                                        href="/terms"
                                        className="flex items-center justify-between text-xs font-bold text-slate-600 hover:text-slate-900"
                                    >
                                        <span>Terms of Service</span>
                                        <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </aside>

                            {/* Main Legal Text */}
                            <div className="lg:col-span-8">
                                <Card className="p-6 sm:p-10 md:p-12 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-12">
                                    
                                    {/* Callout Summary */}
                                    <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                                        <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                                            <CheckCircle2 size={16} className="text-emerald-700" />
                                            <span>Key Commitment for Meta WhatsApp Platform Users</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-emerald-950/80 leading-relaxed font-normal">
                                            Connectly360 acts as a certified Tech Provider solution for business WhatsApp communication. We process your WhatsApp Business Account (WABA) data, incoming/outbound messages, contact directories, and message templates exclusively to deliver your configured CRM, inbox, and campaign automation services. <strong>We do not sell, rent, monetize, or use your WhatsApp message content or customer contact information for profiling or third-party targeted advertising.</strong>
                                        </p>
                                    </div>

                                    {/* Section 1 */}
                                    <section id="sec-1" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            1. Introduction
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Welcome to <strong>Connectly360</strong> (&ldquo;Connectly360&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). Connectly360 is an enterprise multi-tenant Conversational Customer Relationship Management (&ldquo;CRM&rdquo;), team inbox, automated workflow, and marketing campaign platform designed to help businesses manage customer interactions through the official Meta WhatsApp Business Platform (Cloud API).
                                        </p>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We value the privacy of our business customers (&ldquo;Customers&rdquo;, &ldquo;Workspaces&rdquo;, or &ldquo;Users&rdquo;) and their end-consumers (&ldquo;Contacts&rdquo; or &ldquo;Recipients&rdquo;). This Privacy Policy explains our practices regarding the collection, use, disclosure, storage, security, and deletion of personal data processed through our website (<a href="https://connectly360.com" className="text-[#35877D] font-semibold underline">connectly360.com</a>), our web applications, our APIs, and our WhatsApp integration services.
                                        </p>
                                    </section>

                                    {/* Section 2 */}
                                    <section id="sec-2" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            2. Who We Are
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Connectly360 is operated as a software technology platform based in India:
                                        </p>
                                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs sm:text-sm text-slate-700 space-y-1.5 font-medium">
                                            <p><strong>Platform Name:</strong> Connectly360</p>
                                            <p><strong>Operating Region:</strong> Ahmedabad, Gujarat, India</p>
                                            <p><strong>Contact Email:</strong> <a href="mailto:support@connectly360.com" className="text-[#35877D] underline">support@connectly360.com</a></p>
                                            <p><strong>Support Telephone:</strong> +91 9586557162</p>
                                            <p><strong>Official Website:</strong> https://connectly360.com</p>
                                        </div>
                                    </section>

                                    {/* Section 3 */}
                                    <section id="sec-3" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            3. Scope of this Policy
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            This Privacy Policy applies to all services offered by Connectly360, including:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li>The public website accessible at connectly360.com and related landing pages.</li>
                                            <li>The Connectly360 SaaS web application, workspace dashboards, team inbox, workflow automation builder, campaign dispatcher, and analytics interfaces.</li>
                                            <li>Developer REST APIs, webhooks, and programmatic messaging integrations.</li>
                                            <li>The Meta WhatsApp Embedded Signup / Tech Provider onboarding process connecting customer WhatsApp Business Accounts (WABAs) to Connectly360.</li>
                                        </ul>
                                    </section>

                                    {/* Section 4 */}
                                    <section id="sec-4" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            4. Information We Collect
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We collect information in three ways: information directly provided by customers during registration and configuration, information collected automatically during platform operation, and information received via authorized third-party APIs (principally Meta Platforms and payment gateways).
                                        </p>
                                    </section>

                                    {/* Section 5 */}
                                    <section id="sec-5" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            5. Information Provided by Customers
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            When you create an account, create a workspace, subscribe to a plan, or contact support, you provide us with:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li><strong>Identity & Contact Information:</strong> Full name, business email address, phone number, and physical or business address.</li>
                                            <li><strong>Authentication Credentials:</strong> Securely salted and hashed passwords (via bcrypt) or OAuth identifier tokens if authenticating through Google Login.</li>
                                            <li><strong>Company Profile:</strong> Business name, logo, industry vertical, business hours, and delivery information.</li>
                                            <li><strong>Workspace Settings:</strong> Team member email addresses, assigned RBAC permissions, notification preferences, and internal notes.</li>
                                        </ul>
                                    </section>

                                    {/* Section 6 */}
                                    <section id="sec-6" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            6. WhatsApp & Meta Information
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            When a business connects its WhatsApp Business Account to Connectly360 using Meta&rsquo;s official Embedded Signup or Tech Provider flow, we receive authorized metadata and programmatic access tokens via Meta Graph API:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li><strong>WABA Identifiers:</strong> WhatsApp Business Account ID (WABA ID), Meta Business Manager ID, and Phone Number ID.</li>
                                            <li><strong>Phone Number Details:</strong> Verified business phone number, display phone number, verified business name, and code verification status.</li>
                                            <li><strong>Account Quality & Limits:</strong> Quality rating (GREEN, YELLOW, RED), messaging tier limit (e.g., 250, 1K, 10K, 100K, or Unlimited daily conversations), and account status (CONNECTED, PENDING, or DISCONNECTED).</li>
                                            <li><strong>WhatsApp Business Profile:</strong> About text, business address, description, email, website links, vertical, and profile picture URL.</li>
                                            <li><strong>Access Tokens:</strong> OAuth authorization codes exchanged for system user or permanent system tokens, which are encrypted at rest with AES-256 before storage in our database.</li>
                                        </ul>
                                    </section>

                                    {/* Section 7 */}
                                    <section id="sec-7" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            7. How We Use Information
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We use the collected information solely for legitimate business operations and fulfilling contracted services, specifically to:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li>Authenticate accounts and secure workspace boundaries across multiple tenants.</li>
                                            <li>Connect, configure, and maintain your official WhatsApp Business Cloud API assets.</li>
                                            <li>Transmit outbound WhatsApp messages, campaign broadcasts, and auto-replies requested by you.</li>
                                            <li>Ingest inbound messages and status updates through Meta webhooks and display them in your live team inbox.</li>
                                            <li>Synchronize and submit WhatsApp message templates to Meta for review and catalog management.</li>
                                            <li>Deduct usage credits accurately based on WhatsApp conversation pricing tiers.</li>
                                            <li>Process subscription payments and credit topups via our licensed payment processor (Razorpay).</li>
                                            <li>Deliver real-time notifications of customer inquiries via WebSockets (Pusher).</li>
                                            <li>Provide customer support, address technical troubleshooting tickets, and maintain system reliability.</li>
                                        </ul>
                                    </section>

                                    {/* Section 8 */}
                                    <section id="sec-8" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            8. Legal Bases for Processing
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Depending on your jurisdiction and role, we process your information under the following legal bases:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li><strong>Performance of a Contract:</strong> Providing CRM software, processing messages, maintaining WhatsApp connectivity, and managing subscriptions as agreed in our Terms of Service.</li>
                                            <li><strong>Legitimate Interests:</strong> Securing our infrastructure against fraud, abuse, and cyber threats; monitoring system performance; and delivering customer assistance.</li>
                                            <li><strong>Legal Compliance:</strong> Retaining financial transaction records, tax documentation, and responding to lawful requests by competent public authorities.</li>
                                            <li><strong>Consent:</strong> When you or your end-users explicitly consent to optional features, such as optional marketing newsletters or third-party AI extensions.</li>
                                        </ul>
                                    </section>

                                    {/* Section 9 */}
                                    <section id="sec-9" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            9. WhatsApp Business Account (WABA) Data
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            When you link a WABA, Connectly360 acts as a software interface between your Meta Business Manager and your team. We interact with Meta Graph API endpoints on your behalf. We store your WABA configuration, verify phone registration through 6-digit registration PINs, subscribe to WhatsApp webhooks, and cache profile details. We never take ownership of your WABA or phone numbers; your business retains full ownership of its Meta assets.
                                        </p>
                                    </section>

                                    {/* Section 10 */}
                                    <section id="sec-10" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            10. Message & Conversation Data
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Connectly360 processes incoming and outgoing WhatsApp messages:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li><strong>Message Content:</strong> Text strings, quick-reply responses, button payloads, interactive list responses, and media attachment references (images, audio notes, video clips, and documents).</li>
                                            <li><strong>Message Metadata:</strong> WhatsApp Message IDs (WAMID), sender phone number, recipient phone number, timestamps, conversation category (SERVICE, MARKETING, UTILITY, AUTHENTICATION), and pricing tier.</li>
                                            <li><strong>Delivery Telemetry:</strong> Real-time webhook events tracking message states (sent, delivered, read, failed), alongside failure error codes and rejection reasons returned by Meta.</li>
                                        </ul>
                                    </section>

                                    {/* Section 11 */}
                                    <section id="sec-11" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            11. Contact & Customer CRM Data
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            When end-consumers interact with your connected WhatsApp number, or when you import audience lists, Connectly360 maintains a workspace CRM record including:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li>Contact phone number in international E.164 format.</li>
                                            <li>Customer name, email address, company name, and lead stage.</li>
                                            <li>Opt-in status, opt-in source timestamp, opt-out status, and marketing tags.</li>
                                            <li>Custom attributes and custom fields configured by your workspace administrators.</li>
                                        </ul>
                                    </section>

                                    {/* Section 12 */}
                                    <section id="sec-12" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            12. Campaign & Broadcast Data
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            For marketing and utility broadcasts initiated through our campaign module, we store:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li>Campaign name, scheduled dispatch time, selected pre-approved WhatsApp template ID, and dynamic parameter mappings.</li>
                                            <li>Target segment definitions and recipient phone numbers validated against opt-in records.</li>
                                            <li>Aggregated batch execution statistics: total dispatched, successfully delivered, read, failed, and credits consumed.</li>
                                        </ul>
                                    </section>

                                    {/* Section 13 */}
                                    <section id="sec-13" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            13. Account & Workspace Data
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Connectly360 isolates each customer&rsquo;s organization into a distinct logical tenant. We record your workspace subscription tier (Starter, Growth, Business, Enterprise), credit balance ledger, transaction records, invoice history, and developer API keys.
                                        </p>
                                    </section>

                                    {/* Section 14 */}
                                    <section id="sec-14" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            14. Team Member & RBAC Data
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            When inviting team members, we store their email address, invitation expiration tokens, assigned roles (e.g., Administrator, Manager, Agent), and activity timestamps. Access permissions are enforced through granular Role-Based Access Controls (RBAC) to ensure agents only view data permitted by their workspace administrator.
                                        </p>
                                    </section>

                                    {/* Section 15 */}
                                    <section id="sec-15" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            15. Device & Technical Information
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            When accessing our web applications, our servers automatically log technical parameters for security, diagnostic, and rate-limiting purposes:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li>Internet Protocol (IP) address and approximate geographic location derived from IP.</li>
                                            <li>Browser type, version, language settings, and operating system.</li>
                                            <li>HTTP request methods, request URIs, referring URLs, response status codes, and latency metrics.</li>
                                        </ul>
                                    </section>

                                    {/* Section 16 */}
                                    <section id="sec-16" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            16. Cookies & Tracking Technologies
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We use cookies and storage technologies governed by our Cookie Consent &amp; Preferences Management System:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li><strong>Authentication (Strictly Necessary):</strong> Secure JSON Web Tokens stored in browser <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">localStorage (&apos;auth_token&apos;)</code> to authenticate session API requests.</li>
                                            <li><strong>Consent State (Strictly Necessary):</strong> <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">connectly360_cookie_consent</code> cookie storing your chosen privacy preferences.</li>
                                            <li><strong>Support Chat Continuity (Functional):</strong> First-party cookies (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs">connectly360_active_visitor_id</code>) that allow visitors to resume conversations with our support desk across pages, active only when Functional cookies are allowed.</li>
                                            <li><strong>Gated Analytics &amp; Marketing:</strong> Any performance or marketing analytics tools are strictly gated and will not initialize unless you explicitly grant consent.</li>
                                        </ul>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            You can adjust or withdraw your preferences at any time by clicking <strong>Cookie Settings</strong> in the website footer or viewing our dedicated <Link href="/cookie-policy" className="text-[#35877D] font-semibold underline">Cookie Policy</Link>.
                                        </p>
                                    </section>

                                    {/* Section 17 */}
                                    <section id="sec-17" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            17. Analytics & Diagnostics
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Analytics provided inside the Connectly360 dashboard (such as message volume per period, delivery rates, top customer intents, and response time metrics) are computed directly from your workspace&rsquo;s internal transactional records. We do not transmit your CRM analytics to third-party data brokers.
                                        </p>
                                    </section>

                                    {/* Section 18 */}
                                    <section id="sec-18" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            18. Third-Party Services & Subprocessors
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            To deliver platform features, Connectly360 integrates with vetted third-party service providers acting as sub-processors:
                                        </p>
                                        <div className="space-y-3 pt-2">
                                            {[
                                                {
                                                    name: "Meta Platforms, Inc. (WhatsApp Business Platform)",
                                                    purpose: "Official Cloud API provider used to transmit messages, verify phone numbers, manage templates, and receive webhook events for connected WABAs.",
                                                    data: "WABA ID, phone numbers, message payloads, message statuses, and template specifications.",
                                                },
                                                {
                                                    name: "Razorpay Software Pvt. Ltd.",
                                                    purpose: "PCI-DSS compliant payment gateway used to process subscription renewals, invoices, and credit topups.",
                                                    data: "Order ID, currency amount, customer billing contact details, payment confirmation IDs (card numbers are processed directly on Razorpay's encrypted checkout).",
                                                },
                                                {
                                                    name: "OpenAI, LLC (Optional AI Auto-Reply & Copilot)",
                                                    purpose: "When enabled by the customer in workspace settings, OpenAI generates context-aware draft replies and conversational responses based on customer-provided knowledge bases.",
                                                    data: "Inbound customer query text and relevant knowledge base snippets. Not used to train foundational models without customer authorization.",
                                                },
                                                {
                                                    name: "Google LLC (Google OAuth)",
                                                    purpose: "Provides single-sign-on (SSO) authentication for users choosing to register or sign in via Google.",
                                                    data: "Basic user profile (name, email address, avatar URL).",
                                                },
                                                {
                                                    name: "Pusher (Message Realtime Broadcasting)",
                                                    purpose: "Real-time WebSocket transport used to deliver instant notifications of incoming messages and inbox status changes.",
                                                    data: "Ephemeral workspace channel identifiers and message event payloads.",
                                                },
                                            ].map((sub, i) => (
                                                <div key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                                                    <p className="font-bold text-slate-900 text-sm">{sub.name}</p>
                                                    <p className="text-xs text-slate-700"><strong>Purpose:</strong> {sub.purpose}</p>
                                                    <p className="text-xs text-slate-500"><strong>Data Handled:</strong> {sub.data}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Section 19 */}
                                    <section id="sec-19" className="space-y-3 scroll-mt-28">
                                        <div className="flex items-center gap-2">
                                            <span className="p-1.5 rounded-lg bg-[#35877D]/10 text-[#35877D]">
                                                <Smartphone size={18} />
                                            </span>
                                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                                19. Meta / WhatsApp Data Use & Non-Sale Disclosure
                                            </h2>
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
                                            In strict accordance with Meta Platform Terms, the WhatsApp Business Terms of Service, and developer policies:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                                            <li>Connectly360 accesses WhatsApp assets and data solely through official, documented Meta Graph API and Cloud API endpoints authorized by the customer during Embedded Signup.</li>
                                            <li>Data accessed via Meta APIs is used exclusively to deliver legitimate functionality requested by the customer (such as displaying conversations, sending messages, routing chats, and monitoring delivery status).</li>
                                            <li><strong>Connectly360 NEVER sells, rents, licenses, or exchanges WhatsApp data, customer contact lists, or message content to third-party data brokers, marketers, or advertisers.</strong></li>
                                            <li>We never use customer WhatsApp data to target advertising to your customers across external platforms.</li>
                                            <li>We do not retain Meta user data longer than necessary to fulfill the operational requirements of your Connectly360 workspace.</li>
                                        </ul>
                                    </section>

                                    {/* Section 20 */}
                                    <section id="sec-20" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            20. Data Sharing & Disclosures
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We do not share your data except in the following limited circumstances:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li><strong>With Sub-processors:</strong> To the trusted infrastructure, payment, and AI partners listed in Section 18, strictly bound by data protection obligations.</li>
                                            <li><strong>For Legal & Regulatory Compliance:</strong> If required by valid court order, subpoena, or applicable statutory law, or to protect the vital rights, safety, and property of our users or the public.</li>
                                            <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, restructuring, or acquisition, subject to the acquiring party honoring this Privacy Policy.</li>
                                        </ul>
                                    </section>

                                    {/* Section 21 */}
                                    <section id="sec-21" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            21. Data Processing on Behalf of Business Customers
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Depending on applicable privacy frameworks (including GDPR, UK GDPR, and the India Digital Personal Data Protection Act):
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                                            <li><strong>Connectly360 as Data Processor / Service Provider:</strong> In relation to your customer contacts, imported phone numbers, chat logs, and campaign recipients, our customer (the business) is the <strong>Data Controller</strong>, and Connectly360 acts as a <strong>Data Processor</strong> processing such data on the customer&rsquo;s documented instructions.</li>
                                            <li><strong>Connectly360 as Data Controller:</strong> Connectly360 acts as an independent Controller regarding the account information, billing records, authentication credentials, and support interactions directly entered by our registered business users.</li>
                                            <li><strong>Customer Responsibility:</strong> Business customers are solely responsible for ensuring they possess a lawful basis (including explicit opt-in consent where required by law) before importing contacts or dispatching WhatsApp messages through Connectly360.</li>
                                        </ul>
                                    </section>

                                    {/* Section 22 */}
                                    <section id="sec-22" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            22. Data Retention Schedule
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We retain personal data only for as long as necessary to provide the services, comply with applicable legal obligations, resolve disputes, enforce agreements, and maintain security:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li><strong>Active Workspaces:</strong> Data is retained for the active duration of your subscription and workspace tenancy.</li>
                                            <li><strong>Disconnection of WhatsApp:</strong> When you disconnect a WhatsApp account, access tokens are immediately cleared and status updated to disconnected. Historical chat logs are preserved in your CRM until explicitly deleted.</li>
                                            <li><strong>Canceled Accounts:</strong> Workspace data is scheduled for permanent purge after 30 days following formal account termination, unless earlier deletion is requested.</li>
                                            <li><strong>Financial & Audit Records:</strong> Payment transactions, invoices, and billing ledgers are retained for up to 7 years in compliance with statutory financial and taxation laws.</li>
                                        </ul>
                                    </section>

                                    {/* Section 23 */}
                                    <section id="sec-23" className="space-y-3 scroll-mt-28">
                                        <div className="flex items-center gap-2">
                                            <span className="p-1.5 rounded-lg bg-[#35877D]/10 text-[#35877D]">
                                                <RefreshCw size={18} />
                                            </span>
                                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                                23. Data Deletion & Removal
                                            </h2>
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We respect your right to have personal data deleted. Connectly360 provides a transparent deletion framework:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                                            <li><strong>How to Submit a Deletion Request:</strong> You or your authorized representative can submit a deletion request via our public <Link href="/data-deletion" className="text-[#35877D] font-bold underline">Data Deletion Instructions Page</Link> or by emailing our privacy desk at <a href="mailto:support@connectly360.com" className="text-[#35877D] font-bold underline">support@connectly360.com</a> with the subject line <em>&ldquo;Data Deletion Request&rdquo;</em>.</li>
                                            <li><strong>Verification:</strong> To protect accounts against unauthorized deletion, we verify workspace ownership via the registered primary administrator email address.</li>
                                            <li><strong>Processing Timeline:</strong> Deletion requests are acknowledged within 48 hours and completed within 30 days.</li>
                                            <li><strong>What Is Purged:</strong> Workspace CRM contacts, incoming/outgoing message records, media attachment files, custom templates, campaign history, and API keys are completely deleted from active databases.</li>
                                        </ul>
                                    </section>

                                    {/* Section 24 */}
                                    <section id="sec-24" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            24. Customer Data Export
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Workspace administrators may export their contact databases, lead pipelines, and campaign recipient reports in standard CSV format directly from the Connectly360 dashboard prior to account closure or disconnection.
                                        </p>
                                    </section>

                                    {/* Section 25 */}
                                    <section id="sec-25" className="space-y-3 scroll-mt-28">
                                        <div className="flex items-center gap-2">
                                            <span className="p-1.5 rounded-lg bg-[#35877D]/10 text-[#35877D]">
                                                <Lock size={18} />
                                            </span>
                                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                                25. Security & Encryption Practices
                                            </h2>
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Connectly360 implements robust technical and organizational security measures designed to protect customer data:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                                            <li><strong>Encryption in Transit:</strong> All HTTP traffic to Connectly360 is enforced over HTTPS utilizing TLS 1.2 and TLS 1.3 encryption with modern cipher suites.</li>
                                            <li><strong>Sensitive Secret Encryption:</strong> Meta Access Tokens, Meta App Secrets, and Webhook Secrets are encrypted at rest in our database using industry-standard AES-256-CBC cipher encryption.</li>
                                            <li><strong>Tenant Isolation:</strong> Database queries and application controllers strictly scope record retrieval to the active <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">tenant_id</code>, preventing cross-tenant data leaks.</li>
                                            <li><strong>Webhook Signature Verification:</strong> Inbound Meta webhooks are cryptographically authenticated using SHA-256 HMAC signatures (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs">X-Hub-Signature-256</code>) against your app secret before processing payloads.</li>
                                            <li><strong>Access Controls & Password Hashing:</strong> User passwords are encrypted with bcrypt hashing. Administrative actions are restricted through granular RBAC permissions.</li>
                                            <li><strong>Rate Limiting & Threat Monitoring:</strong> High-volume API routes are throttled to mitigate brute-force attempts and denial-of-service abuse.</li>
                                        </ul>
                                    </section>

                                    {/* Section 26 */}
                                    <section id="sec-26" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            26. International Data Transfers
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Connectly360 utilizes cloud hosting and sub-processors with infrastructure distributed internationally (including India, the European Union, and the United States). By utilizing the services, you acknowledge that your data may be transferred to and processed in countries outside your residence, which may maintain different data protection standards. When transferring data internationally, we implement standard contractual clauses and technical safeguards.
                                        </p>
                                    </section>

                                    {/* Section 27 */}
                                    <section id="sec-27" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            27. Children&rsquo;s Privacy
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Connectly360 is exclusively a business-to-business (B2B) software suite intended for commercial use by individuals at least 18 years of age. We do not knowingly collect or solicit personal data from children under the age of 16. If we become aware that a minor has submitted personal data, we will take immediate steps to delete the information.
                                        </p>
                                    </section>

                                    {/* Section 28 */}
                                    <section id="sec-28" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            28. Marketing Communications
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We may send essential transactional notices (such as password resets, billing receipts, or system downtime warnings) to your registered email address. We do not send unsolicited marketing emails. If you opt in to receive product update newsletters, you can unsubscribe at any time via the link provided in the email footer.
                                        </p>
                                    </section>

                                    {/* Section 29 */}
                                    <section id="sec-29" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            29. Your Privacy Rights
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Subject to applicable law in your jurisdiction, you have the right to:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                                            <li><strong>Access:</strong> Request confirmation and copies of personal data held about you.</li>
                                            <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete personal records.</li>
                                            <li><strong>Erasure:</strong> Request deletion of your personal data under conditions set out in applicable law.</li>
                                            <li><strong>Restriction & Objection:</strong> Object to or request restriction of data processing where applicable.</li>
                                            <li><strong>Data Portability:</strong> Obtain your data in a structured, commonly used, and machine-readable format.</li>
                                        </ul>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            To exercise any of these rights, please contact our privacy desk at <a href="mailto:support@connectly360.com" className="text-[#35877D] font-bold underline">support@connectly360.com</a>.
                                        </p>
                                    </section>

                                    {/* Section 30 */}
                                    <section id="sec-30" className="space-y-3 scroll-mt-28">
                                        <div className="flex items-center gap-2">
                                            <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
                                                <AlertCircle size={18} />
                                            </span>
                                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                                30. Customer Compliance Responsibilities
                                            </h2>
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            Businesses using Connectly360 must comply with all relevant messaging regulations and Meta Platform policies:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                                            <li><strong>WhatsApp Business Policy:</strong> Customers must comply fully with Meta&rsquo;s <a href="https://www.whatsapp.com/legal/business-messaging-policy" target="_blank" rel="noopener noreferrer" className="text-[#35877D] underline inline-flex items-center gap-1 font-semibold">WhatsApp Business Messaging Policy <ExternalLink size={12} /></a> and WhatsApp Commerce Policy.</li>
                                            <li><strong>Mandatory Opt-In:</strong> You must obtain explicit opt-in consent from recipients before sending outbound marketing or notification messages on WhatsApp.</li>
                                            <li><strong>Honoring Opt-Outs:</strong> You must promptly honor opt-out requests (e.g., STOP, CANCEL, UNSUBSCRIBE) and mark contacts as opted-out in your Connectly360 CRM.</li>
                                            <li><strong>Approved Templates:</strong> Business-initiated messages sent outside the 24-hour customer service window must use approved WhatsApp Message Templates.</li>
                                            <li><strong>Prohibited Content:</strong> You may not transmit spam, fraudulent schemes, deceptive offers, harassment, hate speech, or content promoting prohibited industries.</li>
                                        </ul>
                                    </section>

                                    {/* Section 31 */}
                                    <section id="sec-31" className="space-y-3 scroll-mt-28">
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            31. Changes to This Privacy Policy
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            We may update this Privacy Policy from time to time to reflect changes in our technical features, integrations, legal requirements, or Meta Platform guidelines. When we make changes, we will update the &ldquo;Last Updated&rdquo; date at the top of this document. Material changes will be communicated via notification in the dashboard or via your registered administrative email.
                                        </p>
                                    </section>

                                    {/* Section 32 */}
                                    <section id="sec-32" className="space-y-3 scroll-mt-28">
                                        <div className="flex items-center gap-2">
                                            <span className="p-1.5 rounded-lg bg-[#35877D]/10 text-[#35877D]">
                                                <Mail size={18} />
                                            </span>
                                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                                32. Contact Information
                                            </h2>
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                            If you have questions, feedback, or requests regarding this Privacy Policy or our data practices, please reach out to our privacy and compliance desk:
                                        </p>
                                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-3 text-sm text-slate-800">
                                            <p className="font-extrabold text-slate-900 text-base">Connectly360 Privacy & Compliance Desk</p>
                                            <div className="space-y-2 text-slate-700">
                                                <div className="flex items-center gap-2.5">
                                                    <Mail size={15} className="text-[#35877D]" />
                                                    <span>Email: <a href="mailto:support@connectly360.com" className="text-[#35877D] font-bold underline">support@connectly360.com</a></span>
                                                </div>
                                                <div className="flex items-center gap-2.5">
                                                    <Phone size={15} className="text-[#35877D]" />
                                                    <span>Phone: <span className="font-semibold">+91 9586557162</span></span>
                                                </div>
                                                <div className="flex items-center gap-2.5">
                                                    <MapPin size={15} className="text-[#35877D]" />
                                                    <span>Location: Ahmedabad, Gujarat, India</span>
                                                </div>
                                            </div>
                                            <div className="pt-2 flex flex-wrap gap-3">
                                                <Link
                                                    href="/data-deletion"
                                                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-[#35877D] text-white hover:bg-[#2c7168] transition-colors"
                                                >
                                                    Submit Data Deletion Request
                                                </Link>
                                                <Link
                                                    href="/contact"
                                                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 transition-colors"
                                                >
                                                    Contact Customer Support
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
