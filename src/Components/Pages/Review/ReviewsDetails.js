import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import './ReviewDetails.css'

const ReviewsDetails = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
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
            <button className='border-0 bg-info my-4 py-2 px-4 rounded'>Add Review</button>
        </div>

    );
};

export default ReviewsDetails;