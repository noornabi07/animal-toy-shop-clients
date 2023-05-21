import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useSetTitle from '../../Hook/SetTitle/SetTitle';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('https://animal-toys-server-five.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }, [])


    const handleSearch = () => {
        fetch(`https://animal-toys-server-five.vercel.app/searchByToyName/${search}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }

    // useSetTitle('all toys')
    return (
        <div>
            <div className='px-20 my-10'>
                <h2 className='font-bold text-4xl text-teal-500 text-center mb-7'>All <span className='text-red-500'>Toys</span> Shop</h2>

                <div className='text-center mb-5'>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                    <button onClick={handleSearch} className="btn ml-2 btn-primary bg-green-600 max-w-xs">Search</button>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className='font-bold text-cyan-600 text-xl'>
                            <tr>
                                <th>Serial</th>
                                <th>Name</th>
                                <th>Toy Name</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allToys.map((toy, index) => <tr
                                    key={toy._id}
                                >
                                    <td className='text-green-500 font-bold'>{index + 1}</td>
                                    <td className='text-purple-500'>{toy.sellerName}</td>
                                    <td>{toy.toyName}</td>
                                    <td>{toy.subCategory}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <Link to={`/details/${toy._id}`}>
                                        <button className="btn btn-sm bg-teal-600 mt-3">View Details</button>
                                    </Link>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;