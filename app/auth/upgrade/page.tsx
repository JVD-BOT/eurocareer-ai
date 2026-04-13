"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function UpgradePage() {
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    const run = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.replace("/auth/login?redirect=/auth/upgrade");
        return;
      }

      try {
        const res = await fetch("/api/stripe/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ accessToken: session.access_token }),
        });
        const data = await res.json();
        if (data.url) {
          window.location.href = data.url;
          return;
        }
        setError(data.error ?? "Failed to start checkout.");
      } catch {
        setError("Failed to start checkout.");
      }
    };
    run();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4 px-6">
        {!error && (
          <div className="mx-auto w-12 h-12 rounded-full border-4 border-[#6366F1] border-t-transparent animate-spin" />
        )}
        <p className="text-sm text-muted-foreground">
          {error ? error : "Redirecting to Stripe checkout\u2026"}
        </p>
        {error && (
          <button
            onClick={() => router.replace("/dashboard")}
            className="text-sm font-semibold text-[#6366F1] hover:underline"
          >
            Go to dashboard
          </button>
        )}
      </div>
    </div>
  );
}
