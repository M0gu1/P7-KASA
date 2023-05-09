import React from 'react'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery';
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            {/* affichage du header, du banner et de la gallery sur la home */}
            <Header />
            <Banner />
            <Gallery />
        </div>
    );
};

export default Home