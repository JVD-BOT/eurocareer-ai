"use client";

import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { COUNTRIES } from "@/lib/constants";
import type { Application, Profile } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UpgradeModal } from "@/components/ai/upgrade-modal";
import { Copy, Save, Wand2 } from "lucide-react";

interface CVAdapterProps {
  application: Application;
  profile: Profile | null;
  onUpdate: (updated: Application) => void;
  onCreditUsed: () => void;
}

export function CVAdapter({ application, profile, onUpdate, onCreditUsed }: CVAdapterProps) {
  const [country, setCountry] = useState(application.country ?? "GB");
  const [resumeText, setResumeText] = useState(profile?.resume_text ?? "");
  const [result, setResult] = useState(application.generated_cv ?? "");
  const [streaming, setStreaming] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [saving, setSaving] = useState(false);

  const generate = async () => {
    if (!resumeText.trim()) {
      toast.error("Please paste your resume first.");
      return;
    }

    setStreaming(true);
    setResult("");

    try {
      const { data: { session } } = await supabase.auth.getSession();

      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "cv_adapter",
          applicationId: application.id,
          accessToken: session?.access_token,
          resumeText,
          country,
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
        console.error("[CVAdapter] generation failed", response.status, errBody);
        toast.error(`Generation failed (${response.status}). Check console.`);
        setStreaming(false);
        return;
      }

      const data = await response.json();
      setResult(data.content);
      // Save resume text to profile
      await supabase.from("profiles").upsert({ id: session!.user.id, resume_text: resumeText });
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
      .update({ generated_cv: result })
      .eq("id", application.id)
      .select()
      .single();
    if (data) {
      onUpdate(data as Application);
      toast.success("CV saved to application.");
    }
    setSaving(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="space-y-3">
      {/* Country selector */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label className="text-xs">Target Country</Label>
          <Select value={country} onValueChange={setCountry}>
            <SelectTrigger className="h-9 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {COUNTRIES.map((c) => (
                <SelectItem key={c.code} value={c.code}>
                  {c.flag} {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Resume input */}
      <div className="space-y-1.5">
        <Label className="text-xs">Your Resume / CV</Label>
        <Textarea
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          placeholder="Paste your current resume or CV here. It will be saved to your profile automatically."
          rows={5}
          className="text-xs resize-none"
        />
      </div>

      <Button
        onClick={generate}
        disabled={streaming}
        className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white gap-2 h-9"
        size="sm"
      >
        <Wand2 className="h-3.5 w-3.5" />
        {streaming ? "Adapting CV…" : "Adapt My CV"}
      </Button>

      {/* Streaming result */}
      {(streaming || result) && (
        <div className="space-y-2">
          {streaming && !result && (
            <div className="space-y-2 animate-pulse">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-3 bg-gray-200 rounded" style={{ width: `${85 - i * 10}%` }} />
              ))}
            </div>
          )}
          {result && (
            <>
              <div className="bg-gray-50 border rounded-lg p-3 max-h-64 overflow-y-auto">
                <pre className="text-xs whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                  {result}
                </pre>
              </div>
              {!streaming && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1.5 text-xs flex-1" onClick={handleCopy}>
                    <Copy className="h-3 w-3" /> Copy
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5 text-xs flex-1" onClick={handleSave} disabled={saving}>
                    <Save className="h-3 w-3" /> {saving ? "Saving…" : "Save"}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      )}

      <UpgradeModal open={showUpgrade} onClose={() => setShowUpgrade(false)} />
    </div>
  );
}
