import type { NextConfig } from "next";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const nextConfig: NextConfig = {
    env: {
        API_URL: process.env.API_URL || "http://localhost:8000/api",
    },
    async redirects() {
        return [
            {
                source: "/dashboard",
                destination: `${appUrl}/dashboard`,
                permanent: false,
            },
            {
                source: "/dashboard/:path*",
                destination: `${appUrl}/dashboard/:path*`,
                permanent: false,
            },
            {
                source: "/login",
                destination: `${appUrl}/login`,
                permanent: false,
            },
            {
                source: "/signin",
                destination: `${appUrl}/login`,
                permanent: false,
            },
            {
                source: "/register",
                destination: `${appUrl}/register`,
                permanent: false,
            },
            {
                source: "/signup",
                destination: `${appUrl}/register`,
                permanent: false,
            },
            {
                source: "/forgot-password",
                destination: `${appUrl}/forgot-password`,
                permanent: false,
            },
            {
                source: "/conversations/:path*",
                destination: `${appUrl}/conversations/:path*`,
                permanent: false,
            },
            {
                source: "/contacts/:path*",
                destination: `${appUrl}/contacts/:path*`,
                permanent: false,
            },
            {
                source: "/leads/:path*",
                destination: `${appUrl}/leads/:path*`,
                permanent: false,
            },
            {
                source: "/billing/:path*",
                destination: `${appUrl}/billing/:path*`,
                permanent: false,
            },
            {
                source: "/settings/:path*",
                destination: `${appUrl}/settings/:path*`,
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
