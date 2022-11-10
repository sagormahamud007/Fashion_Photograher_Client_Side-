import React, { useContext } from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const MyReviews = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const { email, photoURL, displayName } = user;
    return (
        <div className='container my-5'>
            <h2 className='text-info fw-bold fs-3'>My Review</h2>
            <Card border="info" style={{ width: '16rem' }}>
                <Card.Header> <Image style={{ height: '90px', margin: '0 auto' }} roundedCircle src={photoURL}></Image> </Card.Header>
                <Card.Body>
                    <Card.Title>{displayName}</Card.Title>
                    <Card.Text>
                        {email}
                    </Card.Text>
                    <Card.Text>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <span>$ 5</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyReviews;