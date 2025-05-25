// app/template.tsx

import type { Metadata } from "next";
import {GeistSans} from "geist/font";
import "./globals.css";
import ClientProviders from "./providers/ClientProviders";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Your App",
  description: "Your description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistSans.variable} antialiased bg-gray-900`}>
        <ClientProviders>
          {children}
          <Toaster/>
        </ClientProviders>
      </body>
    </html>
  );
}
