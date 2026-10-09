"use client";

import React from "react";
import Link from "next/link";
import { LandingHeader } from "@/components/landing-header";
import { LandingFooter } from "@/components/landing-footer";
import { Card } from "@/components/ui/card";
import {
    Coins,
    ShieldCheck,
    CreditCard,
    AlertCircle,
    CheckCircle2,
    RefreshCw,
    Mail,
    Phone,
    MapPin,
    ExternalLink,
    HelpCircle
} from "lucide-react";

export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden selection:bg-[#2F8F83] selection:text-white">
            <LandingHeader />

            <main className="pt-36 sm:pt-40">
                {/* Hero Header */}
                <section className="relative pb-12 sm:pb-16 overflow-hidden border-b border-slate-200/80 bg-white">
                    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F8F83]/10 text-[#2F8F83] text-xs font-bold border border-[#2F8F83]/25">
                            <Coins size={14} className="text-[#2F8F83]" />
                            <span>Transparent Billing & Guarantees</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Refund & Cancellation Policy
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            Effective Date: October 8, 2026 &bull; Last Updated: October 8, 2026
                        </p>
                        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                            Clear and fair terms governing Connectly360 subscriptions, credit topups, cancellations, auto-recharges, and Meta WhatsApp API billing.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12 sm:py-16">
                    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-5xl mx-auto space-y-10">
                        
                        {/* Summary Card */}
                        <Card className="p-6 sm:p-10 md:p-12 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-10">
                            
                            {/* Key Takeaway Banner */}
                            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                                    <ShieldCheck size={16} className="text-emerald-700" />
                                    <span>Summary of Our Billing Guarantees</span>
                                </div>
                                <p className="text-xs sm:text-sm text-emerald-950/80 leading-relaxed font-normal">
                                    We offer a <strong>Free Sandbox Tier &amp; 7-Day Free Trial</strong> with no credit card required so you can test our WhatsApp CRM before paying. Subscriptions can be cancelled at any time to prevent future renewals. If you experience duplicate billing or a system processing error, we evaluate and process refunds within <strong>5 to 7 business days</strong>.
                                </p>
                            </div>

                            {/* Section 1 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    1. Free Sandbox Tier &amp; 7-Day Trial Scope
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Connectly360 offers a completely free Starter Sandbox Plan and an automatic 7-day free trial upon registration. We do not require credit card details to create a sandbox workspace. This provides full opportunity to explore the visual workflow builder, simulate chatbot responses, and review CRM logs before making any financial commitment.
                                </p>
                            </section>

                            {/* Section 2 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    2. Subscriptions &amp; Cancellation Policy
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Paid subscription plans (such as Growth, Business, or Enterprise) are billed on a recurring monthly or annual basis via our PCI-compliant payment partner, <strong>Razorpay</strong>:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                                    <li><strong>Cancel Anytime:</strong> You may cancel your subscription at any time directly through your Connectly360 dashboard under <em>Settings &gt; Billing &amp; Subscriptions</em>.</li>
                                    <li><strong>Remaining Period Access:</strong> When you cancel, your workspace retains full access to your plan features and allocated monthly credit quota until the end of your current paid billing cycle.</li>
                                    <li><strong>No Mid-Cycle Proration:</strong> We do not issue partial or prorated refunds for cancellations made mid-cycle, as server allocations, cloud resources, and dedicated WhatsApp webhook endpoints remain provisioned for the full billing term.</li>
                                </ul>
                            </section>

                            {/* Section 3 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    3. WhatsApp Messaging Credits &amp; Ledgers
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Where outbound messaging or AI auto-replies consume platform credits from your workspace ledger:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                                    <li><strong>Consumed Credits:</strong> Credits consumed by dispatched WhatsApp templates, broadcast campaigns, or AI prompt tokens cannot be refunded, reversed, or transferred once sent.</li>
                                    <li><strong>Unconsumed Purchased Credits:</strong> If you purchased custom credit topups in error, you may request a refund for the unused balance within <strong>7 days of purchase</strong>, provided no credits from that package have been spent.</li>
                                    <li><strong>Plan Monthly Credits:</strong> Monthly credits bundled with active subscription tiers expire at the end of each billing cycle and are non-refundable.</li>
                                </ul>
                            </section>

                            {/* Section 4 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    4. Auto-Recharge Rules &amp; Thresholds
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Workspaces with Auto-Recharge enabled authorize automatic credit topups when their balance falls below a configured threshold. You can disable Auto-Recharge at any time in your billing settings. Charges processed under authorized auto-recharge rules are non-refundable once applied, except where duplicate charges occur due to network timeout or gateway duplication.
                                </p>
                            </section>

                            {/* Section 5 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    5. Meta Official Cloud API Charges
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    If your WhatsApp Business Account is configured for direct billing by Meta Platforms (where your payment card is linked inside Meta Business Manager):
                                </p>
                                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1 text-xs sm:text-sm text-amber-950">
                                    <p className="font-bold flex items-center gap-1.5">
                                        <AlertCircle size={15} className="text-amber-700 shrink-0" />
                                        <span>Independent Meta Billing Notice</span>
                                    </p>
                                    <p className="leading-relaxed">
                                        WhatsApp conversation fees billed directly by Meta for official Cloud API usage are completely separate from Connectly360 platform subscription fees. Connectly360 does not collect, hold, or administer those direct Meta funds, and we cannot refund, dispute, or adjust charges issued by Meta Platforms, Inc.
                                    </p>
                                </div>
                            </section>

                            {/* Section 6 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    6. Billing Errors &amp; Duplicate Charges
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    If you believe you were charged in error, experienced an unintended duplicate transaction, or were billed following a verified cancellation request:
                                </p>
                                <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
                                    <li>Submit a ticket to <a href="mailto:support@connectly360.com" className="text-[#2F8F83] font-bold underline">support@connectly360.com</a> within <strong>7 days</strong> of the transaction date.</li>
                                    <li>Include your workspace registered email, Razorpay payment ID, invoice number, and transaction receipt.</li>
                                    <li>Our billing desk will investigate transaction logs and, upon verification of error, issue a full refund to your original payment method.</li>
                                </ul>
                            </section>

                            {/* Section 7 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    7. Refund Processing Timeline &amp; Methods
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Approved refunds are processed via our payment gateway (Razorpay) and credited back to the original method of payment (credit card, debit card, UPI, or net banking) within <strong>5 to 7 business days</strong>, subject to your issuing bank&rsquo;s clearance cycles.
                                </p>
                            </section>

                            {/* Section 8 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    8. Taxes, Currencies &amp; Deductions
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    Subscription prices and topups are listed in Indian Rupees (INR) or designated local currencies. Statutory Goods and Services Tax (GST) charged on transactions is remitted to the government authority in compliance with taxation laws and may be non-refundable once an official tax invoice has been settled, unless a valid credit note is issued.
                                </p>
                            </section>

                            {/* Section 9 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    9. Policy Violations &amp; Suspensions
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    No refunds will be granted if an account or workspace is suspended or terminated as a result of violations of our <Link href="/terms" className="text-[#2F8F83] font-semibold underline">Terms of Service</Link>, the <a href="https://www.whatsapp.com/legal/business-messaging-policy" target="_blank" rel="noopener noreferrer" className="text-[#2F8F83] underline inline-flex items-center gap-0.5">Meta WhatsApp Business Messaging Policy <ExternalLink size={10} /></a>, spamming recipients without opt-in consent, or illegal communications.
                                </p>
                            </section>

                            {/* Section 10 */}
                            <section className="space-y-3">
                                <h2 className="text-xl font-extrabold text-slate-900">
                                    10. Contacting Our Billing Desk
                                </h2>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    For any questions regarding your invoices, subscriptions, or refund eligibility, please contact our billing team:
                                </p>
                                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-700 space-y-2 font-medium">
                                    <p className="font-bold text-slate-900 text-sm">Connectly360 Billing &amp; Finance Desk</p>
                                    <div className="flex items-center gap-2">
                                        <Mail size={14} className="text-[#2F8F83]" />
                                        <span>Email: <a href="mailto:support@connectly360.com" className="text-[#2F8F83] font-bold underline">support@connectly360.com</a></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone size={14} className="text-[#2F8F83]" />
                                        <span>Phone: +91 9586557162</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} className="text-[#2F8F83]" />
                                        <span>Location: Ahmedabad, Gujarat, India</span>
                                    </div>
                                </div>
                            </section>

                        </Card>
                    </div>
                </section>
            </main>

            <LandingFooter />
        </div>
    );
}
