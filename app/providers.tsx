"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { CookieConsentProvider } from "@/components/cookie-consent/cookie-consent-context";
import { CookieBanner } from "@/components/cookie-consent/cookie-banner";
import { CookiePreferencesModal } from "@/components/cookie-consent/cookie-preferences-modal";
import { CookieSettingsButton } from "@/components/cookie-consent/cookie-settings-button";
import { ConsentScriptLoader } from "@/components/cookie-consent/consent-script-loader";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CookieConsentProvider>
          {children}
          <CookieBanner />
          <CookiePreferencesModal />
          <CookieSettingsButton />
          <ConsentScriptLoader />
          <Toaster />
        </CookieConsentProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

