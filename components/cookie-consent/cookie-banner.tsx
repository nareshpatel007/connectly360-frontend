"use client";

import React from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, SlidersHorizontal, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "./cookie-consent-context";

export function CookieBanner() {
    const { isHydrated, isBannerOpen, acceptAll, rejectAll, openPreferences } = useCookieConsent();

    if (!isHydrated || !isBannerOpen) {
        return null;
    }

    return (
        <aside
            role="region"
            aria-label="Cookie consent"
            aria-describedby="cookie-consent-description"
            className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-5 pointer-events-none animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
            <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 pointer-events-auto ring-1 ring-slate-900/5">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
                    {/* Left Icon & Text */}
                    <div className="flex items-start gap-3.5 max-w-4xl">
                        <div className="w-10 h-10 rounded-xl bg-[#35877D]/10 text-[#35877D] flex items-center justify-center shrink-0 mt-0.5">
                            <Cookie size={20} />
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                                    We value your privacy
                                </h3>
                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/60">
                                    <ShieldCheck size={12} className="text-[#35877D]" />
                                    GDPR & Privacy Ready
                                </span>
                            </div>

                            <p
                                id="cookie-consent-description"
                                className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal"
                            >
                                We use cookies and similar technologies to keep Connectly360 secure, improve your experience, understand how our website is used, and support our marketing activities. You can accept all cookies, reject non-essential cookies, or manage your preferences. Read our{" "}
                                <Link
                                    href="/cookie-policy"
                                    className="font-semibold text-[#35877D] hover:underline underline-offset-2"
                                >
                                    Cookie Policy
                                </Link>{" "}
                                and{" "}
                                <Link
                                    href="/privacy"
                                    className="font-semibold text-[#35877D] hover:underline underline-offset-2"
                                >
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons: Equal Prominence */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 w-full lg:w-auto shrink-0 pt-1 lg:pt-0">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={rejectAll}
                            className="h-10 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border-slate-200 rounded-xl px-4 order-2 sm:order-1 transition-colors"
                        >
                            Reject Non-Essential
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            onClick={openPreferences}
                            className="h-10 text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border-slate-200 rounded-xl px-4 gap-1.5 order-3 sm:order-2 transition-colors"
                        >
                            <SlidersHorizontal size={14} className="text-[#35877D]" />
                            Customize
                        </Button>

                        <Button
                            type="button"
                            onClick={acceptAll}
                            className="h-10 text-xs sm:text-sm font-bold text-white bg-[#35877D] hover:bg-[#2d736a] rounded-xl px-5 order-1 sm:order-3 shadow-sm hover:shadow transition-all"
                        >
                            Accept All
                        </Button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
