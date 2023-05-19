import React from 'react';

const Toys = ({ toy }) => {
    // console.log(toy)
    const { photo, price, rating, toyName } = toy;
    return (
        <div>
            <div className="card w-96 bg-teal-500 border-2">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl w-72 h-80 hover:scale-110 hover:duration-500" />
                </figure>
                <div className=" pl-10 mb-8">
                    <h2 className="font-bold text-xl mt-3 text-center mb-5 text-red-500"><span className='font-bold text-xl text-white'>Name:</span> {toyName}</h2>
                    <div className='flex items-center justify-between pr-4'>
                        <div>
                            <p><span className='font-bold text-xl text-white'>Price:</span> <span className='text-red-500 text-xl font-semibold'>{price}</span></p>
                            <p className='mb-4'><span className='font-bold text-xl text-white'>Rating:</span> <span className='text-red-500 font-semibold'>{rating}</span></p>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-primary bg-blue-700	">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toys;