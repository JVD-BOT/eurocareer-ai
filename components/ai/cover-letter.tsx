"use client";

import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import type { Application, Profile } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UpgradeModal } from "@/components/ai/upgrade-modal";
import { Copy, Save, Wand2, RefreshCw } from "lucide-react";

type Tone = "formal" | "warm" | "casual";

interface CoverLetterProps {
  application: Application;
  profile: Profile | null;
  onUpdate: (updated: Application) => void;
  onCreditUsed: () => void;
}

export function CoverLetter({ application, profile, onUpdate, onCreditUsed }: CoverLetterProps) {
  const [tone, setTone] = useState<Tone>("formal");
  const [languages, setLanguages] = useState(profile?.languages ?? "");
  const [nationality, setNationality] = useState(profile?.nationality ?? "");
  const [workAuth, setWorkAuth] = useState(profile?.work_authorization ?? "");
  const [feedback, setFeedback] = useState("");
  const [result, setResult] = useState(application.generated_cover_letter ?? "");
  const [streaming, setStreaming] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [saving, setSaving] = useState(false);

  const generate = async (withFeedback = false) => {
    setStreaming(true);
    if (!withFeedback) setResult("");

    try {
      const { data: { session } } = await supabase.auth.getSession();

      // Save profile fields
      await supabase.from("profiles").upsert({
        id: session!.user.id,
        languages,
        nationality,
        work_authorization: workAuth,
        resume_text: profile?.resume_text ?? "",
      });

      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "cover_letter",
          applicationId: application.id,
          accessToken: session?.access_token,
          resumeText: profile?.resume_text ?? "",
          tone,
          languages,
          nationality,
          workAuthorization: workAuth,
          feedback: withFeedback ? feedback : "",
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
        console.error("[CoverLetter] generation failed", response.status, errBody);
        toast.error(`Generation failed (${response.status}). Check console.`);
        setStreaming(false);
        return;
      }

      const data = await response.json();
      setResult(data.content);
      setFeedback("");
      onCreditUsed();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }

    setStreaming(false);
  };

  const handleSave = async () => {
    setSaving(true);
    const { data } = await supabase
      .from("applications")
      .update({ generated_cover_letter: result })
      .eq("id", application.id)
      .select()
      .single();
    if (data) {
      onUpdate(data as Application);
      toast.success("Cover letter saved.");
    }
    setSaving(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    toast.success("Copied to clipboard!");
  };

  const TONES: { id: Tone; label: string }[] = [
    { id: "formal", label: "Formal" },
    { id: "warm", label: "Warm" },
    { id: "casual", label: "Casual" },
  ];

  return (
    <div className="space-y-3">
      {/* Tone selector */}
      <div className="space-y-1.5">
        <Label className="text-xs">Tone</Label>
        <div className="flex gap-1.5">
          {TONES.map((t) => (
            <button
              key={t.id}
              onClick={() => setTone(t.id)}
              className={`flex-1 text-xs py-1.5 px-2 rounded-md border font-medium transition-colors ${
                tone === t.id
                  ? "bg-[#1d4ed8] text-white border-[#1d4ed8]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Profile fields */}
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <Label className="text-xs">Nationality</Label>
          <Input
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            placeholder="e.g. Spanish"
            className="h-8 text-xs"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">Work Auth.</Label>
          <Input
            value={workAuth}
            onChange={(e) => setWorkAuth(e.target.value)}
            placeholder="EU Citizen / Blue Card"
            className="h-8 text-xs"
          />
        </div>
        <div className="col-span-2 space-y-1">
          <Label className="text-xs">Languages (comma separated)</Label>
          <Input
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
            placeholder="English (C2), German (B2), French (A2)"
            className="h-8 text-xs"
          />
        </div>
      </div>

      <Button
        onClick={() => generate(false)}
        disabled={streaming}
        className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white gap-2 h-9"
        size="sm"
      >
        <Wand2 className="h-3.5 w-3.5" />
        {streaming && !feedback ? "Generating…" : "Generate Cover Letter"}
      </Button>

      {/* Streaming result */}
      {(streaming || result) && (
        <div className="space-y-2">
          {streaming && !result && (
            <div className="space-y-2 animate-pulse">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-3 bg-gray-200 rounded" style={{ width: `${90 - i * 5}%` }} />
              ))}
            </div>
          )}
          {result && (
            <>
              <div className="bg-gray-50 border rounded-lg p-3 max-h-72 overflow-y-auto">
                <pre className="text-xs whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                  {result}
                </pre>
              </div>

              {!streaming && (
                <>
                  {/* Regenerate with feedback */}
                  <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Feedback for regeneration</Label>
                    <div className="flex gap-2">
                      <Input
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder='e.g. "Make it more concise" or "Emphasise Python skills"'
                        className="h-8 text-xs flex-1"
                        onKeyDown={(e) => e.key === "Enter" && feedback && generate(true)}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1 text-xs h-8 shrink-0"
                        onClick={() => generate(true)}
                        disabled={!feedback || streaming}
                      >
                        <RefreshCw className="h-3 w-3" />
                        Regen
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1.5 text-xs flex-1" onClick={handleCopy}>
                      <Copy className="h-3 w-3" /> Copy
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1.5 text-xs flex-1" onClick={handleSave} disabled={saving}>
                      <Save className="h-3 w-3" /> {saving ? "Saving…" : "Save"}
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}

      <UpgradeModal open={showUpgrade} onClose={() => setShowUpgrade(false)} />
    </div>
  );
}
