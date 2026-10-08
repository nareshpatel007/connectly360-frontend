import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms governing the use of Connectly360's WhatsApp CRM, messaging, campaign, and related services.",
    alternates: {
        canonical: "https://connectly360.com/terms",
    },
    openGraph: {
        title: "Terms of Service | Connectly360",
        description: "Terms governing the use of Connectly360's WhatsApp CRM, messaging, campaign, and related services.",
        url: "https://connectly360.com/terms",
        siteName: "Connectly360",
        type: "website",
    },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
