/* eslint-disable no-case-declarations */
const app = require('express')()

// Use body-parser to retrieve the raw body as a buffer
const bodyParser = require('body-parser')

// Match the raw body to content type application/json
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (request, response) => {
  const event = request.body

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break
    case 'payment_method.attached':
      const paymentMethod = event.data.object
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  // Return a response to acknowledge receipt of the event
  response.json({ received: true })
})

app.listen(8000, () => console.log('Running on port 8000'))