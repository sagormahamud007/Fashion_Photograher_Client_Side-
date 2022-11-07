import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousels.css'
import img from '../../../Assets/slider-img/home1-slideshow1.jpg'
import img1 from '../../../Assets/slider-img/image.jpg'

const Carousels = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block image w-100"
                        src="https://themes.pixelwars.org/photographer/wp-content/uploads/2016/11/02-1920x1424.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='top-50'>
                        <div>
                            <h3>Hi. I am Shagor Mahamud. I am a photographer.
                                I capture life.moments.happiness.emotions.action.impression.beauty.</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src={img1}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='top-25'>
                        <h3>HIMESH & JENIA</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src={img}
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