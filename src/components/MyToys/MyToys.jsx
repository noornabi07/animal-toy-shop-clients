import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user])

    return (
        <div className='px-20 my-20'>
            <h2 className='font-bold text-4xl text-teal-500 text-center mb-7'>All <span className='text-red-500'>My</span> Toys</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className='font-bold text-red-600'>
                        <tr>
                            <th className='text-green-500'>No</th>
                            <th>Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Available Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myToys.map((toy, index) => <tr
                                key={toy._id}
                            >   <td className='text-green-500 font-bold'>{index + 1}</td>
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.subCategory}</td>
                                <td>{toy.quantity}</td>
                                <td>

                                    <label htmlFor="my-modal" className="btn btn-sm  mt-3 p-2">
                                        Update
                                    </label>
                                </td>
                                <td>
                                    <button className="btn btn-sm bg-red-600 mt-3">Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {/* modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-center mb-4 text-teal-600">Update Your Add Toy Info</h3>
                    <form>
                        <div>
                            <div className='flex gap-3 mb-3'>
                                <div>
                                    <label className='font-bold text-red-500'>Price</label>
                                    <input type="text" placeholder="Update Price" className="input input-bordered input-primary w-full max-w-xs" />
                                </div>
                                <div>
                                    <label className='font-bold text-red-500'>Quantity</label>
                                    <input type="text" placeholder="New Quantity" className="input input-bordered input-primary w-full max-w-xs" />
                                </div>
                            </div>
                            <label className='font-bold text-red-500'>Details</label>
                            <input type="text" placeholder="Message" className="input input-bordered input-primary w-full" />

                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Yay!</label>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default MyToys;