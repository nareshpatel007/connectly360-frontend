"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu,
    X,
    ChevronDown,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { navigationConfig, TopLevelNavItem, MegaMenuConfig } from "@/config/navigation.config";
import { NavIcon } from "@/components/nav-icon";

export function LandingHeader() {
    const { isAuthenticated, isLoading } = useAuth();
    const pathname = usePathname();

    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [bannerDismissed, setBannerDismissed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileActiveAccordion, setMobileActiveAccordion] = useState<string | null>("products");
    const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

    const navRef = useRef<HTMLDivElement>(null);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Hydration mount check
    useEffect(() => {
        setMounted(true);
    }, []);

    // Scroll listener for floating pill transformation
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Outside click & Escape key listener to close active mega menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveMenuId(null);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActiveMenuId(null);
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // Close menus on route change
    useEffect(() => {
        setActiveMenuId(null);
        setMobileMenuOpen(false);
    }, [pathname]);

    // Mega menu hover management with slight debounce to prevent accidental closes
    const handleMouseEnter = (itemId: string) => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setActiveMenuId(itemId);
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = setTimeout(() => {
            setActiveMenuId(null);
        }, 140);
    };

    const handleMegaMenuEnter = () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };

    const toggleMenu = (itemId: string) => {
        setActiveMenuId((prev) => (prev === itemId ? null : itemId));
    };

    const toggleMobileAccordion = (id: string) => {
        setMobileActiveAccordion((prev) => (prev === id ? null : id));
    };

    const isBannerVisible = navigationConfig.announcementBanner.enabled && !bannerDismissed && !isScrolled;

    return (
        <div
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none transition-all duration-300 ease-in-out ${
                isScrolled ? "pt-2.5 sm:pt-3.5" : "pt-0"
            }`}
        >
            {/* 1. TOP ANNOUNCEMENT BANNER */}
            <div
                className={`w-full bg-[#0B2E1E] text-white text-xs font-normal text-center flex items-center justify-center px-4 overflow-hidden transition-all duration-300 ease-in-out pointer-events-auto relative ${
                    isBannerVisible ? "max-h-12 opacity-100 py-2.5 border-b border-emerald-950/20" : "max-h-0 opacity-0 py-0 border-transparent -translate-y-full"
                }`}
            >
                <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto flex-wrap">
                    <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-200 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-emerald-400/30">
                        {navigationConfig.announcementBanner.badge}
                    </span>
                    <span className="font-medium text-slate-100">
                        {navigationConfig.announcementBanner.text}
                    </span>
                    <Link
                        href={navigationConfig.announcementBanner.href}
                        className="font-bold underline hover:text-[#ebd25b] transition-colors ml-1 inline-flex items-center gap-0.5 text-emerald-300"
                    >
                        {navigationConfig.announcementBanner.ctaText}
                    </Link>
                </div>

                {/* Dismiss button */}
                <button
                    type="button"
                    onClick={() => setBannerDismissed(true)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-300/80 hover:text-white transition-colors p-1 rounded-md"
                    aria-label="Dismiss announcement"
                >
                    <X size={14} />
                </button>
            </div>

            {/* 2. PRIMARY HEADER CONTAINER */}
            <div
                className={`w-full transition-all duration-300 ease-in-out flex justify-center pointer-events-auto ${
                    isScrolled ? "max-w-7xl px-3 sm:px-6 md:px-8" : "max-w-none px-0"
                }`}
            >
                <header
                    className={`transition-all duration-300 ease-in-out flex items-center justify-between w-full relative ${
                        isScrolled
                            ? "bg-white/95 backdrop-blur-md rounded-2xl md:rounded-full h-16 px-5 sm:px-7 md:px-8 shadow-lg shadow-black/5 border border-slate-200/80"
                            : "bg-white border-b border-gray-100 shadow-xs h-20 px-6 md:px-12 rounded-none"
                    }`}
                >
                    {/* Brand Logo */}
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 group">
                            <img
                                src="/images/logo.png"
                                alt="Connectly360 Logo"
                                className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                                    isScrolled ? "h-8 sm:h-9" : "h-10"
                                }`}
                            />
                        </Link>
                    </div>

                    {/* Desktop Primary Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full" aria-label="Main Navigation">
                        {navigationConfig.primaryNav.map((item) => {
                            if (item.type === "link") {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.id}
                                        href={item.href || "#"}
                                        className={`text-sm font-bold transition-colors ${
                                            isActive ? "text-[#2F8F83]" : "text-gray-700 hover:text-[#2F8F83]"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            }

                            const isOpen = activeMenuId === item.id;

                            return (
                                <div
                                    key={item.id}
                                    className="h-full flex items-center relative"
                                    onMouseEnter={() => handleMouseEnter(item.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleMenu(item.id)}
                                        aria-expanded={isOpen}
                                        aria-haspopup="true"
                                        aria-controls={`mega-menu-${item.id}`}
                                        className={`group cursor-pointer h-full flex items-center gap-1.5 text-sm font-bold transition-colors border-0 bg-transparent py-2 px-1 focus:outline-none focus-visible:text-[#2F8F83] ${
                                            isOpen ? "text-[#2F8F83]" : "text-gray-700 hover:text-[#2F8F83]"
                                        }`}
                                    >
                                        <span>{item.label}</span>
                                        <ChevronDown
                                            size={13}
                                            className={`text-gray-400 transition-transform duration-200 ${
                                                isOpen ? "rotate-180 text-[#2F8F83]" : "group-hover:text-[#2F8F83]"
                                            }`}
                                        />
                                    </button>

                                    {/* Invisible hover bridge */}
                                    {isOpen && (
                                        <div className="absolute top-full left-0 w-full h-4 bg-transparent" />
                                    )}

                                    {/* Desktop Mega Menu Dropdown Card */}
                                    {isOpen && item.megaMenu && (
                                        <div
                                            id={`mega-menu-${item.id}`}
                                            onMouseEnter={handleMegaMenuEnter}
                                            onMouseLeave={handleMouseLeave}
                                            className={`fixed left-1/2 -translate-x-1/2 w-[min(1240px,calc(100vw-2.5rem))] bg-white border border-slate-200/90 rounded-3xl shadow-2xl p-6 sm:p-7 z-50 pointer-events-auto animate-in fade-in-0 zoom-in-[0.98] duration-200 ${
                                                isScrolled ? "top-[5.25rem]" : "top-[7.25rem]"
                                            }`}
                                        >
                                            <div className="grid grid-cols-12 gap-7">
                                                {/* Left Columns Grid */}
                                                <div
                                                    className={`grid gap-6 ${
                                                        item.megaMenu.featured
                                                            ? "col-span-9"
                                                            : "col-span-12"
                                                    } ${
                                                        item.megaMenu.columns.length === 2
                                                            ? "grid-cols-2"
                                                            : item.megaMenu.columns.length === 3
                                                            ? "grid-cols-3"
                                                            : "grid-cols-4"
                                                    }`}
                                                >
                                                    {item.megaMenu.columns.map((col, colIdx) => (
                                                        <div key={colIdx} className="space-y-3.5">
                                                            <div>
                                                                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                                                                    {col.groupTitle}
                                                                </h4>
                                                                {col.groupSubtitle && (
                                                                    <p className="text-[10px] text-slate-450 font-medium mt-0.5">
                                                                        {col.groupSubtitle}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            <div className="space-y-1">
                                                                {col.items
                                                                    .filter((sub) => sub.enabled !== false)
                                                                    .map((sub, subIdx) => (
                                                                        <Link
                                                                            key={subIdx}
                                                                            href={sub.href}
                                                                            onClick={() => setActiveMenuId(null)}
                                                                            className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                                                                        >
                                                                            <div className="h-8 w-8 rounded-lg bg-emerald-50 text-[#2F8F83] border border-emerald-100/60 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/item:scale-110">
                                                                                <NavIcon name={sub.icon} size={15} />
                                                                            </div>
                                                                            <div className="min-w-0 flex-1 space-y-0.5">
                                                                                <div className="flex items-center gap-1.5">
                                                                                    <span className="text-xs font-bold text-slate-800 transition-colors group-hover/item:text-[#2F8F83] truncate">
                                                                                        {sub.title}
                                                                                    </span>
                                                                                    {sub.badge && (
                                                                                        <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-[#2F8F83]/10 text-[#2F8F83] shrink-0">
                                                                                            {sub.badge}
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                                <p className="text-[11px] text-slate-500 font-normal leading-normal line-clamp-2">
                                                                                    {sub.description}
                                                                                </p>
                                                                            </div>
                                                                        </Link>
                                                                    ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Right Featured Card (if present) */}
                                                {item.megaMenu.featured && (
                                                    <div className="col-span-3 bg-gradient-to-br from-[#0B2E1E]/6 via-[#2F8F83]/10 to-transparent border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group/promo">
                                                        <div className="space-y-3">
                                                            {item.megaMenu.featured.badge && (
                                                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#2F8F83]/15 text-[#0B2E1E] text-[10px] font-extrabold uppercase tracking-wider">
                                                                    {item.megaMenu.featured.badge}
                                                                </span>
                                                            )}
                                                            <h3 className="text-sm font-extrabold text-slate-900 leading-snug">
                                                                {item.megaMenu.featured.title}
                                                            </h3>
                                                            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                                                                {item.megaMenu.featured.description}
                                                            </p>
                                                        </div>

                                                        <div className="space-y-2 mt-4 pt-3 border-t border-slate-200/60">
                                                            <Button
                                                                asChild
                                                                size="sm"
                                                                className="w-full h-8.5 bg-[#2F8F83] hover:bg-[#267A70] text-white rounded-xl font-bold text-xs shadow-xs cursor-pointer border-0"
                                                            >
                                                                <Link
                                                                    href={item.megaMenu.featured.primaryCta.href}
                                                                    onClick={() => setActiveMenuId(null)}
                                                                >
                                                                    {item.megaMenu.featured.primaryCta.text}
                                                                </Link>
                                                            </Button>
                                                            {item.megaMenu.featured.secondaryCta && (
                                                                <Button
                                                                    asChild
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    className="w-full h-7 text-xs text-slate-600 hover:text-slate-900 font-semibold"
                                                                >
                                                                    <Link
                                                                        href={item.megaMenu.featured.secondaryCta.href}
                                                                        onClick={() => setActiveMenuId(null)}
                                                                    >
                                                                        {item.megaMenu.featured.secondaryCta.text}
                                                                    </Link>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Bottom Quick Strip Banner */}
                                            {item.megaMenu.bottomBanner && (
                                                <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                                                    <span className="text-slate-500 font-medium">
                                                        {item.megaMenu.bottomBanner.text}
                                                    </span>
                                                    <div className="flex items-center gap-3 shrink-0">
                                                        <Link
                                                            href={item.megaMenu.bottomBanner.href}
                                                            onClick={() => setActiveMenuId(null)}
                                                            className="text-[#2F8F83] font-bold hover:underline inline-flex items-center gap-1"
                                                        >
                                                            {item.megaMenu.bottomBanner.linkText} <ArrowRight size={12} />
                                                        </Link>
                                                        {item.megaMenu.bottomBanner.secondaryText && item.megaMenu.bottomBanner.secondaryHref && (
                                                            <>
                                                                <span className="text-slate-300">|</span>
                                                                <Link
                                                                    href={item.megaMenu.bottomBanner.secondaryHref}
                                                                    onClick={() => setActiveMenuId(null)}
                                                                    className="text-slate-600 font-bold hover:text-slate-900"
                                                                >
                                                                    {item.megaMenu.bottomBanner.secondaryText}
                                                                </Link>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* Right Action Buttons */}
                    <div className="hidden lg:flex items-center gap-2.5">
                        {mounted && isAuthenticated ? (
                            <>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="rounded-lg px-4 py-2 h-9 border-[#2F8F83] text-[#2F8F83] hover:bg-[#E8F6F3] hover:text-[#267A70] bg-transparent transition-all font-semibold text-xs"
                                >
                                    <Link href={navigationConfig.actions.authenticated.help.href}>
                                        {navigationConfig.actions.authenticated.help.label}
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className="rounded-lg px-4 py-2 h-9 bg-[#2F8F83] hover:bg-[#267A70] text-white transition-all shadow-xs font-semibold text-xs flex items-center gap-1 cursor-pointer"
                                >
                                    <Link href={navigationConfig.actions.authenticated.dashboard.href}>
                                        {navigationConfig.actions.authenticated.dashboard.label} <ArrowRight size={12} />
                                    </Link>
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="rounded-lg px-4 py-2 h-9 border-slate-200 text-slate-700 hover:border-[#2F8F83] hover:text-[#2F8F83] hover:bg-slate-50 bg-white transition-all font-semibold text-xs shadow-2xs"
                                >
                                    <Link href={navigationConfig.actions.guest.login.href}>
                                        {navigationConfig.actions.guest.login.label}
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className="rounded-lg px-4 py-2 h-9 bg-[#2F8F83] hover:bg-[#267A70] text-white transition-all shadow-xs font-semibold text-xs flex items-center gap-1 cursor-pointer"
                                >
                                    <Link href={navigationConfig.actions.guest.register.href}>
                                        {navigationConfig.actions.guest.register.label} <ArrowRight size={12} />
                                    </Link>
                                </Button>
                            </>
                        )}
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        className="lg:hidden text-gray-700 hover:text-[#2F8F83] p-2 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </header>
            </div>

            {/* 3. MOBILE NAVIGATION DRAWER */}
            {mobileMenuOpen && (
                <div
                    className={`lg:hidden fixed left-1/2 -translate-x-1/2 w-[calc(100vw-1.5rem)] max-w-lg bg-white border border-slate-200/90 rounded-3xl p-5 shadow-2xl z-50 pointer-events-auto max-h-[calc(100vh-6rem)] overflow-y-auto animate-in fade-in-0 slide-in-from-top-4 duration-200 ${
                        isScrolled ? "top-[4.75rem]" : "top-[5.5rem]"
                    }`}
                >
                    <div className="flex flex-col gap-3">
                        {navigationConfig.primaryNav.map((item) => {
                            if (item.type === "link") {
                                return (
                                    <Link
                                        key={item.id}
                                        href={item.href || "#"}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-base font-bold text-gray-800 p-2.5 hover:text-[#2F8F83] rounded-xl hover:bg-slate-50 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                );
                            }

                            const isExpanded = mobileActiveAccordion === item.id;

                            return (
                                <div key={item.id} className="border-b border-slate-100 pb-2">
                                    <button
                                        type="button"
                                        onClick={() => toggleMobileAccordion(item.id)}
                                        className="flex items-center justify-between text-base font-bold text-gray-800 p-2.5 w-full text-left rounded-xl hover:bg-slate-50 transition-colors"
                                    >
                                        <span>{item.label}</span>
                                        <ChevronDown
                                            size={16}
                                            className={`text-gray-400 transition-transform duration-200 ${
                                                isExpanded ? "rotate-180 text-[#2F8F83]" : ""
                                            }`}
                                        />
                                    </button>

                                    {isExpanded && item.megaMenu && (
                                        <div className="pl-2 pr-1 py-2 flex flex-col gap-4 bg-slate-50/70 rounded-2xl mt-1">
                                            {item.megaMenu.columns.map((col, cIdx) => (
                                                <div key={cIdx} className="space-y-1.5">
                                                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-2 block">
                                                        {col.groupTitle}
                                                    </span>
                                                    {col.items
                                                        .filter((sub) => sub.enabled !== false)
                                                        .map((sub, sIdx) => (
                                                            <Link
                                                                key={sIdx}
                                                                href={sub.href}
                                                                onClick={() => setMobileMenuOpen(false)}
                                                                className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white transition-colors"
                                                            >
                                                                <div className="h-7 w-7 rounded-lg bg-emerald-50 text-[#2F8F83] flex items-center justify-center shrink-0">
                                                                    <NavIcon name={sub.icon} size={14} />
                                                                </div>
                                                                <div className="min-w-0 flex-1">
                                                                    <div className="flex items-center gap-1.5">
                                                                        <span className="text-xs font-bold text-slate-800">
                                                                            {sub.title}
                                                                        </span>
                                                                        {sub.badge && (
                                                                            <span className="text-[8px] font-extrabold px-1.5 rounded-full bg-[#2F8F83]/10 text-[#2F8F83]">
                                                                                {sub.badge}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    <p className="text-[10px] text-slate-500 font-normal leading-normal line-clamp-1">
                                                                        {sub.description}
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* Mobile Actions */}
                        <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-100">
                            {mounted && isAuthenticated ? (
                                <>
                                    <Link
                                        href={navigationConfig.actions.authenticated.help.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-center font-semibold text-slate-700 p-2 text-xs hover:text-[#2F8F83]"
                                    >
                                        {navigationConfig.actions.authenticated.help.label}
                                    </Link>
                                    <Button asChild className="w-full bg-[#2F8F83] hover:bg-[#267A70] text-white font-semibold rounded-lg py-2.5 text-xs shadow-xs">
                                        <Link
                                            href={navigationConfig.actions.authenticated.dashboard.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {navigationConfig.actions.authenticated.dashboard.label}
                                        </Link>
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href={navigationConfig.actions.guest.login.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-center font-semibold text-slate-700 p-2 text-xs hover:text-[#2F8F83]"
                                    >
                                        {navigationConfig.actions.guest.login.label}
                                    </Link>
                                    <Button asChild className="w-full bg-[#2F8F83] hover:bg-[#267A70] text-white font-semibold rounded-lg py-2.5 text-xs shadow-xs">
                                        <Link
                                            href={navigationConfig.actions.guest.register.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {navigationConfig.actions.guest.register.label}
                                        </Link>
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

