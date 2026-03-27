"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import type { Profile } from "@/lib/types";
import { FREE_AI_LIMIT } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Zap, CreditCard, CheckCircle2, XCircle } from "lucide-react";
import type { User } from "@supabase/supabase-js";

export default function BillingPage() {
  return (
    <Suspense>
      <BillingContent />
    </Suspense>
  );
}

function BillingContent() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [portalLoading, setPortalLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.replace("/auth/login"); return; }
      setUser(session.user);
      loadProfile(session.user.id);
    });
  }, [router]);

  useEffect(() => {
    if (searchParams.get("success") === "1") {
      toast.success("You're now on Pro! Enjoy unlimited AI generations.");
    }
    if (searchParams.get("canceled") === "1") {
      toast.info("Checkout canceled. You're still on the free plan.");
    }
  }, [searchParams]);

  const loadProfile = async (userId: string) => {
    const { data } = await supabase.from("profiles").select("*").eq("id", userId).maybeSingle();
    setProfile(data as Profile | null);
    setLoading(false);
  };

  const handleUpgrade = async () => {
    setCheckoutLoading(true);
    const { data: { session } } = await supabase.auth.getSession();
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessToken: session?.access_token }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      toast.error(data.error ?? "Failed to start checkout.");
      setCheckoutLoading(false);
    }
  };

  const handlePortal = async () => {
    setPortalLoading(true);
    const { data: { session } } = await supabase.auth.getSession();
    const res = await fetch("/api/stripe/portal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessToken: session?.access_token }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      toast.error(data.error ?? "Failed to open portal.");
      setPortalLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace("/auth/login");
  };

  const isPro = profile?.plan === "pro";
  const creditsUsed = profile?.ai_credits_used ?? 0;
  const creditPct = isPro ? 100 : Math.min((creditsUsed / FREE_AI_LIMIT) * 100, 100);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-10 h-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-blue-600 font-bold text-lg">★ EuroCareer AI</Link>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <Link href="/applications" className="text-muted-foreground hover:text-gray-900 transition-colors">Applications</Link>
            <Link href="/profile" className="text-muted-foreground hover:text-gray-900 transition-colors">Profile</Link>
            <span className="font-semibold text-gray-900">Billing</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground hidden sm:block">{user?.email}</span>
          <Button variant="outline" size="sm" onClick={handleSignOut}>Sign out</Button>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-10 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Billing</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your plan and AI usage.</p>
        </div>

        {/* Current plan */}
        <div className="bg-white rounded-xl border p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-600" />
              <h2 className="font-semibold text-sm">Current Plan</h2>
            </div>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              isPro ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
            }`}>
              {isPro ? "Pro" : "Free"}
            </span>
          </div>

          <Separator />

          {/* Usage meter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">AI generations this month</span>
              <span className="font-medium">{isPro ? "Unlimited" : `${creditsUsed} / ${FREE_AI_LIMIT}`}</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  isPro ? "bg-green-500" : creditsUsed >= FREE_AI_LIMIT ? "bg-red-500" : "bg-blue-500"
                }`}
                style={{ width: `${creditPct}%` }}
              />
            </div>
          </div>

          {/* Plan features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {[
              { label: "Application tracker", included: true },
              { label: `AI generations (${isPro ? "unlimited" : `${FREE_AI_LIMIT}/month`})`, included: true },
              { label: "CV adapter", included: true },
              { label: "Cover letter generator", included: true },
              { label: "Unlimited AI generations", included: isPro },
              { label: "Priority AI processing", included: isPro },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-sm">
                {f.included
                  ? <CheckCircle2 className="h-3.5 w-3.5 text-green-500 shrink-0" />
                  : <XCircle className="h-3.5 w-3.5 text-gray-300 shrink-0" />}
                <span className={f.included ? "text-gray-700" : "text-gray-400"}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action */}
        {!isPro ? (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6 space-y-4">
            <div>
              <p className="font-semibold text-gray-900">Upgrade to Pro</p>
              <p className="text-sm text-muted-foreground mt-1">
                Get unlimited AI CV adaptations, cover letters, and follow-up emails — €9/month.
              </p>
            </div>
            <Button
              onClick={handleUpgrade}
              disabled={checkoutLoading}
              className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white gap-2"
            >
              <CreditCard className="h-4 w-4" />
              {checkoutLoading ? "Redirecting…" : "Upgrade to Pro — €9/month"}
            </Button>
          </div>
        ) : (
          <div className="bg-white rounded-xl border p-6 space-y-4">
            <div>
              <p className="font-semibold text-gray-900">Manage subscription</p>
              <p className="text-sm text-muted-foreground mt-1">
                Update payment method, view invoices, or cancel your subscription.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={handlePortal}
              disabled={portalLoading}
              className="gap-2"
            >
              <CreditCard className="h-4 w-4" />
              {portalLoading ? "Opening portal…" : "Manage subscription"}
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
