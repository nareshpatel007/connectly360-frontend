"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
    CookieConsentState,
    CookieCategories,
    getStoredConsent,
    storeConsent,
    updateGoogleConsentMode,
} from "@/lib/cookie-consent";

interface CookieConsentContextType {
    consent: CookieConsentState | null;
    isHydrated: boolean;
    isBannerOpen: boolean;
    isPreferencesOpen: boolean;
    acceptAll: () => void;
    rejectAll: () => void;
    savePreferences: (categories: Omit<CookieCategories, "necessary">) => void;
    openPreferences: () => void;
    closePreferences: () => void;
    openBanner: () => void;
    closeBanner: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
    const [consent, setConsent] = useState<CookieConsentState | null>(null);
    const [isHydrated, setIsHydrated] = useState(false);
    const [isBannerOpen, setIsBannerOpen] = useState(false);
    const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

    // Hydrate consent from cookie/storage on client mount
    useEffect(() => {
        const stored = getStoredConsent();
        setConsent(stored);
        setIsHydrated(true);

        if (!stored) {
            // First visit or version update -> show banner
            setIsBannerOpen(true);
        } else {
            // Already has valid consent -> sync with Google Consent Mode
            updateGoogleConsentMode(stored);
        }
    }, []);

    // Listen for custom consent update events
    useEffect(() => {
        const handleConsentUpdated = (e: Event) => {
            const customEvent = e as CustomEvent<CookieConsentState>;
            if (customEvent.detail) {
                setConsent(customEvent.detail);
            }
        };

        window.addEventListener("connectly360:consent-updated", handleConsentUpdated);
        return () => {
            window.removeEventListener("connectly360:consent-updated", handleConsentUpdated);
        };
    }, []);

    const acceptAll = useCallback(() => {
        const updated = storeConsent(
            {
                necessary: true,
                functional: true,
                analytics: true,
                marketing: true,
            },
            "banner_accept_all"
        );
        setConsent(updated);
        setIsBannerOpen(false);
        setIsPreferencesOpen(false);
    }, []);

    const rejectAll = useCallback(() => {
        const updated = storeConsent(
            {
                necessary: true,
                functional: false,
                analytics: false,
                marketing: false,
            },
            "banner_reject_all"
        );
        setConsent(updated);
        setIsBannerOpen(false);
        setIsPreferencesOpen(false);
    }, []);

    const savePreferences = useCallback(
        (categories: Omit<CookieCategories, "necessary">) => {
            const updated = storeConsent(
                {
                    necessary: true,
                    functional: !!categories.functional,
                    analytics: !!categories.analytics,
                    marketing: !!categories.marketing,
                },
                "preferences_modal"
            );
            setConsent(updated);
            setIsBannerOpen(false);
            setIsPreferencesOpen(false);
        },
        []
    );

    const openPreferences = useCallback(() => {
        setIsPreferencesOpen(true);
    }, []);

    const closePreferences = useCallback(() => {
        setIsPreferencesOpen(false);
    }, []);

    const openBanner = useCallback(() => {
        setIsBannerOpen(true);
    }, []);

    const closeBanner = useCallback(() => {
        setIsBannerOpen(false);
    }, []);

    return (
        <CookieConsentContext.Provider
            value={{
                consent,
                isHydrated,
                isBannerOpen,
                isPreferencesOpen,
                acceptAll,
                rejectAll,
                savePreferences,
                openPreferences,
                closePreferences,
                openBanner,
                closeBanner,
            }}
        >
            {children}
        </CookieConsentContext.Provider>
    );
}

export function useCookieConsent(): CookieConsentContextType {
    const context = useContext(CookieConsentContext);
    if (!context) {
        throw new Error("useCookieConsent must be used within a CookieConsentProvider");
    }
    return context;
}
