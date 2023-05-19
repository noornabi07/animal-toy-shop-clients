import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }, [])


    const handleSearch = () => {
        fetch(`http://localhost:5000/searchByToyName/${search}`)
        .then(res => res.json())
        .then(data => {
            setAllToys(data)
        })
    }


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
                                <th>Name</th>
                                <th>Toy Name</th>
                                <th>Sub Category</th>
                                <th>Available Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allToys.map(toy => <tr
                                    key={toy._id}
                                >
                                    <td className='text-red-500'>{toy.sellerName}</td>
                                    <td>{toy.toyName}</td>
                                    <td>{toy.subCategory}</td>
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