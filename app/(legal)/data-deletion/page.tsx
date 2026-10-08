"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LandingHeader } from "@/components/landing-header";
import { LandingFooter } from "@/components/landing-footer";
import { Card } from "@/components/ui/card";
import {
    Trash2,
    Shield,
    CheckCircle2,
    Mail,
    Phone,
    MapPin,
    AlertCircle,
    Smartphone,
    ExternalLink,
    HelpCircle,
    ArrowRight
} from "lucide-react";

export default function DataDeletionPage() {
    const [submitted, setSubmitted] = useState(false);
    const [workspaceEmail, setWorkspaceEmail] = useState("");
    const [wabaId, setWabaId] = useState("");
    const [requestDetails, setRequestDetails] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Since this is static/public, open direct mailto prefilled or show confirmation
        const subject = encodeURIComponent(`Data Deletion Request - Workspace: ${workspaceEmail}`);
        const body = encodeURIComponent(
            `Workspace Email: ${workspaceEmail}\nWABA ID / Phone (Optional): ${wabaId}\n\nDeletion Scope Details:\n${requestDetails}\n\nPlease confirm processing of my data deletion request under Connectly360 Privacy Policy.`
        );
        window.location.href = `mailto:support@connectly360.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden selection:bg-[#35877D] selection:text-white">
            <LandingHeader />

            <main className="pt-36 sm:pt-40">
                {/* Hero Header */}
                <section className="relative pb-12 sm:pb-16 overflow-hidden border-b border-slate-200/80 bg-white">
                    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200/60">
                            <Trash2 size={14} className="text-rose-600" />
                            <span>Meta Platform & GDPR User Data Deletion</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            User Data Deletion Instructions
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            Connectly360 respects your privacy and provides straightforward mechanisms to delete your workspace data, remove customer contact records, and revoke WhatsApp Business access.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12 sm:py-16">
                    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-5xl mx-auto space-y-10">
                        
                        {/* Meta Platform Compliance Card */}
                        <Card className="p-6 sm:p-10 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-2xl bg-[#35877D]/10 text-[#35877D] shrink-0">
                                    <Shield size={24} />
                                </div>
                                <div className="space-y-1">
                                    <h2 className="text-xl font-extrabold text-slate-900">
                                        Meta Platform & WhatsApp App Review Compliance
                                    </h2>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        In compliance with Meta Platform Terms, this page outlines step-by-step instructions for how Facebook / WhatsApp users and business workspace administrators can request the deletion of their personal data processed by Connectly360.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        {/* Three Deletion Pathways */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Pathway 1 */}
                            <Card className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-4">
                                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm">
                                    1
                                </div>
                                <h3 className="text-lg font-extrabold text-slate-900">
                                    Disconnecting Your WhatsApp Business Account (WABA)
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    If you wish to stop Connectly360 from managing your WhatsApp phone number while retaining your CRM dashboard history:
                                </p>
                                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                                    <li>Log in to your Connectly360 dashboard.</li>
                                    <li>Navigate to <strong>Settings &gt; WhatsApp Integration</strong>.</li>
                                    <li>Click <strong>&ldquo;Disconnect WhatsApp Account&rdquo;</strong>.</li>
                                    <li>Our backend immediately invalidates and deletes your stored Meta Access Token (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">access_token = null</code>), halts all webhook listeners, and sets the connection status to <strong>disconnected</strong>.</li>
                                    <li>Alternatively, navigate to your <a href="https://business.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#35877D] underline inline-flex items-center gap-0.5">Meta Business Manager <ExternalLink size={10} /></a> under <strong>Business Settings &gt; Integrations &gt; Connected Apps</strong> and revoke permissions for Connectly360.</li>
                                </ol>
                            </Card>

                            {/* Pathway 2 */}
                            <Card className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-4">
                                <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-sm">
                                    2
                                </div>
                                <h3 className="text-lg font-extrabold text-slate-900">
                                    Full Workspace Account & Customer CRM Data Purge
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    If you are a Workspace Administrator and wish to permanently erase your entire workspace, contact database, and conversation logs:
                                </p>
                                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                                    <li>Export any contacts or reports you wish to retain via the <strong>Export CSV</strong> button in your dashboard.</li>
                                    <li>Submit a deletion request using the form below or email <a href="mailto:support@connectly360.com" className="text-[#35877D] underline">support@connectly360.com</a> from your registered administrative email address.</li>
                                    <li>Our team verifies workspace ownership and confirms receipt within <strong>48 business hours</strong>.</li>
                                    <li>Within <strong>30 days</strong>, all database records, chat logs, media files, contact tags, and API keys are permanently deleted.</li>
                                </ol>
                            </Card>
                        </div>

                        {/* Consumer Pathway */}
                        <Card className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-amber-50 text-amber-700 shrink-0">
                                    <Smartphone size={20} />
                                </div>
                                <h3 className="text-lg font-extrabold text-slate-900">
                                    End-Consumer (WhatsApp Recipient) Deletion Requests
                                </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                If you are a consumer who interacted with a business over WhatsApp using Connectly360, the business you messaged is the <strong>Data Controller</strong> of your phone number and conversation records. You may:
                            </p>
                            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                                <li>Send a message saying <strong>&ldquo;STOP&rdquo;</strong> or <strong>&ldquo;UNSUBSCRIBE&rdquo;</strong> directly in the WhatsApp chat thread to immediately opt out of automated marketing workflows.</li>
                                <li>Contact the business directly and request removal from their contact directory.</li>
                                <li>Alternatively, email our privacy desk at <a href="mailto:support@connectly360.com" className="text-[#35877D] font-bold underline">support@connectly360.com</a> with your phone number and the name of the business you contacted; we will coordinate with the respective business workspace controller to purge your record.</li>
                            </ul>
                        </Card>

                        {/* Interactive Deletion Request Form */}
                        <Card className="p-6 sm:p-10 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-6">
                            <div className="space-y-1">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    Submit a Data Deletion Request
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-600">
                                    Fill out this form to generate an official data deletion ticket with our privacy team.
                                </p>
                            </div>

                            {submitted ? (
                                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                                    <CheckCircle2 size={36} className="text-emerald-600 mx-auto" />
                                    <h4 className="text-base font-bold text-emerald-950">
                                        Data Deletion Ticket Generated
                                    </h4>
                                    <p className="text-xs sm:text-sm text-emerald-900 max-w-md mx-auto leading-relaxed">
                                        Your email client should have opened with prefilled deletion details directed to <strong>support@connectly360.com</strong>. If your email client did not open automatically, please send your request directly to <a href="mailto:support@connectly360.com" className="font-bold underline">support@connectly360.com</a>.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-700">
                                                Workspace Administrator Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="admin@yourbusiness.com"
                                                value={workspaceEmail}
                                                onChange={(e) => setWorkspaceEmail(e.target.value)}
                                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#35877D] focus:ring-1 focus:ring-[#35877D]"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-700">
                                                WhatsApp WABA ID or Phone Number (Optional)
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g. 102938475610293 or +91..."
                                                value={wabaId}
                                                onChange={(e) => setWabaId(e.target.value)}
                                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#35877D] focus:ring-1 focus:ring-[#35877D]"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-700">
                                            Deletion Scope & Details *
                                        </label>
                                        <textarea
                                            required
                                            rows={3}
                                            placeholder="Please describe whether you want full workspace deletion, removal of specific contact phone numbers, or disconnection of your WhatsApp assets."
                                            value={requestDetails}
                                            onChange={(e) => setRequestDetails(e.target.value)}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#35877D] focus:ring-1 focus:ring-[#35877D]"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#35877D] hover:bg-[#2b6d65] text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
                                    >
                                        <span>Dispatch Deletion Request</span>
                                        <ArrowRight size={15} />
                                    </button>
                                </form>
                            )}
                        </Card>

                        {/* What Data Is Purged vs Retained */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 rounded-3xl bg-rose-50/60 border border-rose-200/60 space-y-3">
                                <h4 className="text-sm font-extrabold text-rose-950 flex items-center gap-2">
                                    <Trash2 size={16} className="text-rose-600" />
                                    Data Purged Upon Verified Request
                                </h4>
                                <ul className="list-disc pl-5 space-y-1 text-xs text-rose-900 leading-relaxed font-medium">
                                    <li>WhatsApp Access Tokens and Meta App Secrets</li>
                                    <li>Stored incoming and outgoing message bodies and transcripts</li>
                                    <li>Customer phone directory, CRM tags, and custom attributes</li>
                                    <li>Custom WhatsApp Message Template drafts</li>
                                    <li>Campaign histories and broadcast recipient lists</li>
                                    <li>Workspace team member logins and API keys</li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-3xl bg-slate-100/70 border border-slate-200 space-y-3">
                                <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                                    <AlertCircle size={16} className="text-slate-600" />
                                    Data Retained for Statutory Legal Reasons
                                </h4>
                                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700 leading-relaxed font-medium">
                                    <li>Financial invoices, payment transaction IDs, and tax ledgers (retained for statutory periods as required by taxation and accounting laws)</li>
                                    <li>Audit security logs recording the execution of the deletion request itself</li>
                                    <li>System backups (overwritten within our regular automated backup rotation cycle)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Official Support Desk Details */}
                        <div className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
                            <div className="space-y-1 text-center sm:text-left">
                                <h4 className="text-sm font-extrabold text-slate-900">
                                    Questions regarding data deletion or GDPR rights?
                                </h4>
                                <p className="text-xs text-slate-500 font-medium">
                                    Our privacy compliance desk responds within 48 business hours.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="mailto:support@connectly360.com"
                                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors inline-flex items-center gap-2"
                                >
                                    <Mail size={13} />
                                    <span>support@connectly360.com</span>
                                </a>
                                <Link
                                    href="/privacy"
                                    className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors inline-flex items-center gap-2"
                                >
                                    <span>Read Privacy Policy</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <LandingFooter />
        </div>
    );
}
