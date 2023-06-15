import Stripe from 'stripe';

export const stripe = new Stripe( process.env.STRIPE_SECRET_KEY || 'sk_test_51NGYWVH8LdxbiJhNcKi4r7IsG8sMFJVeOGD8cRbjLiVUOldpVu1AqrGBxqvGFwhPxbCy1rFEvLvs2BwI9y8I2vbw00HaQHWida',
  {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2022-11-15',
    // Register this as an official Stripe plugin.
    // https://stripe.com/docs/building-plugins#setappinfo
    appInfo: {
      name: 'Next.js Subscription Starter',
      version: '0.1.0'
    }
  }
);
