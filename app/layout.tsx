import type { Metadata } from "next";
import Script from 'next/script';
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
          <html lang="en">
                <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">{`
                        window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                        gtag('js', new Date());
                                                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                                                      `}</Script>
                <body className={inter.className}>
                  {children}
                        <Toaster position="bottom-right" richColors />
                        <CookieBanner />
                </body>
          </html>
          );
}
