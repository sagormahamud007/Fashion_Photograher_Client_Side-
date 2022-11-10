import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';
import { Link } from 'react-router-dom';
const Card = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://fashion-photographer-server.vercel.app/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='service-Container container mt-5'>

                {
                    Services.map(service => <SingleCard
                        key={service._id}
                        service={service}
                    ></SingleCard>)
                }
            </div>
            <div className='text-center my-4'>
                <Link to='/services'> <button className='bg-info py-2 px-4 rounded border-0 text-light'>See All</button></Link>

            </div>
        </div>
    );
};

export default Card;