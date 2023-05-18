import React, { useContext } from 'react';
import logo from '../../../public/animal-2.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className=''>
            <div className="navbar bg-teal-600	 text-white px-20">
                <div className="flex-1">
                    <img src={logo} className='w-12 rounded-full' alt="" />
                    <h2 className="text-3xl font-bold ml-3">Animal Toys</h2>
                </div>
                <div className='flex-1'>
                    <Link className='px-3 hover:text-purple-700 hover:duration-700 text-xl font-semibold' to="/">Home</Link>
                    <Link className='px-3 hover:text-purple-700 hover:duration-700 text-xl font-semibold' to="/alltoys">All Toys</Link>
                    <Link className='px-3 hover:text-purple-700 hover:duration-700 text-xl font-semibold' to="/blog">Blogs</Link>
                    <Link to="/login"><button className="btn btn-primary">Login</button></Link>
                </div>
                <div className="flex-none">
                <p className='mr-3'>{user?.name}</p>
                    <div className="dropdown dropdown-end">
                            <div className="w-10 rounded-full">  
                                <img className='rounded-full' src={logo} />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;