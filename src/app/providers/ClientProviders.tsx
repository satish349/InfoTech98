// app/providers/ClientProviders.tsx
"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { LoadingProvider } from "./loading-provider";
import GlobalLoading from "@/components/global-loading";
import NavComponents from "@/components/ui/nav";// adjust path as needed
import FooterPages from "@/components/ui/footer";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <GlobalLoading />
      <SessionProvider>
        <NavComponents />
        <div className="pb-16"></div>
        {children}
        <FooterPages/>
      </SessionProvider>
    </LoadingProvider>
  );
}
