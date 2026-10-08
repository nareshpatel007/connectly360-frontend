/**
 * Connectly360 Cookie Consent & Preferences Management System
 * Version 1.0 (October 2026)
 *
 * Implements GDPR, ePrivacy, and Google Consent Mode v2 compliant
 * consent state, storage, script gating, and cookie lifecycle controls.
 */

export const COOKIE_CONSENT_VERSION = "1.0";
export const COOKIE_CONSENT_KEY = "connectly360_cookie_consent";
export const COOKIE_EXPIRY_DAYS = 365;

export interface CookieCategories {
    necessary: boolean;
    functional: boolean;
    analytics: boolean;
    marketing: boolean;
}

export interface CookieConsentState extends CookieCategories {
    version: string;
    timestamp: string;
    source: "banner_accept_all" | "banner_reject_all" | "preferences_modal";
}

/**
 * Cookie item definition for the inventory
 */
export interface CookieInventoryItem {
    name: string;
    category: "necessary" | "functional" | "analytics" | "marketing";
    provider: string;
    duration: string;
    purpose: string;
    isFirstParty: boolean;
}

export const COOKIE_INVENTORY: CookieInventoryItem[] = [
    {
        name: "connectly360_cookie_consent",
        category: "necessary",
        provider: "Connectly360",
        duration: "1 year",
        purpose: "Stores user consent preferences for strictly necessary, functional, analytics, and marketing cookies.",
        isFirstParty: true,
    },
    {
        name: "auth_token",
        category: "necessary",
        provider: "Connectly360 (Local Storage)",
        duration: "Session / 30 days",
        purpose: "Stores secure JSON Web Token (JWT) authorizing browser API requests to CRM services.",
        isFirstParty: true,
    },
    {
        name: "XSRF-TOKEN / csrf_token",
        category: "necessary",
        provider: "Connectly360 API",
        duration: "Session",
        purpose: "Prevents Cross-Site Request Forgery (CSRF) on forms and interactive actions.",
        isFirstParty: true,
    },
    {
        name: "connectly360_active_visitor_id",
        category: "functional",
        provider: "Connectly360 Support Chat",
        duration: "1 year",
        purpose: "Maintains ongoing live support conversation thread when navigating across pages.",
        isFirstParty: true,
    },
    {
        name: "connectly360_visitor_ids",
        category: "functional",
        provider: "Connectly360 Support Chat",
        duration: "1 year",
        purpose: "Tracks historical conversation IDs for live support ticket continuity.",
        isFirstParty: true,
    },
    {
        name: "_ga, _ga_*",
        category: "analytics",
        provider: "Google Analytics (GA4)",
        duration: "2 years",
        purpose: "Calculates visitor, session, and campaign data to understand website performance.",
        isFirstParty: false,
    },
    {
        name: "_clck, _clsk",
        category: "analytics",
        provider: "Microsoft Clarity",
        duration: "1 year",
        purpose: "Records anonymous behavioral analytics and heatmaps to improve user experience.",
        isFirstParty: false,
    },
    {
        name: "_fbp, _gcl_au",
        category: "marketing",
        provider: "Meta / Google Ads",
        duration: "90 days",
        purpose: "Measures ad conversion effectiveness and supports targeted campaign remarketing.",
        isFirstParty: false,
    },
];

/**
 * Cookie Helper: Read a cookie by name
 */
export function getRawCookie(name: string): string | null {
    if (typeof document === "undefined") return null;
    const nameEQ = encodeURIComponent(name) + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length));
        }
    }
    return null;
}

/**
 * Cookie Helper: Set a cookie with attributes
 */
export function setRawCookie(name: string, value: string, days = COOKIE_EXPIRY_DAYS): void {
    if (typeof document === "undefined") return;
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    const secure = typeof window !== "undefined" && window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${expires}; path=/; SameSite=Lax${secure}`;
}

/**
 * Cookie Helper: Delete a cookie across potential domain scopes
 */
export function deleteRawCookie(name: string): void {
    if (typeof document === "undefined") return;
    // Delete for current path
    document.cookie = `${encodeURIComponent(name)}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax`;

    // Also attempt deleting with domain variations if applicable
    const host = window.location.hostname;
    document.cookie = `${encodeURIComponent(name)}=; path=/; domain=${host}; expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax`;
    if (host.includes(".")) {
        const rootDomain = "." + host.split(".").slice(-2).join(".");
        document.cookie = `${encodeURIComponent(name)}=; path=/; domain=${rootDomain}; expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax`;
    }
}

/**
 * Retrieve saved consent state. Returns null if not set or version expired.
 */
export function getStoredConsent(): CookieConsentState | null {
    if (typeof window === "undefined") return null;

    try {
        // Check cookie first
        const raw = getRawCookie(COOKIE_CONSENT_KEY);
        let parsed: CookieConsentState | null = null;

        if (raw) {
            parsed = JSON.parse(raw);
        } else {
            // Fallback to localStorage if cookie missing
            const ls = localStorage.getItem(COOKIE_CONSENT_KEY);
            if (ls) parsed = JSON.parse(ls);
        }

        if (parsed && parsed.version === COOKIE_CONSENT_VERSION) {
            // Strictly necessary must always be true
            parsed.necessary = true;
            return parsed;
        }

        // Version mismatch or absent
        return null;
    } catch {
        return null;
    }
}

/**
 * Persist consent state to both first-party cookie and localStorage
 */
export function storeConsent(
    categories: CookieCategories,
    source: CookieConsentState["source"]
): CookieConsentState {
    const consent: CookieConsentState = {
        version: COOKIE_CONSENT_VERSION,
        necessary: true, // Always true
        functional: !!categories.functional,
        analytics: !!categories.analytics,
        marketing: !!categories.marketing,
        timestamp: new Date().toISOString(),
        source,
    };

    const serialized = JSON.stringify(consent);

    // Write to cookie (1 year duration)
    setRawCookie(COOKIE_CONSENT_KEY, serialized, COOKIE_EXPIRY_DAYS);

    // Also back up in localStorage
    try {
        localStorage.setItem(COOKIE_CONSENT_KEY, serialized);
    } catch {
        // Storage might be restricted
    }

    // Apply immediate cleanup if any optional category was rejected/withdrawn
    applyCookieCleanup(consent);

    // Apply Google Consent Mode v2 updates
    updateGoogleConsentMode(consent);

    // Dispatch global event for listeners (e.g., support-chat)
    if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("connectly360:consent-updated", { detail: consent }));
    }

    return consent;
}

/**
 * Clears non-essential cookies if consent is revoked
 */
export function applyCookieCleanup(consent: CookieConsentState): void {
    if (typeof document === "undefined") return;

    if (!consent.functional) {
        deleteRawCookie("connectly360_active_visitor_id");
        deleteRawCookie("connectly360_visitor_ids");
    }

    if (!consent.analytics) {
        // Standard Google Analytics cookies
        deleteRawCookie("_ga");
        deleteRawCookie("_gid");
        deleteRawCookie("_gat");

        // Scan and remove any _ga_* pattern cookies
        const cookies = document.cookie.split(";");
        for (const cookie of cookies) {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
            if (name.startsWith("_ga_") || name.startsWith("_clck") || name.startsWith("_clsk")) {
                deleteRawCookie(name);
            }
        }
    }

    if (!consent.marketing) {
        deleteRawCookie("_fbp");
        deleteRawCookie("_gcl_au");
    }
}

/**
 * Google Consent Mode v2 Integration
 * Ensures ad_storage, analytics_storage, ad_user_data, and ad_personalization
 * default to 'denied' and only update to 'granted' when explicitly approved.
 */
export function updateGoogleConsentMode(consent: CookieConsentState): void {
    if (typeof window === "undefined") return;

    const win = window as any;
    if (typeof win.gtag === "function") {
        win.gtag("consent", "update", {
            analytics_storage: consent.analytics ? "granted" : "denied",
            ad_storage: consent.marketing ? "granted" : "denied",
            ad_user_data: consent.marketing ? "granted" : "denied",
            ad_personalization: consent.marketing ? "granted" : "denied",
            functionality_storage: consent.functional ? "granted" : "denied",
            personalization_storage: consent.functional ? "granted" : "denied",
            security_storage: "granted", // Strictly necessary
        });
    }
}
