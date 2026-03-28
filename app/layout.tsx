import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { CookieBanner } from "@/components/cookie-banner";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

const outfit = Outfit({
        subsets: ["latin"],
        variable: "--font-outfit",
        display: "swap",
});

const dmSans = DM_Sans({
        subsets: ["latin"],
        variable: "--font-dm-sans",
        display: "swap",
});

export const metadata: Metadata = {
        title: "EuroCareer AI",
        description: "AI-powered European career platform",
};

export default function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        return (
                  <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
                              <body className={dmSans.className}>
                                            <GoogleAnalytics />
                                    {children}
                                            <Toaster position="bottom-right" richColors />
                                            <CookieBanner />
                              </body>
                  </html>
                );
}
