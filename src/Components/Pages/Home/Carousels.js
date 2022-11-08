import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousels.css'
import img1 from '../../../Assets/slider-img/image.jpg'

const Carousels = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block image w-100"
                        src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHNscnxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption className='top-50'>
                        <div className='banner-inf'>
                            <h3>Professional Photographer </h3>
                            <button className='py-2 px-4 border-0 bg-info rounded text-light'>HIRE ME</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src='https://themes.pixelwars.org/photographer/wp-content/uploads/2016/11/02-1920x1424.jpg'
                        alt="Second slide"
                    />

                    <Carousel.Caption className='top-25'>

                        <div className='banner-info'>
                            <h3>I capture Wedding. life.moments.happiness.emotions. <br /> action.impression.beauty.</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src='https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&w=1000&q=80'
                        alt="Third slide"
                    />

                    <Carousel.Caption className='top-50'>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src={img1}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='top-50'>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carousels;