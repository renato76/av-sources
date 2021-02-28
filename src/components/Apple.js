import React, { useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Payment from './Payment'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IP6q8FYl0iUsoekQauV8XQIdJ40AvrAjGceQxTiWLsMUhIBNEDzKZSJrnHNNGx2HyPQ3TU1TMU7KsCz2CeEVSIJ00XnSfKC87')


function Apple() {
  const [product] =  useState({
    name: 'Apple TV',
    price: 5.00,
  })

  const [subscribe, setSubscribe] = useState(false)

  const handleSubscribe = () => setSubscribe(true)

  
  return (
    <div className="apple-container">
      <h1>{product.name}</h1>
      <h2>£{product.price}.00 per month</h2>
      <button onClick={handleSubscribe} className="subscribe-btn">Subscribe</button>   
      {subscribe && <Elements stripe={stripePromise}>
        <Payment />
      </Elements>
      }
    </div>
  )
}

export default Apple
