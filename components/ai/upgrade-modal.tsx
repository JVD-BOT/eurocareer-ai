"use client";

import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FREE_AI_LIMIT } from "@/lib/types";
import { CreditCard } from "lucide-react";

interface UpgradeModalProps {
  open: boolean;
  onClose: () => void;
}

export function UpgradeModal({ open, onClose }: UpgradeModalProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-sm text-center">
        <DialogHeader>
          <div className="mx-auto mb-3 text-4xl">⭐</div>
          <DialogTitle className="text-xl">You&apos;ve used all {FREE_AI_LIMIT} free AI credits</DialogTitle>
        </DialogHeader>

        <p className="text-sm text-muted-foreground mt-1 mb-6">
          Free accounts get <strong>{FREE_AI_LIMIT} AI generations per month</strong>. Upgrade to Pro
          for unlimited CV adaptations, cover letters, and follow-up emails.
        </p>

        <div className="rounded-xl border bg-gradient-to-br from-blue-50 to-indigo-50 p-5 mb-4">
          <p className="text-2xl font-bold text-gray-900 mb-1">€9 / month</p>
          <p className="text-sm text-blue-700 font-medium mb-3">EuroCareer AI Pro</p>
          <ul className="text-sm text-gray-700 space-y-1.5 text-left">
            {[
              "Unlimited AI CV adaptations",
              "Unlimited cover letters",
              "Unlimited follow-up emails",
              "Priority AI processing",
              "Early access to new features",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <Button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white h-11 font-semibold gap-2"
        >
          <CreditCard className="h-4 w-4" />
          {loading ? "Redirecting to checkout…" : "Go Pro — €9/month"}
        </Button>
        <button onClick={onClose} className="mt-3 text-sm text-muted-foreground hover:underline w-full">
          Maybe later
        </button>
      </DialogContent>
    </Dialog>
  );
}
