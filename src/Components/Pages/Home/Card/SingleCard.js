import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleCard = ({ service }) => {
    const { image, price, ratings, title, description, _id } = service;
    return (
        <div className='mx-auto shadow-lg' data-aos="fade-down-right">
            <Card style={{ width: '22rem', height: '31rem' }}>
                <PhotoProvider>
                    <PhotoView src={image}><img src={image} alt="" /></PhotoView>
                </PhotoProvider>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 100)}...
                    </Card.Text>
                    <Card.Text>
                        Price : ${price}
                    </Card.Text>
                    <p>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        {ratings}</p>
                    <div className='details-btn'>
                        <Link to={`/services/${_id}`}><button className='btn'>View Details</button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCard;