import React from 'react';
import gellary1 from '../../../public/cat1.png'
import gellary2 from '../../../public/teddy1.png'
import gellary3 from '../../../public/horse1.png'
import gellary4 from '../../../public/dainesour1.png'
import gellary5 from '../../../public/teddy2.png'
import gellary6 from '../../../public/horse2.png'
import gellary7 from '../../../public/cat2.png'
import gellary8 from '../../../public/dainesour2.png'
import gellary9 from '../../../public/teddy3.png'
import gellary10 from '../../../public/horse3.png'
import gellary11 from '../../../public/cat3.png'
import gellary12 from '../../../public/dainesour4.png'

const Gallery = () => {
    return (
        <div className='lg:px-20 px-4 text-center'>
            <div className='text-center lg:mt-20 my-10 lg:mb-10'>
                <p className='font-bold lg:text-xl text-gray-500' data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500" >Because We Really Care About Your Toys</p>
                <h2 className='lg:text-5xl text-2xl mt-3 font-bold text-teal-500' data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500">Our Toys <span className='text-purple-500'>Gallery</span></h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-8 rounded-lg'>
                <img data-aos="zoom-in" data-aos-easing="linear"
                    data-aos-duration="1000" className='lg:w-60 lg:h-60 border-2 border-gray-400 p-3 hover:scale-110 hover:duration-500 mx-auto rounded-lg' src={gellary1} alt="" />
                <img data-aos="zoom-in" data-aos-easing="linear"
                    data-aos-duration="1000" className='lg:w-60 lg:h-60 border-2 border-gray-400 p-3 hover:scale-110 hover:duration-500 mx-auto rounded-lg' src={gellary2} alt="" />
                <img data-aos="zoom-in" data-aos-easing="linear"
                    data-aos-duration="1000" className='lg:w-60 lg:h-60 border-2 border-gray-400 p-3 hover:scale-110 hover:duration-500 mx-auto rounded-lg' src={gellary3} alt="" />
                <img data-aos="zoom-in" data-aos-easing="linear"
                    data-aos-duration="1000" className='lg:w-60 lg:h-60 border-2 border-gray-400 p-3 hover:scale-110 hover:duration-500 mx-auto rounded-lg' src={gellary4} alt="" />
                <img data-aos="zoom-in" data-aos-easing="linear"
                    data-aos-duration="1000" className='lg:w-60 lg:h-60 border-2 border-gray-400 p-3 hover:scale-110 hover:duration-500 mx-auto rounded-lg' src={gellary5} alt="" />
                <img data-aos="zoom-in" data-aos-easing="linear"
                    data-aos-duration="1000" className='lg:w-60 lg:h-60 border-2 border-gray-400 p-3 hover:scale-110 hover:duration-500 mx-auto rounded-lg' src={gellary7} alt="" />
                <img data-aos="zoom-in" data-aos-easing="linear"
                    data-aos-duration="1000" className='lg:w-60 lg:h-60 border-2 border-gray-400 p-3 hover:scale-110 hover:duration-500 mx-auto rounded-lg' src={gellary6} alt="" />
                <img data-aos="zoom-in" data-aos-easing="linear"
                    data-aos-duration="1000" className='lg:w-60 lg:h-60 border-2 border-gray-400 p-3 hover:scale-110 hover:duration-500 mx-auto rounded-lg' src={gellary8} alt="" />
                <img data-aos="zoom-in" data-aos-easing="linear"
                    data-aos-duration="1000" className='lg:w-60 lg:h-60 border-2 border-gray-400 p-3 hover:scale-110 hover:duration-500 mx-auto rounded-lg' src={gellary9} alt="" />
                <img data-aos="zoom-in" data-aos-easing="linear"
                    data-aos-duration="1000" className='lg:w-60 lg:h-60 border-2 border-gray-400 p-3 hover:scale-110 hover:duration-500 mx-auto rounded-lg' src={gellary10} alt="" />
                <img data-aos="zoom-in" data-aos-easing="linear"
                    data-aos-duration="1000" className='lg:w-60 lg:h-60 border-2 border-gray-400 p-3 hover:scale-110 hover:duration-500 mx-auto rounded-lg' src={gellary11} alt="" />
                <img data-aos="zoom-in" data-aos-easing="linear"
                    data-aos-duration="1000" className='lg:w-60 lg:h-60 border-2 border-gray-400 p-3 hover:scale-110 hover:duration-500 mx-auto rounded-lg' src={gellary12} alt="" />

            </div>
        </div>
    );
};

export default Gallery;