import React from 'react'
import AccomodationsList from '../components/AccomodationsList'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <AccomodationsList />
        </div>
    );
};

export default Home