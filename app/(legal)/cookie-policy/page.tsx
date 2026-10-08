"use client";

import React from "react";
import Link from "next/link";
import { LandingHeader } from "@/components/landing-header";
import { LandingFooter } from "@/components/landing-footer";
import { Card } from "@/components/ui/card";
import { Cookie, ShieldCheck, CheckCircle2, Lock, ExternalLink, Mail } from "lucide-react";

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden selection:bg-[#35877D] selection:text-white">
            <LandingHeader />

            <main className="pt-36 sm:pt-40">
                {/* Hero Header */}
                <section className="relative pb-12 sm:pb-16 overflow-hidden border-b border-slate-200/80 bg-white">
                    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#35877D]/10 text-[#35877D] text-xs font-bold border border-[#35877D]/25">
                            <Cookie size={14} className="text-[#35877D]" />
                            <span>Transparency & Tracking Disclosure</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Cookie Policy
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            Effective Date: October 8, 2026 &bull; Last Updated: October 8, 2026
                        </p>
                        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                            This Cookie Policy explains how Connectly360 utilizes cookies and browser storage technologies to maintain secure authentication and provide customer support.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12 sm:py-16">
                    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-5xl mx-auto">
                        <Card className="p-6 sm:p-10 md:p-12 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-10">
                            
                            {/* Privacy-First Commitment */}
                            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                                    <ShieldCheck size={16} className="text-emerald-700" />
                                    <span>Privacy-First Tracking Commitment</span>
                                </div>
                                <p className="text-xs sm:text-sm text-emerald-950/80 leading-relaxed">
                                    Connectly360 respects your privacy. <strong>We do not deploy third-party advertising tracking pixels (such as Meta Pixel or cross-site ad networks) across our marketing pages.</strong> We only employ strictly necessary cookies and local storage items required for platform security, user authentication, and interactive on-site support.
                                </p>
                            </div>

                            {/* Section 1 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    1. What Are Cookies and Local Storage?
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Cookies are small text files placed on your device by web browsers when you visit a website. Local Storage is a browser feature that allows websites to store key-value data persistently within your browser. These technologies allow web applications to recognize your browser, retain authenticated sessions, and provide seamless user experience.
                                </p>
                            </section>

                            {/* Section 2 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    2. Technologies Used by Connectly360
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Connectly360 employs the following categories of storage technologies:
                                </p>

                                <div className="space-y-4 pt-2">
                                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <p className="font-bold text-slate-900 text-sm">A. Essential Authentication Tokens (Local Storage)</p>
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-800">Strictly Necessary</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                                            <strong>Key:</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-slate-300 font-mono text-xs">auth_token</code><br />
                                            <strong>Purpose:</strong> Stores an encrypted JSON Web Token (JWT) after you log in, authorizing your browser to make secure requests to our backend CRM and API servers without requiring credentials on each page change.
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <p className="font-bold text-slate-900 text-sm">B. Support Chat Continuity Cookies (First-Party Cookie)</p>
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-800">Functional</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                                            <strong>Names:</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-slate-300 font-mono text-xs">connectly360_active_visitor_id</code>, <code className="bg-white px-1.5 py-0.5 rounded border border-slate-300 font-mono text-xs">connectly360_visitors</code><br />
                                            <strong>Purpose:</strong> Preserves your interactive visitor conversation thread when using our on-site live support widget, so your support conversation remains intact if you navigate between pages.
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <p className="font-bold text-slate-900 text-sm">C. Security & CSRF Cookies (Session Cookies)</p>
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-800">Strictly Necessary</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                                            <strong>Purpose:</strong> Temporary cryptographic session tokens to protect against Cross-Site Request Forgery (CSRF) and ensure forms submitted on our platform originate from verified browser sessions.
                                        </p>
                                    </div>

                                    {/* Inventory Table */}
                                    <div className="overflow-x-auto pt-2">
                                        <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                                            <thead className="bg-slate-100 text-slate-800 font-bold uppercase tracking-wider text-[11px]">
                                                <tr>
                                                    <th className="p-3 border-b border-slate-200">Storage Name / Key</th>
                                                    <th className="p-3 border-b border-slate-200">Category</th>
                                                    <th className="p-3 border-b border-slate-200">Provider</th>
                                                    <th className="p-3 border-b border-slate-200">Duration</th>
                                                    <th className="p-3 border-b border-slate-200">Purpose</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                                                <tr>
                                                    <td className="p-3 font-mono font-medium text-slate-900">auth_token</td>
                                                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold text-[10px]">Strictly Necessary</span></td>
                                                    <td className="p-3">Connectly360 (First-party Local Storage)</td>
                                                    <td className="p-3">Session / 30 days or until logout</td>
                                                    <td className="p-3">Stores encrypted user authentication JWT for CRM access</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 font-mono font-medium text-slate-900">connectly360_active_visitor_id</td>
                                                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold text-[10px]">Functional</span></td>
                                                    <td className="p-3">Connectly360 (First-party Cookie)</td>
                                                    <td className="p-3">1 year</td>
                                                    <td className="p-3">Preserves ongoing live chat thread across page loads</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 font-mono font-medium text-slate-900">connectly360_visitors</td>
                                                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold text-[10px]">Functional</span></td>
                                                    <td className="p-3">Connectly360 (First-party Cookie)</td>
                                                    <td className="p-3">1 year</td>
                                                    <td className="p-3">Tracks visitor conversation history in support widget</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 font-mono font-medium text-slate-900">XSRF-TOKEN / csrf_token</td>
                                                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold text-[10px]">Security</span></td>
                                                    <td className="p-3">Connectly360 API (First-party Cookie)</td>
                                                    <td className="p-3">Session</td>
                                                    <td className="p-3">Prevents Cross-Site Request Forgery attacks</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Section 3 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    3. What We Do NOT Track
                                </h2>
                                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                                    <li>We do <strong>not</strong> use third-party advertising cookies or cross-site behavioral tracking cookies.</li>
                                    <li>We do <strong>not</strong> sell or exchange cookie identifiers with commercial marketing aggregators.</li>
                                    <li>We do <strong>not</strong> track your browsing habits across unrelated third-party websites.</li>
                                </ul>
                            </section>

                            {/* Section 4 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    4. How to Manage and Disable Cookies
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    You have the right to accept, block, or delete cookies at any time through your browser settings:
                                </p>
                                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 font-medium">
                                    <li><strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Third-party cookies.</li>
                                    <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data.</li>
                                    <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Block all cookies.</li>
                                    <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage and delete cookies.</li>
                                </ul>
                                <p className="text-xs sm:text-sm text-slate-500 pt-1">
                                    <em>Note: Disabling strictly necessary cookies or clearing local storage will prevent you from signing in to the Connectly360 dashboard and using authenticated CRM tools.</em>
                                </p>
                            </section>

                            {/* Section 5 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    5. Contact Our Privacy Desk
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    For inquiries concerning our cookie practices, please contact our support desk:
                                </p>
                                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-700 space-y-1 font-medium">
                                    <p><strong>Email:</strong> <a href="mailto:support@connectly360.com" className="text-[#35877D] underline">support@connectly360.com</a></p>
                                    <p><strong>Phone:</strong> +91 9586557162</p>
                                    <p><strong>Address:</strong> Ahmedabad, Gujarat, India</p>
                                </div>
                            </section>

                        </Card>
                    </div>
                </section>
            </main>

            <LandingFooter />
        </div>
    );
}
