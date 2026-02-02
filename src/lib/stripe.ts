import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
  typescript: true,
});

export const getOrCreateCustomerId = async (
  userId: string,
  email: string
) => {
  // TODO: Implementar esto cuando tengamos Firestore
  // Buscar si el usuario ya tiene un stripeCustomerId
  // Si no, crear uno en Stripe y guardarlo en Firestore

  // Por ahora, retornar undefined
  return undefined;
};
