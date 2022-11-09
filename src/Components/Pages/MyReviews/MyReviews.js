import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import OderRow from './OderRow';
import './OrderRow.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/orders?=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id => {
        const deleted = window.confirm('Are you sure')
        if (deleted) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('Deleted successfully')
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining)
                    }
                })

        }
    }
    return (
        <div className='bg-info container py-3 rounded order-container'>
            {
                orders.map(order => <OderRow
                    key={order._id}
                    order={order}
                    handleDelete={handleDelete}
                ></OderRow>)
            }
        </div>
    );
};

export default MyReviews;