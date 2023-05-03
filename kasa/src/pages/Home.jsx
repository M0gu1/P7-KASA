import React from 'react'
import AccomodationsList from '../components/AccomodationsList'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <AccomodationsList />
            <Footer />
        </div>
    );
};

export default Home