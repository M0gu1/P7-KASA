import React from 'react';
import AccomodationsList from '../components/AccomodationsList';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Navigation />
            <AccomodationsList />
        </div>
    );
};

export default Home