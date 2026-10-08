import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "User Data Deletion Instructions",
    description: "Step-by-step instructions for requesting user and business data deletion, disconnecting WhatsApp accounts, and GDPR compliance on Connectly360.",
    alternates: {
        canonical: "https://connectly360.com/data-deletion",
    },
    openGraph: {
        title: "User Data Deletion Instructions | Connectly360",
        description: "Step-by-step instructions for requesting user and business data deletion, disconnecting WhatsApp accounts, and GDPR compliance on Connectly360.",
        url: "https://connectly360.com/data-deletion",
        siteName: "Connectly360",
        type: "website",
    },
};

export default function DataDeletionLayout({ children }: { children: React.ReactNode }) {
    return children;
}
