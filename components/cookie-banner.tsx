"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none">
      <div className="max-w-xl mx-auto bg-gray-900 text-white rounded-2xl shadow-2xl p-4 sm:p-5 pointer-events-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-gray-300 flex-1">
            We use strictly necessary cookies for authentication. No advertising or tracking cookies.{" "}
            <Link href="/privacy" className="text-indigo-400 hover:underline">
              Privacy Policy
            </Link>
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={decline}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white text-xs"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={accept}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
