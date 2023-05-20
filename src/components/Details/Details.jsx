import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    const { toyName, sellerName, price, email, message, rating, quantity, photo } = details

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className='px-20 my-10 w-3/4 mx-auto'>
            <h2 className='text-center text-3xl font-bold text-purple-500 mb-5'>Details For About: <span className='text-teal-600'>{toyName}</span></h2>
            <div className="card card-side  border-2 bg-teal-300 border-teal-300 p-5">
                <figure><img className='w-full h-80 rounded-lg ml-10' src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2><span className="font-semibold text-xl text-orange-500">Seller Name:</span> <span className='text-fuchsia-600 font-semibold'>{sellerName}</span></h2>
                    <h2 ><span className=" font-semibold text-xl text-orange-500">Toy Name:</span> <span className='text-fuchsia-600 font-semibold'>{toyName}</span></h2>
                    <h2 ><span className=" font-semibold text-xl text-orange-500">Email: </span><span className='text-fuchsia-600 font-semibold'>{email}</span></h2>
                    <h2 ><span className=" font-semibold text-xl text-orange-500">Rating: </span><span className='text-fuchsia-600 font-semibold'>{rating} Star
                    </span></h2>
                    <h2 ><span className=" font-semibold text-xl text-orange-500">Price:</span> <span className='text-fuchsia-600 font-semibold'>{price}</span></h2>
                    <h2 ><span className=" font-semibold text-xl text-orange-500">Available Quantity: </span> <span className='text-fuchsia-600 font-semibold'>{quantity}</span></h2>
                    <p ><span className=' font-semibold text-xl text-orange-500'>Details:</span> <span className='text-fuchsia-600 font-semibold'>{message}</span></p>


                    <button onClick={handleBack} className="btn w-1/3 btn-active">Back Home</button>

                </div>
            </div>
        </div>
    );
};

export default Details;