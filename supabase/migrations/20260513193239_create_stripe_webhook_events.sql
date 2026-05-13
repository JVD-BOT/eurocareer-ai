-- Stripe webhook idempotency table.
-- Used by app/api/webhooks/stripe/route.ts to dedupe replayed events.
-- Service role only — no RLS policies needed; service role bypasses RLS.

CREATE TABLE IF NOT EXISTS stripe_webhook_events (
  id TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE stripe_webhook_events ENABLE ROW LEVEL SECURITY;
