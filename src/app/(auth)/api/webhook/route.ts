import Stripe from 'stripe';

import { NextRequest, NextResponse } from 'next/server';

export const config = { api: { bodyParser: false } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: NextRequest) {
  const buf = await req.arrayBuffer();
  const body = Buffer.from(buf);
  const sig = req.headers.get('stripe-signature')!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 });
  }

  // Handle event types
  if (event.type === 'invoice.paid') {
    const invoice = event.data.object;
    // ✅ mark invoice paid in your DB
  }

  return NextResponse.json({ received: true });
}
