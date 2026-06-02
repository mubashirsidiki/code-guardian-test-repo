const stripe = require('stripe')('sk_test_mock');

async function processPayment(amount, currency, source) {
    // Deprecated: Stripe charges are deprecated. Upgrade to paymentIntents instead.
    const charge = await stripe.charges.create({
        amount: amount,
        currency: currency,
        source: source,
        description: 'Test platform transaction'
    });
    return charge;
}

module.exports = { processPayment };
