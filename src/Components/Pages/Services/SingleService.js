import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import './SingleService.css'

const SingleService = ({ service }) => {
    const { image, price, ratings, title, description, name } = service;
    return (
        <div className='mx-auto' data-aos="fade-down-right">
            <Card style={{ width: '22rem', height: '31rem' }}>
                <Card.Img variant="top" src={image} />
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
                        <button className='btn'>Details</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleService;