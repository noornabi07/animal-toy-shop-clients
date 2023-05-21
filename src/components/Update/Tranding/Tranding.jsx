import React from 'react';
import logo1 from '../../../../public/teddy1.png'
import logo2 from '../../../../public/dainesour2.png'
import logo3 from '../../../../public/cat1.png'
import logo4 from '../../../../public/teddy3.png'
import logo5 from '../../../../public/dainesour4.png'
import logo6 from '../../../../public/horse3.png'

const Tranding = () => {
    return (
        <div className='px-5'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10' data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <img className='w-40 mx-auto h-32 p-4 rounded-full' src={logo1} alt="" />
                <img className='w-40 mx-auto h-32 p-4 rounded-full' src={logo2} alt="" />
                <img className='w-40 mx-auto h-32 p-4 rounded-full' src={logo3} alt="" />
                <img className='w-40 mx-auto h-32 p-4 rounded-full' src={logo4} alt="" />
                <img className='w-40 mx-auto h-32 p-4 rounded-full' src={logo5} alt="" />
                <img className='w-40 mx-auto h-32 p-4 rounded-full' src={logo6} alt="" />
            </div>
        </div>
    );
};

export default Tranding;