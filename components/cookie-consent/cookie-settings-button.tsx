"use client";

import React from "react";
import { Cookie } from "lucide-react";
import { useCookieConsent } from "./cookie-consent-context";

export function CookieSettingsButton() {
    const { isHydrated, isBannerOpen, openPreferences } = useCookieConsent();

    // Hide while the initial banner is being shown
    if (!isHydrated || isBannerOpen) {
        return null;
    }

    return (
        <button
            type="button"
            onClick={openPreferences}
            aria-label="Manage cookie settings and privacy preferences"
            title="Cookie Settings"
            className="fixed bottom-4 left-4 z-40 group flex items-center gap-2 bg-white/90 hover:bg-white text-slate-700 hover:text-[#35877D] border border-slate-200/90 shadow-md hover:shadow-lg rounded-full px-3 py-2 text-xs font-semibold backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#35877D] focus:ring-offset-2"
        >
            <div className="w-5 h-5 rounded-full bg-[#35877D]/10 text-[#35877D] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Cookie size={13} />
            </div>
            <span className="hidden sm:inline-block pr-1 font-medium">Cookie Settings</span>
        </button>
    );
}
