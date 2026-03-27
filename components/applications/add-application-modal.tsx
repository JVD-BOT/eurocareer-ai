"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { COUNTRIES } from "@/lib/constants";
import type { Application } from "@/lib/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

interface AddApplicationModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (app: Application) => void;
  userId: string;
}

const today = new Date().toISOString().split("T")[0];

const EMPTY_FORM = {
  company_name: "",
  role_title: "",
  country: "",
  city: "",
  job_url: "",
  job_description: "",
  salary_range: "",
  visa_sponsorship: false,
  notes: "",
  applied_date: today,
};

export function AddApplicationModal({ open, onClose, onAdd, userId }: AddApplicationModalProps) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (field: keyof typeof EMPTY_FORM, value: string | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  const reset = () => {
    setForm(EMPTY_FORM);
    setError("");
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("applications")
      .insert({
        user_id: userId,
        status: "researching",
        company_name: form.company_name.trim(),
        role_title: form.role_title.trim(),
        country: form.country || null,
        city: form.city.trim() || null,
        job_url: form.job_url.trim() || null,
        job_description: form.job_description.trim() || null,
        salary_range: form.salary_range.trim() || null,
        visa_sponsorship: form.visa_sponsorship,
        notes: form.notes.trim() || null,
        applied_date: form.applied_date || null,
      })
      .select()
      .single();

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      onAdd(data as Application);
      reset();
      onClose();
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Application</DialogTitle>
        </DialogHeader>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-3 py-2 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Company */}
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="am-company">
                Company <span className="text-red-500">*</span>
              </Label>
              <Input
                id="am-company"
                value={form.company_name}
                onChange={(e) => set("company_name", e.target.value)}
                placeholder="e.g. Spotify"
                required
              />
            </div>

            {/* Role */}
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="am-role">
                Role Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="am-role"
                value={form.role_title}
                onChange={(e) => set("role_title", e.target.value)}
                placeholder="e.g. Senior Product Manager"
                required
              />
            </div>

            {/* Country */}
            <div className="space-y-1.5">
              <Label>Country</Label>
              <Select value={form.country} onValueChange={(v) => set("country", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
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

            {/* City */}
            <div className="space-y-1.5">
              <Label htmlFor="am-city">City</Label>
              <Input
                id="am-city"
                value={form.city}
                onChange={(e) => set("city", e.target.value)}
                placeholder="e.g. Amsterdam"
              />
            </div>

            {/* Job URL */}
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="am-url">Job URL</Label>
              <Input
                id="am-url"
                type="url"
                value={form.job_url}
                onChange={(e) => set("job_url", e.target.value)}
                placeholder="https://..."
              />
            </div>

            {/* Salary */}
            <div className="space-y-1.5">
              <Label htmlFor="am-salary">Salary Range</Label>
              <Input
                id="am-salary"
                value={form.salary_range}
                onChange={(e) => set("salary_range", e.target.value)}
                placeholder="€70k – €90k"
              />
            </div>

            {/* Applied date */}
            <div className="space-y-1.5">
              <Label htmlFor="am-date">Date Applied</Label>
              <Input
                id="am-date"
                type="date"
                value={form.applied_date}
                onChange={(e) => set("applied_date", e.target.value)}
              />
            </div>

            {/* Visa sponsorship */}
            <div className="col-span-2 flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="text-sm font-medium">Visa Sponsorship</p>
                <p className="text-xs text-muted-foreground">Company sponsors work visas</p>
              </div>
              <Switch
                checked={form.visa_sponsorship}
                onCheckedChange={(v) => set("visa_sponsorship", v)}
              />
            </div>

            {/* Job description */}
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="am-jd">Job Description</Label>
              <Textarea
                id="am-jd"
                value={form.job_description}
                onChange={(e) => set("job_description", e.target.value)}
                placeholder="Paste the job description here…"
                rows={3}
              />
            </div>

            {/* Notes */}
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="am-notes">Notes</Label>
              <Textarea
                id="am-notes"
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
                placeholder="Your notes about this application…"
                rows={2}
              />
            </div>
          </div>

          <div className="flex gap-2 justify-end pt-1">
            <Button type="button" variant="outline" onClick={handleClose} disabled={loading}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white"
            >
              {loading ? "Adding…" : "Add Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
