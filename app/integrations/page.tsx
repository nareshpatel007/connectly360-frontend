"use client";

import React from "react";
import Link from "next/link";
import { LandingHeader } from "@/components/landing-header";
import { LandingFooter } from "@/components/landing-footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Plug,
    ArrowRight,
    CheckCircle2,
    MessageSquare,
    ShoppingBag,
    Database,
    Zap,
    CreditCard,
    Webhook,
    Layers,
    Sparkles
} from "lucide-react";
import { APP_URL } from "@/lib/config";

const integrationCategories = [
    {
        category: "Official Messaging",
        desc: "Direct native connections with Meta infrastructure for verified WhatsApp communication.",
        items: [
            {
                name: "Meta WhatsApp Cloud API",
                desc: "Official embedded signup with automatic webhook routing and high-throughput template messaging.",
                icon: MessageSquare,
                badge: "Official Partner",
                status: "Built-in"
            },
            {
                name: "Click-to-WhatsApp Ads",
                desc: "Seamless lead capture and automated attribution from Meta Facebook and Instagram ad campaigns.",
                icon: Sparkles,
                badge: "Ad Tech",
                status: "Supported"
            }
        ]
    },
    {
        category: "E-Commerce & Orders",
        desc: "Automate abandoned cart recovery, order dispatch alerts, and cod confirmation via WhatsApp.",
        items: [
            {
                name: "Shopify",
                desc: "Real-time sync of customer orders, cart abandonment events, and delivery fulfillment updates.",
                icon: ShoppingBag,
                badge: "Commerce",
                status: "Supported"
            },
            {
                name: "WooCommerce",
                desc: "Automated WhatsApp notifications for WordPress e-commerce orders and status transitions.",
                icon: Layers,
                badge: "Plugin Ready",
                status: "Supported"
            }
        ]
    },
    {
        category: "CRM & Customer Data",
        desc: "Bi-directional sync of contacts, pipeline lead stages, and interaction notes.",
        items: [
            {
                name: "HubSpot CRM",
                desc: "Synchronize WhatsApp chats, customer properties, and deals with your central HubSpot portal.",
                icon: Database,
                badge: "CRM Sync",
                status: "Ready"
            },
            {
                name: "Zoho CRM",
                desc: "Capture incoming WhatsApp prospects as Zoho leads and sync contact activity timelines.",
                icon: Database,
                badge: "CRM Sync",
                status: "Ready"
            }
        ]
    },
    {
        category: "Payments & Invoicing",
        desc: "Send instant payment links, collect receipts, and verify transaction statuses in-chat.",
        items: [
            {
                name: "Razorpay",
                desc: "Generate smart WhatsApp payment links and trigger automated payment confirmation receipts.",
                icon: CreditCard,
                badge: "Payments",
                status: "Supported"
            }
        ]
    },
    {
        category: "Custom Developer APIs",
        desc: "Extensible developer tooling to connect your in-house software, backend, and ERP tools.",
        items: [
            {
                name: "Inbound & Outbound Webhooks",
                desc: "Receive real-time event payloads for every message status, lead qualified, or button clicked.",
                icon: Webhook,
                badge: "Realtime",
                status: "Built-in"
            },
            {
                name: "Connectly360 REST API",
                desc: "Send programmatic template messages, create leads, and manage contacts from any tech stack.",
                icon: Zap,
                badge: "Developer API",
                status: "Built-in"
            }
        ]
    }
];

export default function IntegrationsPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden selection:bg-[#2F8F83] selection:text-white">
            <LandingHeader />

            <main className="pt-36">
                {/* Hero Title Section */}
                <section className="relative pb-16 overflow-hidden">
                    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-5xl mx-auto text-center space-y-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2F8F83]/10 text-[#2F8F83] text-xs font-bold border border-[#2F8F83]/20 mb-1">
                            <Plug size={13} className="text-[#2F8F83] animate-pulse" />
                            Integrations Ecosystem
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                            Connect WhatsApp to <br className="hidden sm:inline" />
                            <span className="text-[#0B2E1E]">Your Entire Tech Stack.</span>
                        </h1>
                        <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                            Seamlessly integrate your e-commerce stores, CRMs, payment gateways, and custom backend APIs with Connectly360&apos;s conversational platform.
                        </p>

                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Button asChild size="lg" className="rounded-xl px-7 h-12 bg-[#2F8F83] hover:bg-[#267A70] text-white font-bold text-sm shadow-md">
                                <Link href="/register">
                                    Start Free Trial <ArrowRight size={14} className="ml-1" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-xl px-7 h-12 border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-sm">
                                <Link href="/book-demo">
                                    Request Custom Integration
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Categories & Integration Cards */}
                <section className="pb-24">
                    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto space-y-16">
                        {integrationCategories.map((cat, idx) => (
                            <div key={idx} className="space-y-6">
                                <div className="border-b border-slate-200 pb-3">
                                    <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                                        {cat.category}
                                    </h2>
                                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                                        {cat.desc}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                    {cat.items.map((item, itemIdx) => {
                                        const IconComp = item.icon;
                                        return (
                                            <Card
                                                key={itemIdx}
                                                className="p-6 bg-white border border-slate-200 hover:border-[#2F8F83]/40 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                                            >
                                                <div className="space-y-3">
                                                    <div className="flex items-center justify-between">
                                                        <div className="h-11 w-11 rounded-xl bg-emerald-50 text-[#2F8F83] border border-emerald-100 flex items-center justify-center transition-transform group-hover:scale-105">
                                                            <IconComp size={20} />
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                                                {item.badge}
                                                            </span>
                                                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                                                                <CheckCircle2 size={11} /> {item.status}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#2F8F83] transition-colors">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                                                        {item.desc}
                                                    </p>
                                                </div>

                                                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                                                    <Link
                                                        href="/book-demo"
                                                        className="text-xs font-bold text-[#2F8F83] hover:underline inline-flex items-center gap-1"
                                                    >
                                                        Setup with Connectly360 <ArrowRight size={12} />
                                                    </Link>
                                                </div>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}

                        {/* Custom Integration Callout Card */}
                        <div className="bg-gradient-to-br from-[#0B2E1E] to-[#0A4B3A] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
                            <div className="max-w-2xl space-y-4 relative z-10">
                                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full text-emerald-200 border border-white/10">
                                    Enterprise & Custom API
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                                    Need a bespoke CRM or ERP integration?
                                </h3>
                                <p className="text-sm text-emerald-100/90 leading-relaxed font-normal">
                                    Our dedicated engineering team builds and tests custom webhook pipelines, database synchronization, and legacy ERP connectors for enterprise teams.
                                </p>
                                <div className="pt-2">
                                    <Button asChild className="rounded-xl bg-white hover:bg-slate-100 text-[#0B2E1E] font-extrabold text-xs h-11 px-6 shadow-md border-0">
                                        <Link href="/contact">
                                            Speak with Solutions Engineering <ArrowRight size={14} className="ml-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <LandingFooter />
        </div>
    );
}
