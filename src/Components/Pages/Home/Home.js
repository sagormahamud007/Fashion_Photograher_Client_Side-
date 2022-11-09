import React from 'react';
import DetailsPage from '../DetailsPage/DetailsPage';
import Card from './Card/Card';
import Carousels from './Carousels';
import MiddleSection from './MiddleSection';

const Home = () => {
    return (
        <div>
            <Carousels></Carousels>
            <MiddleSection></MiddleSection>
            <DetailsPage></DetailsPage>
            <Card></Card>
        </div>
    );
};

export default Home;