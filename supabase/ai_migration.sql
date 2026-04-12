-- ============================================================
-- EuroCareer AI — AI Features Migration
-- Run this in the Supabase SQL Editor AFTER schema.sql
-- ============================================================

-- ── Profiles table ───────────────────────────────────────────
-- NOTE: CREATE TABLE IF NOT EXISTS is a no-op if the table already exists
-- (e.g. created via Supabase UI or auth trigger). The ALTER TABLE statements
-- below ensure every required column exists regardless.
create table if not exists public.profiles (
  id                  uuid references auth.users(id) on delete cascade primary key,
  resume_text         text,
  languages           text,
  nationality         text,
  work_authorization  text,
  plan                text default 'free' not null check (plan in ('free', 'pro')),
  ai_credits_used     integer default 0 not null,
  ai_credits_month    text default '' not null,
  created_at          timestamptz default now() not null,
  updated_at          timestamptz default now() not null
);

-- Defensive: ensure columns exist if the table was created by another mechanism
alter table public.profiles add column if not exists resume_text text;
alter table public.profiles add column if not exists languages text;
alter table public.profiles add column if not exists nationality text;
alter table public.profiles add column if not exists work_authorization text;
alter table public.profiles add column if not exists plan text default 'free';
alter table public.profiles add column if not exists ai_credits_used integer default 0;
alter table public.profiles add column if not exists ai_credits_month text default '';
alter table public.profiles add column if not exists created_at timestamptz default now();
alter table public.profiles add column if not exists updated_at timestamptz default now();

-- Backfill any NULL plan values and enforce NOT NULL
update public.profiles set plan = 'free' where plan is null;
alter table public.profiles alter column plan set default 'free';
alter table public.profiles alter column plan set not null;

alter table public.profiles enable row level security;

create policy "users_own_profile"
  on public.profiles for all
  using (auth.uid() = id)
  with check (auth.uid() = id);

create trigger update_profiles_updated_at
  before update on public.profiles
  for each row execute function update_updated_at_column();

-- ── AI Generations table ─────────────────────────────────────
create table if not exists public.ai_generations (
  id              uuid default gen_random_uuid() primary key,
  user_id         uuid references auth.users(id) on delete cascade not null,
  application_id  uuid references public.applications(id) on delete set null,
  type            text not null check (type in ('cv_adapter', 'cover_letter', 'follow_up_email')),
  input_tokens    integer,
  output_tokens   integer,
  created_at      timestamptz default now() not null
);

alter table public.ai_generations enable row level security;

create policy "users_own_generations"
  on public.ai_generations for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ── Add AI output columns to applications ────────────────────
alter table public.applications add column if not exists generated_cv text;
alter table public.applications add column if not exists generated_cover_letter text;
