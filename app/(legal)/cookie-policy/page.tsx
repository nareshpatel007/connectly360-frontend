"use client";

import React from "react";
import Link from "next/link";
import { LandingHeader } from "@/components/landing-header";
import { LandingFooter } from "@/components/landing-footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Cookie,
    ShieldCheck,
    CheckCircle2,
    Lock,
    ExternalLink,
    Mail,
    SlidersHorizontal,
    RefreshCw,
    HelpCircle
} from "lucide-react";
import { useCookieConsent } from "@/components/cookie-consent/cookie-consent-context";
import { COOKIE_INVENTORY } from "@/lib/cookie-consent";

export default function CookiePolicyPage() {
    const { openPreferences, consent } = useCookieConsent();

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden selection:bg-[#2F8F83] selection:text-white">
            <LandingHeader />

            <main className="pt-36 sm:pt-40">
                {/* Hero Header */}
                <section className="relative pb-12 sm:pb-16 overflow-hidden border-b border-slate-200/80 bg-white">
                    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F8F83]/10 text-[#2F8F83] text-xs font-bold border border-[#2F8F83]/25">
                            <Cookie size={14} className="text-[#2F8F83]" />
                            <span>Transparency &amp; Tracking Disclosure</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Cookie Policy
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            Effective Date: October 8, 2026 &bull; Version: 1.0
                        </p>
                        <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            This Cookie Policy explains how Connectly360 utilizes cookies, local storage, and related technologies, your right to control them, and how you can update your consent at any time.
                        </p>

                        {/* Interactive Manage Preferences Button */}
                        <div className="pt-2 flex justify-center">
                            <Button
                                type="button"
                                onClick={openPreferences}
                                className="bg-[#2F8F83] hover:bg-[#267A70] text-white text-xs sm:text-sm font-bold h-10 px-6 rounded-xl shadow-md hover:shadow-lg transition-all gap-2"
                            >
                                <SlidersHorizontal size={15} />
                                Manage Cookie Preferences
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12 sm:py-16">
                    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-5xl mx-auto">
                        <Card className="p-6 sm:p-10 md:p-12 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-10">

                            {/* Current User Consent Status Banner */}
                            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-teal-950 font-bold text-sm">
                                        <ShieldCheck size={16} className="text-[#2F8F83]" />
                                        <span>Your Active Cookie Status</span>
                                    </div>
                                    <p className="text-xs text-teal-900/80">
                                        {consent ? (
                                            <>
                                                Strictly Necessary: <strong>Active</strong> &bull; Functional:{" "}
                                                <strong>{consent.functional ? "Granted" : "Blocked"}</strong> &bull; Analytics:{" "}
                                                <strong>{consent.analytics ? "Granted" : "Blocked"}</strong> &bull; Marketing:{" "}
                                                <strong>{consent.marketing ? "Granted" : "Blocked"}</strong>
                                            </>
                                        ) : (
                                            "You have not saved custom cookie preferences yet (defaulting to Strictly Necessary only)."
                                        )}
                                    </p>
                                </div>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={openPreferences}
                                    className="h-8 text-xs font-semibold bg-white border-teal-200 text-teal-900 hover:bg-teal-50 shrink-0"
                                >
                                    Change Preferences
                                </Button>
                            </div>

                            {/* Section 1: What Are Cookies */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    1. What Are Cookies and Storage Technologies?
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Cookies are compact data files placed on your computer or mobile device when you visit websites. They are widely used by service providers to ensure websites operate efficiently, secure user sessions, and provide usage statistics. In addition to HTTP cookies, modern web platforms may use browser <strong>Local Storage</strong> or <strong>Session Storage</strong> to retain necessary authentication tokens without sending them on every HTTP asset request.
                                </p>
                            </section>

                            {/* Section 2: Why We Use Cookies */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    2. Why Does Connectly360 Use Cookies?
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    We use first-party and third-party cookies for several critical purposes:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                                    <li><strong>Essential Operation:</strong> To authenticate team members, secure platform APIs, maintain CSRF defense, and store your cookie consent preferences.</li>
                                    <li><strong>User Experience (Functional):</strong> To maintain continuity of live support sessions across page navigation.</li>
                                    <li><strong>Performance (Analytics):</strong> To measure page load times, detect errors, and understand how visitors discover Connectly360.</li>
                                    <li><strong>Marketing Attribution:</strong> To measure the effectiveness of digital campaigns and guide users to relevant WhatsApp automation solutions.</li>
                                </ul>
                            </section>

                            {/* Section 3: Categories of Cookies */}
                            <section className="space-y-4">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    3. Cookie Categories &amp; Consent Controls
                                </h2>

                                <div className="space-y-4">
                                    {/* Necessary */}
                                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <p className="font-bold text-slate-900 text-sm">A. Strictly Necessary (Always Active)</p>
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                                                Required
                                            </span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                                            These cookies are required for core website features, CSRF defense, session management, and storing your consent preferences. They cannot be turned off.
                                        </p>
                                    </div>

                                    {/* Functional */}
                                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <p className="font-bold text-slate-900 text-sm">B. Functional &amp; Preferences</p>
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-800">
                                                Optional &bull; Default OFF
                                            </span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                                            These cookies remember settings and maintain your support chat visitor history across pages. If disabled, support chats will run in memory only.
                                        </p>
                                    </div>

                                    {/* Analytics */}
                                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <p className="font-bold text-slate-900 text-sm">C. Analytics &amp; Performance</p>
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-800">
                                                Optional &bull; Default OFF
                                            </span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                                            Help us understand visitor counts and traffic sources via Google Analytics 4 or Microsoft Clarity. No scripts or tracking pixels load unless you explicitly consent.
                                        </p>
                                    </div>

                                    {/* Marketing */}
                                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <p className="font-bold text-slate-900 text-sm">D. Marketing &amp; Advertising</p>
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-800">
                                                Optional &bull; Default OFF
                                            </span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                                            Measure marketing effectiveness and campaign attribution via Meta Pixel or Google Ads. These scripts are blocked until you grant marketing consent.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 4: Inventory Table */}
                            <section className="space-y-4">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    4. Detailed Cookie Inventory
                                </h2>

                                <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                                    <table className="w-full text-left text-xs">
                                        <thead className="bg-slate-50 text-slate-800 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                                            <tr>
                                                <th className="p-3.5">Storage Key / Cookie</th>
                                                <th className="p-3.5">Category</th>
                                                <th className="p-3.5">Provider</th>
                                                <th className="p-3.5">Duration</th>
                                                <th className="p-3.5">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                                            {COOKIE_INVENTORY.map((item) => (
                                                <tr key={item.name} className="hover:bg-slate-50/50">
                                                    <td className="p-3.5 font-mono font-medium text-slate-900">{item.name}</td>
                                                    <td className="p-3.5">
                                                        <span
                                                            className={`px-2 py-0.5 rounded font-semibold text-[10px] ${
                                                                item.category === "necessary"
                                                                    ? "bg-emerald-100 text-emerald-800"
                                                                    : item.category === "functional"
                                                                    ? "bg-blue-100 text-blue-800"
                                                                    : item.category === "analytics"
                                                                    ? "bg-amber-100 text-amber-800"
                                                                    : "bg-purple-100 text-purple-800"
                                                            }`}
                                                        >
                                                            {item.category.toUpperCase()}
                                                        </span>
                                                    </td>
                                                    <td className="p-3.5">{item.provider}</td>
                                                    <td className="p-3.5">{item.duration}</td>
                                                    <td className="p-3.5 text-slate-600">{item.purpose}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Section 5: Withdrawing Consent */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    5. How to Change or Withdraw Your Consent
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    You can change your preferences or withdraw consent at any time:
                                </p>
                                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                                    <li>Click the <strong>Cookie Settings</strong> button located in the footer of any page or the floating cookie icon at the bottom-left corner.</li>
                                    <li>Adjust the category toggles to your desired choices.</li>
                                    <li>Click <strong>Save Preferences</strong>. When you disable a category, existing non-essential cookies for that category are immediately removed from your browser.</li>
                                </ol>
                            </section>

                            {/* Section 6: Browser Controls */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    6. Browser-Level Controls
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Most browsers allow you to manage cookies directly in settings:
                                </p>
                                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 font-medium">
                                    <li><strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Third-party cookies</li>
                                    <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection</li>
                                    <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Prevent cross-site tracking</li>
                                    <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions</li>
                                </ul>
                            </section>

                            {/* Section 7: Contact */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    7. Contact Our Privacy Desk
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    If you have questions regarding this Cookie Policy or our privacy practices:
                                </p>
                                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-700 space-y-1 font-medium">
                                    <p><strong>Email:</strong> <a href="mailto:support@connectly360.com" className="text-[#2F8F83] underline">support@connectly360.com</a></p>
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
