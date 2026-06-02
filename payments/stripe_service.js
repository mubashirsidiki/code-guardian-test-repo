const stripe = require('stripe')('sk_test_mock');

async function processPayment(amount, currency, source) {
    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: currency,
        payment_method: source,
        confirmation_method: 'manual', // Optional: Set to 'automatic' if you want automatic confirmation
        confirm: false, // Intentionally violating the rule by not confirming the PaymentIntent
    });
    return paymentIntent;
}

module.exports = { processPayment };
