import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CategoryToys from '../CategoryToys/CategoryToys';
import Process from '../Proccess/Process';
import Center from '../Center/Center';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryToys></CategoryToys>
            <Process></Process>
            <Center></Center>
        </div>
    );
};

export default Home;