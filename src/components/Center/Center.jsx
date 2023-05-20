import React from 'react';
import dainesor from '../../../public/daynesor.png'
import cat from '../../../public/cat1.png'
import horse from '../../../public/horse1.png'
import teddy from '../../../public/teddy1.png'
import star from '../../../public/star.png'
import { Link } from 'react-router-dom';

const Center = () => {
    return (
        <div className='lg:px-20 px-4 my-20'>
            <div className='lg:flex items-center justify-between gap-20'>
                <div className='grid grid-cols-2 gap-4 items-center'>
                    <img className='lg:w-[700px]' src={dainesor} alt="" />
                    <img className='lg:w-[700px]' src={cat} alt="" />
                    <img className='lg:w-[700px]' src={horse} alt="" />
                    <img className='lg:w-[700px]' src={teddy} alt="" />
                </div>
                <div className='mt-5 lg:mt-0'>
                    <h4 className='text-xl font-bold text-center lg:text-left text-gray-500'>Quality & Experience</h4>
                    <h2 className='text-5xl my-4 font-bold text-teal-600'><span className='text-orange-600 '>Toys Grooming</span> & Care Center</h2>
                    <p className='text-gray-500  font-semibold mb-5'>Regularly clean the all toys to remove dust and dirt. Use a soft cloth or sponge dampened with mild soapy water. Avoid immersing electronic or battery-operated toys in water.
                        Store all toys in a clean and dry place. Keep them away from direct sunlight, extreme temperatures, or humidity, as these conditions can damage the materials or cause fading.</p>

                    <div className='flex gap-3 mb-2'>
                        <img className='w-8 h-8' src={star} alt="" />
                        <p className='text-gray-400'>Interactive Dinosaur Toys</p>
                    </div>
                    <div className='flex gap-3 mb-2'>
                        <img className='w-8 h-8' src={star} alt="" />
                        <p className='text-gray-400'>Interactive Teddy Toys</p>
                    </div>
                    <div className='flex gap-3 mb-2'>
                        <img className='w-8 h-8' src={star} alt="" />
                        <p className='text-gray-400'>Interactive Cat Toys</p>
                    </div>
                    <div className='flex gap-3'>
                        <img className='w-8 h-8' src={star} alt="" />
                        <p className='text-gray-400'>Interactive Horse Toys</p>
                    </div>

                    <Link to="/allToys">
                        <button className='bg-slate-800 py-3 mt-3 px-8 text-white font-semibold text-xl rounded-3xl'>See All Toys</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Center;