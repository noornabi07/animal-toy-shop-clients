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
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myToys.map(toy => <tr
                                key={toy._id}
                            >
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.subCategory}</td>
                                <td>{toy.quantity}</td>
                                <Link to="/viewDetails">
                                    <button className="btn btn-sm bg-teal-600 mt-3">Small</button>
                                </Link>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;