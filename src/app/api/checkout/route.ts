import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe. Handle case where STRIPE_SECRET_KEY might be missing in demo environments.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2026-01-28.clover',
});

export async function POST(request: Request) {
  try {
    // In a real application, ensure the user is authenticated here.
    
    if (!process.env.STRIPE_SECRET_KEY) {
       return NextResponse.json({ 
         error: 'Stripe is not configured in this environment. Please set STRIPE_SECRET_KEY.' 
       }, { status: 500 });
    }

    const { origin } = new URL(request.url);

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'SpecSentry Paid License (One-Time)',
              description: 'Unlock unlimited specs, scheduled monitoring, and PR automation.',
            },
            unit_amount: 14900, // $149.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/dashboard?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#pricing`,
    });

    if (!session.url) {
      throw new Error('Failed to create Stripe session URL');
    }

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  }
}
