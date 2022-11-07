import React from 'react';
import Footer from '../../Shered/Footer/Footer';
import Header from '../../Shered/Header/Header';
import Carousels from './Carousels';
import MiddleSection from './MiddleSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Carousels></Carousels>
            <MiddleSection></MiddleSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;