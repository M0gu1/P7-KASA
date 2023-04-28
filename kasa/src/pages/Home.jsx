import React from 'react';
import AccomodationsList from '../components/AccomodationsList';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Navigation />
            <AccomodationsList />
        </div>
    );
};

export default Home