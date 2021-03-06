import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { popupNotification } from './notification'

const Payment = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement)

    // Use card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })

    if (error) {
      console.log('[error]', error)
      // popup error message if incorrect details provided
      popupNotification('Incorrect card details')
    } else {
      console.log('[PaymentMethod]', paymentMethod)
      // pop up notification to say you have sucessfully subscribed
      popupNotification('You have subscribed!')
      // call the handleSubscribed function to set subscribed to true 
      // which then renders the premium content!
      handleSubscribed()
    }
  }

  const [subscribed, setSubscribed] = useState(false)
  
  const handleSubscribed = () => setSubscribed(true)
  return (
    <div className="payment-container">
      <div className="payment">
        <div className="payment__container">
          {/* a simple form to collect some customer details */}
          <form onSubmit={handleSubmit}>   
            <div className="field">
              <div className="control">
                <input
                  className="name input"
                  placeholder="Name"
                  name="name" 
                />
              </div>
              <div className="control">
                <input
                  className="email input"
                  placeholder="Email"
                  name="email" 
                />
              </div>
              <div className="control">
                <input
                  className="phone input "
                  placeholder="Phone"
                  name="phone" 
                />
              </div>           
            </div>  
            {/* this is the cardElement from Stripe */}
            <CardElement
              className="card-element"
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
            <button className="pay-btn" type="submit" disabled={!stripe}>
              PAY
            </button>
          </form>
        </div>
      </div>
      {subscribed && 
          <div className="videos">
            <h2>Subscribed Content</h2>
            <p>Only available if valid card details provided</p>
          </div>
      }
    </div>
  )
}
export default Payment