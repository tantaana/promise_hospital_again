import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51MZFPJC9H4A9wcw7ttPR67bHNPc0FtN7KzI8pzYthdf7OEvGxxLOlRDK0iklW5C1VFfnMsPoaLuvKBHLXfKP2whx00WCx0rHNf');
// console.log(stripePromise)
const Payment = () => {
    const data = useLoaderData()
    const { name, price } = data;
    return (
        <div className='flex justify-center items-center bg-gray-100 h-5/6'>
            <div className='w-2/4 bg-gray-200 p-5 rounded-sm'>
                <h2 className='text-xl font-semibold mb-2'>Payment for {name}</h2>
                <p className='text-xl'>Please Pay <strong>${price}</strong></p>
                <div className='w-96 mt-5'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>
                </div>
            </div>
        </div>
    )
}

export default Payment