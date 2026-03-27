"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
    const [consented, setConsented] = useState(false);

    useEffect(() => {
          // Check if user already accepted consent in a previous session
          const stored = localStorage.getItem("cookie_consent");
          if (stored === "accepted") {
                  setConsented(true);
                }

          // Listen for consent being given in this session
          const handler = () => setConsented(true);
          window.addEventListener("cookie_consent_accepted", handler);
          return () => window.removeEventListener("cookie_consent_accepted", handler);
        }, []);

    if (!consented || !GA_ID) return null;

    return (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">{`
                    window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                            gtag('config', '${GA_ID}');
                                                  `}</Script>
          </>
        );
  }
