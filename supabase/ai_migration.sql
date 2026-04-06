-- ============================================================
-- EuroCareer AI — AI Features Migration
-- Run this in the Supabase SQL Editor AFTER schema.sql
-- ============================================================

-- ── Profiles table ───────────────────────────────────────────
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

-- ── Auto-create profile on user signup ───────────────────────
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, plan, ai_credits_used, ai_credits_month)
  values (new.id, 'free', 0, to_char(now(), 'YYYY-MM'));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ── Performance indexes ──────────────────────────────────────
create index if not exists ai_generations_user_id_idx on public.ai_generations (user_id);
create index if not exists applications_user_id_idx on public.applications (user_id);
create index if not exists applications_status_idx on public.applications (status);
