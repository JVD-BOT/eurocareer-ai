"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import type { Profile } from "@/lib/types";
import { FREE_AI_LIMIT } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Save, User, FileText, Zap } from "lucide-react";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export default function ProfilePage() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [resumeText, setResumeText] = useState("");
  const [languages, setLanguages] = useState("");
  const [nationality, setNationality] = useState("");
  const [workAuth, setWorkAuth] = useState("");
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace("/auth/login");
        return;
      }
      setUser(session.user);
      loadProfile(session.user.id);
    });
  }, [router]);

  const loadProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();
    if (error) {
      console.error("Failed to load profile:", error.message);
      toast.error("Failed to load profile. Please refresh.");
    }
    if (data) {
      setProfile(data as Profile);
      setResumeText(data.resume_text ?? "");
      setLanguages(data.languages ?? "");
      setNationality(data.nationality ?? "");
      setWorkAuth(data.work_authorization ?? "");
    }
    setLoading(false);
  };

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      resume_text: resumeText,
      languages,
      nationality,
      work_authorization: workAuth,
    });
    if (error) {
      toast.error("Failed to save profile.");
    } else {
      toast.success("Profile saved.");
      loadProfile(user.id);
    }
    setSaving(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace("/auth/login");
  };

  const creditsUsed = profile?.ai_credits_used ?? 0;
  const isPro = profile?.plan === "pro";
  const creditPct = isPro ? 100 : Math.min((creditsUsed / FREE_AI_LIMIT) * 100, 100);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#F8F8F6" }}>
        <div className="flex flex-col items-center gap-3">
          <Image src="/STAR.png" alt="" width={40} height={40} className="animate-slow-spin opacity-40" />
          <p className="text-sm" style={{ color: "#7A7F94" }}>Loading…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nav */}
      <nav className="bg-white border-b px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" aria-label="Go to dashboard" className="text-blue-600 font-bold text-lg">
            <Image src="/LOGO_NEW.png" alt="EuroCareer AI" width={140} height={32} className="h-8 w-auto" />
          </Link>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <Link href="/applications" className="text-muted-foreground hover:text-gray-900 transition-colors">
              Applications
            </Link>
            <span className="font-semibold text-gray-900">Profile</span>
            <Link href="/settings/billing" className="text-muted-foreground hover:text-gray-900 transition-colors">
              Billing
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground hidden sm:block">{user?.email}</span>
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            Sign out
          </Button>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-10 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Your details are used to personalise AI-generated CVs and cover letters.
          </p>
        </div>

        {/* Plan & credits */}
        <div className="bg-white rounded-xl border p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-blue-600" />
            <h2 className="text-sm font-semibold">Plan & AI Credits</h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                {isPro ? (
                  <span className="text-green-600 font-medium">Pro plan — unlimited AI generations</span>
                ) : (
                  <>Free plan — <strong>{creditsUsed}/{FREE_AI_LIMIT}</strong> AI credits used this month</>
                )}
              </p>
              <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    isPro ? "bg-green-500" : creditsUsed >= FREE_AI_LIMIT ? "bg-red-500" : "bg-blue-500"
                  }`}
                  style={{ width: `${creditPct}%` }}
                />
              </div>
            </div>
            {/* Fix: added Link wrapper so button navigates to billing page */}
            {!isPro && (
              <Link href="/settings/billing">
                <Button size="sm" className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs">
                  Upgrade to Pro — €9/mo
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Personal info */}
        <div className="bg-white rounded-xl border p-5 space-y-4">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-blue-600" />
            <h2 className="text-sm font-semibold">Personal Info</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs">Nationality</Label>
              <Input
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                placeholder="e.g. Spanish"
                className="h-9 text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Work Authorisation</Label>
              <Input
                value={workAuth}
                onChange={(e) => setWorkAuth(e.target.value)}
                placeholder="EU Citizen / Blue Card"
                className="h-9 text-sm"
              />
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label className="text-xs">Languages (comma separated)</Label>
              <Input
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
                placeholder="English (C2), German (B2), French (A2)"
                className="h-9 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Resume */}
        <div className="bg-white rounded-xl border p-5 space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-blue-600" />
            <h2 className="text-sm font-semibold">Resume / CV</h2>
          </div>
          <p className="text-xs text-muted-foreground">
            Paste your current resume text. It will be used by the AI CV Adapter and Cover Letter generator.
          </p>
          <Textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder="Paste your full resume or CV here…"
            rows={12}
            className="text-sm resize-none"
          />
          {resumeText && (
            <p className="text-xs text-muted-foreground">{resumeText.length.toLocaleString()} characters</p>
          )}
        </div>

        <Separator />

        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            disabled={saving}
            className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white gap-2"
          >
            <Save className="h-4 w-4" />
            {saving ? "Saving…" : "Save Profile"}
          </Button>
        </div>
      </main>
    </div>
  );
}
