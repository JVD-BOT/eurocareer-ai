-- ============================================================
-- EuroCareer AI — Stripe Migration
-- Run this in the Supabase SQL Editor AFTER ai_migration.sql
-- ============================================================

-- Add Stripe customer ID to profiles
alter table public.profiles
  add column if not exists stripe_customer_id text;

-- Index for webhook lookups by customer ID
create index if not exists profiles_stripe_customer_id_idx
  on public.profiles (stripe_customer_id);
