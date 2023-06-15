import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
        'pk_test_51NGYWVH8LdxbiJhN8EKV0OriF0kiupMzr0ClEQS1B3Yy6CJPh3iNjxKMZmB5nwPeAPNxuB3Qrj9tANxGV6A9LW3H00KxX8DITc'
    );
  }

  return stripePromise;
};
