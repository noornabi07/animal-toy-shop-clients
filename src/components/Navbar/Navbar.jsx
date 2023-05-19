import React, { useContext } from 'react';
import logo from '../../../public/animal-2.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const hanldeLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className=''>
            <div className="navbar bg-teal-600	 text-white px-20 flex justify-between items-center">
                <div>
                    <img src={logo} className='w-12 rounded-full' alt="" />
                    <h2 className="text-3xl font-bold ml-3">Animal Toys</h2>
                </div>
                <div>
                    <Link className='px-3 hover:text-purple-700 hover:duration-700 text-xl font-semibold' to="/">Home</Link>
                    <Link className='px-3 hover:text-purple-700 hover:duration-700 text-xl font-semibold' to="/allToys">All Toys</Link>

                    <Link className='px-3 hover:text-purple-700 hover:duration-700 text-xl font-semibold' to="/blog">Blogs</Link>

                    {
                        user && <>
                            <Link className='px-3 hover:text-purple-700 hover:duration-700 text-xl font-semibold' to="/addToys">Add Toys</Link>

                            <Link className='px-3 hover:text-purple-700 hover:duration-700 text-xl font-semibold' to="/myToys">My Toys</Link>
                        </>
                    }



                    {/* daynamic toggle button */}

                    {
                        user ? <button onClick={hanldeLogOut} className='btn btn-secondary bg-purple-500'>LogOut</button> :
                            <Link to="/login"><button className="btn bg-purple-500 btn-secondary">Login</button></Link>
                    }


                </div>
                <div>
                    {
                        user && <div className='tooltip tooltip-left' data-tip={user.displayName}>
                            <img className='w-12 rounded-full' src={user.photoURL} alt="" />
                        </div>
                    }
                </div>
            </div>
         
        </div>
    );
};

export default Navbar;