import React, { useContext } from 'react';
import logo from '../../../public/animal-2.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const hanldeLogOut = () =>{
        logOut()
        .then()
        .catch(error =>{
            console.log(error.message)
        })
    }

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

                    {/* daynamic toggle button */}

                    {
                        user ? <button onClick={hanldeLogOut} className='btn btn-primary'>LogOut</button> : 
                        <Link to="/login"><button className="btn btn-primary">Login</button></Link>
                    }
                        

                </div>
                <div className="flex-none">
                    {
                        user && <div className=''>
                            <img className='w-12 rounded-full' src={user.photoURL} alt="" />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;