import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    const { toyName, sellerName, price, email, message, rating, quantity, photo } = details
    console.log(details)
    
    return (
        <div className='px-20 my-10 w-3/4 mx-auto'>
            <h2 className='text-center text-3xl font-bold text-purple-500 mb-5'>Details For About: <span className='text-teal-600'>{toyName}</span></h2>
            <div className="card card-side  border-2 border-teal-400 p-5">
                <figure><img className='w-full h-80 rounded-lg ml-10' src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold text-teal-500">Seller Name: <span className='text-purple-400 font-semibold'>{sellerName}</span></h2>
                    <h2 className="text-xl font-semibold text-teal-500">Toy Name: <span className='text-purple-400 font-semibold'>{toyName}</span></h2>
                    <h2 className="text-xl font-semibold text-teal-500">Email: <span className='text-purple-400 font-semibold'>{email}</span></h2>
                    <h2 className="text-xl font-semibold text-teal-500">Rating: <span className='text-purple-400 font-semibold'>{rating}</span></h2>
                    <h2 className="text-xl font-semibold text-teal-500">Price: <span className='text-purple-400 font-semibold'>{price}</span></h2>
                    <h2 className="text-xl font-semibold text-teal-500"> Available Quantity <span className='text-purple-400 font-semibold'>{quantity}</span></h2>
                    <p className='text-xl font-semibold text-teal-500'>Details: <span className='text-purple-400 font-semibold'>{message}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Details;