"use client";

import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import type { Application, Profile } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { UpgradeModal } from "@/components/ai/upgrade-modal";
import { Copy, Wand2 } from "lucide-react";

type EmailType = "follow_up" | "thank_you" | "rejection_response";

interface FollowUpEmailProps {
  application: Application;
  profile: Profile | null;
  onCreditUsed: () => void;
}

const EMAIL_TYPES: { id: EmailType; label: string; emoji: string }[] = [
  { id: "follow_up", label: "Follow-up", emoji: "📨" },
  { id: "thank_you", label: "Thank you", emoji: "🙏" },
  { id: "rejection_response", label: "Rejection response", emoji: "💪" },
];

export function FollowUpEmail({ application, onCreditUsed }: FollowUpEmailProps) {
  const [emailType, setEmailType] = useState<EmailType>("follow_up");
  const [result, setResult] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);

  const generate = async () => {
    setStreaming(true);
    setResult("");

    try {
      const { data: { session } } = await supabase.auth.getSession();

      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "follow_up_email",
          applicationId: application.id,
          accessToken: session?.access_token,
          emailType,
        }),
      });

      if (response.status === 403) {
        const data = await response.json();
        if (data.upgrade) setShowUpgrade(true);
        setStreaming(false);
        return;
      }

      if (!response.ok) {
        const errBody = await response.text().catch(() => "(no body)");
        console.error("[FollowUpEmail] generation failed", response.status, errBody);
        toast.error(`Generation failed (${response.status}). Check console.`);
        setStreaming(false);
        return;
      }

      const data = await response.json();
      setResult(data.content);
      onCreditUsed();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }

    setStreaming(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="space-y-3">
      {/* Email type selector */}
      <div className="space-y-1.5">
        <p className="text-xs font-medium">Email Type</p>
        <div className="flex flex-col gap-1.5">
          {EMAIL_TYPES.map((t) => (
            <button
              key={t.id}
              onClick={() => setEmailType(t.id)}
              className={`flex items-center gap-2 text-xs py-2 px-3 rounded-lg border font-medium transition-colors text-left ${
                emailType === t.id
                  ? "bg-blue-50 text-blue-700 border-blue-300"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              }`}
            >
              <span>{t.emoji}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <Button
        onClick={generate}
        disabled={streaming}
        className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white gap-2 h-9"
        size="sm"
      >
        <Wand2 className="h-3.5 w-3.5" />
        {streaming ? "Generating…" : "Generate Email"}
      </Button>

      {/* Result */}
      {(streaming || result) && (
        <div className="space-y-2">
          {streaming && !result && (
            <div className="space-y-2 animate-pulse">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-3 bg-gray-200 rounded" style={{ width: `${88 - i * 8}%` }} />
              ))}
            </div>
          )}
          {result && (
            <>
              <div className="bg-gray-50 border rounded-lg p-3">
                <pre className="text-xs whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                  {result}
                </pre>
              </div>
              {!streaming && (
                <Button variant="outline" size="sm" className="gap-1.5 text-xs w-full" onClick={handleCopy}>
                  <Copy className="h-3 w-3" /> Copy to Clipboard
                </Button>
              )}
            </>
          )}
        </div>
      )}

      <UpgradeModal open={showUpgrade} onClose={() => setShowUpgrade(false)} />
    </div>
  );
}
