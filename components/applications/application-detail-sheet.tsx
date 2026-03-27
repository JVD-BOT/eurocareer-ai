"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { COUNTRIES, COLUMNS } from "@/lib/constants";
import type { Application, Profile, FREE_AI_LIMIT } from "@/lib/types";
import { FREE_AI_LIMIT as LIMIT } from "@/lib/types";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { CVAdapter } from "@/components/ai/cv-adapter";
import { CoverLetter } from "@/components/ai/cover-letter";
import { FollowUpEmail } from "@/components/ai/follow-up-email";
import { ExternalLink, Trash2, ChevronDown, ChevronRight } from "lucide-react";

interface ApplicationDetailSheetProps {
  application: Application | null;
  open: boolean;
  onClose: () => void;
  onUpdate: (updated: Application) => void;
  onDelete: (id: string) => void;
  userId?: string;
}

function AISection({
  emoji,
  title,
  description,
  children,
}: {
  emoji: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="rounded-xl border overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
        onClick={() => setExpanded((e) => !e)}
      >
        <div className="flex items-center gap-2.5">
          <span className="text-lg">{emoji}</span>
          <div>
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
        {expanded ? (
          <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
        ) : (
          <ChevronRight className="h-4 w-4 text-gray-400 shrink-0" />
        )}
      </button>
      {expanded && <div className="px-4 pb-4 border-t bg-gray-50/50">{children}</div>}
    </div>
  );
}

export function ApplicationDetailSheet({
  application,
  open,
  onClose,
  onUpdate,
  onDelete,
  userId,
}: ApplicationDetailSheetProps) {
  const [form, setForm] = useState<Partial<Application>>({});
  const [isDirty, setIsDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (application) {
      setForm({ ...application });
      setIsDirty(false);
      setConfirmDelete(false);
      setError("");
    }
  }, [application]);

  useEffect(() => {
    if (open) fetchProfile();
  }, [open]);

  const fetchProfile = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;
    const { data } = await supabase.from("profiles").select("*").eq("id", session.user.id).maybeSingle();
    setProfile(data as Profile | null);
  };

  const update = (field: keyof Application, value: unknown) => {
    setForm((f) => ({ ...f, [field]: value }));
    setIsDirty(true);
  };

  const handleSave = async () => {
    if (!application) return;
    setSaving(true);
    setError("");

    const { data, error } = await supabase
      .from("applications")
      .update({
        company_name: form.company_name,
        role_title: form.role_title,
        country: form.country || null,
        city: form.city || null,
        job_url: form.job_url || null,
        job_description: form.job_description || null,
        salary_range: form.salary_range || null,
        visa_sponsorship: form.visa_sponsorship,
        notes: form.notes || null,
        status: form.status,
        applied_date: form.applied_date || null,
        follow_up_date: form.follow_up_date || null,
      })
      .eq("id", application.id)
      .select()
      .single();

    if (error) {
      setError(error.message);
    } else {
      onUpdate(data as Application);
      setIsDirty(false);
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!application) return;
    setDeleting(true);
    const { error } = await supabase.from("applications").delete().eq("id", application.id);
    if (error) {
      setError(error.message);
      setDeleting(false);
    } else {
      onDelete(application.id);
      onClose();
    }
  };

  // Usage meter
  const creditsUsed = profile?.ai_credits_used ?? 0;
  const isPro = profile?.plan === "pro";
  const creditPct = isPro ? 100 : Math.min((creditsUsed / LIMIT) * 100, 100);

  if (!application) return null;
  const country = COUNTRIES.find((c) => c.code === form.country);
  const statusConfig = COLUMNS.find((c) => c.id === form.status);

  return (
    <Sheet open={open} onOpenChange={(o) => !o && onClose()}>
      <SheetContent className="flex flex-col gap-0 p-0 w-full sm:max-w-xl">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2 text-base pr-6">
              {country && <span className="text-xl">{country.flag}</span>}
              <span className="truncate">{form.company_name}</span>
            </SheetTitle>
            <p className="text-sm text-muted-foreground truncate">{form.role_title}</p>
          </SheetHeader>
          <div className="flex items-center justify-between mt-3">
            {statusConfig && (
              <div className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${statusConfig.dotColor}`} />
                <span className={`text-xs font-semibold ${statusConfig.headerText}`}>
                  {statusConfig.label}
                </span>
              </div>
            )}
            {/* Usage meter */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${isPro ? "bg-green-500" : creditsUsed >= LIMIT ? "bg-red-500" : "bg-blue-500"}`}
                  style={{ width: `${creditPct}%` }}
                />
              </div>
              <span>{isPro ? "Pro ∞" : `${creditsUsed}/${LIMIT} AI credits`}</span>
            </div>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-3 py-2 rounded-md">
              {error}
            </div>
          )}

          {/* Core fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 space-y-1.5">
              <Label>Company</Label>
              <Input value={form.company_name || ""} onChange={(e) => update("company_name", e.target.value)} />
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label>Role Title</Label>
              <Input value={form.role_title || ""} onChange={(e) => update("role_title", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Status</Label>
              <Select value={form.status || ""} onValueChange={(v) => update("status", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {COLUMNS.map((col) => (
                    <SelectItem key={col.id} value={col.id}>{col.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Country</Label>
              <Select value={form.country || ""} onValueChange={(v) => update("country", v)}>
                <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((c) => (
                    <SelectItem key={c.code} value={c.code}>{c.flag} {c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>City</Label>
              <Input value={form.city || ""} onChange={(e) => update("city", e.target.value)} placeholder="e.g. Berlin" />
            </div>
            <div className="space-y-1.5">
              <Label>Salary Range</Label>
              <Input value={form.salary_range || ""} onChange={(e) => update("salary_range", e.target.value)} placeholder="€70k – €90k" />
            </div>
            <div className="space-y-1.5">
              <Label>Date Applied</Label>
              <Input type="date" value={form.applied_date || ""} onChange={(e) => update("applied_date", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Follow-up Date</Label>
              <Input type="date" value={form.follow_up_date || ""} onChange={(e) => update("follow_up_date", e.target.value)} />
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label>Job URL</Label>
              <div className="flex gap-2">
                <Input value={form.job_url || ""} onChange={(e) => update("job_url", e.target.value)} placeholder="https://…" className="flex-1" />
                {form.job_url && (
                  <Button variant="outline" size="icon" asChild>
                    <a href={form.job_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="text-sm font-medium">Visa Sponsorship</p>
                <p className="text-xs text-muted-foreground">Company sponsors work visas</p>
              </div>
              <Switch checked={form.visa_sponsorship || false} onCheckedChange={(v) => update("visa_sponsorship", v)} />
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label>Notes</Label>
              <Textarea value={form.notes || ""} onChange={(e) => update("notes", e.target.value)} placeholder="Your notes…" rows={3} />
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label>Job Description</Label>
              <Textarea value={form.job_description || ""} onChange={(e) => update("job_description", e.target.value)} placeholder="Paste the job description…" rows={4} />
            </div>
          </div>

          {isDirty && (
            <Button onClick={handleSave} disabled={saving} className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white">
              {saving ? "Saving…" : "Save changes"}
            </Button>
          )}

          <Separator />

          {/* ── AI Sections ── */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">AI Tools</p>

            <AISection emoji="📄" title="AI CV Adapter" description="Tailor your CV to this role and country">
              <div className="pt-3">
                <CVAdapter
                  application={{ ...application, ...form } as Application}
                  profile={profile}
                  onUpdate={(updated) => { onUpdate(updated); }}
                  onCreditUsed={fetchProfile}
                />
              </div>
            </AISection>

            <AISection emoji="💌" title="AI Cover Letter" description="Generate a tailored cover letter in seconds">
              <div className="pt-3">
                <CoverLetter
                  application={{ ...application, ...form } as Application}
                  profile={profile}
                  onUpdate={(updated) => { onUpdate(updated); }}
                  onCreditUsed={fetchProfile}
                />
              </div>
            </AISection>

            <AISection emoji="📧" title="Follow-up Email" description="Follow-up, thank you, or rejection response">
              <div className="pt-3">
                <FollowUpEmail
                  application={{ ...application, ...form } as Application}
                  profile={profile}
                  onCreditUsed={fetchProfile}
                />
              </div>
            </AISection>
          </div>

          <Separator />

          {/* Delete */}
          {!confirmDelete ? (
            <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50" onClick={() => setConfirmDelete(true)}>
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Application
            </Button>
          ) : (
            <div className="space-y-2">
              <p className="text-sm text-center text-gray-700">
                Delete <strong>{form.company_name}</strong>? This can&apos;t be undone.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" onClick={() => setConfirmDelete(false)} disabled={deleting}>Cancel</Button>
                <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white" onClick={handleDelete} disabled={deleting}>
                  {deleting ? "Deleting…" : "Yes, Delete"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
