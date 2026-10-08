import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy",
    description: "Learn how Connectly360 uses strictly necessary cookies and local storage to secure sessions and provide customer support.",
    alternates: {
        canonical: "https://connectly360.com/cookie-policy",
    },
    openGraph: {
        title: "Cookie Policy | Connectly360",
        description: "Learn how Connectly360 uses strictly necessary cookies and local storage to secure sessions and provide customer support.",
        url: "https://connectly360.com/cookie-policy",
        siteName: "Connectly360",
        type: "website",
    },
};

export default function CookieLayout({ children }: { children: React.ReactNode }) {
    return children;
}
