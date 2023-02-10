import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react'
import { useState } from 'react';

const CheckoutForm = ({ data }) => {
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe()
    const elements = useElements()
    const { fees, patientEmail, healthInfo, _id } = data

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fees }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [fees]);

    console.log(clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error)
            setCardError(error.message)
        }

        else {
            setCardError('')
        }

        setSuccess('')
        setLoading(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: healthInfo,
                        email: patientEmail,
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }

        if (paymentIntent.status === "succeeded") {

            //store the payment in backend
            const payment = {
                fees,
                transactionId: paymentIntent.id,
                patientEmail,
                bookingId : _id
            }
            fetch('http://localhost:5000/payments', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setSuccess("Congrats! Your Payment Complet")
                    setTransactionId(paymentIntent.id)
                })
        }

        setLoading(false)

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '22px',
                                color: 'green',
                                '::placeholder': {
                                    color: 'green',
                                },
                            },
                            invalid: {
                                color: 'red',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-primary mt-4 text-white' type="submit" disabled={!stripe || !clientSecret || loading}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className="text-green-500 font-bold">{success}</p>
                    <p>Your TransactionId <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    )
}

export default CheckoutForm;