import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Toys = ({ toy }) => {
    const { user } = useContext(AuthContext)
    const { photo, price, rating, toyName, _id } = toy;

    const notify = () =>{
        if(!user){
            Swal.fire(
                'Not Allow?',
                'Login First',
                'question'
              )
              return;
        }
    }


    return (
        <div>
            <div className="card lg:w-96 bg-teal-500 border-2">
                <figure className=" pt-5">
                    <img src={photo} alt="Shoes" className="rounded-xl w-60 h-60 hover:scale-110 hover:duration-500" />
                </figure>
                <div className="mx-16 mb-8 ">
                    <h2 className="font-semibold text-purple-500 mt-3"><span className='text-white'>Name:</span> {toyName}</h2>
                    <div className=''>
                        <div>
                            <p><span className='font-bold text-xl text-white'>Price:</span> <span className='text-lime-400 text-xl font-semibold'>{price}</span></p>
                            <p className=' flex items-center justify-between px-4'>
                                <div className="rating -ml-4 mt-2">
                                    <p className='text-orange-400 mr-4  text-xl  font-bold'>{rating}</p>
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />

                                </div>


                                <div className="card-actions">
                                    <Link to={`/details/${_id}`}>
                                        <button onClick={notify} className="btn btn-sm">Details</button>
                                    </Link>
                                </div>
                            </p>


                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Toys;