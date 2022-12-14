import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';
import ReviewsDetails from '../Review/ReviewsDetails';


const ServiceDetails = () => {
    const service = useLoaderData()
    const { image, price, ratings, title, description, hours, imgCount, name } = service;
    return (
        <div className="row container">
            <div className="col-lg-6">
                <Card>
                    <Card.Header className='fs-3 fw-bold text-center'>{name}</Card.Header>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className='fs-3'>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            Price : ${price}
                        </Card.Text>
                        <Card.Text>
                            Hours: {hours}
                        </Card.Text>
                        <p>
                            <FaStar className='text-warning'></FaStar>
                            <FaStar className='text-warning'></FaStar>
                            <FaStar className='text-warning'></FaStar>
                            <FaStar className='text-warning'></FaStar>
                            <FaStar className='text-warning'></FaStar>
                            {ratings}
                        </p>
                        <Link to='/services'><Button className='px-5' variant="info">Go beak</Button></Link>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-lg-6">
                <ReviewsDetails></ReviewsDetails>
            </div>
        </div>
    );
};

export default ServiceDetails;