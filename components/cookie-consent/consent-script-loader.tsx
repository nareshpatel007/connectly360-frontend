"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { useCookieConsent } from "./cookie-consent-context";

/**
 * Consent-Aware Script Loader & Google Consent Mode v2 Dispatcher
 *
 * Guaranteed: NO tracking or analytics scripts load or execute until
 * the corresponding consent category is granted by the user.
 */
export function ConsentScriptLoader() {
    const { consent, isHydrated } = useCookieConsent();

    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

    // Initialize Google Consent Mode v2 defaults before any script execution
    useEffect(() => {
        if (typeof window === "undefined") return;

        const win = window as any;
        win.dataLayer = win.dataLayer || [];
        function gtag(...args: any[]) {
            win.dataLayer.push(args);
        }
        win.gtag = win.gtag || gtag;

        // Set conservative privacy-first defaults
        win.gtag("consent", "default", {
            analytics_storage: consent?.analytics ? "granted" : "denied",
            ad_storage: consent?.marketing ? "granted" : "denied",
            ad_user_data: consent?.marketing ? "granted" : "denied",
            ad_personalization: consent?.marketing ? "granted" : "denied",
            functionality_storage: consent?.functional ? "granted" : "denied",
            personalization_storage: consent?.functional ? "granted" : "denied",
            security_storage: "granted", // Strictly necessary
        });
    }, [consent]);

    // Handle Microsoft Clarity initialization only if analytics consent granted
    useEffect(() => {
        if (!isHydrated || !consent?.analytics || !clarityId) return;

        const win = window as any;
        if (!win.clarity) {
            (function (c: any, l: any, a: any, r: any, i: any) {
                c[a] =
                    c[a] ||
                    function () {
                        (c[a].q = c[a].q || []).push(arguments);
                    };
                const t = l.createElement(r);
                t.async = 1;
                t.src = "https://www.clarity.ms/tag/" + i;
                const y = l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", clarityId);
        }
    }, [consent?.analytics, clarityId, isHydrated]);

    // Handle Meta Pixel initialization only if marketing consent granted
    useEffect(() => {
        if (!isHydrated || !consent?.marketing || !metaPixelId) return;

        const win = window as any;
        if (!win.fbq) {
            (function (f: any, b: any, e: any, v: any) {
                if (f.fbq) return;
                const n: any = (f.fbq = function () {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                });
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";
                n.queue = [];
                const t = b.createElement(e);
                t.async = !0;
                t.src = v;
                const s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

            win.fbq("init", metaPixelId);
            win.fbq("track", "PageView");
        }
    }, [consent?.marketing, metaPixelId, isHydrated]);

    return (
        <>
            {/* Google Analytics 4 (Only loaded if user granted analytics consent) */}
            {isHydrated && consent?.analytics && gaId && (
                <>
                    <Script
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                    />
                    <Script
                        id="google-analytics-init"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${gaId}', {
                                    page_path: window.location.pathname,
                                    anonymize_ip: true
                                });
                            `,
                        }}
                    />
                </>
            )}

            {/* Google Tag Manager (Only loaded if user granted analytics or marketing consent) */}
            {isHydrated && (consent?.analytics || consent?.marketing) && gtmId && (
                <Script
                    id="google-tag-manager-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${gtmId}');
                        `,
                    }}
                />
            )}
        </>
    );
}
