import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import OderRow from '../MyReviews/OderRow';

const AddUserService = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://fashion-photographer-server.vercel.app/orders?=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id => {
        const deleted = window.confirm('Are you sure')
        if (deleted) {
            fetch(`https://fashion-photographer-server.vercel.app/orders/${id}`, {
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
        <div>
            <div>
                <div className='bg-info container py-3 rounded order-container'>
                    {
                        orders.map(order => <OderRow
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                        ></OderRow>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AddUserService;