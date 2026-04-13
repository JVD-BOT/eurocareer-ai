import type { Metadata, Viewport } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { CookieBanner } from "@/components/cookie-banner";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "CV Adapter for Europe | EuroCareerAI",
    template: "%s | EuroCareerAI",
  },
  description: "EuroCareerAI adapts your CV for Germany, Netherlands, France, Sweden, UK, Spain and 6 more EU markets in seconds. Free to start, no credit card needed.",
  metadataBase: new URL("https://eurocareerai.com"),
  icons: { icon: "/STAR.png" },
  openGraph: {
    title: "CV Adapter for Europe | EuroCareerAI",
    description: "Adapt your CV for any EU country in seconds. Covers Germany, Netherlands, France, Sweden, UK, Spain, and 6 more markets.",
    url: "https://eurocareerai.com",
    siteName: "EuroCareerAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EuroCareerAI — CV Adapter for Europe",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV Adapter for Europe | EuroCareerAI",
    description: "Adapt your CV for any EU country in seconds.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://eurocareerai.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "EuroCareerAI",
  url: "https://eurocareerai.com",
  description: "AI-powered CV adapter and job application tool for the European job market. Supports Germany, Netherlands, France, Sweden, UK, Spain, Ireland, Denmark, Belgium, Austria, Switzerland, and Italy.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "EUR", name: "Free plan" },
    { "@type": "Offer", price: "9", priceCurrency: "EUR", name: "Pro plan", billingIncrement: "P1M" },
  ],
  featureList: [
    "AI CV Adapter for 12 EU countries",
    "Cover letter generator",
    "Application tracker",
    "Country intelligence guides",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={manrope.className}>
        <GoogleAnalytics />
        {children}
        <Toaster position="bottom-right" richColors />
        <CookieBanner />
      </body>
    </html>
  );
}
