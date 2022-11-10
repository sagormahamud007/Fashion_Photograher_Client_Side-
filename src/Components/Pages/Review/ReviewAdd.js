import React, { useEffect, useState } from 'react';
import Review from './Review';

const ReviewAdd = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://fashion-photographer-server.vercel.app/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            {
                orders.map(order => <Review
                    key={order._id}
                    order={order}
                ></Review>)
            }
        </div>
    );
};

export default ReviewAdd;