-- Atomic free-tier AI credit check + increment.
-- Replaces the previous read-check-increment pattern in app/api/ai/generate/route.ts.
-- Closes the TOCTOU race that allowed concurrent requests to over-spend free credits.
-- Folds monthly reset, limit check, and increment into a single transaction with row lock.

CREATE OR REPLACE FUNCTION increment_ai_credits(
  p_user_id UUID,
  p_month TEXT,
  p_limit INT
) RETURNS TABLE (credits_used INT, limit_reached BOOLEAN)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_current_month TEXT;
  v_credits INT;
BEGIN
  -- Lock the profile row for atomic read-modify-write.
  SELECT ai_credits_month, ai_credits_used
  INTO v_current_month, v_credits
  FROM profiles
  WHERE id = p_user_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'profile not found: %', p_user_id;
  END IF;

  -- Lazy monthly reset.
  IF v_current_month IS DISTINCT FROM p_month THEN
    v_credits := 0;
  END IF;

  -- Limit check.
  IF v_credits >= p_limit THEN
    UPDATE profiles
    SET ai_credits_used = v_credits, ai_credits_month = p_month
    WHERE id = p_user_id;

    RETURN QUERY SELECT v_credits, TRUE;
    RETURN;
  END IF;

  -- Increment and persist.
  v_credits := v_credits + 1;
  UPDATE profiles
  SET ai_credits_used = v_credits, ai_credits_month = p_month
  WHERE id = p_user_id;

  RETURN QUERY SELECT v_credits, FALSE;
END;
$$;

REVOKE ALL ON FUNCTION increment_ai_credits(UUID, TEXT, INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION increment_ai_credits(UUID, TEXT, INT) TO service_role;
