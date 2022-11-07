import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousels.css'

const Carousels = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block image w-100"
                        src="https://olbia.wphunters.com/wp-content/uploads/2020/05/2000-vadim_dodon-328f92495269537df3539d069c3c39ce.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='top-50'>
                        <div>
                            <h3>PHILLIP & KATHY</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src="https://olbia.wphunters.com/wp-content/uploads/2020/05/2000-vadim_dodon-0f96872d1632497e24676b02acab0e95.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='top-25'>
                        <h3>HIMESH & JENIA</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src="https://media.istockphoto.com/id/1190043570/photo/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-wedding-tradition-sprinkled.jpg?s=612x612&w=0&k=20&c=_aCIW5-iOIiaDdqin_50kvBcbFbIxSULHHamPUILE0c="
                        alt="Third slide"
                    />

                    <Carousel.Caption className='top-50'>
                        <h3> Engagement time</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carousels;