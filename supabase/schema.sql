-- ============================================================
-- EuroCareer AI — Applications Table
-- Run this in the Supabase SQL Editor
-- ============================================================

create table if not exists public.applications (
  id                uuid        default gen_random_uuid() primary key,
  user_id           uuid        references auth.users(id) on delete cascade not null,
  company_name      text        not null,
  role_title        text        not null,
  country           text,
  city              text,
  job_url           text,
  job_description   text,
  salary_range      text,
  visa_sponsorship  boolean     default false not null,
  notes             text,
  status            text        not null default 'researching'
                                check (status in ('researching','applied','responded','interview','offer','rejected')),
  applied_date      date,
  follow_up_date    date,
  created_at        timestamptz default now() not null,
  updated_at        timestamptz default now() not null
);

-- ── Row Level Security ────────────────────────────────────────
alter table public.applications enable row level security;

create policy "select_own_applications"
  on public.applications for select
  using (auth.uid() = user_id);

create policy "insert_own_applications"
  on public.applications for insert
  with check (auth.uid() = user_id);

create policy "update_own_applications"
  on public.applications for update
  using (auth.uid() = user_id);

create policy "delete_own_applications"
  on public.applications for delete
  using (auth.uid() = user_id);

-- ── Auto-update updated_at ────────────────────────────────────
create or replace function update_updated_at_column()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger update_applications_updated_at
  before update on public.applications
  for each row execute function update_updated_at_column();
