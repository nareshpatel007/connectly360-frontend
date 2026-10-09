"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Cookie,
    ShieldCheck,
    CheckCircle2,
    SlidersHorizontal,
    Info,
    ExternalLink,
    Lock,
} from "lucide-react";
import { useCookieConsent } from "./cookie-consent-context";

export function CookiePreferencesModal() {
    const {
        consent,
        isPreferencesOpen,
        closePreferences,
        savePreferences,
        acceptAll,
        rejectAll,
    } = useCookieConsent();

    // Local toggle state while modal is open
    const [functional, setFunctional] = useState(false);
    const [analytics, setAnalytics] = useState(false);
    const [marketing, setMarketing] = useState(false);

    // Sync state whenever modal opens or consent changes
    useEffect(() => {
        if (isPreferencesOpen) {
            setFunctional(!!consent?.functional);
            setAnalytics(!!consent?.analytics);
            setMarketing(!!consent?.marketing);
        }
    }, [isPreferencesOpen, consent]);

    const handleSave = () => {
        savePreferences({
            functional,
            analytics,
            marketing,
        });
    };

    return (
        <Dialog open={isPreferencesOpen} onOpenChange={(open) => !open && closePreferences()}>
            <DialogContent className="sm:max-w-2xl p-0 overflow-hidden bg-white rounded-2xl sm:rounded-3xl border-slate-200 shadow-2xl max-h-[90vh] flex flex-col">
                <DialogHeader className="p-5 sm:p-6 pb-4 bg-slate-50/80 border-b border-slate-100 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#2F8F83]/10 text-[#2F8F83] flex items-center justify-center font-bold">
                            <Cookie size={20} />
                        </div>
                        <div>
                            <DialogTitle className="text-base sm:text-lg font-bold text-slate-900">
                                Cookie Preferences
                            </DialogTitle>
                            <DialogDescription className="text-xs text-slate-500 mt-0.5">
                                Manage how Connectly360 uses cookies and storage technologies.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs">
                    <p className="text-slate-600 leading-relaxed">
                        You can choose which types of cookies you allow below. Strictly necessary cookies are always enabled because they are required for core website security, authentication, and platform features. To learn more, read our{" "}
                        <Link
                            href="/cookie-policy"
                            target="_blank"
                            className="font-bold text-[#2F8F83] hover:underline"
                        >
                            Cookie Policy
                        </Link>
                        .
                    </p>

                    <div className="space-y-3 pt-1">
                        {/* 1. Strictly Necessary */}
                        <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/90 space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Lock size={15} className="text-slate-600" />
                                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                                        Strictly Necessary
                                    </h4>
                                </div>
                                <span className="text-[10px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                    <CheckCircle2 size={12} className="text-emerald-600" />
                                    Always Active
                                </span>
                            </div>
                            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                                These cookies and storage keys are required for the website to function properly and cannot be disabled. They include session tokens, CSRF protection, and your cookie consent state.
                            </p>
                            <div className="text-[10px] text-slate-400 font-mono pt-0.5">
                                Examples: auth_token, XSRF-TOKEN, connectly360_cookie_consent
                            </div>
                        </div>

                        {/* 2. Functional / Preferences */}
                        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 transition-colors space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                                        Functional &amp; Preferences
                                    </h4>
                                    <span className="text-[10px] text-slate-400 font-medium">
                                        Support continuity &amp; user preferences
                                    </span>
                                </div>
                                <Switch
                                    checked={functional}
                                    onCheckedChange={setFunctional}
                                    aria-label="Toggle functional cookies"
                                    className="data-[state=checked]:bg-[#2F8F83]"
                                />
                            </div>
                            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                                These cookies remember your preferences and provide a seamless on-site experience, such as preserving your live chat thread when navigating between pages.
                            </p>
                            <div className="text-[10px] text-slate-400 font-mono pt-0.5">
                                Examples: connectly360_active_visitor_id, connectly360_visitor_ids
                            </div>
                        </div>

                        {/* 3. Analytics */}
                        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 transition-colors space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                                        Analytics &amp; Performance
                                    </h4>
                                    <span className="text-[10px] text-slate-400 font-medium">
                                        Usage patterns &amp; performance metrics
                                    </span>
                                </div>
                                <Switch
                                    checked={analytics}
                                    onCheckedChange={setAnalytics}
                                    aria-label="Toggle analytics cookies"
                                    className="data-[state=checked]:bg-[#2F8F83]"
                                />
                            </div>
                            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                                These cookies help us understand how visitors interact with our pages, aggregate visitor counts, detect broken links, and optimize website responsiveness.
                            </p>
                            <div className="text-[10px] text-slate-400 font-mono pt-0.5">
                                Examples: _ga, _ga_*, _clck (Microsoft Clarity)
                            </div>
                        </div>

                        {/* 4. Marketing */}
                        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 transition-colors space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                                        Marketing &amp; Advertising
                                    </h4>
                                    <span className="text-[10px] text-slate-400 font-medium">
                                        Campaign measurement &amp; conversion insights
                                    </span>
                                </div>
                                <Switch
                                    checked={marketing}
                                    onCheckedChange={setMarketing}
                                    aria-label="Toggle marketing cookies"
                                    className="data-[state=checked]:bg-[#2F8F83]"
                                />
                            </div>
                            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                                These cookies may be used to measure advertising effectiveness, track marketing attribution, and display relevant content tailored to your business interests.
                            </p>
                            <div className="text-[10px] text-slate-400 font-mono pt-0.5">
                                Examples: _fbp (Meta Pixel), _gcl_au (Google Ads)
                            </div>
                        </div>
                    </div>
                </div>

                <DialogFooter className="p-4 sm:p-6 bg-slate-50/80 border-t border-slate-100 shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2">
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={rejectAll}
                            className="text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 h-9 px-3"
                        >
                            Reject All
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={acceptAll}
                            className="text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 h-9 px-3"
                        >
                            Accept All
                        </Button>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={closePreferences}
                            className="text-xs font-semibold text-slate-700 bg-white border-slate-200 h-9 px-4 rounded-lg shadow-2xs"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="button"
                            size="sm"
                            onClick={handleSave}
                            className="bg-[#2F8F83] hover:bg-[#267A70] text-white text-xs font-semibold h-9 px-5 rounded-lg shadow-xs"
                        >
                            Save Preferences
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
