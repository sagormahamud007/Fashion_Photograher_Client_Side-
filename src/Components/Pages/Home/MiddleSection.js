import React from 'react';
import './MiddleSection.css'
import img from '../../../Assets/header-img/images.jpg'
const MiddleSection = () => {
    return (
        <div className='text-center py-5'>
            <p>PHOTOGRAPHER IN BANGLADESHI</p>
            <h2 className='py-3 title'>CREATIVE PHOTOGRAPHER</h2>
            <div className='mb-3'> <img src={img} alt="" /></div>
            <img className='images' src="https://olbia.wphunters.com/wp-content/uploads/2020/06/122@2x.png" alt="" />

            <p className='px-5'>Hi. I am Shagor   I am a photographer. I capture Wedding. life.moments  .happiness.emotions. <br />  action.impression.beauty.</p>
        </div>
    );
};

export default MiddleSection;