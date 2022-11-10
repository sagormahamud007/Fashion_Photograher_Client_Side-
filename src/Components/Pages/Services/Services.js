import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
import './Services.css'
import AddUserService from './AddUserService';
import useTitle from '../../useTitle/UseTitle';


const Services = () => {
    const [Services, setServices] = useState([]);



    useEffect(() => {
        fetch('https://fashion-photographer-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    useTitle('Services')
    return (
        <div>
            <div className='service-Container container mt-5'>

                {
                    Services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    >
                    </SingleService>)
                }
            </div>
            <div className='mt-5'>
                <AddUserService></AddUserService>
            </div>
        </div>
    );
};

export default Services;