"use client";

import React from "react";
import {
    MessageSquare,
    Inbox,
    Megaphone,
    GitBranch,
    Users,
    UserCheck,
    TrendingUp,
    Headphones,
    Bot,
    Sparkles,
    Zap,
    Clock,
    ShoppingBag,
    Target,
    FileText,
    Plug,
    Building2,
    GraduationCap,
    Shield,
    Coins,
    Truck,
    Briefcase,
    Compass,
    Webhook,
    HelpCircle,
    PhoneCall,
    Calendar,
    CheckCircle2,
    ArrowRight,
    LucideIcon
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
    MessageSquare,
    Inbox,
    Megaphone,
    GitBranch,
    Users,
    UserCheck,
    TrendingUp,
    Headphones,
    Bot,
    Sparkles,
    Zap,
    Clock,
    ShoppingBag,
    Target,
    FileText,
    Plug,
    Building2,
    GraduationCap,
    Shield,
    Coins,
    Truck,
    Briefcase,
    Compass,
    Webhook,
    HelpCircle,
    PhoneCall,
    Calendar,
    CheckCircle2,
    ArrowRight
};

interface NavIconProps {
    name: string;
    size?: number;
    className?: string;
}

export function NavIcon({ name, size = 18, className = "" }: NavIconProps) {
    const IconComponent = ICON_MAP[name] || Sparkles;
    return <IconComponent size={size} className={className} />;
}
