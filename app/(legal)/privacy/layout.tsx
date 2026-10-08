import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Learn how Connectly360 collects, uses, protects, and manages account, WhatsApp, messaging, campaign, and customer data.",
    alternates: {
        canonical: "https://connectly360.com/privacy",
    },
    openGraph: {
        title: "Privacy Policy | Connectly360",
        description: "Learn how Connectly360 collects, uses, protects, and manages account, WhatsApp, messaging, campaign, and customer data.",
        url: "https://connectly360.com/privacy",
        siteName: "Connectly360",
        type: "website",
    },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
