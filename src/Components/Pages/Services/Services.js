import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
import './Services.css'

const Services = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='service-Container container mt-5'>

            {
                Services.map(service => <SingleService
                    key={service._id}
                    service={service}
                ></SingleService>)
            }
        </div>
    );
};

export default Services;