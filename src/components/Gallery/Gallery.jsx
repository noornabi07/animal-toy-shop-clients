import React from 'react';
import gellary1 from '../../../public/animal-toy-1.png'
import gellary2 from '../../../public/animal-toys-11.png'
import gellary3 from '../../../public/animal-toys-12.png'
import gellary4 from '../../../public/animal-toys-13.jpg'
import gellary5 from '../../../public/animal-toys-3.jpg'
import gellary6 from '../../../public/animal-toys-4.jpg'
import gellary7 from '../../../public/animal-toys-5.png'
import gellary8 from '../../../public/animal-toys-6.png'
import gellary9 from '../../../public/animal-toys-7.jpg'

const Gallery = () => {
    return (
        <div className='px-20 text-center'>
            <div className='text-center mt-20 mb-20'>
                <p className='font-bold text-xl'>Because We Really Care About Your Toys</p>
                <h2 className='text-5xl mt-3 font-bold text-teal-500'><span className='text-red-500'>Our</span> Toys <span className='text-purple-500'>Gallery</span></h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-teal-600 p-8 rounded-lg'>
                <img className='w-80 h-80 hover:scale-105 hover:duration-500 mx-auto rounded-lg' src={gellary1} alt="" />
                <img className='w-80 h-80 hover:scale-105 hover:duration-500 mx-auto rounded-lg' src={gellary2} alt="" />
                <img className='w-80 h-80 hover:scale-105 hover:duration-500 mx-auto rounded-lg' src={gellary3} alt="" />
                <img className='w-80 h-80 hover:scale-105 hover:duration-500 mx-auto rounded-lg' src={gellary4} alt="" />
                <img className='w-80 h-80 hover:scale-105 hover:duration-500 mx-auto rounded-lg' src={gellary5} alt="" />
                <img className='w-80 h-80 hover:scale-105 hover:duration-500 mx-auto rounded-lg' src={gellary6} alt="" />
                <img className='w-80 h-80 hover:scale-105 hover:duration-500 mx-auto rounded-lg' src={gellary7} alt="" />
                <img className='w-80 h-80 hover:scale-105 hover:duration-500 mx-auto rounded-lg' src={gellary8} alt="" />
                <img className='w-80 h-80 hover:scale-105 hover:duration-500 mx-auto rounded-lg' src={gellary9} alt="" />
                
            </div>
        </div>
    );
};

export default Gallery;