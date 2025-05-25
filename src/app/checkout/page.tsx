// app/checkout/page.tsx
'use client'

export default function CheckoutPage() {
  const handleCheckout = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      body: JSON.stringify({
        customerEmail: 'john@example.com',
        priceId: 'price_1XYZabc123' // from Stripe
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <button className="flex m-auto text-white" onClick={handleCheckout}>Subscribe Now</button>
  );
}
