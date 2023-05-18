import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CategoryToys from '../CategoryToys/CategoryToys';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryToys></CategoryToys>
        </div>
    );
};

export default Home;