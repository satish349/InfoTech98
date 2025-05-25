import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: Request) {
  const { customerEmail, priceId } = await req.json();

  const session = await stripe.checkout.sessions.create({
    customer_email: customerEmail,
    line_items: [
      {
        price: priceId, // this is from Stripe Dashboard
        quantity: 1,
      },
    ],
    mode: 'subscription', // or 'payment' for one-time
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  return NextResponse.json({ url: session.url });
}
