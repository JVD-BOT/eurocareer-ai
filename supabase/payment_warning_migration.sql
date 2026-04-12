-- ============================================================
-- EuroCareer AI — Payment Warning Migration
-- Run this in the Supabase SQL Editor AFTER stripe_migration.sql
-- ============================================================

-- Add payment_warning flag to profiles
alter table public.profiles
  add column if not exists payment_warning boolean default false not null;
