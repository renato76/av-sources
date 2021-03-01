import React, { useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Payment from './Payment'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IP6q8FYl0iUsoekQauV8XQIdJ40AvrAjGceQxTiWLsMUhIBNEDzKZSJrnHNNGx2HyPQ3TU1TMU7KsCz2CeEVSIJ00XnSfKC87')


// a function that storers an object with product details
function Apple() {
  const [product] =  useState({
    name: 'Apple TV',
    price: 5.00,
  })

  // using React useState hooks to store subscribe button state,
  // initially set to false so you cannot see the checkout form
  const [subscribe, setSubscribe] = useState(false)

  // then when the handleSubscribe function is called, it sets subscribe to true,
  // and opens up the checkout form
  const handleSubscribe = () => setSubscribe(true)

  return (
    <div className="container">
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
          <h2>£{product.price.toFixed(2)} per month</h2>
        </div>
        <button onClick={handleSubscribe} className="subscribe-btn">Subscribe</button>   
        {subscribe && <Elements stripe={stripePromise}>
          <Payment />
        </Elements>
        }
      </div>
      <div className="tabs">
        <div className="tab">
          <button className="tabs-btn">Photos</button>
        </div>
        <div className="tab">
          <button className="tabs-btn">Music</button>
        </div>
        <div className="tab">
          <button className="tabs-btn">Settings</button>
        </div>
      </div>
    </div>
  )
}

export default Apple
