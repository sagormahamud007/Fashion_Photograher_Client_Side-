import React from 'react';
import './MiddleSection.css'
import img from '../../../Assets/header-img/images.jpg'
const MiddleSection = () => {
    return (
        <div className=' row text-center py-5 container overflow-hidden'>
            <div className='col-lg-6' data-aos="fade-down-left">
                <p>PHOTOGRAPHER IN BANGLADESHI</p>
                <h2 className='py-3 title'>FASHION PHOTOGRAPHER</h2>
                <div className='mb-3'> <img src={img} alt="" /></div>
                <p className='px-5'>Fashion photographer shagor mahamud is one of the most avant-garde image-makers in the 20th century. He ranked next to Helmut Newton and Guy Bourdin in his encapsulation of the 1970s zeitgeist.</p>
            </div>
            <div className='col-lg-6 overflow-hidden'>
                <div className="row gy-4">
                    <div className='col-lg-6' data-aos="fade-down-right">
                        <img className='w-100' src="https://img4.goodfon.com/wallpaper/big/9/86/olga-boyko-model-girl-brown-long-hair-face-blue-eyes-mouth-l.jpg" alt="" />
                    </div>
                    <div className='col-lg-6' data-aos="fade-down-left">
                        <img className='w-100' src="https://media.istockphoto.com/id/1263307689/photo/young-womans-fashion-style-young-pretty-fashioned-girl.jpg?s=612x612&w=0&k=20&c=vEeiMiW7T0NMaXnyL-gvQuJfMjnvHhAhy-5ra8fowP8=" alt="" />
                    </div>
                    <div className='col-lg-6' data-aos="fade-down-right">
                        <img className='w-100' src="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/EHkKIcZRAO.jpg" alt="" />
                    </div>
                    <div className='col-lg-6' data-aos="fade-down-left">
                        <img className='w-100' src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MiddleSection;