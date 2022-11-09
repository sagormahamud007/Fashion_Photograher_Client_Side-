import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState({})


    useEffect(() => {
        fetch(`http://localhost:5000/orders?=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    return (
        <div>
            <h1>This is my MyReviews component</h1>
            <h3>You have {orders.length}</h3>
        </div>
    );
};

export default MyReviews;