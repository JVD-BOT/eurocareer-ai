import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig) {
    return new Response("Missing stripe-signature header", { status: 400 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-03-25.dahlia",
  });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    const e = err as { message: string };
    console.error("[Stripe webhook] signature verification failed:", e.message);
    return new Response(`Webhook error: ${e.message}`, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const customerId = session.customer as string | null;
        let userId = session.metadata?.supabase_user_id;

        // Fallback: look up user by stripe_customer_id if metadata is missing
        if (!userId && customerId) {
          const { data: existing } = await supabase
            .from("profiles")
            .select("id")
            .eq("stripe_customer_id", customerId)
            .maybeSingle();
          userId = existing?.id;
        }

        // Fallback: look up user by email if still not found
        if (!userId && session.customer_email) {
          const { data: authUser } = await supabase.auth.admin.listUsers();
          const match = authUser?.users?.find(
            (u: { email?: string }) => u.email === session.customer_email
          );
          userId = match?.id;
        }

        if (!userId) {
          console.error("[Stripe webhook] checkout.session.completed: could not resolve user. metadata:", session.metadata, "customer:", customerId, "email:", session.customer_email);
          return new Response("Could not resolve user", { status: 400 });
        }

        const { error: upsertError } = await supabase.from("profiles").upsert({
          id: userId,
          plan: "pro",
          stripe_customer_id: customerId ?? undefined,
        });

        if (upsertError) {
          console.error("[Stripe webhook] failed to update plan to pro:", upsertError.message);
          return new Response("Database update failed", { status: 500 });
        }

        console.log("[Stripe webhook] checkout.session.completed: set plan=pro for user", userId);
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;
        const plan = subscription.status === "active" ? "pro" : "free";
        const { error: subUpdateErr } = await supabase
          .from("profiles")
          .update({ plan })
          .eq("stripe_customer_id", customerId);
        if (subUpdateErr) console.error("[Stripe webhook] subscription.updated failed:", subUpdateErr.message);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;
        const { error: subDeleteErr } = await supabase
          .from("profiles")
          .update({ plan: "free" })
          .eq("stripe_customer_id", customerId);
        if (subDeleteErr) console.error("[Stripe webhook] subscription.deleted failed:", subDeleteErr.message);
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;
        console.warn("[Stripe webhook] payment failed for customer:", customerId);
        // Downgrade to free on failed renewal. Stripe handles dunning emails.
        const { error: payFailErr } = await supabase
          .from("profiles")
          .update({ plan: "free" })
          .eq("stripe_customer_id", customerId);
        if (payFailErr) console.error("[Stripe webhook] invoice.payment_failed update failed:", payFailErr.message);
        break;
      }

      case "invoice.payment_succeeded": {
        // No-op: plan is already set by checkout.session.completed /
        // customer.subscription.updated. Receipts are sent by Stripe.
        break;
      }

      default:
        break;
    }
  } catch (err) {
    console.error("[Stripe webhook] handler error:", err);
    return new Response("Handler error", { status: 500 });
  }

  return new Response("ok", { status: 200 });
}
