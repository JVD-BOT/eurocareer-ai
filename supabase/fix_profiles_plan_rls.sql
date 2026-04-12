-- ============================================================
-- EuroCareer AI — Fix profiles.plan column & RLS
-- Run this in the Supabase SQL Editor
-- ============================================================

-- 1. Ensure the plan column exists with proper constraints.
--    If the profiles table was created outside ai_migration.sql
--    (e.g. via Supabase UI or auth trigger), the CREATE TABLE
--    IF NOT EXISTS in ai_migration.sql would have been a no-op,
--    leaving the plan column missing or without defaults.
alter table public.profiles
  add column if not exists plan text;

-- 2. Backfill any NULL plan values to 'free'
update public.profiles
  set plan = 'free'
  where plan is null;

-- 3. Apply default and NOT NULL so future rows always get 'free'
alter table public.profiles
  alter column plan set default 'free';

alter table public.profiles
  alter column plan set not null;

-- 4. Ensure the check constraint exists (idempotent: drop if exists, then add)
alter table public.profiles
  drop constraint if exists profiles_plan_check;

alter table public.profiles
  add constraint profiles_plan_check check (plan in ('free', 'pro'));

-- 5. Re-create the RLS policy cleanly (idempotent)
--    The existing "users_own_profile" policy is correct but
--    we recreate it to guarantee it exists with the right shape.
drop policy if exists "users_own_profile" on public.profiles;

create policy "users_own_profile"
  on public.profiles for all
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- 6. Ensure RLS is enabled (idempotent)
alter table public.profiles enable row level security;

-- 7. Grant column-level SELECT to authenticated role.
--    This is the most likely cause of plan returning NULL:
--    new columns added via ALTER TABLE do not automatically
--    inherit table-level grants in all Supabase configurations.
grant select on public.profiles to authenticated;
grant update on public.profiles to authenticated;
grant insert on public.profiles to authenticated;
grant delete on public.profiles to authenticated;

-- Also grant to anon for the auth callback flow
grant select on public.profiles to anon;
