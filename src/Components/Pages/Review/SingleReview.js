import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const SingleReview = ({ user }) => {
    const { userName, userEmail, userPhoto } = user;
    return (
        <div>
            <Card border="info" style={{ width: '16rem' }}>
                <Card.Header> <Image style={{ height: '80px', margin: '0 auto' }} roundedCircle src={userPhoto}></Image> </Card.Header>
                <Card.Body>
                    <Card.Title>{userName}</Card.Title>
                    <Card.Text>
                        {userEmail}
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

export default SingleReview;