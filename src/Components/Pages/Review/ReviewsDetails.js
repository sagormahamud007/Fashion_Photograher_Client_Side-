import React, { useContext, useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import './ReviewDetails.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ReviewsDetails = () => {
    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://fashion-photographer-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <div>
                <h3 className='mt-5 text-center fw-bold'>User Review</h3>
            </div>
            <div className='review-container mt-5'>
                {
                    users.map(user => <SingleReview
                        key={user._id}
                        user={user}
                    ></SingleReview>)
                }
            </div>
            {
                user?.email ? <>
                    <Link to='/reviews'><button className='border-0 bg-info my-4 py-2 px-4 rounded'>My Review</button></Link>

                    <Link to='/addService'><button className='border-0 bg-info my-4 py-2 px-4 rounded ms-3'>Add Service</button></Link>
                </>
                    :
                    <Link to='/'><button className='border-0 bg-info my-4 py-2 px-4 rounded ms-3'>Go home</button></Link>
            }
        </div>

    );
};

export default ReviewsDetails;