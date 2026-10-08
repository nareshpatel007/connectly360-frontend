import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy",
    description: "Connectly360 billing, trial terms, cancellation and refund policies for subscription plans and WhatsApp messaging credits.",
    alternates: {
        canonical: "https://connectly360.com/refund-policy",
    },
    openGraph: {
        title: "Refund Policy | Connectly360",
        description: "Connectly360 billing, trial terms, cancellation and refund policies for subscription plans and WhatsApp messaging credits.",
        url: "https://connectly360.com/refund-policy",
        siteName: "Connectly360",
        type: "website",
    },
};

export default function RefundLayout({ children }: { children: React.ReactNode }) {
    return children;
}
