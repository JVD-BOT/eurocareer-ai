-- ============================================================
-- EuroCareer AI — Emails Sent Tracking Migration
-- Run this in the Supabase SQL Editor AFTER ai_migration.sql
-- ============================================================

-- Tracks which lifecycle emails have been sent to each profile.
-- Shape: {"welcome": "2026-04-13T...", "day2": "2026-04-15T...", "day7": "2026-04-20T..."}
alter table public.profiles
  add column if not exists emails_sent jsonb default '{}'::jsonb not null;
