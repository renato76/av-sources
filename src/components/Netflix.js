import React, { useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Payment from './Payment'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IP6q8FYl0iUsoekQauV8XQIdJ40AvrAjGceQxTiWLsMUhIBNEDzKZSJrnHNNGx2HyPQ3TU1TMU7KsCz2CeEVSIJ00XnSfKC87')

function Netflix() {
  const [product] =  useState({
    name: 'Netflix',
    price: 9.99,
  })

  const [subscribe, setSubscribe] = useState(false)

  const handleSubscribe = () => setSubscribe(true)
  return (
    <div className="apple-container">
      <div className="home-btn">
        <Link to={'/'}>
          <FaHome />
        </Link>
      </div>
      <div className="title">
        <h1>{product.name}</h1>
      </div>
      <div className="price">
        <h2>£{product.price} per month</h2>
      </div>
      <button onClick={handleSubscribe} className="subscribe-btn">Subscribe</button>   
      {subscribe && <Elements stripe={stripePromise}>
        <Payment />
      </Elements>
      }
    </div>
  )
}

export default Netflix
