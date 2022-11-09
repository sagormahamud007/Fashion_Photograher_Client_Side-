import React from 'react';
import DetailsPage from '../DetailsPage/DetailsPage';
import Carousels from './Carousels';
import MiddleSection from './MiddleSection';

const Home = () => {
    return (
        <div>
            <Carousels></Carousels>
            <MiddleSection></MiddleSection>
            <DetailsPage></DetailsPage>
        </div>
    );
};

export default Home;