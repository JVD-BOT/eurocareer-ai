import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig) {
    return new Response("Missing stripe-signature header", { status: 400 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    const e = err as { message?: string };
    console.error("[Stripe webhook] signature verification failed:", e?.message);
    return new Response(`Webhook error: ${e?.message}`, { status: 400 });
  }

  // Service-role client to bypass RLS for webhook updates
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.supabase_user_id;
        if (userId && session.customer) {
          await supabase.from("profiles").upsert({
            id: userId,
            plan: "pro",
            stripe_customer_id: session.customer as string,
          });
        }
        break;
      }

      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        const customerId = sub.customer as string;
        await supabase
          .from("profiles")
          .update({ plan: "free" })
          .eq("stripe_customer_id", customerId);
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;
        console.warn("[Stripe webhook] payment failed for customer:", customerId);
        // Could email the user here via Supabase Edge Function or similar
        break;
      }

      default:
        // Unhandled event type — ignore
        break;
    }
  } catch (err) {
    console.error("[Stripe webhook] handler error:", err);
    return new Response("Handler error", { status: 500 });
  }

  return new Response("ok", { status: 200 });
}
