import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';




const SslSuccess = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transectionId = query.get('transectionId');
    const [order, setOrder] = useState({})
    useEffect(() => {
        fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/ssl/${transectionId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [transectionId])
    console.log(order)
    return (
        <div>
            {
                order?.paid && <div className="card w-96 bg-base-100 shadow-xl my-5 " style={{ marginLeft: '38%' }}>
                    <div className="card-body">

                        <h2 className="card-title">Your payment is successful</h2>
                        <p>Tran id: {order?.tran_id}</p>
                        <p>
                            Total amount: {order?.total_amount} Tk
                        </p>

                    </div>
                </div>
            }


        </div>
    );
};

export default SslSuccess;